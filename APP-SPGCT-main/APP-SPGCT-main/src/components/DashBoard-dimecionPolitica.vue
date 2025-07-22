<template>

  <div>
    <q-table flat bordered title="Dimencion Politica" :rows="rows" :columns="columns" row-key="name" binary-state-sort
      separator="cell">
      <template v-slot:body="props">

        <q-tr :props="props">

          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
          </q-td>

          <q-td key="cedula" :props="props">
            <div class="text-pre-wrap">{{ props.row.cedula }}</div>
          </q-td>

          <q-td key="telefono" :props="props">
            {{ props.row.telefono }}

          </q-td>
          <q-td key="organizacionPert" :props="props">
            {{ props.row.organizacionPert }}

          </q-td>

          <q-td key="produtCertif" :props="props">
            {{ props.row.produtCertif }}

          </q-td>

          <q-td key="DP211" :props="props">
            {{ props.row.DP211 }}
          </q-td>
          <q-td key="PuntajeDP211" :props="props">
            {{ props.row.PuntajeDP211 }}
          </q-td>
          <q-td key="DP212" :props="props">
            {{ props.row.DP212 }}
          </q-td>
          <q-td key="PuntajeDP212" :props="props">
            {{ props.row.PuntajeDP212 }}
          </q-td>
          <q-td key="DP213PorSalud" :props="props">
            {{ props.row.DP213PorSalud }}
          </q-td>
          <q-td key="NoUsoQuimicos" :props="props">
            {{ props.row.NoUsoQuimicos }}
          </q-td>
          <q-td key="GenerarIngresos" :props="props">
            {{ props.row.GenerarIngresos }}
          </q-td>
          <q-td key="CuidarAmbiente" :props="props">
            {{ props.row.CuidarAmbiente }}
          </q-td>
          <q-td key="ProduccionAlimentosSanos" :props="props">
            {{ props.row.ProduccionAlimentosSanos }}
          </q-td>
          <q-td key="PuntajeDP213" :props="props">
            {{ props.row.PuntajeDP213 }}
          </q-td>
          <q-td key="DP214TenerSembrar" :props="props">
            {{ props.row.DP214TenerSembrar }}
          </q-td>
          <q-td key="DiversidadProductos" :props="props">
            {{ props.row.DiversidadProductos }}
          </q-td>

          <q-td key="PuntajeDP214" :props="props">
            {{ props.row.PuntajeDP214 }}
          </q-td>
          <q-td key="DP215" :props="props">
            {{ props.row.DP215 }}
          </q-td>
          <q-td key="PuntajeDP215" :props="props">
            {{ props.row.PuntajeDP215 }}
          </q-td><q-td key="PuntajeDP" :props="props">
            {{ props.row.PuntajeDP }}
          </q-td>
        </q-tr>

      </template>
      <template v-slot:top-right>
        <q-btn color="teal-10" icon-right="archive" label="Export to csv" no-caps @click="descargarTablaEnExcel" />
      </template>

    </q-table>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useQuasar, QTableColumn, QTabPanelProps, exportFile } from 'quasar';
import { useProductor } from '../stores/backend/Productor';
import { IProductorModel } from 'src/models/spgct.models';
import data from '../../dataLocalStore/data.json';
import { useRouter } from 'vue-router';
import { Workbook } from 'exceljs';
import { computed } from 'vue';

const $q = useQuasar();
const $router = useRouter();
const productorStore = useProductor();
const productores = ref<IProductorModel[]>([]);
const filter = ref('');
const grid = ref(false); 4
onMounted(async () => {
  try {
    productores.value = await productorStore.getProductores();
  } catch (error) {
    console.error(error);
  }
});;

