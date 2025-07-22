<template>
  <q-page class="contenedor q-mx-auto">
    <q-btn v-if="!datosVeedorF" label="Regresar" @click="goBack" class="q-mb-md" color="primary" />
    <DatosVeedor v-if="datosVeedorF" @submit="datosVeedorForm" />
    <datos-generales v-if="datosGeneralesF" @submit="datosGeneralesForm" />
    <SocioCulturalPolitica v-if="socioCulturalPoliticaF" @submit="socioCulturalPoliticaForm" />
    <DimensionEcologica v-if="dimensionEcologicaF" @submit="dimensionEcologicaForm" />
    <DimensionEconomica v-if="dimensionEconomicaF" @submit="dimensionEconomicaForm" />
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DatosVeedor from 'src/components/DatosVeedor.vue';
import DatosGenerales from 'src/components/DatosGenerales.vue';
import DimensionEcologica from 'src/components/DimensionEcologica.vue';
import DimensionEconomica from 'src/components/DimensionEconomica.vue';
import SocioCulturalPolitica from 'src/components/SocioCulturalPolitica.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const datosVeedorF = ref<boolean>(true);
const datosGeneralesF = ref<boolean>(false);
const socioCulturalPoliticaF = ref<boolean>(false);
const dimensionEcologicaF = ref<boolean>(false);
const dimensionEconomicaF = ref<boolean>(false);
function datosVeedorForm($ev: boolean) {
  datosVeedorF.value = !datosVeedorF.value;
  datosGeneralesF.value = !datosGeneralesF.value;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function datosGeneralesForm($ev: boolean) {
  datosGeneralesF.value = !datosGeneralesF.value;
  socioCulturalPoliticaF.value = !socioCulturalPoliticaF.value;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function socioCulturalPoliticaForm($ev: boolean) {
  socioCulturalPoliticaF.value = !socioCulturalPoliticaF.value;
  dimensionEcologicaF.value = !dimensionEcologicaF.value;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function dimensionEcologicaForm($ev: boolean) {
  dimensionEcologicaF.value = !dimensionEcologicaF.value;
  dimensionEconomicaF.value = !dimensionEconomicaF.value;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function dimensionEconomicaForm($ev: boolean) {
  if ($ev) {
    $q.dialog({
      title: 'Confirmación',
      message: 'Productor agregado exitosamente',
    })
      .onOk(() => {
        window.location.reload();
      })

      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        window.location.reload();
      });
  }
}
function goBack() {
  if (dimensionEconomicaF.value) {
    dimensionEconomicaF.value = !dimensionEconomicaF.value;
    dimensionEcologicaF.value = !dimensionEcologicaF.value;
  } else if (dimensionEcologicaF.value) {
    dimensionEcologicaF.value = !dimensionEcologicaF.value;
    socioCulturalPoliticaF.value = !socioCulturalPoliticaF.value;
  } else if (socioCulturalPoliticaF.value) {
    socioCulturalPoliticaF.value = !socioCulturalPoliticaF.value;
    datosGeneralesF.value = !datosGeneralesF.value;
  } else {
    datosVeedorF.value = !datosVeedorF.value;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
</script>
