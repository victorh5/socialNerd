<script lang="ts" setup>
import { reactive } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import InputComponent from '@/components/InputComponent.vue'

type Register = {
  name: string
  nickname: string
  birthDate: string
  email: string
  password: string
  confirmPassword: string
}

const data = reactive<Register>({
  name: '',
  nickname: '',
  birthDate: '',
  email: '',
  password: '',
  confirmPassword: ''
})
function testt () {
  console.log(data)
}
</script>

<template>
  <MainLayout
    first-button-text="Registre-se"
    second-button-text="Já tenho uma conta"
    @first="testt"
  >
    <template #content>
      <div class="grid gap-2 py-4">
        <img
          src="@/assets/astronauta_lendo.svg"
          alt="Astronauta lendo"
          class="mx-auto"
        >
        <p class="font-semibold text-xs text-[#808080] text-center">
          Crie já a sua conta e acesse um novo mundo
        </p>
      </div>
      <div class="mt-4 mb-2 grid gap-3">
        <InputComponent
          v-model="data.name"
          placeholder="Nome"
        />
        <InputComponent
          v-model="data.nickname"
          placeholder="Apelido"
        />
        <InputComponent
          v-model="data.birthDate"
          placeholder="Dia do aniversário"
          type="date"
        />
        <InputComponent
          v-model="data.email"
          placeholder="E-mail"
        />
        <InputComponent
          v-model="data.password"
          placeholder="Senha"
          type="password"
        />
        <InputComponent
          v-model="data.confirmPassword"
          placeholder="Confirmação de senha"
          type="password"
        />
      </div>
    </template>
  </MainLayout>
</template>