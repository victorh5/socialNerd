<script lang="ts" setup>
import { withDefaults } from 'vue'
const emit = defineEmits(['update:modelValue'])
withDefaults(defineProps<{
  placeholder: string
  modelValue: string
  type?: string
}>(), { type: 'text' })
function updateValue (event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :value="modelValue"
    class="w-full
      py-4 pl-5
      border-[3px] border-primary rounded-lg
      focus-visible:outline-none
      placeholder:text-xs placeholder:font-semibold placeholder:text-[#B3B3B3]
    "
    :placeholder="placeholder"
    type="text"
    @input="updateValue"
  >
</template>