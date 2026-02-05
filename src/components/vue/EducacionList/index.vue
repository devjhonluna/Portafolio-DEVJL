<template>
  <ListViewRoot class="flex flex-wrap gap-2.5">
    <ListViewItem v-for="item in list" :key="item.id" class="[&>span]:font-bold">
      <div class="flex flex-col">
        <span class="font-bold">{{ item.titulo }}</span> - {{ item.institucion }}
        {{ item.periodo }}
      </div>
    </ListViewItem>
    <ListViewItem class="inline-flex items-center justify-center mx-auto">
      <Btn
        class="btn btn-ghost btn-block btn-sm"
        tag="a"
        href="https://www.linkedin.com/in/jhon-alexander-luna-gonz%C3%A1lez/details/certifications/"
        target="_blank"
        rel="noopener noreferrer"
        >ver todos mis certificados</Btn
      >
    </ListViewItem>
  </ListViewRoot>
</template>

<script setup>
import Btn from "@components/vue/ui/btn/index.vue";
import { ListViewItem, ListViewRoot } from "@components/vue/ui/listview";

const props = defineProps({
  list: Object,
});
</script>
