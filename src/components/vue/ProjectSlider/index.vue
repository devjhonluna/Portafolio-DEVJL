<template>
  <SliderRoot ref="sliderRef" class="slider" @mouseenter="pause" @mouseleave="play">
    <SliderWrapper class="slider-wrapper gap-x-2">
      <SliderItem v-for="(item, index) in doubledProyectos" :key="`${item.id}-${index}`">
        <ProjectCard :item="item" />
      </SliderItem>
    </SliderWrapper>
  </SliderRoot>
</template>

<script setup>
import { computed } from "vue";
import { SliderItem, SliderRoot, SliderWrapper } from "../ui/slider";
import ProjectCard from "./ProjectCard.vue";

import proyectoslist from "@utils/projectlist";
import { useAutoscroll } from "@utils/composables/useAutoscroll";

const { elementRef: sliderRef, play, pause } = useAutoscroll(1.5);
// Duplicamos la lista para crear el efecto de loop infinito
const doubledProyectos = computed(() => [...proyectoslist, ...proyectoslist]);
</script>