function generica(dato: any) {
  console.log(dato);
}
const columns: QTableColumn[] = [
  { name: 'nombre', label: 'Nombre', align: 'center', field: 'nombre' },
  { name: 'cedula', label: 'Cedula', align: 'center', field: 'cedula' },
  { name: 'telefono', label: 'Telefono', align: 'center', field: 'telefono' },
  {
    name: 'organizacionPert',
    label: 'Organizacion',
    align: 'center',
    field: 'organizacionPert',
  },
  {
    name: 'produtCertif',
    label: 'Produtor Certificado',
    align: 'center',
    field: 'produtCertif',
  },

  {
    name: 'DP211',
    label: '2.1.1 DP',
    align: 'center',
    field: 'DP211',
  },
  {
    name: 'PuntajeDP211',
    label: 'Puntaje2.1.1',
    align: 'center',
    field: 'PuntajeDP211',
  },
  {
    name: 'DP212',
    label: '2.1.2 DP',
    align: 'center',
    field: 'DP212',
  },
  {
    name: 'PuntajeDP212',
    label: 'Puntaje2.1.2',
    align: 'center',
    field: 'PuntajeDP212',
  },
  { name: 'DP213PorSalud', label: 'DP213 Por Salud', align: 'center', field: 'DP213PorSalud' },
  { name: 'NoUsoQuimicos', label: 'No Uso Quimicos', align: 'center', field: 'NoUsoQuimicos' },
  { name: 'GenerarIngresos', label: 'Generar Ingresos', align: 'center', field: 'GenerarIngresos' },
  { name: 'CuidarAmbiente', label: 'CuidarAmbiente', align: 'center', field: 'CuidarAmbiente' },
  { name: 'ProduccionAlimentosSanos', label: 'Produccion Alimentos Sanos', align: 'center', field: 'ProduccionAlimentosSanos' },
  { name: 'PuntajeDP213', label: 'Puntaje2.1.3', align: 'center', field: 'PuntajeDP213' },
  { name: 'DP214TenerSembrar', label: '2.1.4 Tener y Sembrar Semillas', align: 'center', field: 'DP214TenerSembrar' },
  { name: 'DiversidadProductos', label: 'Diversidad Productos', align: 'center', field: 'DiversidadProductos' },

  { name: 'PuntajeDP214', label: 'Puntaje2.1.4', align: 'center', field: 'PuntajeDP214' },
  { name: 'DP215', label: '2.1.5 DP', align: 'center', field: 'DP215' },
  { name: 'PuntajeDP215', label: 'Puntaje2.1.5', align: 'center', field: 'PuntajeDP215' },
  { name: 'PuntajeDP', label: 'PuntajeTotal DP', align: 'center', field: 'PuntajeDP' },
];
const rows = computed(() => {
  return productores.value.map((productor) => {
    return {
      nombre: productor.datosGenerales.nombre,
      cedula: productor.datosGenerales.cedula,
      telefono: productor.datosGenerales.telefono,
      organizacionPert: productor.datosGenerales.organizacionPert,
      produtCertif: productor.datosGenerales.produtCertif,
      //Aqui comiemza la dimencion politica
      DP211: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg211.respuesta.label,
      PuntajeDP211: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg211.puntos,
      DP212: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg212.respuesta.label,
      PuntajeDP212: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg212.puntos,

      DP213PorSalud: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.items.find(
          item => item.nombre === 'Por Salud'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      NoUsoQuimicos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.items.find(
          item => item.nombre === 'No uso de Quimicos'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      GenerarIngresos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.items.find(
          item => item.nombre === 'Para Generar Ingresos'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      CuidarAmbiente: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.items.find(
          item => item.nombre === 'Por cuidar el ambiente'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      ProduccionAlimentosSanos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.items.find(
          item => item.nombre === 'Producción de Alimentos Sanos'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      PuntajeDP213: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.puntos,

      DP214TenerSembrar: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg214.items.find(
          item => item.nombre === 'Tener y Sembrar Semillas'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      DiversidadProductos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg214.items.find(
          item => item.nombre === 'Diversidad de Productos'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      PuntajeDP214: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg214.puntos,
      DP215: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg215.respuesta.label,
      PuntajeDP215: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg215.puntos,
      PuntajeDP: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.puntajeTotal,

    };
  })
});

async function descargarTablaEnExcel() {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet('Mi tabla');

  // Set header row
  const headerRow = columns.map((column) => column.label);
  worksheet.addRow(headerRow);

  // Add rows to the sheet
  rows.value.forEach((row) => {
    const dataRow = columns.map((column) => row[column.field]);
    worksheet.addRow(dataRow);
  });

  // Generate the Excel file
  const buffer = await workbook.xlsx.writeBuffer();

  // Download the Excel file
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'DimencionPolitica.xlsx';
  link.click();
  URL.revokeObjectURL(url);
}

</script>
