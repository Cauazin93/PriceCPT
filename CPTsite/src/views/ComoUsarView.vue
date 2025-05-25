<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-50 text-gray-800 overflow-hidden">
    
    <div class="w-full md:w-64 bg-white border-r">
      <router-link to="/" class="flex items-center justify-center h-20 border-b px-4">
        <img src="../assets/img/logo-PriceCPT.png" alt="PRICECPT Logo" class="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
      </router-link>
      <nav class="mt-4 space-y-2 px-4 relative">
        <router-link class="flex items-center px-3 py-2 rounded-md hover:bg-orange-100 text-orange-600 font-medium" to="/product">
          <img class="w-5 h-5 mr-2" src="../assets/img/find.png" alt="">
          <p class="text-base md:text-xl">Procurar</p>
        </router-link>
        <router-link class="flex items-center px-3 py-2 rounded-md bg-orange-100 text-orange-600 font-medium" to="">
          <img class="w-5 h-5 mr-2" src="../assets/img/ideia.png" alt="">
          <p class="text-base md:text-xl">Como usar</p>
        </router-link>
        <router-link to="" class="fixed bottom-8 flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
          <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
          <p class="text-base md:text-xl">Settings</p>
        </router-link>
      </nav>
    </div>

    
    <main class="flex-1 flex flex-col items-center justify-start relative overflow-y-auto p-4">
      <usuarioComponent />

      <div class="w-full max-w-6xl mt-8">
        <div class="flex flex-col items-center bg-white rounded-xl shadow-md border px-4 py-6 space-y-8">
          
          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Pesquise o Produto<br>
            <span class="font-normal">Você pode buscar pelo nome do produto ou colar o link do anúncio do Mercado Livre. O PriceCPT vai localizar o item para você.</span><br><br>
            <img class="w-full max-w-5xl h-auto rounded" src="../assets/img/capturaFinder.png" alt="">
          </p>

          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Veja o Gráfico de Preços<br>
            <span class="font-normal">Depois que o produto for encontrado, o app mostra um gráfico com a variação de preços ao longo do tempo. Assim, você sabe se o preço está subindo, caindo ou se manteve estável.</span>
          </p>

          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Receba Atualizações<br>
            <span class="font-normal">O aplicativo se conecta com a API do Mercado Livre e faz atualizações frequentes para te mostrar os preços mais recentes.</span><br><br>
            <img class="w-full max-w-5xl h-auto rounded" src="../assets/img/logo-PriceCPT.png" alt="">
          </p>

          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Se tiver dúvidas ou quiser sugerir melhorias, o suporte está à disposição!<br>
            Boas compras e bons negócios com o PriceCPT!
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import usuarioComponent from "../components/usuarioComponent.vue"
</script>
