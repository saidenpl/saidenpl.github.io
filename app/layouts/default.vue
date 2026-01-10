<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Top padding -->
    <div class="pt-8">
      <!-- Navbar -->
      <header class="max-w-4xl mx-auto px-6">
        <nav class="flex items-center justify-between py-4 border-b border-white/10">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img src="/logo.png" alt="SAIDEN" class="h-8">
          </NuxtLink>

          <!-- Navigation links -->
          <div class="flex items-center gap-8">
            <NuxtLink to="/" class="text-sm text-white/60 hover:text-white transition-colors">Home</NuxtLink>
            <NuxtLink to="/terms" class="text-sm text-white/60 hover:text-white transition-colors">Terms</NuxtLink>
            <NuxtLink to="/privacy" class="text-sm text-white/60 hover:text-white transition-colors">Privacy</NuxtLink>
            <NuxtLink to="/contact" class="text-sm text-white/60 hover:text-white transition-colors">Contact</NuxtLink>
          </div>
        </nav>
      </header>

      <!-- Main content with extra padding -->
      <main class="max-w-4xl mx-auto px-6 py-12">
        <slot />
      </main>
    </div>
  </div>
</template>
