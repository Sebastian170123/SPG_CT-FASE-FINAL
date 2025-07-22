import { defineStore } from 'pinia';
import {
  ICual,
  IModeloDeObjetoOpciones,
  IPreg2410Opcional,
  IPreg2410Producto,
  IPreg2423,
} from 'src/models/spgct.models';
import { numeroDecimal } from 'src/utils/utils';

export const useDimensionEcologica = defineStore('FormDimensionEcologica', {
  state: () => ({
    dimensionEcologica24: {
      nombre: ' 2.4 DIMENSIÓN ECOLÓGICA 65 puntos',
      puntajeTotal: 0,
      preg241: {
        nombre: '2.4.1 Mapa parlante (diseño predial) actualizado. Verificar ',
        valor: 0,
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg242: {
        nombre: '2.4.2 Metros total de perimetro por lotes',
        puntos: 0,
        totalPeri: 0,
        totalMetroSembrado: 0,
        porcentajeMetrSembrados: 0,
      },
      preg243: {
        nombre: '2.4.3 ¿Realiza las podas? ',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subpreg243: {
          nombre: '¿Qué hace con el material podado?',
          respuesta: {} as IModeloDeObjetoOpciones,
        },
        subsistemasSuelo: {
          nombre: 'Indicar pendiente del terreno por lotes (%)',
        },
      },
      preg244: {
        nombre:
          '2.4.4 ¿Realiza prácticas de conservación de suelo en toda la parcela?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subPreg244: {
          nombre: 'Especifique cada práctica',
          items: [
            {
              nombre: '1.Terrazas de banco',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '2. Terrazas de formación lenta',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '3. Terrazas individuales',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '4. Barreras vivas',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '5. Zanjas de infiltración y desviación',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '6. Incorporación de abonos verdes',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '7. Dique de control de cárcavas',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '8. Surco en contorno',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '9. Acolchado',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre:
                '10. Incorpora abonos orgánicos (Bocashi,compost, humus, estiércoles etc)',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
      },
      preg245: {
        nombre: '2.4.5 ¿Con que herramienta prepara el suelo de su parcela?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subPreg245: {
          nombre:
            '¿Qué tipo de erosión del suelo presenta la parcela ? (Observación del veedor/a)',
          items: [
            {
              nombre:
                '• Alta.- Es evidente arrastre de suelo por el viento, presencia de cárcavas y canalillos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre:
                '• Media.- Erosión evidente pero poca el sistema agroforestal   amortigua la pérdida del suelo',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: '• Baja.- No hay mayores señales de erosión.',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
      },
      preg246: {
        nombre:
          '2.4.6 ¿Produce abonos en su parcela?: (observación del veedor)',
        puntos: 0,
        items: [
          {
            nombre: 'Majadeo',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Compost',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Bocashi',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Humus',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Colchón',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Desecho de podas',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Abonos verdes',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Otros',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        ],
        subPreg246: {
          nombre: '¿Cúales?',
          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },
      preg247: {
        nombre:
          '2.4.7 ¿Cuánto de Materia orgánica tiene su suelo?.(Ver análisis de suelo)',
        puntos: 1,
        respuesta: '',
        subPreg2471: {
          nombre: '¿Cuánto de abono produce en la parcela?',
          cantidad: 0,
          medidaDePeso: {} as IModeloDeObjetoOpciones,
          tiempo: {} as IModeloDeObjetoOpciones,
        },
        subPreg2472: {
          nombre: '¿Cuánto de abono compra para abonar su parcela al año?',
          cuantoAboCompra: {} as IModeloDeObjetoOpciones,
          medidaDePeso: {} as IModeloDeObjetoOpciones,
        },
      },
      preg248: {
        nombre: '2.4.8 ¿Elabora y aplica biofertilizantes en la parcela?',
        puntos: 0,
        cual: [] as ICual[],
      },
      preg249: {
        nombre: '2.4.9 ¿Cosecha nitrógeno del aire?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subPreg249: {
          nombre: '¿Cómo?',
          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },

      preg2410: {
        nombre:
          '2.4.10 Qué productos produce: Hortalizas, Frutales, Pastos, Cereales, plantas medicinales?',
        puntos: 0,
        areaProductosSembrados: 0,
        hortalizas: [] as IPreg2410Producto[],
        frutas: [] as IPreg2410Producto[],
        pastos: [] as IPreg2410Producto[],
        cerealesYSeudocere: [] as IPreg2410Producto[],
        plantasMedicin: [] as IPreg2410Producto[],
        otrosOpcional: [] as IPreg2410Opcional[],
        hortalizasTotal: 0,
        frutasTotal: 0,
        pastosTotal: 0,
        cerealeTotal: 0,
        planMedTotal: 0,
        opcionalesTotal: 0,
        metrosHortaliza: 0,
        metrosFrutas: 0,
        metrosPastos: 0,
        metrosCereales: 0,
        metrosPlantasMed: 0,
        metrosOpcionales: 0,
        totalProductos: 0,
        totalPorcentaje: 0,
      },
      preg2411: {
        nombre:
          '2.4.11 ¿Cuenta con un espacio adecuado o bodega para insumos, herramientas, equipos y/o maquinaria?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2412: {
        nombre: '2.4.12 ¿Cuales son los principales problemas en los cultivos?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2413: {
        nombre: '2.4.13 ¿Tiene un registro de sus cultivos?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2414: {
        nombre: '2.4.14 ¿Hace rotación de cultivos?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },

      preg2415: {
        nombre: '2.4.15 ¿Realiza asociación de cultivos?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },

      preg2416: {
        nombre:
          '2.4.16 ¿Elabora y aplica biocontroladores contra plagas y enfermedades?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subPreg2416: {
          nombre: '¿Qué producto?',

          respuesta: {} as IModeloDeObjetoOpciones,
        },
        subSubPreg2416: {
          nombre: '¿Qué plaga o enfermedad controla?',
          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },
      preg2417: {
        nombre:
          '2.4.17 Tiene buenas prácticas de manipulación de los alimentos',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2418: {
        nombre: '2.4.18 Tiene espacio destinado para la post cosecha',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subPreg2418: {
          nombre: '¿Cual?',
          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },
      preg2419: {
        nombre: '2.4.19 ¿Existe control de calidad?',
        puntos: 0,
        items: [
          {
            nombre: 'a) Lavado, agua potable',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'b) Selección',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'd) Clasificación',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'e) Peso',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'f) Transporte en gavetas',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        ],
      },
      preg2420: {
        nombre: '2.4.20 ¿Cómo presenta sus productos ?',
        puntos: 0,
        items: [
          {
            nombre: 'a) Atado',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'b) Enfundado',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'c) En mallas',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'd) En tarrinas',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'e) Al granel',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'f) Empacado al vacio',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        ],
      },
      preg2421: {
        nombre:
          '2.4.21 En caso de procesamiento de alimentos, observar, si realiza buenas prácticas de manipulación de alimentos (BPM) y, si dispone de espacios adecuados y  utensilios limpios.',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2422: {
        nombre: '2.4.22 ¿Cuenta con bodega para productos cosechados?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2423: {
        nombre:
          '2.4.23 Número de especies (1000 m2 a 2000 m2 2 especies  (más de 2000m2 3 especies)',

        puntos: 0,
        especieA: [] as IPreg2423[],
        cantidadTotal: 0,
      },
      preg2424: {
        nombre:
          '2.4.24 ¿Que productos de la chacra son destinados a la alimentacion de los animales?',
        puntos: 0,
        rGranos: {} as IModeloDeObjetoOpciones,
        rPastos: {} as IModeloDeObjetoOpciones,
        rRestos: {} as IModeloDeObjetoOpciones,
      },

      preg2425: {
        nombre:
          '2.4.25 ¿Dispone de una infraestructura para los siguientes animales?',
        puntos: 0,
        items: [
          {
            nombre: 'Cuyes',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Chanchos',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Gallinas',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'Vacas',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        ],
        subPreg2425: {
          nombre: 'Otros',
          respuesta: '',
        },
      },
      preg2426: {
        nombre:
          '2.4.26 Coloca barreras sanitarias (Plantas amargas, Cal a la entrada de los galpones o establos)',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2427: {
        nombre:
          '2.4.27 ¿Cada cuánto tiempo limpia los establecimientos de los animales?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2428: {
        nombre: '2.4.28 ¿Usa remedios caseros para curar a los animales?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2429: {
        nombre: '2.4.29 ¿Cosecha el estiércol de los animales?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      encabezadoPreg2430: {
        nombre: 'Subsistemas riego-humedad',
        puntos: 0,
        encaPreg2430: {
          nombre: '¿Conoce usted de donde viene el agua de riego?',

          respuesta: {} as IModeloDeObjetoOpciones,
        },
        subPregEnca2430: {
          nombre: 'Nombre de la fuente:',

          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },

      preg2430: {
        nombre:
          '2.4.30 Que actividades realiza la junta de riego para proteger  las fuentes de agua.',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2431: {
        nombre:
          '2.4.31 ¿Qué acciones realizan para  el manejo de la basura en su vivienda.?',
        puntos: 0,
        items: [
          {
            nombre: 'a) Orgánica :',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          {
            nombre: 'b) Inorgánica:',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        ],
      },
      preg2432: {
        nombre: '2.4.32 ¿Cada cuánto tiempo tiene agua en su parcela?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
        subPreg2432: {
          nombre: '¿Tiene reservorio?',
          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },
      preg2433: {
        nombre:
          '2.4.33 En caso de contar con riego ¿Cuenta con sistema de riego tecnificado?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2434: {
        nombre:
          '2.4.34 En caso de contar con riego por inundación ¿Qué tipo de prácticas realiza para evitar la erosión?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2435: {
        nombre:
          '2.4.35 En caso de contar con poco riego ¿Qué tipo de práctica de cosecha de agua realiza?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2436: {
        nombre:
          '2.4.36 ¿Qué prácticas realiza usted para retener la humedad en el suelo? 1 práctica realizada?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2437: {
        nombre:
          '2.4.37 En caso de no contar con riego ¿Qué tipo de práctica de cosecha de agua práctica?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2438: {
        nombre:
          '2.4.38 En caso de no contar con riego ¿Qué tipo de abono aplica para mantener humedo el suelo?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2439: {
        nombre: '2.4.39 Su cultivo es:',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      preg2440: {
        nombre:
          '2.4.40 En caso de no contar con riego ¿Qué tipo de práctica de cosecha de agua realiza.',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
      //se cambia por eliminacion
      preg2441: {
        nombre:
          '2.4.40 ¿Qué prácticas realiza  usted. para retener la humedad en el suelo?',
        puntos: 0,
        respuesta: {} as IModeloDeObjetoOpciones,
      },
    },
  }),

  getters: {
    productosChacra(state) {
      const todosLosProductos: string[] = [];
      const hortalizas = state.dimensionEcologica24.preg2410.hortalizas.map(
        (prod) => {
          return prod.producto.label;
        }
      );
      const frutas = state.dimensionEcologica24.preg2410.frutas.map((prod) => {
        return prod.producto.label;
      });

      const pastos = state.dimensionEcologica24.preg2410.pastos.map((prod) => {
        return prod.producto.label;
      });
      const cereales =
        state.dimensionEcologica24.preg2410.cerealesYSeudocere.map((prod) => {
          return prod.producto.label;
        });
      const plantasMedicin =
        state.dimensionEcologica24.preg2410.plantasMedicin.map((prod) => {
          return prod.producto.label;
        });
      const opcionales = state.dimensionEcologica24.preg2410.otrosOpcional.map(
        (prod) => {
          return prod.producto;
        }
      );
      return todosLosProductos
        .concat(hortalizas)
        .concat(frutas)
        .concat(pastos)
        .concat(cereales)
        .concat(plantasMedicin)
        .concat(opcionales);
    },

    puntajeTotalpreg241(state) {
      let puntaje = 0;
      puntaje = Number(state.dimensionEcologica24.preg241.respuesta.puntaje)
        ? Number(state.dimensionEcologica24.preg241.respuesta.puntaje)
        : 0;
      state.dimensionEcologica24.preg241.puntos = numeroDecimal(puntaje);
      return state.dimensionEcologica24.preg241.puntos;
    },
    puntajeTotalpreg242(state) {
      const puntaje =
        (Number(state.dimensionEcologica24.preg242.totalMetroSembrado) /
          Number(state.dimensionEcologica24.preg242.totalPeri)) *
        100;

      state.dimensionEcologica24.preg242.puntos = numeroDecimal(
        (puntaje * 7) / 100
      )
        ? numeroDecimal((puntaje * 7) / 100)
        : 0;

      return state.dimensionEcologica24.preg242.puntos;
    },
    puntajeTotalpreg243(state) {
      let primeraRespuesta = 0;
      let respuestaSubpreg = 0;

      if (state.dimensionEcologica24.preg243.respuesta.label == 'No') {
        state.dimensionEcologica24.preg243.puntos = 0;
        return state.dimensionEcologica24.preg243.puntos;
      }
      primeraRespuesta = Number(
        state.dimensionEcologica24.preg243.respuesta.puntaje
      )
        ? Number(state.dimensionEcologica24.preg243.respuesta.puntaje)
        : 0;
      respuestaSubpreg = Number(
        state.dimensionEcologica24.preg243.subpreg243.respuesta.puntaje
      )
        ? Number(
            state.dimensionEcologica24.preg243.subpreg243.respuesta.puntaje
          )
        : 0;

      state.dimensionEcologica24.preg243.puntos = numeroDecimal(
        primeraRespuesta + respuestaSubpreg
      );

      return this.dimensionEcologica24.preg243.puntos;
    },
    puntajeTotalpreg244(state) {
      let primeraRespuesta = 0;
      let respuestaSubpreg = 0;

      if (state.dimensionEcologica24.preg244.respuesta.label === 'Ninguna') {
        state.dimensionEcologica24.preg244.puntos = 0;
        return state.dimensionEcologica24.preg244.puntos;
      }

      primeraRespuesta = Number(
        state.dimensionEcologica24.preg244.respuesta.puntaje
      )
        ? Number(state.dimensionEcologica24.preg244.respuesta.puntaje)
        : 0;

      state.dimensionEcologica24.preg244.subPreg244.items.forEach(
        (practica) => {
          respuestaSubpreg += Number(practica.respuesta.puntaje)
            ? Number(practica.respuesta.puntaje)
            : 0;
        }
      );

      state.dimensionEcologica24.preg244.puntos = numeroDecimal(
        primeraRespuesta + respuestaSubpreg
      );
      return state.dimensionEcologica24.preg244.puntos;
    },
    puntajeTotalpreg245(state) {
      let primeraRespuesta = 0;
      let respuestaSubpreg = 0;

      if (state.dimensionEcologica24.preg245.respuesta.label == 'Ninguno') {
        state.dimensionEcologica24.preg245.puntos = 0;
        return state.dimensionEcologica24.preg245;
      }
      primeraRespuesta = Number(
        state.dimensionEcologica24.preg245.respuesta.puntaje
      )
        ? Number(state.dimensionEcologica24.preg245.respuesta.puntaje)
        : 0;

      state.dimensionEcologica24.preg245.subPreg245.items.forEach(
        (erocionParcela) => {
          respuestaSubpreg += Number(erocionParcela.respuesta.puntaje)
            ? Number(erocionParcela.respuesta.puntaje)
            : 0;
        }
      );
      state.dimensionEcologica24.preg245.puntos = numeroDecimal(
        primeraRespuesta + respuestaSubpreg
      );
      return state.dimensionEcologica24.preg245.puntos;
    },
    puntajeTotalpreg246(state) {
      let primeraRespuesta = 0;

      state.dimensionEcologica24.preg246.items.forEach((abono) => {
        primeraRespuesta += Number(abono.respuesta.puntaje)
          ? Number(abono.respuesta.puntaje)
          : 0;
      });

      state.dimensionEcologica24.preg246.puntos = numeroDecimal(
        primeraRespuesta
      )
        ? numeroDecimal(primeraRespuesta)
        : 0;
      return state.dimensionEcologica24.preg246.puntos;
    },
    puntajeTotalpreg247(state) {
      const subPreg2471 = state.dimensionEcologica24.preg247.subPreg2471;
      const subPreg2472 = state.dimensionEcologica24.preg247.subPreg2472;

      const puntaje2 = Number(subPreg2471.medidaDePeso.puntaje) || 0;
      const puntaje3 = Number(subPreg2471.tiempo.puntaje) || 0;

      const puntaje4 = Number(subPreg2472.cuantoAboCompra.puntaje) || 0;
      const puntaje5 = Number(subPreg2472.medidaDePeso.puntaje) || 0;

      state.dimensionEcologica24.preg247.puntos = numeroDecimal(
        puntaje2 + puntaje3 + puntaje4 + puntaje5
      );

      return state.dimensionEcologica24.preg247.puntos;
    },
    puntajeTotalpreg248(state) {
      let puntajePreg248 = 0;
      state.dimensionEcologica24.preg248.cual.forEach((biofertilizante) => {
        puntajePreg248 += Number(biofertilizante.cual.puntaje) || 0;
      });
      state.dimensionEcologica24.preg248.puntos = numeroDecimal(puntajePreg248);
      return state.dimensionEcologica24.preg248.puntos;
    },
    puntajeTotalpreg249(state) {
      state.dimensionEcologica24.preg249.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg249.respuesta.puntaje) || 0
      );

      return state.dimensionEcologica24.preg249.puntos;
    },
    puntajeTotalpreg2410(state) {
      const sistemaCultivo = state.dimensionEcologica24.preg2410;

      const hortalizasTotal = Number(sistemaCultivo.hortalizasTotal) || 0;
      const frutasTotal = Number(sistemaCultivo.frutasTotal) || 0;
      const pastosTotal = Number(sistemaCultivo.pastosTotal) || 0;
      const cerealeTotal = Number(sistemaCultivo.cerealeTotal) || 0;
      const planMedTotal = Number(sistemaCultivo.planMedTotal) || 0;
      const otrosTotal = Number(sistemaCultivo.opcionalesTotal) || 0;

      state.dimensionEcologica24.preg2410.puntos = numeroDecimal(
        hortalizasTotal +
          frutasTotal +
          pastosTotal +
          cerealeTotal +
          planMedTotal +
          otrosTotal
      );

      return state.dimensionEcologica24.preg2410.puntos;
    },
    puntajeTotalpreg2411(state) {
      state.dimensionEcologica24.preg2411.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2411.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2411.puntos;
    },
    puntajeTotalpreg2412(state) {
      state.dimensionEcologica24.preg2412.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2412.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2412.puntos;
    },
    puntajeTotalpreg2413(state) {
      state.dimensionEcologica24.preg2413.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2413.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2413.puntos;
    },
    puntajeTotalpreg2414(state) {
      state.dimensionEcologica24.preg2414.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2414.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2414.puntos;
    },
    puntajeTotalpreg2415(state) {
      state.dimensionEcologica24.preg2415.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2415.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2415.puntos;
    },
    puntajeTotalpreg2416(state) {
      let puntaje1 = 0;
      let puntaje2 = 0;
      let puntaje3 = 0;

      puntaje1 =
        Number(state.dimensionEcologica24.preg2416.respuesta.puntaje) || 0;
      puntaje2 =
        Number(
          state.dimensionEcologica24.preg2416.subPreg2416.respuesta.puntaje
        ) || 0;
      puntaje3 =
        Number(
          state.dimensionEcologica24.preg2416.subSubPreg2416.respuesta.puntaje
        ) || 0;

      state.dimensionEcologica24.preg2416.puntos = numeroDecimal(
        puntaje1 + puntaje2 + puntaje3
      );
      return state.dimensionEcologica24.preg2416.puntos;
    },
    puntajeTotalpreg2417(state) {
      state.dimensionEcologica24.preg2417.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2417.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2417.puntos;
    },
    puntajeTotalpreg2418(state) {
      state.dimensionEcologica24.preg2418.puntos =
        numeroDecimal(
          Number(state.dimensionEcologica24.preg2418.respuesta.puntaje) || 0
        ) +
        numeroDecimal(
          Number(
            state.dimensionEcologica24.preg2418.subPreg2418.respuesta.puntaje
          ) || 0
        );

      return state.dimensionEcologica24.preg2418.puntos;
    },
    puntajeTotalpreg2419(state) {
      let puntajePreg2419 = 0;
      state.dimensionEcologica24.preg2419.items.forEach((item) => {
        puntajePreg2419 += Number(item.respuesta.puntaje) || 0;
      });
      state.dimensionEcologica24.preg2419.puntos =
        numeroDecimal(puntajePreg2419);
      return state.dimensionEcologica24.preg2419.puntos;
    },
    puntajeTotalpreg2420(state) {
      let puntajePreg2420 = 0;
      state.dimensionEcologica24.preg2420.items.forEach((item) => {
        puntajePreg2420 += Number(item.respuesta.puntaje) || 0;
      });
      state.dimensionEcologica24.preg2420.puntos =
        numeroDecimal(puntajePreg2420);
      return state.dimensionEcologica24.preg2420.puntos;
    },
    puntajeTotalpreg2421(state) {
      state.dimensionEcologica24.preg2421.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2421.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2421.puntos;
    },
    puntajeTotalpreg2422(state) {
      state.dimensionEcologica24.preg2422.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2422.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2422.puntos;
    },
    puntajeTotalpreg2423(state) {
      let puntajePreg2423 = 0;
      state.dimensionEcologica24.preg2423.especieA.forEach((item) => {
        puntajePreg2423 += Number(item.especie.puntaje) || 0;
      });
      state.dimensionEcologica24.preg2423.puntos =
        numeroDecimal(puntajePreg2423);
      return state.dimensionEcologica24.preg2423.puntos;
    },
    puntajeTotalpreg2424(state) {
      let puntajeGranos = 0;
      let puntajePastos = 0;
      let puntajeRestos = 0;

      puntajeGranos =
        Number(state.dimensionEcologica24.preg2424.rGranos.puntaje) || 0;
      puntajePastos =
        Number(state.dimensionEcologica24.preg2424.rPastos.puntaje) || 0;
      puntajeRestos =
        Number(state.dimensionEcologica24.preg2424.rRestos.puntaje) || 0;
      state.dimensionEcologica24.preg2424.puntos = numeroDecimal(
        puntajeGranos + puntajePastos + puntajeRestos
      );
      return state.dimensionEcologica24.preg2424.puntos;
    },
    puntajeTotalpreg2425(state) {
      let puntajePreg2425 = 0;
      let puntajeSubpregOtros = 0;

      puntajeSubpregOtros =
        state.dimensionEcologica24.preg2425.subPreg2425.respuesta == ''
          ? 0
          : 0.6;

      state.dimensionEcologica24.preg2425.items.forEach((item) => {
        puntajePreg2425 += Number(item.respuesta.puntaje) || 0;
      });
      state.dimensionEcologica24.preg2425.puntos = numeroDecimal(
        puntajePreg2425 + puntajeSubpregOtros
      );
      return state.dimensionEcologica24.preg2425.puntos;
    },
    puntajeTotalpreg2426(state) {
      state.dimensionEcologica24.preg2426.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2426.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2426.puntos;
    },
    puntajeTotalpreg2427(state) {
      state.dimensionEcologica24.preg2427.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2427.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2427.puntos;
    },
    puntajeTotalpreg2428(state) {
      state.dimensionEcologica24.preg2428.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2428.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2428.puntos;
    },
    puntajeTotalpreg2429(state) {
      state.dimensionEcologica24.preg2429.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2429.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2429.puntos;
    },
    puntajeTotalencabezadoPreg2430(state) {
      let puntajePreg2430 = 0;
      let puntajeSubpreg2430 = 0;

      puntajePreg2430 =
        Number(
          state.dimensionEcologica24.encabezadoPreg2430.encaPreg2430.respuesta
            .puntaje
        ) || 0;
      puntajeSubpreg2430 =
        Number(
          state.dimensionEcologica24.encabezadoPreg2430.subPregEnca2430
            .respuesta.puntaje
        ) || 0;
      state.dimensionEcologica24.encabezadoPreg2430.puntos = numeroDecimal(
        puntajePreg2430 + puntajeSubpreg2430
      );
      return state.dimensionEcologica24.encabezadoPreg2430.puntos;
    },
    puntajeTotalpreg2430(state) {
      state.dimensionEcologica24.preg2430.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2430.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2430.puntos;
    },
    puntajeTotalpreg2431(state) {
      let puntajePreg2431 = 0;
      state.dimensionEcologica24.preg2431.items.forEach((item) => {
        puntajePreg2431 += Number(item.respuesta.puntaje) || 0;
      });
      state.dimensionEcologica24.preg2431.puntos =
        numeroDecimal(puntajePreg2431);
      return state.dimensionEcologica24.preg2431.puntos;
    },
    puntajeTotalpreg2432(state) {
      let puntajePreg2432 = 0;
      let puntajeSubpreg2432 = 0;

      puntajePreg2432 =
        Number(state.dimensionEcologica24.preg2432.respuesta.puntaje) || 0;
      puntajeSubpreg2432 =
        Number(
          state.dimensionEcologica24.preg2432.subPreg2432.respuesta.puntaje
        ) || 0;
      state.dimensionEcologica24.preg2432.puntos = numeroDecimal(
        puntajePreg2432 + puntajeSubpreg2432
      );
      return state.dimensionEcologica24.preg2432.puntos;
    },
    puntajeTotalpreg2433(state) {
      state.dimensionEcologica24.preg2433.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2433.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2433.puntos;
    },
    puntajeTotalpreg2434(state) {
      state.dimensionEcologica24.preg2434.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2434.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2434.puntos;
    },
    putnajeTotalpreg2435(state) {
      state.dimensionEcologica24.preg2435.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2435.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2435.puntos;
    },
    puntajeTotalpreg2436(state) {
      state.dimensionEcologica24.preg2436.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2436.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2436.puntos;
    },
    puntajeTotalpreg2437(state) {
      state.dimensionEcologica24.preg2437.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2437.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2437.puntos;
    },
    puntajeTotalpreg2438(state) {
      state.dimensionEcologica24.preg2438.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2438.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2438.puntos;
    },
    puntajeTotalpreg2439(state) {
      state.dimensionEcologica24.preg2439.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2439.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2439.puntos;
    },
    puntajetotalpreg2440(state) {
      state.dimensionEcologica24.preg2440.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2440.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2440.puntos;
    },
    putajeTotalpreg2441(state) {
      state.dimensionEcologica24.preg2441.puntos = numeroDecimal(
        Number(state.dimensionEcologica24.preg2441.respuesta.puntaje) || 0
      );
      return state.dimensionEcologica24.preg2441.puntos;
    },
    puntajeTotalDimensionEcologica24(state) {
      const puntajeTotal =
        state.dimensionEcologica24.preg241.puntos +
        state.dimensionEcologica24.preg242.puntos +
        state.dimensionEcologica24.preg243.puntos +
        state.dimensionEcologica24.preg244.puntos +
        state.dimensionEcologica24.preg245.puntos +
        state.dimensionEcologica24.preg246.puntos +
        state.dimensionEcologica24.preg247.puntos +
        state.dimensionEcologica24.preg248.puntos +
        state.dimensionEcologica24.preg249.puntos +
        state.dimensionEcologica24.preg2410.puntos +
        state.dimensionEcologica24.preg2411.puntos +
        state.dimensionEcologica24.preg2412.puntos +
        state.dimensionEcologica24.preg2413.puntos +
        state.dimensionEcologica24.preg2414.puntos +
        state.dimensionEcologica24.preg2415.puntos +
        state.dimensionEcologica24.preg2416.puntos +
        state.dimensionEcologica24.preg2417.puntos +
        state.dimensionEcologica24.preg2418.puntos +
        state.dimensionEcologica24.preg2419.puntos +
        state.dimensionEcologica24.preg2420.puntos +
        state.dimensionEcologica24.preg2421.puntos +
        state.dimensionEcologica24.preg2422.puntos +
        state.dimensionEcologica24.preg2423.puntos +
        state.dimensionEcologica24.preg2424.puntos +
        state.dimensionEcologica24.preg2425.puntos +
        state.dimensionEcologica24.preg2426.puntos +
        state.dimensionEcologica24.preg2427.puntos +
        state.dimensionEcologica24.preg2428.puntos +
        state.dimensionEcologica24.preg2429.puntos +
        state.dimensionEcologica24.encabezadoPreg2430.puntos +
        state.dimensionEcologica24.preg2430.puntos +
        state.dimensionEcologica24.preg2431.puntos +
        state.dimensionEcologica24.preg2432.puntos +
        state.dimensionEcologica24.preg2433.puntos +
        state.dimensionEcologica24.preg2434.puntos +
        state.dimensionEcologica24.preg2435.puntos +
        state.dimensionEcologica24.preg2436.puntos +
        state.dimensionEcologica24.preg2437.puntos +
        state.dimensionEcologica24.preg2438.puntos +
        state.dimensionEcologica24.preg2439.puntos +
        state.dimensionEcologica24.preg2440.puntos +
        state.dimensionEcologica24.preg2441.puntos;
      state.dimensionEcologica24.puntajeTotal = numeroDecimal(puntajeTotal);
      return state.dimensionEcologica24.puntajeTotal;
    },
  },
  actions: {},
});
