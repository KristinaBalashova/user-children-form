<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'outlined', // 'outlined' | 'filled' | 'text'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    v-bind="$attrs"
    class="btn"
    :class="`btn-${variant}`"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border-radius: 100px;
  height: 44px;
  font-weight: 500;
  padding: 8px 20px;
  font-size: 16px;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.btn-outlined {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-filled {
  background-color: var(--color-primary);
  color: white;
  border: none;
}

.btn-text {
  background-color: transparent;
  color: var(--color-primary);
  border: none;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
