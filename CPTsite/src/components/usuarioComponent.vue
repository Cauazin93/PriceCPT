<template>
<button @click="abrirMenu" class="absolute top-6 right-8">
    <img class="w-12" src="../assets/img/conta.png" alt="Conta">
</button>

<div ref="menu" class="absolute top-24 right-8 hidden opacity-0 bg-white rounded-xl shadow-lg p-6 w-[250px] h-[200px] z-50 transition-opacity duration-300 ease-in-out">
    <h2 class="text-lg font-semibold mb-4">Deseja sair da conta ?</h2>
    <button @click="logout" class="w-full bg-amber-600 text-white py-2 rounded hover:bg-red-600">Logout</button>
    <button @click="abrirMenu" class="mt-3 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300">Cancelar</button>
</div>


</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toggleMenu } from '../assets/js/menu.js';

const menu = ref(null);
const router = useRouter();

function abrirMenu() {
  toggleMenu(menu);
}

function logout() {

  console.log("Usuário saiu");
  router.push('/'); 
}
</script>