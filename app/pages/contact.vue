<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-white">{{ $t('contact.title') }}</h1>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-white">{{ $t('contact.info.title') }}</h2>
        <div class="text-white/70">
          <div class="flex items-center gap-2">
            <span>{{ $t('contact.info.address') }}</span>
            <CopyButton :value="$t('contact.info.address')" />
          </div>
          <div class="flex items-center gap-2">
            <span>{{ $t('contact.info.city') }}</span>
            <CopyButton :value="$t('contact.info.city')" />
          </div>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-white/40">NIP:</span>
            <span>{{ $t('contact.company.nipValue') }}</span>
            <CopyButton :value="$t('contact.company.nipValue')" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-white/40">REGON:</span>
            <span>{{ $t('contact.company.regonValue') }}</span>
            <CopyButton :value="$t('contact.company.regonValue')" />
          </div>
        </div>
      </section>

      <!-- Company Details -->
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-white">{{ $t('contact.company.title') }}</h2>
        <div class="space-y-2 text-white/70">
          <div>
            <span class="text-white/40">{{ $t('contact.company.fullName') }}</span>
            <p>{{ $t('contact.company.fullNameValue') }}</p>
          </div>
          <div>
            <span class="text-white/40">{{ $t('contact.company.regAddress') }}</span>
            <p>{{ $t('contact.info.address') }}</p>
            <p>{{ $t('contact.info.city') }}</p>
          </div>
          <div>
            <span class="text-white/40">{{ $t('contact.company.legalForm') }}</span>
            <p>{{ $t('contact.company.legalFormValue') }}</p>
          </div>
          <div>
            <span class="text-white/40">{{ $t('contact.company.startDate') }}</span>
            <p>{{ $t('contact.company.startDateValue') }}</p>
          </div>
          <div>
            <span class="text-white/40">{{ $t('contact.company.registry') }}</span>
            <p><a href="https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=4e59f797-33ba-4b67-bee7-2480e2305db0" target="_blank" rel="noopener" class="text-red-500 hover:text-red-400">{{ $t('contact.company.registryLink') }}</a></p>
          </div>
        </div>
      </section>
    </div>

    <!-- Business Profile -->
    <section class="pt-4 border-t border-white/10">
      <h2 class="text-lg font-semibold text-white mb-2">{{ $t('contact.activity.title') }}</h2>
      <p class="text-white/70">{{ $t('contact.activity.description') }}</p>
    </section>

    <!-- US Companies (English only) -->
    <section v-if="locale === 'en'" class="pt-4 border-t border-white/10">
      <h2 class="text-lg font-semibold text-white mb-2">{{ $t('contact.us.title') }}</h2>
      <p class="text-white/70">{{ $t('contact.us.description') }}</p>
    </section>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
