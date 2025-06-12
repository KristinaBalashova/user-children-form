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

</style>
