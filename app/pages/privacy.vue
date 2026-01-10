<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-white mb-2">{{ $t('privacy.title') }}</h1>
      <p class="text-white/40 text-sm">{{ $t('privacy.updated') }}</p>
    </div>

    <div class="space-y-6 text-white/70 leading-relaxed">
      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.overview.title') }}</h2>
        <p>{{ $t('privacy.overview.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.collect.title') }}</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>{{ $t('privacy.collect.item1') }}</li>
          <li>{{ $t('privacy.collect.item2') }}</li>
          <li>{{ $t('privacy.collect.item3') }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.use.title') }}</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>{{ $t('privacy.use.item1') }}</li>
          <li>{{ $t('privacy.use.item2') }}</li>
          <li>{{ $t('privacy.use.item3') }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.legal.title') }}</h2>
        <p>{{ $t('privacy.legal.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.rights.title') }}</h2>
        <p class="mb-2"><strong class="text-white">{{ $t('privacy.rights.eu') }}</strong> {{ $t('privacy.rights.euText') }}</p>
        <p><strong class="text-white">{{ $t('privacy.rights.us') }}</strong> {{ $t('privacy.rights.usText') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.cookies.title') }}</h2>
        <p>{{ $t('privacy.cookies.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.retention.title') }}</h2>
        <p>{{ $t('privacy.retention.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.security.title') }}</h2>
        <p>{{ $t('privacy.security.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.transfers.title') }}</h2>
        <p>{{ $t('privacy.transfers.text') }}</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-2">{{ $t('privacy.contact.title') }}</h2>
        <p>{{ $t('privacy.contact.text') }} <a href="mailto:legal@saiden.pl" class="text-red-500 hover:text-red-400">legal@saiden.pl</a></p>
        <p class="mt-2">{{ $t('privacy.contact.complaint') }}</p>
      </section>
    </div>
  </div>
</template>
