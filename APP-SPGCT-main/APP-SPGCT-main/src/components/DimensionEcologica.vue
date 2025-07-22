<template>
  <q-page class="q-ma-md">
    <div class="row items-center">
      <div class="col-8">
        <div class="text-subtitle1 text-weight-medium">
          {{ dimensionEcologicaStore.dimensionEcologica24.nombre }}
        </div>
      </div>
      <div class="col-4 row justify-end">
        Puntaje:&nbsp;
        <span class="text-primary text-weight-medium">
          {{
            (dimensionEcologicaStore as any).puntajeTotalDimensionEcologica24
          }}
        </span>
         /65
      </div>
    </div>
    <q-form @submit="formDimenEcologicaSubmit" class="row" id="FormDimensionEcologica"
      @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })">
      <!--PREGUNTA 2.4.1-->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg241.nombre }}
      </q-item-label>

      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg241.respuesta" label="Seleccione su respuesta"
        :options="opcPreg241" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
        :display-value="dimensionEcologicaStore.$state.dimensionEcologica24.preg241.respuesta
          .label
          ? dimensionEcologicaStore.$state.dimensionEcologica24.preg241
            .respuesta.label
          : ''
          " class="col-12" />

      <!--PREGUNTA 2.4.2-->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg242.nombre }}
      </q-item-label>

      <div class="col-12">
        <q-list>
          <q-item v-for="(terreno, i) in datosGeneralesStore.tiposTerrenos" :key="i" class="no-padding q-my-md">
            <q-item-section>
              <div class="row shadow-1 q-pa-md">
                <div class="col-12 row items-center">
                  <q-item-label class="text-weight-medium text-subtitle2 text-start col-12">
                    Terreno N° {{ i + 1 }}</q-item-label>

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
                <div class="col-6 q-my-xs">
                  <q-item-label caption>Area m2</q-item-label>
                  <q-item-label>{{ terreno.areaTerreno }}</q-item-label>
                </div>
                <div class="row col-12">
                  <div class="col-12 q-mt-md">
                    <q-item-label class="text-primary">Complete los siguientes campos:</q-item-label>
                  </div>
                  <div class="col-6 q-px-xs">
                    <q-input v-model="terreno.perimetroTotal" type="number" step="0.01"
                      label="Perimetro Total en metros lineales" :rules="[
                        (val) =>
                          (val !== null && val !== '') || 'Campo Obligatorio ',
                        (val) =>
                          parseFloat(val) <= parseFloat(terreno.areaTerreno) ||
                          'El perimetro debe ser menor al área del terreno',
                      ]" @update:model-value="totalPerimetro" />
                  </div>
                  <div class="col-6 q-px-xs">
                    <q-input v-model="terreno.metroSembrado" type="number" step="0.01"
                      label="Metros sembrados de cerca viva" :rules="[
                        (val) =>
                          (val !== null && val !== '') || 'Campo Obligatorio ',
                        (val) =>
                          parseFloat(val) <=
                          parseFloat(terreno.perimetroTotal || '0') ||
                          'Los metros sembrados deben ser menor al perimetro total',
                      ]" @update:model-value="totalMetroSembrado" />
                  </div>
                </div>
              </div>
            </q-item-section>
          </q-item>

          <div class="shadow-1 col-12 q-pa-md">
            <q-item-label>
              Suma de Perímetros Totales:
              <span>
                {{
                  dimensionEcologicaStore.dimensionEcologica24.preg242.totalPeri
                }}</span>
            </q-item-label>

            <q-item-label>
              Suma de Metros Sembrados:
              <span>{{
                dimensionEcologicaStore.dimensionEcologica24.preg242
                  .totalMetroSembrado
              }}</span>
            </q-item-label>

            <q-item-label>
              Porcentaje de Metros Sembrados:
              <span>{{
                (
                  ((Number(
                    dimensionEcologicaStore.dimensionEcologica24.preg242
                      .totalMetroSembrado
                  ) /
                    Number(
                      dimensionEcologicaStore.dimensionEcologica24.preg242
                        .totalPeri
                    )) *
                    100 *
                    10) /
                  10 || 0
                ).toFixed(2)
              }}%</span>
            </q-item-label>
          </div>
        </q-list>
      </div>

      <div class="text-subtitle1 text-weight-medium col-12">Podas</div>
      <!--PREGUNTA 2.4.3-->
      <div class="q-my-md col-12">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg243.nombre }}
      </div>

      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg243.respuesta" label="Seleccione su respuesta"
        :options="opcPreg243" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
        :display-value="dimensionEcologicaStore.dimensionEcologica24.preg243.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg243.respuesta
            .label
          : ''
          " class="col-12" @update:model-value="actualizaPreg243" />

      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg243.subpreg243.nombre
        }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg243.subpreg243
        .respuesta
        " label="Seleccionar su respuesta" :options="opcSubPreg243" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg243.subpreg243
          .respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg243.subpreg243
            .respuesta.label
          : ''
          " class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.preg243.respuesta
            .label == 'Si'
            ? false
            : true
            " />
      <div class="text-subtitle1 text-weight-medium">Subsistemas Suelos</div>
      <q-item-label class="q-my-md col-12">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg243.subsistemasSuelo
            .nombre
        }}
      </q-item-label>
      <div class="col-12">
        <q-list>
          <q-item v-for="(terreno, i) in datosGeneralesStore.tiposTerrenos" :key="i" class="no-padding q-my-md">
            <q-item-section>
              <div class="row shadow-1 q-pa-md">
                <div class="col-12 row items-center">
                  <q-item-label class="text-weight-medium text-subtitle2 text-start col-12">
                    Terreno N° {{ i + 1 }}</q-item-label>

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
                <div class="col-6 q-my-xs">
                  <q-item-label caption>Area m2</q-item-label>
                  <q-item-label>{{ terreno.areaTerreno }}</q-item-label>
                </div>
                <div class="row col-12">
                  <div class="col-12 q-mt-md">
                    <q-item-label class="text-primary">Complete el siguiente campo:</q-item-label>
                  </div>
                  <div class="col-6 q-px-xs">
                    <q-input v-model="terreno.nivelInclinacion" type="number" step="0.01" label="Nivel de inclinación"
                      :rules="[
                        (val) =>
                          (val !== null && val !== '') || 'Campo Obligatorio ',
                      ]" @update:model-value="totalPerimetro" />
                  </div>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <!-- pregunta 2.4.4 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg244.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg244.respuesta" label="Indique el tipo de terreno
          " :options="opcPreg244" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
        :display-value="dimensionEcologicaStore.dimensionEcologica24.preg244.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg244.respuesta
            .label
          : ''
          " class="col-12" />

      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg244.subPreg244.nombre
        }}
      </q-item-label>
      <div class="row col-12" v-for="(pregunta, i) in dimensionEcologicaStore.dimensionEcologica24
        .preg244.subPreg244.items" :key="i">
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg244.subPreg244
          .items[i].respuesta
          " :label="pregunta.nombre" :options="opcSubPreg244"
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg244.subPreg244
            .items[i].respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg244.subPreg244
              .items[i].respuesta.label
            : ''
            " class="col-12" />
        <!--   :disable="
            dimensionEcologicaStore.dimensionEcologica24.preg244.respuesta
              .label === 'Ninguna'
          " -->
      </div>
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg245.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg245.respuesta"
        label="Seleccionar su respuesta" :options="preg245" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg245.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg245.respuesta
            .label
          : ''
          " class="col-12" />

      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg245.subPreg245.nombre
        }}
      </q-item-label>
      <div class="row col-12" v-for="(pregunta, i) in dimensionEcologicaStore.dimensionEcologica24
        .preg245.subPreg245.items" :key="i">
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg245.subPreg245
          .items[i].respuesta
          " :label="pregunta.nombre" :options="opcSubPreg245"
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg245.subPreg245
            .items[i].respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg245.subPreg245
              .items[i].respuesta.label
            : ''
            " :disable="dimensionEcologicaStore.dimensionEcologica24.preg245.respuesta
              .label == 'Ninguno'
              " class="col-12" />
      </div>

      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg246.nombre }}
      </q-item-label>
      <div class="row col-12" v-for="(pregunta, i) in dimensionEcologicaStore.dimensionEcologica24
        .preg246.items" :key="i">
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg246.items[i]
          .respuesta
          " :label="pregunta.nombre" :options="preg246" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg246.items[i]
            .respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg246.items[i]
              .respuesta.label
            : ''
            " class="col-12" />
      </div>

      <q-input v-model="cuales.label" label="¿Cuales?" lazy-rules :rules="[
        (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
        (val) =>
          /^[A-Za-z_ ]+$/.test(val) ||
          'Caracteres incorrectos (números o signos)',
      ]" class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.preg246.items[
        dimensionEcologicaStore.dimensionEcologica24.preg246.items.length -
        1
      ].respuesta.label == 'No'
        " />

      <!-- Pregunta 247 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg247.nombre }}
      </q-item-label>
      <q-input type="number" v-model="dimensionEcologicaStore.dimensionEcologica24.preg247.respuesta"
        label="Ingrese la cantidad en porcentaje" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          (val) => (val > 0 && val < 100) || 'Solo números',
        ]" class="col-12">
        <template v-slot:after>
          <span class="text-dark">%</span>
        </template>
      </q-input>

      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2471
            .nombre
        }}
      </q-item-label>
      <q-input v-model="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2471
        .cantidad
        " label="Ingrese unidad" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          (val) => (val > 0 && val < 1000) || 'Solo números',
        ]" class="col-12" />
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2471
        .medidaDePeso
        " label="Medida de Peso" :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        :options="opcMedidaDePeso" class="col-12" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2471
          .medidaDePeso.label ?? ''
          " />
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2471
        .tiempo
        " label="Tiempo" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']" :options="opcTiempo"
        class="col-12" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2471
          .tiempo.label ?? ''
          " />
      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2472
            .nombre
        }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2472
        .cuantoAboCompra
        " label="Cuanto abono compra" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        :options="opcCuantoAboCompra" class="col-12" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2472
          .cuantoAboCompra.label ?? ''
          " />
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2472
        .medidaDePeso
        " label="Cantidad" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        :options="opcMedidaDePeso2" class="col-12" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg247.subPreg2472
          .medidaDePeso.label ?? ''
          " />

      <!--  Pregunta 248 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg248.nombre }}
      </q-item-label>

      <q-form @submit.prevent="agregarBiofertilizante(elabYApli)" class="col-12 row shadow-1 q-my-md"
        id="FormularioBiofertilizantes"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formBiofertilizante">
        <q-select label="Seleccione un biofertilizante" v-model="elabYApli.cual" lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']" :options="opcCual" class="col-6 q-pa-md" />

        <q-input label="Cantidad" v-model="elabYApli.cantidad" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          (val) => /^[+]?\d+(\.\d+)?$/.test(val) || 'Solo números positivos',
        ]" class="col-6 q-pa-md" />

        <q-select label="Frecuencia" v-model="elabYApli.frecuencia" :options="opcFrecuencia" lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />

        <!--botón agregar personas incentivadas pregunta 2.4.8-->
        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" :disable="dimensionEcologicaStore.dimensionEcologica24.preg248.cual
            .length >= 3
            " />
        </div>
        <!--listado de Elabora y Aplica Biofertilizantes Agregados-->
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Elabora y Aplica Biofertilizantes Agregados</span>
          <q-list>
            <q-item v-for="(biofertilizantes, i) in dimensionEcologicaStore
              .dimensionEcologica24.preg248.cual" :key="i" class="no-pading q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">Biofertilizantes N°{{ i + 1
                      }}</q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarBiofertilizante(biofertilizantes, i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Cual</q-item-label>
                    <q-item-label>{{
                      biofertilizantes.cual.label
                      }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Cantidad</q-item-label>
                    <q-item-label>{{ biofertilizantes.cantidad }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Frecuencia</q-item-label>
                    <q-item-label>{{
                      biofertilizantes.frecuencia
                      }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>
      <!--  Pregunta 249 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg249.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg249.respuesta"
        label="Seleccionar su respuesta" :options="opcPreg249" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg249.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg249.respuesta
            .label
          : ''
          " class="col-12" @update:model-value="actualizaPreg249" />
      <q-input v-model="opcComo.label" :label="dimensionEcologicaStore.dimensionEcologica24.preg249.subPreg249.nombre
        " lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          (val) =>
            /^[A-Za-z_ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]" class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.preg249.respuesta
          .label == 'Si'
          ? false
          : true
          " />

      <!--PREGUNTA 2.4.10-->
      <div class="text-subtitle1 text-weight-medium">Subsistema cultivo</div>
      <q-item-label class="q-my-md col-12">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2410.nombre }}
      </q-item-label>
      <div class="text-subtitle2 text-weight-medium">Hortalizas</div>
      <q-form @submit.prevent="agregarHortaliza(sistemCultivHort)" class="col-12 row shadow-1 q-my-md"
        id="FormPreg2410Hortalizas"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioHortaliza">
        <!--HORTALIZAS-->

        <q-select v-model="sistemCultivHort.producto" label="Seleccione una planta" :options="opcPreg2410hortProd"
          lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivHort.area" label="Superficie sembrada" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Coloque el área']" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivHort.medida" label="Seleccione la medida" :options="opcPreg2410hortMedida"
          lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivHort.cantidad" label="Cantidad" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque la medida',
        ]" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivHort.semillaOPlantula" label="Semilla o Plántula"
          :options="opcPreg2410hortPlatul" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivHort.tiempoSiembra" label="¿Cada que tiempo siembra?"
          :options="opcPreg2410hortTiempSiem" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivHort.tiempoCosecha" label="¿Cada que tiempo cosecha?"
          :options="opcPreg2410hortTiempCos" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium q-px-md">Hortalizas Agregadas</span>
          <q-list v-if="
            dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizas
              .length > 0
          ">
            <q-scroll-area style="height: 300px">
              <q-item v-for="(hortalizas, i) in dimensionEcologicaStore
                .dimensionEcologica24.preg2410.hortalizas" :key="i" class="q-mb-md"
                :class="i % 2 == 0 ? 'bg-grey-3' : ''">
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                        Hortaliza N° {{ i + 1 }}</q-item-label>
                      <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                        @click="eliminarHortaliza(hortalizas, i)" />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Producto</q-item-label>
                      <q-item-label>{{
                        hortalizas.producto.label
                        }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Área</q-item-label>
                      <q-item-label>{{ hortalizas.area }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Medida</q-item-label>
                      <q-item-label>{{ hortalizas.medida }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Cantidad</q-item-label>
                      <q-item-label>{{ hortalizas.cantidad }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla o Plántula</q-item-label>
                      <q-item-label>{{
                        hortalizas.semillaOPlantula
                        }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de siembra</q-item-label>
                      <q-item-label>{{
                        hortalizas.tiempoSiembra
                        }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de Cosecha</q-item-label>
                      <q-item-label>{{
                        hortalizas.tiempoCosecha
                        }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
          <div>
            Total de hortalizas:
            {{
              dimensionEcologicaStore.dimensionEcologica24.preg2410
                .hortalizasTotal
            }}
          </div>
        </div>
      </q-form>
      <!--FRUTAS-->
      <div class="text-subtitle2 ittext-weight-medium">Frutas</div>
      <q-form @submit.prevent="agregarFruta(sistemCultivFrut)" class="col-12 row shadow-1 q-my-md"
        id="FormPreg2410Frutas"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioFrutas">
        <q-select v-model="sistemCultivFrut.producto" label="Seleccione una planta" :options="opcPreg2410FrutProd"
          lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivFrut.area" label="Superficie sembrada" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Coloque el área']" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivFrut.medida" label="Seleccione la medida" :options="opcPreg2410hortMedida"
          lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivFrut.cantidad" label="Cantidad semilla o plántulas" lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Coloque la medida',
          ]" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivFrut.semillaOPlantula" label="Semilla o Plántula"
          :options="opcPreg2410hortPlatul" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivFrut.tiempoSiembra" label="¿Cada que tiempo siembra?"
          :options="opcPreg2410FrutTiempSiem" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivFrut.tiempoCosecha" label="¿Cada que tiempo cosecha?"
          :options="opcPreg2410hortTiempCos" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Frutas Agregadas</span>
          <q-list v-if="
            dimensionEcologicaStore.dimensionEcologica24.preg2410.frutas
              .length > 0
          ">
            <q-scroll-area style="height: 300px">
              <q-item v-for="(frutas, i) in dimensionEcologicaStore
                .dimensionEcologica24.preg2410.frutas" :key="i" class="q-mb-md" :class="i % 2 == 0 ? 'bg-grey-3' : ''">
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                        Fruta N° {{ i + 1 }}</q-item-label>
                      <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                        @click="eliminarFruta(frutas, i)" />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Producto</q-item-label>
                      <q-item-label>{{ frutas.producto.label }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Área</q-item-label>
                      <q-item-label>{{ frutas.area }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Medida</q-item-label>
                      <q-item-label>{{ frutas.medida }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Cantidad</q-item-label>
                      <q-item-label>{{ frutas.cantidad }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla o Plántula</q-item-label>
                      <q-item-label>{{ frutas.semillaOPlantula }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de siembra</q-item-label>
                      <q-item-label>{{ frutas.tiempoSiembra }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de Cosecha</q-item-label>
                      <q-item-label>{{ frutas.tiempoCosecha }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
          <div>
            Total de Frutas:
            {{
              dimensionEcologicaStore.dimensionEcologica24.preg2410.frutasTotal
            }}
          </div>
        </div>
      </q-form>

      <!--PASTOS-->
      <div class="text-subtitle2 text-weight-medium">Pastos</div>
      <q-form @submit.prevent="agregarPasto(sistemCultivPastos)" class="col-12 row shadow-1 q-my-md"
        id="FormPreg2410Pastos"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioPastos">
        <q-select v-model="sistemCultivPastos.producto" label="Seleccione una planta" :options="opcPreg2410PastPro"
          lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivPastos.area" label="Superficie sembrada" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Coloque el área']" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPastos.medida" label="Seleccione la medida" :options="opcPreg2410hortMedida"
          lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivPastos.cantidad" label="Cantidad semilla o plántulas" lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Coloque la medida',
          ]" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPastos.semillaOPlantula" label="Semilla o Plántula"
          :options="opcPreg2410PastotPlatul" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPastos.tiempoSiembra" label="¿Cada que tiempo siembra?"
          :options="opcPreg2410PastTiempSiem" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPastos.tiempoCosecha" label="¿Cada que tiempo cosecha?"
          :options="opcPreg2410PastTiempCos" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Pastos Agregados</span>
          <q-list v-if="
            dimensionEcologicaStore.dimensionEcologica24.preg2410.pastos
              .length > 0
          ">
            <q-scroll-area style="height: 300px">
              <q-item v-for="(pastos, i) in dimensionEcologicaStore
                .dimensionEcologica24.preg2410.pastos" :key="i" class="q-mb-md" :class="i % 2 == 0 ? 'bg-grey-3' : ''">
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                        Pasto N° {{ i + 1 }}</q-item-label>
                      <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                        @click="eliminarPasto(pastos, i)" />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Producto</q-item-label>
                      <q-item-label>{{ pastos.producto.label }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Área</q-item-label>
                      <q-item-label>{{ pastos.area }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Medida</q-item-label>
                      <q-item-label>{{ pastos.medida }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Cantidad</q-item-label>
                      <q-item-label>{{ pastos.cantidad }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla o Plántula</q-item-label>
                      <q-item-label>{{ pastos.semillaOPlantula }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de siembra</q-item-label>
                      <q-item-label>{{ pastos.tiempoSiembra }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de Cosecha</q-item-label>
                      <q-item-label>{{ pastos.tiempoCosecha }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
          <div>
            Total de Pastos:
            {{
              dimensionEcologicaStore.dimensionEcologica24.preg2410.pastosTotal
            }}
          </div>
        </div>
      </q-form>
      <!--Cereales y seudocereales-->
      <div class="text-subtitle2 text-weight-medium">
        Cereales y seudocereales
      </div>
      <q-form @submit.prevent="agregarCereales(sistemCultivCereales)" class="col-12 row shadow-1 q-my-md"
        id="FormPreg2410Cereales"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioCereales">
        <q-select v-model="sistemCultivCereales.producto" label="Seleccione una planta" :options="opcPreg2410CerealProd"
          lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivCereales.area" label="Superficie sembrada" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Coloque el área']" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivCereales.medida" label="Seleccione la medida" :options="opcPreg2410hortMedida"
          lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivCereales.cantidad" label="Cantidad semilla o plántulas" lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Coloque la medida',
          ]" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivCereales.semillaOPlantula" label="Semilla o Plántula"
          :options="opcPreg2410hortPlatul" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivCereales.tiempoSiembra" label="¿Cada que tiempo siembra?"
          :options="opcPreg2410CerealTiempSiem" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivCereales.tiempoCosecha" label="¿Cada que tiempo cosecha?"
          :options="opcPreg2410CerealTiempCos" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Cereales Agregados</span>
          <q-list v-if="
            dimensionEcologicaStore.dimensionEcologica24.preg2410
              .cerealesYSeudocere.length > 0
          ">
            <q-scroll-area style="height: 300px">
              <q-item v-for="(cereal, i) in dimensionEcologicaStore
                .dimensionEcologica24.preg2410.cerealesYSeudocere" :key="i" class="q-mb-md"
                :class="i % 2 == 0 ? 'bg-grey-3' : ''">
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                        Cereal N° {{ i + 1 }}</q-item-label>
                      <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                        @click="eliminarCereal(cereal, i)" />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Producto</q-item-label>
                      <q-item-label>{{ cereal.producto.label }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Área</q-item-label>
                      <q-item-label>{{ cereal.area }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Medida</q-item-label>
                      <q-item-label>{{ cereal.medida }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Cantidad</q-item-label>
                      <q-item-label>{{ cereal.cantidad }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla o Plántula</q-item-label>
                      <q-item-label>{{ cereal.semillaOPlantula }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de siembra</q-item-label>
                      <q-item-label>{{ cereal.tiempoSiembra }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de Cosecha</q-item-label>
                      <q-item-label>{{ cereal.tiempoCosecha }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
          <div>
            Total de Cereales o seudocereales:
            {{
              dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealeTotal
            }}
          </div>
        </div>
      </q-form>
      <!--PLANTAS MEDICINALES-->
      <div class="text-subtitle2 text-weight-medium">Plantas Medicinales</div>
      <q-form @submit.prevent="agregarPlantasMedicinales(sistemCultivPlantasMedicin)"
        class="col-12 row shadow-1 q-my-md" id="FormPreg2410PlantasM"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioPlantasMedic">
        <q-select v-model="sistemCultivPlantasMedicin.producto" label="Seleccione una planta"
          :options="opcPreg2410PlantasMProd" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivPlantasMedicin.area" label="Superficie sembrada" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Coloque el área']" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPlantasMedicin.medida" label="Seleccione la medida"
          :options="opcPreg2410hortMedida" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivPlantasMedicin.cantidad" label="Cantidad semilla o plántulas"
          lazy-rules :rules="[
            (val) => (val !== null && val !== '') || 'Coloque la medida',
          ]" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPlantasMedicin.semillaOPlantula" label="Semilla o Plántula"
          :options="opcPreg2410hortPlatul" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPlantasMedicin.tiempoSiembra" label="¿Cada que tiempo siembra?"
          :options="opcPreg2410PlantMedTiempSiem" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivPlantasMedicin.tiempoCosecha" label="¿Cada que tiempo cosecha?"
          :options="opcPreg2410PlantMedTiempCos" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="col-12 q-pa-md">
          <span class="text-subtitle2 text-weight-medium">Plantas Medicinales Agregadas</span>
          <q-list v-if="
            dimensionEcologicaStore.dimensionEcologica24.preg2410
              .plantasMedicin.length > 0
          ">
            <q-scroll-area style="height: 300px">
              <q-item v-for="(medicinal, i) in dimensionEcologicaStore
                .dimensionEcologica24.preg2410.plantasMedicin" :key="i" class="q-my-md"
                :class="i % 2 == 0 ? 'bg-grey-3' : ''">
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                        Planta Medicinal N° {{ i + 1 }}</q-item-label>
                      <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                        @click="eliminaPlantasMedicinales(medicinal, i)" />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Producto</q-item-label>
                      <q-item-label>{{
                        medicinal.producto.label
                        }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Área</q-item-label>
                      <q-item-label>{{ medicinal.area }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Medida</q-item-label>
                      <q-item-label>{{ medicinal.medida }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Cantidad</q-item-label>
                      <q-item-label>{{ medicinal.cantidad }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla o Plántula</q-item-label>
                      <q-item-label>{{
                        medicinal.semillaOPlantula
                        }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de siembra</q-item-label>
                      <q-item-label>{{ medicinal.tiempoSiembra }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de Cosecha</q-item-label>
                      <q-item-label>{{ medicinal.tiempoCosecha }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
          <div>
            Total de Plantas Medicinales:
            {{
              dimensionEcologicaStore.dimensionEcologica24.preg2410.planMedTotal
            }}
          </div>
        </div>
      </q-form>
      <!--OTROS OPCIONAL-->
      <div class="text-subtitle2 text-weight-medium">Otros (opcional)</div>

      <q-form @submit.prevent="agregarProdOpcional(sistemCultivOpcional)" class="col-12 row shadow-1 q-my-md"
        id="FormPreg2410OtrosOpcional" ref="FormPreg2410OtrosOpcional">
        <q-input v-model="sistemCultivOpcional.producto" label="Producto" lazy-rules :rules="[
          (val) =>
            /^[A-Za-z_ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivOpcional.area" label="Superficie sembrada" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Coloque el área']" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivOpcional.medida" label="Seleccione la medida" :options="opcPreg2410hortMedida"
          lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-6 q-pa-md" />
        <q-input type="number" v-model="sistemCultivOpcional.cantidad" label="Cantidad semilla o plántulas" lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Coloque la medida',
          ]" class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivOpcional.semillaOPlantula" label="Semilla o Plántula"
          :options="opcPreg2410hortPlatul" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivOpcional.tiempoSiembra" label="¿Cada que tiempo siembra?"
          :options="opcPreg2410hortTiempSiem" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <q-select v-model="sistemCultivOpcional.tiempoCosecha" label="¿Cada que tiempo cosecha?"
          :options="opcPreg2410hortTiempCos" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-6 q-pa-md" />
        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Productos opcionales Agregados</span>
          <q-list v-if="
            dimensionEcologicaStore.dimensionEcologica24.preg2410
              .otrosOpcional.length > 0
          ">
            <q-scroll-area style="height: 300px">
              <q-item v-for="(opcional, i) in dimensionEcologicaStore
                .dimensionEcologica24.preg2410.otrosOpcional" :key="i" class="q-my-md"
                :class="i % 2 == 0 ? 'bg-grey-3' : ''">
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                        Producto opcional N° {{ i + 1 }}</q-item-label>
                      <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                        @click="eliminarProdOpcional(i)" />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Producto</q-item-label>
                      <q-item-label>{{ opcional.producto }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Área</q-item-label>
                      <q-item-label>{{ opcional.area }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Medida</q-item-label>
                      <q-item-label>{{ opcional.medida }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Cantidad</q-item-label>
                      <q-item-label>{{ opcional.cantidad }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla o Plántula</q-item-label>
                      <q-item-label>{{
                        opcional.semillaOPlantula
                        }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de siembra</q-item-label>
                      <q-item-label>{{ opcional.tiempoSiembra }}</q-item-label>
                    </div>
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Tiempo de Cosecha</q-item-label>
                      <q-item-label>{{ opcional.tiempoCosecha }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
          <div>
            Total de productos opcionales:
            {{
              dimensionEcologicaStore.dimensionEcologica24.preg2410
                .opcionalesTotal
            }}
          </div>
        </div>
      </q-form>
      <div v-if="
        Number(
          dimensionEcologicaStore.dimensionEcologica24.preg2410
            .areaProductosSembrados
        ) > Number(datosGeneralesStore.totalMetrosCuadrados)
      " class="col-12 text-negative">
        El total de la superficie de productos sembrados ({{
          Number(
            dimensionEcologicaStore.dimensionEcologica24.preg2410
              .areaProductosSembrados
          )
        }}m2) es mayor al área total ({{
          Number(datosGeneralesStore.totalMetrosCuadrados)
        }}m2) de los terrenos ingresados
      </div>
      <q-item-label class="q-my-md col-12">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2411.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2411.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2411" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2411.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2411.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md col-12">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2412.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2412.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2412" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2412.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2412.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md col-12">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2413.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2413.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2413" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2413.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2413.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label>
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2414.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2414.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2414" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2414.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2414.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label>
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2415.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2415.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2415" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2415.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2415.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2416.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2416.respuesta
        " label="Seleccione su respuesta" :options="preg2416" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2416.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2416.respuesta
            .label
          : ''
          " class="col-12" @update:model-value="actualizaPreg2416" />
      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg2416.subPreg2416
            .nombre
        }}
      </q-item-label>
      <q-input v-model="opcSubpPreg2416.label" label="Nombre del producto" lazy-rules :rules="[
        (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
        (val) => /^[A-Za-z_ ]+$/.test(val) || 'Solo letras',
      ]" class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.preg2416.respuesta
        .label == 'Si'
        ? false
        : true
        " />
      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg2416.subSubPreg2416
            .nombre
        }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2416.subSubPreg2416
        .respuesta
        " label="Seleccione su respuesta" :options="subSubPreg2416" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2416.subSubPreg2416
          .respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2416
            .subSubPreg2416.respuesta.label
          : ''
          " class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.preg2416.respuesta
            .label == 'Si'
            ? false
            : true
            " />

      <div class="text-subtitle1 text-weight-medium col-12">
        Cosecha y Postcosecha
      </div>
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2417.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2417.respuesta
        " label="Seleccionar su respuesta" :options="opcPreg2417" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2417.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2417.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2418.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2418.respuesta
        " label="Seleccionar su respuesta" :options="opcPreg2418" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2418.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2418.respuesta
            .label
          : ''
          " class="col-12" @update:model-value="actualizarPreg2418" />
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2418.subPreg2418
        .respuesta
        " :label="dimensionEcologicaStore.dimensionEcologica24.preg2418.subPreg2418
          .nombre
          " :options="opcSubPreg2418" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2418.subPreg2418
          .respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2418.subPreg2418
            .respuesta.label
          : ''
          " class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.preg2418.respuesta
            .label == 'Si'
            ? false
            : true
            " />
      <div class="text-subtitle1 text-weight-medium col-12">
        Prácticas de postcosecha
      </div>
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2419.nombre }}
      </q-item-label>
      <div class="row col-12" v-for="(pregunta, i) in dimensionEcologicaStore.dimensionEcologica24
        .preg2419.items" :key="i">
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2419.items[i]
          .respuesta
          " :label="pregunta.nombre" :options="preg2419" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2419.items[i]
            .respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2419.items[i]
              .respuesta.label
            : ''
            " class="col-12" />
      </div>
      <div class="text-subtitle1 text-weight-medium col-12">
        Empaque y presentación del producto
      </div>
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2420.nombre }}
      </q-item-label>
      <div class="row col-12" v-for="(pregunta, i) in dimensionEcologicaStore.dimensionEcologica24
        .preg2420.items" :key="i">
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2420.items[i]
          .respuesta
          " :label="pregunta.nombre" :options="opcPreg2420" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2420.items[i]
            .respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2420.items[i]
              .respuesta.label
            : ''
            " class="col-12" />
      </div>
      <q-item-label>
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2421.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2421.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2421" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2421.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2421.respuesta
            .label
          : ''
          " class="col-12" />
      <div class="text-subtitle1 text-weight-medium">
        Bodega y almacenamiento de productos
      </div>
      <q-item-label>
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2422.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2422.respuesta
        " label="Seleccione su respuesta" :options="opcPreg2422" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2422.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2422.respuesta
            .label
          : ''
          " class="col-12" />

      <!--pregunta 2423-->
      <div class="text-subtitle1 text-weight-medium">
        Subsistema Crianza de animales
      </div>
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2423.nombre }}
      </q-item-label>
      <q-form @submit.prevent="agregarEspecie(numEspecies)" class="col-12 row shadow-1 q-my-md"
        id="FormSubsistemaCrianza"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioEspecieCrianza">
        <q-select v-model="numEspecies.especie" label="Seleccione una especie" :options="opcPreg2423Esp" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" class="col-12 q-pa-md" />
        <q-input type="number" v-model="numEspecies.pequenios" label="Pequeños" :rules="[
          (val) => (val !== null && val !== '') || 'Campo Obligatorio ',
          (val) => /^[+]?\d+$/i.test(val) || 'Ingresa un número positivo',
          (val) => val >= 0 || 'Ingresa un número mayor o igual a cero',
        ]" class="col-6 q-pa-md" @update:model-value="calculoCantidadPorcentajeEspecie" />
        <q-input type="number" v-model="numEspecies.adultos" label="Adultos" :rules="[
          (val) => (val !== null && val !== '') || 'Campo Obligatorio ',
        ]" class="col-6 q-pa-md" @update:model-value="calculoCantidadPorcentajeEspecie" />

        <div class="row col-12 justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="col-12 q-pa-md">
          <span class="text-subtitle2 text-weight-medium">Especies de animales Agregadas</span>
          <q-list>
            <q-item v-for="(especie, i) in dimensionEcologicaStore
              .dimensionEcologica24.preg2423.especieA" :key="i" class="no-padding q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                      Especie N° {{ i + 1 }}</q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarEspecie(especie, i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Especie</q-item-label>
                    <q-item-label>{{ especie.especie.label }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Pequeños</q-item-label>
                    <q-item-label>{{ especie.pequenios }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Adultos</q-item-label>
                    <q-item-label>{{ especie.adultos }}</q-item-label>
                  </div>

                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Cantidad total de la especie</q-item-label>
                    <q-item-label><span>
                        {{ especie.cantidadEsp }}
                      </span></q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Porcentaje </q-item-label>
                    <span> {{ especie.porcentajeEsp }}% / 100% </span>
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <div>
              Total de especies:
              {{
                dimensionEcologicaStore.dimensionEcologica24.preg2423
                  .cantidadTotal
              }}
            </div>
          </q-list>
        </div>
      </q-form>
      <q-item-label>
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2424.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2424.rGranos" label="Granos"
        :options="opcPregGranos2424" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
        :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2424.rGranos.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2424.rGranos
            .label
          : ''
          " class="col-12" />

      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2424.rPastos" label="Pastos"
        :options="opcPregPasto2424" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
        :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2424.rPastos.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2424.rPastos
            .label
          : ''
          " class="col-12" />

      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2424.rRestos" label="Restos de cosecha "
        :options="opcPregRestosDeCosecha2424" lazy-rules :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2424.rRestos.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2424.rRestos
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2425.nombre }}
      </q-item-label>
      <div class="row col-12" v-for="(pregunta, i) in dimensionEcologicaStore.dimensionEcologica24
        .preg2425.items" :key="i">
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2425.items[i]
          .respuesta
          " :label="pregunta.nombre" :options="opcPreg2425" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2425.items[i]
            .respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2425.items[i]
              .respuesta.label
            : ''
            " class="col-12" />
      </div>
      <q-input v-model="dimensionEcologicaStore.dimensionEcologica24.preg2425.subPreg2425
        .respuesta
        " :label="dimensionEcologicaStore.dimensionEcologica24.preg2425.subPreg2425
          .nombre
          " lazy-rules class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2426.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2426.respuesta
        " label="Seleccione su respuesta" :options="preg2426" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2426.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2426.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2427.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2427.respuesta
        " label="Seleccione su respuesta" :options="preg2427" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2427.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2427.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2428.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2428.respuesta
        " label="Seleccione su respuesta" :options="preg2428" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2428.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2428.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2429.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2429.respuesta
        " label="Seleccione su respuesta" :options="preg2429" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2429.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2429.respuesta
            .label
          : ''
          " class="col-12" />
      <div class="col-12 row" v-if="
        datosGeneralesStore.tiposTerrenos.filter(
          (e) => e.terrenosRiego == 'No'
        ).length
      ">
        <div class="col-12 text-subtitle1 text-weight-medium">
          {{
            dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
              .nombre
          }}
        </div>
        <div class="text-subtitle1 text-weight-medium col-12">
          Componente Ambiental
        </div>
        <q-item-label class="q-my-md">
          {{
            dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
              .encaPreg2430.nombre
          }}
        </q-item-label>
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
          .encaPreg2430.respuesta
          " label="Seleccionar su respuesta" :options="opcEncaPreg2430" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
            .encaPreg2430.respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
              .encaPreg2430.respuesta.label
            : ''
            " class="col-12" @update:model-value="actualizaEncaPreg2430" />
        <q-input v-model="opcSubPregEnca2430.label" :label="dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
          .subPregEnca2430.nombre
          " lazy-rules :rules="[
            (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
            (val) =>
              /^[A-Za-z_ ]+$/.test(val) ||
              'Caracteres incorrectos (números o signos)',
          ]" class="col-12" :disable="dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430
            .encaPreg2430.respuesta.label == 'Si'
            ? false
            : true
            " />
        <!-- pregunta 2.4.30 -->
        <q-item-label class="q-my-md">
          {{ dimensionEcologicaStore.dimensionEcologica24.preg2430.nombre }}
        </q-item-label>
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2430.respuesta
          " label="Seleccione su respuesta" :options="opcPreg2430" lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2430.respuesta
            .label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2430.respuesta
              .label
            : ''
            " class="col-12" />
        <!-- pregunta 2.4.31-->
        <q-item-label class="q-my-md">
          {{ dimensionEcologicaStore.dimensionEcologica24.preg2431.nombre }}
        </q-item-label>
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2431.items[0]
          .respuesta
          " :label="dimensionEcologicaStore.dimensionEcologica24.preg2431.items[0]
            .nombre
            " :options="opcOrganica" :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
          :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2431.items[0]
            .respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2431.items[0]
              .respuesta.label
            : ''
            " class="col-12" />
        <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2431.items[1]
          .respuesta
          " :label="dimensionEcologicaStore.dimensionEcologica24.preg2431.items[1]
            .nombre
            " :options="opcInorganica" :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options
          :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2431.items[1]
            .respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2431.items[1]
              .respuesta.label
            : ''
            " class="col-12" />
      </div>
      <div class="text-subtitle1 text-weight-medium">
        Componente de riego parcelario (PARCELA CON RIEGO)
      </div>
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2432.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2432.respuesta
        " label="Seleccione su respuesta" :options="preg2432" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2432.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2432.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{
          dimensionEcologicaStore.dimensionEcologica24.preg2432.subPreg2432
            .nombre
        }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2432.subPreg2432
        .respuesta
        " label="Seleccione su respuesta" :options="subPreg2432" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2432.subPreg2432
          .respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2432.subPreg2432
            .respuesta.label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2433.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2433.respuesta
        " label="Seleccione su respuesta" :options="preg2433" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2433.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2433.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2434.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2434.respuesta
        " label="Seleccione su respuesta" :options="preg2434" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2434.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2434.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2435.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2435.respuesta
        " label="Seleccione su respuesta" :options="preg2435" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2435.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2435.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2436.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2436.respuesta
        " label="Seleccione su respuesta" :options="preg2436" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2436.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2436.respuesta
            .label
          : ''
          " class="col-12" />

      <!-- pregunta 2.4.37 -->
      <div class="col-8">
        <div class="text-subtitle1 text-weight-medium">
          Componente de riego parcelario (SIN RIEGO)
        </div>
      </div>

      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2437.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2437.respuesta
        " label="Seleccionar su respuesta" :options="opcPreg2437" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2437.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2437.respuesta
            .label
          : ''
          " class="col-12" />
      <!-- pregunta 2.4.38 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2438.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2438.respuesta
        " label="Seleccionar su respuesta" :options="opcPreg2438" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2438.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2438.respuesta
            .label
          : ''
          " class="col-12" />
      <!-- pregunta 2.4.39 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2439.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2439.respuesta
        " label="Seleccionar su respuesta" :options="opcPreg2439" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2439.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2439.respuesta
            .label
          : ''
          " class="col-12" />
      <!-- pregunta 2.4.40 -->
      <!-- <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2440.nombre }}
      </q-item-label>
      <q-select
        v-model="
          dimensionEcologicaStore.dimensionEcologica24.preg2440.respuesta
        "
        label="Seleccionar su respuesta"
        :options="opcPreg2440"
        lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        map-options
        :display-value="
          dimensionEcologicaStore.dimensionEcologica24.preg2440.respuesta.label
            ? dimensionEcologicaStore.dimensionEcologica24.preg2440.respuesta
                .label
            : ''
        "
        class="col-12"
      /> -->
      <!-- pregunta 2.4.41 -->
      <q-item-label class="q-my-md">
        {{ dimensionEcologicaStore.dimensionEcologica24.preg2441.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEcologicaStore.dimensionEcologica24.preg2441.respuesta
        " label="Seleccionar su respuesta" :options="opcPreg2441" lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']" map-options :display-value="dimensionEcologicaStore.dimensionEcologica24.preg2441.respuesta.label
          ? dimensionEcologicaStore.dimensionEcologica24.preg2441.respuesta
            .label
          : ''
          " class="col-12" />

      <q-btn type="submit" label="Continuar" color="primary" class="col-12" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useDimensionEcologica } from 'src/stores/dimension-ecologica';
import { useDatosGenerales } from 'src/stores/datos-generales';
import { useFormulariosControl } from 'src/stores/formularios-control';
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
import {
  IModeloDeObjetoOpciones,
  IPreg2410Producto,
  IPreg2410Opcional,
  IPreg2423,
  ICual,
} from 'src/models/spgct.models';

const $q = useQuasar();
const emit = defineEmits(['submit']);

const dimensionEcologicaStore = useDimensionEcologica();
const datosGeneralesStore = useDatosGenerales();
const formulariosControl = useFormulariosControl();

watch(dimensionEcologicaStore, () => {
  return;
});
const opcPreg241 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 2,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];
const opcPreg243 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];
const opcSubPreg243 = [
  {
    label: 'Abono',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Alimento para animales',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Ninguna',
    value: '2',
    puntaje: 0,
  },
];
const opcPreg244 = [
  {
    label: 'Terreno plano',
    value: '0',
    puntaje: 0.3,
  },
  {
    label: 'Terreno con pendiente',
    value: '1',
    puntaje: 0.2,
  },
];
const opcSubPreg244 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.18,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];
const preg245 = [
  {
    label: 'Pala, azada, azadón o yunta',
    value: '0',
    puntaje: 1,
  },
  {
    label: ' Motocultor',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Tractor con arado de disco y rastra…',
    value: '2',
    puntaje: 1,
  },
  {
    label: 'Ninguno',
    value: '3',
    puntaje: 0,
  },
];

const opcSubPreg245 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const preg246 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.25,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];
/* subpregunta246 */
const cuales = ref<IModeloDeObjetoOpciones>({
  label: '',
  value: '',
  puntaje: 0.22,
});

/* pregunta 247 */
const opcCantidad = ref<IModeloDeObjetoOpciones>({
  label: '',
  value: '',
  puntaje: 1,
});

const opcMedidaDePeso = [
  {
    label: 'Libras',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'Arroba',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: 'Camiones',
    value: '2',
    puntaje: 0.5,
  },
  {
    label: 'Quintales',
    value: '3',
    puntaje: 0.5,
  },
  {
    label: 'Sacos',
    value: '4',
    puntaje: 0.5,
  },
  {
    label: 'Ninguno',
    value: '5',
    puntaje: 0,
  },
];

const opcTiempo = [
  {
    label: 'Por mes',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'Por Año',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: 'Ninguno',
    value: '2',
    puntaje: 0,
  },
];

const opcCuantoAboCompra = [
  {
    label: '1 a 100',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: '100 a 500',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: '500 a 1000',
    value: '2',
    puntaje: 0.5,
  },
  {
    label: 'Ninguno',
    value: '3',
    puntaje: 0,
  },
];

const opcMedidaDePeso2 = [
  {
    label: 'Libras',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'Arroba',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: 'Camiones',
    value: '2',
    puntaje: 0.5,
  },
  {
    label: 'Quintales',
    value: '3',
    puntaje: 0.5,
  },
  {
    label: 'Sacos',
    value: '4',
    puntaje: 0.5,
  },
  {
    label: 'Ninguno',
    value: '5',
    puntaje: 0,
  },
];

/* preg248 */
const formBiofertilizante = ref();
const elabYApli = ref<ICual>({
  cual: { label: '', value: '', puntaje: 0.67, disable: false },
  cantidad: '',
  frecuencia: '',
});
const opcCual = ref([
  {
    label: 'Biol',
    value: '0',
    puntaje: 0.67,
    disable: false,
  },
  {
    label: 'Té de frutas',
    value: '1',
    puntaje: 0.67,
    disable: false,
  },
  {
    label: 'Té de hierbas medicinales',
    value: '2',
    puntaje: 0.67,
    disable: false,
  },
  {
    label: 'Caldo bordeles',
    value: '3',
    puntaje: 0.67,
    disable: false,
  },
  {
    label: 'Caldo de ceniza',
    value: '4',
    puntaje: 0.67,
    disable: false,
  },
  {
    label: 'Caldo sulfocalcico',
    value: '5',
    puntaje: 0.67,
    disable: false,
  },
  {
    label: 'Microorganismos liquidos',
    value: '6',
    puntaje: 0.67,
    disable: false,
  },
]);

const opcFrecuencia = [
  'c/15 días',
  'c/20 días',
  'c/ mes',
  'c/2 meses',
  'c/3 meses',
];

/* PREGUNTA249 */
const opcPreg249 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcComo = ref<IModeloDeObjetoOpciones>({
  label: '',
  value: '',
  puntaje: 0,
});

const FormularioHortaliza = ref();
const sistemCultivHort = ref<IPreg2410Producto>({
  producto: {
    label: '',
    value: '',
    puntaje: 0,
    disable: false,
  },
  area: '',
  medida: '',
  cantidad: '',
  semillaOPlantula: '',
  tiempoSiembra: '',
  tiempoCosecha: '',
  puntaje: 0.2,
  porcentaje: 0,
});
const opcPreg2410hortProd = ref([
  {
    label: 'Acelga',
    value: '0',
    puntaje: 0.2,
    disabel: false,
  },
  {
    label: 'Ají',
    value: '1',
    puntaje: 0.2,
    disabel: false,
  },

  {
    label: 'Albahaca',
    value: '2',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Apio',
    value: '3',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Arveja',
    value: '4',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Berro',
    value: '5',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Brócoli',
    value: '6',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Cebolla larga',
    value: '7',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Cebolla paiteña',
    value: '8',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Cebollin',
    value: '9',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Cebolla perla',
    value: '10',
    puntaje: 0.2,
    disabel: false,
  },
  {
    label: 'Cebolla puerro',
    value: '11',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Champiñones',
    value: '12',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Cilantro',
    value: '13',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Col',
    value: '14',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Col morada',
    value: '15',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Coliflor',
    value: '16',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Espinaca',
    value: '17',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Habas',
    value: '18',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Lechuga',
    value: '19',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Lechuga crespa',
    value: '20',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Melloco',
    value: '21',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Nabo',
    value: '22',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Papa',
    value: '23',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Pepinillo',
    value: '24',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Perejil',
    value: '25',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Pimiento',
    value: '26',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Rábano',
    value: '27',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Remolacha',
    value: '28',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Romanesco',
    value: '29',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Tomate riñon',
    value: '30',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Tomate Cherry',
    value: '31',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Vainita',
    value: '32',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Yuca',
    value: '33',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Zambo',
    value: '34',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Zanahoria',
    value: '35',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Zapallo',
    value: '36',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Zuquini',
    value: '37',
    puntaje: 0.2,
    disable: false,
  },
]);
const opcPreg2410hortMedida = ['m2'];
const opcPreg2410hortPlatul = [
  'Plántulas',
  'N° semillas',
  'Gramos',
  'Libras',
  'Arrobas',
  'Quintales',
  'Ninguna',
];
const opcPreg2410hortTiempSiem = [
  'c/8 días',
  'c/15 días',
  'c/25 días',
  'c/30 días',
  'c/45 días',
  'c/3 meses',
  'c/4 meses',
  'c/6 meses',
  'Anual',
  'Perenne',
];
const opcPreg2410hortTiempCos = [
  'Semanal',
  'Quincenal',
  'Mensual',
  'Trimestal',
  'Bimestral',
  'Temporada',
  'Anual',
  'Perenne',
];

const FormularioFrutas = ref();
const sistemCultivFrut = ref<IPreg2410Producto>({
  producto: {
    label: '',
    value: '',
    puntaje: 0,
    disable: false,
  },
  area: '',
  medida: '',
  cantidad: '',
  semillaOPlantula: '',
  tiempoSiembra: '',
  tiempoCosecha: '',
  puntaje: 0.2,
  porcentaje: 0,
});

const opcPreg2410FrutProd = ref([
  {
    label: 'Aguacate',
    value: '0',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Babaco',
    value: '1',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Capulí',
    value: '2',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Chamburo',
    value: '3',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Chayote',
    value: '4',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Chirimoya',
    value: '5',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Ciruelos',
    value: '6',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Durazno',
    value: '7',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Frutilla',
    value: '8',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Frutos secos',
    value: '9',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Granadilla',
    value: '10',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Guayaba',
    value: '11',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Higo',
    value: '12',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Limas',
    value: '13',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Limón',
    value: '14',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Mandarina',
    value: '15',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Maracuya',
    value: '16',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Mora',
    value: '17',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Naranja',
    value: '18',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Pepino',
    value: '19',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Piña',
    value: '20',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Plátano',
    value: '21',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Papaya',
    value: '22',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Seda',
    value: '23',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Taxo',
    value: '24',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Tocte',
    value: '25',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Tomate de árbol',
    value: '26',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Tomate de riñon',
    value: '27',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Tunas',
    value: '28',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Uvillas',
    value: '29',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Verde',
    value: '30',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Zambo',
    value: '31',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Zapallo',
    value: '32',
    puntaje: 0.2,
    disable: false,
  },
]);
const opcPreg2410FrutTiempSiem = [
  'Semanal',
  'Quincenal',
  'Mensual',
  'Trimestal',
  'Bimestral',
  'Temporada',
  'Anual',
  'Perenne',
];

const FormularioPastos = ref();
const sistemCultivPastos = ref<IPreg2410Producto>({
  producto: {
    label: '',
    value: '',
    puntaje: 0,
    disable: false,
  },
  area: '',
  medida: '',
  cantidad: '',
  semillaOPlantula: '',
  tiempoSiembra: '',
  tiempoCosecha: '',
  puntaje: 0.2,
  porcentaje: 0,
});
const opcPreg2410PastPro = ref([
  {
    label: 'Ray Grass Anual',
    value: '0',
    puntaje: 0.25,
  },
  {
    label: 'Ray Grass Perenne',
    value: '1',
    puntaje: 0.25,
  },
  {
    label: 'Pasto natural',
    value: '2',
    puntaje: 0.25,
    disable: false,
  },
  {
    label: 'Bolón azul',
    value: '3',
    puntaje: 0.25,
    disable: false,
  },
  {
    label: 'Alfalfa',
    value: '4',
    puntaje: 0.25,
    disable: false,
  },
  {
    label: 'Mezcla forrajera',
    value: '5',
    puntaje: 0.25,
    disable: false,
  },
  {
    label: 'Maralfalfa',
    value: '6',
    puntaje: 0.25,
    disable: false,
  },
  {
    label: 'Vicia',
    value: '7',
    puntaje: 0.25,
  },
  {
    label: 'Avena',
    value: '8',
    puntaje: 0.25,
  },
]);
const opcPreg2410PastotPlatul = [
  'Plántulas',
  'N° semillas',
  'Gramos',
  'Libras',
  'Arrobas',
  'Quintales',
  'Ninguna',
];
const opcPreg2410PastTiempSiem = [
  'c/8 días',
  'c/15 días',
  'c/25 días',
  'c/30 días',
  'c/45 días',
  'c/3 meses',
  'c/4 meses',
  'c/6 meses',
  'Anual',
  'Perenne',
];
const opcPreg2410PastTiempCos = [
  'Semanal',
  'Quincenal',
  'Mensual',
  'Trimestal',
  'Bimestral',
  'Temporada',
  'Anual',
  'Perenne',
];
const FormularioCereales = ref();
const sistemCultivCereales = ref<IPreg2410Producto>({
  producto: {
    disable: false,
    label: '',
    value: '',
    puntaje: 0,
  },
  area: '',
  medida: '',
  cantidad: '',
  semillaOPlantula: '',
  tiempoSiembra: '',
  tiempoCosecha: '',
  puntaje: 0.2,
  porcentaje: 0,
});
const opcPreg2410CerealProd = ref([
  {
    label: 'Amaranto',
    value: '0',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Arveja',
    value: '1',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Canguil',
    value: '2',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Cebada',
    value: '3',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Chia',
    value: '4',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Chochos',
    value: '5',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Choclo',
    value: '6',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Chulpi',
    value: '7',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Frejol',
    value: '8',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Habas',
    value: '9',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Lenteja',
    value: '10',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Linaza',
    value: '11',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Maiz',
    value: '12',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Morocho',
    value: '13',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Papa',
    value: '14',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Quinua',
    value: '15',
    puntaje: 0.2,
    disable: false,
  },
  {
    label: 'Trigo',
    value: '16',
    puntaje: 0.2,
    disable: false,
  },
]);
const opcPreg2410CerealTiempSiem = [
  'c/8 días',
  'c/15 días',
  'c/25 días',
  'c/30 días',
  'c/45 días',
  'c/3 meses',
  'c/4 meses',
  'c/6 meses',
  'Anual',
  'Perenne',
];
const opcPreg2410CerealTiempCos = [
  'Semanal',
  'Quincenal',
  'Mensual',
  'Trimestal',
  'Bimestral',
  'Temporada',
  'Anual',
  'Perenne',
];
const FormularioPlantasMedic = ref();
const sistemCultivPlantasMedicin = ref<IPreg2410Producto>({
  producto: {
    label: '',
    value: '',
    puntaje: 0,
    disable: false,
  },
  area: '',
  medida: '',
  cantidad: '',
  semillaOPlantula: '',
  tiempoSiembra: '',
  tiempoCosecha: '',
  puntaje: 0.2,
  porcentaje: 0,
});

const opcPreg2410PlantasMProd = ref([
  {
    label: 'Arrayan',
    value: '0',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Borraja',
    value: '1',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Cedrón',
    value: '2',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Cola de caballo',
    value: '3',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Eucalipto aromático',
    value: '4',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Hierba Luisa',
    value: '5',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Hierba Mora',
    value: '6',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Insulina',
    value: '7',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Lengua de suegra',
    value: '8',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Linaza',
    value: '9',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Llanten',
    value: '10',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Manzanilla',
    value: '11',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Marco',
    value: '12',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Matico',
    value: '13',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Menta',
    value: '14',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Hierba Buena',
    value: '15',
    puntaje: 0.1,
    disable: false,
  },
  {
    label: 'Jicama',
    value: '16',
    puntaje: 0.1,
    disable: false,
  },
]);
const opcPreg2410PlantMedTiempSiem = [
  'c/8 días',
  'c/15 días',
  'c/25 días',
  'c/30 días',
  'c/45 días',
  'c/3 meses',
  'c/4 meses',
  'c/6 meses',
  'Anual',
  'Perenne',
];
const opcPreg2410PlantMedTiempCos = [
  'Semanal',
  'Quincenal',
  'Mensual',
  'Trimestal',
  'Bimestral',
  'Temporada',
  'Anual',
  'Perenne',
];

const FormPreg2410OtrosOpcional = ref();
const sistemCultivOpcional = ref<IPreg2410Opcional>({
  producto: '',
  area: '',
  medida: '',
  cantidad: '',
  semillaOPlantula: '',
  tiempoSiembra: '',
  tiempoCosecha: '',
  puntaje: 0.2,
  porcentaje: 0,
});
const opcPreg2411 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcPreg2412 = [
  {
    label: 'Falta de agua',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Plagas',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Enfermedades',
    value: '2',
    puntaje: 1,
  },
  {
    label: 'Deficiencia nutricional',
    value: '3',
    puntaje: 1,
  },
  {
    label: 'Mal manejo del suelo',
    value: '4',
    puntaje: 1,
  },
  {
    label: 'Ninguna',
    value: '5',
    puntaje: 0,
  },
];

const opcPreg2413 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcPreg2414 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcPreg2415 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const preg2416 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcSubpPreg2416 = ref<IModeloDeObjetoOpciones>({
  label: '',
  value: '',
  puntaje: 1,
});

const subSubPreg2416 = [
  {
    label: 'Insectos',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Plagas',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Enfermedades',
    value: '2',
    puntaje: 1,
  },
  {
    label: 'Hongos',
    value: '3',
    puntaje: 1,
  },
];

/* const pregunta 2.4.17 */
const opcPreg2417 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

/* const pregunta 2.4.18 */
const opcPreg2418 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcSubPreg2418 = [
  {
    label: 'Mesa y tanque de agua',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Zona de lavado, secado y empacado',
    value: '1',
    puntaje: 1,
  },
];
/* Const pregunta 2.4.19 */
const preg2419 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.6,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

/* const pregunta 2.4.20 */
const opcPreg2420 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.16,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const preg2426 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcPreg2421 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcPreg2422 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const FormularioEspecieCrianza = ref();
const numEspecies = ref<IPreg2423>({
  especie: {
    label: '',
    value: '',
    puntaje: 0,
  },
  pequenios: 0,
  adultos: 0,
  cantidadEsp: 0,
  porcentajeEsp: 0,
  disable: false,
});

const opcPreg2423Esp = [
  {
    label: 'Gallinas',
    value: '0',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Pollos',
    value: '1',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Patos',
    value: '2',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Cuyes',
    value: '3',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Conejos',
    value: '4',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Chanchos',
    value: '5',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Truchas',
    value: '6',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Vacas',
    value: '7',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Ovejas',
    value: '8',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Ganzos',
    value: '9',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Caballos',
    value: '10',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Cabras',
    value: '11',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Codornis',
    value: '12',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Burros',
    value: '13',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Llamas',
    value: '14',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Terneras',
    value: '15',
    puntaje: 0.33,
    disable: false,
  },
  {
    label: 'Terneros',
    value: '16',
    puntaje: 0.33,
    disable: false,
  },
];
const opcPregGranos2424 = [
  {
    label: 'Amaranto',
    value: '0',
    puntaje: 0.4,
  },
  {
    label: 'Arveja',
    value: '1',
    puntaje: 0.4,
  },
  {
    label: 'Canguil',
    value: '2',
    puntaje: 0.4,
  },
  {
    label: 'Cebada',
    value: '3',
    puntaje: 0.4,
  },
  {
    label: 'Chia',
    value: '4',
    puntaje: 0.4,
  },
  {
    label: 'Chochos',
    value: '5',
    puntaje: 0.4,
  },
  {
    label: 'Choclo',
    value: '6',
    puntaje: 0.4,
  },
  {
    label: 'Chulpi',
    value: '7',
    puntaje: 0.4,
  },
  {
    label: 'Frejol',
    value: '8',
    puntaje: 0.4,
  },
  {
    label: 'Habas',
    value: '9',
    puntaje: 0.4,
  },
  {
    label: 'Lenteja',
    value: '10',
    puntaje: 0.4,
  },
  {
    label: 'Linaza',
    value: '11',
    puntaje: 0.4,
  },
  {
    label: 'Maiz',
    value: '12',
    puntaje: 0.4,
  },
  {
    label: 'Morocho',
    value: '13',
    puntaje: 0.4,
  },
  {
    label: 'Papa',
    value: '14',
    puntaje: 0.4,
  },
  {
    label: 'Quinua',
    value: '15',
    puntaje: 0.4,
  },
  {
    label: 'Trigo',
    value: '16',
    puntaje: 0.4,
  },
  {
    label: 'Ninguno',
    value: '17',
    puntaje: 0,
  },
];
const opcPregPasto2424 = [
  {
    label: 'Ray Grass Anual',
    value: '0',
    puntaje: 0.3,
  },
  {
    label: 'Ray Grass Perenne',
    value: '1',
    puntaje: 0.3,
  },
  {
    label: 'Pasto natural',
    value: '2',
    puntaje: 0.3,
    disable: false,
  },
  {
    label: 'Bolón azul',
    value: '3',
    puntaje: 0.3,
    disable: false,
  },
  {
    label: 'Alfalfa',
    value: '4',
    puntaje: 0.3,
    disable: false,
  },
  {
    label: 'Mezcla forrajera',
    value: '5',
    puntaje: 0.3,
    disable: false,
  },
  {
    label: 'Maralfalfa',
    value: '6',
    puntaje: 0.3,
    disable: false,
  },
  {
    label: 'Vicia',
    value: '7',
    puntaje: 0.3,
  },
  {
    label: 'Avena',
    value: '8',
    puntaje: 0.3,
  },
  {
    label: 'Ninguno',
    value: '9',
    puntaje: 0,
    disable: false,
  },
];
const opcPregRestosDeCosecha2424 = [
  {
    label: 'Hortalizas',
    value: '0',
    puntaje: 0.3,
  },
  {
    label: 'Frutas',
    value: '1',
    puntaje: 0.3,
  },
  {
    label: 'Podas',
    value: '2',
    puntaje: 0.3,
  },
  {
    label: 'Ninguna',
    value: '3',
    puntaje: 0,
  },
];

const opcPreg2425 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.6,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];
const opcSubPreg2425 = ref<IModeloDeObjetoOpciones>({
  label: '',
  value: '',
  puntaje: 0.6,
});

const preg2427 = [
  {
    label: 'Cada 15 días',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Cada mes',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: 'Cada 2 o 3 meses',
    value: '2',
    puntaje: 0.25,
  },
  {
    label: 'No realiza',
    value: '3',
    puntaje: 0,
  },
];

const preg2428 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const preg2429 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

/*const encabezado pregunta 2.4.30 */
const opcEncaPreg2430 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];
const opcSubPregEnca2430 = ref<IModeloDeObjetoOpciones>({
  label: '',
  value: '',
  puntaje: 1,
});
/*const preg 2.4.30 */
const opcPreg2430 = [
  {
    label: 'Reforestación',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Control de ganado',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Ninguna',
    value: '2',
    puntaje: 0,
  },
];
/* const preg 2.4.31*/
const opcOrganica = [
  {
    label: 'Recicla en la parcela',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'Abono',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: 'Ninguna',
    value: '2',
    puntaje: 0,
  },
];
const opcInorganica = [
  {
    label: 'Acopia y lleva a la basura municipal',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'Quema',
    value: '1',
    puntaje: 0.5,
  },
  {
    label: 'Recicla',
    value: '2',
    puntaje: 0.5,
  },
  {
    label: 'Ninguna',
    value: '3',
    puntaje: 0,
  },
];
const preg2432 = [
  {
    label: 'Permanente',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'c/ 2 días',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'c/ 8 días',
    value: '2',
    puntaje: 1,
  },
  {
    label: 'c/ 15 días',
    value: '3',
    puntaje: 1,
  },
  {
    label: 'c/ 20 días',
    value: '4',
    puntaje: 1,
  },
  {
    label: 'Otros',
    value: '5',
    puntaje: 1,
  },
  {
    label: 'Ninguno',
    value: '6',
    puntaje: 0,
  },
];
const subPreg2432 = [
  {
    label: 'Tiene reservorio familiar',
    value: '0',
    puntaje: 0.75,
  },
  {
    label: 'Reservorio comunitario',
    value: '1',
    puntaje: 0.75,
  },
];
const preg2433 = [
  {
    label: 'Aspersión',
    value: '0',
    puntaje: 1.5,
  },
  {
    label: 'Goteo',
    value: '1',
    puntaje: 1.5,
  },
  {
    label: 'Microaspersión',
    value: '0',
    puntaje: 1.5,
  },
  {
    label: 'Ninguno',
    value: '1',
    puntaje: 0,
  },
];
const preg2434 = [
  {
    label: 'Curvas a nivel',
    value: '0',
    puntaje: 0.8,
  },
  {
    label: 'Zurcos a nivel ',
    value: '1',
    puntaje: 0.8,
  },
];
const preg2435 = [
  {
    label: 'Recolección de agua lluvias de techos de las viviendas y caminos',
    value: '0',
    puntaje: 0.8,
  },
  {
    label: 'Costrucción de curvas a nivel',
    value: '1',
    puntaje: 0.8,
  },
  {
    label: 'Zanjas de infiltraciones de agua',
    value: '2',
    puntaje: 0.8,
  },
  {
    label: 'Ninguno',
    value: '3',
    puntaje: 0,
  },
];
const preg2436 = [
  {
    label: 'Colchon o Mulch',
    value: '0',
    puntaje: 1.5,
  },
  {
    label: 'Cobertura de pasto',
    value: '1',
    puntaje: 1.5,
  },
  {
    label: 'Curvas de nivel',
    value: '2',
    puntaje: 1.5,
  },
  {
    label: 'Zanjas de infiltración',
    value: '3',
    puntaje: 1.5,
  },
  {
    label: 'Ninguno',
    value: '4',
    puntaje: 0,
  },
];

/* const pregunta 2.4.37 */
const opcPreg2437 = [
  {
    label: 'Recoleccion de agua lluvia de techos',
    value: '0',
    puntaje: 2,
  },
  {
    label: 'Zanjas de Infiltración',
    value: '1',
    puntaje: 2,
  },
  {
    label: 'Curvas de nivel',
    value: '2',
    puntaje: 2,
  },
  {
    label: 'Ninguna',
    value: '3',
    puntaje: 0,
  },
];

/* const pregunta 2.4.38 */
const opcPreg2438 = [
  {
    label: 'Bocashi',
    value: '0',
    puntaje: 2,
  },
  {
    label: 'Humus',
    value: '1',
    puntaje: 2,
  },
  {
    label: 'Compost',
    value: '2',
    puntaje: 2,
  },
  {
    label: 'Podas de plantas',
    value: '3',
    puntaje: 2,
  },
  {
    label: 'Ninguna',
    value: '4',
    puntaje: 0,
  },
];

/* const pregunta 2.4.39 */
const opcPreg2439 = [
  {
    label: 'Estacional',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Permanente',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Ninguno',
    value: '2',
    puntaje: 0,
  },
];
/* const pregunta 2.4.40 */
const opcPreg2440 = [
  {
    label: 'Recolección de agua lluviasde techosde las viviendas y caminos',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Zanjas de infiltracionde agua',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Construcción de curvas a nivel',
    value: '2',
    puntaje: 1,
  },
  {
    label: 'Ninguno',
    value: '3',
    puntaje: 0,
  },
];

/* const pregunta 2.4.38 */
const opcPreg2441 = [
  {
    label: 'Colchon o mulch',
    value: '0',
    puntaje: 2,
  },
  {
    label: 'Cobertura con pastos',
    value: '1',
    puntaje: 2,
  },
  {
    label: 'Zanjas de infiltración',
    value: '2',
    puntaje: 2,
  },
  {
    label: 'Curvas de nivel',
    value: '3',
    puntaje: 2,
  },
  {
    label: 'Ninguna',
    value: '4',
    puntaje: 0,
  },
];

//funcion actualizar preguntas

function actualizaPreg243(value: IModeloDeObjetoOpciones) {
  if (value.label == 'No') {
    dimensionEcologicaStore.dimensionEcologica24.preg243.subpreg243.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}
function actualizaPreg249(value: IModeloDeObjetoOpciones) {
  if (value.label == 'No') {
    dimensionEcologicaStore.dimensionEcologica24.preg249.subPreg249.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}
function actualizaPreg2416(value: IModeloDeObjetoOpciones) {
  if (value.label == 'Ninguno') {
    dimensionEcologicaStore.dimensionEcologica24.preg2416.subPreg2416.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
  if (value.label == 'Ninguno') {
    dimensionEcologicaStore.dimensionEcologica24.preg2416.subSubPreg2416.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}
function actualizarPreg2418(value: IModeloDeObjetoOpciones) {
  if (value.label == 'No') {
    dimensionEcologicaStore.dimensionEcologica24.preg2418.subPreg2418.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}
function actualizaEncaPreg2430(value: IModeloDeObjetoOpciones) {
  if (value.label == 'No') {
    dimensionEcologicaStore.dimensionEcologica24.encabezadoPreg2430.subPregEnca2430.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}

//OPERACIONES SUMA DE PERIMETRO Y METROS SEMBRADOS
function totalPerimetro() {
  let suma = 0;
  datosGeneralesStore.tiposTerrenos.forEach((terreno) => {
    suma += parseFloat(terreno.perimetroTotal || '0');
  });
  dimensionEcologicaStore.dimensionEcologica24.preg242.totalPeri = Number(
    suma.toFixed(2)
  );
}

function totalMetroSembrado() {
  let suma = 0;
  datosGeneralesStore.tiposTerrenos.forEach((terreno) => {
    suma += parseFloat(terreno.metroSembrado || '0');
  });
  dimensionEcologicaStore.dimensionEcologica24.preg242.totalMetroSembrado =
    Number(suma.toFixed(2));
  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    Number(suma.toFixed(2));
}

//FUNCIONES PARA EL BOTÓN AGREGAR
function agregarBiofertilizante(data: ICual) {
  opcCual.value[Number(data.cual.value)].disable = true;
  elabYApli.value = {
    cual: { label: '', value: '', puntaje: 0, disable: false },
    cantidad: '',
    frecuencia: '',
  };
  formBiofertilizante.value.resetValidation();
  const nuevoBiofertilizante = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg248.cual.push(
    nuevoBiofertilizante
  );
}
function agregarHortaliza(data: IPreg2410Producto) {
  opcPreg2410hortProd.value[Number(data.producto.value)].disable = true;
  sistemCultivHort.value = {
    producto: {
      label: '',
      value: '',
      puntaje: 0,
      disable: false,
    },
    area: '',
    medida: '',
    cantidad: '',
    semillaOPlantula: '',
    tiempoSiembra: '',
    tiempoCosecha: '',
    puntaje: 0,
    porcentaje: 0,
  };
  FormularioHortaliza.value.resetValidation();
  const nuevaHortaliza = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizas.push(
    nuevaHortaliza
  );

  sumaHortalizas();
  operacionTotalesPorcentajeshortaliza();
  calculoTotalProductos();
}
function agregarFruta(data: IPreg2410Producto) {
  opcPreg2410FrutProd.value[Number(data.producto.value)].disable = true;
  sistemCultivFrut.value = {
    producto: {
      label: '',
      value: '',
      puntaje: 0,
      disable: false,
    },
    area: '',
    medida: '',
    cantidad: '',
    semillaOPlantula: '',
    tiempoSiembra: '',
    tiempoCosecha: '',
    puntaje: 0,
    porcentaje: 0,
  };
  FormularioFrutas.value.resetValidation();
  const nuevaFruta = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2410.frutas.push(nuevaFruta);
  sumaFrutas();
  operacionTotalPorcentajesFrutas();
  calculoTotalProductos();
}
function agregarPasto(data: IPreg2410Producto) {
  opcPreg2410PastPro.value[Number(data.producto.value)].disable = true;
  sistemCultivPastos.value = {
    producto: {
      label: '',
      value: '',
      puntaje: 0,
      disable: false,
    },
    area: '',
    medida: '',
    cantidad: '',
    semillaOPlantula: '',
    tiempoSiembra: '',
    tiempoCosecha: '',
    puntaje: 0,
    porcentaje: 0,
  };
  FormularioPastos.value.resetValidation();
  const nuevoPasto = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2410.pastos.push(nuevoPasto);
  sumaPastos();
  operacionTotalPorcentajesPastos();
  calculoTotalProductos();
}
function agregarCereales(data: IPreg2410Producto) {
  opcPreg2410CerealProd.value[Number(data.producto.value)].disable = true;
  sistemCultivCereales.value = {
    producto: {
      label: '',
      value: '',
      puntaje: 0,
      disable: false,
    },
    area: '',
    medida: '',
    cantidad: '',
    semillaOPlantula: '',
    tiempoSiembra: '',
    tiempoCosecha: '',
    puntaje: 0,
    porcentaje: 0,
  };
  FormularioCereales.value.resetValidation();
  const nuevoCereal = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealesYSeudocere.push(
    nuevoCereal
  );
  sumaCerealesYSubcere();
  operacionTotalPorcentajesCereales();
  calculoTotalProductos();
}
function agregarPlantasMedicinales(data: IPreg2410Producto) {
  opcPreg2410PlantasMProd.value[Number(data.producto.value)].disable = true;
  sistemCultivPlantasMedicin.value = {
    producto: {
      label: '',
      value: '',
      puntaje: 0,
      disable: false,
    },
    area: '',
    medida: '',
    cantidad: '',
    semillaOPlantula: '',
    tiempoSiembra: '',
    tiempoCosecha: '',
    puntaje: 0,
    porcentaje: 0,
  };
  FormularioPlantasMedic.value.resetValidation();
  const nuevaPlantaMEdicinal = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2410.plantasMedicin.push(
    nuevaPlantaMEdicinal
  );
  sumaPlantasMed();
  operacionTotalPorcentajesPlantasM();
  calculoTotalProductos();
}
function agregarProdOpcional(data: IPreg2410Opcional) {
  // Asegúrate de convertir 'puntaje' a un número entero si es necesario
  data.puntaje = Math.round(data.puntaje);

  sistemCultivOpcional.value = {
    producto: '',
    area: '',
    medida: '',
    cantidad: '',
    semillaOPlantula: '',
    tiempoSiembra: '',
    tiempoCosecha: '',
    puntaje: 0.2,  // Inicializamos como entero
    porcentaje: 0,
  };

  FormPreg2410OtrosOpcional.value.resetValidation();
  const nuevoProdOpcional = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2410.otrosOpcional.push(nuevoProdOpcional);
  sumaProductosOpcionales();
  operacionTotalOpcionales();
  calculoTotalProductos();
}

function agregarEspecie(data: IPreg2423) {
  opcPreg2423Esp[Number(data.especie.value)].disable = true;
  numEspecies.value = {
    especie: {
      label: '',
      value: '',
      puntaje: 0,
    },
    pequenios: 0,
    adultos: 0,
    cantidadEsp: 0,
    porcentajeEsp: 0,
    disable: false,
  };
  FormularioEspecieCrianza.value.resetValidation();
  const nuevaEspecie = { ...data };
  dimensionEcologicaStore.dimensionEcologica24.preg2423.especieA.push(
    nuevaEspecie
  );
  operacionTotalesPorcentajesEspecie();
}

//FUNCIONES PARA EL BOTON DE ELIMINAR
function eliminarBiofertilizante(data: ICual, index: number): void {
  opcCual.value[Number(data.cual.value)].disable = false;

  dimensionEcologicaStore.dimensionEcologica24.preg248.cual.splice(index, 1);
}
function eliminarHortaliza(data: IPreg2410Producto, index: number): void {
  opcPreg2410hortProd.value[Number(data.producto.value)].disable = false;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizas.splice(
    index,
    1
  );
  sumaHortalizas();
  operacionTotalesPorcentajeshortaliza();
  calculoTotalProductos();
}
function eliminarFruta(data: IPreg2410Producto, index: number): void {
  opcPreg2410FrutProd.value[Number(data.producto.value)].disable = false;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados +=
    Number(
      dimensionEcologicaStore.dimensionEcologica24.preg2410.frutas[index].area
    );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.frutas.splice(index, 1);
  sumaFrutas();
  operacionTotalPorcentajesFrutas();
  calculoTotalProductos();
}

function eliminarPasto(data: IPreg2410Producto, index: number): void {
  opcPreg2410PastPro.value[Number(data.producto.value)].disable = false;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.pastos.splice(index, 1);
  operacionTotalPorcentajesPastos();
  calculoTotalProductos();
  sumaPastos();
}
function eliminarCereal(data: IPreg2410Producto, index: number): void {
  opcPreg2410CerealProd.value[Number(data.producto.value)].disable = false;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados +=
    Number(
      dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealesYSeudocere[
        index
      ].area
    );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealesYSeudocere.splice(
    index,
    1
  );
  operacionTotalPorcentajesCereales();
  calculoTotalProductos();
  sumaCerealesYSubcere();
}
function eliminaPlantasMedicinales(
  data: IPreg2410Producto,
  index: number
): void {
  opcPreg2410PlantasMProd.value[Number(data.producto.value)].disable = false;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados +=
    Number(
      dimensionEcologicaStore.dimensionEcologica24.preg2410.plantasMedicin[
        index
      ].area
    );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.plantasMedicin.splice(
    index,
    1
  );

  operacionTotalPorcentajesPlantasM();
  calculoTotalProductos();
  sumaPlantasMed();
}
function eliminarProdOpcional(index: number): void {
  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados +=
    Number(
      dimensionEcologicaStore.dimensionEcologica24.preg2410.otrosOpcional[index]
        .area
    );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.otrosOpcional.splice(
    index,
    1
  );
  operacionTotalOpcionales();
  calculoTotalProductos();
  sumaProductosOpcionales();
}
function eliminarEspecie(data: IPreg2423, index: number): void {
  opcPreg2423Esp[Number(data.especie.value)].disable = false;
  dimensionEcologicaStore.dimensionEcologica24.preg2423.especieA.splice(
    index,
    1
  );
  operacionTotalesPorcentajesEspecie();
}

//FUNCIONES PARA SUMAS Y PORCENTAJES
function sumaHortalizas() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizas.forEach(
    (prod) => {
      suma += Number(prod.producto.puntaje);
      dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +=
        Number(prod.area);
    }
  );

  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales;
}
function sumaFrutas() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.frutas.forEach(
    (prod) => {
      suma += Number(prod.producto.puntaje);
      dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +=
        Number(prod.area);
    }
  );

  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales;
}
function sumaPastos() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.pastos.forEach(
    (prod) => {
      suma += Number(prod.producto.puntaje);
      dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +=
        Number(prod.area);
    }
  );

  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales;
}
function sumaCerealesYSubcere() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealesYSeudocere.forEach(
    (prod) => {
      suma += Number(prod.producto.puntaje);
      dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +=
        Number(prod.area);
    }
  );

  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales;
}
function sumaPlantasMed() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.plantasMedicin.forEach(
    (prod) => {
      suma += Number(prod.producto.puntaje);
      dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +=
        Number(prod.area);
    }
  );

  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales;
}
function sumaProductosOpcionales() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.otrosOpcional.forEach(
    (prod) => {
      const puntaje = Number(prod.puntaje) || 0;
      const area = Number(prod.area) || 0;
      console.log('Puntaje:', puntaje, 'Área:', area);  // Depuración
      suma += puntaje;
      dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales += area;
    }
  );
  console.log('Suma Total Puntajes:', suma);  // Depuración
  dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosHortaliza +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosFrutas +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPastos +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosCereales +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosPlantasMed +
    dimensionEcologicaStore.dimensionEcologica24.preg2410.metrosOpcionales;
  console.log('Área Total Sembrada:', dimensionEcologicaStore.dimensionEcologica24.preg2410.areaProductosSembrados);
}

function operacionTotalesPorcentajeshortaliza() {
  const hortalizas =
    dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizas;

  const suma = hortalizas.reduce((total, hortAgre) => {
    const puntaje = Number(hortAgre.producto.puntaje);
    return !isNaN(puntaje) ? total + puntaje : total;
  }, 0);

  dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizasTotal =
    Math.round(Number(suma) * 10) / 10;
}
function operacionTotalPorcentajesFrutas() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.frutas.forEach(
    (frutAgre) => {
      suma += Number(frutAgre.producto.puntaje);
    }
  );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.frutasTotal =
    Math.round(Number(suma) * 10) / 10;
}
function operacionTotalPorcentajesPastos() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.pastos.forEach(
    (pastoAgre) => {
      suma += Number(pastoAgre.producto.puntaje);
    }
  );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.pastosTotal =
    Math.round(Number(suma) * 10) / 10;
}
function operacionTotalPorcentajesCereales() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealesYSeudocere.forEach(
    (cerealAgre) => {
      suma += Number(cerealAgre.producto.puntaje);
    }
  );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealeTotal =
    Math.round(Number(suma) * 10) / 10;
}
function operacionTotalPorcentajesPlantasM() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.plantasMedicin.forEach(
    (PlanMeAgre) => {
      suma += Number(PlanMeAgre.producto.puntaje);
    }
  );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.planMedTotal =
    Math.round(Number(suma) * 10) / 10;
}
function operacionTotalOpcionales() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2410.otrosOpcional.forEach(
    (prod) => {
      suma += Number(prod.puntaje);
    }
  );
  dimensionEcologicaStore.dimensionEcologica24.preg2410.opcionalesTotal =
    Math.round(Number(suma) * 10) / 10;
}

function sumatoriaProductos(): number {
  return (
    Math.round(
      Number(
        dimensionEcologicaStore.dimensionEcologica24.preg2410.hortalizasTotal +
        dimensionEcologicaStore.dimensionEcologica24.preg2410.frutasTotal +
        dimensionEcologicaStore.dimensionEcologica24.preg2410.pastosTotal +
        dimensionEcologicaStore.dimensionEcologica24.preg2410.cerealeTotal +
        dimensionEcologicaStore.dimensionEcologica24.preg2410.planMedTotal +
        dimensionEcologicaStore.dimensionEcologica24.preg2410.opcionalesTotal
      ) * 10
    ) / 10
  );
}
function calculoTotalProductos() {
  dimensionEcologicaStore.dimensionEcologica24.preg2410.totalProductos =
    sumatoriaProductos() >= 8 ? 8 : sumatoriaProductos();
}
//funcion suma especies
function calculoCantidadPorcentajeEspecie() {
  numEspecies.value.cantidadEsp =
    Number(numEspecies.value.adultos) + Number(numEspecies.value.pequenios);
}

function operacionTotalesPorcentajesEspecie() {
  let suma = 0;
  dimensionEcologicaStore.dimensionEcologica24.preg2423.especieA.forEach(
    (especie) => {
      suma += Number(especie.cantidadEsp);
    }
  );
  dimensionEcologicaStore.dimensionEcologica24.preg2423.cantidadTotal = suma;

  dimensionEcologicaStore.dimensionEcologica24.preg2423.especieA.forEach(
    (especie) => {
      especie.porcentajeEsp =
        Math.round(
          (especie.cantidadEsp /
            dimensionEcologicaStore.dimensionEcologica24.preg2423
              .cantidadTotal) *
          100 *
          10
        ) / 10;
    }
  );
}

//FUNCION BOTON CONTINUAR
function formDimenEcologicaSubmit() {
  (dimensionEcologicaStore as any).puntajeTotalpreg241;
  (dimensionEcologicaStore as any).puntajeTotalpreg242;
  (dimensionEcologicaStore as any).puntajeTotalpreg243;
  (dimensionEcologicaStore as any).puntajeTotalpreg244;
  (dimensionEcologicaStore as any).puntajeTotalpreg245;
  (dimensionEcologicaStore as any).puntajeTotalpreg246;
  (dimensionEcologicaStore as any).puntajeTotalpreg247;
  (dimensionEcologicaStore as any).puntajeTotalpreg248;
  (dimensionEcologicaStore as any).puntajeTotalpreg249;
  (dimensionEcologicaStore as any).puntajeTotalpreg2410;
  (dimensionEcologicaStore as any).puntajeTotalpreg2411;
  (dimensionEcologicaStore as any).puntajeTotalpreg2412;
  (dimensionEcologicaStore as any).puntajeTotalpreg2413;
  (dimensionEcologicaStore as any).puntajeTotalpreg2414;
  (dimensionEcologicaStore as any).puntajeTotalpreg2415;
  (dimensionEcologicaStore as any).puntajeTotalpreg2416;
  (dimensionEcologicaStore as any).puntajeTotalpreg2417;
  (dimensionEcologicaStore as any).puntajeTotalpreg2418;
  (dimensionEcologicaStore as any).puntajeTotalpreg2419;
  (dimensionEcologicaStore as any).puntajeTotalpreg2420;
  (dimensionEcologicaStore as any).puntajeTotalpreg2421;
  (dimensionEcologicaStore as any).puntajeTotalpreg2422;
  (dimensionEcologicaStore as any).puntajeTotalpreg2423;
  (dimensionEcologicaStore as any).puntajeTotalpreg2424;
  (dimensionEcologicaStore as any).puntajeTotalpreg2425;
  (dimensionEcologicaStore as any).puntajeTotalpreg2426;
  (dimensionEcologicaStore as any).puntajeTotalpreg2427;
  (dimensionEcologicaStore as any).puntajeTotalpreg2428;
  (dimensionEcologicaStore as any).puntajeTotalpreg2429;
  (dimensionEcologicaStore as any).puntajeTotalencabezadoPreg2430;
  (dimensionEcologicaStore as any).puntajeTotalpreg2430;
  (dimensionEcologicaStore as any).puntajeTotalpreg2431;
  (dimensionEcologicaStore as any).puntajeTotalpreg2432;
  (dimensionEcologicaStore as any).puntajeTotalpreg2433;
  (dimensionEcologicaStore as any).puntajeTotalpreg2434;
  (dimensionEcologicaStore as any).puntajeTotalpreg2435;
  (dimensionEcologicaStore as any).puntajeTotalpreg2436;
  (dimensionEcologicaStore as any).puntajeTotalpreg2437;
  (dimensionEcologicaStore as any).puntajeTotalpreg2438;
  (dimensionEcologicaStore as any).puntajeTotalpreg2439;
  (dimensionEcologicaStore as any).puntajeTotalpreg2440;
  (dimensionEcologicaStore as any).puntajeTotalpreg2441;
  (dimensionEcologicaStore as any).puntajeTotalDimensionEcologica24;

  formulariosControl.setDimensionEcologica(
    dimensionEcologicaStore.dimensionEcologica24
  );
  emit('submit', true);
}
</script>
