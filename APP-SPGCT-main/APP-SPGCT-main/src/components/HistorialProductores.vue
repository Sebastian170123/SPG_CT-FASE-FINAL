<template>
  <div id="HistorialProductores">
    <div class="text-h5 q-pt-md q-px-md text-weight-medium">
      Lista de productores agregados en este dispositivo: total (<span class="text-negative">{{ listaProductores ?
        listaProductores.length : 0 }}</span>)
    </div>
    <div class="row q-pa-md">
      <div class="col-4 offset-8">
        <q-item-label>¿Último número de ficha?</q-item-label>
        <q-input v-model="numeroFicha" label="Opcional" type="number" />
      </div>
      <div class="col-12">
        <q-item-label>¿Buscar por nombre de veedor?</q-item-label>
        <q-select v-model="veedor" :options="[...nombresVeedores, 'Todos']" label="Opcional" />
      </div>
    </div>
    <div class="row q-pa-md" v-if="veedor != 'Todos'">
      <div class="col-xs-12 col-sm-6">
        <q-item-label class="text-body2">
          {{ `El veedor con nombre "${veedor.toLocaleUpperCase()}", ha realizado "${filtroProductores ?
            filtroProductores.length : 0}" veeduría${filtroProductores && filtroProductores.length > 1 ? 's' : ''}.` }}
        </q-item-label>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row q-col-gutter-md justify-end q-mx-md">
        </div>
      </div>
    </div>
    <div v-for="(productor, i) in filtroProductores" :key="productor.datosGenerales.cedula" class="q-pa-md">
      <div class="row shadow-1">
        <div class="col-12 q-px-md q-py-md row bg-grey-4">
          <div class="col-10 row text-subtitle1">
            <div class="col-12 text-weight-medium">Productor:</div>
            <div class="col-12">Nombre: {{ productor.datosGenerales.nombre }}</div>
            <div class="col-12">Cédula: {{ productor.datosGenerales.cedula }}</div>
            <div class="col-12">Ficha Número: {{ generarSerial(i + 1 + Number(numeroFicha)) }}</div>
          </div>
          <div class="col-2 column items-end">
            <div class="col">
              <!--<q-btn icon="download" color="positive" @click="descargarRegistro(productor)" round /> -->
            </div>
            <div class="col">
              <!--<q-btn icon="delete" color="negative" @click="eliminarProductor(productor.datosGenerales.cedula)" round /> -->

            </div>
          </div>
        </div>
        <div class="col-12">
          <q-separator />
        </div>
        <div class="col-12 q-px-md q-pt-md row">
          <div class="col-8 text-subtitle1 text-weight-medium">Veedor:</div>
          <div class="col-12">Nombre: {{ productor.datosVeedor?.nombre || 'No disponible' }}</div>
          <div class="col-12">Cédula: {{ productor.datosVeedor?.cedula || 'No disponible' }}</div>
          <div class="col-12">Organización: {{ productor.datosVeedor?.organizacionPert || 'No disponible' }}</div>
        </div>
        <div class="col-12 q-pa-md">
          <q-list bordered separator>
            <q-item>
              <q-item-section>Puntaje por dimensión</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Dimensión política</q-item-section>
              <q-item-section avatar>{{ productor.dimensionSocialCulturalPolitica?.dimensionPolitica21?.puntajeTotal ||
                'No disponible' }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Dimensión socio organizativa</q-item-section>
              <q-item-section avatar>{{
                productor.dimensionSocialCulturalPolitica?.dimensionSocioOrganizativa22?.puntajeTotal || 'No disponible'
              }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Dimensión cultural</q-item-section>
              <q-item-section avatar>{{ productor.dimensionSocialCulturalPolitica?.dimensionCultural23?.puntajeTotal ||
                'No disponible' }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Dimensión ecológica</q-item-section>
              <q-item-section avatar>{{ productor.dimensionEcologica?.puntajeTotal || 'No disponible'
                }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Dimensión económica</q-item-section>
              <q-item-section avatar>{{ productor.dimensionEconomica?.puntajeTotal || 'No disponible'
                }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Total</q-item-section>
              <q-item-section avatar>{{
                numeroDecimal((productor.dimensionSocialCulturalPolitica?.dimensionPolitica21?.puntajeTotal || 0) +
                  (productor.dimensionSocialCulturalPolitica?.dimensionSocioOrganizativa22?.puntajeTotal || 0) +
                  (productor.dimensionSocialCulturalPolitica?.dimensionCultural23?.puntajeTotal || 0) +
                  (productor.dimensionEcologica?.puntajeTotal || 0) +
                  (productor.dimensionEconomica?.puntajeTotal || 0)) }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { numeroDecimal } from 'src/utils/utils';
//import data from '../../dataLocalStore/data.json';
import { IProductor } from 'src/models/spgct.models';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { api } from '../../src/boot/axios';
import axios from 'axios';

const $q = useQuasar();
const listaProductores = ref<IProductor[]>([]);

const numeroFicha = ref(0);
const nombresVeedores = ref<string[]>([]);
const veedor = ref('Todos');
onMounted(() => {
  cargarProductores();
});

function cargarDataLocal() {
  $q.localStorage.set('productores', data);
  cargarProductores();
}
async function descargarTodo() {
  try {
    const data = $q.localStorage.getItem('productores');
    const dataStr = JSON.stringify(data);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    console.log(dataStr);
    await Filesystem.writeFile({
      path: `productores-${generarUUID()}.text`,
      data: dataStr,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    $q.notify({
      color: 'positive',
      message: 'Registros descargados con éxito',
      icon: 'done',
    });
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: 'Error al descargar los registros',
      icon: 'report_problem',
    });
  }
}

function generarUUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}

function eliminarTodos() {
  $q.dialog({
    title: 'Eliminar todos los productores',
    message:
      '¿Está seguro de realizar esta acción?, estos cambios no se pueden revertir.',
    prompt: {
      model: '',
      type: 'password', // optional
      isValid: (val) => val === 'desapro24',
      autocomplete: 'off',
    },
    cancel: true,
    persistent: true,
  }).onOk(() => {
    $q.localStorage.remove('productores');
    cargarProductores();
  });
}

function eliminarProductor(cedula: string) {
  $q.dialog({
    title: 'Eliminar productor',
    message:
      '¿Está seguro de realizar esta acción?, estos cambios no se pueden revertir. Introducir la contraseña ',

    prompt: {
      model: '',
      type: 'password', // optional
      isValid: (val) => val === 'desapro24',
      autocomplete: 'off',
    },
    cancel: true,
    persistent: true,
  }).onOk(() => {
    const nuevoArreglo = listaProductores.value.filter(
      (productor: IProductor) => productor.datosGenerales.cedula !== cedula
    );

    $q.localStorage.set('productores', nuevoArreglo);
    cargarProductores();
  });
}

async function descargarRegistro(productor: IProductor) {
  try {
    const data = productor;
    const dataStr = JSON.stringify(data);
    console.log('Datos tos puros del IProductor', data);
    console.log('Datos que se descargaran:', dataStr);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    await Filesystem.writeFile({
      path: `${productor.datosGenerales.cedula}-${generarUUID()}.json`,
      data: dataStr,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    $q.notify({
      color: 'positive',
      message: 'Registro descargado con éxito',
      icon: 'done',
    });
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: 'Error al descargar los registros',
      icon: 'report_problem',
    });
  }

}


function cargarProductores() {

  if (!listaProductores.value) return;
  listaProductores.value = $q.localStorage.getItem('productores') || [];
  nombresVeedores.value = Array.from(
    new Set(
      listaProductores.value.map((productor: IProductor) =>
        productor.datosVeedor.nombre.trim()
      )
    )
  );
}

function generarSerial(numero: number) {
  // Formato de cadena con ceros a la izquierda para asegurar 4 dígitos
  const formatoSerial = 'spgct-' + numero.toString().padStart(4, '0');

  // Devolver el serial con el formato adecuado
  return formatoSerial;
}
const filtroProductores = computed(() => {
  if (!listaProductores.value) return;
  if (veedor.value !== 'Todos') {
    return listaProductores.value.filter(
      (productor: IProductor) =>
        productor.datosVeedor.nombre.trim().toLowerCase() ==
        veedor.value.toLocaleLowerCase().trim()
    );
  } else {
    return listaProductores.value;
  }
});
// Función que sube los datos a la base de datos utilizando el dataStr recibido
function subirDatos(productor: IProductor) {
  $q.dialog({
    title: 'Cargar productor',
    message: 'Si desea subir los datos introducir la contraseña',
    prompt: {
      model: '',
      type: 'password',
      isValid: (val) => val === 'desapro24',
      autocomplete: 'off',
    }
  }).onOk(() => {
    const data = productor;
    const dataStr = JSON.stringify(data);
    console.log('Datos preparados para subir:', dataStr);

    // Realiza la solicitud POST hacia tu API
    api.post('Productor', data)
      .then((response) => {
        console.log('Datos subidos con éxito:', response.data);
        // Aquí puedes manejar la respuesta exitosa, como mostrar un mensaje o redirigir
        $q.notify({
          color: 'positive',
          message: 'Datos subidos con éxito',
          icon: 'done',
        });
      })
      .catch((error) => {
        console.error('Error al subir los datos:', error);
        // Aquí puedes manejar el error, como mostrar una notificación
        $q.notify({
          color: 'negative',
          message: 'Error al subir los registros',
          icon: 'report_problem',
        });
      });
  });

}
</script>

<style scoped lang="scss"></style>
