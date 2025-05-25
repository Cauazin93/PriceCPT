<template>
<div class="bg-white min-h-screen text-white">
  <header class="opacity-75 fixed top-0 w-full bg-gray-200 text-white z-50 ">
    <div class="mx-auto px-4 py-3 flex justify-between items-center">
      <router-link class="hover:scale-125" to="/" ><img src="../assets/img/logo-PriceCPT.png" alt="logo" class="w-[100px] h-[80px] ml-[40px]" /></router-link>
      

      <nav>
        <ul class="md:flex gap-10 font-medium font-bold mr-[40px] md:z-auto z-[-1] md:static absolute w-full left-0 md:w-auto">
          <li class="hover:scale-105 text-amber-600 hover:text-amber-800 my-6 md:my-0"><router-link to="/" >PriceCPT</router-link></li>
          <li class="hover:scale-105 my-6 md:my-0 text-amber-600 hover:text-amber-800"><a href="#disciplina" class="">Sobre a Disciplina</a></li>
          <li class="hover:scale-105 my-6 md:my-0 text-amber-600 hover:text-amber-800"><a href="#empresa" class="">Sobre a Empresa</a></li>
          <li class="hover:scale-105 my-6 md:my-0 text-amber-600 hover:text-amber-800"><a href="#projeto" class="">Descrição do Projeto</a></li>
          <li class="hover:scale-105 my-6 md:my-0 text-amber-600 hover:text-amber-800"><a href="#membros" class="">Membros do Grupo</a></li>
          
        </ul>
      </nav>
    </div>
  </header>

  <main class="pt-40 pb-16 px-6">
    
    <div class="flex items-start gap-20 mt-10">
      <section id="disciplina" class="hover:scale-105 bg-amber-600 p-10 rounded-[100px] shadow-xl text-slate-800 w-1/2 ">
        <div class=" text-white max-w-800 mx-auto flex flex-col gap-6 ">
          <h2 class="text-2xl font-bold mb-4">Sobre a Disciplina - Fábrica de Projetos</h2>
          <p class="text-lg leading-relaxed">
            A disciplina <strong>Fábrica de Projetos</strong> tem como objetivo integrar os conhecimentos adquiridos ao longo do curso, por meio do desenvolvimento de um projeto real voltado para uma empresa parceira. 
            Durante o semestre, os alunos colocam em prática conceitos aprendidos em outras disciplinas, como programação, estrutura de dados, front-end e lógica computacional, promovendo uma experiência próxima do mercado de trabalho.
          </p>
          <p class="text-lg leading-relaxed">
            Neste semestre, estamos utilizando linguagens e tecnologias como <strong>C#</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong> para desenvolver soluções aplicadas à empresa parceira: 
            a <span class="text-dark font-semibold">Fábrica de Códigos</span>. A proposta da disciplina é incentivar o trabalho em equipe, a resolução de problemas reais e a aplicação prática de habilidades técnicas e interpessoais.
          </p>
        </div>
      </section>
      <div class="w-50 h-40 mt-20">
        <img src="../assets/img/logo-unimar.png" alt="Logo Unimar" class="w-full h-full object-contain" />
      </div>
    </div>

    <div class="flex items-start justify-start gap-8 mt-10">
      <div class="w-[280px] h-[200px] flex mt-[120px] ml-[200px]">
        <img src="../assets/img/logo-fabrica-de-codigos.png" alt="Logo" class="w-40 min-w-[160px] md:w-56 object-contain"/>
      </div>

      <section id="empresa" class="hover:scale-105 bg-amber-600 p-10 rounded-[100px] shadow-xl text-slate-800 w-[50%] mr-0 ml-auto">
        <div class="text-white max-w-800 mx-auto flex flex-col gap-6">
          <h2 class="text-2xl font-bold mb-4">Sobre a Empresa - Fábrica de Códigos</h2>
          <p class="text-lg leading-relaxed">
            A <strong>Fábrica de Códigos</strong> é uma empresa dedicada ao desenvolvimento de soluções digitais voltadas para otimizar a gestão de vendas e o dia a dia das empresas. 
            Nossa missão é facilitar a rotina de gestão através de ferramentas práticas e eficientes.
          </p>
          <p class="text-lg leading-relaxed">
            Entre os principais sistemas desenvolvidos pela empresa estão o <strong>Shopping de Preços</strong> — uma plataforma que permite comparar valores de produtos de forma inteligente — e o <strong>Sysemp</strong>, um sistema completo para controle e gestão empresarial.
          </p>
          <p class="text-lg leading-relaxed">
            Com foco na inovação e na experiência do usuário, a Fábrica de Códigos busca transformar ideias em soluções tecnológicas eficazes.
          </p>
        </div>
      </section>
    </div>
    
    <section id="projeto" class="hover:scale-105 bg-amber-600 p-10 rounded-[30px] shadow-xl text-slate-800 mt-20 w-11/12 max-w-5xl mx-auto">
      <div class="text-white flex flex-col gap-6">
        <h2 class="text-3xl font-bold mb-2">Descrição do Site </h2>
        
        <h3 class="text-2xl font-semibold">PriceCPT - Monitoramento de Preços com API do Mercado Livre</h3>
        <p class="text-lg leading-relaxed">
          O <strong>PriceCPT</strong> é um sistema desenvolvido para monitorar o histórico de preços de produtos disponibilizados na plataforma Mercado Livre. O objetivo é oferecer aos usuários uma interface visual amigável e interativa onde seja possível acompanhar variações de preço ao longo do tempo, facilitando a tomada de decisões de compra ou análise de mercado.
        </p>
    
        
    
        <h3 class="text-2xl font-semibold">Funcionalidades Principais</h3>
        <ul class="list-disc list-inside text-lg leading-relaxed">
          <li>Autenticação de usuários com verificação no banco de dados.</li>
          <li>Pesquisa e monitoramento de produtos por link ou descrição.</li>
          <li>Visualização gráfica da variação de preços ao longo do tempo.</li>
          <li>Histórico salvo no banco de dados para acesso posterior.</li>
          <li>Atualização periódica de dados via requisições à API do Mercado Livre.</li>
        </ul>
    
       

        

      </div>
    </section>
    <section id="membros" class="max-w-6xl mx-auto mt-16 px-4">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">Membros do Grupo</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div class="hover:rotate-[0.06rad] hover:scale-105 bg-amber-600 text-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <img src="../assets/img/caua.png" alt="Integrante 1" class="w-32 h-32 rounded-full object-cover mb-4">
          <h3 class="text-xl font-semibold ">Cauã Reginato</h3>
          <p class="text-sm  mt-2">Líder e responsável pelo Front-end e design da interface do usuário.</p>
        </div>

        <div class="hover:rotate-[0.06rad] hover:scale-105 bg-amber-600 text-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <img src="../assets/img/jhonata.png" alt="Integrante 2" class="w-32 h-32 rounded-full object-cover mb-4">
          <h3 class="text-xl font-semibold ">Jhonata Canevare</h3>
          <p class="text-sm  mt-2">Responsável pelo desenvolvimento back-end em c# e Api.</p>
        </div>

        <div class="hover:rotate-[0.06rad] hover:scale-105 bg-gray-200 shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <img src="../assets/img/giovanni.png" alt="Integrante 3" class="w-32 h-32 rounded-full object-cover mb-4">
          <h3 class="text-xl font-semibold text-slate-800">Giovanni Ferreira</h3>
          <p class="text-sm text-slate-600 mt-2">Responsável pela modelagem do banco de dados.</p>
        </div>

        <div class="hover:rotate-[0.06rad] hover:scale-105 bg-gray-200 shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <img src="../assets/img/eduardo.png" alt="Integrante 4" class="w-32 h-32 rounded-full object-cover mb-4">
          <h3 class="text-xl font-semibold text-slate-800">Eduardo Santos</h3>
          <p class="text-sm text-slate-600 mt-2">Responsável pela documentação e apresentações.</p>
        </div>
      </div>
    </section>
  </main>



</div>



</template>

