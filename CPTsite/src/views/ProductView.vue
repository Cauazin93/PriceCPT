<template>
  <div class="flex h-screen bg-gray-50 text-gray-800">
    <div
      class="hidden md:block w-64 bg-white border-r"
    >
      <div class="flex items-center justify-center h-20 border-b px-4">
        <img src="../assets/img/logo-PriceCPT.png" alt="PRICECPT Logo" class="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
      </div>
      <nav class="mt-4 space-y-2 px-4 relative">
        <router-link to="" class="flex items-center px-3 py-2 rounded-md bg-orange-100 text-orange-600 font-medium">
          <img class="w-5 h-5 mr-2" src="../assets/img/find.png" alt="">
          <p class="text-base md:text-xl">Procurar</p>
        </router-link>
        <router-link to="/comoUsar" class="flex items-center px-3 py-2 rounded-md hover:bg-orange-100 text-orange-600 font-medium">
          <img class="w-5 h-5 mr-2" src="../assets/img/ideia.png" alt="">
          <p class="text-base md:text-xl">Como usar</p>
        </router-link>
        <router-link to="" class="fixed bottom-8 flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
          <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
          <p class="text-base md:text-xl">Settings</p>
        </router-link>
      </nav>
    </div>


    <main class="flex-1 flex flex-col items-center justify-start md:justify-center relative p-4">
      <usuarioComponent/>

      <div class="w-full max-w-2xl mt-8 px-2 sm:px-4">
        <div class="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md border px-4 py-3 gap-3 sm:gap-0">
          <img class="w-5 h-5 text-orange-500 mr-0 sm:mr-3" src="../assets/img/find.png" alt="">
          <input
            type="text"
            placeholder="Cole o link do produto do Mercado Livre..."
            class="flex-1 outline-none text-sm placeholder-gray-500 w-full sm:w-auto"
          />
          <button class="w-full sm:w-auto px-4 py-1 bg-orange-500 text-white rounded-[10px] mt-2 sm:mt-0">
            Buscar
          </button>
          <router-link to="/dashboard" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 mt-2 sm:mt-0">
            <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
            <p class="text-sm sm:text-xl">Teste</p>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import usuarioComponent from "../components/usuarioComponent.vue"
</script>
