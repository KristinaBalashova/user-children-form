<script setup>
import { useUser } from "../store/user";
import { storeToRefs } from "pinia";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const userStore = useUser();

const { name, age, children } = storeToRefs(userStore);

</script>

<template>
  <div class="preview">
    <section class="parent-info">
      <h2>{{t('form.personalData')}}</h2>

      <p class="user-info-text" v-if="name && age">{{ name }}, {{ age }} {{ t('form.age_suffix') }}</p>
      <p v-else>{{ t('form.noData') }}</p>
    </section>
    <section class="children-info">
      <h2>{{ t('form.kids') }}</h2>

      <ul v-if="children.length > 0" class="children">
        <li
          v-for="(child, index) in children"
          :key="index"
          class="user-info-text"
        >
          {{ child.name }}, {{ child.age }} {{ t('form.age_suffix') }}
        </li>
      </ul>

      <p v-else> {{ t('form.noKids') }}</p>
    </section>
  </div>
</template>

<style scoped>
.parent-info {
  margin-bottom: 60px;
}

.children-info {
}

.preview {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
}

h2 {
  color: #111111;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  margin: 0;
  margin-bottom: 20px;
}

.user-info-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #111111;
}

.children {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.children li {
  background-color: #F1F1F1;
  padding: 8px 16px;
  border-radius: 6px;
  display: inline-block;
}
</style>
