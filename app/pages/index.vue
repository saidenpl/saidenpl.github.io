<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        {{ $t('home.tagline') }}
      </h1>
      <p class="text-xl text-white/60 max-w-2xl mx-auto mb-2">
        {{ $t('home.subtitle') }}
      </p>
      <p class="text-sm text-white/40">
        {{ $t('home.disclaimer') }}
      </p>
    </section>

    <!-- AI Projects Section -->
    <section class="py-12">
      <h2 class="text-2xl font-semibold mb-2">{{ $t('home.projects.title') }}</h2>
      <p class="text-white/50 mb-8">{{ $t('home.projects.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="project in projects"
          :key="project.name"
          class="p-5 border border-white/10 rounded-lg"
        >
          <div class="flex items-start justify-between mb-2">
            <h3 class="font-semibold text-lg">
              {{ project.name }}
            </h3>
            <div class="flex gap-2">
              <span class="text-xs px-2 py-1 rounded bg-white/10 text-white/60">
                {{ project.lang }}
              </span>
              <span class="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">
                {{ $t('home.projects.private') }}
              </span>
            </div>
          </div>
          <p class="text-white/60 text-sm">
            {{ $t(`home.projects.${project.key}.desc`) }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 text-center border-t border-white/10">
      <p class="text-white/60 mb-4">{{ $t('home.cta') }}</p>
      <NuxtLink
        :to="localePath('/contact')"
        class="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
      >
        {{ $t('home.ctaButton') }}
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath()

const projects = [
  { key: 'personality', name: 'personality', lang: 'Python' },
  { key: 'claude', name: 'claude', lang: 'TypeScript' },
  { key: 'xc', name: 'xc', lang: 'Rust' },
  { key: 'olingo', name: 'olingo', lang: 'Rust' }
]
</script>
