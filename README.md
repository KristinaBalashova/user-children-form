# 🧒 User & Children Info Form

[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![Pinia](https://img.shields.io/badge/Pinia-Store-yellowgreen.svg)](https://pinia.vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue--Router-4.x-blue.svg)](https://router.vuejs.org/)
[![Vue I18n](https://img.shields.io/badge/vue--i18n-9.x-orange.svg)](https://kazupon.github.io/vue-i18n/)
[![Toastification](https://img.shields.io/badge/vue--toastification-2.x-lightgrey)](https://github.com/Maronato/vue-toastification)
[![Node](https://img.shields.io/badge/Node.js-v21.7.1-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.8.2-red.svg)](https://www.npmjs.com/)

## 📋 Описание

Тестовое задание: создать SPA-приложение на Vue 3, в котором пользователь может заполнить информацию о себе и своих детях. Вводимые данные не отправляются на сервер и сохраняются только в состоянии приложения. После нажатия на кнопку "Сохранить" пользователь переходит на страницу "Превью", где отображается введённая информация.

## 🚀 Функционал

- Пользователь может ввести данные и информацию о детях
- Доступен предпросмотр введенных данных
- Можно добавить до 5 детей, кнопка `+` для добавления ребёнка исчезает после достижения лимита
- Добавлена базовая валидация: все поля обязательные, возраст не может быть отрицательным.

## 🛠️ Установка и запуск

Используйте следующии версии node v21.7.1, npm 10.8.2

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/KristinaBalashova/user-children-form.git
   ```
2. **Перейти в репозиторий:**
   ```bash
   cd user-children-form
   ```
3. **Установить зависимости:**
   ```bash
   npm install
   ```
4. **Запустить локальный сервер:**
   ```bash
   npm run dev
   ```
