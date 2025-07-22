<template>
  <div id="DashBoardPage">
    <q-list separator padding bordered class="rounded-borders">
      <q-expansion-item label="Dashboard Full">

        <DashBoard v-if="cargarTabla" />

        <div v-else class="q-mt-md row justify-center">
          <q-btn @click="modalAutentificar()" label="Cargar Dashboard" color="primary" />

        </div>
      </q-expansion-item>

    </q-list>
    <div v-if="cargarTabla">
      <q-list separator padding bordered class="rounded-borders">


        <q-expansion-item label="Datos Generales">

          <DashBoardDatosGenerales />
        </q-expansion-item>

        <q-expansion-item label="Dimencion Politica">
          <DashBoardDimecionPolitica />

        </q-expansion-item>
        <q-expansion-item label="Dimencion Cultural ">
          <DashBoardDimencionCultural />

        </q-expansion-item>
        <q-expansion-item label="Dimencion Socio Organizativa">
          <DashBoardDimecionSocioOrganizativa />

        </q-expansion-item>
        <q-expansion-item label="Dimension Ecologica">
          <DashBoardDimencionEcologica />


        </q-expansion-item>
        <q-expansion-item label="Dimension Economica">
          <DashBoardDimencionEconomica />

        </q-expansion-item>
      </q-list>

    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onBeforeMount, ref } from 'vue';
import DashBoard from 'src/components/DashBoard.vue';
import DashBoardDatosGenerales from 'src/components/DashBoard-datosGenerales.vue';
import DashBoardDimecionPolitica from 'src/components/DashBoard-dimecionPolitica.vue';
import DashBoardDimencionCultural from 'src/components/DashBoard-dimencionCultural.vue';
import DashBoardDimecionSocioOrganizativa from 'src/components/DashBoard-dimecionSocioOrganizativa.vue';
import DashBoardDimencionEcologica from 'src/components/DashBoard-dimencionEcologica.vue';
import DashBoardDimencionEconomica from 'src/components/DashBoard-dimencionEconomica.vue';

const cargarTabla = ref<boolean>(false);

// Eliminar la llamada al modal y la función de autenticación
// onBeforeMount(() => {
//   modalAutentificar();
// });

// Puedes inicializar cargarTabla en true si ya no necesitas la autenticación
cargarTabla.value = true;
</script>

<style scoped lang="scss"></style>
