<template>
  <div class="customizer-panel-container">
    <h3 class="panel-title">Personalizar Estilos</h3>
    
    <div class="form-group">
      <label for="theme-selector">Temas Prefabricados</label>
      <select id="theme-selector" @change="handleThemeChange" class="theme-select">
        <option value="default">Default</option>
        <option value="dark">Dark</option>
        <option value="mint">Mint</option>
        <option value="ocean">Ocean</option>
        </select>
    </div>

    <hr />

    <div class="form-group">
      <label for="global-bg">Color de Fondo Global</label>
      <input type="color" id="global-bg" v-model="theme.globalBackground" />
    </div>

    <div class="form-group">
      <label for="global-text">Color de Texto Global</label>
      <input type="color" id="global-text" v-model="theme.globalText" />
    </div>

    <hr />

    <div class="form-group">
      <label for="section-title">Color de Título de Sección</label>
      <input type="color" id="section-title" v-model="theme.sectionTitle" />
    </div>

    <div class="form-group">
      <label for="section-text">Color de Texto de Sección</label>
      <input type="color" id="section-text" v-model="theme.sectionText" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCustomizerStore } from '../store/customizerStore';

const store = useCustomizerStore();
console.log(store);
const theme = computed(() => store.theme);

const handleThemeChange = (event: Event) => {
  const themeName = (event.target as HTMLSelectElement).value as 'default' | 'dark' | 'mint' | 'ocean';
  store.applyTheme(themeName);
};

</script>

<style scoped>
  @import "@/css/CustomizerPanel.css";
</style>