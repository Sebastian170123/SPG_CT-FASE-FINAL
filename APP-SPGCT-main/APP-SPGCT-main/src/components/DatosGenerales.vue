<template>
  <!-- Esta etiqueta indica el comienzo de una plantilla de componente Vue.js -->
  <q-page class="q-ma-md">
    <!-- Se usa el co+-*9}
      +0mponente Quasar <q-page> con la clase q-ma-md para agregar un margen de tamaño medio alrededor de su contenido. -->
    <div class="text-h5 text-center text-weight-medium">
      Ficha de Veeduría Cantonal
    </div>
    <div class="text-subtitle1 text-weight-medium">1. Datos Generales</div>

    <!-- Se crea un <div> que implementa un sistema de diseño en filas con contenido centrado horizontalmente. -->
    <!-- Estas tres lineas de código definen un formulario Quasar `<q-form>` que, al enviarse, activará la función `formDatosGeneralesSubmit`,
     y se le aplican clases Quasar para establecer el espaciado y el diseño del formulario. -->
    <q-form
      @submit="formDatosGeneralesSubmit"
      class="row"
      id="FormularioDatosGenerales"
      @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
    >
      <!--
            1.-"<q-input
            v-model="datosGeneralesStore.nombre"" Utiliza un componente de entrada <q-input> con un modelo vinculado a datosGeneralesStore.nombre.

              2.- "label="Productor/a:"
            lazy-rules"    Agrega una etiqueta "Productor/a:" al componente de entrada.

            3.- ":rules="[" Habilita la validación en diferido con lazy-rules.

            4.- "(val) =>
                /^[A-Za-z_ ]+$/.test(val) ||
                'Caracteres incorrectos (numeros o signos)',
            ]""  Establece reglas de validación personalizadas que permiten solo caracteres alfabéticos y espacios,
            mostrando un mensaje de error si no se cumple esta condición. -->

      <!--Se crea un elemento <div> como contenedor.  -->
      <q-input
        type="text"
        v-model="datosGeneralesStore.nombre"
        label="Productor/a:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque el nombre',
          (val) =>
            /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]"
        class="col-12"
      />
      <!--
            1.- "<q-input
            type="number"" Utiliza un componente de entrada <q-input> con tipo "number".
            2.- "v-model="datosGeneralesStore.edad" "  Vincula el modelo a datosGeneralesStore.edad.
            3.- "label="Edad:"" Agrega una etiqueta "Edad:" al componente de entrada.
            4.- "lazy-rules
            :rules="["   Habilita la validación en diferido con lazy-rules.
            5.- "(val) => (val !== null && val !== '') || 'Coloque su edad ',
              (val) => (val > 0 && val < 100) || 'Solo numeros',
            ]""  Establece reglas de validación personalizadas: la primera verifica que se haya proporcionado una edad,
            y la segunda asegura que el valor sea mayor que 0 y menor que 100, mostrando mensajes de error correspondientes en caso contrario. -->

      <q-input
        type="number"
        v-model="datosGeneralesStore.edad"
        label="Edad:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque su edad ',
          (val) => (val > 0 && val < 100) || 'Coloque solo números',
        ]"
        class="col-12"
      />

      <!-- Aqui tenemos un q-input con una entrada de tipo texto,
             en el que se enlaza entre cedula y datosGeneralesStore
              los cambios que se realicen en el campo de entrada se actualizara
               automaticamente la propiedad, se añade tambien una etiqueta con el nombre de la pripiedad
              en este caso Número de Cédula, definimos una serie de reglas en la que se hacen 3 validaciones
              1° regla- se verifica que el campo no sea nulo o vacio si lo es, mostrara un mensaje "Coloque su Cédula"
              2° regla- se verifica que se ingresen unicamente números, de lo contrario se muestra el siguiente mensaje "Ingrese solo números".
              3° regla- se verifica que la longitud de numeros ingresados sea de 10 caracteres exaactos y si no muestra el mensaje "Cédula debe contener 10 números".
             -->
      <q-input
        type="text"
        v-model="datosGeneralesStore.cedula"
        label="Número de Cedula:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque su Cédula ',
          (val) => /^\d+$/.test(val) || 'Ingrese solo números',
          (val) => val.length == 10 || 'Cédula debe contener 10 números ',
        ]"
        class="col-12"
      />
      <!-- (val) => buscarCedula(val) || 'Productor ya registrado', -->
      <!-- Aqui tenemos un q-input con una entrada de tipo date,
             en el que se enlaza entre Fecha y datosGeneralesStore
              los cambios que se realicen en el campo de entrada se actualizara
               automaticamente la propiedad, se añade tambie una etiqueta con el nombre de la pripiedad
              en este caso "Fecha", definimos una serie de reglas en la que se hace 1 validacion
              1° regla- se verifica que el campo no sea nulo o vacio de lo contrario mostrara el mensaje ""Coloque la fecha"."-->
      <q-input
        type="date"
        v-model="datosGeneralesStore.fecha"
        label="Fecha de veeduria:"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Coloque la fecha de veeduria',
        ]"
        class="col-12"
      />

      <q-select
        label="Instrucción:"
        v-model="datosGeneralesStore.instruccion"
        :options="opcionesInstruccion"
        class="col-12"
      />
      <q-select
        label="Jefe de Hogar:"
        v-model="datosGeneralesStore.jefeHogar"
        :options="opcionesJefeHogar"
        class="col-12"
      />

      <q-input
        type="number"
        v-model="datosGeneralesStore.numHombres"
        label="Número de hijos Hombres:"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Coloque el número de Hombres ',
          (val) => /^[+]?\d+(\.\d+)?$/.test(val) || 'Solo números positivos',
          (val) => val >= 0 || 'No se permiten números negativos',
        ]"
        class="col-12"
      />
      <q-input
        type="number"
        v-model="datosGeneralesStore.numMujeres"
        label="Número de hijas Mujeres:"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Coloque el número de Mujeres',
          (val) => /^\d+(\.\d+)?$/.test(val) || 'Solo números positivos',
        ]"
        class="col-12"
      />
      <q-field label="Total de Hijos:" stack-label class="col-12">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">
            {{
              Number(datosGeneralesStore.numHombres) +
              Number(datosGeneralesStore.numMujeres)
            }}
          </div>
        </template>
      </q-field>

      <q-input
        type="text"
        v-model="datosGeneralesStore.telefono"
        label="Número de Teléfono:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque su teléfono ',
          (val) => /^\d+$/.test(val) || 'Ingrese solo números',
          (val) => val.length == 10 || 'Teléfono debe contener 10 números ',
        ]"
        class="col-12"
      />
      <q-input
        type="email"
        v-model="datosGeneralesStore.correo"
        label="Correo"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Coloque su Correo ']"
        class="col-12"
      />

      <div class="text-subtitle1 text-weight-medium col-12">
        Ubicación de las Chacras
      </div>
      <q-form
        @submit.prevent="agregarUbicacionChacra(ubicacionChacra)"
        class="col-12 row shadow-1 q-my-md"
        id="FormularioUbicacionChacra"
        @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formUbicacionChacra"
      >
        <q-select
          v-model="ubicacionChacra.provincia"
          label="Provincia:"
          :options="opcProvincia"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          @filter="filtroProvincia"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />

        <q-select
          label="Cantón:"
          v-model="ubicacionChacra.canton"
          :options="opcCantones"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          @filter="filtroCanton"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />

        <q-select
          label="Parroquia:"
          v-model="ubicacionChacra.parroquia"
          :options="opcParroquias"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          @filter="filtroParroquia"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />
        <q-input
          type="text"
          label="Comunidad:"
          v-model="ubicacionChacra.comunidad"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Llenar el Campo']"
          class="col-6 q-pa-md"
        />
        <q-input
          type="text"
          label="Barrio:"
          v-model="ubicacionChacra.barrio"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Llenar el Campo']"
          class="col-6 q-pa-md"
        />
        <q-input
          label="Latitud (Y):"
          v-model="ubicacionChacra.coordenadas.latitud"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Obligatorio ',
          ]"
          class="col-6 q-pa-md"
        />
        <q-input
          label="Longitud (X):"
          v-model="ubicacionChacra.coordenadas.longitud"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Obligatorio ',
          ]"
          class="col-6 q-pa-md"
        />
        <q-input
          label="Altura:"
          v-model="ubicacionChacra.coordenadas.altura"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Obligatorio ',
          ]"
          class="col-6 q-pa-md"
        />
        <q-select
          label="Zona:"
          v-model="ubicacionChacra.zona"
          :options="opcZona"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md"
        />
        <q-input
          type="text"
          label="Clave:"
          v-model="ubicacionChacra.clave"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Obligatorio ',
            (val) =>
              /^[0-9]+$/.test(val) ||
              'Caracteres incorrectos (deben ser solo números)',
          ]"
          class="col-6 q-pa-md"
        />

        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>

        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium"
            >Ubicaciones Agregadas</span
          >
          <q-list>
            <q-item
              v-for="(chacra, i) in datosGeneralesStore.ubiChacra"
              :key="i"
              class="no-padding q-my-md"
            >
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label
                      class="text-weight-medium text-subtitle2 text-start col"
                    >
                      Chacra N° {{ i + 1 }}</q-item-label
                    >
                    <q-icon
                      class="col-auto cursor-pointer"
                      name="delete"
                      size="1.6rem"
                      color="negative"
                      @click="eliminarChacra(i)"
                    />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Provincia</q-item-label>
                    <q-item-label>{{ chacra.provincia }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Cantón</q-item-label>
                    <q-item-label>{{ chacra.canton }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Parroquia</q-item-label>
                    <q-item-label>{{ chacra.parroquia }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Comunidad</q-item-label>
                    <q-item-label>{{ chacra.comunidad }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Barrio</q-item-label>
                    <q-item-label>{{ chacra.barrio }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Latitud</q-item-label>
                    <q-item-label>{{
                      chacra.coordenadas.latitud
                    }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Longitud</q-item-label>
                    <q-item-label>{{
                      chacra.coordenadas.longitud
                    }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Altura</q-item-label>
                    <q-item-label>{{ chacra.coordenadas.altura }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Zona</q-item-label>
                    <q-item-label>{{ chacra.zona }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Clave</q-item-label>
                    <q-item-label>{{ chacra.clave }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>

      <q-select
        label="Nombre de la organización a la que pertenece"
        v-model="datosGeneralesStore.organizacionPert"
        :options="opcOrganizaciones"
        lazy-rules
        :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        class="col-12"
      />

      <q-input
        type="number"
        v-model="datosGeneralesStore.aniosCultiv"
        label="¿Cuántos años cultiva agroecológicamente?"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Campo Oblogatorio ']"
        class="col-12"
      />
      <q-input
        type="number"
        v-model="datosGeneralesStore.numVeedurias"
        label="Número de veedurías realizadas"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Campo Oblogatorio ']"
        class="col-12"
      />
      <div class="text-subtitle1 text-weight-medium">Identificación</div>
      <q-select
        label="¿Usted es un productor certificado?"
        v-model="datosGeneralesStore.produtCertif"
        :options="opcProductCertif"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Campo Oblogatorio ']"
        class="col-12"
      />

      <div class="text-subtitle1 text-weight-medium col-12">
        2.Datos de la Unidad Productiva Familiar
      </div>

      <div class="text-subtitle1 text-weight-medium col-12">
        Datos Parcela / Chacra
      </div>
      <q-form
        @submit.prevent="agregarTipoTerreno(tipodeTerreno)"
        class="col-12 row shadow-1 q-my-md"
        id="FormularioTipoDeTerreno"
        @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formTipoTerreno"
      >
        <q-select
          label="Tipo de Terreno"
          v-model="tipodeTerreno.tipTerreno"
          :options="opcTipoTerreno"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          ]"
          class="col-12 q-pa-md"
        />
        <q-select
          label="Con Riego"
          v-model="tipodeTerreno.terrenosRiego"
          :options="opcTerrenoRiego"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          ]"
          class="col-12 q-pa-md"
        />

        <q-input
          type="number"
          step="0.01"
          v-model="tipodeTerreno.areaTerreno"
          label="Area total del predio m2:"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
            (val) => /^[+]?\d+(\.\d+)?$/.test(val) || 'Solo números positivos',
          ]"
          class="col-12 q-pa-md"
        />
        <div class="col-12 row justify-end q-px-md">
          <q-btn
            type="submit"
            label="agregar"
            color="positive"
            :disable="datosGeneralesStore.tiposTerrenos.length >= 5"
          />
        </div>

        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium"
            >Terrenos Agregados</span
          >
          <q-list>
            <q-item
              v-for="(terreno, i) in datosGeneralesStore.tiposTerrenos"
              :key="i"
              class="no-padding q-my-md"
            >
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label
                      class="text-weight-medium text-subtitle2 text-start col"
                    >
                      Terreno N° {{ i + 1 }}</q-item-label
                    >
                    <q-icon
                      class="col-auto cursor-pointer"
                      name="delete"
                      size="1.6rem"
                      color="negative"
                      @click="eliminarTerreno(i)"
                    />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Tipo de Terreno</q-item-label>
                    <q-item-label>{{ terreno.tipTerreno }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Con Riego</q-item-label>
                    <q-item-label>{{ terreno.terrenosRiego }}</q-item-label>
                  </div>
                  <div class="col-12 q-my-xs">
                    <q-item-label caption
                      >Area total del predio m2</q-item-label
                    >
                    <q-item-label>{{ terreno.areaTerreno }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>

      <!-- Aqui creamos un boton con el texto "Enviar" de tipo "submit" a travez de este bot´n se enviara
            la informacion del fomulario solo si las validaciones estan correctas ya que etan conectados -->
      <q-btn type="submit" label="Continuar" color="primary" class="col-12" />
    </q-form>
  </q-page>
</template>
<!--En esta linea  se esta utilizando TupeScript dentro del setup para configurar y definir la lógica y componentes del componente -->
<script setup lang="ts">
//Esta importacion es importante ya que esta obteniendo una funcionalidad especifica con los datos generales desde la ruta escrita.
import { useDatosGenerales } from 'src/stores/datos-generales';
import { useFormulariosControl } from 'src/stores/formularios-control';
//Esta importacion es importante ya que esta obteniendo una funcionalidad especifica con las ubicacionesChacra desde la ruta escrita.
import { IUbicacionChacra } from 'src/models/spgct.models';
import { ITipoTerreno } from 'src/models/spgct.models';
import { provincias } from 'src/DistribucionEcuador/provincias';
import * as cantonesProvincia from 'src/DistribucionEcuador/cantones';
import * as parroquiasCantones from 'src/DistribucionEcuador/parroquias';
import { ref, watchEffect, watch } from 'vue';
import { useQuasar } from 'quasar';

/*La primera variable, ubicacionesChacras, es una referencia a un arreglo de objetos de tipo IUbicacionChacra.
Esta variable se inicializa como un arreglo vacío.

La segunda variable, ubicacionChacra, es una referencia a un objeto de tipo IUbicacionChacra.
Este objeto tiene varias propiedades, como provincia, canton, parroquia, comunidad y barrio.
 Estas propiedades se inicializan con cadenas vacías*/
const $q = useQuasar();
const emit = defineEmits(['submit']);
const formUbicacionChacra = ref();
const formTipoTerreno = ref();

const ubicacionChacra = ref<IUbicacionChacra>({
  provincia: '',
  canton: '',
  parroquia: '',
  comunidad: '',
  barrio: '',
  coordenadas: {
    latitud: '',
    longitud: '',
    altura: '',
  },
  zona: '',
  clave: '',
});
const tipodeTerreno = ref<ITipoTerreno>({
  tipTerreno: '',
  terrenosRiego: '',
  areaTerreno: '',
});

/*La función "agregarUbicacionChacra" toma un objeto "data" de tipo "IUbicacionChacra" como argumento.
  Luego, crea una nueva variable llamada "nuevaChacra" que es una copia del objeto "data" utilizando el operador de propagación .
   Finalmente, agrega esta nueva chacra al arreglo "ubiChacra" en el objeto "datosGeneralesStore".*/
function agregarUbicacionChacra(data: IUbicacionChacra) {
  ubicacionChacra.value = {
    provincia: '',
    canton: '',
    parroquia: '',
    comunidad: '',
    barrio: '',
    coordenadas: {
      latitud: '',
      longitud: '',
      altura: '',
    },
    zona: '',
    clave: '',
  };
  formUbicacionChacra.value.resetValidation();
  const nuevaChacra = { ...data };
  datosGeneralesStore.ubiChacra.push(nuevaChacra);
  //datosGeneralesStore.ubiChacra = ubicacionesChacras.value;
}
function agregarTipoTerreno(data: ITipoTerreno) {
  tipodeTerreno.value = {
    tipTerreno: '',
    terrenosRiego: '',
    areaTerreno: '',
  };
  formTipoTerreno.value.resetValidation();
  const nuevoTerreno: ITipoTerreno = {
    tipTerreno: data.tipTerreno,
    terrenosRiego: data.terrenosRiego,
    areaTerreno: data.areaTerreno,
  };
  datosGeneralesStore.tiposTerrenos.push(nuevoTerreno);
  //datosGeneralesStore.ubiChacra = ubicacionesChacras.value;
}

/*Esta linea llama a la función "useDatosGenerales()"para obtener un objeto o datos relacionados y los asigna a la constante "datosGeneralesStore"
que almacenara el resultado de llamara a la funcion.*/
const datosGeneralesStore = useDatosGenerales();
const formulariosControl = useFormulariosControl();
const opcionesInstruccion = [
  'Primaria',
  'Secundaria',
  'Universitaria',
  'Ninguna',
];

const opcZona = ['Rural', 'Urbano'];
const opcionesJefeHogar = ['Si', 'No'];
const opcProvincia = ref(provincias);
const opcCantones = ref<string[]>([]);
const opcParroquias = ref<string[]>([]);
let cantones: string[] = [];
let parroquias: string[] = [];

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
const opcProductCertif = ['Si', 'No'];
const opcTipoTerreno = [
  'Terreno Propio',
  'Terreno Arrendado',
  'Terreno al Partir',
];
const opcTerrenoRiego = ['Si', 'No'];

watchEffect(() => {
  //provincia en caso de que seleccione Imbabura llenan el array de cantones llenar con 3 cantones de imbabura

  switch (ubicacionChacra.value.provincia) {
    //case de todas las provincias
    case 'Azuay':
      actualizarCanton(cantonesProvincia.azuay);
      break;
    case 'Bolívar':
      actualizarCanton(cantonesProvincia.bolívar);
      break;
    case 'Cañar':
      actualizarCanton(cantonesProvincia.caniar);
      break;
    case 'Carchi':
      actualizarCanton(cantonesProvincia.carchi);
      break;
    case 'Chimborazo':
      actualizarCanton(cantonesProvincia.chimborazo);
      break;
    case 'Cotopaxi':
      actualizarCanton(cantonesProvincia.cotopaxi);
      break;
    case 'El Oro':
      actualizarCanton(cantonesProvincia.elOro);
      break;
    case 'Esmeraldas':
      actualizarCanton(cantonesProvincia.esmeraldas);
      break;
    case 'Guayas':
      actualizarCanton(cantonesProvincia.guayas);
      break;
    case 'Imbabura':
      actualizarCanton(cantonesProvincia.imbabura);
      break;
    case 'Loja':
      actualizarCanton(cantonesProvincia.loja);
      break;
    case 'Los Ríos':
      actualizarCanton(cantonesProvincia.losRios);
      break;
    case 'Manabí':
      actualizarCanton(cantonesProvincia.manabi);
      break;
    case 'Morona Santiago':
      actualizarCanton(cantonesProvincia.moronaSantiago);
      break;
    case 'Napo':
      actualizarCanton(cantonesProvincia.napo);
      break;
    case 'Orellana':
      actualizarCanton(cantonesProvincia.orellana);
      break;
    case 'Pastaza':
      actualizarCanton(cantonesProvincia.pastaza);
      break;
    case 'Pichincha':
      actualizarCanton(cantonesProvincia.pichincha);
      break;
    case 'Santa Elena':
      actualizarCanton(cantonesProvincia.santaElena);
      break;
    case 'Sucumbíos':
      actualizarCanton(cantonesProvincia.sucumbios);
      break;
    case 'Santo Domingo':
      actualizarCanton(cantonesProvincia.stoDomingo);
      break;
    case 'Tungurahua':
      actualizarCanton(cantonesProvincia.tungurahua);
      break;
    case 'Zamora Chinchipe':
      actualizarCanton(cantonesProvincia.zamoraChinchipe);
      break;
    default:
      cantones = [];
      break;
  }
});
watchEffect(() => {
  switch (ubicacionChacra.value.canton) {
    //opciones de parroquias de los cantones de Azuay
    case 'Cuenca':
      actualizarParroquia(parroquiasCantones.cuenca);
      break;
    case 'Chordeleg':
      actualizarParroquia(parroquiasCantones.chordeleg);
      break;
    case 'El Pan':
      actualizarParroquia(parroquiasCantones.elPan);
      break;
    case 'Girón':
      actualizarParroquia(parroquiasCantones.giron);
      break;
    case 'Guachapala':
      actualizarParroquia(parroquiasCantones.guachapala);
      break;
    case 'Gualaceo':
      actualizarParroquia(parroquiasCantones.gualaceo);
      break;
    case 'Nabón':
      actualizarParroquia(parroquiasCantones.nabon);
      break;
    case 'Oña':
      actualizarParroquia(parroquiasCantones.onia);
      break;
    case 'Camilo Ponce Enríquez':
      actualizarParroquia(parroquiasCantones.camiloPonceEnriquez);
      break;
    case 'Sigsig':
      actualizarParroquia(parroquiasCantones.sigsig);
      break;
    case 'San Fernando':
      actualizarParroquia(parroquiasCantones.sanFernando);
      break;
    case 'Santa Isabel':
      actualizarParroquia(parroquiasCantones.santaIsabel);
      break;
    case 'Pucará':
      actualizarParroquia(parroquiasCantones.pucara);
      break;
    case 'Sevilla de Oro':
      actualizarParroquia(parroquiasCantones.sevilladeOro);
      break;

    //Opciones de parroquias de los cantones de Bolivar
    case 'Guaranda':
      actualizarParroquia(parroquiasCantones.guaranda);
      break;
    case 'Caluma':
      actualizarParroquia(parroquiasCantones.caluma);
      break;
    case 'Chimbo':
      actualizarParroquia(parroquiasCantones.chimbo);
      break;
    case 'Chillanes':
      actualizarParroquia(parroquiasCantones.chillanes);
      break;
    case 'Echeandía':
      actualizarParroquia(parroquiasCantones.echeandia);
      break;
    case 'San Miguel':
      actualizarParroquia(parroquiasCantones.sanMiguel);
      break;
    case 'San Pablode Atenas':
      actualizarParroquia(parroquiasCantones.sanPablodeAtenas);
      break;

    //opciones de parroquias de los cantones de Cañar
    case 'Azogues':
      actualizarParroquia(parroquiasCantones.azogues);
      break;
    case 'Cañar':
      actualizarParroquia(parroquiasCantones.caniar);
      break;
    case 'El Tambo':
      actualizarParroquia(parroquiasCantones.elTambo);
      break;
    case 'La Troncal':
      actualizarParroquia(parroquiasCantones.laTroncal);
      break;
    case 'Suscal':
      actualizarParroquia(parroquiasCantones.suscal);
      break;

    //opciones de parroquias de los cantones de Carchi
    case 'Tulcán':
      actualizarParroquia(parroquiasCantones.tulcan);
      break;
    case 'Bolívar':
      actualizarParroquia(parroquiasCantones.bolivarCarchi);
      break;
    case 'Espejo':
      actualizarParroquia(parroquiasCantones.espejo);
      break;
    case 'Montúfar':
      actualizarParroquia(parroquiasCantones.montufar);
      break;
    case 'San Pedro de Huaca':
      actualizarParroquia(parroquiasCantones.sanPedrodeHuaca);
      break;

    //opciones de parroquias de los cantones de Chimborazo
    case 'Alausí':
      actualizarParroquia(parroquiasCantones.alausi);
      break;
    case 'Chambo':
      actualizarParroquia(parroquiasCantones.chambo);
      break;
    case 'Chunchi':
      actualizarParroquia(parroquiasCantones.chunchi);
      break;
    case 'Colta':
      actualizarParroquia(parroquiasCantones.colta);
      break;
    case 'Cumandá':
      actualizarParroquia(parroquiasCantones.cumanda);
      break;
    case 'Guamote':
      actualizarParroquia(parroquiasCantones.guamote);
      break;
    case 'Guano':
      actualizarParroquia(parroquiasCantones.guano);
      break;
    case 'Pallatanga':
      actualizarParroquia(parroquiasCantones.pallatanga);
      break;
    case 'Penipe':
      actualizarParroquia(parroquiasCantones.penipe);
      break;
    case 'Riobamba':
      actualizarParroquia(parroquiasCantones.riobamba);
      break;

    //opciones de parroquias de los cantones de Cotopaxi
    case 'La Maná':
      actualizarParroquia(parroquiasCantones.laMana);
      break;
    case 'Latacunga':
      actualizarParroquia(parroquiasCantones.latacunga);
      break;
    case 'Pangua':
      actualizarParroquia(parroquiasCantones.pangua);
      break;
    case 'Pujilí':
      actualizarParroquia(parroquiasCantones.pujili);
      break;
    case 'Salcedo':
      actualizarParroquia(parroquiasCantones.salcedo);
      break;
    case 'Saquisilí':
      actualizarParroquia(parroquiasCantones.saquisili);
      break;
    case 'Sigchos':
      actualizarParroquia(parroquiasCantones.sigchos);
      break;

    //Parroquias de los cantones de El Oro
    case 'Machala':
      actualizarParroquia(parroquiasCantones.machalaelOro);
      break;
    case 'Arenillas':
      actualizarParroquia(parroquiasCantones.arenillas);
      break;
    case 'Atahualpa':
      actualizarParroquia(parroquiasCantones.atahualpa);
      break;
    case 'Balsas':
      actualizarParroquia(parroquiasCantones.balsas);
      break;
    case 'Chila':
      actualizarParroquia(parroquiasCantones.chilla);
      break;
    case 'El Guabo':
      actualizarParroquia(parroquiasCantones.elGuabo);
      break;
    case 'Huaquillas':
      actualizarParroquia(parroquiasCantones.huaquillas);
      break;
    case 'Marcabelí':
      actualizarParroquia(parroquiasCantones.marcabeli);
      break;
    case 'Pasaje':
      actualizarParroquia(parroquiasCantones.pasaje);
      break;
    case 'Piñas':
      actualizarParroquia(parroquiasCantones.pinias);
      break;
    case 'Portovelo':
      actualizarParroquia(parroquiasCantones.portovelo);
      break;
    case 'Santa Rosa':
      actualizarParroquia(parroquiasCantones.santaRosa);
      break;
    case 'Zaruma':
      actualizarParroquia(parroquiasCantones.zaruma);
      break;
    case 'Las Lajas':
      actualizarParroquia(parroquiasCantones.lasLajas);
      break;

    //opciones de parroquias de los cantones de Esmeraldas
    case 'Atacames':
      actualizarParroquia(parroquiasCantones.atacames);
      break;
    case 'Eloy Alfaro':
      actualizarParroquia(parroquiasCantones.eloyalfaro);
      break;
    case 'Esmeraldas':
      actualizarParroquia(parroquiasCantones.esmeraldas);
      break;
    case 'Muisne':
      actualizarParroquia(parroquiasCantones.muisne);
      break;
    case 'Quinindé':
      actualizarParroquia(parroquiasCantones.quininde);
      break;
    case 'Rioverde':
      actualizarParroquia(parroquiasCantones.rioverde);
      break;
    case 'San Lorenzo':
      actualizarParroquia(parroquiasCantones.sanLorenzo);
      break;

    //opciones de parroquias de los cantones de Guayas
    case 'Balao':
      actualizarParroquia(parroquiasCantones.balao);
      break;
    case 'Balzar':
      actualizarParroquia(parroquiasCantones.balzar);
      break;
    case 'Guayaquil':
      actualizarParroquia(parroquiasCantones.guayaquil);
      break;
    case 'Colimes':
      actualizarParroquia(parroquiasCantones.colimes);
      break;
    case 'Daule':
      actualizarParroquia(parroquiasCantones.daule);
      break;
    case 'El Empalme':
      actualizarParroquia(parroquiasCantones.elEmpalme);
      break;
    case 'El Triunfo':
      actualizarParroquia(parroquiasCantones.elTriunfo);
      break;
    case 'Milagro':
      actualizarParroquia(parroquiasCantones.milagro);
      break;
    case 'Isodro Ayora':
      actualizarParroquia(parroquiasCantones.isidroAyora);
      break;
    case 'Naranjal':
      actualizarParroquia(parroquiasCantones.naranjal);
      break;
    case 'Palestina':
      actualizarParroquia(parroquiasCantones.palestina);
      break;
    case 'Playas':
      actualizarParroquia(parroquiasCantones.playas);
      break;
    case 'Samborondón':
      actualizarParroquia(parroquiasCantones.samborondon);
      break;
    case 'Santa Lucía':
      actualizarParroquia(parroquiasCantones.santaLucia);
      break;

    //opciones de parroquias de los cantones de Imbabura
    case 'Antonio Ante':
      actualizarParroquia(parroquiasCantones.antonioAnte);
      break;
    case 'Cotacachi':
      actualizarParroquia(parroquiasCantones.cotacachi);
      break;
    case 'Ibarra':
      actualizarParroquia(parroquiasCantones.ibarra);
      break;
    case 'Otavalo':
      actualizarParroquia(parroquiasCantones.otavalo);
      break;
    case 'Pimampiro':
      actualizarParroquia(parroquiasCantones.pimampiro);
      break;
    case 'San Miguel de Urcuquí':
      actualizarParroquia(parroquiasCantones.sanMigueldeUrcuqui);
      break;

    //opciones de parroquias de los cantones de Loja
    case 'Calvas':
      actualizarParroquia(parroquiasCantones.calvas);
      break;
    case 'Catamayo':
      actualizarParroquia(parroquiasCantones.catamayo);
      break;
    case 'Celica':
      actualizarParroquia(parroquiasCantones.celica);
      break;
    case 'Chaguarpamba':
      actualizarParroquia(parroquiasCantones.chaguarpamba);
      break;
    case 'Espíndola':
      actualizarParroquia(parroquiasCantones.espindola);
      break;
    case 'Gonzanamá':
      actualizarParroquia(parroquiasCantones.gonzanama);
      break;
    case 'Loja':
      actualizarParroquia(parroquiasCantones.loja);
      break;
    case 'Macará':
      actualizarParroquia(parroquiasCantones.macara);
      break;

    //opciones de parroquias de los cantones de Los Rios
    case 'Baba':
      actualizarParroquia(parroquiasCantones.baba);
      break;
    case 'Babahoyo':
      actualizarParroquia(parroquiasCantones.babahoyo);
      break;
    case 'Buena Fe':
      actualizarParroquia(parroquiasCantones.buenaFe);
      break;
    case 'Vinces':
      actualizarParroquia(parroquiasCantones.vinces);
      break;
    case 'Mocache':
      actualizarParroquia(parroquiasCantones.mocache);
      break;
    case 'Palenque':
      actualizarParroquia(parroquiasCantones.palenque);
      break;
    case 'Quinsaloma':
      actualizarParroquia(parroquiasCantones.quinsaloma);
      break;
    case 'Urdaneta':
      actualizarParroquia(parroquiasCantones.urdaneta);
      break;
    case 'Ventanas':
      actualizarParroquia(parroquiasCantones.ventanas);
      break;
    case 'Valencia':
      actualizarParroquia(parroquiasCantones.valencia);
      break;

    //opciones de parroquias de los cantones de Manabi
    case 'Pedernales':
      actualizarParroquia(parroquiasCantones.pedernales);
      break;
    case 'Jama':
      actualizarParroquia(parroquiasCantones.jama);
      break;
    case 'San Vicente':
      actualizarParroquia(parroquiasCantones.sanVicente);
      break;
    case 'Sucre':
      actualizarParroquia(parroquiasCantones.sucre);
      break;
    case 'Chone':
      actualizarParroquia(parroquiasCantones.chone);
      break;
    case 'Flavio Alfaro':
      actualizarParroquia(parroquiasCantones.flavioAlfaro);
      break;
    case 'El Carmen':
      actualizarParroquia(parroquiasCantones.elCarmen);
      break;
    case 'Tosagua':
      actualizarParroquia(parroquiasCantones.tosagua);
      break;
    case 'Rocafuerte':
      actualizarParroquia(parroquiasCantones.rocafuerte);
      break;
    case 'Junín':
      actualizarParroquia(parroquiasCantones.junin);
      break;
    case 'Pichincha':
      actualizarParroquia(parroquiasCantones.pichinchadeManabi);
      break;
    case 'Portoviejo':
      actualizarParroquia(parroquiasCantones.portoviejo);
      break;
    case 'Manta':
      actualizarParroquia(parroquiasCantones.manta);
      break;
    case 'Santa Ana':
      actualizarParroquia(parroquiasCantones.santaAna);
      break;
    case 'Olmedo':
      actualizarParroquia(parroquiasCantones.olmedo);
      break;
    case 'Montecristi':
      actualizarParroquia(parroquiasCantones.montecristi);
      break;
    case 'Jaramijó':
      actualizarParroquia(parroquiasCantones.jaramijo);
      break;

    //opciones de parroquias de los cantones de Morona Santiago
    case 'Santiago de Méndez':
      actualizarParroquia(parroquiasCantones.santiagodeMendez);
      break;
    case 'Taisha':
      actualizarParroquia(parroquiasCantones.taisha);
      break;
    case 'Limón Indanza':
      actualizarParroquia(parroquiasCantones.limonIndaza);
      break;
    case 'Gualaquiza':
      actualizarParroquia(parroquiasCantones.gualaquiza);
      break;
    case 'Morona':
      actualizarParroquia(parroquiasCantones.palora);
      break;
    case 'Sucua':
      actualizarParroquia(parroquiasCantones.sucua);
      break;
    case 'Huamboya':
      actualizarParroquia(parroquiasCantones.huamboya);
      break;
    case 'Logroño':
      actualizarParroquia(parroquiasCantones.logronio);
      break;

    //opciones de parroquias de los cantones de Napo
    case 'Archidona':
      actualizarParroquia(parroquiasCantones.archidona);
      break;
    case 'Carlos Julio Arosemena Tola':
      actualizarParroquia(parroquiasCantones.carlosJulioArosemenaTola);
      break;
    case 'El Chaco':
      actualizarParroquia(parroquiasCantones.elChaco);
      break;
    case 'Tena':
      actualizarParroquia(parroquiasCantones.tena);
      break;
    case 'Quijos':
      actualizarParroquia(parroquiasCantones.quijos);
      break;

    //opciones de parroquias de los cantones de Orellana
    case 'Orellana':
      actualizarParroquia(parroquiasCantones.orellana);
      break;
    case 'Aguarico':
      actualizarParroquia(parroquiasCantones.aguarico);
      break;
    case 'Joya de los Sachas':
      actualizarParroquia(parroquiasCantones.joyadelosSachas);
      break;
    case 'Loreto':
      actualizarParroquia(parroquiasCantones.loreto);
      break;

    //opciones de parroquias de lo cantones de Pastaza
    case 'Arajuno':
      actualizarParroquia(parroquiasCantones.arajuno);
      break;
    case 'Mera':
      actualizarParroquia(parroquiasCantones.mera);
      break;
    case 'Pastaza':
      actualizarParroquia(parroquiasCantones.pastaza);
      break;
    case 'Santa Clara ':
      actualizarParroquia(parroquiasCantones.santaClara);
      break;

    // opciones de parroquia de los cantones de Pichincha
    case 'Cayambe':
      actualizarParroquia(parroquiasCantones.cayambe);
      break;
    case 'Mejía':
      actualizarParroquia(parroquiasCantones.mejia);
      break;
    case 'Pedro Moncayo':
      actualizarParroquia(parroquiasCantones.pedroMoncayo);
      break;
    case 'Pedro Vicente Maldonado':
      actualizarParroquia(parroquiasCantones.pedroVicenteMaldonado);
      break;
    case 'Puerto Quito':
      actualizarParroquia(parroquiasCantones.puertoQuito);
      break;
    case 'Quito':
      actualizarParroquia(parroquiasCantones.quito);
      break;
    case 'Rumiñahui':
      actualizarParroquia(parroquiasCantones.ruminiahui);
      break;
    case 'San Miguel de Los Bancos':
      actualizarParroquia(parroquiasCantones.sanMigueldelosBancos);
      break;

    //opciones de parroquias de los cantones de Santa Elena
    case 'La Libertad':
      actualizarParroquia(parroquiasCantones.laLibertad);
      break;
    case 'Salinas':
      actualizarParroquia(parroquiasCantones.salinas);
      break;
    case 'Santa Elena':
      actualizarParroquia(parroquiasCantones.santaElena);
      break;
    //opciones de parroquias de los cantones de Sucumbios
    case 'Cascales':
      actualizarParroquia(parroquiasCantones.cascales);
      break;
    case 'Cuyabeno':
      actualizarParroquia(parroquiasCantones.cuyabeno);
      break;
    case 'Gonzalo Pizarro':
      actualizarParroquia(parroquiasCantones.gonzaloPizarro);
      break;
    case 'Lago Agrio':
      actualizarParroquia(parroquiasCantones.lagoAgrio);
      break;
    case 'Putumayo':
      actualizarParroquia(parroquiasCantones.putumayo);
      break;
    case 'Shushufindi':
      actualizarParroquia(parroquiasCantones.shushufindi);
      break;
    case 'Sucumbíos':
      actualizarParroquia(parroquiasCantones.sucumbios);
      break;

    // opciones de parroquia de los cantones de Santo Domingo
    case 'Sto.Domingo':
      actualizarParroquia(parroquiasCantones.stodomingo);
      break;
    case 'La concordia':
      actualizarParroquia(parroquiasCantones.laConcordia);
      break;

    //opciones de parroquias de los cantones de Tungurahua
    case 'Ambato':
      actualizarParroquia(parroquiasCantones.ambato);
      break;
    case 'Baños':
      actualizarParroquia(parroquiasCantones.banios);
      break;
    case 'Cevallos':
      actualizarParroquia(parroquiasCantones.cevallos);
      break;
    case 'Mocha':
      actualizarParroquia(parroquiasCantones.mocha);
      break;
    case 'Patate':
      actualizarParroquia(parroquiasCantones.patate);
      break;
    case 'Quero':
      actualizarParroquia(parroquiasCantones.quero);
      break;
    case 'Pelileo':
      actualizarParroquia(parroquiasCantones.pelileo);
      break;
    case 'Píllaro':
      actualizarParroquia(parroquiasCantones.pillaro);
      break;
    case 'Tisaleo':
      actualizarParroquia(parroquiasCantones.tisaleo);
      break;
    //opciones de parroquia de loscantones de ZAMORA CHINCHIPE

    case 'Centinela del Cóndor':
      actualizarParroquia(parroquiasCantones.centinelaDelCondor);
      break;

    case 'Chinchipe':
      actualizarParroquia(parroquiasCantones.chinchipe);
      break;
    case 'El Pangui':
      actualizarParroquia(parroquiasCantones.elPangui);
      break;

    case 'Nangaritza':
      actualizarParroquia(parroquiasCantones.nangaritza);
      break;

    case 'Palanda':
      actualizarParroquia(parroquiasCantones.palanda);
      break;

    case 'Paquisha':
      actualizarParroquia(parroquiasCantones.paquisha);
      break;

    case 'Yacuambi':
      actualizarParroquia(parroquiasCantones.yacuambi);
      break;

    case 'Yantzaza':
      actualizarParroquia(parroquiasCantones.yantzaza);
      break;

    default:
      opcParroquias.value = [];
      break;
  }
});

watch(datosGeneralesStore, () => {
  if (datosGeneralesStore.numMujeres < 0) {
    datosGeneralesStore.numMujeres = 0;
  } else if (datosGeneralesStore.numHombres < 0) {
    datosGeneralesStore.numHombres = 0;
  } else {
    return;
  }
});
function actualizarParroquia(paramParroqui: string[]): void {
  parroquias = paramParroqui;
  opcParroquias.value = [...parroquias];
  ubicacionChacra.value.parroquia = parroquias[0];
}
function actualizarCanton(paramCanton: string[]): void {
  cantones = paramCanton;
  opcCantones.value = [...cantones];
  ubicacionChacra.value.canton = cantones[0];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filtroProvincia(value: string, updated: any) {
  if (value === '') {
    updated(() => {
      opcProvincia.value = provincias;
    });
    return;
  }
  updated(() => {
    const palabra = value.toLowerCase();
    opcProvincia.value = provincias.filter(
      (v) => v.toLowerCase().indexOf(palabra) > -1
    );
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filtroCanton(value: string, updated: any) {
  if (value === '') {
    updated(() => {
      opcCantones.value = cantones;
    });
    return;
  }
  updated(() => {
    const palabra = value.toLowerCase();
    opcCantones.value = cantones.filter(
      (v) => v.toLowerCase().indexOf(palabra) > -1
    );
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filtroParroquia(value: string, updated: any) {
  if (value === '') {
    updated(() => {
      opcParroquias.value = parroquias;
    });
    return;
  }
  updated(() => {
    const palabra = value.toLowerCase();
    opcParroquias.value = parroquias.filter(
      (v) => v.toLowerCase().indexOf(palabra) > -1
    );
  });
}

function eliminarChacra(index: number): void {
  datosGeneralesStore.ubiChacra.splice(index, 1);
}
function eliminarTerreno(index: number): void {
  datosGeneralesStore.tiposTerrenos.splice(index, 1);
}

// function buscarCedula(value: string) {
//   const listaProductores: any = $q.localStorage.getItem('productores') || [];
//   const productor = listaProductores.find(
//     (p: any) => p.datosGenerales.cedula === value
//   );
//   if (productor) {
//     return false;
//   } else {
//     return true;
//   }
// }

/*
Esta función "formDatosGeneralesSubmit" está diseñada para mostrar en la consola los datos
almacenados en datosGeneralesStore, después de que el usuario haya enviado sus datos.
*/

function formDatosGeneralesSubmit() {
  if (datosGeneralesStore.ubiChacra.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo una ubicacion de chacra',
    });
    return;
  }
  if (datosGeneralesStore.tiposTerrenos.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo un terreno',
    });
    return;
  }

  formulariosControl.setDatosGenerales(datosGeneralesStore.$state);
  emit('submit', true);
  //formulariosControl.guardarInformacionEnLocalStorage();
}
</script>
