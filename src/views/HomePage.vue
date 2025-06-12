<script setup>
import Form from "../components/Form.vue";
import { useUser } from "../store/user";

const store = useUser();

function addChild(child) {
  store.addChild(child);
}

</script>

<template>
  <div class="form-container">
    <Form @submit="addChild" />
  </div>
</template>

<style scoped>
.form-container {
  max-width: 616px;
  margin: 36px auto;
}
</style>
