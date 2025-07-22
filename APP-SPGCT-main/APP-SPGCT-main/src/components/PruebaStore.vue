<template>
  <div>este el componente prueba store</div>
  <div>
    {{ counterStore.counter }}
  </div>
  {{ counterStore.doubleCount }}
  <q-btn
    color="white"
    text-color="black"
    label="Standard"
    @click="counterStore.increment"
  />
  <q-btn
    color="white"
    text-color="black"
    label="Obtener doble"
    @click="counterStore.doubleCount"
  />
</template>
<script setup lang="ts">
import { useCounterStore } from 'app/src/stores/example-store';
import { ref } from 'vue';

const counterStore = useCounterStore();

const counter = ref(counterStore.counter);
</script>
