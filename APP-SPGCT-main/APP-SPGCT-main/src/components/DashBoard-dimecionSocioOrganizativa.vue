<template>

  <div>
    <q-table flat bordered title="Dimencion Socio Organizativa" :rows="rows" :columns="columns" row-key="name"
      binary-state-sort separator="cell">
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

          <q-td key="Reuniones221" :props="props">
            {{ props.row.Reuniones221 }}
          </q-td>
          <q-td key="Capacitaciones" :props="props">
            {{ props.row.Capacitaciones }}
          </q-td>
          <q-td key="Mingas" :props="props">
            {{ props.row.Mingas }}
          </q-td>
          <q-td key="PartiFerias" :props="props">
            {{ props.row.PartiFerias }}
          </q-td>
          <q-td key="AporteComisiones" :props="props">
            {{ props.row.AporteComisiones }}
          </q-td>
          <q-td key="RespetarAcuerdos" :props="props">
            {{ props.row.RespetarAcuerdos }}
          </q-td>

          <q-td key="PuntajeDSO221" :props="props">
            {{ props.row.PuntajeDSO221 }}
          </q-td>
          <q-td key="DSO222" :props="props">
            {{ props.row.DSO222 }}
          </q-td>
          <q-td key="cargo" :props="props">
            {{ props.row.cargo }}
          </q-td>
          <q-td key="PuntajeDSO222" :props="props">
            {{ props.row.PuntajeDSO222 }}
          </q-td>

          <q-td key="IngresoEconomico223" :props="props">
            {{ props.row.IngresoEconomico223 }}
          </q-td>
          <q-td key="CargaTrabajo" :props="props">
            {{ props.row.CargaTrabajo }}
          </q-td>
          <q-td key="UnionFamiliar" :props="props">
            {{ props.row.UnionFamiliar }}
          </q-td>
          <q-td key="CalidadVida" :props="props">
            {{ props.row.CalidadVida }}
          </q-td>

          <q-td key="PuntajeDSO223" :props="props">
            {{ props.row.PuntajeDSO223 }}
          </q-td>

          <q-td key="Nombre" :props="props">
            {{ props.row.Nombre }}
          </q-td>
          <q-td key="Lugar" :props="props">
            {{ props.row.Lugar }}
          </q-td>
          <q-td key="Parentesco" :props="props">
            {{ props.row.Parentesco }}
          </q-td>
          <q-td key="Organizacion" :props="props">
            {{ props.row.Organizacion }}
          </q-td>

          <q-td key="PuntajeDSO224" :props="props">
            {{ props.row.PuntajeDSO224 }}
          </q-td>


          <q-td key="DSO225" :props="props">
            {{ props.row.DSO225 }}
          </q-td>
          <q-td key="ManejoSuelos" :props="props">
            {{ props.row.ManejoSuelos }}
          </q-td>
          <q-td key="ProceAlimentos" :props="props">
            {{ props.row.ProceAlimentos }}
          </q-td>
          <q-td key="CosePost" :props="props">
            {{ props.row.CosePost }}
          </q-td>
          <q-td key="ComerAsocia" :props="props">
            {{ props.row.ComerAsocia }}
          </q-td>
          <q-td key="RegProd" :props="props">
            {{ props.row.RegProd }}
          </q-td>
          <q-td key="PoliLidera" :props="props">
            {{ props.row.PoliLidera }}
          </q-td>
          <q-td key="RolDiri" :props="props">
            {{ props.row.RolDiri }}
          </q-td>
          <q-td key="GiraObser" :props="props">
            {{ props.row.GiraObser }}
          </q-td>
          <q-td key="SeguiMensual" :props="props">
            {{ props.row.SeguiMensual }}
          </q-td>





          <q-td key="PuntajeDSO225" :props="props">
            {{ props.row.PuntajeDSO225 }}
          </q-td>
          <q-td key="DSO226" :props="props">
            <q-list>
              <q-item v-for="(DSO226, i) in props.row.DSO226" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-pink-10"> </q-item-label>
                  <q-item-label>{{ i + 1 }} .{{ DSO226.nombre }}:{{ DSO226.respuesta.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDSO226" :props="props">
            {{ props.row.PuntajeDSO226 }}
          </q-td>
          <q-td key="DSO227" :props="props">
            {{ props.row.DSO227 }}
          </q-td>
          <q-td key="PuntajeDSO227" :props="props">
            {{ props.row.PuntajeDSO227 }}
          </q-td>
          <q-td key="DSO228" :props="props">
            {{ props.row.DSO228 }}
          </q-td>
          <q-td key="porque" :props="props">
            {{ props.row.porque }}

          </q-td>
          <q-td key="PuntajeDSO228" :props="props">
            {{ props.row.PuntajeDSO228 }}

          </q-td>
          <q-td key="PuntajeDSO" :props="props">
            {{ props.row.PuntajeDSO }}

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
  { name: 'Reuniones221', label: '2.2.1 Reuniones', align: 'center', field: 'Reuniones221' },
  { name: 'Capacitaciones', label: 'Mingas', align: 'center', field: 'Capacitaciones' },
  { name: 'Mingas', label: 'Mingas', align: 'center', field: 'Mingas' },
  { name: 'PartiFerias', label: 'Participacion Ferias', align: 'center', field: 'PartiFerias' },
  { name: 'AporteComisiones', label: 'Aporte Comisiones', align: 'center', field: 'AporteComisiones' },
  { name: 'RespetarAcuerdos', label: 'Respetar Acuerdos', align: 'center', field: 'RespetarAcuerdos' },
  { name: 'PuntajeDSO221', label: 'Puntaje2.2.1', align: 'center', field: 'PuntajeDSO221' },

  { name: 'DSO222', label: '2.2.2 ¿Ha ocupado algún cargo?', align: 'center', field: 'DSO222' },
  { name: 'cargo', label: 'Cargo', align: 'center', field: 'cargo' },
  { name: 'PuntajeDSO222', label: 'Puntaje2.2.2', align: 'center', field: 'PuntajeDSO222' },

  { name: 'IngresoEconomico223', label: '2.2.3 Ingreso Economico', align: 'center', field: 'IngresoEconomico223' },
  { name: 'CargaTrabajo', label: 'Carga de Trabajo', align: 'center', field: 'CargaTrabajo' },
  { name: 'UnionFamiliar', label: 'Union Familiar', align: 'center', field: 'UnionFamiliar' },
  { name: 'CalidadVida', label: 'Calidad de Vida', align: 'center', field: 'CalidadVida' },

  { name: 'Nombre', label: '2.2.4 Persona Incentivada', align: 'center', field: 'Nombre' },
  { name: 'Lugar', label: 'Lugar ', align: 'center', field: 'Lugar' },
  { name: 'Parentesco', label: 'Parentesco ', align: 'center', field: 'Parentesco' },
  { name: 'Organizacion', label: 'Organizacion ', align: 'center', field: 'Organizacion' },
  { name: 'PuntajeDSO224', label: 'Puntaje2.2.4', align: 'center', field: 'PuntajeDSO224' },

  { name: 'DSO225', label: '2.2.5 Prod.Agroecologica', align: 'center', field: 'DSO225' },
  { name: 'ManejoSuelos', label: 'Manejo Suelos', align: 'center', field: 'DSO225' },
  { name: 'ProceAlimentos', label: 'Procesamiento Alimentos', align: 'center', field: 'DSO225' },
  { name: 'CosePost', label: 'Cosecha Postcosecha', align: 'center', field: 'DSO225' },
  { name: 'ComerAsocia', label: 'Comercializacion Asociativa', align: 'center', field: 'DSO225' },
  { name: 'RegProd', label: 'Registro y Costo', align: 'center', field: 'DSO225' },
  { name: 'PoliLidera', label: 'Politico y Liderazgo', align: 'center', field: 'DSO225' },
  { name: 'RolDiri', label: 'Rol Dirigentes', align: 'center', field: 'DSO225' },
  { name: 'GiraObser', label: 'Gira Observacion', align: 'center', field: 'DSO225' },
  { name: 'SeguiMensual', label: 'Seguimiento Mensual/Trimestral', align: 'center', field: 'DSO225' },

  { name: 'PuntajeDSO225', label: 'Puntaje2.2.5', align: 'center', field: 'PuntajeDSO225' },
  { name: 'DSO226', label: '2.2.6 DSO', align: 'center', field: 'DSO226' },
  { name: 'PuntajeDSO226', label: 'Puntaje2.2.6', align: 'center', field: 'PuntajeDSO226' },
  { name: 'DSO227', label: '2.2.7 DSO', align: 'center', field: 'DSO227' },
  { name: 'DSO228', label: '2.2.8 DSO', align: 'center', field: 'DSO228' },
  { name: 'porque', label: '¿Porque?', align: 'center', field: 'porque' },
  { name: 'PuntajeDSO228', label: 'Puntaje2.2.8', align: 'center', field: 'PuntajeDSO228' },
  { name: 'PuntajeDSO', label: 'PuntajeTotalDSO', align: 'center', field: 'PuntajeDSO' },
];
const rows = computed(() => {
  return productores.value.map((productor) => {

    return {
      nombre: productor.datosGenerales.nombre,
      cedula: productor.datosGenerales.cedula,
      telefono: productor.datosGenerales.telefono,
      organizacionPert: productor.datosGenerales.organizacionPert,
      produtCertif: productor.datosGenerales.produtCertif,
      //Aqui comienza la dimencion socio organizativa
      DSO221: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items,

      Reuniones221: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items.find(
          item => item.nombre === 'Reuniones'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      Capacitaciones: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items.find(
          item => item.nombre === 'Capacitaciones'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      Mingas: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items.find(
          item => item.nombre === 'Mingas'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      PartiFerias: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items.find(
          item => item.nombre === 'Participación en ferias'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      AporteComisiones: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items.find(
          item => item.nombre === 'Aportes y comisiones'
        );
        return item ? item.respuesta?.label : 'No';
      })(),
      RespetarAcuerdos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items.find(
          item => item.nombre === 'Respetar acuerdos y resoluciones'
        );
        return item ? item.respuesta?.label : 'No';
      })(),

      PuntajeDSO221: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.puntos,
      DSO222: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg222.respuesta.label,
      cargo: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg222.subPreg222.respuesta.label,
      PuntajeDSO222: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg222.Puntos,

      IngresoEconomico223: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.items.find(
          item => item.nombre === 'Respeta el ingreso económico po las ventas de sus productos'
        );
        return item ? item.respuesta?.label : 'No Responde';
      })(),
      CargaTrabajo: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.items.find(
          item => item.nombre === 'Respecto a la carga de trabajo'
        );
        return item ? item.respuesta?.label : 'No Responde';
      })(),
      UnionFamiliar: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.items.find(
          item => item.nombre === 'Respecto a la unión familiar'
        );
        return item ? item.respuesta?.label : 'No Responde';
      })(),
      CalidadVida: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.items.find(
          item => item.nombre === 'Respecto a la calidad de vida'
        );
        return item ? item.respuesta?.label : 'No Responde';
      })(),
      PuntajeDSO223: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.puntos,


      Nombre: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.incentivados[0];
        return item ? item.nombre : 'null';
      })(),

      Lugar: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.incentivados[0];
        return item ? item.lugar : 'null';
      })(),
      Parentesco: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.incentivados[0];
        return item ? item.Parentesco : 'Desconocido';
      })(),
      Organizacion: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.incentivados[0];
        return item ? item.pertOrganz : 'null';
      })(),
      PuntajeDSO224: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.puntos,

      DSO225: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Producción Agroecológica'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      ManejoSuelos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Manejos de Suelos'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      ProceAlimentos: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Procesamiento de Alimentos'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      CosePost: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Cosecha y Postcosecha'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      ComerAsocia: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Comercialización Asociativa'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      RegProd: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Regristro y costo de Producción'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      PoliLidera: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Político y Liderazgo'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      RolDiri: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Rol de Dirigentes'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      GiraObser: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Gira de Observación'
        );
        return item ? item.respuesta.label : 'No';
      })(),
      SeguiMensual: (() => {
        const item = productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items.find(
          item => item.nombre === 'Seguimiento Mensual o Trimestral'
        );
        return item ? item.respuesta.label : 'No';
      })(),

      PuntajeDSO225: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.puntos,
      DSO226: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg226.items,
      PuntajeDSO226: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg226.puntos,
      DSO227: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg227,
      DSO228: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg228.respuesta.label,
      porque: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg228.subPreg228.respuesta.label,
      PuntajeDSO228: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg228.puntos,
      PuntajeDSO: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.puntajeTotal,
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
  link.download = 'DimencionSocioOrganizativa.xlsx';
  link.click();
  URL.revokeObjectURL(url);
}
</script>
