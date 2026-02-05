<template>
  <h2>Habilidades blandas</h2>
  <ListViewRoot class="flex flex-col gap-4 *:flex *:gap-3">
    <ListViewItem class="" v-for="item in list" :key="item.id">
      <span>{{ item.icon }}</span>
      <p>{{ item.skill }}</p>
    </ListViewItem>
  </ListViewRoot>
</template>

<script setup>
import { ListViewRoot, ListViewItem } from "@components/vue/ui/listview";

const props = defineProps({
  list: Object,
});
</script>
