<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'outlined',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <v-btn
    v-bind="$attrs"
    :variant="variant"
    class="btn"
    :class="[`btn--${color}`, variant]"
    :disabled="disabled"
  >
    <slot />
  </v-btn>
</template>