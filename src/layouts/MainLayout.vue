<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
const emit = defineEmits(['first', 'second'])
defineProps<{
  firstButtonText: string
  secondButtonText: string
}>()
function handleFirstButton() {
  emit('first')
}
function handleSecondButton() {
  emit('second')
}
</script>

<template>
  <header class="pt-2 flex justify-center">
    <img
      src="@/assets/logo.svg"
      alt="Logo"
    >
  </header>
  <div class="px-8">
    <slot
      name="content"
    />
  </div>
  <footer class="px-8 grid gap-2">
    <ButtonComponent
      bg-color="primary"
      @callback="handleFirstButton"
    >
      {{ firstButtonText }}
    </ButtonComponent>
    <ButtonComponent
      bg-color="secondary"
      @callback="handleSecondButton"
    >
      {{ secondButtonText }}
    </ButtonComponent>
  </footer>
</template>