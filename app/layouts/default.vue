<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Top padding -->
    <div class="pt-8">
      <!-- Navbar -->
      <header class="max-w-4xl mx-auto px-6">
        <nav class="flex items-center justify-between py-4 border-b border-white/10">
          <!-- Logo -->
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
            <img src="/logo.png" alt="SAIDEN" class="h-8">
            <span class="font-semibold text-lg tracking-wide">SAIDEN</span>
          </NuxtLink>

          <!-- Navigation links -->
          <div class="flex items-center gap-8">
            <NuxtLink :to="localePath('/')" exact-active-class="!text-red-500" class="text-sm text-white/60 hover:text-white transition-colors">{{ $t('nav.home') }}</NuxtLink>
            <NuxtLink :to="localePath('/terms')" active-class="!text-red-500" class="text-sm text-white/60 hover:text-white transition-colors">{{ $t('nav.terms') }}</NuxtLink>
            <NuxtLink :to="localePath('/privacy')" active-class="!text-red-500" class="text-sm text-white/60 hover:text-white transition-colors">{{ $t('nav.privacy') }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')" active-class="!text-red-500" class="text-sm text-white/60 hover:text-white transition-colors">{{ $t('nav.contact') }}</NuxtLink>

            <!-- Language switcher -->
            <div class="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
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
      <main class="max-w-4xl mx-auto px-6 py-12">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => locales.value)
</script>
