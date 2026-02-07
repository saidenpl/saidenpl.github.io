<template>
  <footer class="border-t border-white/10 mt-auto">
    <div class="max-w-4xl mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo and copyright -->
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="SAIDEN" class="h-6 opacity-60">
          <span class="text-sm text-white/40">{{ new Date().getFullYear() }} SAIDEN</span>
        </div>

        <!-- Footer links -->
        <nav class="flex items-center gap-6">
          <NuxtLink
            :to="localePath('/terms')"
            class="text-sm text-white/40 hover:text-white transition-colors"
          >
            {{ $t('nav.terms') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/privacy')"
            class="text-sm text-white/40 hover:text-white transition-colors"
          >
            {{ $t('nav.privacy') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact')"
            class="text-sm text-white/40 hover:text-white transition-colors"
          >
            {{ $t('nav.contact') }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>
