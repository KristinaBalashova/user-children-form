<script setup>
import Input from "./../ui/Input.vue";
import Button from "./../ui/Button.vue";
import { ref } from "vue";
import { useUser } from "../../store/user";

const userStore = useUser();

const userForm = ref({
  name: "",
  age: "",
  children: [{ name: "", age: null }],
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
    children: [{ name: "", age: null }],
  };
}

const emit = defineEmits(["submitForm"]);
</script>

<template>
  <form class="child-form" @submit.prevent="submitForm">
    <div class="parent-container">
      <h2>Персональные данные</h2>
      <Input v-model="userForm.name" type="text" label="Имя" />
      <Input v-model="userForm.age" type="number" label="Возраст" :min="0" />
    </div>

    <div>
      <div class="children-container">
        <div class="children-container-header">
          <h2>Дети (макс. 5)</h2>
          <Button
            variant="outlined"
            @click.stop="addChild"
            :disabled="userForm.children.length >= userStore.childrenLimit"
          >
            + Добавить ребёнка
          </Button>
        </div>
        <div class="children-list">
          <div
            v-for="(child, index) in userForm.children"
            :key="index"
            class="child-entry"
          >
            <Input v-model="child.name" type="text" label="Имя" />
            <Input v-model="child.age" type="number" label="Возраст" :min="0" />
            <Button
              @click.stop="removeChild(index)"
              variant="text"
              class="delete-button"
              >Удалить</Button
            >
          </div>
        </div>
      </div>
    </div>

    <Button variant="filled" type="submit">
      Сохранить
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
