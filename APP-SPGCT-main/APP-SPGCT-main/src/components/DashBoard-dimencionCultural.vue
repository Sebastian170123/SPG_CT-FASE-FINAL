<template>

  <div>
    <q-table flat bordered title="Dimencion Cultural" :rows="rows" :columns="columns" row-key="name" binary-state-sort
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

          <q-td key="ubichacraPro" :props="props">

            {{ props.row.ubichacraPro }}

          </q-td>
          <q-td key="ubichacraCan" :props="props">

            {{ props.row.ubichacraCan }}

          </q-td>
          <q-td key="ubichacraPar" :props="props">

            {{ props.row.ubichacraPar }}

          </q-td>
          <q-td key="ubichacraCom" :props="props">

            {{ props.row.ubichacraCom }}

          </q-td>

          <q-td key="ubichacraZon" :props="props">

            {{ props.row.ubichacraZon }}

          </q-td>
          <q-td key="organizacionPert" :props="props">
            {{ props.row.organizacionPert }}

          </q-td>

          <q-td key="produtCertif" :props="props">
            {{ props.row.produtCertif }}

          </q-td>

          <q-td key="DC231" :props="props">
            {{ props.row.DC231 }}

          </q-td>
          <q-td key="subPregunta231" :props="props">
            {{ props.row.subPregunta231 }}

          </q-td>
          <q-td key="faselunar" :props="props">

            <q-list>
              <q-item v-for="(faselunar, i) in props.row.faselunar" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Faselunar</q-item-label>
                  <q-item-label>Luna nueva:{{ faselunar.lunaNuevaTierna }}</q-item-label>
                  <q-item-label>Luna cuarto creciente:{{ faselunar.lunaCuartoCreciente
                    }}</q-item-label>
                  <q-item-label>luna llena:{{ faselunar.lunaLlena }}</q-item-label>
                  <q-item-label>Luna menguante:{{ faselunar.lunaMenguante }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDC231" :props="props">
            {{ props.row.PuntajeDC231 }}
          </q-td>
          <q-td key="DC232" :props="props">
            {{ props.row.DC232 }}

          </q-td>
          <q-td key="PuntajeDC232" :props="props">
            {{ props.row.PuntajeDC232 }}
          </q-td>

          <q-td key="DC233Plan" :props="props">

            {{ props.row.DC233Plan }}
          </q-td>

          <q-td key="DC233Cur" :props="props">

            {{ props.row.DC233Cur }}
          </q-td>
          <q-td key="PuntajeDC233" :props="props">
            {{ props.row.PuntajeDC233 }}
          </q-td>
          <q-td key="DC234" :props="props">

            {{ props.row.DC234 }}
          </q-td>
          <q-td key="DCO234" :props="props">

            {{ props.row.DCO234 }}
          </q-td>
          <q-td key="PuntajeDC234" :props="props">
            {{ props.row.PuntajeDC234 }}
          </q-td>
          <!-- Aqui parte a -->
          <q-td key="DC235" :props="props">
            {{ props.row.DC235 }}
          </q-td>
          <q-td key="PuntajeDC235" :props="props">
            {{ props.row.PuntajeDC235 }}
          </q-td>
          <q-td key="DC236" :props="props">
            <q-list>
              <q-item-label> {{ props.row.DC236 }}</q-item-label>
            </q-list>
            <!-- <q-list>
                            <q-item v-for="(DC236, i) in props.row.DC236" :key="i">
                                <q-item-section>
                                    <q-item-label class="text-weight-medium text-light-green-14">Actividad del Randy
                                        Randy </q-item-label>
                                    <q-item-label>{{ i + 1 }}.{{ DC236.respuesta.label }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list> -->
          </q-td>
          <q-td key="PuntajeDC236" :props="props">
            {{ props.row.PuntajeDC236 }}
          </q-td>
          <q-td key="PuntajeDC" :props="props">
            {{ props.row.PuntajeDC }}
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
onMounted(async () => {
  try {
    productores.value = await productorStore.getProductores();
  } catch (error) {
    console.error(error);
  }
});;
const columns: QTableColumn[] = [

  { name: 'nombre', label: 'Nombre', align: 'center', field: 'nombre' },
  { name: 'cedula', label: 'Cedula', align: 'center', field: 'cedula' },
  { name: 'telefono', label: 'Telefono', align: 'center', field: 'telefono' },
  // { name: 'ubichacraPro', label: 'Provincia', align: 'center', field: 'ubichacraPro' },
  // { name: 'ubichacraCan', label: 'UbichacraCan', align: 'center', field: 'ubichacraCan' },
  // { name: 'ubichacraPar', label: 'UbichacraPar', align: 'center', field: 'ubichacraPar' },
  // { name: 'ubichacraCom', label: 'UbichacraCom', align: 'center', field: 'ubichacraCom' },
  // { name: 'ubichacraZon', label: 'UbichacraZon', align: 'center', field: 'ubichacraZon' },

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
  { name: 'DC231', label: '2.3.1 DC', align: 'center', field: 'DC231' },
  { name: 'subPregunta231', label: 'Sub 2.3.1 DC', align: 'center', field: 'subPregunta231' },
  { name: 'faselunar', label: 'Fase lunar', align: 'center', field: 'faselunar' },
  { name: 'PuntajeDC231', label: 'Puntaje2.3.1', align: 'center', field: 'PuntajeDC231' },
  { name: 'DC232', label: '2.3.2 DC', align: 'center', field: 'DC232' },
  { name: 'PuntajeDC232', label: 'Puntaje2.3.2', align: 'center', field: 'PuntajeDC232' },
  { name: 'DC233Plan', label: '2.3.3 DC Planta', align: 'center', field: 'DC233Plan' },
  { name: 'DC233Cur', label: '2.3.3 DC Cura', align: 'center', field: 'DC233Cur' },
  { name: 'PuntajeDC233', label: 'Puntaje2.3.3', align: 'center', field: 'PuntajeDC233' },
  { name: 'DC234', label: '2.3.4 DC', align: 'center', field: 'DC234' },
  { name: 'DCO234', label: '2.3.4 Opci', align: 'center', field: 'DCO234' },
  { name: 'PuntajeDC234', label: 'Puntaje2.3.4', align: 'center', field: 'PuntajeDC234' },
  { name: 'DC235', label: '2.3.5 DC', align: 'center', field: 'DC235' },
  { name: 'PuntajeDC235', label: 'Puntaje2.3.5', align: 'center', field: 'PuntajeDC235' },
  { name: 'DC236', label: '2.3.6 DC', align: 'center', field: 'DC236' },
  { name: 'PuntajeDC236', label: 'Puntaje2.3.6', align: 'center', field: 'PuntajeDC236' },
  { name: 'PuntajeDC', label: 'Puntaje DC', align: 'center', field: 'PuntajeDC' },
];
const rows = computed(() => {
  return productores.value.map((productor) => {
    return {
      nombre: productor.datosGenerales.nombre,
      cedula: productor.datosGenerales.cedula,
      telefono: productor.datosGenerales.telefono,
      ubichacraPro: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.provincia)
        .join(', \n ')
      ,
      ubichacraCan: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.canton)
        .join(', \n ')
      ,
      ubichacraPar: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.parroquia)
        .join(', \n ')
      ,
      ubichacraCom: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.comunidad)
        .join(', \n')
      ,
      ubichacraZon: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.zona)
        .join(', \n')
      ,
      organizacionPert: productor.datosGenerales.organizacionPert,
      produtCertif: productor.datosGenerales.produtCertif,

      DC231: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.respuesta.label,
      subPregunta231: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.subPregunta231.respuesta.label,
      faselunar: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.faseLunar,
      PuntajeDC231: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.puntos,
      DC232: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg232.respuesta.label,
      PuntajeDC232: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg232.puntos,
      DC233Plan: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg233.plantasC
        .map((plantasC) => plantasC.plantaMedic.label)
        .join(', \n')
      ,
      DC233Cur: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg233.plantasC
        .map((plantasC) => plantasC.cura)
        .join(', \n')
      ,
      PuntajeDC233: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg233.puntos,
      DC234: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg234.respuesta
        .map((respuesta) => respuesta.label)
        .join(', \n')
      ,
      DCO234: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg234Opcional.respuesta
        .map((respuesta) => respuesta.label)
        .join(', \n'),
      PuntajeDC234: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg234.puntos,
      DC235: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg235.respuesta.label,
      PuntajeDC235: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg235.puntos,
      DC236: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg236.items
        .map((items) => items.nombre + ':' + items.respuesta.label)
        .join(',')
      ,
      PuntajeDC236: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg236.puntos,
      PuntajeDC: productor.dimensionSocialCulturalPolitica.dimensionCultural23.puntajeTotal,
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
  link.download = 'DimencionCultural.xlsx';
  link.click();
  URL.revokeObjectURL(url);
}

</script>
