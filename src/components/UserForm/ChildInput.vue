<script setup>
import Input from './../ui/Input.vue';
import Button from './../ui/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const modelChildName = defineModel('name')
const modelChildAge = defineModel('age')

const emit = defineEmits(['removeChild'])

const onRemove = (index) => {
    emit('removeChild', index)
}
</script>

<template>
  <Input v-model="modelChildName" type="text" required :label="t('form.name')" />
  <Input
    v-model="modelChildAge"
    type="number"
    required
    :label="t('form.age')"
    :min="0"
  />
  <Button
    @click.stop="onRemove(index)"
    type="button"
    variant="text"
    class="button"
  >
    {{ t("common.delete") }}
  </Button>
</template>

<style scoped>
.button {
  padding: 0;
}
</style>
