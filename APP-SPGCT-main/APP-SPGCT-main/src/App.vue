<template>
  <router-view />
</template>

<script setup lang="ts">
if (process.env.NODE_ENV === 'development') {
  localStorage.removeItem('authToken'); // Esto asegura que el authToken se borre en modo de desarrollo
}
</script>
