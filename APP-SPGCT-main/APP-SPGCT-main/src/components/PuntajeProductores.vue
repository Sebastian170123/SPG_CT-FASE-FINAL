<template>
  <!--<q-btn label="cardar Data Local" @click="cargarDataLocal" /> -->
  <div id="PuntajeProductor">
    <div class="text-h5 q-pt-md q-px-md text-weight-medium">
      Lista de productores agregados en este dispositivo: total (<span class="text-negative">{{ listaProductores ?
        listaProductores.length : 0 }}</span>)
    </div>
    <div class="row q-pa-md">
      <div class="col-4 offset-8">
        <q-item-label> ¿Último número de ficha?</q-item-label>
        <q-input v-model="numeroFicha" label="Opcional" type="number" />
      </div>
      <div class="col-12">
        <q-item-label> ¿Buscar por nombre de veedor?</q-item-label>
        <q-select v-model="veedor" :options="[...nombresVeedores, 'Todos']" label="Opcional" />
      </div>
    </div>
    <div class="row q-pa-md" v-if="veedor != 'Todos'">
      <div class="col-xs-12 col-sm-6">
        <q-item-label class="text-body2">
          {{
            `El veedor con nombre "${veedor.toLocaleUpperCase()}", ha realizado "${filtroProductores ?
              filtroProductores.length : 0
            }" veeduría${filtroProductores && filtroProductores.length > 1 ? 's' : ''
            }.`
          }}
        </q-item-label>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row q-col-gutter-md justify-end q-mx-md">
          <div class="col-xs-12 col-sm-4">
            <q-btn @click="eliminarTodos" label="Eliminar registros" no-caps color="negative" class="full-width" />
          </div>
          <div class="col-xs-12 col-sm-4">
            <q-btn @click="descargarTodo" label="Descargar registros" no-caps color="positive" class="full-width" />
          </div>

        </div>
      </div>
    </div>
    <div v-for="(productor, i) in filtroProductores" :key="productor.datosGenerales.cedula" class="q-pa-md">
      <div class="row shadow-1">
        <div class="col-12 q-px-md q-py-md row bg-grey-4">
          <div class="col-10 row text-subtitle1">
            <div class="col-12 text-weight-medium">Productor:</div>

            <div class="col-12">
              Nombre: {{ productor.datosGenerales.nombre }}
            </div>
            <div class="col-12">
              Cédula: {{ productor.datosGenerales.cedula }}
            </div>
            <div class="col-12">
              Ficha Número: {{ generarSerial(i + 1 + Number(numeroFicha)) }}
            </div>
          </div>
          <div class="col-2 column items-end">
            <div class="col">
              <q-btn icon="download" color="positive" @click="descargarRegistro(productor)" round />
            </div>
            <div class="col">
              <q-btn icon="delete" color="negative" @click="eliminarProductor(productor.datosGenerales.cedula)" round />
            </div>

            <div class="col">
              <q-btn icon="cloud_upload" color="secondary" @click="subirDatos(productor)" round />
            </div>
          </div>
        </div>
        <div class="col-12">
          <q-separator />
        </div>
        <div class="col-12 q-px-md q-pt-md row">
          <div class="col-8 text-subtitle1 text-weight-medium">Veedor:</div>

          <div class="col-12">Nombre: {{ productor.datosVeedor.nombre }}</div>
          <div class="col-12">Cédula: {{ productor.datosVeedor.cedula }}</div>
          <div class="col-12">
            Organización: {{ productor.datosVeedor.organizacionPert }}
          </div>
        </div>
        <div class="col-12 q-pa-md">
          <q-list bordered separator>
            <q-item>
              <q-item-section>Puntaje por dimensión </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Dimensión </q-item-section>
              <q-item-section> Puntaje Máximo </q-item-section>
              <q-item-section avatar>
                <QItemLabel> Puntos </QItemLabel>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Dimensión politica </q-item-section>
              <q-item-section> 5 </q-item-section>
              <q-item-section avatar>
                <QItemLabel>
                  {{
                    productor.dimensionSocialCulturalPolitica
                      .dimensionPolitica21.puntajeTotal
                  }}
                </QItemLabel>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Dimensión socio organizativa </q-item-section>
              <q-item-section> 7 </q-item-section>
              <q-item-section avatar>
                {{
                  productor.dimensionSocialCulturalPolitica
                    .dimensionSocioOrganizativa22.puntajeTotal
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Dimensión cultural </q-item-section>
              <q-item-section> 8 </q-item-section>
              <q-item-section avatar>
                {{
                  productor.dimensionSocialCulturalPolitica.dimensionCultural23
                    .puntajeTotal
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Dimensión ecológica </q-item-section>
              <q-item-section> 65 </q-item-section>
              <q-item-section avatar>
                {{ productor.dimensionEcologica.puntajeTotal }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Dimensión económica </q-item-section>
              <q-item-section> 15 </q-item-section>
              <q-item-section avatar>
                {{ productor.dimensionEconomica.puntajeTotal }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Total </q-item-section>
              <q-item-section> 100 </q-item-section>
              <q-item-section avatar>
                {{
                  numeroDecimal(
                    Math.min(
                      productor.dimensionSocialCulturalPolitica.dimensionPolitica21.puntajeTotal +
                      productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.puntajeTotal +
                      productor.dimensionSocialCulturalPolitica.dimensionCultural23.puntajeTotal +
                      productor.dimensionEcologica.puntajeTotal +
                      productor.dimensionEconomica.puntajeTotal,
                      100
                    )
                  )
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Tipo productor </q-item-section>
              <q-item-section avatar :class="numeroDecimal(
                productor.dimensionSocialCulturalPolitica
                  .dimensionPolitica21.puntajeTotal +
                productor.dimensionSocialCulturalPolitica
                  .dimensionSocioOrganizativa22.puntajeTotal +
                productor.dimensionSocialCulturalPolitica
                  .dimensionCultural23.puntajeTotal +
                productor.dimensionEcologica.puntajeTotal +
                productor.dimensionEconomica.puntajeTotal
              ) <= 50
                ? ''
                : numeroDecimal(
                  productor.dimensionSocialCulturalPolitica
                    .dimensionPolitica21.puntajeTotal +
                  productor.dimensionSocialCulturalPolitica
                    .dimensionSocioOrganizativa22.puntajeTotal +
                  productor.dimensionSocialCulturalPolitica
                    .dimensionCultural23.puntajeTotal +
                  productor.dimensionEcologica.puntajeTotal +
                  productor.dimensionEconomica.puntajeTotal
                ) <= 69
                  ? 'bg-yellow-12'
                  : 'bg-green'
                ">
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-12 q-pa-md">
          <q-list bordered separator>
            <q-item>
              <q-item-section>Puntaje obtenido por la finca: (Dimensión ecológica)
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Mapa: 2 </q-item-section>
              <q-item-section>
                {{ productor.dimensionEcologica.preg241.puntos }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Agroforestal: 8 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg242.puntos +
                    productor.dimensionEcologica.preg243.puntos
                  )
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Suelo: 10 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg244.puntos +
                    productor.dimensionEcologica.preg245.puntos +
                    productor.dimensionEcologica.preg246.puntos +
                    productor.dimensionEcologica.preg247.puntos +
                    productor.dimensionEcologica.preg248.puntos +
                    productor.dimensionEcologica.preg249.puntos
                  )
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Cultivos: 15 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg2410.puntos +
                    productor.dimensionEcologica.preg2411.puntos +
                    productor.dimensionEcologica.preg2412.puntos +
                    productor.dimensionEcologica.preg2413.puntos +
                    productor.dimensionEcologica.preg2414.puntos +
                    productor.dimensionEcologica.preg2415.puntos +
                    productor.dimensionEcologica.preg2416.puntos
                  )
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Cosecha: 10 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg2417.puntos +
                    productor.dimensionEcologica.preg2418.puntos +
                    productor.dimensionEcologica.preg2419.puntos +
                    productor.dimensionEcologica.preg2420.puntos +
                    productor.dimensionEcologica.preg2421.puntos +
                    productor.dimensionEcologica.preg2422.puntos
                  )
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Crianzas: 10 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg2423.puntos +
                    productor.dimensionEcologica.preg2424.puntos +
                    productor.dimensionEcologica.preg2425.puntos +
                    productor.dimensionEcologica.preg2426.puntos +
                    productor.dimensionEcologica.preg2427.puntos +
                    productor.dimensionEcologica.preg2428.puntos +
                    productor.dimensionEcologica.preg2429.puntos
                  )
                }}
              </q-item-section>
            </q-item>
            <!--<q-item>
              <q-item-section> Componente ambiental: 2 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg2430.puntos +
                      productor.dimensionEcologica.preg2431.puntos
                  )
                }}
              </q-item-section>
            </q-item> -->
            <q-item>
              <q-item-section> Riego (riego): 8 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg2432.puntos +
                    productor.dimensionEcologica.preg2433.puntos +
                    productor.dimensionEcologica.preg2434.puntos +
                    productor.dimensionEcologica.preg2435.puntos +
                    productor.dimensionEcologica.preg2436.puntos
                  )
                }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> Riego (sin riego): 10 </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg2430.puntos +
                    productor.dimensionEcologica.preg2431.puntos +
                    productor.dimensionEcologica.preg2437.puntos +
                    productor.dimensionEcologica.preg2438.puntos +
                    productor.dimensionEcologica.preg2439.puntos +
                    productor.dimensionEcologica.preg2440.puntos +
                    productor.dimensionEcologica.preg2441.puntos
                  )
                }}
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section> Total: </q-item-section>
              <q-item-section>
                {{
                  numeroDecimal(
                    productor.dimensionEcologica.preg241.puntos +
                    productor.dimensionEcologica.preg242.puntos +
                    productor.dimensionEcologica.preg243.puntos +
                    productor.dimensionEcologica.preg244.puntos +
                    productor.dimensionEcologica.preg245.puntos +
                    productor.dimensionEcologica.preg246.puntos +
                    productor.dimensionEcologica.preg247.puntos +
                    productor.dimensionEcologica.preg248.puntos +
                    productor.dimensionEcologica.preg249.puntos +
                    productor.dimensionEcologica.preg2410.puntos +
                    productor.dimensionEcologica.preg2411.puntos +
                    productor.dimensionEcologica.preg2412.puntos +
                    productor.dimensionEcologica.preg2413.puntos +
                    productor.dimensionEcologica.preg2414.puntos +
                    productor.dimensionEcologica.preg2415.puntos +
                    productor.dimensionEcologica.preg2416.puntos +
                    productor.dimensionEcologica.preg2417.puntos +
                    productor.dimensionEcologica.preg2418.puntos +
                    productor.dimensionEcologica.preg2419.puntos +
                    productor.dimensionEcologica.preg2420.puntos +
                    productor.dimensionEcologica.preg2421.puntos +
                    productor.dimensionEcologica.preg2422.puntos +
                    productor.dimensionEcologica.preg2423.puntos +
                    productor.dimensionEcologica.preg2424.puntos +
                    productor.dimensionEcologica.preg2425.puntos +
                    productor.dimensionEcologica.preg2426.puntos +
                    productor.dimensionEcologica.preg2427.puntos +
                    productor.dimensionEcologica.preg2428.puntos +
                    productor.dimensionEcologica.preg2429.puntos +
                    productor.dimensionEcologica.preg2430.puntos +
                    productor.dimensionEcologica.preg2431.puntos +
                    productor.dimensionEcologica.preg2432.puntos +
                    productor.dimensionEcologica.preg2433.puntos +
                    productor.dimensionEcologica.preg2434.puntos +
                    productor.dimensionEcologica.preg2435.puntos +
                    productor.dimensionEcologica.preg2436.puntos +
                    productor.dimensionEcologica.preg2437.puntos +
                    productor.dimensionEcologica.preg2438.puntos +
                    productor.dimensionEcologica.preg2439.puntos +
                    productor.dimensionEcologica.preg2440.puntos +
                    productor.dimensionEcologica.preg2441.puntos
                  )
                }}
              </q-item-section>
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
    cancel: true,
    persistent: true,
  }).onOk(() => {
    $q.localStorage.remove('productores');
    cargarProductores();
  }).onCancel(() => {
    // Opcionalmente, puedes manejar la acción de cancelar aquí si es necesario.
  });
}


function eliminarProductor(cedula: string) {
  $q.dialog({
    title: 'Eliminar productor',
    message:
      '¿Está seguro de realizar esta acción?, estos cambios no se pueden revertir.',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    const nuevoArreglo = listaProductores.value.filter(
      (productor: IProductor) => productor.datosGenerales.cedula !== cedula
    );

    $q.localStorage.set('productores', nuevoArreglo);
    cargarProductores();
  }).onCancel(() => {
    // Opcionalmente, puedes manejar la acción de cancelar aquí si es necesario.
  });
}


async function descargarRegistro(productor: IProductor) {
  try {
    const data = productor;
    const dataStr = JSON.stringify(data);
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
  const data = productor;
  const dataStr = JSON.stringify(data);
  const token = localStorage.getItem('apiToken');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  api.post('Productor', data, { headers })
    .then((response) => {
      console.log('Datos subidos con éxito:', response.data);
      $q.notify({
        color: 'positive',
        message: 'Datos subidos con éxito',
        icon: 'done',
      });
    })
    .catch((error) => {
      console.error('Error al subir los datos:', error);
      $q.notify({
        color: 'negative',
        message: 'Error al subir los registros',
        icon: 'report_problem',
      });
    });
}


</script>
<style scoped lang="scss"></style>
