<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-white mb-2">{{ $t('terms.title') }}</h1>
      <p class="text-white/40 text-sm">{{ $t('terms.updated') }}</p>
    </div>

    <div class="space-y-6 text-white/70 leading-relaxed">
      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.acceptance.title') }}</h2>
        <p>{{ $t('terms.acceptance.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.use.title') }}</h2>
        <p>{{ $t('terms.use.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.ip.title') }}</h2>
        <p>{{ $t('terms.ip.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.disclaimer.title') }}</h2>
        <p>{{ $t('terms.disclaimer.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.liability.title') }}</h2>
        <p>{{ $t('terms.liability.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.law.title') }}</h2>
        <p>{{ $t('terms.law.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.changes.title') }}</h2>
        <p>{{ $t('terms.changes.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('terms.contact.title') }}</h2>
        <p>{{ $t('terms.contact.text') }} <a href="mailto:legal@saiden.pl" class="text-red-500 hover:text-red-400">legal@saiden.pl</a></p>
      </section>
    </div>
  </div>
</template>
