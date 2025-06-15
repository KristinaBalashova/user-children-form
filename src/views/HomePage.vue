<script setup>
import UserForm from "../components/UserForm/UserForm.vue";
import { useUser } from "../store/user";
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const toast = useToast()
const userStore = useUser();

function submitForm(data) {
  userStore.setUserData(data);
  toast.success(t('common.success'));
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
