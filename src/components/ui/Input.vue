<script setup>
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'solo-filled',
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
