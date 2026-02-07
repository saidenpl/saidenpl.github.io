<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <!-- Top padding -->
    <div class="pt-8 flex-1 flex flex-col">
      <!-- Navbar -->
      <header class="max-w-4xl mx-auto px-6 w-full">
        <nav class="flex items-center justify-between py-4 border-b border-white/10">
          <!-- Logo -->
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
            <img src="/logo.png" alt="SAIDEN" class="h-8">
            <span class="font-semibold text-lg tracking-wide">SAIDEN</span>
          </NuxtLink>

          <!-- Navigation -->
          <div class="flex items-center gap-6">
            <!-- Blog link -->
            <a
              href="https://blog.saiden.pl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span class="text-sm">Blog</span>
            </a>

            <!-- Language switcher -->
            <div class="flex items-center gap-2">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="text-xs uppercase"
              :class="locale.code === $i18n.locale ? 'text-red-500' : 'text-white/40 hover:text-white'"
            >
              {{ locale.code }}
            </NuxtLink>
            </div>
          </div>
        </nav>
      </header>

      <!-- Main content with extra padding -->
      <main class="max-w-4xl mx-auto px-6 py-12 w-full flex-1">
        <slot />
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => locales.value)
</script>
