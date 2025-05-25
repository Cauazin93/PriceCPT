<template>
<div class="bg-gradient-to-b  from-gray-100 from-60% to-amber-700 min-h-screen flex  items-center justify-center font-sans">
  <div class="bg-white rounded-xl p-10 shadow-xl max-w-md w-full">
    
    <div class="flex items-center justify-center mb-6 space-x-2">
      
      <div class="text-center">
        <img class="w-24" src="../assets/img/logo-PriceCPT.png" alt="">
      </div>
    </div>
    
    <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Login</h2>

    <form @submit.prevent="authenticate">
      <div class="mb-4">
        <label class="block mb-1 text-gray-700">Email</label>
        <div class="flex items-center border border-yellow-400 rounded-md px-3 py-2 bg-white">
          <img class="w-4 h-4 m-2" src="../assets/img/email.png" alt="">
          <input v-model="data.EMAIL" type="email" class="w-full outline-none bg-transparent text-gray-700" placeholder="Email" />
        </div>
      </div>

      <div class="mb-6">
        <label class="block mb-1 text-gray-700">Senha</label>
        <div class="flex items-center border border-yellow-400 rounded-md px-3 py-2 bg-white">
          <img class="w-4 h-4 m-2" src="../assets/img/senha.png" alt="">
          <input v-model="data.SENHA" type="password" class="w-full outline-none bg-transparent text-gray-700" placeholder="Senha" />
        </div>
      </div>

      <button type="submit" class="w-full bg-amber-600 text-white font-semibold py-2 rounded-md hover:bg-amber-800 transition">
        Login
      </button>
    </form>

    <p class="text-center mt-6 text-gray-700">
      Don’t have an account?
      <a href="#" class="text-amber-600 font-medium hover:underline"><router-link to="/createAccount" >Sign up</router-link></a>
    </p>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import loginService from '../../services/loginService';

const _loginService = new loginService();
const data = ref({
  email: "",
  senha: ""
});

const router = useRouter();

async function authenticate() {
  try {
    await _loginService.Login(data.value);
    alert('Login realizado com sucesso!');
    router.push('/product');
  } catch (error) {
    alert('Falha no login: usuário ou senha incorretos.');
  }
}
</script>