<template>
  <div class="main-container" :style="globalStyles">
    
    <button @click="togglePanel" :class="['hamburger', { 'is-active': isPanelOpen }]">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    
    <transition name="slide-in">
      <CustomizerPanel v-if="isPanelOpen" class="customizer-sidebar" />
    </transition>

    <div v-if="isPanelOpen" class="overlay" @click="togglePanel"></div>

    <main :class="['page-content-wrapper', { 'content-shifted': isPanelOpen }]">
      <Header @toggle-panel="togglePanel"/>
      <div class="page-body">
        <div class="page-header">
          <h1 class="header-title">Mi Página Personalizable</h1>
        </div>
        <section class="page-section" :style="sectionStyles">
          <h2 class="section-title">Sección de Contenido</h2>
          <p class="section-text">
            Este es un texto de ejemplo que hereda el estilo global, pero su título y el mismo texto tienen un estilo específico que lo sobrescribe.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCustomizerStore } from '@/modules/customizer/store/customizerStore'
import CustomizerPanel from '@/modules/customizer/components/CustomizerPanel.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

const store = useCustomizerStore()
const isPanelOpen = ref(window.innerWidth > 768)

function togglePanel() {
  isPanelOpen.value = !isPanelOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    isPanelOpen.value = true
  } else {
    isPanelOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const globalStyles = computed(() => ({
  backgroundColor: store.theme.globalBackground,
  color: store.theme.globalText,
}))

const sectionStyles = computed(() => ({
  '--section-title-color': store.theme.sectionTitle,
  '--section-text-color': store.theme.sectionText,
}))
</script>

<style scoped>
@import "@/css/HomePage.css";
</style>