import { defineStore } from 'pinia'
import { useLocalStorage } from '../../../composables/useLocalStorage'

interface ThemeState {
  globalBackground: string;
  globalText: string;
  sectionTitle: string;
  sectionText: string;
}

const defaultTheme: ThemeState = {
  globalBackground: '#ffffff',
  globalText: '#333333',
  sectionTitle: '#007BFF',
  sectionText: '#555555',
}

const themes = {
  default: {
    globalBackground: '#ffffff',
    globalText: '#333333',
    sectionTitle: '#007BFF',
    sectionText: '#555555',
  },
  dark: {
    globalBackground: '#1a202c',
    globalText: '#e2e8f0',
    sectionTitle: '#667eea',
    sectionText: '#a0aec0',
  },
  mint: {
    globalBackground: '#e0f7fa',
    globalText: '#004d40',
    sectionTitle: '#00897b',
    sectionText: '#00695c',
  },
  ocean: {
    globalBackground: '#e3f2fd',
    globalText: '#0d47a1',
    sectionTitle: '#1976d2',
    sectionText: '#42a5f5',
  }
};

type ThemeName = keyof typeof themes;

export const useCustomizerStore = defineStore('customizer', () => {
  const theme = useLocalStorage<ThemeState>('customizer-theme', defaultTheme)

  function updateTheme(key: keyof ThemeState, value: string) {
    theme.value[key] = value
  }

  function applyTheme(themeName: ThemeName) {
    if (themes[themeName]) {
      theme.value = { ...themes[themeName] };
    }
  }

  return { theme, updateTheme, applyTheme }
})