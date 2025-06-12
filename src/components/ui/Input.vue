<script setup>
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'outlined',
  },
});

const modelValue = defineModel();
</script>

<template>
  <v-text-field
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="modelValue = $event"
    :placeholder="placeholder"
    class="input"
    :variant="variant"
    clearable
  />
</template>

<style scoped>
.input {
  width: 100%;
  border: 2px solid #1111117A !important;
}
</style>
