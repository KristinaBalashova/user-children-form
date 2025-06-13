<script setup>
import { ref } from "vue";

const value = ref("");
const isFocused = ref(false);

defineProps({
  label: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "outlined",
  },
});

function onBlur() {
  if (!value.value) {
    isFocused.value = false;
  }
}

const modelValue = defineModel();
</script>

<template>
  <div class="input-wrapper">
    <input
      v-bind="$attrs"
      v-model="modelValue"
      class="input"
      @focus="isFocused = true"
      @blur="onBlur"
      :variant="variant"
    />
    <label :class="{ floated: isFocused || modelValue }">{{ label }}</label>
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
}

.input {
  width: 100%;
  height: 56px;
  padding: 14px 12px 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  background: transparent;
}

label {
  position: absolute;
  top: 14px;
  left: 12px;
  color: #999;
  font-size: 14px;
  pointer-events: none;
  transition: 0.2s ease all;
  background-color: white;
  padding: 0 4px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
}

label.floated {
  top: 8px;
  left: 10px;
  font-size: 13px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  color: #1111117A;

}
</style>
