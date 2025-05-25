<script setup>

import bgImage from '../src/assets/img/ImageBG1.png'
</script>



<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <div
      class="bg-cover bg-center min-h-[300px] w-full"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div>
        <router-view />
      </div>
    </div>

  </div>
</template>


