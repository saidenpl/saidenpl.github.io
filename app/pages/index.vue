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

    <!-- Open Source Projects -->
    <section class="py-12">
      <h2 class="text-2xl font-semibold mb-2">{{ $t('home.opensource.title') }}</h2>
      <p class="text-white/50 mb-8">{{ $t('home.opensource.subtitle') }}</p>

      <div class="grid md:grid-cols-3 gap-4">
        <a
          v-for="project in openSourceProjects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="group block p-5 border border-white/10 rounded-lg hover:border-red-500/50 hover:bg-white/5 transition-all"
        >
          <div class="flex items-start justify-between mb-2">
            <h3 class="font-semibold text-lg group-hover:text-red-500 transition-colors">
              {{ project.name }}
            </h3>
            <span class="text-xs px-2 py-1 rounded bg-white/10 text-white/60">
              {{ project.lang }}
            </span>
          </div>
          <p class="text-white/60 text-sm">
            {{ $t(`home.opensource.${project.key}.desc`) }}
          </p>
        </a>
      </div>
    </section>

    <!-- Current Work -->
    <section class="py-12 border-t border-white/10">
      <h2 class="text-2xl font-semibold mb-2">{{ $t('home.current.title') }}</h2>
      <p class="text-white/50 mb-8">{{ $t('home.current.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="(item, index) in currentWork"
          :key="index"
          class="p-5 border border-white/10 rounded-lg"
        >
          <h3 class="font-semibold text-lg mb-2">{{ $t(`home.current.items.${item}.title`) }}</h3>
          <p class="text-white/60 text-sm">{{ $t(`home.current.items.${item}.desc`) }}</p>
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

const openSourceProjects = [
  { key: 'hu', name: 'hu', lang: 'Rust', url: 'https://github.com/aladac/hu' },
  { key: 'claudeBrowse', name: 'claude-browse', lang: 'TypeScript', url: 'https://github.com/aladac/claude-browse' },
  { key: 'tensors', name: 'tensors', lang: 'Python', url: 'https://github.com/aladac/tensors' },
  { key: 'itt', name: 'itt', lang: 'Ruby', url: 'https://github.com/aladac/itt' },
  { key: 'smt', name: 'smt', lang: 'Ruby', url: 'https://github.com/aladac/smt' },
  { key: 'nginxGallery', name: 'nginx-gallery', lang: 'XSLT', url: 'https://github.com/aladac/nginx-gallery' }
]

const currentWork = ['assistants', 'imageGen', 'agents']
</script>
