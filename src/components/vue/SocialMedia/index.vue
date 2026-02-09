<template>
  <ListViewRoot class="grid grid-cols-1 @xs:grid-cols-2 @md:grid-cols-3">
    <ListViewItem class="" v-for="item in socialMediaList" :key="item.id">
      <Btn
        tag="a"
        class="btn btn-sm btn-ghost"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="item.text"
      >
        <component aria-hidden="true" :is="item.icon" class="shrink-0 size-4" />
        <span>{{ item.text }}</span>
      </Btn>
    </ListViewItem>
  </ListViewRoot>
</template>

<script setup>
import Btn from "@components/vue/ui/btn/index.vue";
import { ListViewItem, ListViewRoot } from "@components/vue/ui/listview";
import socialMediaList from "@utils/socialmedia";
</script>
