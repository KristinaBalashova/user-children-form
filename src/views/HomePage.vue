<script setup>
import UserForm from "../components/UserForm/UserForm.vue";
import { useUser } from "../store/user";
import { useToast } from 'vue-toastification'

const toast = useToast()
const userStore = useUser();

function submitForm(data) {
  userStore.setUserData(data);
  toast.success('Данные успешно отправлены!')
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
