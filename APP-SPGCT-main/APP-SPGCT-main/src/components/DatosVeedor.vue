<template>
  <q-page class="q-ma-md">
    <q-item-label class="text-h5 text-center text-weight-medium"
      >DATOS DEL VEEDOR</q-item-label
    >
    <q-form
      @submit="formDatosVeedorSubmit"
      class="row"
      id="FormularioVeedor"
      @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
    >
      <q-input
        type="text"
        v-model="datosVeedorStore.nombre"
        label="Nombre del veedor"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque el nombre',
          (val) =>
            /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]"
        class="col-12"
      />
      <q-input
        type="text"
        v-model="datosVeedorStore.cedula"
        label="Número de Cedula:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque su Cédula ',
          (val) => /^\d+$/.test(val) || 'Ingrese solo números',
          (val) => val.length == 10 || 'Cédula debe contener 10 números ',
        ]"
        class="col-12"
      />
      <q-select
        label="Nombre de la organización a la que pertenece"
        v-model="datosVeedorStore.organizacionPert"
        :options="opcOrganizaciones"
        lazy-rules
        :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        class="col-12"
      />

      <q-btn type="submit" label="Continuar" color="primary" class="col-12" />
    </q-form>
  </q-page>
</template>
<script setup lang="ts">
import { useDatosVeedor } from 'src/stores/datos-veedor';
import { useQuasar } from 'quasar';
import { useFormulariosControl } from 'src/stores/formularios-control';

const $q = useQuasar();
const datosVeedorStore = useDatosVeedor();
const formulariosControl = useFormulariosControl();
const emit = defineEmits(['submit']);

const opcOrganizaciones = [
  'ALLPAMANTA',
  'AMPAC',
  'AMPAGSU',
  'ASOPROAGICA',
  'ASOPROGEME',
  'ASOPROK',
  'BIOVIDA',
  'Discapacidad',
  'LA CAMPESINA',
  'MOVIMIENTO CANTONAL DE MUJERES',
  'NUEVA VIDA',
  'PROMOTORA SALUD',
  'PUEBLO KAYAMBI',
  'RED DE COMERCIO JUSTO',
  'UCAEBV',
  'UNOPAC',
];

function formDatosVeedorSubmit() {
  formulariosControl.setDatosVeedor(datosVeedorStore.$state);
  emit('submit', true);

  //el siguiente codigo se lo agrego para agregar un objeto de veerdores a la lista ya creada anteriormente
  /*const veedores = [
    {
      nombre: 'Veedor 1',
      cedula: '1718563792',
      organizacionPert: 'Cuniburo',
    },
    {
      nombre: 'Veedor 2',
      cedula: '1234567890',
      organizacionPert: 'La Campesina',
    },
    {
      nombre: 'Veedor 3',
      cedula: '9876543210',
      organizacionPert: 'Red de Comercio Justo',
    },
    {
      nombre: 'Veedor 4',
      cedula: '4567890123',
      organizacionPert: 'Pueblo Kayambi',
    },
    {
      nombre: 'Veedor 5',
      cedula: '7890123456',
      organizacionPert: 'Seguro Campesino',
    },
  ];
  //formulariosControl.setDatosVeedor(datosVeedorStore.$state);
  const listaProductores: any = $q.localStorage.getItem('productores') || [];
  // Función para obtener un veedor aleatorio de los cinco definidos
  const obtenerVeedorAleatorio = () =>
    veedores[Math.floor(Math.random() * veedores.length)];

  const listaRepetida = Array.from(
    { length: 5 },
    () => listaProductores
  ).flat();
  const listaConVeedores = listaRepetida.map((productor) => ({
    ...productor,
    datosVeedor: obtenerVeedorAleatorio(),
  }));

  console.log({ listaConVeedores });

  $q.localStorage.set('productores', listaConVeedores);
 */
}
</script>
