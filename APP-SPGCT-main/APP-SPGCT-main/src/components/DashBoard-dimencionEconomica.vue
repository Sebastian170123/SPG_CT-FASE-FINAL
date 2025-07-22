<template>

  <div>
    <q-table flat bordered title="Veedores" :rows="rows" :columns="columns" row-key="name" binary-state-sort
      separator="cell">
      <template v-slot:body="props">

        <q-tr :props="props">
          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
          </q-td>
          <q-td key="cedula" :props="props">
            <div class="text-pre-wrap">{{ props.row.cedula }}</div>
          </q-td>
          <q-td key="fecha" :props="props">
            {{ props.row.fecha }}
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
          <!-- Otra dimension -->
          <q-td key="DEC251" :props="props">
            {{ props.row.DEC251 }}
          </q-td>
          <q-td key="subPreguntaDEC251" :props="props">
            {{ props.row.subPreguntaDEC251 }}
          </q-td>
          <q-td key="porque251" :props="props">
            {{ props.row.porque251 }}
          </q-td>
          <q-td key="PuntajeDEC251" :props="props">
            {{ props.row.PuntajeDEC251 }}
          </q-td>
          <!-- <q-td key="DEC252pro" :props="props">
            {{ props.row.DEC252pro }}
          </q-td> -->
          <!--Cambios DEC252pro-->
          <q-td key="DEC252pro" :props="props">
            {{ props.row.DEC252pro }}
          </q-td>
          <q-td key="DEC252ing" :props="props">
            {{ props.row.DEC252ing }}
          </q-td>
          <q-td key="DEC252pie" :props="props">
            {{ props.row.DEC252pie }}
          </q-td>
          <q-td key="DEC252fer" :props="props">
            {{ props.row.DEC252fer }}
          </q-td>
          <q-td key="DEC252can" :props="props">
            {{ props.row.DEC252can }}
          </q-td>
          <q-td key="DEC252aut" :props="props">
            {{ props.row.DEC252aut }}
          </q-td>
          <q-td key="DEC252tru" :props="props">
            {{ props.row.DEC252tru }}
          </q-td>
          <!--Frutales-->
          <q-td key="DEC252proF" :props="props">
            {{ props.row.DEC252proF }}
          </q-td>
          <q-td key="DEC252ingF" :props="props">
            {{ props.row.DEC252ingF }}
          </q-td>
          <q-td key="DEC252pieF" :props="props">
            {{ props.row.DEC252pieF }}
          </q-td>
          <q-td key="DEC252ferF" :props="props">
            {{ props.row.DEC252ferF }}
          </q-td>
          <q-td key="DEC252canF" :props="props">
            {{ props.row.DEC252canF }}
          </q-td>
          <q-td key="DEC252autF" :props="props">
            {{ props.row.DEC252autF }}
          </q-td>
          <q-td key="DEC252truF" :props="props">
            {{ props.row.DEC252truF }}
          </q-td>
          <!--Granos-->
          <q-td key="DEC252proG" :props="props">
            {{ props.row.DEC252proG }}
          </q-td>
          <q-td key="DEC252ingG" :props="props">
            {{ props.row.DEC252ingG }}
          </q-td>
          <q-td key="DEC252pieG" :props="props">
            {{ props.row.DEC252pieG }}
          </q-td>
          <q-td key="DEC252ferG" :props="props">
            {{ props.row.DEC252ferG }}
          </q-td>
          <q-td key="DEC252canG" :props="props">
            {{ props.row.DEC252canG }}
          </q-td>
          <q-td key="DEC252autG" :props="props">
            {{ props.row.DEC252autG }}
          </q-td>
          <q-td key="DEC252truG" :props="props">
            {{ props.row.DEC252truG }}
          </q-td>
          <!-- Lacteos -->
          <q-td key="DEC252proL" :props="props">
            {{ props.row.DEC252proL }}
          </q-td>
          <q-td key="DEC252ingL" :props="props">
            {{ props.row.DEC252ingL }}
          </q-td>
          <q-td key="DEC252pieL" :props="props">
            {{ props.row.DEC252pieL }}
          </q-td>
          <q-td key="DEC252ferL" :props="props">
            {{ props.row.DEC252ferL }}
          </q-td>
          <q-td key="DEC252canL" :props="props">
            {{ props.row.DEC252canL }}
          </q-td>
          <q-td key="DEC252autL" :props="props">
            {{ props.row.DEC252autL }}
          </q-td>
          <q-td key="DEC252truL" :props="props">
            {{ props.row.DEC252truL }}
          </q-td>
          <!-- Huevos -->
          <q-td key="DEC252proH" :props="props">
            {{ props.row.DEC252proH }}
          </q-td>
          <q-td key="DEC252ingH" :props="props">
            {{ props.row.DEC252ingH }}
          </q-td>
          <q-td key="DEC252pieH" :props="props">
            {{ props.row.DEC252pieH }}
          </q-td>
          <q-td key="DEC252ferH" :props="props">
            {{ props.row.DEC252ferH }}
          </q-td>
          <q-td key="DEC252canH" :props="props">
            {{ props.row.DEC252canH }}
          </q-td>
          <q-td key="DEC252autH" :props="props">
            {{ props.row.DEC252autH }}
          </q-td>
          <q-td key="DEC252truH" :props="props">
            {{ props.row.DEC252truH }}
          </q-td>
          <!-- tuberculos -->
          <q-td key="DEC252proT" :props="props">
            {{ props.row.DEC252proT }}
          </q-td>
          <q-td key="DEC252ingT" :props="props">
            {{ props.row.DEC252ingT }}
          </q-td>
          <q-td key="DEC252pieT" :props="props">
            {{ props.row.DEC252pieT }}
          </q-td>
          <q-td key="DEC252ferT" :props="props">
            {{ props.row.DEC252ferT }}
          </q-td>
          <q-td key="DEC252canT" :props="props">
            {{ props.row.DEC252canT }}
          </q-td>
          <q-td key="DEC252autT" :props="props">
            {{ props.row.DEC252autT }}
          </q-td>
          <q-td key="DEC252truT" :props="props">
            {{ props.row.DEC252truT }}
          </q-td>
          <!-- Carnicos -->
          <q-td key="DEC252proC" :props="props">
            {{ props.row.DEC252proC }}
          </q-td>
          <q-td key="DEC252ingC" :props="props">
            {{ props.row.DEC252ingC }}
          </q-td>
          <q-td key="DEC252pieC" :props="props">
            {{ props.row.DEC252pieC }}
          </q-td>
          <q-td key="DEC252ferC" :props="props">
            {{ props.row.DEC252ferC }}
          </q-td>
          <q-td key="DEC252canC" :props="props">
            {{ props.row.DEC252canC }}
          </q-td>
          <q-td key="DEC252autC" :props="props">
            {{ props.row.DEC252autC }}
          </q-td>
          <q-td key="DEC252truC" :props="props">
            {{ props.row.DEC252truC }}
          </q-td>
          <!-- comidas preparadas -->
          <q-td key="DEC252proCp" :props="props">
            {{ props.row.DEC252proCp }}
          </q-td>
          <q-td key="DEC252ingCp" :props="props">
            {{ props.row.DEC252ingCp }}
          </q-td>
          <q-td key="DEC252pieCp" :props="props">
            {{ props.row.DEC252pieCp }}
          </q-td>
          <q-td key="DEC252ferCp" :props="props">
            {{ props.row.DEC252ferCp }}
          </q-td>
          <q-td key="DEC252canCp" :props="props">
            {{ props.row.DEC252canCp }}
          </q-td>
          <q-td key="DEC252autCp" :props="props">
            {{ props.row.DEC252autCp }}
          </q-td>
          <q-td key="DEC252truCp" :props="props">
            {{ props.row.DEC252truCp }}
          </q-td>
          <!-- Plantas medicinales -->
          <q-td key="DEC252proP" :props="props">
            {{ props.row.DEC252proP }}
          </q-td>
          <q-td key="DEC252ingP" :props="props">
            {{ props.row.DEC252ingP }}
          </q-td>
          <q-td key="DEC252pieP" :props="props">
            {{ props.row.DEC252pieP }}
          </q-td>
          <q-td key="DEC252ferP" :props="props">
            {{ props.row.DEC252ferP }}
          </q-td>
          <q-td key="DEC252canP" :props="props">
            {{ props.row.DEC252canP }}
          </q-td>
          <q-td key="DEC252autP" :props="props">
            {{ props.row.DEC252autP }}
          </q-td>
          <q-td key="DEC252truP" :props="props">
            {{ props.row.DEC252truP }}
          </q-td>
          <!-- Harina -->
          <q-td key="DEC252proHa" :props="props">
            {{ props.row.DEC252proHa }}
          </q-td>
          <q-td key="DEC252ingHa" :props="props">
            {{ props.row.DEC252ingHa }}
          </q-td>
          <q-td key="DEC252pieHa" :props="props">
            {{ props.row.DEC252pieHa }}
          </q-td>
          <q-td key="DEC252ferHa" :props="props">
            {{ props.row.DEC252ferHa }}
          </q-td>
          <q-td key="DEC252canHa" :props="props">
            {{ props.row.DEC252canHa }}
          </q-td>
          <q-td key="DEC252autHa" :props="props">
            {{ props.row.DEC252autHa }}
          </q-td>
          <q-td key="DEC252truHa" :props="props">
            {{ props.row.DEC252truHa }}
          </q-td>
          <!--Fin cambios-->
          <q-td key="PuntajeDEC252" :props="props">
            {{ props.row.PuntajeDEC252 }}
          </q-td>
          <!-- Cambios DEC253 -->
          <q-td key="DEC253pro" :props="props">
            {{ props.row.DEC253pro }}
          </q-td>
          <q-td key="DEC253otr" :props="props">
            {{ props.row.DEC253otr }}
          </q-td>
          <q-td key="DEC253uti" :props="props">
            {{ props.row.DEC253uti }}
          </q-td>
          <q-td key="DEC253ins" :props="props">
            {{ props.row.DEC253ins }}
          </q-td>
          <!-- HARINAS -->
          <q-td key="DEC253proH" :props="props">
            {{ props.row.DEC253proH }}
          </q-td>
          <q-td key="DEC253otrH" :props="props">
            {{ props.row.DEC253otrH }}
          </q-td>
          <q-td key="DEC253utiH" :props="props">
            {{ props.row.DEC253utiH }}
          </q-td>
          <q-td key="DEC253insH" :props="props">
            {{ props.row.DEC253insH }}
          </q-td>
          <!-- Tortillas -->
          <q-td key="DEC253proT" :props="props">
            {{ props.row.DEC253proT }}
          </q-td>
          <q-td key="DEC253otrT" :props="props">
            {{ props.row.DEC253otrT }}
          </q-td>
          <q-td key="DEC253utiT" :props="props">
            {{ props.row.DEC253utiT }}
          </q-td>
          <q-td key="DEC253insT" :props="props">
            {{ props.row.DEC253insT }}
          </q-td>
          <!-- Chochos Tostado -->
          <q-td key="DEC253proCho" :props="props">
            {{ props.row.DEC253proCho }}
          </q-td>
          <q-td key="DEC253otrCho" :props="props">
            {{ props.row.DEC253otrCho }}
          </q-td>
          <q-td key="DEC253utiCho" :props="props">
            {{ props.row.DEC253utiCho }}
          </q-td>
          <q-td key="DEC253insCho" :props="props">
            {{ props.row.DEC253insCho }}
          </q-td>
          <!-- jugos -->
          <q-td key="DEC253proJ" :props="props">
            {{ props.row.DEC253proJ }}
          </q-td>
          <q-td key="DEC253otrJ" :props="props">
            {{ props.row.DEC253otrJ }}
          </q-td>
          <q-td key="DEC253utiJ" :props="props">
            {{ props.row.DEC253utiJ }}
          </q-td>
          <q-td key="DEC253insJ" :props="props">
            {{ props.row.DEC253insJ }}
          </q-td>
          <!--Mermeladas  -->
          <q-td key="DEC253proM" :props="props">
            {{ props.row.DEC253proM }}
          </q-td>
          <q-td key="DEC253otrM" :props="props">
            {{ props.row.DEC253otrM }}
          </q-td>
          <q-td key="DEC253utiM" :props="props">
            {{ props.row.DEC253utiM }}
          </q-td>
          <q-td key="DEC253insM" :props="props">
            {{ props.row.DEC253insM }}
          </q-td>
          <!-- FIN CAMBIOS  -->
          <q-td key="subPreguntaDEC253" :props="props">
            {{ props.row.subPreguntaDEC253 }}
          </q-td>
          <q-td key="sub2PreguntaDEC253" :props="props">
            {{ props.row.sub2PreguntaDEC253 }}
          </q-td>
          <q-td key="PuntajeDEC253" :props="props">
            {{ props.row.PuntajeDEC253 }}
          </q-td>
          <q-td key="DEC254" :props="props">
            {{ props.row.DEC254 }}
          </q-td>
          <q-td key="PuntajeDEC254" :props="props">
            {{ props.row.PuntajeDEC254 }}
          </q-td>
          <!-- problema la 255 -->
          <q-td key="DEC255pro" :props="props">
            {{ props.row.DEC255pro }}
          </q-td>
          <q-td key="DEC255cpor" :props="props">
            {{ props.row.DEC255cpor }}
          </q-td>
          <q-td key="DEC255ins" :props="props">
            {{ props.row.DEC255ins }}
          </q-td>
          <q-td key="DEC255ipor" :props="props">
            {{ props.row.DEC255ipor }}
          </q-td>
          <q-td key="PuntajeDEC255" :props="props">
            {{ props.row.PuntajeDEC255 }}
          </q-td>
          <q-td key="DEC256con" :props="props">
            {{ props.row.DEC256con }}
          </q-td>
          <q-td key="DEC256lug" :props="props">
            {{ props.row.DEC256lug }}
          </q-td>
          <q-td key="DEC256pro" :props="props">
            {{ props.row.DEC256pro }}
          </q-td>
          <q-td key="PuntajeDEC256" :props="props">
            {{ props.row.PuntajeDEC256 }}
          </q-td>
          <q-td key="PuntajeDP" :props="props">
            {{ props.row.PuntajeDP }}
          </q-td>
          <q-td key="PuntajeDSO" :props="props">
            {{ props.row.PuntajeDSO }}
          </q-td>
          <q-td key="PuntajeDC" :props="props">
            {{ props.row.PuntajeDC }}
          </q-td>
          <q-td key="PuntajeTotalDE" :props="props">
            {{ props.row.PuntajeTotalDE }}
          </q-td>
          <q-td key="PuntajeTotalEC" :props="props">
            {{ props.row.PuntajeTotalEC }}
          </q-td>
          <q-td key="PuntajeFinal" :props="props">
            {{ props.row.PuntajeFinal }}
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
import spgctProductor from '../../dataLocalStore/spgct.productor.json';
import { provincias } from 'src/DistribucionEcuador/provincias';
import { cantones } from 'src/DistribucionEcuador/cantones';
import { DataAttributes } from 'quasar';
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
  { name: 'fecha', label: 'Fecha de veduria', align: 'center', field: 'fecha' },
  { name: 'telefono', label: 'Telefono', align: 'center', field: 'telefono' },
  { name: 'ubichacraPro', label: 'UbichacraPro', align: 'center', field: 'ubichacraPro' },
  { name: 'ubichacraCan', label: 'UbichacraCan', align: 'center', field: 'ubichacraCan' },
  { name: 'ubichacraPar', label: 'UbichacraPar', align: 'center', field: 'ubichacraPar' },
  { name: 'ubichacraCom', label: 'UbichacraCom', align: 'center', field: 'ubichacraCom' },
  { name: 'ubichacraZon', label: 'UbichacraZon', align: 'center', field: 'ubichacraZon' },
  {
    name: 'organizacionPert',
    label: 'Organizacion',
    align: 'center',
    field: 'organizacionPert',
  },
  { name: 'produtCertif', label: 'Produtor Certificado', align: 'center', field: 'produtCertif' },
  //otra dimension
  { name: 'DEC251', label: '2.5.1 DEC', align: 'center', field: 'DEC251' },
  { name: 'subPreguntaDEC251', label: 'Su 2.5.1 DEC', align: 'center', field: 'subPreguntaDEC251' },
  { name: 'porque251', label: 'Porque', align: 'center', field: 'porque251' },
  { name: 'PuntajeDEC251', label: 'Puntaje2.5.1', align: 'center', field: 'PuntajeDEC251' },
  //Hortalizas
  { name: 'DEC252pro', label: '2.5.2 Hortalizas Productos', align: 'center', field: 'DEC252pro' },
  { name: 'DEC252ing', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ing' },
  { name: 'DEC252pie', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pie' },
  { name: 'DEC252fer', label: '2.5.2 Feria', align: 'center', field: 'DEC252fer' },
  { name: 'DEC252can', label: '2.5.2 Canasta', align: 'center', field: 'DEC252can' },
  { name: 'DEC252aut', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252aut' },
  { name: 'DEC252tru', label: '2.5.2 Trueque', align: 'center', field: 'DEC252tru' },
  //Frutales
  { name: 'DEC252proF', label: '2.5.2 Frutales Productos', align: 'center', field: 'DEC252proF' },
  { name: 'DEC252ingF', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingF' },
  { name: 'DEC252pieF', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieF' },
  { name: 'DEC252ferF', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferF' },
  { name: 'DEC252canF', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canF' },
  { name: 'DEC252autF', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autF' },
  { name: 'DEC252truF', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truF' },
  //Granos
  { name: 'DEC252proG', label: '2.5.2 Granos Productos', align: 'center', field: 'DEC252proG' },
  { name: 'DEC252ingG', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingG' },
  { name: 'DEC252pieG', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieG' },
  { name: 'DEC252ferG', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferG' },
  { name: 'DEC252canG', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canG' },
  { name: 'DEC252autG', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autG' },
  { name: 'DEC252truG', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truG' },
  //Lacteos
  { name: 'DEC252proL', label: '2.5.2 Lácteos Productos', align: 'center', field: 'DEC252proL' },
  { name: 'DEC252ingL', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingL' },
  { name: 'DEC252pieL', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieL' },
  { name: 'DEC252ferL', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferL' },
  { name: 'DEC252canL', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canL' },
  { name: 'DEC252autL', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autL' },
  { name: 'DEC252truL', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truL' },
  //Huevos
  { name: 'DEC252proH', label: '2.5.2 Huevos Productos', align: 'center', field: 'DEC252proH' },
  { name: 'DEC252ingH', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingH' },
  { name: 'DEC252pieH', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieH' },
  { name: 'DEC252ferH', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferH' },
  { name: 'DEC252canH', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canH' },
  { name: 'DEC252autH', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autH' },
  { name: 'DEC252truH', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truH' },
  //tuberculos
  { name: 'DEC252proT', label: '2.5.2 Tubérculos Productos', align: 'center', field: 'DEC252proT' },
  { name: 'DEC252ingT', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingT' },
  { name: 'DEC252pieT', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieT' },
  { name: 'DEC252ferT', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferT' },
  { name: 'DEC252canT', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canT' },
  { name: 'DEC252autT', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autT' },
  { name: 'DEC252truT', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truT' },
  //Carnicos
  { name: 'DEC252proC', label: '2.5.2 Cárnicos Productos', align: 'center', field: 'DEC252proC' },
  { name: 'DEC252ingC', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingC' },
  { name: 'DEC252pieC', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieC' },
  { name: 'DEC252ferC', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferC' },
  { name: 'DEC252canC', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canC' },
  { name: 'DEC252autC', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autC' },
  { name: 'DEC252truC', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truC' },
  //comidas preparadas
  { name: 'DEC252proCp', label: '2.5.2 Comidas Productos', align: 'center', field: 'DEC252proCp' },
  { name: 'DEC252ingCp', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingCp' },
  { name: 'DEC252pieCp', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieCp' },
  { name: 'DEC252ferCp', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferCp' },
  { name: 'DEC252canCp', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canCp' },
  { name: 'DEC252autCp', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autCp' },
  { name: 'DEC252truCp', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truCp' },
  //Plantas medicinales
  { name: 'DEC252proP', label: '2.5.2 Comidas Productos', align: 'center', field: 'DEC252proP' },
  { name: 'DEC252ingP', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingP' },
  { name: 'DEC252pieP', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieP' },
  { name: 'DEC252ferP', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferP' },
  { name: 'DEC252canP', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canP' },
  { name: 'DEC252autP', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autP' },
  { name: 'DEC252truP', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truP' },
  //Harina
  { name: 'DEC252proHa', label: '2.5.2 Harinas Productos', align: 'center', field: 'DEC252proHa' },
  { name: 'DEC252ingHa', label: '2.5.2 Ingresos', align: 'center', field: 'DEC252ingHa' },
  { name: 'DEC252pieHa', label: '2.5.2 Pie de Finca', align: 'center', field: 'DEC252pieHa' },
  { name: 'DEC252ferHa', label: '2.5.2 Feria', align: 'center', field: 'DEC252ferHa' },
  { name: 'DEC252canHa', label: '2.5.2 Canasta', align: 'center', field: 'DEC252canHa' },
  { name: 'DEC252autHa', label: '2.5.2 Autoconsumo', align: 'center', field: 'DEC252autHa' },
  { name: 'DEC252truHa', label: '2.5.2 Trueque', align: 'center', field: 'DEC252truHa' },
  //fin de cambios
  { name: 'PuntajeDEC252', label: 'Puntaje2.5.2', align: 'center', field: 'PuntajeDEC252' },
  //cambios DEC253pro
  //comidas
  { name: 'DEC253pro', label: '2.5.3 Comidas Productos', align: 'center', field: 'DEC253pro' },
  { name: 'DEC253otr', label: '2.5.3 Otros Productos', align: 'center', field: 'DEC253otr' },
  { name: 'DEC253uti', label: '2.5.3 Productos que Utiliza', align: 'center', field: 'DEC253uti' },
  { name: 'DEC253ins', label: '2.5.3 Insumos', align: 'center', field: 'DEC253ins' },
  //HARINAS
  { name: 'DEC253proH', label: '2.5.3 Harinas Productos', align: 'center', field: 'DEC253proH' },
  { name: 'DEC253otrH', label: '2.5.3 Otros Productos', align: 'center', field: 'DEC253otrH' },
  { name: 'DEC253utiH', label: '2.5.3 Productos que Utiliza', align: 'center', field: 'DEC253utiH' },
  { name: 'DEC253insH', label: '2.5.3 Insumos', align: 'center', field: 'DEC253insH' },
  //TORTILLAS
  { name: 'DEC253proT', label: '2.5.3 Tortillas Productos', align: 'center', field: 'DEC253proT' },
  { name: 'DEC253otrT', label: '2.5.3 Otros Productos', align: 'center', field: 'DEC253otrT' },
  { name: 'DEC253utiT', label: '2.5.3 Productos que Utiliza', align: 'center', field: 'DEC253utiT' },
  { name: 'DEC253insT', label: '2.5.3 Insumos', align: 'center', field: 'DEC253insT' },
  //Chochos Tostado
  { name: 'DEC253proCho', label: '2.5.3 Chochos Productos', align: 'center', field: 'DEC253proCho' },
  { name: 'DEC253otrCho', label: '2.5.3 Otros Productos', align: 'center', field: 'DEC253otrCho' },
  { name: 'DEC253utiCho', label: '2.5.3 Productos que Utiliza', align: 'center', field: 'DEC253utiCho' },
  { name: 'DEC253insCho', label: '2.5.3 Insumos', align: 'center', field: 'DEC253insCho' },
  //JUGOS
  { name: 'DEC253proJ', label: '2.5.3 Jugos Productos', align: 'center', field: 'DEC253proJ' },
  { name: 'DEC253otrJ', label: '2.5.3 Otros Productos', align: 'center', field: 'DEC253otrJ' },
  { name: 'DEC253utiJ', label: '2.5.3 Productos que Utiliza', align: 'center', field: 'DEC253utiJ' },
  { name: 'DEC253insJ', label: '2.5.3 Insumos', align: 'center', field: 'DEC253insJ' },
  //MERMELADAS
  { name: 'DEC253proM', label: '2.5.3 Mermeladas Productos', align: 'center', field: 'DEC253proM' },
  { name: 'DEC253otrM', label: '2.5.3 Otros Productos', align: 'center', field: 'DEC253otrM' },
  { name: 'DEC253utiM', label: '2.5.3 Productos que Utiliza', align: 'center', field: 'DEC253utiM' },
  { name: 'DEC253insM', label: '2.5.3 Insumos', align: 'center', field: 'DEC253insM' },
  //FIN CAMBIOS
  { name: 'subPreguntaDEC253', label: 'Sub 2.5.3.1 DEC', align: 'center', field: 'subPreguntaDEC253' },
  { name: 'sub2PreguntaDEC253', label: 'Sub 2.5.3.2 DEC', align: 'center', field: 'sub2PreguntaDEC253' },
  { name: 'PuntajeDEC253', label: 'Puntaje2.5.3', align: 'center', field: 'PuntajeDEC253' },
  { name: 'DEC254', label: '2.5.4 DEC', align: 'center', field: 'DEC254' },
  { name: 'PuntajeDEC254', label: 'Puntaje2.5.4', align: 'center', field: 'PuntajeDEC254' },
  { name: 'DEC255pro', label: '2.5.5 Canasta Producto', align: 'center', field: 'DEC255pro' },
  { name: 'DEC255cpor', label: '2.5.5 Porcentaje', align: 'center', field: 'DEC255cpor' },
  { name: 'DEC255ins', label: '2.5.5 Insumo Producto', align: 'center', field: 'DEC255ins' },
  { name: 'DEC255ipor', label: '2.5.5 Porcentaje', align: 'center', field: 'DEC255ipor' },
  { name: 'PuntajeDEC255', label: 'Puntaje2.5.5', align: 'center', field: 'PuntajeDEC255' },
  { name: 'DEC256con', label: '2.5.6 Nombre Consumidor', align: 'center', field: 'DEC256con' },
  { name: 'DEC256lug', label: '2.5.6 Lugar Procedencia', align: 'center', field: 'DEC256lug' },
  { name: 'DEC256pro', label: '2.5.6 Producto Compra', align: 'center', field: 'DEC256pro' },
  { name: 'PuntajeDEC256', label: 'Puntaje2.5.6', align: 'center', field: 'PuntajeDEC256' },
  { name: 'PuntajeDP', label: 'PuntajeTotal DP', align: 'center', field: 'PuntajeDP' },
  { name: 'PuntajeDSO', label: 'PuntajeTotalDSO', align: 'center', field: 'PuntajeDSO' },
  { name: 'PuntajeDC', label: 'PuntajeTotalDC', align: 'center', field: 'PuntajeDC' },
  { name: 'PuntajeTotalDE', label: 'PuntajeTotalDE', align: 'center', field: 'PuntajeTotalDE' },
  { name: 'PuntajeTotalEC', label: 'PuntajeTotalEC', align: 'center', field: 'PuntajeTotalEC' },
  { name: 'PuntajeFinal', label: 'PuntajeFinal', align: 'center', field: 'PuntajeFinal' },
];
const rows = computed(() => {
  return productores.value.map((productor) => {
    return {
      nombre: productor.datosGenerales.nombre,
      cedula: productor.datosGenerales.cedula,
      fecha: productor.datosGenerales.fecha,
      telefono: productor.datosGenerales.telefono,
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
      ubichacraZon: productor.datosGenerales.ubiChacra
        .map((ubiChacra) => ubiChacra.zona)
        .join(', \n')
      ,
      organizacionPert: productor.datosGenerales.organizacionPert,
      produtCertif: productor.datosGenerales.produtCertif,
      //Dimension economica
      DEC251: productor.dimensionEconomica.preg251.respuesta.label,
      subPreguntaDEC251: productor.dimensionEconomica.preg251.subpreg.respuesta.label,
      porque251: productor.dimensionEconomica.preg251.subpreg.porque,
      PuntajeDEC251: productor.dimensionEconomica.preg251.puntos,
      // DEC252pro: productor.dimensionEconomica.preg252.rubros
      //   .map((rubros) => rubros.productos.label)
      //   .join(', \n')
      // ,
      //Cambios DEC252pro
      DEC252pro: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ing: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pie: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252fer: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252can: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252aut: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252tru: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Hortalizas'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Frutales
      DEC252proF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truF: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Frutales'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Granos
      DEC252proG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truG: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Granos'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Lacteos
      DEC252proL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truL: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Lácteos'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Huevos
      DEC252proH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truH: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Huevos'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //tuberculos
      DEC252proT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truT: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Tubérculos'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //carnicos
      DEC252proC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truC: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Cárnicos'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Comidas preparadas
      DEC252proCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truCp: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Comidas preparadas'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Plantas medicinales
      DEC252proP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truP: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Plantas Medicinales'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Harinas
      DEC252proHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC252ingHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.ingresosSemanales}` : '';
      })(),
      DEC252pieHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.pieFinca}` : '';
      })(),
      DEC252ferHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.feria}` : '';
      })(),
      DEC252canHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.canasta}` : '';
      })(),
      DEC252autHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.autoconsumo}` : '';
      })(),
      DEC252truHa: (() => {
        const item = productor.dimensionEconomica.preg252.rubros.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.trueque}` : '';
      })(),
      //Fin cambios DEC252pro
      PuntajeDEC252: productor.dimensionEconomica.preg252.puntos,
      //Cambios DEC253
      //COMIDAS
      DEC253pro: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Comidas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC253otr: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Comidas'
        );
        return item ? `${item.otrosProductos}` : '';
      })(),
      DEC253uti: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Comidas'
        );
        return item ? `${item.prodUtiliza}` : '';
      })(),
      DEC253ins: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Comidas'
        );
        return item ? `${item.insumosFuera}` : '';
      })(),
      //Harinas
      DEC253proH: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC253otrH: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.otrosProductos}` : '';
      })(),
      DEC253utiH: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.prodUtiliza}` : '';
      })(),
      DEC253insH: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Harinas'
        );
        return item ? `${item.insumosFuera}` : '';
      })(),
      //TORTILLA
      DEC253proT: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Tortillas o Empanadas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC253otrT: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Tortillas o Empanadas'
        );
        return item ? `${item.otrosProductos}` : '';
      })(),
      DEC253utiT: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Tortillas o Empanadas'
        );
        return item ? `${item.prodUtiliza}` : '';
      })(),
      DEC253insT: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Tortillas o Empanadas'
        );
        return item ? `${item.insumosFuera}` : '';
      })(),
      //chochos tostado
      DEC253proCho: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Chochos con tostado'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC253otrCho: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Chochos con tostado'
        );
        return item ? `${item.otrosProductos}` : '';
      })(),
      DEC253utiCho: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Chochos con tostado'
        );
        return item ? `${item.prodUtiliza}` : '';
      })(),
      DEC253insCho: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Chochos con tostado'
        );
        return item ? `${item.insumosFuera}` : '';
      })(),
      //JUGOS
      DEC253proJ: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Jugos'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC253otrJ: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Jugos'
        );
        return item ? `${item.otrosProductos}` : '';
      })(),
      DEC253utiJ: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Jugos'
        );
        return item ? `${item.prodUtiliza}` : '';
      })(),
      DEC253insJ: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Jugos'
        );
        return item ? `${item.insumosFuera}` : '';
      })(),
      //mermeladas
      DEC253proM: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Mermeladas'
        );
        return item ? `${item.productos.label}` : '';
      })(),
      DEC253otrM: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Mermeladas'
        );
        return item ? `${item.otrosProductos}` : '';
      })(),
      DEC253utiM: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Mermeladas'
        );
        return item ? `${item.prodUtiliza}` : '';
      })(),
      DEC253insM: (() => {
        const item = productor.dimensionEconomica.preg253.prodProcesados.find(
          (item) => item.productos.label === 'Mermeladas'
        );
        return item ? `${item.insumosFuera}` : '';
      })(),
      //FIN CAMBIOS w
      subPreguntaDEC253: productor.dimensionEconomica.preg253.subpreg.respuesta.label,
      sub2PreguntaDEC253: productor.dimensionEconomica.preg253.subpreg2.respuesta.label,
      PuntajeDEC253: productor.dimensionEconomica.preg253.puntos,
      DEC254: productor.dimensionEconomica.preg254.respuesta.label,
      PuntajeDEC254: productor.dimensionEconomica.preg254.puntos,
      DEC255pro: productor.dimensionEconomica.preg255.canastaFamiliar
        .map((canastaFamiliar) => canastaFamiliar.productos.label)
        .join(', \n')
      ,
      DEC255cpor: productor.dimensionEconomica.preg255.canastaFamiliar
        .map((canastaFamiliar) => canastaFamiliar.porcentaje)
        .join(', \n')
      ,
      DEC255ins: productor.dimensionEconomica.preg255.Insumos
      // .map((Insumos) => Insumos.productos.label)
      // .join(', \n')

      ,
      DEC255ipor: productor.dimensionEconomica.preg255.Insumos
      // .map((Insumos) => Insumos.porcentaje)z
      // .join(', \n')
      ,
      PuntajeDEC255: productor.dimensionEconomica.preg255.puntos,
      // DEC256con: productor.dimensionEconomica.preg256.consumidoresIdentificados.nombreConsumidor,
      // DEC256lug: productor.dimensionEconomica.preg256.consumidoresIdentificados.lugarProcedencia,
      // Dec256pro: productor.dimensionEconomica.preg256.consumidoresIdentificados.productoCompra.label,
      DEC256con: productor.dimensionEconomica.preg256.consumidoresIdentificados
        .map((consumidoresIdentificados) => consumidoresIdentificados.nombreConsumidor)
        .join(', \n')
      ,
      DEC256lug: productor.dimensionEconomica.preg256.consumidoresIdentificados
        .map((consumidoresIdentificados) => consumidoresIdentificados.lugarProcedencia)
        .join(', \n')
      ,
      DEC256pro: productor.dimensionEconomica.preg256.consumidoresIdentificados
        .map((consumidoresIdentificados) => consumidoresIdentificados.productoCompra.label)
        .join(', \n')
      ,
      PuntajeDEC256: productor.dimensionEconomica.preg256.puntos,
      PuntajeTotalEC: productor.dimensionEconomica.puntajeTotal,
      PuntajeFinal: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.puntajeTotal +
        productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.puntajeTotal +
        productor.dimensionSocialCulturalPolitica.dimensionCultural23.puntajeTotal +
        productor.dimensionEcologica.puntajeTotal +
        productor.dimensionEconomica.puntajeTotal,
      PuntajeDP: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.puntajeTotal,
      PuntajeDSO: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.puntajeTotal,
      PuntajeDC: productor.dimensionSocialCulturalPolitica.dimensionCultural23.puntajeTotal,
      PuntajeTotalDE: productor.dimensionEcologica.puntajeTotal,
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
  link.download = 'Dimension Economica.xlsx';
  link.click();
  URL.revokeObjectURL(url);
}
</script>
