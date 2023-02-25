<script lang="ts" setup>
defineEmits(['callback'])
defineProps<{
  bgColor: string
}>()
</script>

<template>
  <button
    :class="[`bg-${bgColor}`]"
    class="w-full text-white py-3 rounded-lg text-semibold text-xs"
    @click="$emit('callback')"
  >
    <slot />
  </button>
</template>