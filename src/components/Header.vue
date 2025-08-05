<template>
  <header class="base-header">
    <nav class="nav-bar">
      <div class="logo">
        <router-link to="/">
            <img src="./assets/logo.png" alt="">       
        </router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-link-item">Inicio</router-link>
        </li>
        <li>
          <router-link to="#" class="nav-link-item">Acerca de</router-link>
        </li>
        <li>
          <router-link to="#" class="nav-link-item">Servicios</router-link>
        </li>
      </ul>
      <button class="settings-button" @click="emit('toggle-panel')">
        <span class="material-symbols-outlined settings-icon">settings</span>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['toggle-panel']);
</script>

<style scoped>
@import "@/css/Header.css";
</style>