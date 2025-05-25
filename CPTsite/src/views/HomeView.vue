<template>
  <div class="flex flex-col md:flex-row justify-between items-center min-h-screen p-4 md:p-8 relative">

    <div class="absolute top-4 right-4 md:top-8 md:right-8 z-10">
      <router-link to="/login" class="flex items-center text-orange-800 font-bold hover:text-orange-600 text-2xl md:text-5xl">
        Login
        <img class="w-6 h-6 md:w-10 md:h-10 ml-2" src="../assets/img/login.png" alt="Login" />
      </router-link>
    </div>


    <div class="w-full md:w-1/2 space-y-8 pt-32 md:pt-48">

      <div class="px-4 md:pl-28">
        <p class="text-amber-600 text-3xl md:text-6xl font-bold italic font-sans">
          Com PriceCPT consulte preços
          e compare-os. Torne sua compra
          mais acertiva
        </p>
      </div>

      <div class="px-4 md:pl-28 flex flex-col items-start space-y-4">
        <router-link to="/product" class="bg-amber-600 hover:bg-amber-800 hover:scale-105 transition-transform text-white font-bold italic font-sans py-4 px-6 text-xl md:text-5xl rounded-[30px] shadow-2xl w-full md:w-[800px] h-[80px] md:h-[120px] flex items-center justify-center text-center"
        >
          Comparar preços
        </router-link>

        <router-link to="/landing" class="bg-amber-600 hover:bg-amber-800 text-white text-sm md:text-2xl font-bold italic font-sans py-2 px-4 rounded-[20px] shadow-xl flex items-center w-fit"
        >
          <img class="w-4 h-4 md:w-5 md:h-5 mr-2" src="../assets/img/info.png" alt="Info" />
          <span>Sobre</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
