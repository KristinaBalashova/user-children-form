<script setup>
import { useUser } from "../store/user";

const userStore = useUser();
</script>

<template>
  <div class="preview">
    <section>
      <h2>Персональные данные</h2>
      <p class="person">{{ userStore.name }}, {{ userStore.age }} лет</p>
    </section>
    <section>
      <h2>Дети</h2>

      <ul v-if="userStore.children.length" class="children">
        <li
          v-for="(child, index) in userStore.children"
          :key="child.id || index"
        >
          {{ child.name }}, {{ child.age }} {{ getAgeLabel(child.age) }}
        </li>
      </ul>

      <p v-else>Нет детей</p>
    </section>
  </div>
</template>

<style scoped>
.preview {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
}

h2 {
  font-size: 14px;
  font-weight: 400;
  color: #444;
  margin-bottom: 8px;
}

.person {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 24px;
}

.children {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.children li {
  background: #f0f0f0;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 6px;
  display: inline-block;
}
</style>
