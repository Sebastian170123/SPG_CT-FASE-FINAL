<template>
  <q-page class="q-ma-md">
    <div class="text-h6 text-center text-weight-medium">
      II.Manejo de la Unidad Productiva Considerando las Dimensiones
    </div>
    <div class="row items-center">
      <div class="col-8">
        <div class="text-subtitle1 text-weight-medium">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.nombre }}
        </div>
      </div>
      <div class="col-4 row justify-end">
        Puntaje:&nbsp;
        <span class="text-primary text-weight-medium">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.puntajeTotal }}
        </span>
        /5
      </div>
    </div>

    <q-form
      @submit="formSocioCulturaPolitSubmit"
      class="row"
      id="FormularioSocioCultPolit"
      @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
    >
      <div class="col-12">
        <q-item-label class="q-my-md">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.preg211.nombre }}
        </q-item-label>
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionPolitica21.preg211.respuesta
          "
          label="Seleccione su respuesta"
          :options="opcLeyes"
          lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionPolitica21.preg211.respuesta
              .label
              ? socioCulturalPoliticaStore.dimensionPolitica21.preg211.respuesta
                  .label
              : ''
          "
          class="col-12"
        />
        <q-item-label class="q-my-md">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.preg212.nombre }}
        </q-item-label>

        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionPolitica21.preg212.respuesta
          "
          label="Seleccione su respuesta"
          :options="opcPreg212"
          lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionPolitica21.preg212.respuesta
              .label
              ? socioCulturalPoliticaStore.dimensionPolitica21.preg212.respuesta
                  .label
              : ''
          "
          class="col-12"
        />

        <q-item-label class="q-my-md">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.preg213.nombre }}
        </q-item-label>
        <div
          class="row col-12"
          v-for="(pregunta, i) in socioCulturalPoliticaStore.dimensionPolitica21
            .preg213.items"
          :key="i"
        >
          <q-select
            v-model="
              socioCulturalPoliticaStore.dimensionPolitica21.preg213.items[i]
                .respuesta
            "
            :label="pregunta.nombre"
            :options="opc213"
            :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
            map-options
            :display-value="
              socioCulturalPoliticaStore.dimensionPolitica21.preg213.items[i]
                .respuesta.label
                ? socioCulturalPoliticaStore.dimensionPolitica21.preg213.items[
                    i
                  ].respuesta.label
                : ''
            "
            class="col-12"
          />
        </div>
        <q-item-label class="q-my-md">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.preg214.nombre }}
        </q-item-label>
        <div
          v-for="(pregunta, i) in socioCulturalPoliticaStore.dimensionPolitica21
            .preg214.items"
          :key="i"
        >
          <q-select
            v-model="
              socioCulturalPoliticaStore.dimensionPolitica21.preg214.items[i]
                .respuesta
            "
            :label="pregunta.nombre"
            :options="opcPreg214"
            lazy-rules
            :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
            map-options
            :display-value="
              socioCulturalPoliticaStore.dimensionPolitica21.preg214.items[i]
                .respuesta.label
                ? socioCulturalPoliticaStore.dimensionPolitica21.preg214.items[
                    i
                  ].respuesta.label
                : ''
            "
            class="col-12"
          />
        </div>

        <q-item-label class="q-my-md">
          {{ socioCulturalPoliticaStore.dimensionPolitica21.preg215.nombre }}
        </q-item-label>
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionPolitica21.preg215.respuesta
          "
          label="Seleccione su respuesta"
          :options="opcPreg215"
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionPolitica21.preg215.respuesta
              .label
              ? socioCulturalPoliticaStore.dimensionPolitica21.preg215.respuesta
                  .label
              : ''
          "
          class="col-12"
        />
      </div>
      <!--DIMENSION SOCIO-ORGANIZATIVA-->
      <div class="col-8">
        <div class="text-subtitle1 text-weight-medium">
          {{ socioCulturalPoliticaStore.dimensionSocioOrganizativa22.nombre }}
        </div>
      </div>
      <div class="col-4 row justify-end">
        Puntaje:&nbsp;
        <span class="text-primary text-weight-medium">
          {{
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.puntajeTotal
          }}
        </span>
         /7
      </div>
      <!--pregunta 2.2.1-->
      <q-item-label class="q-my-md">
        {{
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221.nombre
        }}
      </q-item-label>
      <div
        class="row col-12"
        v-for="(pregunta, i) in socioCulturalPoliticaStore
          .dimensionSocioOrganizativa22.preg221.items"
        :key="i"
      >
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221
              .items[i].respuesta
          "
          :label="pregunta.nombre"
          :options="opcPreg221"
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221
              .items[i].respuesta.label
              ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221
                  .items[i].respuesta.label
              : ''
          "
          class="col-12"
          :disable="respuestasSi221.length == 4"
        >
          <template
            v-slot:after
            v-if="
              socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221
                .items[i].respuesta.value == '0'
            "
          >
            <q-btn
              round
              dense
              flat
              icon="remove"
              color="negative"
              @click="
                socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221.items[
                  i
                ].respuesta = objetoInicial
              "
            />
          </template>
        </q-select>
      </div>

      <!-- SELECTS DE LA DIMENCION SOCIO-ORGNIZATIVA PREG 2.2.2-->
      <q-item-label class="q-my-md">{{
        socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222.nombre
      }}</q-item-label>
      <q-select
        v-model="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
            .respuesta
        "
        label="Seleccione su respuesta"
        :options="opcSiNoPreg222"
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        map-options
        :display-value="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
            .respuesta.label
            ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
                .respuesta.label
            : ''
        "
        class="col-12"
        @update:model-value="actualizaPreg222"
      />
      <q-select
        v-model="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
            .subPreg222.respuesta
        "
        label="¿Cúal?"
        :options="opcDirectiva222"
        map-options
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        :display-value="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
            .subPreg222.respuesta.label
            ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
                .subPreg222.respuesta.label
            : ''
        "
        class="col-12"
        :disable="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222
            .respuesta.label == 'Si'
            ? false
            : true
        "
      />
      <!-- SELECTS DE LA DIMENCION SOCIO-ORGNIZATIVA PREG 2.2.3-->
      <q-item-label class="q-my-md">
        {{
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg223.nombre
        }}
      </q-item-label>
      <div
        class="row col-12"
        v-for="(pregunta, i) in socioCulturalPoliticaStore
          .dimensionSocioOrganizativa22.preg223.items"
        :key="i"
      >
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg223
              .items[i].respuesta
          "
          :label="pregunta.nombre"
          :options="opc223"
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg223
              .items[i].respuesta.label
              ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg223
                  .items[i].respuesta.label
              : ''
          "
          class="col-12"
        />
      </div>

      <!-- SELECTS DE LA DIMENCION SOCIO-ORGNIZATIVA PREG 2.2.4-->
      <div class="q-my-md">
        2.2.4 ¿A cuántas personas que usted ha incentivado están desarrollando
        producción agroecológica? Máximo 4.
      </div>
      <q-form
        @submit.prevent="agregarPersonasIncentivadas(perIncentiv)"
        class="col-12 row shadow-1 q-my-md"
        id="FormularioPersonasIncentivadas"
        @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formIncentivados"
      >
        <q-input
          v-model="perIncentiv.nombre"
          label="Nombre:"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Coloque el nombre',
            (val) =>
              /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
              'Caracteres incorrectos (números o signos)',
          ]"
          class="col-12 q-pa-md"
        />

        <q-input
          type="text"
          label="Lugar"
          v-model="perIncentiv.lugar"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          ]"
          class="col-12 q-pa-md"
        />
        <q-select
          label="Parentesco"
          v-model="perIncentiv.Parentesco"
          :options="opcParentPerIncent"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-12 q-pa-md"
        />
        <q-select
          label="Pertenece alguna organización"
          v-model="perIncentiv.pertOrganz"
          :options="opciónesSiNo"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          class="col-12 q-pa-md"
        />
        <!--botón agregar personas incentivadas pregunta 2.2.4-->
        <div class="col-12 row justify-end q-px-md">
          <q-btn
            type="submit"
            label="agregar"
            color="positive"
            :disable="
              socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg224
                .incentivados.length >= 4
            "
          />
        </div>
        <!--listado de personas incentivadas agregadas-->
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium"
            >Personas Agregadas</span
          >
          <q-list>
            <q-item
              v-for="(persona, i) in socioCulturalPoliticaStore
                .dimensionSocioOrganizativa22.preg224.incentivados"
              :key="i"
              class="no-pading q-my-md"
            >
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label
                      class="text-weight-medium text-subtitle2 text-start col"
                      >Persona N°{{ i + 1 }}</q-item-label
                    >
                    <q-icon
                      class="col-auto cursor-pointer"
                      name="delete"
                      size="1.6rem"
                      color="negative"
                      @click="eliminarPErIncentiv(i)"
                    />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Nombre</q-item-label>
                    <q-item-label>{{ persona.nombre }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Lugar</q-item-label>
                    <q-item-label>{{ persona.lugar }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Parentesco</q-item-label>
                    <q-item-label>{{ persona.Parentesco }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption
                      >Pertenece alguna Organizacion</q-item-label
                    >
                    <q-item-label>{{ persona.pertOrganz }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>

      <!--PREGUNTA 2.2.5-->

      <q-item-label class="q-my-md">
        {{
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg225.nombre
        }}
      </q-item-label>
      <span class="text-subtitle2 text-weight-medium"
        >Asistencia a Capacitaciones</span
      >
      <div
        class="row col-12"
        v-for="(pregunta, i) in socioCulturalPoliticaStore
          .dimensionSocioOrganizativa22.preg225.items"
        :key="i"
      >
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg225
              .items[i].respuesta
          "
          :label="pregunta.nombre"
          :options="opc225"
          lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg225
              .items[i].respuesta.label
              ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg225
                  .items[i].respuesta.label
              : ''
          "
          class="col-12"
        />
      </div>
      <!--pregunta 2.2.6-->
      <q-item-label class="q-my-md">
        {{
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg226.nombre
        }}
      </q-item-label>
      <div
        class="row col-12"
        v-for="(pregunta, i) in socioCulturalPoliticaStore
          .dimensionSocioOrganizativa22.preg226.items"
        :key="i"
      >
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg226
              .items[i].respuesta
          "
          :label="pregunta.nombre"
          :options="opcPreg226"
          lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg226
              .items[i].respuesta.label
              ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg226
                  .items[i].respuesta.label
              : ''
          "
          class="col-12"
        />
      </div>

      <!--Preguntas sin puntaje-->
      <div class="q-my-md">
        2.2.7 ¿Su autoestima ha mejorado con la producción agroecológica?
      </div>
      <q-select
        label="Elija una opción"
        v-model="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg227
        "
        :options="opciónesSiNo"
        :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        class="col-12"
      />
      <!--Pregunta 2.2.8-->
      <div class="q-my-md">
        2.2.8 ¿Ha pensado abandonar la producción agroecológica en algún
        momento?
      </div>
      <q-select
        label="Elija una opción"
        v-model="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
            .respuesta
        "
        :options="opcSiNo228"
        :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        map.options
        :display-value="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
            .respuesta.label
            ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
                .respuesta.label
            : ''
        "
        class="col-12 q-my-md"
      />
      <!-- @update:model-value="actualizaPreg228" -->
      <q-select
        type="text"
        v-model="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
            .subPreg228.respuesta
        "
        :options="opcsubPreg228"
        label="¿Por qué?"
        :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        map.options
        :display-value="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
            .subPreg228.respuesta.label
            ? socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
                .subPreg228.respuesta.label
            : ''
        "
        :disable="
          socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228
            .respuesta.label == 'No'
        "
        class="col-12 q-my-md"
      />

      <!--DIMENSION CULTURAL
      TITULO Y PUNTAJE TOTAL-->
      <div class="col-8">
        <div class="text-subtitle1 text-weight-medium">
          {{ socioCulturalPoliticaStore.dimensionCultural23.nombre }}
        </div>
      </div>
      <div class="col-4 row justify-end">
        Puntaje:&nbsp;
        <span class="text-primary text-weight-medium">
          {{ socioCulturalPoliticaStore.dimensionCultural23.puntajeTotal }}
        </span>
         /8
      </div>

      <!--PREGUNTA 231-->
      <q-item-label class="q-my-md">
        {{ socioCulturalPoliticaStore.dimensionCultural23.preg231.nombre }}
      </q-item-label>
      <q-select
        v-model="
          socioCulturalPoliticaStore.dimensionCultural23.preg231.respuesta
        "
        label="Seleccione su respuesta"
        :options="opcPreg231"
        lazy-rules
        :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
        map-options
        :display-value="
          socioCulturalPoliticaStore.dimensionCultural23.preg231.respuesta.label
            ? socioCulturalPoliticaStore.dimensionCultural23.preg231.respuesta
                .label
            : ''
        "
        class="col-12"
        @update:model-value="actualizaPreg231"
      />
      <q-select
        label="En que luna estamos hoy?"
        v-model="
          socioCulturalPoliticaStore.dimensionCultural23.preg231.subPregunta231
            .respuesta
        "
        :options="opclunaDeHoy"
        lazy-rules
        :rules="[(v) => !!v || 'Debe seleccionar una opción']"
        map-options
        :display-value="
          socioCulturalPoliticaStore.dimensionCultural23.preg231.subPregunta231
            .respuesta.label
            ? socioCulturalPoliticaStore.dimensionCultural23.preg231
                .subPregunta231.respuesta.label
            : ''
        "
        class="col-12"
        :disable="
          socioCulturalPoliticaStore.dimensionCultural23.preg231.respuesta
            .label == 'Si'
            ? false
            : true
        "
      />

      <!-- De acuerdo al siguiente cuadro señale dimension 23 preg231 -->
      <div class="text-subtitle1 text-weight-medium col-12">
        De acuerdo al siguiente cuadro, señale las actividades a realizar.
      </div>
      <q-form
        @submit.prevent="agregarFaseLunar(faseLunar)"
        class="col-12 row shadow-1 q-my-md"
        id="FormularioFaseLunar"
        @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formFaseLunar"
      >
        <q-select
          v-model="faseLunar.lunaNuevaTierna"
          label="Luna Nueva/Tierna"
          :options="opcLunaNuevaTierna"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />
        <q-select
          v-model="faseLunar.lunaCuartoCreciente"
          label="Luna Cuarto Creciente"
          :options="opcLunaCuartoCreciente"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />
        <q-select
          v-model="faseLunar.lunaLlena"
          label="Luna Llena"
          :options="opcLunaLlena"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />
        <q-select
          v-model="faseLunar.lunaMenguante"
          label="Luna Menguante"
          :options="opcLunaMenguante"
          lazy-rules
          :rules="[(v) => !!v || 'Debe seleccionar una opción']"
          use-input
          input-debounce="0"
          class="col-6 q-pa-md"
        />
        <div class="col-12 row justify-end q-px-md">
          <q-btn type="submit" label="agregar" color="positive" />
        </div>

        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium"
            >Fases Lunares Agregadas</span
          >
          <q-list
            v-if="
              socioCulturalPoliticaStore.dimensionCultural23.preg231.faseLunar
                .length > 0
            "
          >
            <q-scroll-area style="height: 200px">
              <q-item
                v-for="(faseLunar, i) in socioCulturalPoliticaStore
                  .dimensionCultural23.preg231.faseLunar"
                :key="i"
                class="q-my-md"
                :class="i % 2 == 0 ? 'bg-grey-3' : ''"
              >
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label
                        class="text-weight-medium text-subtitle2 text-start col"
                      >
                        Fase Lunar N° {{ i + 1 }}</q-item-label
                      >
                      <q-icon
                        class="col-auto cursor-pointer"
                        name="delete"
                        size="1.6rem"
                        color="negative"
                        @click="eliminarFaseLunar(i)"
                      />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                      <div class="col-6 q-my-xs">
                        <q-item-label caption>lunaNuevaTierna</q-item-label>
                        <q-item-label>{{
                          faseLunar.lunaNuevaTierna
                        }}</q-item-label>
                      </div>
                      <div class="col-6 q-my-xs">
                        <q-item-label caption>lunaCuartoCreciente</q-item-label>
                        <q-item-label>{{
                          faseLunar.lunaCuartoCreciente
                        }}</q-item-label>
                      </div>
                      <div class="col-6 q-my-xs">
                        <q-item-label caption>lunaLlena</q-item-label>
                        <q-item-label>{{ faseLunar.lunaLlena }}</q-item-label>
                      </div>
                      <div class="col-6 q-my-xs">
                        <q-item-label caption>lunaMenguante</q-item-label>
                        <q-item-label>{{
                          faseLunar.lunaMenguante
                        }}</q-item-label>
                      </div>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
        </div>
      </q-form>

      <!--PREGUNTA 232-->
      <q-item-label class="q-my-md">
        {{ socioCulturalPoliticaStore.dimensionCultural23.preg232.nombre }}
      </q-item-label>
      <q-select
        v-model="
          socioCulturalPoliticaStore.dimensionCultural23.preg232.respuesta
        "
        label="Seleccione su respuesta"
        :options="opc232"
        map-options
        :display-value="
          socioCulturalPoliticaStore.dimensionCultural23.preg232.respuesta.label
            ? socioCulturalPoliticaStore.dimensionCultural23.preg232.respuesta
                .label
            : ''
        "
        class="col-12"
      />
      <!--pregunta 2.3.3-->
      <q-item-label class="q-my-md">
        {{ socioCulturalPoliticaStore.dimensionCultural23.preg233.nombre }}
      </q-item-label>
      <q-form
        @submit.prevent="agregarPlantayCura(plantasCura)"
        class="col-12 row shadow-1 q-my-md"
        @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formPlnataCuras"
      >
        <q-select
          v-model="plantasCura.plantaMedic"
          label="Seleccione una planta"
          :options="opcPlantasPreg233"
          class="col-12 q-pa-md"
        />
        <q-select
          v-model="plantasCura.cura"
          label="Seleccione una opción"
          :options="opcCuraPreg233"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Campo Oblogatorio ',
          ]"
          class="col-12 q-pa-md"
        />
        <div class="col-12 row justify-end q-px-md">
          <q-btn
            type="submit"
            label="agregar"
            color="positive"
            :disable="
              socioCulturalPoliticaStore.dimensionCultural23.preg233.plantasC
                .length >= 4
            "
          />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium"
            >Plantas Medicinales y Cura Agregadas</span
          >
          <q-list>
            <q-item
              v-for="(planta, i) in socioCulturalPoliticaStore
                .dimensionCultural23.preg233.plantasC"
              :key="i"
              class="no-pading q-my-md"
            >
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label
                      class="text-weight-medium text-subtitle2 text-start col"
                    >
                      Planta Medicinal y Cura N° {{ i + 1 }}</q-item-label
                    >
                    <q-icon
                      class="col-auto cursor-pointer"
                      name="delete"
                      size="1.6rem"
                      color="negative"
                      @click="eliminarPlantaCura(planta, i)"
                    />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Planta Medicinal</q-item-label>
                    <q-item-label>{{ planta.plantaMedic.label }}</q-item-label>
                  </div>
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Cura</q-item-label>
                    <q-item-label>{{ planta.cura }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>

      <!-- PREGUNTA 2.3.4-->
      <q-item-label class="q-my-md">
        {{ socioCulturalPoliticaStore.dimensionCultural23.preg234.nombre }}
      </q-item-label>
      <q-form
        @submit.prevent="agregarSemillaNativa(SemillasNativas)"
        class="col-12 row shadow-1 q-my-md"
        @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })"
        ref="formularioSemillasNativas"
      >
        <q-select
          v-model="SemillasNativas"
          label="Seleccione una Semilla"
          :options="opcSemillasPreg234"
          lazy-rules
          :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
          class="col-12 q-pa-md"
        />

        <div class="col-12 row justify-end q-px-md">
          <q-btn
            type="submit"
            label="agregar"
            color="positive"
            :disable="
              socioCulturalPoliticaStore.dimensionCultural23.preg234.respuesta
                .length >= 4
            "
          />
        </div>
        <div class="q-pa-md col-12">
          <span class="text-subtitle2 text-weight-medium"
            >Semillas Ancestrales o Nativas Agregadas</span
          >
          <q-list>
            <q-item
              v-for="(semilla, i) in socioCulturalPoliticaStore
                .dimensionCultural23.preg234.respuesta"
              :key="i"
              class="no-pading q-my-md"
            >
              <q-item-section>
                <div class="row">
                  <div class="col-12 row items-center">
                    <q-item-label
                      class="text-weight-medium text-subtitle2 text-start col"
                    >
                      Semilla Nativas N° {{ i + 1 }}</q-item-label
                    >
                    <q-icon
                      class="col-auto cursor-pointer"
                      name="delete"
                      size="1.6rem"
                      color="negative"
                      @click="eliminarSemillaNativa(semilla, i)"
                    />
                    <div class="col-12">
                      <q-separator color="dark" class="q-my-xs" />
                    </div>
                  </div>
                  <!--LISTADO DE PLANTAS Y CURA AGREGADOS-->
                  <div class="col-6 q-my-xs">
                    <q-item-label caption>Semilla Nativa</q-item-label>
                    <q-item-label>{{ semilla.label }}</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-form>
      <!--LISTADO DE PLANTAS NATIVAS OPCIONALES-->
      <div
        v-if="
          socioCulturalPoliticaStore.dimensionCultural23.preg234.respuesta
            .length == 4
        "
        class="col-12"
      >
        <div class="col-12">
          {{
            socioCulturalPoliticaStore.dimensionCultural23.preg234Opcional
              .nombre
          }}
        </div>
        <q-form
          @submit.prevent="
            agregarSemillaNativaOpcional(SemillasNativasOpcional)
          "
          class="col-12 row shadow-1 q-my-md"
          ref="formularioSemillasNativasOpcional"
        >
          <q-select
            v-model="SemillasNativasOpcional"
            label="
              Seleccionar semilla
            "
            :options="opcSemillasPreg234"
            lazy-rules
            :rules="[(v) => !!v.value || 'Debe seleccionar una opción']"
            class="col-12 q-pa-md"
          />

          <div class="col-12 row justify-end q-px-md">
            <q-btn type="submit" label="agregar" color="positive" />
          </div>
          <div class="q-pa-md col-12">
            <span class="text-subtitle2 text-weight-medium"
              >Semillas Ancestrales o Nativas Agregadas</span
            >
            <q-list>
              <q-item
                v-for="(semilla, i) in socioCulturalPoliticaStore
                  .dimensionCultural23.preg234Opcional.respuesta"
                :key="i"
                class="no-pading q-my-md"
              >
                <q-item-section>
                  <div class="row">
                    <div class="col-12 row items-center">
                      <q-item-label
                        class="text-weight-medium text-subtitle2 text-start col"
                      >
                        Semilla Nativas N° {{ i + 1 }}</q-item-label
                      >
                      <q-icon
                        class="col-auto cursor-pointer"
                        name="delete"
                        size="1.6rem"
                        color="negative"
                        @click="eliminarSemillaNativaOpcional(semilla, i)"
                      />
                      <div class="col-12">
                        <q-separator color="dark" class="q-my-xs" />
                      </div>
                    </div>
                    <!--LISTADO DE PLANTAS Y CURA AGREGADOS-->
                    <div class="col-6 q-my-xs">
                      <q-item-label caption>Semilla Nativa</q-item-label>
                      <q-item-label>{{ semilla.label }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-form>
      </div>

      <!-- pregunta 2.3.5 -->
      <q-item-label class="q-my-md">
        {{ socioCulturalPoliticaStore.dimensionCultural23.preg235.nombre }}
      </q-item-label>
      <q-select
        v-model="
          socioCulturalPoliticaStore.dimensionCultural23.preg235.respuesta
        "
        label="Seleccione su respuesta"
        :options="opcPreg235"
        map-options
        :display-value="
          socioCulturalPoliticaStore.dimensionCultural23.preg235.respuesta.label
            ? socioCulturalPoliticaStore.dimensionCultural23.preg235.respuesta
                .label
            : ''
        "
        class="col-12"
      />
      <!--pregunta 2.3.6-->
      <q-item-label class="q-my-md">
        {{ socioCulturalPoliticaStore.dimensionCultural23.preg236.nombre }}
      </q-item-label>
      <div
        class="row col-12"
        v-for="(pregunta, i) in socioCulturalPoliticaStore.dimensionCultural23
          .preg236.items"
        :key="i"
      >
        <q-select
          v-model="
            socioCulturalPoliticaStore.dimensionCultural23.preg236.items[i]
              .respuesta
          "
          :label="pregunta.nombre"
          :options="opc236"
          map-options
          :display-value="
            socioCulturalPoliticaStore.dimensionCultural23.preg236.items[i]
              .respuesta.label
              ? socioCulturalPoliticaStore.dimensionCultural23.preg236.items[i]
                  .respuesta.label
              : ''
          "
          class="col-12 q-mb-md"
        />
      </div>

      <q-btn type="submit" label="Continuar" color="primary" class="col-12" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useSocioCulturalPolitica } from 'src/stores/socio-cultural-politica';
import { useFormulariosControl } from 'src/stores/formularios-control';
import { opcionSiNo } from 'src/utils/utils';
import {
  IModeloDeObjetoOpciones,
  IPreg224,
  IPlantasCura,
  IFaseLunar,
  ISemillasNativ,
} from 'src/models/spgct.models';
import { reactive, ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const emit = defineEmits(['submit']);
const socioCulturalPoliticaStore = useSocioCulturalPolitica();
const formulariosControl = useFormulariosControl();
const formIncentivados = ref();
//Funciones para agregar

const opcLeyes = [
  {
    label: 'Ley Orgánica de Economía Popular y Solidaria',
    value: '0',
    puntaje: 1,
  },
  {
    label:
      'Ley Orgánica de Agrobiodiversidad, Semillas y Fomento de la Agricultura Sustentable.',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Ley Orgánica De Tierras Rurales Y Territorios',
    value: ' 2',
    puntaje: 1,
  },
  {
    label: 'Ley Orgánica De Recursos Hídricos, Usos Y Aprovechamiento Del Agua',
    value: '3',
    puntaje: 1,
  },
  {
    label: 'Ley Orgánica Del Régimen De La Soberanía Alimentaria',
    value: '4',
    puntaje: 1,
  },
  {
    label: 'Ordenanza Provincial De Fomento De Producción Agroecológica',
    value: '5',
    puntaje: 1,
  },
  {
    label:
      'Ordenanza Cantonal Para La Comercialización De Productos Agroecológicos',
    value: '6',
    puntaje: 1,
  },
];

const opcPreg212 = [
  {
    label: 'No',
    value: '0',
    puntaje: 0,
  },
  {
    label: 'Si',
    value: '1',
    puntaje: 1,
  },
];
const opc213 = [
  {
    label: 'No',
    value: '0',
    puntaje: 0,
  },
  {
    label: 'Si',
    value: '1',
    puntaje: 0.2,
  },
];
const opcPreg214 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

const opcPreg215 = [
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
//opciónes Dimencion Socio Organizati+-va
const opcPreg221 = [
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

const objetoInicial = {} as IModeloDeObjetoOpciones;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const respuestasSi221 = ref<any>([]);

const opcSiNoPreg222 = [
  {
    label: 'No',
    value: '0',
    puntaje: 0,
  },
  {
    label: 'Si',
    value: '1',
    puntaje: 0.5,
  },
];
const opcDirectiva222 = [
  { label: 'Presidente/a', value: '0', puntaje: 0.5 },
  { label: 'Secretario/a', value: '1', puntaje: 0.5 },
  { label: 'Tesorero/a', value: '2', puntaje: 0.5 },
  { label: 'Vocal', value: '3', puntaje: 0.5 },
  { label: 'Promotor/a', value: '4', puntaje: 0.5 },
  { label: 'Administrador/a', value: '5', puntaje: 0.5 },
  { label: 'Veedor/a', value: '6', puntaje: 0.5 },
];
const opc223 = [
  {
    label: 'Satisfecho',
    value: '0',
    puntaje: 0.25,
  },
  {
    label: 'Poco Satisfecho',
    value: '1',
    puntaje: 0.25,
  },
  {
    label: 'Insatisfecho',
    value: '3',
    puntaje: 0.25,
  },
];
//opcines y valores asiganados a la pregunta 2.2.4
const perIncentiv = ref<IPreg224>({
  nombre: '',
  lugar: '',
  Parentesco: '',
  pertOrganz: '',
  value: '0',
  puntaje: 0.25,
});
const opc225 = [
  {
    label: 'No',
    value: '0',
    puntaje: 0,
  },
  {
    label: 'Si',
    value: '1',
    puntaje: 0.1,
  },
];
const opcPreg226 = [
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

const opcParentPerIncent = [
  'Amistad',
  'Hermano/a',
  'Hijo/a',
  'Madre',
  'Padre',
  'Primo/a',
  'Tío/a',
  'Vecino/a',
];

const opcSiNo228 = [
  { label: 'No', value: '0', puntaje: 0 },
  { label: 'Si', value: '1', puntaje: 0 },
];
const opcsubPreg228 = [
  { label: 'Falta de apoyo del gobierno', value: '0', puntaje: 0 },
  { label: 'Abandonar la organización', value: '1', puntaje: 0 },
  { label: 'Bajo rendimiento y precios bajos', value: '2', puntaje: 0 },
  { label: 'Compartir, amistad, distracción', value: '3', puntaje: 0 },
  { label: 'Contaminación por florícolas aledañas', value: '4', puntaje: 0 },
  { label: 'Falta de mano de obra local', value: '5', puntaje: 0 },
  { label: ' Por edad', value: '6', puntaje: 0 },
  { label: 'Por muchas reuniones', value: '7', puntaje: 0 },
  {
    label: 'Por permanecer a más de dos organizaciones',
    value: '8',
    puntaje: 0,
  },
];
//opciónes de Si o No sin puntaje
const opciónesSiNo = ['Si', 'No'];
//opciónes DIMENSION CULTURAL
const opcPreg231 = [
  {
    label: 'Si',
    value: '0',
    puntaje: 0.5,
  },
  {
    label: 'No',
    value: '1',
    puntaje: 0,
  },
];

/* opc en que luna estamos hoy */

const opclunaDeHoy = [
  { label: 'Luna Nueva/Tierna', value: '0', puntaje: 0.5 },

  { label: 'Luna Cuarta Creciente', value: '1', puntaje: 0.5 },

  { label: 'Luna Llena', value: '2', puntaje: 0.5 },

  { label: 'Luna Menguante', value: '3', puntaje: 0.5 },

  { label: 'Ninguna', value: '4', puntaje: 0 },
];
/* funcion eliminar fase lunar*/
const formFaseLunar = ref();
const faseLunar = ref<IFaseLunar>({
  lunaNuevaTierna: '',
  lunaMenguante: '',
  lunaCuartoCreciente: '',
  lunaLlena: '',
});

const opcLunaNuevaTierna = [
  'Abonar',
  'Deshierbas',
  'Fertilización a la raíz',
  'Siembra de cebada y trigo',
  'Aporque',
  'Podas',
];
const opcLunaCuartoCreciente = [
  'Cosecha de plantas medicinales',
  'Ingertos',
  'Limpieza',
  'Preparación de abono',
  'Preparación de suelo',
  'Siembra',
];
const opcLunaLlena = [
  'Abonar',
  'Control de plagas y enfermedades',
  'Cosecha de semillas de tubérculos',
  'Dejar a luz de luna los abonosy preparados',
  'Siembra',
];
const opcLunaMenguante = [
  'Cirugía de animales',
  'Corte de madera',
  'Cosecha de granos secos',
  'Cosecha de tubérculos ganar peso',
  'Podas de formación',
  'Podas de frutificación',
  'Siembra de tubérculos',
];
const opc232 = [
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
const formPlnataCuras = ref();
const plantasCura = ref<IPlantasCura>({
  plantaMedic: {
    label: '',
    value: '',
    puntaje: 0,
    disable: false,
  },
  cura: '',
});
const opcPlantasPreg233 = ref([
  {
    label: 'Arrayan',
    value: '0',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Borraja',
    value: '1',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Cedrón',
    value: '2',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Cola de Caballo',
    value: '3',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Eucalipto Aromático',
    value: '4',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Hierba Luisa',
    value: '5',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Hierba Mora',
    value: '6',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Insulina',
    value: '7',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Lengua de Suegra',
    value: '8',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Linaza',
    value: '9',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Llanten',
    value: '10',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Manzanilla',
    value: '11',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Marco',
    value: '12',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Matico',
    value: '13',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Menta',
    value: '14',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Orégano',
    value: '15',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Ortiga',
    value: '16',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Romero',
    value: '17',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Ruda',
    value: '18',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Santa María',
    value: '19',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Tomillo',
    value: '20',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Toronjil',
    value: '21',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Trinitaria',
    value: '22',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Zunfo',
    value: '23',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Ninguna',
    value: '24',
    puntaje: 0,
    disable: false,
  },
]);
const opcCuraPreg233 = [
  'Desinflamatorio',
  'Diarrea',
  'Dolor de Garganta',
  'Dolor de estómago',
  'Dolor de huesos',
  'Mal aires',
  'Migrañas',
  'Tos',
  'Cólicos',
  'Sacar Frio',
];
const formularioSemillasNativas = ref();
const formularioSemillasNativasOpcional = ref();
const SemillasNativas = ref<ISemillasNativ>({
  label: '',
  value: '',
  puntaje: 0,
  resultado: 0,
  disable: false,
});
const SemillasNativasOpcional = ref<ISemillasNativ>({
  label: '',
  value: '',
  puntaje: 0,
  resultado: 0,
  disable: false,
});

const opcSemillasPreg234 = reactive([
  {
    label: 'Achocchas',
    value: '0',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Amaranto',
    value: '1',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Arbeja',
    value: '2',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Camote',
    value: '3',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Canguil',
    value: '4',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Cebada',
    value: '5',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Chayote',
    value: '6',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Chia',
    value: '7',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Chochos',
    value: '8',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Chulpi',
    value: '9',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Cilantro',
    value: '10',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Frejol',
    value: '11',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Habas',
    value: '12',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Habillas',
    value: '13',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Jicama',
    value: '14',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Lenteja',
    value: '15',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Linasa',
    value: '16',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Maiz',
    value: '17',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Mashua',
    value: '18',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Mellocos',
    value: '19',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Morocho',
    value: '20',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Papa Gabriela',
    value: '21',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Papa Leona',
    value: '22',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Papa Negra',
    value: '23',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Quinoa',
    value: '24',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Trigo',
    value: '25',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Yuca',
    value: '26',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Zambo',
    value: '27',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Zanahoria Blanca',
    value: '28',
    puntaje: 0.5,
    disable: false,
  },
  {
    label: 'Zapallo',
    value: '29',
    puntaje: 0.5,
    disable: false,
  },
]);

const opcPreg235 = [
  {
    label: 'Intercambio de semillas',
    value: '0',
    puntaje: 1,
  },
  {
    label: 'Tanques hermeticos',
    value: '1',
    puntaje: 1,
  },
  {
    label: 'Selección de semillas',
    value: '2',
    puntaje: 1,
  },
  {
    label: 'Siembra de semillas',
    value: '3',
    puntaje: 1,
  },
  {
    label: 'Prácticas de Conservación de semillas',
    value: '4',
    puntaje: 1,
  },
  {
    label: 'Ninguna',
    value: '5',
    puntaje: 0,
  },
];
const opc236 = [
  {
    label: 'Siembra',
    value: '0',
    puntaje: 0.33,
  },
  {
    label: 'Deshierba',
    value: '1',
    puntaje: 0.33,
  },
  {
    label: 'Aporque',
    value: '2',
    puntaje: 0.33,
  },
  {
    label: 'Cosecha',
    value: '3',
    puntaje: 0.33,
  },
  {
    label: 'Otros',
    value: '4',
    puntaje: 0.33,
  },
];

//Funcion para agregar el boton de agregar
function agregarPersonasIncentivadas(data: IPreg224) {
  perIncentiv.value = {
    nombre: '',
    lugar: '',
    Parentesco: '',
    pertOrganz: '',
    value: '0',
    puntaje: 0.25,
  };
  formIncentivados.value.resetValidation();
  const nuevaPersona = { ...data };
  socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg224.incentivados.push(
    nuevaPersona
  );
}
function agregarFaseLunar(data: IFaseLunar) {
  faseLunar.value = {
    lunaNuevaTierna: '',
    lunaMenguante: '',
    lunaCuartoCreciente: '',
    lunaLlena: '',
  };
  formFaseLunar.value.resetValidation();
  const nuevaFaseLunar = { ...data };
  socioCulturalPoliticaStore.dimensionCultural23.preg231.faseLunar.push(
    nuevaFaseLunar
  );
}
function agregarPlantayCura(data: IPlantasCura) {
  opcPlantasPreg233.value[Number(data.plantaMedic.value)].disable = true;
  plantasCura.value = {
    plantaMedic: {
      label: '',
      value: '',
      puntaje: 0,
      disable: false,
    },
    cura: '',
  };
  formPlnataCuras.value.resetValidation();
  const nuevaPlantaCura = { ...data };
  socioCulturalPoliticaStore.dimensionCultural23.preg233.plantasC.push(
    nuevaPlantaCura
  );
}
function agregarSemillaNativa(data: ISemillasNativ) {
  opcSemillasPreg234[Number(data.value)].disable = true;
  SemillasNativas.value = {
    label: '',
    value: '',
    puntaje: 0,
    resultado: 0,
    disable: false,
  };
  formularioSemillasNativas.value.resetValidation();
  const nuevaSemilla = { ...data };
  socioCulturalPoliticaStore.dimensionCultural23.preg234.respuesta.push(
    nuevaSemilla
  );
}

function agregarSemillaNativaOpcional(data: ISemillasNativ) {
  opcSemillasPreg234[Number(data.value)].disable = true;
  SemillasNativasOpcional.value = {
    label: '',
    value: '',
    puntaje: 0,
    resultado: 0,
    disable: false,
  };
  formularioSemillasNativasOpcional.value.resetValidation();
  const nuevaSemilla = { ...data };
  socioCulturalPoliticaStore.dimensionCultural23.preg234Opcional.respuesta.push(
    nuevaSemilla
  );
}

//Funciones para eliminar
function eliminarPErIncentiv(index: number): void {
  socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg224.incentivados.splice(
    index,
    1
  );
}
function eliminarFaseLunar(index: number): void {
  socioCulturalPoliticaStore.dimensionCultural23.preg231.faseLunar.splice(
    index,
    1
  );
}
function eliminarPlantaCura(data: IPlantasCura, index: number): void {
  opcPlantasPreg233.value[Number(data.plantaMedic.value)].disable = false;
  socioCulturalPoliticaStore.dimensionCultural23.preg233.plantasC.splice(
    index,
    1
  );
}
function eliminarSemillaNativa(data: ISemillasNativ, index: number): void {
  opcSemillasPreg234[Number(data.value)].disable = false;
  socioCulturalPoliticaStore.dimensionCultural23.preg234.respuesta.splice(
    index,
    1
  );
}
function eliminarSemillaNativaOpcional(
  data: ISemillasNativ,
  index: number
): void {
  opcSemillasPreg234[Number(data.value)].disable = false;
  socioCulturalPoliticaStore.dimensionCultural23.preg234Opcional.respuesta.splice(
    index,
    1
  );
}
watch(socioCulturalPoliticaStore, () => {
  respuestasSi221.value =
    socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg221.items.filter(
      (e) => e.respuesta.value == '0'
    );
}).length;

function actualizaPreg222(value: IModeloDeObjetoOpciones) {
  if (value.label == 'No') {
    socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg222.subPreg222.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}
function actualizaPreg231(value: IModeloDeObjetoOpciones) {
  if (value.label == 'NO') {
    socioCulturalPoliticaStore.dimensionCultural23.preg231.subPregunta231.respuesta =
      {} as IModeloDeObjetoOpciones;
  }
}
/* function actualizaPreg228(value: IModeloDeObjetoOpciones) {
  if (value.label == 'No') {
    socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg228=
      {} as IModeloDeObjetoOpciones;
  }
} */

function formSocioCulturaPolitSubmit() {
  /*  if (
    socioCulturalPoliticaStore.dimensionSocioOrganizativa22.preg224.incentivados
      .length == 0
  ) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo una persona incentivada',
    });
    return;
  } */

  /* if (
    socioCulturalPoliticaStore.dimensionCultural23.preg231.faseLunar.length == 0
  ) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo una fase lunar',
    });
    return;
  } */

  if (
    socioCulturalPoliticaStore.dimensionCultural23.preg233.plantasC.length == 0
  ) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo una planta medicinal y dolencia que cura',
    });
    return;
  }
  if (
    socioCulturalPoliticaStore.dimensionCultural23.preg234.respuesta.length == 0
  ) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar minimo una semilla nativa o ancestral',
    });
    return;
  }

  formulariosControl.setDimensionSocialCulturalPolitica(
    socioCulturalPoliticaStore.$state
  );
  emit('submit', true);
}
</script>
