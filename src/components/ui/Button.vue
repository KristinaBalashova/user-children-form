<script setup>
defineProps({
  color: {
    type: String,
    default: '#01A7FD',
  },
  variant: {
    type: String,
    default: 'outlined', // options: 'outlined', 'tonal', 'text'
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
    class="btn"
    :class="[`btn--${variant}`]"
    :disabled="disabled"
  >
    <slot />
  </v-btn>
</template>

<style scoped>
.btn {
  border-radius: 100px !important;
  font-weight: 500;
  padding: 8px 20px;
  font-size: 16px;
  box-shadow: none;
}

.btn--outlined {
  background-color: transparent;
  color: #01A7FD;
  border: 2px solid #01A7FD;
}

.btn--tonal {
  background-color: #01A7FD;
  color: white;
  border: none;
}

.btn--text {
  background-color: transparent;
  color: #01A7FD;
  border: none;
}

</style>
