<template>
  <div class="flex h-screen bg-gray-50 text-gray-800">
    <div class="w-64 bg-white border-r">
      <div class="flex items-center justify-center h-20 border-b px-4">
        <img src="../assets/img/logo-PriceCPT.png" alt="PRICECPT Logo" class="h-[100px] w-[100px]" />
      </div>
      <nav class="mt-4 space-y-2 px-4">
        <router-link class="flex items-center px-3 py-2 rounded-md bg-orange-100 text-orange-600 font-medium" to="">
          <img class="w-5 h-5 mr-2" src="../assets/img/grafico-de-barras.png" alt="">
          <p class="text-xl">Dashboard</p>
        </router-link>
        <router-link class="flex items-center px-3 py-2 rounded-md hover:bg-orange-100 text-orange-600 font-medium" to="/product">
          <img class="w-5 h-5 mr-2" src="../assets/img/botao-voltar.png" alt="">
          <p class="text-xl">Voltar</p>
        </router-link>
        <router-link to="" class="absolute bottom-8 flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
          <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
          <p class="text-xl">Settings</p>
        </router-link>
      </nav>
    </div>

    <main class="flex-1 flex flex-col items-center justify-center relative">
      <usuarioComponent/>

    </main>
  </div>
</template>

<script setup>
import usuarioComponent from "../components/usuarioComponent.vue"

</script>

