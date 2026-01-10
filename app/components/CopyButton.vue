<template>
  <button
    @click="copy"
    class="p-1 text-white/30 hover:text-white/60 transition-colors"
    :title="copied ? 'Copied!' : 'Copy'"
  >
    <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
    <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  value: String
})

const copied = ref(false)

const copy = async () => {
  await navigator.clipboard.writeText(props.value)
  copied.value = true
  setTimeout(() => copied.value = false, 1500)
}
</script>
