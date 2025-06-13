<script setup>
import UserForm from "../components/UserForm/UserForm.vue";
import { useUser } from "../store/user";

const userStore = useUser();

function submitForm(data) {
  userStore.setUserData(data);
}

</script>

<template>
  <section class="form-container">
    <UserForm @submitForm="submitForm"/>
  </section>
</template>

<style scoped>
.form-container {
  max-width: 616px;
  margin: 36px auto;
}
</style>
