<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <footer class="footer">
    <p class="text">{{ t('common.allRightsReserved') }}</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
}

.text {
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: bottom;
  margin: 0;
}
</style>
