<template>
    <component :is="isTag" :class="class">
    <slot />
    </component>
</template>

<script setup>
import { computed, } from 'vue';

const props = defineProps({
    tag: {
        type: [String, Object],
        default: 'button'
    },
    children:String,
    class:String,
});


const isTag = computed(() => {
    return props.tag==='a' ? 'a' : 'button'
 })
</script>
