<template>

  <div>
    <q-table flat bordered title="Datos Generales" :rows="rows" :columns="columns" row-key="name" binary-state-sort
      separator="cell">
      <template v-slot:body="props">

        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td> <q-td key="veedor" :props="props">
            {{ props.row.veedor }}
          </q-td>
          <q-td key="cedulav" :props="props">
            {{ props.row.cedulav }}
          </q-td>
          <q-td key="organizacionv" :props="props">
            {{ props.row.organizacionv }}
          </q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
          </q-td>
          <q-td key="edad" :props="props">
            {{ props.row.edad }}
          </q-td>
          <q-td key="cedula" :props="props">
            <div class="text-pre-wrap">{{ props.row.cedula }}</div>
          </q-td>
          <q-td key="fecha" :props="props">
            {{ props.row.fecha }}

          </q-td>
          <q-td key="instruccion" :props="props">
            {{ props.row.instruccion }}

          </q-td>
          <q-td key="numhombre" :props="props">
            {{ props.row.numhombre }}

          </q-td>
          <q-td key="nummujeres" :props="props">
            {{ props.row.nummujeres }}

          </q-td>
          <q-td key="totalhijos" :props="props">
            {{ props.row.totalhijos }}

          </q-td>
          <q-td key="telefono" :props="props">
            {{ props.row.telefono }}

          </q-td>
          <q-td key="correo" :props="props">
            {{ props.row.correo }}
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
          <q-td key="ubichacraBar" :props="props">

            {{ props.row.ubichacraBar }}

          </q-td>
          <q-td key="ubichacraLat" :props="props">

            {{ props.row.ubichacraLat }}

          </q-td>
          <q-td key="ubichacraLon" :props="props">

            {{ props.row.ubichacraLon }}

          </q-td>
          <q-td key="ubichacraAlt" :props="props">

            {{ props.row.ubichacraAlt }}

          </q-td>
          <q-td key="ubichacraZon" :props="props">

            {{ props.row.ubichacraZon }}

          </q-td>
          <q-td key="ubichacraCla" :props="props">

            {{ props.row.ubichacraCla }}

          </q-td>
          <q-td key="organizacionPert" :props="props">
            {{ props.row.organizacionPert }}

          </q-td>
          <q-td key="anionsCultiv" :props="props">
            {{ props.row.anionsCultiv }}

          </q-td>
          <q-td key="numVeedurias" :props="props">
            {{ props.row.numVeedurias }}

          </q-td>
          <q-td key="produtCertif" :props="props">
            {{ props.row.produtCertif }}

          </q-td>
          <q-td key="tiposTerrenos" :props="props">
            {{ props.row.tiposTerrenos }}
          </q-td>
          <q-td key="tiposTerrenosRie" :props="props">
            {{ props.row.tiposTerrenosRie }}
          </q-td>
          <q-td key="tiposTerrenosAre" :props="props">
            {{ props.row.tiposTerrenosAre }}
          </q-td>
          <q-td key="totalMetrosCuadrados" :props="props">
            {{ props.row.totalMetrosCuadrados }}
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
import { useRouter } from 'vue-router';
import { Workbook } from 'exceljs';
import { computed } from 'vue';
const $q = useQuasar();
const $router = useRouter();
const productorStore = useProductor();
const productores = ref<IProductorModel[]>([]);
const filter = ref('');
const grid = ref(false);
onMounted(async () => {
  try {
    productores.value = await
      productorStore.getProductores();
  } catch (error) {
    console.error(error);
  }
});;

