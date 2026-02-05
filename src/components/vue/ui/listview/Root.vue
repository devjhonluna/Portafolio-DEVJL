<template>
    <component :is="isAs">
      <slot></slot>
    </component>
</template>


<script setup>

  import { computed, } from 'vue';
  const props = defineProps({
    as:{
      type: [String, Object],
        default: 'ul'
    },
  });

  const isAs=computed(()=>{
    return props.as==='ol' ? 'ol' : 'ul'
  })

</script>

