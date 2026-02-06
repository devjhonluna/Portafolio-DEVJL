<template>
  <div ref="cardRef" class="card h-full">
    <img :src="item.img.src" :alt="item.title" />
    <article class="card-body">
      <h3 class="font-bold">{{ item.titulo }}</h3>
      <p class="">{{ item.descripcion }}</p>
      <div class="flex justify-between items-center">
        <a :href="item.repo" target="_blank" rel="noopener noreferrer">
          <Github width="20" height="20" />
        </a>
        <a :href="item.demo" target="_blank" rel="noopener noreferrer">
          <Linkout width="20" height="20" />
        </a>
      </div>
    </article>
  </div>
</template>

<script setup>
import Github from "@assets/icons/socialmedia/github.svg?component";
import Linkout from "@assets/icons/utils/linkout.svg?component";
import { useTilt } from "@utils/composables/useTilt";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { elementRef: cardRef } = useTilt({
  max: 10, // Inclinación suave
  scale: 1.02, // Ligero zoom
});
</script>
