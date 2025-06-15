<script setup>
import logo from '../assets/logo.svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header class="header">
    <div class="logo">
      <img :src="logo" alt="Logo" />
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li><router-link to="/">{{ t('common.form') }}</router-link></li>
        <li><router-link to="/preview">{{ t('common.preview') }}</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;
}

.logo img {
  height: 40px;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 32px;
  padding: 0;
  margin: 0;
}

.nav-list li a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
}

</style>