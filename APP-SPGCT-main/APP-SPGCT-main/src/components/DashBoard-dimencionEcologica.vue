<template>

  <div>
    <q-table flat bordered title="Dimencion Ecologica" :rows="rows" :columns="columns" row-key="name" binary-state-sort
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
          <q-td key="produtCertif" :props="props">
            {{ props.row.produtCertif }}
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
          <q-td key="DE244" :props="props">
            {{ props.row.DE244 }}</q-td>
          <!-- los cambios empiezan aqui -->
          <q-td key="terrazaBanco" :props="props">{{ props.row.terrazaBanco }}</q-td>
          <q-td key="terrazasFormLent" :props="props">{{ props.row.terrazasFormLent }}</q-td>
          <q-td key="terrazasIndiv" :props="props">{{ props.row.terrazasIndiv }}</q-td>
          <q-td key="barrerasVivas" :props="props">{{ props.row.barrerasVivas }}</q-td>
          <q-td key="ZanjasFiltrDesv" :props="props">{{ props.row.ZanjasFiltrDesv }}</q-td>
          <q-td key="abonosVerdes" :props="props">{{ props.row.abonosVerdes }}</q-td>
          <q-td key="diqueCarca" :props="props">{{ props.row.diqueCarca }}</q-td>
          <q-td key="surcoContorno" :props="props">{{ props.row.surcoContorno }}</q-td>
          <q-td key="acolchado" :props="props">{{ props.row.acolchado }}</q-td>
          <q-td key="abonosOrganicos" :props="props">{{ props.row.abonosOrganicos }}</q-td>
          <!-- los cambios acaban aqui -->
          <q-td key="PuntajeDE244" :props="props">{{ props.row.PuntajeDE244 }}</q-td>
          <q-td key="DE245" :props="props"> {{ props.row.DE245 }}</q-td>
          <!-- <q-td key="subPreg245" :props="props"> <q-list>
              <q-item v-for="(item, i) in props.row.subPreg245" :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td> -->
          <!--Cambios subPreg245 -->
          <q-td key="subAlta" :props="props">{{ props.row.subAlta }}</q-td>
          <q-td key="subMedia" :props="props">{{ props.row.subMedia }}</q-td>
          <q-td key="subBaja" :props="props">{{ props.row.subBaja }}</q-td>
          <!--Fin Cambios subPreg245 -->
          <q-td key="PuntajeDE245" :props="props"> {{ props.row.PuntajeDE245 }}</q-td>
          <!--<q-td key="DE246" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE246" :key="i">
                <q-item-section>
                  <q-item-label>{{ i + 1 }} .{{ item.nombre }}:{{ item.respuesta.label
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td>-->
          <!--Cambios DE246-->
          <q-td key="majadeo" :props="props"> {{ props.row.majadeo }}</q-td>
          <q-td key="compost" :props="props"> {{ props.row.compost }}</q-td>
          <q-td key="bocashi" :props="props"> {{ props.row.bocashi }}</q-td>
          <q-td key="humus" :props="props"> {{ props.row.humus }}</q-td>
          <q-td key="colchon" :props="props"> {{ props.row.colchon }}</q-td>
          <q-td key="desechosPodas" :props="props"> {{ props.row.desechosPodas }}</q-td>
          <q-td key="abonoVerde" :props="props"> {{ props.row.abonoVerde }}</q-td>
          <q-td key="otros" :props="props"> {{ props.row.otros }}</q-td>
          <!--Fin cambios DE246-->
          <q-td key="subPreg246" :props="props"> {{ props.row.subPreg246 }}</q-td>
          <q-td key="PuntajeDE246" :props="props"> {{ props.row.PuntajeDE246 }}</q-td>
          <q-td key="DE247" :props="props"> {{ props.row.DE247 }}</q-td>
          <q-td key="subPreg2471" :props="props"> {{ props.row.subPreg2471 }}</q-td>
          <q-td key="subPreg2472" :props="props"> {{ props.row.subPreg2472 }}</q-td>
          <q-td key="PuntajeDE247" :props="props"> {{ props.row.PuntajeDE247 }}</q-td>
          <!-- <q-td key="DE248" :props="props">
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
          </q-td> -->
          <!--Cambios DE248-->
          <q-td key="biol" :props="props">
            {{ props.row.biol }}
          </q-td>
          <q-td key="teFrutas" :props="props">
            {{ props.row.teFrutas }}
          </q-td>
          <q-td key="teHierbasMedi" :props="props">
            {{ props.row.teHierbasMedi }}
          </q-td>
          <!--Fin cambios DE248-->
          <q-td key="PuntajeDE248" :props="props"> {{ props.row.PuntajeDE248 }}</q-td>
          <q-td key="DE249" :props="props">
            {{ props.row.DE249 }}
          </q-td>
          <q-td key="subPreg249" :props="props">
            {{ props.row.subPreg249 }}
          </q-td>
          <q-td key="PuntajeDE249" :props="props"> {{ props.row.PuntajeDE249 }}</q-td>
          <!--aqui empiezan los cambios hortaliza -->
          <q-td key="acelga" :props="props">
            {{ props.row.acelga }}
          </q-td>
          <q-td key="ají" :props="props">
            {{ props.row.ají }}
          </q-td>
          <q-td key="albahaca" :props="props">
            {{ props.row.albahaca }}
          </q-td>
          <q-td key="apio" :props="props">
            {{ props.row.apio }}
          </q-td>
          <q-td key="berro" :props="props">
            {{ props.row.berro }}
          </q-td>
          <q-td key="brócoli" :props="props">
            {{ props.row.brócoli }}
          </q-td>
          <q-td key="col" :props="props">
            {{ props.row.col }}
          </q-td>
          <q-td key="colMorada" :props="props">
            {{ props.row.colMorada }}
          </q-td>
          <q-td key="coliflor" :props="props">
            {{ props.row.coliflor }}
          </q-td>
          <q-td key="espinaca" :props="props">
            {{ props.row.espinaca }}
          </q-td>
          <q-td key="lechuga" :props="props">
            {{ props.row.lechuga }}
          </q-td>
          <q-td key="lechugaCrespa" :props="props">
            {{ props.row.lechugaCrespa }}
          </q-td>
          <q-td key="melloco" :props="props">
            {{ props.row.melloco }}
          </q-td>
          <q-td key="nabo" :props="props">
            {{ props.row.nabo }}
          </q-td>
          <q-td key="papa" :props="props">
            {{ props.row.papa }}
          </q-td>
          <q-td key="pepinillo" :props="props">
            {{ props.row.pepinillo }}
          </q-td>
          <q-td key="perejil" :props="props">
            {{ props.row.perejil }}
          </q-td>
          <q-td key="pimiento" :props="props">
            {{ props.row.pimiento }}
          </q-td>
          <q-td key="rábano" :props="props">
            {{ props.row.rábano }}
          </q-td>
          <q-td key="remolacha" :props="props">
            {{ props.row.remolacha }}
          </q-td>
          <q-td key="romanesco" :props="props">
            {{ props.row.romanesco }}
          </q-td>
          <q-td key="tomateRinion" :props="props">
            {{ props.row.tomateRiñon }}
          </q-td>
          <q-td key="tomateCherry" :props="props">
            {{ props.row.tomateCherry }}
          </q-td>
          <q-td key="vainita" :props="props">
            {{ props.row.vainita }}
          </q-td>
          <q-td key="yuca" :props="props">
            {{ props.row.yuca }}
          </q-td>
          <q-td key="zanahoria" :props="props">
            {{ props.row.zanahoria }}
          </q-td>
          <q-td key="zapallo" :props="props">
            {{ props.row.zapallo }}
          </q-td>
          <q-td key="zuquini" :props="props">
            {{ props.row.zuquini }}
          </q-td>
          <!--aqui terminan los cambios hortaliza -->
          <!--aqui empiezan los cambios frutas  -->
          <q-td key="aguacate" :props="props">
            {{ props.row.aguacate }}
          </q-td>
          <q-td key="babaco" :props="props">
            {{ props.row.babaco }}
          </q-td>
          <q-td key="capuli" :props="props">
            {{ props.row.capuli }}
          </q-td>
          <q-td key="chamburo" :props="props">
            {{ props.row.chamburo }}
          </q-td>
          <q-td key="chayote" :props="props">
            {{ props.row.chayote }}
          </q-td>
          <q-td key="chirimoya" :props="props">
            {{ props.row.chirimoya }}
          </q-td>
          <q-td key="ciruelos" :props="props">
            {{ props.row.ciruelos }}
          </q-td>
          <q-td key="durazno" :props="props">
            {{ props.row.durazno }}
          </q-td>
          <q-td key="frutilla" :props="props">
            {{ props.row.frutilla }}
          </q-td>
          <q-td key="frutos_secos" :props="props">
            {{ props.row.frutos_secos }}
          </q-td>
          <q-td key="granadilla" :props="props">
            {{ props.row.granadilla }}
          </q-td>
          <q-td key="guayaba" :props="props">
            {{ props.row.guayaba }}
          </q-td>
          <q-td key="higo" :props="props">
            {{ props.row.higo }}
          </q-td>
          <q-td key="limas" :props="props">
            {{ props.row.limas }}
          </q-td>
          <q-td key="limon" :props="props">
            {{ props.row.limon }}
          </q-td>
          <q-td key="mandarina" :props="props">
            {{ props.row.mandarina }}
          </q-td>
          <q-td key="maracuya" :props="props">
            {{ props.row.maracuya }}
          </q-td>
          <q-td key="mora" :props="props">
            {{ props.row.mora }}
          </q-td>
          <q-td key="naranja" :props="props">
            {{ props.row.naranja }}
          </q-td>
          <q-td key="pepino" :props="props">
            {{ props.row.pepino }}
          </q-td>
          <q-td key="pina" :props="props">
            {{ props.row.pina }}
          </q-td>
          <q-td key="platano" :props="props">
            {{ props.row.platano }}
          </q-td>
          <q-td key="papaya" :props="props">
            {{ props.row.papaya }}
          </q-td>
          <q-td key="seda" :props="props">
            {{ props.row.seda }}
          </q-td>
          <q-td key="taxo" :props="props">
            {{ props.row.taxo }}
          </q-td>
          <q-td key="tocte" :props="props">
            {{ props.row.tocte }}
          </q-td>
          <q-td key="tomate_arbol" :props="props">
            {{ props.row.tomate_arbol }}
          </q-td>
          <q-td key="tunas" :props="props">
            {{ props.row.tunas }}
          </q-td>
          <q-td key="uvillas" :props="props">
            {{ props.row.uvillas }}
          </q-td>
          <q-td key="verde" :props="props">
            {{ props.row.verde }}
          </q-td>
          <q-td key="zambo" :props="props">
            {{ props.row.zambo }}
          </q-td>
          <!--aqui terminan los cambios frutas -->
          <!-- aqui empiezan los cambios pastos-->
          <q-td key="rayGrassAnual" :props="props">
            {{ props.row.rayGrassAnual }}
          </q-td>
          <q-td key="rayGrassPerenne" :props="props">
            {{ props.row.rayGrassPerenne }}
          </q-td>
          <q-td key="pastoNatural" :props="props">
            {{ props.row.pastoNatural }}
          </q-td>
          <q-td key="bolonAzul" :props="props">
            {{ props.row.bolonAzul }}
          </q-td>
          <q-td key="alfalfa" :props="props">
            {{ props.row.alfalfa }}
          </q-td>
          <q-td key="mezclaForrajera" :props="props">
            {{ props.row.mezclaForrajera }}
          </q-td>
          <q-td key="maralfalfa" :props="props">
            {{ props.row.maralfalfa }}
          </q-td>
          <q-td key="vicia" :props="props">
            {{ props.row.vicia }}
          </q-td>
          <q-td key="avena" :props="props">
            {{ props.row.avena }}
          </q-td>
          <!-- aqui terminan los cambios pastos  -->
          <!-- aqui empiezan los cambios cereales  -->
          <q-td key="amaranto" :props="props">
            {{ props.row.amaranto }}
          </q-td>
          <q-td key="arveja" :props="props">
            {{ props.row.arveja }}
          </q-td>
          <q-td key="canguil" :props="props">
            {{ props.row.canguil }}
          </q-td>
          <q-td key="cebada" :props="props">
            {{ props.row.cebada }}
          </q-td>
          <q-td key="chia" :props="props">
            {{ props.row.chia }}
          </q-td>
          <q-td key="chochos" :props="props">
            {{ props.row.chochos }}
          </q-td>
          <q-td key="choclo" :props="props">
            {{ props.row.choclo }}
          </q-td>
          <q-td key="chulpi" :props="props">
            {{ props.row.chulpi }}
          </q-td>
          <q-td key="frejol" :props="props">
            {{ props.row.frejol }}
          </q-td>
          <q-td key="habas" :props="props">
            {{ props.row.habas }}
          </q-td>
          <q-td key="lentejas" :props="props">
            {{ props.row.lentejas }}
          </q-td>
          <!-- <q-td key="linaza" :props="props">
            {{ props.row.linaza }}
          </q-td> -->
          <q-td key="maiz" :props="props">
            {{ props.row.maiz }}
          </q-td>
          <q-td key="morocho" :props="props">
            {{ props.row.morocho }}
          </q-td>
          <q-td key="papa" :props="props">
            {{ props.row.papa }}
          </q-td>
          <q-td key="quinua" :props="props">
            {{ props.row.quinua }}
          </q-td>
          <q-td key="trigo" :props="props">
            {{ props.row.trigo }}
          </q-td>
          <!-- aqui terminan los cambios cereales  -->
          <!-- aqui empiezan los cambios medicinales  -->
          <q-td key="arrayan" :props="props">
            {{ props.row.arrayan }}
          </q-td>
          <q-td key="borraja" :props="props">
            {{ props.row.borraja }}
          </q-td>
          <q-td key="cedron" :props="props">
            {{ props.row.cedron }}
          </q-td>
          <q-td key="colaDeCaballo" :props="props">
            {{ props.row.colaDeCaballo }}
          </q-td>
          <q-td key="eucaliptoAromatico" :props="props">
            {{ props.row.eucaliptoAromatico }}
          </q-td>
          <q-td key="hierbaLuisa" :props="props">
            {{ props.row.hierbaLuisa }}
          </q-td>
          <q-td key="hierbaMora" :props="props">
            {{ props.row.hierbaMora }}
          </q-td>
          <q-td key="insulina" :props="props">
            {{ props.row.insulina }}
          </q-td>
          <q-td key="lenguaDeSuegra" :props="props">
            {{ props.row.lenguaDeSuegra }}
          </q-td>
          <q-td key="linaza" :props="props">
            {{ props.row.linaza }}
          </q-td>
          <q-td key="llanten" :props="props">
            {{ props.row.llanten }}
          </q-td>
          <q-td key="manzanilla" :props="props">
            {{ props.row.manzanilla }}
          </q-td>
          <q-td key="marco" :props="props">
            {{ props.row.marco }}
          </q-td>
          <q-td key="matico" :props="props">
            {{ props.row.matico }}
          </q-td>
          <q-td key="menta" :props="props">
            {{ props.row.menta }}
          </q-td>
          <q-td key="hierbaBuena" :props="props">
            {{ props.row.hierbaBuena }}
          </q-td>
          <q-td key="jicama" :props="props">
            {{ props.row.jicama }}
          </q-td>
          <!-- aqui terminan los cambios medicinales  -->

          <!-- <q-td key="DE2410f" :props="props">
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
          </q-td> -->
          <!-- <q-td key="DE2410oo" :props="props">
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
          </q-td> -->
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
          <!-- <q-td key="DE2419" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE2419" :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td> -->
          <!--Cambios DE2419-->
          <q-td key="lavado" :props="props"> {{ props.row.lavado }}</q-td>
          <q-td key="seleccion" :props="props"> {{ props.row.seleccion }}</q-td>
          <q-td key="clasificacion" :props="props"> {{ props.row.clasificacion }}</q-td>
          <q-td key="peso" :props="props"> {{ props.row.peso }}</q-td>
          <q-td key="gavetas" :props="props"> {{ props.row.gavetas }}</q-td>
          <!--Fin cambios DE2419-->
          <q-td key="PuntajeDE2419" :props="props"> {{ props.row.PuntajeDE2419 }}</q-td>
          <!-- <q-td key="DE2420" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE2420" :key="i">
                <q-item-section>
                  <q-item-label>{{ item.nombre }}:{{ item.respuesta.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td> -->
          <!--Cambios pregunta DE2420-->
          <q-td key="atado" :props="props"> {{ props.row.atado }}</q-td>
          <q-td key="enfundado" :props="props"> {{ props.row.enfundado }}</q-td>
          <q-td key="malla" :props="props"> {{ props.row.malla }}</q-td>
          <q-td key="tarrina" :props="props"> {{ props.row.tarrina }}</q-td>
          <q-td key="granel" :props="props"> {{ props.row.granel }}</q-td>
          <q-td key="empacada" :props="props"> {{ props.row.empacada }}</q-td>
          <!--Fin Cambios pregunta DE2420-->
          <q-td key="PuntajeDE2420" :props="props"> {{ props.row.PuntajeDE2420 }}</q-td>
          <q-td key="DE2421" :props="props"> {{ props.row.DE2421 }}</q-td>
          <q-td key="PuntajeDE2421" :props="props"> {{ props.row.PuntajeDE2421 }}</q-td>
          <q-td key="DE2422" :props="props"> {{ props.row.DE2422 }}</q-td>
          <q-td key="PuntajeDE2422" :props="props"> {{ props.row.PuntajeDE2422 }}</q-td>
          <!-- <q-td key="DE2423" :props="props">
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
          </q-td> -->
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
          <!-- <q-td key="DE2425" :props="props">
            <q-list>
              <q-item v-for="(item, i) in props.row.DE2425" :key="i">
                <q-item-section>
                  <q-item-label>{{ i + 1 }} .{{ item.nombre }}:{{ item.respuesta.label
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-td> -->
          <!-- aqui empiezan los cambios animales  -->
          <q-td key="gallinasP" :props="props">
            {{ props.row.gallinasP }}
          </q-td>
          <q-td key="gallinasA" :props="props">
            {{ props.row.gallinasA }}
          </q-td>
          <q-td key="pollosP" :props="props">
            {{ props.row.pollosP }}
          </q-td>
          <q-td key="pollosA" :props="props">
            {{ props.row.pollosA }}
          </q-td>
          <q-td key="patosP" :props="props">
            {{ props.row.patosP }}
          </q-td>
          <q-td key="patosA" :props="props">
            {{ props.row.patosA }}
          </q-td>
          <q-td key="cuyesP" :props="props">
            {{ props.row.cuyesP }}
          </q-td>
          <q-td key="cuyesA" :props="props">
            {{ props.row.cuyesA }}
          </q-td>
          <q-td key="conejosP" :props="props">
            {{ props.row.conejosP }}
          </q-td>
          <q-td key="conejosA" :props="props">
            {{ props.row.conejosA }}
          </q-td>
          <q-td key="chanchosP" :props="props">
            {{ props.row.chanchosP }}
          </q-td>
          <q-td key="chanchosA" :props="props">
            {{ props.row.chanchosA }}
          </q-td>
          <q-td key="truchasP" :props="props">
            {{ props.row.truchasP }}
          </q-td>
          <q-td key="truchasA" :props="props">
            {{ props.row.truchasA }}
          </q-td>
          <q-td key="vacasP" :props="props">
            {{ props.row.vacasP }}
          </q-td>
          <q-td key="vacasA" :props="props">
            {{ props.row.vacasA }}
          </q-td>
          <q-td key="gallinasP" :props="props">
            {{ props.row.gallinasP }}
          </q-td>
          <q-td key="gallinasA" :props="props">
            {{ props.row.gallinasA }}
          </q-td>
          <q-td key="pollosP" :props="props">
            {{ props.row.pollosP }}
          </q-td>
          <q-td key="pollosA" :props="props">
            {{ props.row.pollosA }}
          </q-td>
          <q-td key="patosP" :props="props">
            {{ props.row.patosP }}
          </q-td>
          <q-td key="patosA" :props="props">
            {{ props.row.patosA }}
          </q-td>
          <q-td key="cuyesP" :props="props">
            {{ props.row.cuyesP }}
          </q-td>
          <q-td key="cuyesA" :props="props">
            {{ props.row.cuyesA }}
          </q-td>
          <q-td key="conejosP" :props="props">
            {{ props.row.conejosP }}
          </q-td>
          <q-td key="conejosA" :props="props">
            {{ props.row.conejosA }}
          </q-td>
          <q-td key="chanchosP" :props="props">
            {{ props.row.chanchosP }}
          </q-td>
          <q-td key="chanchosA" :props="props">
            {{ props.row.chanchosA }}
          </q-td>
          <q-td key="truchasP" :props="props">
            {{ props.row.truchasP }}
          </q-td>
          <q-td key="truchasA" :props="props">
            {{ props.row.truchasA }}
          </q-td>
          <q-td key="vacasP" :props="props">
            {{ props.row.vacasP }}
          </q-td>
          <q-td key="vacasA" :props="props">
            {{ props.row.vacasA }}
          </q-td>
          <!-- aqui terminan los cambios animales  -->
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
          <!-- <q-td key="Enca2430" :props="props">
            {{ props.row.Enca2430 }}
          </q-td>
          <q-td key="SubPreg2430" :props="props">
            {{ props.row.SubPreg2430 }}
          </q-td>
          <q-td key="PuntajeEnca2430" :props="props">
            {{ props.row.PuntajeEnca2430 }}
          </q-td>-->
          <q-td key="DE2430" :props="props">
            {{ props.row.DE2430 }}
          </q-td>
          <!-- <q-td key="PuntajeDE2430" :props="props">
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
          </q-td>-->
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
          <q-td key="PuntajeTotalDE" :props="props">
            {{ props.row.PuntajeTotalDE }}
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
  { name: 'nombre', label: 'Nombre', align: 'left', field: 'nombre' },
  { name: 'cedula', label: 'Cedula', align: 'left', field: 'cedula' },
  {
    name: 'organizacionPert',
    label: 'Organizacion',
    align: 'left',
    field: 'organizacionPert',
  },
  {
    name: 'produtCertif',
    label: 'Produtor Certificado',
    align: 'left',
    field: 'produtCertif',
  },
  { name: 'DE241', label: '2.4.1 DE', align: 'left', field: 'DE241' },
  { name: 'PuntajeDE241', label: 'Puntaje2.4.1', align: 'left', field: 'PuntajeDE241' },
  { name: 'DE242t', label: 'TotalPerimetro', align: 'left', field: 'DE242t' },
  { name: 'DE242to', label: 'TotalMetroSembrado', align: 'left', field: 'DE242to' },
  { name: 'DE242p', label: 'PorcentajeMetroSembrado', align: 'left', field: 'DE242p' },
  { name: 'PuntajeDE242', label: 'Puntaje2.4.2', align: 'left', field: 'PuntajeDE242' },
  { name: 'DE243', label: '2.4.3 DE', align: 'left', field: 'DE243' },
  { name: 'subPregDE243', label: 'Sub 2.4.3 DE', align: 'left', field: 'subPregDE243' },
  { name: 'PuntajeDE243', label: 'Puntaje2.4.3', align: 'left', field: 'PuntajeDE243' },
  { name: 'DE244', label: '2.4.4 DE', align: 'left', field: 'DE244' },
  // inicio de cambios
  { name: 'terrazaBanco', label: 'subPreg 2.4.4, Terrazas Bancos', align: 'left', field: 'terrazaBanco' },
  { name: 'terrazasFormLent', label: 'subPreg 2.4.4, Terrazas Form Lent', align: 'left', field: 'terrazasFormLent' },
  { name: 'terrazasIndiv', label: 'subPreg 2.4.4, Terrazas Individual', align: 'left', field: 'terrazasIndiv' },
  { name: 'barrerasVivas', label: 'subPreg 2.4.4, Barreras Vivas', align: 'left', field: 'barrerasVivas' },
  { name: 'ZanjasFiltrDesv', label: 'subPreg 2.4.4, Zanjas Filtr Desv', align: 'left', field: 'ZanjasFiltrDesv' },
  { name: 'abonosVerdes', label: 'subPreg 2.4.4, Abonos Verdes', align: 'left', field: 'abonosVerdes' },
  { name: 'diqueCarca', label: 'subPreg 2.4.4, Dique Cárca', align: 'left', field: 'diqueCarca' },
  { name: 'surcoContorno', label: 'subPreg 2.4.4, Surco Contorno', align: 'left', field: 'surcoContorno' },
  { name: 'acolchado', label: 'subPreg 2.4.4, Acolchado', align: 'left', field: 'acolchado' },
  { name: 'abonosOrganicos', label: 'subPreg 2.4.4, Abonos Orgánicos', align: 'left', field: 'abonosOrganicos' },
  // Fin de cambios
  { name: 'PuntajeDE244', label: 'Puntaje2.4.4', align: 'left', field: 'PuntajeDE244' },
  { name: 'DE245', label: '2.4.5 DE', align: 'left', field: 'DE245' },
  //{ name: 'subPreg245', label: 'Sub 2.4.5 DE', align: 'left', field: 'subPreg245' },
  //Cambios subPregunta245
  { name: 'subAlta', label: '2.4.5 Alta', align: 'left', field: 'subAlta' },
  { name: 'SubMedia', label: '2.4.5 Media', align: 'left', field: 'SubMedia' },
  { name: 'subBaja', label: '2.4.5 Baja', align: 'left', field: 'subBaja' },
  //Fin Cambios subPregunta245
  { name: 'PuntajeDE245', label: 'Puntaje2.4.5', align: 'left', field: 'PuntajeDE245' },
  //{ name: 'DE246', label: '2.4.6 DE', align: 'left', field: 'DE246' },
  //Cambios DE246
  { name: 'majadeo', label: '2.4.6, Majadeo', align: 'left', field: 'majadeo' },
  { name: 'compost', label: '2.4.6, Compost', align: 'left', field: 'compost' },
  { name: 'bocashi', label: '2.4.6, Bocashi', align: 'left', field: 'bocashi' },
  { name: 'humus', label: '2.4.6, Humus', align: 'left', field: 'humus' },
  { name: 'colchon', label: '2.4.6, Colchón', align: 'left', field: 'colchon' },
  { name: 'desechosPodas', label: '2.4.6, Desecho Podas', align: 'left', field: 'desechosPodas' },
  { name: 'abonoVerde', label: '2.4.6, Abono Verde', align: 'left', field: 'abonoVerde' },
  { name: 'otros', label: '2.4.6, Otros', align: 'left', field: 'otros' },
  //Fin cambios DE246
  { name: 'subPreg246', label: 'sub 2.4.6 DE', align: 'left', field: 'subPreg246' },
  { name: 'PuntajeDE246', label: 'Puntaje2.4.6', align: 'left', field: 'PuntajeDE246' },
  { name: 'DE247', label: '2.4.7 DE', align: 'left', field: 'DE247' },
  { name: 'subPreg2471', label: 'Sub 2.4.7.1 DE', align: 'left', field: 'subPreg2471' },
  { name: 'subPreg2472', label: 'Sub 2.4.7.2 DE', align: 'left', field: 'subPreg2472' },
  { name: 'PuntajeDE247', label: 'Puntaje2.4.7', align: 'left', field: 'PuntajeDE247' },
  //{ name: 'DE248', label: '2.4.8 DE', align: 'left', field: 'DE248' },
  //cambios DE248
  { name: 'biol', label: '2.4.8 Biol', align: 'left', field: 'biol' },
  { name: 'teFrutas', label: '2.4.8 Té de frutas', align: 'left', field: 'teFrutas' },
  { name: 'teHierbasMedi', label: '2.4.8 Té Hierbas Medicinales', align: 'left', field: 'teHierbasMedi' },
  // Fin cambios DE248
  { name: 'PuntajeDE248', label: 'Puntaje2.4.8', align: 'left', field: 'PuntajeDE248' },
  { name: 'DE249', label: '2.4.9 DE', align: 'left', field: 'DE249' },
  { name: 'subPreg249', label: 'sub 2.4.9 DE', align: 'left', field: 'subPreg249' },
  { name: 'PuntajeDE249', label: 'Puntaje2.4.9', align: 'left', field: 'PuntajeDE249' },
  // Aquí empiezan los cambios hortalizas
  { name: 'acelga', label: '2.4.10,H, acelga m2', align: 'left', field: 'acelga' },
  { name: 'aji', label: 'Aji m2', align: 'left', field: 'aji' },
  { name: 'albahaca', label: 'Albahaca m2', align: 'left', field: 'albahaca' },
  { name: 'apio', label: 'Apio m2', align: 'left', field: 'apio' },
  { name: 'berro', label: 'Berro m2', align: 'left', field: 'berro' },
  { name: 'brocoli', label: 'Brocoli m2', align: 'left', field: 'brocoli' },
  { name: 'cebollaLarga', label: 'Cebolla Larga m2', align: 'left', field: 'cebollaLarga' },
  { name: 'cebollaPaiteña', label: 'Cebolla Paiteña m2', align: 'left', field: 'cebollaPaiteña' },
  { name: 'cebollin', label: 'Cebollin m2', align: 'left', field: 'cebollin' },
  { name: 'cebollaPerla', label: 'Cebolla Perla m2', align: 'left', field: 'cebollaPerla' },
  { name: 'cebollaPuerro', label: 'Cebolla Puerro m2', align: 'left', field: 'cebollaPuerro' },
  { name: 'champiñones', label: 'Champiñones m2', align: 'left', field: 'champiñones' },
  { name: 'cilantro', label: 'Cilantro m2', align: 'left', field: 'cilantro' },
  { name: 'col', label: 'Col m2', align: 'left', field: 'col' },
  { name: 'colMorada', label: 'Col Morada m2', align: 'left', field: 'colMorada' },
  { name: 'coliflor', label: 'Coliflor m2', align: 'left', field: 'coliflor' },
  { name: 'espinaca', label: 'Espinaca m2', align: 'left', field: 'espinaca' },
  { name: 'lechuga', label: 'Lechuga m2', align: 'left', field: 'lechuga' },
  { name: 'lechugaCrespa', label: 'Lechuga Crespa m2', align: 'left', field: 'lechugaCrespa' },
  { name: 'melloco', label: 'Melloco m2', align: 'left', field: 'melloco' },
  { name: 'nabo', label: 'Nabo m2', align: 'left', field: 'nabo' },
  { name: 'papa', label: 'Papa m2', align: 'left', field: 'papa' },
  { name: 'pepinillo', label: 'Pepinillo m2', align: 'left', field: 'pepinillo' },
  { name: 'perejil', label: 'Perejil m2', align: 'left', field: 'perejil' },
  { name: 'pimiento', label: 'Pimiento m2', align: 'left', field: 'pimiento' },
  { name: 'rabano', label: 'Rabano m2', align: 'left', field: 'rabano' },
  { name: 'remolacha', label: 'Remolacha m2', align: 'left', field: 'remolacha' },
  { name: 'romanesco', label: 'Romanesco m2', align: 'left', field: 'romanesco' },
  { name: 'tomateRinion', label: 'Tomate Riñion m2', align: 'left', field: 'tomateRinion' },
  { name: 'tomateCherry', label: 'Tomate Cherry m2', align: 'left', field: 'tomateCherry' },
  { name: 'vainita', label: 'Vainita m2', align: 'left', field: 'vainita' },
  { name: 'yuca', label: 'Yuca m2', align: 'left', field: 'yuca' },
  { name: 'zanahoria', label: 'Zanahoria m2', align: 'left', field: 'zanahoria' },
  { name: 'zapallo', label: 'Zapallo m2', align: 'left', field: 'zapallo' },
  { name: 'zuquini', label: 'Zuquini m2', align: 'left', field: 'zuquini' },
  // Aquí terminan los cambios hortalizas
  //Aqui empiezan los cambios frutas
  { name: 'aguacate', label: '2.4.10,F, aguacate m2', align: 'center', field: 'aguacate' },
  { name: 'babaco', label: 'Babaco m2', align: 'center', field: 'babaco' },
  { name: 'capuli', label: 'Capuli m2', align: 'center', field: 'capuli' },
  { name: 'chamburo', label: 'Chamburo m2', align: 'center', field: 'chamburo' },
  { name: 'chayote', label: 'Chayote m2', align: 'center', field: 'chayote' },
  { name: 'chirimoya', label: 'Chirimoya m2', align: 'center', field: 'chirimoya' },
  { name: 'ciruelos', label: 'Ciruelos m2', align: 'center', field: 'ciruelos' },
  { name: 'durazno', label: 'Durazno m2', align: 'center', field: 'durazno' },
  { name: 'frutilla', label: 'Frutilla m2', align: 'center', field: 'frutilla' },
  { name: 'frutos_secos', label: 'Frutos Secos m2', align: 'center', field: 'frutos_secos' },
  { name: 'granadilla', label: 'Granadilla m2', align: 'center', field: 'granadilla' },
  { name: 'guayaba', label: 'Guayaba m2', align: 'center', field: 'guayaba' },
  { name: 'higo', label: 'Higo m2', align: 'center', field: 'higo' },
  { name: 'limas', label: 'Limas m2', align: 'center', field: 'limas' },
  { name: 'limon', label: 'Limon m2', align: 'center', field: 'limon' },
  { name: 'mandarina', label: 'Mandarina m2', align: 'center', field: 'mandarina' },
  //aqui terminan los cambios frutas
  //aqui empiezan los cambios pastos
  { name: 'rayGrassAnual', label: '2.4.10,P, Ray Grass Anual m2', align: 'center', field: 'rayGrassAnual' },
  { name: 'rayGrassPerenne', label: 'Ray Grass Perenne m2', align: 'center', field: 'rayGrassPerenne' },
  { name: 'pastoNatural', label: 'Pasto Natural m2', align: 'center', field: 'pastoNatural' },
  { name: 'bolonAzul', label: 'Bolon Azul m2', align: 'center', field: 'bolonAzul' },
  { name: 'alfalfa', label: 'Alfalfa m2', align: 'center', field: 'alfalfa' },
  { name: 'mezclaForrajera', label: 'Mezcla Forrajera m2', align: 'center', field: 'mezclaForrajera' },
  { name: 'maralfalfa', label: 'Maralfalfa m2', align: 'center', field: 'maralfalfa' },
  { name: 'vicia', label: 'Vicia m2', align: 'center', field: 'vicia' },
  { name: 'avena', label: 'Avena m2', align: 'center', field: 'avena' },
  //aqui terminan los cambios pastos
  //aqui empiezan los cambios cereales
  { name: 'amaranto', label: '2.4.10,C, amaranto m2', align: 'center', field: 'amaranto' },
  { name: 'arveja', label: 'Arveja m2', align: 'center', field: 'arveja' },
  { name: 'canguil', label: 'Canguil m2', align: 'center', field: 'canguil' },
  { name: 'cebada', label: 'Cebada m2', align: 'center', field: 'cebada' },
  { name: 'chia', label: 'Chia m2', align: 'center', field: 'chia' },
  { name: 'chochos', label: 'Chochos m2', align: 'center', field: 'chochos' },
  { name: 'choclo', label: 'Choclo m2', align: 'center', field: 'choclo' },
  { name: 'chulpi', label: 'Chulpi m2', align: 'center', field: 'chulpi' },
  { name: 'frejol', label: 'Frejol m2', align: 'center', field: 'frejol' },
  { name: 'habas', label: 'Habas m2', align: 'center', field: 'habas' },
  { name: 'lentejas', label: 'Lentejas m2', align: 'center', field: 'lentejas' },
  // { name: 'linaza', label: 'Linaza', align: 'center', field: 'linaza' },
  { name: 'maiz', label: 'maiz m2', align: 'center', field: 'maiz' },
  { name: 'morocho', label: 'Morocho m2', align: 'center', field: 'morocho' },
  { name: 'papa', label: 'Papa m2', align: 'center', field: 'papa' },
  { name: 'quinua', label: 'Quinua m2', align: 'center', field: 'quinua' },
  { name: 'trigo', label: 'Trigo m2', align: 'center', field: 'trigo' },
  //aqui terminan los cambois cereales
  //aqui inician los cambois medicinales
  { name: 'arrayan', label: '2.4.10,M, arrayan m2', align: 'center', field: 'arrayan' },
  { name: 'borraja', label: 'Borraja m2', align: 'center', field: 'borraja' },
  { name: 'cedron', label: 'Cedron m2', align: 'center', field: 'cedron' },
  { name: 'colaDeCaballo', label: 'Cola de Caballo m2', align: 'center', field: 'colaDeCaballo' },
  { name: 'eucaliptoAromatico', label: 'Eucalipto Aromatico m2', align: 'center', field: 'eucaliptoAromatico' },
  { name: 'hierbaLuisa', label: 'Hierba Luisa m2', align: 'center', field: 'hierbaLuisa' },
  { name: 'hierbaMora', label: 'Hierba Mora m2', align: 'center', field: 'hierbaMora' },
  { name: 'insulina', label: 'Insulina m2', align: 'center', field: 'insulina' },
  { name: 'lenguaDeSuegra', label: 'Lengua de Suegra m2', align: 'center', field: 'lenguaDeSuegra' },
  { name: 'linaza', label: 'Linaza m2', align: 'center', field: 'linaza' },
  { name: 'llanten', label: 'Llanten m2', align: 'center', field: 'llanten' },
  { name: 'manzanilla', label: 'Manzanilla m2', align: 'center', field: 'manzanilla' },
  { name: 'marco', label: 'Marco m2', align: 'center', field: 'marco' },
  { name: 'matico', label: 'Matico m2', align: 'center', field: 'matico' },
  { name: 'menta', label: 'Menta m2', align: 'center', field: 'menta' },
  { name: 'hierbaBuena', label: 'Hierba Buena m2', align: 'center', field: 'hierbaBuena' },
  { name: 'jicama', label: 'Jicama m2', align: 'center', field: 'jicama' },
  //aqui terminan los cambois medicinales

  // { name: 'DE2410h', label: '2.4.10h DE', align: 'center', field: 'DE2410h' },
  // { name: 'DE2410f', label: '2.4.10f DE', align: 'center', field: 'DE2410f' },
  // { name: 'DE2410p', label: '2.4.10p DE', align: 'center', field: 'DE2410p' },
  // { name: 'DE2410cs', label: '2.4.10cs DE', align: 'center', field: 'DE2410cs' },
  // { name: 'DE2410pm', label: '2.4.10pm DE', align: 'center', field: 'DE2410pm' },
  // { name: 'DE2410oo', label: '2.4.10oo DE', align: 'center', field: 'DE2410oo' },
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
  // { name: 'DE2419', label: '2.4.19 DE', align: 'center', field: 'DE2419' },
  //Cambios DE2419
  { name: 'lavado', label: '2.4.19, Lavado, agua potable', align: 'center', field: 'lavado' },
  { name: 'seleccion', label: '2.4.19, Selección', align: 'center', field: 'seleccion' },
  { name: 'clasificacion', label: '2.4.19, Clasificación', align: 'center', field: 'clasificacion' },
  { name: 'peso', label: '2.4.19, Peso', align: 'center', field: 'peso' },
  { name: 'gavetas', label: '2.4.19, Transporte en gavetas', align: 'center', field: 'gavetas' },
  //Fin Cambios DE2419
  { name: 'PuntajeDE2419', label: 'Puntaje2.4.19', align: 'center', field: 'PuntajeDE2419' },
  // { name: 'DE2420', label: '2.4.20 DE', align: 'center', field: 'DE2420' },
  //cambios DE2420
  { name: 'atado', label: '2.4.20, Atado', align: 'center', field: 'atado' },
  { name: 'enfundado', label: '2.4.20, Enfundado', align: 'center', field: 'enfundado' },
  { name: 'malla', label: '2.4.20, En mallas', align: 'center', field: 'malla' },
  { name: 'tarrina', label: '2.4.20, En tarrinas', align: 'center', field: 'tarrina' },
  { name: 'granel', label: '2.4.20, Al granel', align: 'center', field: 'granel' },
  { name: 'empacada', label: '2.4.20, Empacado al vacio', align: 'center', field: 'empacada' },
  //fin cambios DE2420
  { name: 'PuntajeDE2420', label: 'Puntaje2.4.20', align: 'center', field: 'PuntajeDE2420' },
  { name: 'DE2421', label: '2.4.21 DE', align: 'center', field: 'DE2421' },
  { name: 'PuntajeDE2421', label: 'Puntaje2.4.21', align: 'center', field: 'PuntajeDE2421' },
  { name: 'DE2422', label: '2.4.22 DE', align: 'center', field: 'DE2422' },
  { name: 'PuntajeDE2422', label: 'Puntaje2.4.22', align: 'center', field: 'PuntajeDE2422' },
  //{ name: 'DE2423', label: '2.4.23 DE', align: 'center', field: 'DE2423' },
  { name: 'sub2423', label: 'Total Especies', align: 'center', field: 'sub2423' },
  { name: 'PuntajeDE2423', label: 'Puntaje2.4.23', align: 'center', field: 'PuntajeDE2423' },
  { name: 'DE2424rGranos', label: '2.4.24 granosDE', align: 'center', field: 'DE2424rGranos' },
  { name: 'DE2424rPastos', label: '2.4.24Pastos DE', align: 'center', field: 'DE2424rPastos' },
  { name: 'DE2424rRestos', label: '2.4.24 RestosDE', align: 'center', field: 'DE2424rRestos' },
  { name: 'PuntajeDE2424', label: 'Puntaje2.4.24', align: 'center', field: 'PuntajeDE2424' },
  //aqui empiezan los cambios animales
  { name: 'gallinasP', label: '2.4.25, Gallinas pequeñas', align: 'center', field: 'gallinasP' },
  { name: 'gallinasA', label: 'Gallinas adultas', align: 'center', field: 'gallinasA' },
  { name: 'pollosP', label: 'Pollos pequeños', align: 'center', field: 'pollosP' },
  { name: 'pollosA', label: 'Pollos adultos', align: 'center', field: 'pollosA' },
  { name: 'patosP', label: 'Patos pequeños', align: 'center', field: 'patosP' },
  { name: 'patosA', label: 'Patos adultos', align: 'center', field: 'patosA' },
  { name: 'cuyesP', label: 'Cuyes pequeños', align: 'center', field: 'cuyesP' },
  { name: 'cuyesA', label: 'Cuyes adultos', align: 'center', field: 'cuyesA' },
  { name: 'conejosP', label: 'Conejos pequeños', align: 'center', field: 'conejosP' },
  { name: 'conejosA', label: 'Conejos adultos', align: 'center', field: 'conejosA' },
  { name: 'chanchosP', label: 'Chanchos pequeños', align: 'center', field: 'chanchosP' },
  { name: 'chanchosA', label: 'Chanchos adultos', align: 'center', field: 'chanchosA' },
  { name: 'truchasP', label: 'Truchas pequeñas', align: 'center', field: 'truchasP' },
  { name: 'truchasA', label: 'Truchas adultas', align: 'center', field: 'truchasA' },
  { name: 'vacasP', label: 'Vacas pequeñas', align: 'center', field: 'vacasP' },
  { name: 'vacasA', label: 'Vacas adultas', align: 'center', field: 'vacasA' },
  { name: 'ovejasP', label: 'Ovejas pequeñas', align: 'center', field: 'ovejasP' },
  { name: 'ovejasA', label: 'Ovejas adultas', align: 'center', field: 'ovejasA' },
  { name: 'ganzosP', label: 'Ganzos pequeños', align: 'center', field: 'ganzosP' },
  { name: 'ganzosA', label: 'Ganzos adultos', align: 'center', field: 'ganzosA' },
  { name: 'caballosP', label: 'Caballos pequeños', align: 'center', field: 'caballosP' },
  { name: 'caballosA', label: 'Caballos adultos', align: 'center', field: 'caballosA' },
  { name: 'cabrasP', label: 'Cabras pequeñas', align: 'center', field: 'cabrasP' },
  { name: 'cabrasA', label: 'Cabras adultas', align: 'center', field: 'cabrasA' },
  { name: 'codornisP', label: 'Codornices pequeñas', align: 'center', field: 'codornisP' },
  { name: 'codornisA', label: 'Codornices adultas', align: 'center', field: 'codornisA' },
  { name: 'burrosP', label: 'Burros pequeños', align: 'center', field: 'burrosP' },
  { name: 'burrosA', label: 'Burros adultos', align: 'center', field: 'burrosA' },
  { name: 'llamasP', label: 'Llamas pequeñas', align: 'center', field: 'llamasP' },
  { name: 'llamasA', label: 'Llamas adultas', align: 'center', field: 'llamasA' },
  { name: 'ternerasP', label: 'Terneras pequeñas', align: 'center', field: 'ternerasP' },
  { name: 'ternerasA', label: 'Terneras adultas', align: 'center', field: 'ternerasA' },
  { name: 'ternerosP', label: 'Terneros pequeños', align: 'center', field: 'ternerosP' },
  { name: 'ternerosA', label: 'Terneros adultos', align: 'center', field: 'ternerosA' },
  //aqui terminan los cambios animales
  //{ name: 'DE2425', label: '2.4.25 DE', align: 'center', field: 'DE2425' },
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
  // { name: 'Enca2430', label: '2.4.Enca DE', align: 'center', field: 'Enca2430' },
  // { name: 'SubPreg2430', label: '2.4.30 sub DE', align: 'center', field: 'SubPreg2430' },
  // { name: 'PuntajeEnca2430', label: 'Puntaje2.4.Sub', align: 'center', field: 'PuntajeEnca2430' },
  // { name: 'DE2430', label: '2.4.30 DE', align: 'center', field: 'DE2430' },
  // { name: 'PuntajeDE2430', label: 'Puntaje2.4.30', align: 'center', field: 'PuntajeDE2430' },
  // { name: 'DE2431', label: '2.4.31 DE', align: 'center', field: 'DE2431' },
  // { name: 'PuntajeDE2431', label: 'Puntaje2.4.31', align: 'center', field: 'PuntajeDE2431' },
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
  //otra dimension
  { name: 'PuntajeTotalDE', label: 'PuntajeTotalDE', align: 'center', field: 'PuntajeTotalDE' },
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
      //inicio de cambios
      terrazaBanco: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '1.Terrazas de banco'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      terrazasFormLent: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '2.Terrazas de formación lenta'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      terrazasIndiv: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '3.Terrazas individuales'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      barrerasVivas: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '4.Barreras vivas'
        );
        return item ? `${item.respuesta?.label}` : '';
      })(),
      ZanjasFiltrDesv: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '5.Zanjas de filtración y desviación'
        );
        return item ? `${item.respuesta?.label}` : '';
      })(),
      abonosVerdes: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '6. Incorporación de abonos verdes'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      diqueCarca: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '7. Dique de control de cárcavas'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      surcoContorno: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '8. Surco en contorno'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      acolchado: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '9.Acolchado'
        );
        return item ? `${item.respuesta?.label}` : '';
      })(),
      abonosOrganicos: (() => {
        const item = productor.dimensionEcologica.preg244.subPreg244.items.find(
          item => item.nombre === '10. Incorpora abonos orgánicos (Bocashi,compost, humus, estiércoles etc)'
        );
        return item ? `${item.respuesta?.label} ` : '';
      })(),
      //fin de cambios

      PuntajeDE244: productor.dimensionEcologica.preg244.puntos,
      DE245: productor.dimensionEcologica.preg245.respuesta.label,
      //subPreg245: productor.dimensionEcologica.preg245.subPreg245.items,
      // Cambios subPreg245
      subAlta: (() => {
        const item = productor.dimensionEcologica.preg245.subPreg245.items.find(
          (item) => item.nombre === '• Alta.- Es evidente arrastre de suelo por el viento, presencia de cárcavas y canalillos'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      SubMedia: (() => {
        const item = productor.dimensionEcologica.preg245.subPreg245.items.find(
          (item) => item.nombre === '• Media.- Erosión evidente pero poca el sistema agroforestal   amortigua la pérdida del suelo'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      subBaja: (() => {
        const item = productor.dimensionEcologica.preg245.subPreg245.items.find(
          (item) => item.nombre === '• Baja.- No hay mayores señales de erosión.'
        );
        return item ? `${item.respuesta.value}` : '';
      })(),
      // Fin Cambios subPreg245
      PuntajeDE245: productor.dimensionEcologica.preg245.puntos,
      //DE246: productor.dimensionEcologica.preg246.items,
      //cambios DE246
      majadeo: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Majadeo'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      compost: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Compost'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      bocashi: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Bocashi'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      humus: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Humus'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      colchon: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Colchón'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      desechosPodas: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Desecho de podas'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      abonoVerde: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Abonos verdes'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      otros: (() => {
        const item = productor.dimensionEcologica.preg246.items.find(
          (item) => item.nombre === 'Otros'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      //Fin cambios DE246
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
      //DE248: productor.dimensionEcologica.preg248.cual,
      //cambios DE248
      biol: (() => {
        const item = productor.dimensionEcologica.preg248.cual.find(
          (item) => item.cual.label === 'Biol'
        );
        return item ? `${item.cantidad}: Cantidad ${item.frecuencia}: fecuencia` : '';
      })(),
      teFrutas: (() => {
        const item = productor.dimensionEcologica.preg248.cual.find(
          (item) => item.cual.label === 'Té de frutas'
        );
        return item ? `${item.cantidad}: Cantidad ${item.frecuencia}: fecuencia` : '';
      })(),
      teHierbasMedi: (() => {
        const item = productor.dimensionEcologica.preg248.cual.find(
          (item) => item.cual.label === 'Té de hierbas medicinales'
        );
        return item ? `${item.cantidad}: Cantidad ${item.frecuencia}: fecuencia` : '';
      })(),
      //Fin cambios DE248
      PuntajeDE248: productor.dimensionEcologica.preg248.puntos,
      DE249: productor.dimensionEcologica.preg249.respuesta.label,
      subPreg249: productor.dimensionEcologica.preg249.subPreg249.respuesta.label,
      PuntajeDE249: productor.dimensionEcologica.preg249.puntos,
      //inicio de cambios horatlizas
      acelga: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Acelga'
        );
        return item ? ` ${item.area}` : '';
      })(),

      ají: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Ají'
        );
        return item ? `${item.area}` : '';
      })(),

      albahaca: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Albahaca'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      apio: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Apio'
        );
        return item ? `  ${item.area} ` : '';
      })(),

      berro: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Berro'
        );
        return item ? ` ${item.area}` : '';
      })(),

      brócoli: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Brócoli'
        );
        return item ? `  ${item.area}` : '';
      })(),

      cebollaLarga: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Cebolla larga'
        );
        return item ? ` ${item.area}` : '';
      })(),

      cebollaPaiteña: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Cebolla paiteña'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      cebollin: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Cebollín'
        );
        return item ? `${item.area} ` : '';
      })(),

      cebollaPerla: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Cebolla perla'
        );
        return item ? `${item.area}` : '';
      })(),

      cebollaPuerro: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Cebolla puerro'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      champiñones: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Champiñones'
        );
        return item ? ` ${item.area}` : '';
      })(),

      cilantro: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Cilantro'
        );
        return item ? `  ${item.area} ` : '';
      })(),
      col: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Col'
        );
        return item ? ` ${item.area}` : '';
      })(),

      colMorada: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Col morada'
        );
        return item ? `  ${item.area} ` : '';
      })(),

      coliflor: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Coliflor'
        );
        return item ? `  ${item.area} ` : '';
      })(),

      espinaca: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Espinaca'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      lechuga: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Lechuga'
        );
        return item ? ` ${item.area}` : '';
      })(),

      lechugaCrespa: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Lechuga crespa'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      melloco: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Melloco'
        );
        return item ? `${item.area} ` : '';
      })(),

      nabo: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Nabo'
        );
        return item ? `  ${item.area} ` : '';
      })(),
      pepinillo: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Pepinillo'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      perejil: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Perejil'
        );
        return item ? `${item.area} ` : '';
      })(),

      pimiento: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Pimiento'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      rábano: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Rábano'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      remolacha: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Remolacha'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      romanesco: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Romanesco'
        );
        return item ? `  ${item.area} ` : '';
      })(),

      tomateRinion: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Tomate riñon'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      tomateCherry: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Tomate Cherry'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      vainita: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Vainita'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      yuca: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Yuca'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      zanahoria: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Zanahoria'
        );
        return item ? `${item.area} ` : '';
      })(),

      zapallo: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Zapallo'
        );
        return item ? `${item.area} ` : '';
      })(),

      zuquini: (() => {
        const item = productor.dimensionEcologica.preg2410.hortalizas.find(
          (item) => item.producto.label === 'Zuquini'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      //fin de cambios hortalizas
      //inicio de cambios frutas
      aguacate: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Aguacate'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      babaco: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Babaco'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      capuli: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Capulí'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      chamburo: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Chamburo'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      chayote: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Chayote'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      chirimoya: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Chirimoya'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      ciruelos: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Ciruelos'
        );
        return item ? `${item.area} m2` : '';
      })(),

      durazno: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Durazno'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      frutilla: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Frutilla'
        );
        return item ? `${item.area} ` : '';
      })(),

      frutos_secos: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Frutos secos'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      granadilla: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Granadilla'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      guayaba: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Guayaba'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      higo: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Higo'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      limas: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Limas'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      limon: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Limon'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      mandarina: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Mandarina'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      maracuya: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Maracuya'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      mora: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Mora'
        );
        return item ? `${item.area} ` : '';
      })(),

      naranja: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Naranja'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      epino: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Pepino'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      pina: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Piña'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      platano: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Platano'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      papaya: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Papaya'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      seda: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Seda'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      taxo: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Taxo'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      tocte: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Tocte'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      tomate_arbol: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Tomate de árbol'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      tunas: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Tunas'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      uvillas: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Uvillas'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      verde: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Verde'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      zambo: (() => {
        const item = productor.dimensionEcologica.preg2410.frutas.find(
          (item) => item.producto.label === 'Zambo'
        );
        return item ? `${item.area} ` : '';
      })(),
      //fin de cambios frutales
      //inicio de cambios pastos
      rayGrassAnual: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Ray Grass Anual'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      rayGrassPerenne: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Ray Grass Perenne'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      pastoNatural: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Pasto natural'
        );
        return item ? `${item.area} ` : '';
      })(),
      bolonAzul: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Bolón azul'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      alfalfa: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Alfalfa'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      mezclaForrajera: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Mezcla forrajera'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      maralfalfa: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Maralfalfa'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      vicia: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Vicia'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      avena: (() => {
        const item = productor.dimensionEcologica.preg2410.pastos.find(
          (item) => item.producto.label === 'Avena'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      //fin de cambios pastos
      //inicio de cambios cereales
      amaranto: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Amaranto'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      arveja: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Arveja'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      canguil: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Canguil'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      cebada: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Cebada'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      chia: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Chia'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      chochos: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Chochos'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      choclo: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Choclo'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      chulpi: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Chulpi'
        );
        return item ? `${item.area} ` : '';
      })(),
      frejol: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Frejol'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      habas: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Habas'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      lentejas: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Lentejas'
        );
        return item ? `${item.area} ` : '';
      })(),
      maiz: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Maiz'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      morocho: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Morocho'
        );
        return item ? `${item.area} ` : '';
      })(),
      papa: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Papa'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      quinua: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Quinua'
        );
        return item ? ` ${item.area} ` : '';
      })(),
      trigo: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Trigo'
        );
        return item ? `${item.area} ` : '';
      })(),
      //fin de cambios cereales
      //inicio de cambio medicinales
      arrayan: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Arrayan'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      borraja: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Borraja'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      cedron: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Cedrón'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      colaDeCaballo: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Cola de caballo'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      eucaliptoAromatico: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Eucalipto aromático'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      hierbaLuisa: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Hierba Luisa'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      hierbaMora: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Hierba Mora'
        );
        return item ? `${item.area} ` : '';
      })(),

      insulina: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Insulina'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      lenguaDeSuegra: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Lengua de suegra'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      linaza: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Linaza'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      llanten: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Llanten'
        );
        return item ? ` ${item.area} m2` : '';
      })(),

      manzanilla: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Manzanilla'
        );
        return item ? `${item.area} ` : '';
      })(),

      marco: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Marco'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      matico: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Matico'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      menta: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Menta'
        );
        return item ? ` ${item.area} ` : '';
      })(),

      hierbaBuena: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Hierba Buena'
        );
        return item ? `${item.area}` : '';
      })(),

      jicama: (() => {
        const item = productor.dimensionEcologica.preg2410.cerealesYSeudocere.find(
          (item) => item.producto.label === 'Jicama'
        );
        return item ? `${item.area}` : '';
      })(),
      //fin de cambios medicinales
      //inicio de cambios animales
      gallinasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Gallinas'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      gallinasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Gallinas'
        );
        return item ? `${item.adultos}` : '';
      })(),
      pollosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Pollos'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      pollosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Pollos'
        );
        return item ? `${item.adultos}` : '';
      })(),
      cuyesP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Cuyes'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      cuyesA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Cuyes'
        );
        return item ? `${item.adultos}` : '';
      })(),
      conejosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Conejos'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      conejosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Conejos'
        );
        return item ? `${item.adultos}` : '';
      })(),
      chanchosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Chanchos'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      chanchosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Chanchos'
        );
        return item ? `${item.adultos}` : '';
      })(),
      truchasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Truchas'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      truchasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Truchas'
        );
        return item ? `${item.adultos}` : '';
      })(),
      vacasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Vacas'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      vacasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Vacas'
        );
        return item ? `${item.adultos}` : '';
      })(),
      obejasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Obejas'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      obejasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Obejas'
        );
        return item ? `${item.adultos}` : '';
      })(),
      ganzosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Ganzos'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      ganzosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Ganzos'
        );
        return item ? `${item.adultos}` : '';
      })(),
      caballosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Caballos'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      caballosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Caballos'
        );
        return item ? `${item.adultos}` : '';
      })(),
      cabrasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Cabras'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      cabrasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Cabras'
        );
        return item ? `${item.adultos}` : '';
      })(),
      codornisP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Codornis'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      codornisA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Codornis'
        );
        return item ? `${item.adultos}` : '';
      })(),
      burrosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Burros'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      burrosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Burros'
        );
        return item ? `${item.adultos}` : '';
      })(),
      llamasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Llamas'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      llamasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Llamas'
        );
        return item ? `${item.adultos}` : '';
      })(),
      ternerasP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Terneras'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      ternerasA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'terneras'
        );
        return item ? `${item.adultos}` : '';
      })(),
      ternerosP: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Terneros'
        );
        return item ? `${item.pequenios}` : '';
      })(),
      ternerosA: (() => {
        const item = productor.dimensionEcologica.preg2423.especieA.find(
          (item) => item.especie.label === 'Terneros'
        );
        return item ? `${item.adultos}` : '';
      })(),
      //fin de cambios animales
      // DE2410h: productor.dimensionEcologica.preg2410.hortalizas,
      // DE2410f: productor.dimensionEcologica.preg2410.frutas,
      // DE2410p: productor.dimensionEcologica.preg2410.pastos,
      // DE2410cs: productor.dimensionEcologica.preg2410.cerealesYSeudocere,
      // DE2410pm: productor.dimensionEcologica.preg2410.plantasMedicin,
      PuntajeDE2410: productor.dimensionEcologica.preg2410.puntos,
      DE2411: productor.dimensionEcologica.preg2411.respuesta.label,
      PuntajeDE2411: productor.dimensionEcologica.preg2411.puntos,
      DE2412: productor.dimensionEcologica.preg2412.respuesta.label,
      PuntajeDE2412: productor.dimensionEcologica.preg2412.puntos,
      DE2413: productor.dimensionEcologica.preg2413.respuesta.label,
      PuntajeDE2413: productor.dimensionEcologica.preg2413.puntos,
      DE2414: productor.dimensionEcologica.preg2414.respuesta.label,
      PuntajeDE26414: productor.dimensionEcologica.preg2414.puntos,
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
      //DE2419: productor.dimensionEcologica.preg2419.items,
      //Cambios DE2419 SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS ERROR EN A B C D E F
      lavado: (() => {
        const item = productor.dimensionEcologica.preg2419.items.find(
          (item) => item.nombre === 'a) Lavado, agua potable'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      seleccion: (() => {
        const item = productor.dimensionEcologica.preg2419.items.find(
          (item) => item.nombre === 'b) Selección'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      clasificacion: (() => {
        const item = productor.dimensionEcologica.preg2419.items.find(
          (item) => item.nombre === 'd) Clasificación'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      peso: (() => {
        const item = productor.dimensionEcologica.preg2419.items.find(
          (item) => item.nombre === 'e) Peso'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      gavetas: (() => {
        const item = productor.dimensionEcologica.preg2419.items.find(
          (item) => item.nombre === 'f) Transporte en gavetas'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      //Fin cambios DE2419
      PuntajeDE2419: productor.dimensionEcologica.preg2419.puntos,
      // DE2420: productor.dimensionEcologica.preg2420.items,
      //cambios DE2420
      atado: (() => {
        const item = productor.dimensionEcologica.preg2420.items.find(
          (item) => item.nombre === 'a) Atado'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      enfundado: (() => {
        const item = productor.dimensionEcologica.preg2420.items.find(
          (item) => item.nombre === 'b) Enfundado'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      malla: (() => {
        const item = productor.dimensionEcologica.preg2420.items.find(
          (item) => item.nombre === 'c) En mallas'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      tarrina: (() => {
        const item = productor.dimensionEcologica.preg2420.items.find(
          (item) => item.nombre === 'd) En tarrinas'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      granel: (() => {
        const item = productor.dimensionEcologica.preg2420.items.find(
          (item) => item.nombre === 'e) Al granel'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      empacada: (() => {
        const item = productor.dimensionEcologica.preg2420.items.find(
          (item) => item.nombre === 'f) Empacado al vacio'
        );
        return item ? `${item.respuesta.label}` : '';
      })(),
      //fin cambios DE2420
      PuntajeDE2420: productor.dimensionEcologica.preg2420.puntos,
      DE2421: productor.dimensionEcologica.preg2421.respuesta.label,
      PuntajeDE2421: productor.dimensionEcologica.preg2421.puntos,
      DE2422: productor.dimensionEcologica.preg2422.respuesta.label,
      PuntajeDE2422: productor.dimensionEcologica.preg2422.puntos,
      // 0s<a: productor.dimensionEcologica.preg2423.especieA,
      PuntajeDE2423: productor.dimensionEcologica.preg2423.puntos,
      sub2423: productor.dimensionEcologica.preg2423.cantidadTotal,
      DE2424rGranos: productor.dimensionEcologica.preg2424.rGranos.label,
      DE2424rPastos: productor.dimensionEcologica.preg2424.rPastos.label,
      DE2424rRestos: productor.dimensionEcologica.preg2424.rRestos.label,
      PuntajeDE2424: productor.dimensionEcologica.preg2424.puntos,
      // DE2425: productor.dimensionEcologica.preg2425.items,
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
      // Enca2430: productor.dimensionEcologica.encabezadoPreg2430.encaPreg2430.respuesta.label,
      // SubPreg2430: productor.dimensionEcologica.encabezadoPreg2430.subPregEnca2430.respuesta.label,
      // PuntajeEnca2430: productor.dimensionEcologica.encabezadoPreg2430.puntos,
      DE2430: productor.dimensionEcologica.preg2430.respuesta.label,
      // PuntajeDE2430: productor.dimensionEcologica.preg2430.puntos,
      // DE2431: productor.dimensionEcologica.preg2431.items,
      // PuntajeDE2431: productor.dimensionEcologica.preg2431.puntos,
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
  link.download = 'DimencionEcologica.xlsx';
  link.click();
  URL.revokeObjectURL(url);
}

</script>