function generica(dato: any) {
  console.log(dato);
}
const columns: QTableColumn[] = [
  { name: 'id', label: 'id', align: 'center', field: 'id' },
  { name: 'veedor', label: 'Veedor', align: 'center', field: 'veedor' },
  { name: 'cedulav', label: 'Cedula', align: 'center', field: 'cedulav' },
  { name: 'organizacionv', label: 'Organizacion Pertenece', align: 'center', field: 'organizacionv' },
  { name: 'nombre', label: 'Nombre', align: 'center', field: 'nombre' },
  { name: 'edad', label: 'Edad', align: 'center', field: 'edad' },
  { name: 'cedula', label: 'Cedula', align: 'center', field: 'cedula' },
  { name: 'fecha', label: 'Fecha de veduria', align: 'center', field: 'fecha' },
  {
    name: 'instruccion',
    label: 'Instruccion',
    align: 'center',
    field: 'instruccion',
  },
  {
    name: 'numhombre',
    label: 'Hijos hombres ',
    align: 'center',
    field: 'numhombre',
  },
  {
    name: 'nummujeres',
    label: 'Hijos mujeres ',
    align: 'center',
    field: 'nummujeres',
  },
  {
    name: 'totalhijos',
    label: 'Total hijos ',
    align: 'center',
    field: 'totalhijos',
  },
  { name: 'telefono', label: 'Telefono', align: 'center', field: 'telefono' },
  { name: 'correo', label: 'Correo', align: 'center', field: 'correo' },
  { name: 'ubichacraPro', label: 'UbichacraPro', align: 'center', field: 'ubichacraPro' },
  { name: 'ubichacraCan', label: 'UbichacraCan', align: 'center', field: 'ubichacraCan' },
  { name: 'ubichacraPar', label: 'UbichacraPar', align: 'center', field: 'ubichacraPar' },
  { name: 'ubichacraCom', label: 'UbichacraCom', align: 'center', field: 'ubichacraCom' },
  { name: 'ubichacraBar', label: 'UbichacraBar', align: 'center', field: 'ubichacraBar' },
  { name: 'ubichacraLat', label: 'UbichacraLat', align: 'center', field: 'ubichacraLat' },
  { name: 'ubichacraLon', label: 'UbichacraLon', align: 'center', field: 'ubichacraLon' },
  { name: 'ubichacraAlt', label: 'ubichacraAlt', align: 'center', field: 'ubichacraAlt' },
  { name: 'ubichacraZon', label: 'UbichacraZon', align: 'center', field: 'ubichacraZon' },
  { name: 'ubichacraCla', label: 'UbichacraCla', align: 'center', field: 'ubichacraCla' },


  {
    name: 'organizacionPert',
    label: 'Organizacion',
    align: 'center',
    field: 'organizacionPert',
  },
  {
    name: 'anionsCultiv',
    label: 'Años cultivando',
    align: 'center',
    field: 'anionsCultiv',
  },
  {
    name: 'numVeedurias',
    label: 'Numero de Veedurias',
    align: 'center',
    field: 'numVeedurias',
  },
  {
    name: 'produtCertif',
    label: 'Produtor Certificado',
    align: 'center',
    field: 'produtCertif',
  },
  { name: 'tiposTerrenos', label: 'Tipo de terreno', align: 'center', field: 'tiposTerrenos' },
  { name: 'tiposTerrenosRie', label: 'Tipo de terreno con riego', align: 'center', field: 'tiposTerrenosRie' },
  { name: 'tiposTerrenosAre', label: 'Terreno area Total', align: 'center', field: 'tiposTerrenosAre' },

  {
    name: 'totalMetrosCuadrados',
    label: 'Total de m2',
    align: 'center',
    field: 'totalMetrosCuadrados',
  },

];
const rows = computed(() => {
  return productores.value.map((productor) => {
    return {
      
      id: productor.id,
      veedor: productor.datosVeedor.nombre,
      cedulav: productor.datosVeedor.cedula,
      organizacionv: productor.datosVeedor.organizacionPert,
      nombre: productor.datosGenerales.nombre,
      edad: productor.datosGenerales.edad,
      cedula: productor.datosGenerales.cedula,
      fecha: productor.datosGenerales.fecha,
      instruccion: productor.datosGenerales.instruccion,
      jefehogar: productor.datosGenerales.jefeHogar,
      numhombre: productor.datosGenerales.numHombres,
      nummujeres: productor.datosGenerales.numMujeres,
      totalhijos: productor.datosGenerales.numHijos,
      telefono: productor.datosGenerales.telefono,
      correo: productor.datosGenerales.correo,
      ubichacraPro: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.provincia)
        .join(', \n')
      ,
      ubichacraCan: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.canton)
        .join(', \n')
      ,
      ubichacraPar: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.parroquia)
        .join(', \n')
      ,
      ubichacraCom: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.comunidad)
        .join(', \n')
      ,
      ubichacraBar: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.barrio)
        .join(', \n')
      ,
      ubichacraLat: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.coordenadas.latitud)
        .join(', \n')
      ,
      ubichacraLon: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.coordenadas.longitud)
        .join(', \n')
      ,
      ubichacraAlt: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.coordenadas.altura)
        .join(', \n')
      ,
      ubichacraZon: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.zona)
        .join(', \n')
      ,
      ubichacraCla: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.clave)
        .join(', \n')
      ,
      organizacionPert: productor.datosGenerales.organizacionPert,
      anionsCultiv: productor.datosGenerales.aniosCultiv,
      numVeedurias: productor.datosGenerales.numVeedurias,
      produtCertif: productor.datosGenerales.produtCertif,
      tiposTerrenos: productor.datosGenerales.tiposTerrenos
        .map((tiposTerrenos) => tiposTerrenos.tipTerreno)
        .join(', \n')
      ,
      tiposTerrenosRie: productor.datosGenerales.tiposTerrenos
        .map((tiposTerrenos) => tiposTerrenos.terrenosRiego)
        .join(', \n')
      ,
      tiposTerrenosAre: productor.datosGenerales.tiposTerrenos
        .map((tiposTerrenos) => tiposTerrenos.areaTerreno)
        .join(', \n'),
      totalMetrosCuadrados: productor.datosGenerales.totalMetrosCuadrados,
    };
  })
});
async function descargarTablaEnExcel() {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet('Mi tabla');
  const headerRow = columns.map((column) => column.label);
  worksheet.addRow(headerRow);
  rows.value.forEach((row) => {
    const dataRow = columns.map((column) => row[column.field]);
    worksheet.addRow(dataRow);
  });
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer],
    { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'DatosGenerales.xlsx';
  link.click();
  URL.revokeObjectURL(url);
  $q.notify({
      color: 'positive',
      message: 'Tabla descargada con exito',
      icon: 'done',
    })
}
</script>
