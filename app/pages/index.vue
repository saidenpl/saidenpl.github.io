<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Diagonal accent lines -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      <div class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent" />
    </div>

    <!-- Red glow effect behind logo -->
    <div class="absolute w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20" />

    <!-- Main content -->
    <div class="relative z-10 flex flex-col items-center gap-8">
      <!-- Logo -->
      <div class="relative group">
        <div class="absolute inset-0 bg-red-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <img
          src="/logo.png"
          alt="SAIDEN"
          class="w-48 md:w-64 lg:w-72 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-transform duration-300 hover:scale-105"
        >
      </div>

      <!-- Tagline -->
      <div class="text-center space-y-2">
        <div class="flex items-center gap-3">
          <span class="w-12 h-px bg-gradient-to-r from-transparent to-red-500" />
          <p class="text-white/60 text-sm tracking-[0.3em] uppercase">Performance & Precision</p>
          <span class="w-12 h-px bg-gradient-to-l from-transparent to-red-500" />
        </div>
      </div>

      <!-- CTA Button -->
      <a
        href="#"
        class="mt-8 px-8 py-3 border border-red-500 text-white uppercase tracking-widest text-sm
               hover:bg-red-500 hover:text-white transition-all duration-300
               relative overflow-hidden group"
      >
        <span class="relative z-10">Enter</span>
        <div class="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </a>
    </div>

    <!-- Bottom accent bar -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

    <!-- Corner accents -->
    <div class="absolute top-8 left-8 w-16 h-px bg-red-500" />
    <div class="absolute top-8 left-8 w-px h-16 bg-red-500" />
    <div class="absolute bottom-8 right-8 w-16 h-px bg-red-500" />
    <div class="absolute bottom-8 right-8 w-px h-16 bg-red-500" />
  </div>
</template>
