<template>

  <div>
    <q-table flat bordered title="Veedores" :rows="rows" :columns="columns" row-key="name" binary-state-sort
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

          <q-td key="ubichacra" :props="props">

            <q-list>
              <q-item v-ripple v-for="(chacra, i) in props.row.ubichacra" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Chacra N. {{ i + 1
                    }}</q-item-label>
                  <q-item-label>Provincia: {{ chacra.provincia }}</q-item-label>
                  <q-item-label>Canton: {{ chacra.canton }}</q-item-label>
                  <q-item-label>Parroquia: {{ chacra.parroquia }}</q-item-label>
                  <q-item-label>Comunidad: {{ chacra.comunidad }}</q-item-label>
                  <q-item-label>Barrio: {{ chacra.barrio }}</q-item-label>
                  <q-item-label>Latitud: {{ chacra.coordenadas.latitud }}</q-item-label>
                  <q-item-label>Longitud: {{ chacra.coordenadas.longitud }}</q-item-label>
                  <q-item-label>Altura: {{ chacra.coordenadas.altura }}</q-item-label>
                  <q-item-label>Zona: {{ chacra.zona }}</q-item-label>
                  <q-item-label>Clave: {{ chacra.clave }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

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
            <q-list>
              <q-item v-for="(terreno, i) in props.row.tiposTerrenos" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Terreno N.{{ i + 1 }}
                  </q-item-label>
                  <q-item-label>Tipo terreno:{{ terreno.tiposTerrenos }}</q-item-label>
                  <q-item-label>Terreno riego:{{ terreno.terrenosRiego }}</q-item-label>
                  <q-item-label>Area terreno:{{ terreno.areaTerreno }}</q-item-label>
                  <q-item-label>Perimetro total:{{ terreno.perimetroTotal }}</q-item-label>
                  <q-item-label>Metro sembrado:{{ terreno.metroSembrado }}</q-item-label>
                  <q-item-label>Nivel Inclinacion:{{ terreno.nivelInclinacion }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="totalMetrosCuadrados" :props="props">
            {{ props.row.totalMetrosCuadrados }}
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
          <q-td key="DP213" :props="props">
            <q-list>
              <q-item v-for="(DP213, i) in props.row.DP213" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14 "></q-item-label>
                  <q-item-label class="text-weight-regular">{{ i + 1 }}.{{ DP213.nombre }}:{{
                    DP213.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDP213" :props="props">
            {{ props.row.PuntajeDP213 }}
          </q-td>
          <q-td key="DP214" :props="props">
            <q-list>
              <q-item v-for="(DP214, i) in props.row.DP214" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14"></q-item-label>
                  <q-item-label class="text-weight-regular">{{ i + 1 }}.{{ DP214.nombre }}:{{
                    DP214.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDP214" :props="props">
            {{ props.row.PuntajeDP214 }}
          </q-td>
          <q-td key="DP215" :props="props">
            {{ props.row.DP215 }}
          </q-td>
          <q-td key="PuntajeDP215" :props="props">
            {{ props.row.PuntajeDP215 }}
          </q-td>
          <q-td key="DSO221" :props="props">
            <q-list>
              <q-item v-for="(DSO221, i) in props.row.DSO221" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-pink-10"></q-item-label>
                  <q-item-label>{{ i + 1 }} . {{ DSO221.nombre }}:{{ DSO221.respuesta.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
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
          <q-td key="DSO223" :props="props">
            <q-list>
              <q-item v-for="(DSO223, i) in props.row.DSO223" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-pink-10"></q-item-label>
                  <q-item-label>{{ i + 1 }} .{{ DSO223.nombre }}:{{ DSO223.respuesta.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDSO223" :props="props">
            {{ props.row.PuntajeDSO223 }}
          </q-td>
          <q-td key="DSO224" :props="props">
            <q-list>
              <q-item v-for="(incentivados, i) in props.row.DSO224" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Incentivados N.{{ i + 1
                    }}
                  </q-item-label>
                  <q-item-label>Nombre:{{ incentivados.nombre }}</q-item-label>
                  <q-item-label>Lugar:{{ incentivados.lugar }}</q-item-label>
                  <q-item-label>parentesco:{{ incentivados.parentesco }}</q-item-label>
                  <q-item-label>Organizacion que pertenece:{{ incentivados.pertOrganz
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDSO224" :props="props">
            {{ props.row.PuntajeDSO224 }}
          </q-td>
          <q-td key="DSO225" :props="props">
            <q-list>
              <q-item v-for="(DSO225, i) in props.row.DSO225" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-pink-10"></q-item-label>
                  <q-item-label>{{ i + 1 }} .{{ DSO225.nombre }}:{{ DSO225.respuesta.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
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

          <q-td key="DC233" :props="props">

            <q-list>
              <q-item v-for="(plantasC, i) in props.row.DC233" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">PlantasMedicinales</q-item-label>
                  <q-item-label>Planta:{{ plantasC.plantaMedic.label }}</q-item-label>
                  <q-item-label>Curar:{{ plantasC.cura }}</q-item-label>

                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDC233" :props="props">
            {{ props.row.PuntajeDC233 }}
          </q-td>
          <q-td key="DC234" :props="props">

            <q-list>
              <q-item v-for="(respuesta, i) in props.row.DC234" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Semilla</q-item-label>
                  <q-item-label>{{ i + 1 }}.{{ respuesta.nombre }}{{ respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="DCO234" :props="props">

            <q-list>
              <q-item v-for="(respuesta, i) in props.row.DCO234" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-pink-10">resouesta N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>semilla:{{ respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
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
              <q-item v-for="(DC236, i) in props.row.DC236" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Actividad del Randy
                    Randy </q-item-label>
                  <q-item-label>{{ i + 1 }}.{{ DC236.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDC236" :props="props">
            {{ props.row.PuntajeDC236 }}
          </q-td>
          <q-td key="DE241" :props="props">
            {{ props.row.DE241 }}
          </q-td>
          <q-td key="PuntajeDE241" :props="props">
            {{ props.row.PuntajeDE241 }}
          </q-td>
          <q-td key="DE242t" :props="props">
            {{ props.row.DE242t }}
          </q-td>
          <q-td key="DE242to" :props="props">
            {{ props.row.DE242to }}
          </q-td>
          <q-td key="DE242p" :props="props">
            {{ props.row.DE242p }}
          </q-td>
          <q-td key="PuntajeDE242" :props="props">
            {{ props.row.PuntajeDE242 }}
          </q-td>
          <q-td key="DE243" :props="props">
            {{ props.row.DE243 }}
          </q-td>
          <q-td key="subPregDE243" :props="props">
            {{ props.row.subPregDE243 }}
          </q-td>
          <q-td key="PuntajeDE243" :props="props">
            {{ props.row.PuntajeDE243 }}
          </q-td>
          <q-td key="DE244" :props="props">{{ props.row.DE244 }}</q-td>
          <q-td key="subPreg244" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.subPreg244 " :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE244" :props="props">{{ props.row.PuntajeDE244 }}</q-td>
          <q-td key="DE245" :props="props"> {{ props.row.DE245 }}</q-td>
          <q-td key="subPreg245" :props="props"> <q-list>
              <q-item v-for="(item, i) in props.row.subPreg245 " :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE245" :props="props"> {{ props.row.PuntajeDE245 }}</q-td>
          <q-td key="DE246" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE246 " :key="i">
                <q-item-section>
                  <q-item-label>{{ i + 1 }} .{{ item.nombre }}:{{ item.respuesta.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="subPreg246" :props="props"> {{ props.row.subPreg246 }}</q-td>
          <q-td key="PuntajeDE246" :props="props"> {{ props.row.PuntajeDE246 }}</q-td>
          <q-td key="DE247" :props="props"> {{ props.row.DE247 }}</q-td>
          <q-td key="subPreg2471" :props="props"> {{ props.row.subPreg2471 }}</q-td>
          <q-td key="subPreg2472" :props="props"> {{ props.row.subPreg2472 }}</q-td>
          <q-td key="PuntajeDE247" :props="props"> {{ props.row.PuntajeDE247 }}</q-td>
          <q-td key="DE248" :props="props">
            <q-list>
              <q-item v-for="(cual, i) in props.row.DE248" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Biofertilizantes en la
                    Parcela</q-item-label>
                  <q-item-label>{{ i + 1 }}.{{ cual.nombre }}:{{ cual.cual.label }}</q-item-label>
                  <q-item-label>{{ cual.nombre }}Cantidad: {{ cual.cantidad }}</q-item-label>
                  <q-item-label>{{ cual.nombre }}Frecuencia: {{ cual.frecuencia }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE248" :props="props"> {{ props.row.PuntajeDE248 }}</q-td>
          <q-td key="DE249" :props="props">
            {{ props.row.DE249 }}
          </q-td>
          <q-td key="subPreg249" :props="props">
            {{ props.row.subPreg249 }}
          </q-td>
          <q-td key="PuntajeDE249" :props="props"> {{ props.row.PuntajeDE249 }}</q-td>
          <q-td key="DE2410h" :props="props">
            <q-list>
              <q-item v-for="(hortalizas, i) in props.row.DE2410h" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Hotalizas N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>Producto:{{ hortalizas.producto.label }}</q-item-label>
                  <q-item-label>Area:{{ hortalizas.area }}</q-item-label>
                  <q-item-label>Medida:{{ hortalizas.medida }}</q-item-label>
                  <q-item-label>Cantidad:{{ hortalizas.cantidad }}</q-item-label>
                  <q-item-label>Semilla o platula:{{ hortalizas.semillaOPlantula }}</q-item-label>
                  <q-item-label>Tiempo de siembra:{{ hortalizas.tiempoSiembra }}</q-item-label>
                  <q-item-label>Tiempo de cosecha:{{ hortalizas.tiempoCosecha }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="DE2410f" :props="props">
            <q-list>
              <q-item v-for="(frutas, i) in props.row.DE2410f" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Frutas N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>Producto:{{ frutas.producto.label }}</q-item-label>
                  <q-item-label>Area:{{ frutas.area }}</q-item-label>
                  <q-item-label>Medida:{{ frutas.medida }}</q-item-label>
                  <q-item-label>Cantidad:{{ frutas.cantidad }}</q-item-label>
                  <q-item-label>Semilla o platula:{{ frutas.semillaOPlantula }}</q-item-label>
                  <q-item-label>Tiempo de siembra:{{ frutas.tiemposiembra }}</q-item-label>
                  <q-item-label>Tiempo de cosecha:{{ frutas.tiempocosecha }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="DE2410p" :props="props">
            <q-list>
              <q-item v-for="(pastos, i) in props.row.DE2410p" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Pastos N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>Producto:{{ pastos.producto.label }}</q-item-label>
                  <q-item-label>Area:{{ pastos.area }}</q-item-label>
                  <q-item-label>Medida:{{ pastos.medida }}</q-item-label>
                  <q-item-label>Cantidad:{{ pastos.cantidad }}</q-item-label>
                  <q-item-label>Semilla o platula:{{ pastos.semillaOPlantula }}</q-item-label>
                  <q-item-label>Tiempo de siembra:{{ pastos.tiemposiembra }}</q-item-label>
                  <q-item-label>Tiempo de cosecha:{{ pastos.tiempocosecha }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="DE2410cs" :props="props">
            <q-list>
              <q-item v-for="(cerealesYSeudocere, i) in props.row.DE2410cs" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Cereales N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>Producto:{{ cerealesYSeudocere.producto.label }}</q-item-label>
                  <q-item-label>Area:{{ cerealesYSeudocere.area }}</q-item-label>
                  <q-item-label>Medida:{{ cerealesYSeudocere.medida }}</q-item-label>
                  <q-item-label>Cantidad:{{ cerealesYSeudocere.cantidad }}</q-item-label>
                  <q-item-label>Semilla o platula:{{ cerealesYSeudocere.semillaOPlantula
                    }}</q-item-label>
                  <q-item-label>Tiempo de siembra:{{ cerealesYSeudocere.tiemposiembra
                    }}</q-item-label>
                  <q-item-label>Tiempo de cosecha:{{ cerealesYSeudocere.tiempocosecha
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="DE2410pm" :props="props">
            <q-list>
              <q-item v-for="(plantasMedicin, i) in props.row.DE2410pm" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Medicinales N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>Producto:{{ plantasMedicin.producto.label }}</q-item-label>
                  <q-item-label>Area:{{ plantasMedicin.area }}</q-item-label>
                  <q-item-label>Medida:{{ plantasMedicin.medida }}</q-item-label>
                  <q-item-label>Cantidad:{{ plantasMedicin.cantidad }}</q-item-label>
                  <q-item-label>Semilla o platula:{{ plantasMedicin.semillaOPlantula
                    }}</q-item-label>
                  <q-item-label>Tiempo de siembra:{{ plantasMedicin.tiemposiembra
                    }}</q-item-label>
                  <q-item-label>Tiempo de cosecha:{{ plantasMedicin.tiempocosecha
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="DE2410oo" :props="props">
            <q-list>
              <q-item v-for="(otrosOpcional, i) in props.row.DE2410oo" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Otros N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>Producto:{{ otrosOpcional.producto.label }}</q-item-label>
                  <q-item-label>Area:{{ otrosOpcional.area }}</q-item-label>
                  <q-item-label>Medida:{{ otrosOpcional.medida }}</q-item-label>
                  <q-item-label>Cantidad:{{ otrosOpcional.cantidad }}</q-item-label>
                  <q-item-label>Semilla o platula:{{ otrosOpcional.semillaOPlantula
                    }}</q-item-label>
                  <q-item-label>Tiempo de siembra:{{ otrosOpcional.tiemposiembra }}</q-item-label>
                  <q-item-label>Tiempo de cosecha:{{ otrosOpcional.tiempocosecha }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE2410" :props="props"> {{ props.row.PuntajeDE2410 }}</q-td>
          <q-td key="DE2411" :props="props"> {{ props.row.DE2411 }}</q-td>
          <q-td key="PuntajeDE2411" :props="props"> {{ props.row.PuntajeDE2411 }}</q-td>
          <q-td key="DE2412" :props="props"> {{ props.row.DE2412 }}</q-td>
          <q-td key="PuntajeDE2412" :props="props"> {{ props.row.PuntajeDE2412 }}</q-td>
          <q-td key="DE2413" :props="props"> {{ props.row.DE2413 }}</q-td>
          <q-td key="PuntajeDE2413" :props="props"> {{ props.row.PuntajeDE2413 }}</q-td>
          <q-td key="DE2414" :props="props"> {{ props.row.DE2414 }}</q-td>
          <q-td key="PuntajeDE2414" :props="props"> {{ props.row.PuntajeDE2414 }}</q-td>
          <q-td key="DE2415" :props="props"> {{ props.row.DE2415 }}</q-td>
          <q-td key="PuntajeDE2415" :props="props"> {{ props.row.PuntajeDE2415 }}</q-td>
          <q-td key="DE2416" :props="props"> {{ props.row.DE2416 }}</q-td>
          <q-td key="subPreguntaDE2416" :props="props">{{ props.row.subPreguntaDE2416 }}</q-td>
          <q-td key="sub2PreguntaDE2416" :props="props">{{ props.row.sub2PreguntaDE2416 }}</q-td>
          <q-td key="PuntajeDE2416" :props="props"> {{ props.row.PuntajeDE2416 }}</q-td>
          <q-td key="DE2417" :props="props"> {{ props.row.DE2417 }}</q-td>
          <q-td key="PuntajeDE2417" :props="props"> {{ props.row.PuntajeDE2417 }}</q-td>
          <q-td key="DE2418" :props="props"> {{ props.row.DE2418 }}</q-td>
          <q-td key="PuntajeDE2418" :props="props"> {{ props.row.PuntajeDE2418 }}</q-td>
          <q-td key="DE2419" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE2419 " :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>

                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE2419" :props="props"> {{ props.row.PuntajeDE2419 }}</q-td>
          <q-td key="DE2420" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE2420 " :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>

                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE2420" :props="props"> {{ props.row.PuntajeDE2420 }}</q-td>
          <q-td key="DE2421" :props="props"> {{ props.row.DE2421 }}</q-td>
          <q-td key="PuntajeDE2421" :props="props"> {{ props.row.PuntajeDE2421 }}</q-td>
          <q-td key="DE2422" :props="props"> {{ props.row.DE2422 }}</q-td>
          <q-td key="PuntajeDE2422" :props="props"> {{ props.row.PuntajeDE2422 }}</q-td>
          <q-td key="DE2423" :props="props">
            <q-list>
              <q-item v-for="(especieA, i) in props.row.DE2423 " :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-light-green-14">Animal N.{{ i + 1
                    }}</q-item-label>
                  <q-item-label>{{ especieA.nombre }}Nombre:{{ especieA.especie.label
                    }}</q-item-label>
                  <q-item-label> {{ especieA.nombre }}Pequeños:{{ especieA.pequenios }}</q-item-label>
                  <q-item-label>{{ especieA.nombre }}Adultos:{{ especieA.adultos }}</q-item-label>
                  <q-item-label>{{ especieA.nombre }}Cantidad de especies:{{ especieA.cantidadEsp
                    }}</q-item-label>
                  <q-item-label>{{ especieA.nombre }}Porcentaje de especies:{{ especieA.porcentajeEsp
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="sub2423" :props="props">
            {{ props.row.sub2423 }}
          </q-td>
          <q-td key="PuntajeDE2423" :props="props"> {{ props.row.PuntajeDE2423 }}</q-td>

          <q-td key="DE2424rGranos" :props="props">
            <div>{{ props.row.DE2424rGranos }} </div>
          </q-td>
          <q-td key="DE2424rPastos" :props="props">
            <div>{{ props.row.DE2424rPastos }} </div>
          </q-td>
          <q-td key="DE2424rRestos" :props="props">
            <div>{{ props.row.DE2424rRestos }} </div>
          </q-td>
          <q-td key="PuntajeDE2424" :props="props"> {{ props.row.PuntajeDE2424 }}</q-td>
          <q-td key="DE2425" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE2425 " :key="i">
                <q-item-section>
                  <q-item-label>{{ i + 1 }} .{{ item.nombre }}:{{ item.respuesta.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="subPreg2425" :props="props"> {{ props.row.subPreg2425 }}</q-td>
          <q-td key="PuntajeDE2425" :props="props"> {{ props.row.PuntajeDE2425 }}</q-td>
          <!-- Aqui empiezo -->
          <q-td key="DE2426" :props="props">
            {{ props.row.DE2426 }}
          </q-td>
          <q-td key="PuntajeDE2426" :props="props">
            {{ props.row.PuntajeDE2426 }}
          </q-td>
          <q-td key="DE2427" :props="props">
            {{ props.row.DE2427 }}
          </q-td>
          <q-td key="PuntajeDE2427" :props="props">
            {{ props.row.PuntajeDE2427 }}
          </q-td>
          <q-td key="DE2428" :props="props">
            {{ props.row.DE2428 }}
          </q-td>
          <q-td key="PuntajeDE2428" :props="props">
            {{ props.row.PuntajeDE2428 }}
          </q-td>
          <q-td key="DE2429" :props="props">
            {{ props.row.DE2429 }}
          </q-td>
          <q-td key="PuntajeDE2429" :props="props">
            {{ props.row.PuntajeDE2429 }}
          </q-td>
          <q-td key="Enca2430" :props="props">
            {{ props.row.Enca2430 }}
          </q-td>
          <q-td key="SubPreg2430" :props="props">
            {{ props.row.SubPreg2430 }}
          </q-td>
          <q-td key="PuntajeEnca2430" :props="props">
            {{ props.row.PuntajeEnca2430 }}
          </q-td>
          <q-td key="DE2430" :props="props">
            {{ props.row.DE2430 }}
          </q-td>
          <q-td key="PuntajeDE2430" :props="props">
            {{ props.row.PuntajeDE2430 }}
          </q-td>
          <q-td key="DE2431" :props="props">
            <q-list>
              <q-item v-for="(items, i) in props.row.DE2431" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Manejo de
                    Basura</q-item-label>
                  <q-item-label>{{ items.nombre }}{{ items.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDE2431" :props="props">
            {{ props.row.PuntajeDE2431 }}
          </q-td>
          <q-td key="DE2432" :props="props">
            {{ props.row.DE2432 }}
          </q-td>
          <q-td key="subPreg2432" :props="props">
            {{ props.row.subPreg2432 }}
          </q-td>
          <q-td key="PuntajeDE2432" :props="props">
            {{ props.row.PuntajeDE2432 }}
          </q-td>
          <q-td key="DE2433" :props="props">
            {{ props.row.DE2433 }}
          </q-td>
          <q-td key="PuntajeDE2433" :props="props">
            {{ props.row.PuntajeDE2433 }}
          </q-td>
          <q-td key="DE2434" :props="props">
            {{ props.row.DE2434 }}
          </q-td>
          <q-td key="PuntajeDE2434" :props="props">
            {{ props.row.PuntajeDE2434 }}
          </q-td>
          <q-td key="DE2435" :props="props">
            {{ props.row.DE2435 }}
          </q-td>
          <q-td key="PuntajeDE2435" :props="props">
            {{ props.row.PuntajeDE2435 }}
          </q-td>
          <q-td key="DE2436" :props="props">
            {{ props.row.DE2436 }}
          </q-td>
          <q-td key="PuntajeDE2436" :props="props">
            {{ props.row.PuntajeDE2436 }}
          </q-td>
          <q-td key="DE2437" :props="props">
            {{ props.row.DE2437 }}
          </q-td>
          <q-td key="PuntajeDE2437" :props="props">
            {{ props.row.PuntajeDE2437 }}
          </q-td>
          <q-td key="DE2438" :props="props">
            {{ props.row.DE2438 }}
          </q-td>
          <q-td key="PuntajeDE2438" :props="props">
            {{ props.row.PuntajeDE2438 }}
          </q-td>
          <q-td key="DE2439" :props="props">
            {{ props.row.DE2439 }}
          </q-td>
          <q-td key="PuntajeDE2439" :props="props">
            {{ props.row.PuntajeDE2439 }}
          </q-td>
          <q-td key="DE2440" :props="props">
            {{ props.row.DE2440 }}
          </q-td>
          <q-td key="PuntajeDE2440" :props="props">
            {{ props.row.PuntajeDE2440 }}
          </q-td>
          <q-td key="DE2441" :props="props">
            {{ props.row.DE2441 }}
          </q-td>
          <q-td key="PuntajeDE2441" :props="props">
            {{ props.row.PuntajeDE2441 }}
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
          <q-td key="DEC252" :props="props">
            <q-list>
              <q-item v-for="(rubros, i) in props.row.DEC252" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Rubros N.{{ i + 1 }}
                  </q-item-label>
                  <q-item-label>Productos:{{ rubros.productos.label }}</q-item-label>
                  <q-item-label>IngresosSemanales:{{ rubros.ingresosSemanales }}</q-item-label>
                  <q-item-label>Finca:{{ rubros.pieFinca }}</q-item-label>
                  <q-item-label>Feria:{{ rubros.feria }}</q-item-label>
                  <q-item-label>Canasta:{{ rubros.canasta }}</q-item-label>
                  <q-item-label>autoConsumo:{{ rubros.autoconsumo }}</q-item-label>
                  <q-item-label>Trueque:{{ rubros.trueque }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDEC252" :props="props">
            {{ props.row.PuntajeDEC252 }}
          </q-td>
          <q-td key="DEC253" :props="props">
            <q-list>
              <q-item v-for="(prodProcesados, i) in props.row.DEC253" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">ProductosProcesados N.{{
                    i + 1 }}
                  </q-item-label>
                  <q-item-label>Producto:{{ prodProcesados.productos.label }}</q-item-label>
                  <q-item-label>Otros:{{ prodProcesados.otrosProductos }}</q-item-label>
                  <q-item-label>productoUtiliza:{{ prodProcesados.prodUtiliza }}</q-item-label>
                  <q-item-label>Insumos:{{ prodProcesados.insumosFuera }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
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
          <q-td key="DEC255" :props="props">
            <q-list>
              Canastas familiar
              <q-item v-for="(canastaFamiliar, i) in props.row.DEC255.canastaFamiliar" :key="i">
                <q-item-section>
                  {{ canastaFamiliar.productos.label }}:{{ canastaFamiliar.porcentaje }}%
                </q-item-section>
              </q-item>
              insumos
              <q-item v-for="(insumos, i) in props.row.DEC255.insumos" :key="i">
                <q-item-section>
                  {{ insumos.productos.label }}: {{ insumos.porcentaje }}%
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>
          <q-td key="PuntajeDEC255" :props="props">
            {{ props.row.PuntajeDEC255 }}
          </q-td>
          <q-td key="DEC256" :props="props">
            <q-list>
              <q-item v-for="(consumidoresIdentificados, i) in props.row.DEC256" :key="i">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-light-green-14">Consumidores N.{{ i + 1
                    }}
                  </q-item-label>
                  <q-item-label>nombreConsumidor:{{ consumidoresIdentificados.nombreConsumidor
                    }}</q-item-label>
                  <q-item-label>lugarProcedencia:{{ consumidoresIdentificados.lugarProcedencia
                    }}</q-item-label>
                  <q-item-label>productoCompra:{{ consumidoresIdentificados.productoCompra.label
                    }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
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
          <q-td key="editar">
            <div class="row justify-center items-center q-gutter-md" style="width: 200px;">
              <q-btn size="md" color="primary" round dense @click="editarProductor(props.row.id)" icon="edit" />
              <q-btn size="md" color="negative" round dense @click="eliminarProductor(props.row.id)" icon="delete" />
            </div>
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
import { onMounted, ref, computed } from 'vue';
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
  { name: 'ubichacra', label: 'Ubichacra', align: 'center', field: 'ubichacra' },

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

  {
    name: 'totalMetrosCuadrados',
    label: 'Total de m2',
    align: 'center',
    field: 'totalMetrosCuadrados',
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
  { name: 'DP213', label: '2.1.3 DP', align: 'center', field: 'DP213' },
  { name: 'PuntajeDP213', label: 'Puntaje2.1.3', align: 'center', field: 'PuntajeDP213' },
  { name: 'DP214', label: '2.1.4 DP', align: 'center', field: 'DP214' },
  { name: 'PuntajeDP214', label: 'Puntaje2.1.4', align: 'center', field: 'PuntajeDP214' },
  { name: 'DP215', label: '2.1.5 DP', align: 'center', field: 'DP215' },
  { name: 'PuntajeDP215', label: 'Puntaje2.1.5', align: 'center', field: 'PuntajeDP215' },
  { name: 'DSO221', label: '2.2.1 DSO', align: 'center', field: 'DSO221' },
  { name: 'PuntajeDSO221', label: 'Puntaje2.2.1', align: 'center', field: 'PuntajeDSO221' },
  { name: 'DSO222', label: '2.2.2 DSO', align: 'center', field: 'DSO222' },
  { name: 'cargo', label: 'Cargo', align: 'center', field: 'cargo' },
  { name: 'PuntajeDSO222', label: 'Puntaje2.2.2', align: 'center', field: 'PuntajeDSO222' },
  { name: 'DSO223', label: '2.2.3 DSO', align: 'center', field: 'DSO223' },
  { name: 'PuntajeDSO223', label: 'Puntaje2.2.3', align: 'center', field: 'PuntajeDSO223' },
  { name: 'DSO224', label: '2.2.4 DSO', align: 'center', field: 'DSO224' },
  { name: 'PuntajeDSO224', label: 'Puntaje2.2.4', align: 'center', field: 'PuntajeDSO224' },
  { name: 'DSO225', label: '2.2.5 DSO', align: 'center', field: 'DSO225' },
  { name: 'PuntajeDSO225', label: 'Puntaje2.2.5', align: 'center', field: 'PuntajeDSO225' },
  { name: 'DSO226', label: '2.2.6 DSO', align: 'center', field: 'DSO226' },
  { name: 'PuntajeDSO226', label: 'Puntaje2.2.6', align: 'center', field: 'PuntajeDSO226' },
  { name: 'DSO227', label: '2.2.7 DSO', align: 'center', field: 'DSO227' },
  { name: 'DSO228', label: '2.2.8 DSO', align: 'center', field: 'DSO228' },
  { name: 'porque', label: '¿Porque?', align: 'center', field: 'porque' },
  { name: 'PuntajeDSO228', label: 'Puntaje2.2.8', align: 'center', field: 'PuntajeDSO228' },
  { name: 'DC231', label: '2.3.1 DC', align: 'center', field: 'DC231' },
  { name: 'subPregunta231', label: 'Sub 2.3.1 DC', align: 'center', field: 'subPregunta231' },
  { name: 'faselunar', label: 'Fase lunar', align: 'center', field: 'faselunar' },
  { name: 'PuntajeDC231', label: 'Puntaje2.3.1', align: 'center', field: 'PuntajeDC231' },
  { name: 'DC232', label: '2.3.2 DC', align: 'center', field: 'DC232' },
  { name: 'PuntajeDC232', label: 'Puntaje2.3.2', align: 'center', field: 'PuntajeDC232' },
  { name: 'DC233', label: '2.3.3 DC', align: 'center', field: 'DC233' },
  { name: 'PuntajeDC233', label: 'Puntaje2.3.3', align: 'center', field: 'PuntajeDC233' },
  { name: 'DC234', label: '2.3.4 DC', align: 'center', field: 'DC234' },
  { name: 'DCO234', label: '2.3.4 Opci', align: 'center', field: 'DCO234' },
  { name: 'PuntajeDC234', label: 'Puntaje2.3.4', align: 'center', field: 'PuntajeDC234' },
  { name: 'DC235', label: '2.3.5 DC', align: 'center', field: 'DC235' },
  { name: 'PuntajeDC235', label: 'Puntaje2.3.5', align: 'center', field: 'PuntajeDC235' },
  { name: 'DC236', label: '2.3.6 DC', align: 'center', field: 'DC236' },
  { name: 'PuntajeDC236', label: 'Puntaje2.3.6', align: 'center', field: 'PuntajeDC236' },
  //otra dimension
  { name: 'DE241', label: '2.4.1 DE', align: 'center', field: 'DE241' },
  { name: 'PuntajeDE241', label: 'Puntaje2.4.1', align: 'center', field: 'PuntajeDE241' },
  { name: 'DE242t', label: 'TotalPerimetro', align: 'center', field: 'DE242t' },
  { name: 'DE242to', label: 'TotalMetroSembrado', align: 'center', field: 'DE242to' },
  { name: 'DE242p', label: 'PorcentajeMetroSembrado', align: 'center', field: 'DE242p' },
  { name: 'PuntajeDE242', label: 'Puntaje2.4.2', align: 'center', field: 'PuntajeDE242' },
  { name: 'DE243', label: '2.4.3 DE', align: 'center', field: 'DE243' },
  { name: 'subPregDE243', label: 'Sub 2.4.3 DE', align: 'center', field: 'subPregDE243' },
  { name: 'PuntajeDE243', label: 'Puntaje2.4.3', align: 'center', field: 'PuntajeDE243' },
  { name: 'DE244', label: '2.4.4 DE', align: 'center', field: 'DE244' },
  { name: 'subPreg244', label: 'Sub 2.4.4 DE', align: 'center', field: 'subPreg244' },
  { name: 'PuntajeDE244', label: 'Puntaje2.4.4', align: 'center', field: 'PuntajeDE244' },
  { name: 'DE245', label: '2.4.5 DE', align: 'center', field: 'DE245' },
  { name: 'subPreg245', label: 'Sub 2.4.5 DE', align: 'center', field: 'subPreg245' },
  { name: 'PuntajeDE245', label: 'Puntaje2.4.5', align: 'center', field: 'PuntajeDE245' },
  { name: 'DE246', label: '2.4.6 DE', align: 'center', field: 'DE246' },
  { name: 'subPreg246', label: 'sub 2.4.6 DE', align: 'center', field: 'subPreg246' },
  { name: 'PuntajeDE246', label: 'Puntaje2.4.6', align: 'center', field: 'PuntajeDE246' },
  { name: 'DE247', label: '2.4.7 DE', align: 'center', field: 'DE247' },
  { name: 'subPreg2471', label: 'Sub 2.4.7.1 DE', align: 'center', field: 'subPreg2471' },
  { name: 'subPreg2472', label: 'Sub 2.4.7.2 DE', align: 'center', field: 'subPreg2472' },
  { name: 'PuntajeDE247', label: 'Puntaje2.4.7', align: 'center', field: 'PuntajeDE247' },
  { name: 'DE248', label: '2.4.8 DE', align: 'center', field: 'DE248' },
  { name: 'PuntajeDE248', label: 'Puntaje2.4.8', align: 'center', field: 'PuntajeDE248' },
  { name: 'DE249', label: '2.4.9 DE', align: 'center', field: 'DE249' },
  { name: 'subPreg249', label: 'sub 2.4.9 DE', align: 'center', field: 'subPreg249' },
  { name: 'PuntajeDE249', label: 'Puntaje2.4.9', align: 'center', field: 'PuntajeDE249' },
  { name: 'DE2410h', label: '2.4.10h DE', align: 'center', field: 'DE2410h' },
  { name: 'DE2410f', label: '2.4.10f DE', align: 'center', field: 'DE2410f' },
  { name: 'DE2410p', label: '2.4.10p DE', align: 'center', field: 'DE2410p' },
  { name: 'DE2410cs', label: '2.4.10cs DE', align: 'center', field: 'DE2410cs' },
  { name: 'DE2410pm', label: '2.4.10pm DE', align: 'center', field: 'DE2410pm' },
  { name: 'DE2410oo', label: '2.4.10oo DE', align: 'center', field: 'DE2410oo' },
  { name: 'PuntajeDE2410', label: 'Puntaje2.4.10', align: 'center', field: 'PuntajeDE2410' },
  { name: 'DE2411', label: '2.4.11 DE', align: 'center', field: 'DE2411' },
  { name: 'PuntajeDE2411', label: 'Puntaje2.4.11', align: 'center', field: 'PuntajeDE2411' },
  { name: 'DE2412', label: '2.4.12 DE', align: 'center', field: 'DE2412' },
  { name: 'PuntajeDE2412', label: 'Puntaje2.4.12', align: 'center', field: 'PuntajeDE2412' },
  { name: 'DE2413', label: '2.4.13 DE', align: 'center', field: 'DE2413' },
  { name: 'PuntajeDE2413', label: 'Puntaje2.4.13', align: 'center', field: 'PuntajeDE2413' },
  { name: 'DE2414', label: '2.4.14 DE', align: 'center', field: 'DE2414' },
  { name: 'PuntajeDE2414', label: 'Puntaje2.4.14', align: 'center', field: 'PuntajeDE2414' },
  { name: 'DE2415', label: '2.4.15 DE', align: 'center', field: 'DE2415' },
  { name: 'PuntajeDE2415', label: 'Puntaje2.4.15', align: 'center', field: 'PuntajeDE2415' },
  { name: 'DE2416', label: '2.4.16 DE', align: 'center', field: 'DE2416' },
  { name: 'subPreguntaDE2416', label: 'Sub 2.4.16.1 DE', align: 'center', field: 'subPreguntaDE2416' },
  { name: 'sub2PreguntaDE2416', label: 'Sub 2.4.16.2 DE', align: 'center', field: 'sub2PreguntaDE2416' },
  { name: 'PuntajeDE2416', label: 'Puntaje2.4.16', align: 'center', field: 'PuntajeDE2416' },
  { name: 'DE2417', label: '2.4.17 DE', align: 'center', field: 'DE2417' },
  { name: 'PuntajeDE2417', label: 'Puntaje2.4.17', align: 'center', field: 'PuntajeDE2417' },
  { name: 'DE2418', label: '2.4.18 DE', align: 'center', field: 'DE2418' },
  { name: 'PuntajeDE2418', label: 'Puntaje2.4.18', align: 'center', field: 'PuntajeDE2418' },
  { name: 'DE2419', label: '2.4.19 DE', align: 'center', field: 'DE2419' },
  { name: 'PuntajeDE2419', label: 'Puntaje2.4.19', align: 'center', field: 'PuntajeDE2419' },
  { name: 'DE2420', label: '2.4.20 DE', align: 'center', field: 'DE2420' },
  { name: 'PuntajeDE2420', label: 'Puntaje2.4.20', align: 'center', field: 'PuntajeDE2420' },
  { name: 'DE2421', label: '2.4.21 DE', align: 'center', field: 'DE2421' },
  { name: 'PuntajeDE2421', label: 'Puntaje2.4.21', align: 'center', field: 'PuntajeDE2421' },
  { name: 'DE2422', label: '2.4.22 DE', align: 'center', field: 'DE2422' },
  { name: 'PuntajeDE2422', label: 'Puntaje2.4.22', align: 'center', field: 'PuntajeDE2422' },
  { name: 'DE2423', label: '2.4.23 DE', align: 'center', field: 'DE2423' },
  { name: 'sub2423', label: 'Total Especies', align: 'center', field: 'sub2423' },
  { name: 'PuntajeDE2423', label: 'Puntaje2.4.23', align: 'center', field: 'PuntajeDE2423' },
  { name: 'DE2424rGranos', label: '2.4.24 granosDE', align: 'center', field: 'DE2424rGranos' },
  { name: 'DE2424rPastos', label: '2.4.24Pastos DE', align: 'center', field: 'DE2424rPastos' },
  { name: 'DE2424rRestos', label: '2.4.24 RestosDE', align: 'center', field: 'DE2424rRestos' },
  { name: 'PuntajeDE2424', label: 'Puntaje2.4.24', align: 'center', field: 'PuntajeDE2424' },
  { name: 'DE2425', label: '2.4.25 DE', align: 'center', field: 'DE2425' },
  { name: 'subPreg2425', label: ' sub 2.4.25 DE', align: 'center', field: 'subPreg2425' },
  { name: 'PuntajeDE2425', label: 'Puntaje2.4.25', align: 'center', field: 'PuntajeDE2425' },
  { name: 'DE2426', label: '2.4.26 DE', align: 'center', field: 'DE2426' },
  { name: 'PuntajeDE2426', label: 'Puntaje2.4.26 DE', align: 'center', field: 'PuntajeDE2426' },
  { name: 'DE2427', label: '2.4.27 DE', align: 'center', field: 'DE2427' },
  { name: 'PuntajeDE2427', label: 'Puntaje2.4.27 DE', align: 'center', field: 'PuntajeDE2427' },
  { name: 'DE2428', label: '2.4.28 DE', align: 'center', field: 'DE2428' },
  { name: 'PuntajeDE2428', label: 'Puntaje2.4.28', align: 'center', field: 'PuntajeDE2428' },
  { name: 'DE2429', label: '2.4.29 DE', align: 'center', field: 'DE2429' },
  { name: 'PuntajeDE2429', label: 'Puntaje2.4.29', align: 'center', field: 'PuntajeDE2429' },
  { name: 'Enca2430', label: '2.4.Enca DE', align: 'center', field: 'Enca2430' },
  { name: 'SubPreg2430', label: '2.4.30 sub DE', align: 'center', field: 'SubPreg2430' },
  { name: 'PuntajeEnca2430', label: 'Puntaje2.4.Sub', align: 'center', field: 'PuntajeEnca2430' },
  { name: 'DE2430', label: '2.4.30 DE', align: 'center', field: 'DE2430' },
  { name: 'PuntajeDE2430', label: 'Puntaje2.4.30', align: 'center', field: 'PuntajeDE2430' },
  { name: 'DE2431', label: '2.4.31 DE', align: 'center', field: 'DE2431' },
  { name: 'PuntajeDE2431', label: 'Puntaje2.4.31', align: 'center', field: 'PuntajeDE2431' },
  { name: 'DE2432', label: '2.4.32 DE', align: 'center', field: 'DE2432' },
  { name: 'subPreg2432', label: 'Sub 2.4.3.2 DE', align: 'center', field: 'subPreg2432' },
  { name: 'PuntajeDE2432', label: 'Puntaje2.4.32', align: 'center', field: 'PuntajeDE2432' },
  { name: 'DE2433', label: '2.4.33 DE', align: 'center', field: 'DE2433' },
  { name: 'PuntajeDE2433', label: 'Puntaje2.4.33', align: 'center', field: 'PuntajeDE2433' },
  { name: 'DE2434', label: '2.4.34 DE', align: 'center', field: 'DE2434' },
  { name: 'PuntajeDE2434', label: 'Puntaje2.4.34', align: 'center', field: 'PuntajeDE2434' },
  { name: 'DE2435', label: '2.4.35 DE', align: 'center', field: 'DE2435' },
  { name: 'PuntajeDE2435', label: 'Puntaje2.4.35', align: 'center', field: 'PuntajeDE2435' },
  { name: 'DE2436', label: '2.4.36 DE', align: 'center', field: 'DE2436' },
  { name: 'PuntajeDE2436', label: 'Puntaje2.4.36', align: 'center', field: 'PuntajeDE2436' },
  { name: 'DE2437', label: '2.4.37 DE', align: 'center', field: 'DE2437' },
  { name: 'PuntajeDE2437', label: 'Puntaje2.4.37', align: 'center', field: 'PuntajeDE2437' },
  { name: 'DE2438', label: '2.4.38 DE', align: 'center', field: 'DE2438' },
  { name: 'PuntajeDE2438', label: 'Puntaje2.4.38', align: 'center', field: 'PuntajeDE2438' },
  { name: 'DE2439', label: '2.4.39 DE', align: 'center', field: 'DE2439' },
  { name: 'PuntajeDE2439', label: 'Puntaje2.4.39', align: 'center', field: 'PuntajeDE2439' },
  { name: 'DE2440', label: '2.4.40 DE', align: 'center', field: 'DE2440' },
  { name: 'PuntajeDE2440', label: 'Puntaje2.4.40', align: 'center', field: 'PuntajeDE2440' },
  { name: 'DE2441', label: '2.4.41 DE', align: 'center', field: 'DE2441' },
  { name: 'PuntajeDE2441', label: 'Puntaje2.4.41', align: 'center', field: 'PuntajeDE2441' },
  { name: 'DEC251', label: '2.5.1 DEC', align: 'center', field: 'DEC251' },
  { name: 'subPreguntaDEC251', label: 'Su 2.5.1 DEC', align: 'center', field: 'subPreguntaDEC251' },
  { name: 'porque251', label: 'Porque', align: 'center', field: 'porque251' },
  { name: 'PuntajeDEC251', label: 'Puntaje2.5.1', align: 'center', field: 'PuntajeDEC251' },
  { name: 'DEC252', label: '2.5.2 DEC', align: 'center', field: 'DEC252' },
  { name: 'PuntajeDEC252', label: 'Puntaje2.5.2', align: 'center', field: 'PuntajeDEC252' },
  { name: 'DEC253', label: '2.5.3 DEC', align: 'center', field: 'DEC253' },
  { name: 'subPreguntaDEC253', label: 'Sub 2.5.3.1 DEC', align: 'center', field: 'subPreguntaDEC253' },
  { name: 'sub2PreguntaDEC253', label: 'Sub 2.5.3.2 DEC', align: 'center', field: 'sub2PreguntaDEC253' },
  { name: 'PuntajeDEC253', label: 'Puntaje2.5.3', align: 'center', field: 'PuntajeDEC253' },
  { name: 'DEC254', label: '2.5.4 DEC', align: 'center', field: 'DEC254' },
  { name: 'PuntajeDEC254', label: 'Puntaje2.5.4', align: 'center', field: 'PuntajeDEC254' },
  { name: 'DEC255', label: '2.5.5 DEC', align: 'center', field: 'DEC255' },
  { name: 'PuntajeDEC255', label: 'Puntaje2.5.5', align: 'center', field: 'PuntajeDEC255' },
  { name: 'DEC256', label: '2.5.6 DEC', align: 'center', field: 'DEC256' },
  { name: 'PuntajeDEC256', label: 'Puntaje2.5.6', align: 'center', field: 'PuntajeDEC256' },
  { name: 'PuntajeDP', label: 'PuntajeTotal DP', align: 'center', field: 'PuntajeDP' },
  { name: 'PuntajeDSO', label: 'PuntajeTotalDSO', align: 'center', field: 'PuntajeDSO' },
  { name: 'PuntajeDC', label: 'PuntajeTotalDC', align: 'center', field: 'PuntajeDC' },
  { name: 'PuntajeTotalDE', label: 'PuntajeTotalDE', align: 'center', field: 'PuntajeTotalDE' },
  { name: 'PuntajeTotalEC', label: 'PuntajeTotalEC', align: 'center', field: 'PuntajeTotalEC' },
  { name: 'PuntajeFinal', label: 'PuntajeFinal', align: 'center', field: 'PuntajeFinal' },
  { name: 'editar', label: 'Editar', align: 'center', field: 'editar' },
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
      ubichacra: productor.datosGenerales.ubiChacra,
      organizacionPert: productor.datosGenerales.organizacionPert,
      anionsCultiv: productor.datosGenerales.aniosCultiv,
      numVeedurias: productor.datosGenerales.numVeedurias,
      produtCertif: productor.datosGenerales.produtCertif,
      tiposTerrenos: productor.datosGenerales.tiposTerrenos,
      totalMetrosCuadrados: productor.datosGenerales.totalMetrosCuadrados,
      //Aqui comiemza la dimencion politica
      DP211: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg211.respuesta.label,
      PuntajeDP211: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg211.puntos,
      DP212: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg212.respuesta.label,
      PuntajeDP212: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg212.puntos,
      DP213: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.items,
      PuntajeDP213: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg213.puntos,
      DP214: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg214.items,
      PuntajeDP214: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg214.puntos,
      DP215: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg215.respuesta.label,
      PuntajeDP215: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.preg215.puntos,
      PuntajeDP: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.puntajeTotal,
      //Aqui comienza la dimencion socio organizativa
      DSO221: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.items,
      PuntajeDSO221: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg221.puntos,
      DSO222: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg222.respuesta.label,
      cargo: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg222.subPreg222.respuesta.label,
      PuntajeDSO222: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg222.Puntos,
      DSO223: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.items,
      PuntajeDSO223: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg223.puntos,
      DSO224: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.incentivados,
      PuntajeDSO224: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg224.puntos,
      DSO225: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.items,
      PuntajeDSO225: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg225.puntos,
      DSO226: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg226.items,
      PuntajeDSO226: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg226.puntos,
      DSO227: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg227,
      //PuntajeDSO227: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg226.,
      DSO228: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg228.respuesta.label,
      porque: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg228.subPreg228.respuesta.label,
      PuntajeDSO228: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.preg228.puntos,
      PuntajeDSO: productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.puntajeTotal,
      //Aqui comienza la dimencion cultural
      DC231: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.respuesta.label,
      subPregunta231: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.subPregunta231.respuesta.label,
      faselunar: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.faseLunar,
      PuntajeDC231: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg231.puntos,
      DC232: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg232.respuesta.label,
      PuntajeDC232: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg232.puntos,
      DC233: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg233.plantasC,
      PuntajeDC233: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg233.puntos,
      DC234: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg234.respuesta,
      DCO234: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg234Opcional.respuesta,
      PuntajeDC234: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg234.puntos,
      //v.2
      DC235: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg235.respuesta.label,
      PuntajeDC235: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg235.puntos,
      DC236: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg236.items,
      PuntajeDC236: productor.dimensionSocialCulturalPolitica.dimensionCultural23.preg236.puntos,
      PuntajeDC: productor.dimensionSocialCulturalPolitica.dimensionCultural23.puntajeTotal,
      //Aqui comienza la Dimension Ecologica
      DE241: productor.dimensionEcologica.preg241.respuesta.label,
      PuntajeDE241: productor.dimensionEcologica.preg241.puntos,
      DE242t: productor.dimensionEcologica.preg242.totalPeri,
      DE242to: productor.dimensionEcologica.preg242.totalMetroSembrado,
      DE242p: productor.dimensionEcologica.preg242.porcentajeMetrSembrados,
      PuntajeDE242: productor.dimensionEcologica.preg242.puntos,
      DE243: productor.dimensionEcologica.preg243.respuesta.label,
      subPregDE243: productor.dimensionEcologica.preg243.subpreg243.respuesta.label,
      PuntajeDE243: productor.dimensionEcologica.preg243.puntos,
      DE244: productor.dimensionEcologica.preg244.respuesta.label,
      subPreg244: productor.dimensionEcologica.preg244.subPreg244.items,
      PuntajeDE244: productor.dimensionEcologica.preg244.puntos,
      DE245: productor.dimensionEcologica.preg245.respuesta.label,
      subPreg245: productor.dimensionEcologica.preg245.subPreg245.items,
      PuntajeDE245: productor.dimensionEcologica.preg245.puntos,
      DE246: productor.dimensionEcologica.preg246.items,
      subPreg246: productor.dimensionEcologica.preg246.subPreg246.respuesta.label,
      PuntajeDE246: productor.dimensionEcologica.preg246.puntos,
      DE247: productor.dimensionEcologica.preg247.respuesta,
      // .map((subPreg2471) => subPreg2471.medidaDePeso.label + '\n' + subPreg2471.tiempo.label).join('\n')
      // +'\n'+
      subPreg2471: productor.dimensionEcologica.preg247.subPreg2471.cantidad + '\ ' +
        productor.dimensionEcologica.preg247.subPreg2471.medidaDePeso.label + '\ ' +
        productor.dimensionEcologica.preg247.subPreg2471.tiempo.label,
      subPreg2472: productor.dimensionEcologica.preg247.subPreg2472.cuantoAboCompra.label + '\ ' +
        productor.dimensionEcologica.preg247.subPreg2472.medidaDePeso.label,
      PuntajeDE247: productor.dimensionEcologica.preg247.puntos,
      DE248: productor.dimensionEcologica.preg248.cual,
      PuntajeDE248: productor.dimensionEcologica.preg248.puntos,
      DE249: productor.dimensionEcologica.preg249.respuesta.label,
      subPreg249: productor.dimensionEcologica.preg249.subPreg249.respuesta.label,
      PuntajeDE249: productor.dimensionEcologica.preg249.puntos,
      DE2410h: productor.dimensionEcologica.preg2410.hortalizas,
      DE2410f: productor.dimensionEcologica.preg2410.frutas,
      DE2410p: productor.dimensionEcologica.preg2410.pastos,
      DE2410cs: productor.dimensionEcologica.preg2410.cerealesYSeudocere,
      DE2410pm: productor.dimensionEcologica.preg2410.plantasMedicin,
      DE2410oo: productor.dimensionEcologica.preg2410.otrosOpcional,
      PuntajeDE2410: productor.dimensionEcologica.preg2410.puntos,
      DE2411: productor.dimensionEcologica.preg2411.respuesta.label,
      PuntajeDE2411: productor.dimensionEcologica.preg2411.puntos,
      DE2412: productor.dimensionEcologica.preg2412.respuesta.label,
      PuntajeDE2412: productor.dimensionEcologica.preg2412.puntos,
      DE2413: productor.dimensionEcologica.preg2413.respuesta.label,
      PuntajeDE2413: productor.dimensionEcologica.preg2413.puntos,
      DE2414: productor.dimensionEcologica.preg2414.respuesta.label,
      PuntajeDE2414: productor.dimensionEcologica.preg2414.puntos,
      DE2415: productor.dimensionEcologica.preg2415.respuesta.label,
      PuntajeDE2415: productor.dimensionEcologica.preg2415.puntos,
      DE2416: productor.dimensionEcologica.preg2416.respuesta.label,
      subPreguntaDE2416: productor.dimensionEcologica.preg2416.subPreg2416.respuesta.label,
      sub2PreguntaDE2416: productor.dimensionEcologica.preg2416.subSubPreg2416.respuesta.label,
      PuntajeDE2416: productor.dimensionEcologica.preg2416.puntos,
      DE2417: productor.dimensionEcologica.preg2417.respuesta.label,
      PuntajeDE2417: productor.dimensionEcologica.preg2417.puntos,
      DE2418: productor.dimensionEcologica.preg2418.respuesta.label + productor.dimensionEcologica.preg2418.subPreg2418.respuesta.label,
      PuntajeDE2418: productor.dimensionEcologica.preg2418.puntos,
      DE2419: productor.dimensionEcologica.preg2419.items,
      PuntajeDE2419: productor.dimensionEcologica.preg2419.puntos,
      DE2420: productor.dimensionEcologica.preg2420.items,
      PuntajeDE2420: productor.dimensionEcologica.preg2420.puntos,
      DE2421: productor.dimensionEcologica.preg2421.respuesta.label,
      PuntajeDE2421: productor.dimensionEcologica.preg2421.puntos,
      DE2422: productor.dimensionEcologica.preg2422.respuesta.label,
      PuntajeDE2422: productor.dimensionEcologica.preg2422.puntos,
      DE2423: productor.dimensionEcologica.preg2423.especieA,
      PuntajeDE2423: productor.dimensionEcologica.preg2423.puntos,
      sub2423: productor.dimensionEcologica.preg2423.cantidadTotal,
      DE2424rGranos: productor.dimensionEcologica.preg2424.rGranos.label,
      DE2424rPastos: productor.dimensionEcologica.preg2424.rPastos.label,
      DE2424rRestos: productor.dimensionEcologica.preg2424.rRestos.label,
      PuntajeDE2424: productor.dimensionEcologica.preg2424.puntos,
      DE2425: productor.dimensionEcologica.preg2425.items,
      subPreg2425: productor.dimensionEcologica.preg2425.subPreg2425.respuesta,
      PuntajeDE2425: productor.dimensionEcologica.preg2425.puntos,
      //v.2
      DE2426: productor.dimensionEcologica.preg2426.respuesta.label,
      PuntajeDE2426: productor.dimensionEcologica.preg2426.puntos,
      DE2427: productor.dimensionEcologica.preg2427.respuesta.label,
      PuntajeDE2427: productor.dimensionEcologica.preg2427.puntos,
      DE2428: productor.dimensionEcologica.preg2428.respuesta.label,
      PuntajeDE2428: productor.dimensionEcologica.preg2428.puntos,
      DE2429: productor.dimensionEcologica.preg2429.respuesta.label,
      PuntajeDE2429: productor.dimensionEcologica.preg2429.puntos,
      Enca2430: productor.dimensionEcologica.encabezadoPreg2430.encaPreg2430.respuesta.label,
      SubPreg2430: productor.dimensionEcologica.encabezadoPreg2430.subPregEnca2430.respuesta.label,
      PuntajeEnca2430: productor.dimensionEcologica.encabezadoPreg2430.puntos,
      DE2430: productor.dimensionEcologica.preg2430.respuesta.label,
      PuntajeDE2430: productor.dimensionEcologica.preg2430.puntos,
      DE2431: productor.dimensionEcologica.preg2431.items,
      PuntajeDE2431: productor.dimensionEcologica.preg2431.puntos,
      DE2432: productor.dimensionEcologica.preg2432.respuesta.label,
      subPreg2432: productor.dimensionEcologica.preg2432.subPreg2432.respuesta.label,
      PuntajeDE2432: productor.dimensionEcologica.preg2432.puntos,
      DE2433: productor.dimensionEcologica.preg2433.respuesta.label,
      PuntajeDE2433: productor.dimensionEcologica.preg2433.puntos,
      DE2434: productor.dimensionEcologica.preg2434.respuesta.label,
      PuntajeDE2434: productor.dimensionEcologica.preg2434.puntos,
      DE2435: productor.dimensionEcologica.preg2435.respuesta.label,
      PuntajeDE2435: productor.dimensionEcologica.preg2435.puntos,
      DE2436: productor.dimensionEcologica.preg2436.respuesta.label,
      PuntajeDE2436: productor.dimensionEcologica.preg2436.puntos,
      DE2437: productor.dimensionEcologica.preg2437.respuesta.label,
      PuntajeDE2437: productor.dimensionEcologica.preg2437.puntos,
      DE2438: productor.dimensionEcologica.preg2438.respuesta.label,
      PuntajeDE2438: productor.dimensionEcologica.preg2438.puntos,
      DE2439: productor.dimensionEcologica.preg2439.respuesta.label,
      PuntajeDE2439: productor.dimensionEcologica.preg2439.puntos,
      DE2440: productor.dimensionEcologica.preg2440.respuesta.label,
      PuntajeDE2440: productor.dimensionEcologica.preg2440.puntos,
      DE2441: productor.dimensionEcologica.preg2441.respuesta.label,
      PuntajeDE2441: productor.dimensionEcologica.preg2441.puntos,
      PuntajeTotalDE: productor.dimensionEcologica.puntajeTotal,
      //Dimension economica
      DEC251: productor.dimensionEconomica.preg251.respuesta.label,
      subPreguntaDEC251: productor.dimensionEconomica.preg251.subpreg.respuesta.label,
      porque251: productor.dimensionEconomica.preg251.subpreg.porque,
      PuntajeDEC251: productor.dimensionEconomica.preg251.puntos,
      DEC252: productor.dimensionEconomica.preg252.rubros,
      PuntajeDEC252: productor.dimensionEconomica.preg252.puntos,
      DEC253: productor.dimensionEconomica.preg253.prodProcesados,
      subPreguntaDEC253: productor.dimensionEconomica.preg253.subpreg.respuesta.label,
      sub2PreguntaDEC253: productor.dimensionEconomica.preg253.subpreg2.respuesta.label,
      PuntajeDEC253: productor.dimensionEconomica.preg253.puntos,
      DEC254: productor.dimensionEconomica.preg254.respuesta.label,
      PuntajeDEC254: productor.dimensionEconomica.preg254.puntos,
      DEC255: productor.dimensionEconomica.preg255,
      PuntajeDEC255: productor.dimensionEconomica.preg255.puntos,
      DEC256: productor.dimensionEconomica.preg256.consumidoresIdentificados,
      PuntajeDEC256: productor.dimensionEconomica.preg256.puntos,
      PuntajeTotalEC: productor.dimensionEconomica.puntajeTotal,
      PuntajeFinal: productor.dimensionSocialCulturalPolitica.dimensionPolitica21.puntajeTotal +
        productor.dimensionSocialCulturalPolitica.dimensionSocioOrganizativa22.puntajeTotal +
        productor.dimensionSocialCulturalPolitica.dimensionCultural23.puntajeTotal +
        productor.dimensionEcologica.puntajeTotal +
        productor.dimensionEconomica.puntajeTotal,
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
  link.download = 'tabla.xlsx';
  link.click();
  URL.revokeObjectURL(url);
}

function eliminarProductor(id: string) {

  $q.dialog({
    title: 'Eliminar los datos del productor',

    message:
      '¿Está seguro de realizar esta acción?, estos cambios no se pueden revertir.',
    cancel: true,
  }).onOk(() => {
    productorStore.deleteProductor(id)
  });
}

async function editarProductor(id: string) {
  console.log(id);
  await $router.push({ name: 'editar-productor', params: { id: id } });
}
</script>
