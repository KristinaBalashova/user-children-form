<script setup>
import Input from "./../ui/Input.vue";
import Button from "./../ui/Button.vue";
import { ref } from "vue";
import { useUser } from "../../store/user";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const userStore = useUser();

const userForm = ref({
  name: "",
  age: "",
  children: [], //{ name: "", age: null }
});

function addChild() {
  if (userForm.value.children.length < userStore.childrenLimit) {
    userForm.value.children.push({ name: "", age: null });
  }
}

function removeChild(index) {
  userForm.value.children.splice(index, 1);
}

function submitForm() {

  const preparedDeepCopy = JSON.parse(JSON.stringify(userForm.value));
  
  emit("submitForm", preparedDeepCopy);

  userForm.value = {
    name: "",
    age: "",
    children: [], //{ name: string, age: num }
  };
}

const emit = defineEmits(["submitForm"]);
</script>

<template>
  <form class="child-form" @submit.prevent="submitForm">
    <div class="parent-container">
      <h2>{{ t('form.personalData') }}</h2>
      <Input v-model="userForm.name" required type="text" :label="t('form.name')" />
      <Input v-model="userForm.age" required type="number" :label="t('form.age')" :min="0" />
    </div>

    <div>
      <div class="children-container">
        <div class="children-container-header">
          <h2>{{ t('form.kids') }} (макс. 5)</h2>
          <Button
            variant="outlined"
            type="button"
            @click.stop="addChild"
            v-if="userForm.children.length < userStore.childrenLimit"
          >
            {{ t('form.addChild') }}
          </Button>
        </div>
        <div class="children-list">
          <div
            v-for="(child, index) in userForm.children"
            :key="index"
            class="child-entry"
          >
            <Input v-model="child.name" type="text" required :label="t('form.name')" />
            <Input v-model="child.age" type="number" required :label="t('form.age')" :min="0" />
            <Button
              @click.stop="removeChild(index)"
              variant="text"
              class="delete-button"
              >{{ t('common.delete') }}</Button>
          </div>
        </div>
      </div>
    </div>

    <Button variant="filled" type="submit">
      {{ t('form.submit') }}
    </Button>
  </form>
</template>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.parent-container h2 {
  margin-bottom: 10px;
}

.children-container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.children-container {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 30px;
}

.children-list {
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.delete-button {
  padding: 0;
}

.child-entry {
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
}
</style>
