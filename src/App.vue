<script setup>

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
   <div class="layout">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout > *:first-child {
  position: sticky;
  top: 0;
  z-index: 10;
  background: white; /* или нужный фон */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.main {
  flex: 1;
  padding: 1rem;
  overflow-y: auto,
}

.footer {
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
}
</style>