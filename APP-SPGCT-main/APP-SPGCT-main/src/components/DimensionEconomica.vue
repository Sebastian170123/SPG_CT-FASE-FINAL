<template>
  <q-page class="q-ma-md">
    <div class="row items-center">
      <div class="col-8">
        <div class="text-subtitle1 text-weight-medium">
          2.5. Dimensión Económica
        </div>
      </div>
      <div class="col-4 row justify-end">
        Puntaje:&nbsp;
        <span class="text-primary text-weight-medium">
          {{ dimensionEconomica.dimensionEconomica25.puntajeTotal }}
        </span>
        /15
      </div>
    </div>

    <q-form @submit="formDimEconomicaSubmit" class="row" id="FormDimEconomica"
      @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })">
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg251.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEconomica.dimensionEconomica25.preg251.respuesta" :options="opcionesGanaPierdeChackra"
        lazy-rules :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options :display-value="dimensionEconomica.dimensionEconomica25.preg251.respuesta.label
          ? dimensionEconomica.dimensionEconomica25.preg251.respuesta.label
          : ''
          " class="col-12" />
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg251.subpreg.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEconomica.dimensionEconomica25.preg251.subpreg.respuesta
        " :options="opcionesGanaPierdeChackraSiNo" lazy-rules
        :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options :display-value="dimensionEconomica.dimensionEconomica25.preg251.subpreg.respuesta
          .label
          ? dimensionEconomica.dimensionEconomica25.preg251.subpreg.respuesta
            .label
          : ''
          " class="col-12" />

      <q-input label="¿Por qué?" v-model="dimensionEconomica.dimensionEconomica25.preg251.subpreg.porque" lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Llene el Campo',
          (val) => /^[A-Za-z_ ]+$/.test(val) || 'Solo Letras)',
        ]" class="col-12" :disable="dimensionEconomica.dimensionEconomica25.preg251.subpreg.respuesta
          .label === 'No'
          ? true
          : false
          " />
      <!-- Formulario comercializacion -->
      <div class="text-subtitle1 text-weight-medium">Comercializacion</div>
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg252.nombre }}
      </q-item-label>
      <q-form @submit.prevent="agregarRubro(rubro)" class="col-12 row shadow-1 q-my-md" id="FormularioRubro"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioRubro">
        <q-select v-model="rubro.productos" label="Productos" :options="opcRubros" lazy-rules
          :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options
          :display-value="rubro.productos.label ? rubro.productos.label : ''" class="col-6 q-pa-md" />






        <q-field label="Ingresos Semanales:" stack-label class="col-6 q-pa-md">
          <template v-slot:control>
            <div class="self-center full-width no-outline text-body1" tabindex="0">
              {{
                Number(rubro.pieFinca) +
                Number(rubro.feria) +
                Number(rubro.canasta) +
                Number(rubro.autoconsumo) +
                Number(rubro.trueque)
              }}
              <span class="text-dark">USD</span>
            </div>
          </template>
        </q-field>




        <q-intem-label class="col-12 q-px-md">
          Destino de la producción
        </q-intem-label>
        <q-input type="number" v-model="rubro.pieFinca" label="Pie finca:" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque un valor',
          (val) => (val >= 0 && val <= 500) || 'Solo numeros'

        ]" class="col-6 q-pa-md">
          <template v-slot:after>
            <span class="text-dark">$</span>
          </template>
        </q-input>
        <q-input type="number" v-model="rubro.feria" label="Feria:" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque un valor',
          (val) => (val >= 0 && val <= 500) || 'Solo numeros',
        ]" class="col-6 q-pa-md">
          <template v-slot:after>
            <span class="text-dark">$</span>
          </template>
        </q-input>

        <q-input type="number" v-model="rubro.canasta" label="Canasta:" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque un valor',
          (val) => (val >= 0 && val <= 500) || 'Solo numeros',
        ]" class="col-6 q-pa-md">
          <template v-slot:after>
            <span class="text-dark">$</span>
          </template>
        </q-input>
        <q-input type="number" v-model="rubro.autoconsumo" label="Auto consumo:" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque un valor',
          (val) => (val >= 0 && val <= 500) || 'Solo numeros',
        ]" class="col-6 q-pa-md">
          <template v-slot:after>
            <span class="text-dark">$</span>
          </template>
        </q-input>
        <q-input type="number" v-model="rubro.trueque" label="Trueque:" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque un valor',
          (val) => (val >= 0 && val <= 500) || 'Solo numeros',
        ]" class="col-6 q-pa-md">
          <template v-slot:after>
            <span class="text-dark">$</span>
          </template>
        </q-input>

        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive"
            :disable="dimensionEconomica.puntajetotalpreg252 >= 8" />
        </div>

        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Rubros Agregados</span>
          <q-list>
            <q-item v-for="(rubro, i) in dimensionEconomica.dimensionEconomica25.preg252.rubros" :key="i"
              class="no-padding q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                      Producto N° {{ i + 1 }}
                    </q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarRubro(rubro, i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Producto</q-item-label>
                    <q-item-label>{{ rubro.productos.label }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Ingresos semanales</q-item-label>
                    <q-item-label>
                      {{
                        Number(rubro.pieFinca) +
                        Number(rubro.feria) +
                        Number(rubro.canasta) +
                        Number(rubro.autoconsumo) +
                        Number(rubro.trueque)
                      }}$
                    </q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Pie finca</q-item-label>
                    <q-item-label>{{ rubro.pieFinca }}$</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Feria</q-item-label>
                    <q-item-label>{{ rubro.feria }}$</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Canasta</q-item-label>
                    <q-item-label>{{ rubro.canasta }}$</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>AutoConsumo</q-item-label>
                    <q-item-label>{{ rubro.autoconsumo }}$</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Trueque</q-item-label>
                    <q-item-label>{{ rubro.trueque }}$</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

      </q-form>
      <!-- Formulario Procesados -->
      <!-- pregunta 2.5.3 -->
      <div class="text-subtitle1 text-weight-medium">Procesados</div>
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg253.nombre }}
      </q-item-label>
      <q-form @submit.prevent="agregarProcesado(procesado)" class="col-12 row shadow-1 q-my-md" id="FormularioProcesado"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioProcesado">
        <div class="col-6 row">
          <q-item-label class="col-12 q-pt-md q-px-md"> Producto </q-item-label>
          <q-select v-model="procesado.productos" :options="opcProcesados" lazy-rules
            :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options :display-value="procesado.productos.label ? procesado.productos.label : ''
              " class="col-12 q-pa-md" />
        </div>
        <div class="col-6 row">
          <q-item-label class="col-12 q-pt-md q-px-md">
            ¿Qué productos de la parcela utiliza?
          </q-item-label>
          <q-select v-model="procesado.prodUtiliza" :options="(dimensionEcologica as any).productosChacra" lazy-rules
            :rules="[(v) => !!v || 'Debe seleccionar una opción']" class="col-12 q-pa-md" />
        </div>
        <div class="col-12 row" v-if="procesado.productos.label == 'Otros'">
          <q-input v-model="procesado.otrosProductos" label="¿Cúal?" lazy-rules
            :rules="[(val) => (val !== null && val !== '') || 'Llene el Campo']" class="col-12 q-pa-md" />
        </div>
        <q-item-label class="col-12 q-pt-md q-px-md">
          ¿Qué insumos compra fuera de la parcela para complementar los
          procesados?
        </q-item-label>
        <q-input type="text" v-model="procesado.insumosFuera" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Llene el Campo']" class="col-12 q-pa-md" />

        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive"
            :disable="dimensionEconomica.puntajeTotalpreg253 >= 2" />
        </div>

        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Productos procesados Agregados</span>
          <q-list>
            <q-item v-for="(proc, i) in dimensionEconomica.dimensionEconomica25
              .preg253.prodProcesados" :key="i" class="no-padding q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                      Producto N° {{ i + 1 }}</q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarProcesado(proc, i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Producto</q-item-label>
                    <q-item-label>{{ proc.productos.label }}</q-item-label>
                  </div>

                  <div class="col-6 q-my-xs" v-if="proc.productos.label == 'Otros'">
                    <q-item-label caption>Producto Adicional</q-item-label>
                    <q-item-label>{{ proc.otrosProductos }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Producto de la chacra que utiliza
                    </q-item-label>
                    <q-item-label>{{ proc.prodUtiliza }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Insumo fuera de la chara</q-item-label>
                    <q-item-label>{{ proc.insumosFuera }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg253.subpreg.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEconomica.dimensionEconomica25.preg253.subpreg.respuesta
        " :options="opcCajaDeAhorro" lazy-rules :rules="[(v) => !!v.label || 'Debe seleccionar una opción']"
        map-options :display-value="dimensionEconomica.dimensionEconomica25.preg253.subpreg.respuesta
          .label
          ? dimensionEconomica.dimensionEconomica25.preg253.subpreg.respuesta
            .label
          : ''
          " class="col-12" />
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg253.subpreg2.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEconomica.dimensionEconomica25.preg253.subpreg2.respuesta
        " :options="opcActividadCredito" lazy-rules :rules="[(v) => !!v.label || 'Debe seleccionar una opción']"
        map-options :display-value="dimensionEconomica.dimensionEconomica25.preg253.subpreg2.respuesta
          .label
          ? dimensionEconomica.dimensionEconomica25.preg253.subpreg2.respuesta
            .label
          : ''
          " class="col-12" />
      <!-- :disable="
          dimensionEconomica.dimensionEconomica25.preg253.subpreg.respuesta
            .label === 'No'
        " -->
      <!-- preg254 -->
      <div class="text-subtitle1 text-weight-medium">
        Destino de la producción
      </div>
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg254.nombre }}
      </q-item-label>
      <q-select v-model="dimensionEconomica.dimensionEconomica25.preg254.respuesta" :options="opcMejoraFeria" lazy-rules
        :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options :display-value="dimensionEconomica.dimensionEconomica25.preg254.respuesta.label
          ? dimensionEconomica.dimensionEconomica25.preg254.respuesta.label
          : ''
          " class="col-12" />
      <!-- preg255 -->
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg255.nombre }}
      </q-item-label>
      <q-form @submit.prevent="agregarCanastaFamiliar(canastaFamiliar)" class="col-12 row shadow-1 q-my-md"
        id="FormularioCanastaFamiliar"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioCanastaFamiliar">
        <div class="col-12 row">
          <q-select label="Canasta Familiar" v-model="canastaFamiliar.productos" :options="opcCanastaFamiliar"
            lazy-rules :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options :display-value="canastaFamiliar.productos.label
              ? canastaFamiliar.productos.label
              : ''
              " class="col-8 q-pa-md" />
          <q-input type="number" v-model="canastaFamiliar.porcentaje" label="$" lazy-rules :rules="[
            (val) => (val !== null && val !== '') || 'Coloque un valor',
            (val) => (val > 0 && val <= 500) || 'Solo numeros',
          ]" class="col-4 q-pa-md" />
        </div>

        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive"
            :disable="dimensionEconomica.puntajeTotalpreg255 >= 2" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Canastas agregadas</span>
          <q-list>
            <q-item v-for="(canasta, i) in dimensionEconomica.dimensionEconomica25
              .preg255.canastaFamiliar" :key="i" class="no-padding q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                      Canasta familiar N° {{ i + 1 }}</q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarCanastaFamiliar(i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Canasta</q-item-label>
                    <q-item-label>{{ canasta.productos.label }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Porcentaje </q-item-label>
                    <q-item-label>{{ canasta.porcentaje }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>
      <!-- preg255 -->

      <q-form @submit.prevent="agregarInsumo(insumo)" class="col-12 row shadow-1 q-my-md" id="FormularioInsumo"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioInsumo">
        <div class="col-12 row">
          <q-select label="Insumos" v-model="insumo.productos" :options="opcInsumos" lazy-rules
            :rules="[(v) => !!v.label || 'Debe seleccionar una opción']" map-options :display-value="insumo.productos.label ? insumo.productos.label : ''
              " class="col-8 q-pa-md" />
          <q-input type="number" v-model="insumo.porcentaje" label="$" lazy-rules :rules="[
            (val) => (val !== null && val !== '') || 'Coloque un valor',
            (val) => (val > 0 && val <= 500) || 'Solo numeros',
          ]" class="col-4 q-pa-md" />
        </div>
        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive"
            :disable="dimensionEconomica.puntajeTotalpreg255 >= 2" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Insumos agregados</span>
          <q-list>
            <q-item v-for="(ins, i) in dimensionEconomica.dimensionEconomica25.preg255
              .Insumos" :key="i" class="no-padding q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                      Insumo N° {{ i + 1 }}</q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarInsumo(i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Insumo</q-item-label>
                    <q-item-label>{{ ins.productos.label }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Porcentaje </q-item-label>
                    <q-item-label>{{ ins.porcentaje }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>
      <!-- preg256 -->
      <q-item-label class="col-12">
        {{ dimensionEconomica.dimensionEconomica25.preg256.nombre }}
      </q-item-label>
      <q-form @submit.prevent="agregarCosumidorFiel(consumidorFiel)" class="col-12 row shadow-1 q-my-md"
        id="FormularioConsumidorFiel"
        @validation-error="(ref: any) => ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="FormularioConsumidorFiel">
        <q-input label="Nombre del consumidor" v-model="consumidorFiel.nombreConsumidor" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Coloque el nombre',
          (val) =>
            /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]" class="col-6 q-pa-md" />
        <q-input label="Lugar de procedencia" v-model="consumidorFiel.lugarProcedencia" lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Llene el Campo']" class="col-6 q-pa-md" />
        <q-select v-model="consumidorFiel.productoCompra" label="¿Qué productos compra?"
          :options="opcProductosConsumidor" lazy-rules :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-12 q-pa-md" />
        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium">Consumidores fieles agregados</span>
          <q-list>
            <q-item v-for="(consFiel, i) in dimensionEconomica.dimensionEconomica25
              .preg256.consumidoresIdentificados" :key="i" class="no-padding q-my-md">
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label class="text-weight-medium text-subtitle2 text-start col">
                      Consumidor fiel N° {{ i + 1 }}</q-item-label>
                    <q-icon class="col-auto cursor-pointer" name="delete" size="1.6rem" color="negative"
                      @click="eliminarConsumidor(i)" />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Nombre</q-item-label>
                    <q-item-label>{{ consFiel.nombreConsumidor }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Lugar procedencia </q-item-label>
                    <q-item-label>{{ consFiel.lugarProcedencia }}</q-item-label>
                  </div>
                  <div class="col-12 q-my-xs">
                    <q-item-label caption>Compra </q-item-label>
                    <q-item-label>{{
                      consFiel.productoCompra.label
                    }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>
      <q-btn type="submit" label="Continuar" color="primary" class="col-12" />
    </q-form>
  </q-page>
</template>
<script setup lang="ts">
import { useDimensionEconomica } from 'src/stores/dimension-economica';
import {
  IComercializacion,
  IConsumidoresIdentificados,
  IProcesados,
  IReinvierteParcela,
} from 'src/models/spgct.models';

import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useDimensionEcologica } from 'src/stores/dimension-ecologica';
import { useFormulariosControl } from 'src/stores/formularios-control';
// import { IProductor } from 'src/models/spgct.models';
// import { useProductor } from 'src/stores/backend/Productor';
// const productorStore = useProductor();
const $q = useQuasar();
const emit = defineEmits(['submit']);
const formulariosControl = useFormulariosControl();
const dimensionEconomica = useDimensionEconomica();
const dimensionEcologica = useDimensionEcologica();
const FormularioRubro = ref();
const FormularioProcesado = ref();
const FormularioCanastaFamiliar = ref();
const FormularioInsumo = ref();
const FormularioConsumidorFiel = ref();

watch(dimensionEconomica, () => {
  return;
});

const opcionesGanaPierdeChackra = [
  {
    label: 'Lleva registros de ingresos y gastos',
    value: 0,
    puntaje: 1
  },
  {
    label: 'Tiene cuaderno de apuntes',
    value: 1,
    puntaje: 1
  },
  {
    label: 'No registra nada',
    value: 2,
    puntaje: 0
  },
];
const opcionesGanaPierdeChackraSiNo = [
  { label: 'Si', value: 0, puntaje: 1 },
  { label: 'No', value: 1, puntaje: 0 },
];

const opcRubros = ref([
  {
    label: 'Hortalizas',
    value: 0,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Frutales',
    value: 1,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Granos',
    value: 2,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Lácteos',
    value: 3,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Huevos',
    value: 4,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Tubérculos',
    value: 5,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Cárnicos',
    value: 6,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Comidas preparadas',
    value: 7,
    puntaje: 0.8,
    disable: false,
  },
  {
    label: 'Plantas Medicinales',
    value: 8,
    puntaje: 0.8,
    disable: false,
  },

  { label: 'Harinas', value: 9, puntaje: 0.8, disable: false },
  { label: 'Artesanias', value: 10, puntaje: 0.8, disable: false },
  { label: 'Otros', value: 11, puntaje: 0.8, disable: false },
]);
const opcProcesados = [
  { label: 'Comidas', value: '0', puntaje: 0.33, disable: false },
  { label: 'Harinas', value: '1', puntaje: 0.33, disable: false },
  { label: 'Tortillas o Empanadas', value: '2', puntaje: 0.33, disable: false },
  { label: 'Chochos con tostado', value: '3', puntaje: 0.33, disable: false },
  { label: 'Jugos', value: '4', puntaje: 0.33, disable: false },
  { label: 'Mermeladas', value: '5', puntaje: 0.33, disable: false },
  { label: 'Huevos', value: '6', puntaje: 0.33, disable: false },
  { label: 'Mishke', value: '7', puntaje: 0.33, disable: false },
  { label: 'Miel de mishke', value: '8', puntaje: 0.33, disable: false },
  { label: 'Guarango', value: '9', puntaje: 0.33, disable: false },
  {
    label: 'Surtido de aromáticas',
    value: '10',
    puntaje: 0.33,
    disable: false,
  },
  { label: 'Ocas', value: '11', puntaje: 0.33, disable: false },
  { label: 'Camote', value: '12', puntaje: 0.33, disable: false },
  { label: 'Mashua', value: '13', puntaje: 0.33, disable: false },
  { label: 'Jícama', value: '14', puntaje: 0.33, disable: false },
  { label: 'Dulce de higo', value: '15', puntaje: 0.33, disable: false },
  { label: 'Miel de abeja', value: '16', puntaje: 0.33, disable: false },
  { label: 'Tostados', value: '17', puntaje: 0.33, disable: false },
  { label: 'Postres', value: '18', puntaje: 0.33, disable: false },
  { label: 'Pan de casa', value: '19', puntaje: 0.33, disable: false },
  { label: 'Empanadas de zambo', value: '20', puntaje: 0.33, disable: false },
  { label: 'Frutos secos', value: '21', puntaje: 0.33, disable: false },
  { label: 'Otros', value: '22', puntaje: 0.33, disable: false },
];
const opcCajaDeAhorro = [
  { label: 'No', value: 0, puntaje: 0 },
  { label: 'Si', value: 1, puntaje: 1 },
];
const opcActividadCredito = [
  { label: 'Agrícola', value: 0, puntaje: 0 },
  { label: 'Ganaderia', value: 1, puntaje: 0 },
  { label: 'Vivienda', value: 2, puntaje: 0 },
  { label: 'Educación', value: 3, puntaje: 0 },
  { label: 'Salud', value: 4, puntaje: 0 },
  { label: 'Otros', value: 5, puntaje: 0 },
];
const opcMejoraFeria = [
  { label: 'Incentivar al productor/a', value: 0, puntaje: 0 },
  { label: 'Charlas', value: 1, puntaje: 0 },
  { label: 'Capacitaciones', value: 2, puntaje: 0 },
  { label: 'Publicidad', value: 3, puntaje: 0 },
];
const opcCanastaFamiliar = [
  { label: 'Educación', value: 0, puntaje: 0.25 },
  { label: 'Salud', value: 1, puntaje: 0.25 },
  { label: 'Alimentación', value: 2, puntaje: 0.25 },
  { label: 'Vivienda', value: 3, puntaje: 0.25 },
  { label: 'Servicios básicos', value: 4, puntaje: 0.25 },
];
const opcInsumos = [
  { label: 'Accesorios de riego', value: 0, puntaje: 0.25 },
  { label: 'Herramientas', value: 1, puntaje: 0.25 },
  { label: 'Compra de animales', value: 2, puntaje: 0.25 },
  { label: 'Semillas', value: 3, puntaje: 0.25 },
  { label: 'Infraestructura', value: 4, puntaje: 0.25 },
];
const opcProductosConsumidor = [
  { label: 'Hortalizas y legumbres', value: 0, puntaje: 0 },
  { label: 'Frutas', value: 1, puntaje: 0 },
  { label: 'Productos cárnicos, lácteos, huevos', value: 2, puntaje: 0 },
  { label: 'Harinas y/o procesados', value: 3, puntaje: 0 },
  { label: 'Varios', value: 4, puntaje: 0 },
  { label: 'Otros', value: 5, puntaje: 0 },
];
const rubro = ref<IComercializacion>({
  productos: {
    label: '',
    value: null,
    puntaje: 0,
    disable: false,
  },
  autoconsumo: 0,
  canasta: 0,
  feria: 0,
  ingresosSemanales: 0,
  pieFinca: 0,
  trueque: 0,
});
const procesado = ref<IProcesados>({
  productos: {
    label: '',
    value: null,
    puntaje: 0,
    disable: false,
  },
  otrosProductos: '',
  prodUtiliza: '',
  insumosFuera: '',
});

const canastaFamiliar = ref<IReinvierteParcela>({
  productos: {
    label: null,
    value: null,
    puntaje: null,
  },
  porcentaje: null,
});
const insumo = ref<IReinvierteParcela>({
  productos: {
    label: null,
    value: null,
    puntaje: null,
  },
  porcentaje: null,
});
const consumidorFiel = ref<IConsumidoresIdentificados>({
  nombreConsumidor: '',
  lugarProcedencia: '',
  productoCompra: {
    label: '',
    value: '',
    puntaje: 0,
  },
});
function agregarRubro(data: IComercializacion) {
  opcRubros.value[Number(data.productos.value)].disable = true;
  rubro.value = {
    productos: {
      label: '',
      value: 0,
      puntaje: 0,
      disable: false,
    },
    autoconsumo: 0,
    canasta: 0,
    feria: 0,
    ingresosSemanales: 0,
    pieFinca: 0,
    trueque: 0,
  };
  FormularioRubro.value.resetValidation();
  const nuevoRubro = { ...data };
  dimensionEconomica.dimensionEconomica25.preg252.rubros.push(nuevoRubro);
}

function agregarProcesado(data: IProcesados) {
  opcProcesados[Number(data.productos.value)].disable = true;
  procesado.value = {
    productos: {
      label: '',
      value: 0,
      puntaje: 0,
      disable: false,
    },
    otrosProductos: '',
    insumosFuera: '',
    prodUtiliza: '',
  };
  FormularioProcesado.value.resetValidation();
  const nuevoRubro = { ...data };
  dimensionEconomica.dimensionEconomica25.preg253.prodProcesados.push(
    nuevoRubro
  );
}

function agregarCanastaFamiliar(argCanastaFamiliar: IReinvierteParcela) {
  canastaFamiliar.value = {
    productos: {
      label: null,
      value: null,
      puntaje: null,
    },
    porcentaje: null,
  };

  FormularioCanastaFamiliar.value.resetValidation();
  const nuevoCanastaFamiliar = { ...argCanastaFamiliar };

  dimensionEconomica.dimensionEconomica25.preg255.canastaFamiliar.push(
    nuevoCanastaFamiliar
  );
}

function agregarInsumo(argInsumo: IReinvierteParcela) {
  insumo.value = {
    productos: {
      label: null,
      value: null,
      puntaje: null,
    },
    porcentaje: null,
  };

  FormularioInsumo.value.resetValidation();

  const nuevoInsumo = { ...argInsumo };

  dimensionEconomica.dimensionEconomica25.preg255.Insumos.push(nuevoInsumo);
}

function agregarCosumidorFiel(consumidor: IConsumidoresIdentificados) {
  consumidorFiel.value = {
    nombreConsumidor: '',
    lugarProcedencia: '',
    productoCompra: {
      label: '',
      value: '',
      puntaje: 0,
    },
  };

  FormularioConsumidorFiel.value.resetValidation();
  const nuevoConsumido = { ...consumidor };

  dimensionEconomica.dimensionEconomica25.preg256.consumidoresIdentificados.push(
    nuevoConsumido
  );
  console.log('producto agregado', consumidorFiel);
}

function eliminarRubro(data: IComercializacion, index: number): void {
  opcRubros.value[index].disable = false;
  dimensionEconomica.dimensionEconomica25.preg252.rubros.splice(index, 1);
}

function eliminarProcesado(data: IProcesados, index: number): void {
  opcProcesados[index].disable = false;
  dimensionEconomica.dimensionEconomica25.preg253.prodProcesados.splice(
    index,
    1
  );
}
function eliminarCanastaFamiliar(index: number): void {
  dimensionEconomica.dimensionEconomica25.preg255.canastaFamiliar.splice(
    index,
    1
  );
}
function eliminarInsumo(index: number): void {
  dimensionEconomica.dimensionEconomica25.preg255.Insumos.splice(index, 1);
}
function eliminarConsumidor(index: number): void {
  dimensionEconomica.dimensionEconomica25.preg256.consumidoresIdentificados.splice(
    index,
    1
  );
}

function formDimEconomicaSubmit() {
  if (dimensionEconomica.dimensionEconomica25.preg252.rubros.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo un rubro',
    });
    return;
  }
  if (
    dimensionEconomica.dimensionEconomica25.preg255.canastaFamiliar.length == 0
  ) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo una canasata familiar',
    });
    return;
  }
  if (dimensionEconomica.dimensionEconomica25.preg255.Insumos.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo un insumo',
    });
    return;
  }
  if (
    dimensionEconomica.dimensionEconomica25.preg256.consumidoresIdentificados
      .length == 0
  ) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo un consumidor fiel',
    });
    return;
  }

  dimensionEconomica.puntajetotalpreg251;
  dimensionEconomica.puntajetotalpreg252;
  dimensionEconomica.puntajeTotalpreg253;
  dimensionEconomica.puntajeTotalpreg254;
  dimensionEconomica.puntajeTotalpreg255;
  dimensionEconomica.puntajeTotalpreg256;
  dimensionEconomica.puntajeTotalDimensionEconomica25;

  formulariosControl.setDimensionEconomica(
    dimensionEconomica.dimensionEconomica25
  );
  formulariosControl.guardarInformacionEnLocalStorage();
  emit('submit', true);


};


</script>
