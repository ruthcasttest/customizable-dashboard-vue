<template>
  <div class="base-layout">
    <BaseHeader />
    <main class="content-container">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/Header.vue'
import BaseFooter from '@/components/Footer.vue'
</script>