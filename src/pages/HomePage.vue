<script lang="ts" setup>
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
const router = useRouter()

async function changeRoute (name: string) {
  await router.push({ name })
}
</script>

<template>
  <MainLayout
    first-button-text="Registre-se"
    second-button-text="Entrar"
    @first="changeRoute('cadastro')"
    @second="changeRoute('login')"
  >
    <template #content>
      <div class="grid grid-cols-2 pt-8">
        <img
          src="@/assets/astronauta_dab.svg"
          alt="Astronauta dab"
        >
        <img
          src="@/assets/dois_astronautas.svg"
          alt="Astronauta dab"
        >
        <img
          class="col-span-2 mx-auto mb-3"
          src="@/assets/astronauta_pc.svg"
          alt="Astronauta dab"
        >
      </div>
      <div class="grid gap-2 text-center mb-10">
        <h1 class="font-semibold text-[21px] text-[#323232]">
          Bem-vindo(a) ao SOCIALNERD
        </h1>
        <p class="text-semibold text-xs text-[#808080]">
          Junte-se a mais de 100 milhões de pessoas que usam o 
          SOCIALNERD para conversar com seus amigos 
          e comunidade
        </p>
      </div>
    </template>
  </MainLayout>
</template>