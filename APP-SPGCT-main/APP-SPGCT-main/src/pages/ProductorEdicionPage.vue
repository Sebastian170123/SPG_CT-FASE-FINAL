<template>
  <div id='ProductorEdicionPage'>
    <q-list separator padding bordered class="rounded-borders">
      <q-expansion-item label="Datos Veedor">
        <DatosVeedor />

      </q-expansion-item>

      <q-expansion-item label="Datos Generales">
        <DatosGenerales />

      </q-expansion-item>

      <q-expansion-item label="Socio Cultural Politica">
        <SocioCulturalPolitica />

      </q-expansion-item>
      <q-expansion-item label="Dimension Ecologica">
        <DimensionEcologica />


      </q-expansion-item>
      <q-expansion-item label="Dimension Economica">
        <DimensionEconomica />

      </q-expansion-item>
    </q-list>

    <div>
      <q-btn @click="actualizarProductor()" label="Actualizar Productor" color="positive" />
      <q-btn @click="goBack()" label="Volver" color="secondary" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { useQuasar } from 'quasar';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useProductor } from '../stores/backend/Productor';

import { IProductorModel } from 'src/models/spgct.models';
import DatosVeedor from 'src/components/DatosVeedor.vue';
import DatosGenerales from 'src/components/DatosGenerales.vue';
import SocioCulturalPolitica from 'src/components/SocioCulturalPolitica.vue';
import DimensionEcologica from 'src/components/DimensionEcologica.vue';
import { useDatosVeedor } from '../stores/datos-veedor';
import { useDatosGenerales } from '../stores/datos-generales';
import { useSocioCulturalPolitica } from '../stores/socio-cultural-politica';
import { useDimensionEcologica } from '../stores/dimension-ecologica';
import { useDimensionEconomica } from '../stores/dimension-economica';
import DimensionEconomica from 'src/components/DimensionEconomica.vue';


const $q = useQuasar();
const productorStore = useProductor();

const productor = ref<IProductorModel>();
const veedorStore = useDatosVeedor();
const datosGeneralesStore = useDatosGenerales();
const socioCulturalPoliticaStore = useSocioCulturalPolitica();
const dimensionEcologicaStore = useDimensionEcologica();
const dimensionEconomicaStore = useDimensionEconomica();


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
onMounted(async () => {
  await $q.loading.show();
  console.log(props.id);
  const resProductor = await productorStore.getProductor(props.id);
  veedorStore.$state = resProductor.datosVeedor;
  datosGeneralesStore.$state = resProductor.datosGenerales;
  dimensionEconomicaStore.$state = resProductor.dimensionEconomica;
  dimensionEcologicaStore.$state = resProductor.dimensionEcologica;
  socioCulturalPoliticaStore.$state = resProductor.dimensionSocialCulturalPolitica;
  console.log(resProductor);
  await $q.loading.hide();
});

async function actualizarProductor(): Promise<void> {
  try {
    if (productor.value) {
      await productorStore.updateProductor(productor.value);
      $q.notify({
        type: 'positive',
        message: 'Productor actualizado correctamente',
      });
    } else {
      $q.notify({
        type: 'negative',
        message: 'No se pudo encontrar el productor',
      });
    }
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Error actualizando productor: ',
    });
  }
}
function goBack(): void {
  $q.dialog({
    title: 'Volver',
    message: '¿Está seguro de volver?',
    cancel: true,
  }).onOk(() => {
    window.history.back();
  });
}

</script>
<style scoped lang='scss'></style>
