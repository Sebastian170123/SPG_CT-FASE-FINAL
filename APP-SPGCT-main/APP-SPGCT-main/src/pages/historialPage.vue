<template>
  <div id="ProductoresPage">
    <puntaje-productores v-if="cargarComponente" />
    <div v-else class="q-mt-md row justify-center">
      <q-btn label="Cargar productores" color="primary" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onBeforeMount, ref } from 'vue';
import PuntajeProductores from 'src/components/HistorialProductores.vue';

const $q = useQuasar();
const cargarComponente = ref<boolean>(false);

onBeforeMount(() => {
  cargarComponente.value = true; // Se carga el componente directamente sin pedir autenticación
});
</script>

<style scoped lang="scss"></style>
