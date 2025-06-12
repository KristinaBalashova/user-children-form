<script setup>
import Input from "./ui/Input.vue";
import { defineEmits, defineModel } from "vue";
import Button from "./ui/Button.vue";
import { useUser } from "../store/user";

const userStore = useUser();

defineEmits(["update:name", "update:age", "remove"]);

const modelName = defineModel("name");
const modelAge = defineModel("age");

function addChild() {
  if (userStore.children.length < userStore.childrenLimit) {
    userStore.addChild({ name: "", age: null });
  }
}
</script>

<template>
  <form class="child-form" @submit.prevent>
    <div class="parent-container">
      <h2>Персональные данные</h2>
      <Input v-model="modelName" type="text" placeholder="Имя родителя" />
      <Input v-model="modelAge" type="number" placeholder="Возраст родителя" />
    </div>

    <div>
      <div class="children-container">
        <h2>Дети (макс. 5)</h2>
        <Button
          variant="outlined"
          @click="addChild"
          :disabled="userStore.children.length >= userStore.childrenLimit"
        >
          + Добавить ребёнка
        </Button>
      </div>

      <div class="children-list">
        <div
          v-for="(child, index) in userStore.children"
          :key="index"
          class="child-entry"
        >
          <Input v-model="child.name" type="text" placeholder="Имя ребёнка" />
          <Input v-model="child.age" type="number" placeholder="Возраст ребёнка" />
          <Button
            variant="text"
            @click="userStore.removeChild(index)"
            class="delete-button"
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>

    <Button variant="tonal" @click="$emit('update:name', modelName)">
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

.children-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
}
</style>
