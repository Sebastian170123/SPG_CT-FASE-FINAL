import { defineStore } from 'pinia';
import {
  IFaseLunar,
  IModeloDeObjetoOpciones,
  IPreg224,
  IPlantasCura,
  ISemillasNativ,
  IRespuestasOpcionales,
} from 'src/models/spgct.models';
import { numeroDecimal } from 'src/utils/utils';

export const useSocioCulturalPolitica = defineStore(
  'formSocioCulturalPolitica',
  {
    state: () => ({
      //Dimenci on Política
      dimensionPolitica21: {
        nombre: '2.1 DIMENSIÓN POLÍTICA',
        puntajeTotal: 0,
        preg211: {
          nombre:
            '2.1.1¿Qué políticas agrarias que defiendan y apoyen a los  productores agroecológicos conoce?',
          valor: 0,
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
        },
        preg212: {
          nombre:
            '2.1.2¿Usted ha participado en la construcción de leyes y ordenanzas locales o nacionales?',
          valor: 0,
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
        },
        preg213: {
          nombre:
            '2.1.3. ¿Porqué decidió producir agroecológicamente en su chacra?',
          puntos: 0,
          items: [
            {
              nombre: 'Por Salud',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Por el NO uso de Químicos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Para Generar Ingresos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Por cuidar el ambiente',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Producción de Alimentos Sanos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
        preg214: {
          nombre:
            '2.1.4. ¿Cómo garantiza la soberanía alimentaria en su chacra?',
          puntos: 0,

          items: [
            {
              nombre: 'Tener y Sembrar Semillas',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Diversidad de Productos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },

        preg215: {
          nombre: '2.1.5 Conoce usted, qué es soberania alimentaria?',
          valor: 0,
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
        },
      },
      //Dimencion política organizativa
      dimensionSocioOrganizativa22: {
        nombre: ' 2.2  DIMENSIÓN SOCIO-ORGANIZATIVA',
        puntajeTotal: 0,
        preg221: {
          nombre:
            '2.2.1¿Qué hace el productor y/o su familia para fortalecer a la organización agroecológica a la que pertenece?',
          puntos: 0,

          items: [
            {
              nombre: 'Reuniones',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Capacitaciones',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Mingas',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Participación en ferias',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Aportes y comisiones',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Respetar acuerdos y resoluciones',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
        preg222: {
          nombre:
            '2.2.2¿Ha ocupado algún cargo en la organización agroecológica o comunitaria?',
          Puntos: 0,
          valor: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
          subPreg222: {
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        },

        preg223: {
          nombre:
            '2.2.3 ¿Cómo usted se siente realizando producción agroecológica?',
          puntos: 0,
          items: [
            {
              nombre:
                'Respeta el ingreso económico por las ventas de sus productos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Respecto a la carga de trabajo',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Respecto a la unión familiar',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Respecto a la calidad de vida',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
        preg224: {
          puntos: 0,
          incentivados: [] as IPreg224[],
        },
        preg225: {
          nombre:
            '2.2.5 ¿Participa el productor y/o su familia en capacitaciones ? Señale cuáles.',
          puntos: 0,
          items: [
            {
              nombre: 'Producción Agroecológica',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Manejos de Suelos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Procesamiento de Alimentos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Cosecha y Postcosecha',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Comercialización Asociativa',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Registro y costo de Producción',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Político y Liderazgo',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Rol de Dirigentes',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Gira de Observación',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Seguimiento Mensual o Trimestral',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },

        preg226: {
          nombre:
            '2.2.6 ¿De los temas capacitados cuáles  ha puesto en práctica ?',
          puntos: 0,

          items: [
            {
              nombre: 'Cortinas rompevientos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Elaboración de bioles y abonos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Procesamiento de Alimentos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Cosecha y postcosecha',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Registros de producción',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Infraestructura adecuada para animales',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Manejo de semillas',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Podas en frutales o arbustos',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
        preg227: '',
        preg228: {
          nombre: '',
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
          subPreg228: {
            nombre: '',
            respuesta: {} as IModeloDeObjetoOpciones,
          },
        },
      },
      //DIMENSION CULTURAL
      dimensionCultural23: {
        nombre: '2.3 DIMENSIÓN CULTURAL',
        puntajeTotal: 0,
        preg231: {
          nombre: '2.3.1 ¿Conoce en que fase lunar estamos?',
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
          subPregunta231: {
            respuesta: {} as IModeloDeObjetoOpciones,
          },
          faseLunar: [] as IFaseLunar[],
        },
        preg232: {
          nombre:
            '2.3.2 ¿Práctica la minga familiar con su grupo u organización?',
          valor: 0,
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
        },
        preg233: {
          nombre: '2.3.3 ¿Mencione 4 plantas medicinales y que dolencia cura?.',
          puntos: 0,
          plantasC: [] as IPlantasCura[],
        },
        preg234: {
          nombre:
            '2.3.4 ¿Qué semillas ancestrales o nativas tiene en la chacra? Máximo 4',
          puntos: 0,
          respuesta: [] as ISemillasNativ[],
        },
        preg234Opcional: {
          nombre: 'Agregar más semillas (opcional)',
          respuesta: [] as ISemillasNativ[],
        },

        preg235: {
          nombre: '2.3.5 ¿Cómo mantiene sus semillas?',
          puntos: 0,
          respuesta: {} as IModeloDeObjetoOpciones,
        },
        preg236: {
          nombre: '2.3.6 ¿En qué actividades práctica el Randy-randy?',
          puntos: 0,
          items: [
            {
              nombre: 'Seleccione',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Seleccione',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
            {
              nombre: 'Seleccione',
              respuesta: {} as IModeloDeObjetoOpciones,
            },
          ],
        },
      },
    }),

    getters: {
      //PUNTAJES DIMENSION POLITICA
      puntajeTotal211(state) {
        let puntajeTotal = 0;

        puntajeTotal = Number(
          state.dimensionPolitica21.preg211.respuesta.puntaje
        )
          ? Number(state.dimensionPolitica21.preg211.respuesta.puntaje)
          : 0;
        state.dimensionPolitica21.preg211.puntos = numeroDecimal(puntajeTotal);

        return state.dimensionPolitica21.preg211.puntos;
      },
      puntajeTotal212(state) {
        let puntajeTotal = 0;

        puntajeTotal = Number(
          state.dimensionPolitica21.preg212.respuesta.puntaje
        )
          ? Number(state.dimensionPolitica21.preg212.respuesta.puntaje)
          : 0;
        state.dimensionPolitica21.preg212.puntos = numeroDecimal(puntajeTotal);

        return state.dimensionPolitica21.preg212.puntos;
      },
      puntajeTotal213(state) {
        let puntajeTotal = 0;
        state.dimensionPolitica21.preg213.items.forEach((produccion) => {
          puntajeTotal += Number(produccion.respuesta.puntaje)
            ? Number(produccion.respuesta.puntaje)
            : 0;
        });
        state.dimensionPolitica21.preg213.puntos = numeroDecimal(puntajeTotal);
        return state.dimensionPolitica21.preg213.puntos;
      },
      puntajeTotal214(state) {
        let puntajeTotal = 0;
        state.dimensionPolitica21.preg214.items.forEach(
          (soberaniaAlimentaria) => {
            puntajeTotal += Number(soberaniaAlimentaria.respuesta.puntaje)
              ? Number(soberaniaAlimentaria.respuesta.puntaje)
              : 0;
          }
        );
        state.dimensionPolitica21.preg214.puntos = numeroDecimal(puntajeTotal);
        return state.dimensionPolitica21.preg214.puntos;
      },
      puntajeTotal215(state) {
        let puntajeTotal = 0;

        puntajeTotal = Number(
          state.dimensionPolitica21.preg215.respuesta.puntaje
        )
          ? Number(state.dimensionPolitica21.preg215.respuesta.puntaje)
          : 0;
        state.dimensionPolitica21.preg215.puntos = numeroDecimal(puntajeTotal);
        return state.dimensionPolitica21.preg215.puntos;
      },

      //PUNTAJES DIMENSION SOCIO-ORGANIZATIVA
      puntajeTotal221(state) {
        let puntajeTotal = 0;
        state.dimensionSocioOrganizativa22.preg221.items.forEach(
          (organizacionAgroecologica) => {
            puntajeTotal += Number(organizacionAgroecologica.respuesta.puntaje)
              ? Number(organizacionAgroecologica.respuesta.puntaje)
              : 0;
          }
        );
        state.dimensionSocioOrganizativa22.preg221.puntos =
          numeroDecimal(puntajeTotal);
        return state.dimensionSocioOrganizativa22.preg221.puntos;
      },
      puntajeTotalPreg222(state) {
        let primeraRespuesta = 0;
        let respuestaSubpreg = 0;

        if (
          state.dimensionSocioOrganizativa22.preg222.respuesta.label === 'No'
        ) {
          state.dimensionSocioOrganizativa22.preg222.Puntos = 0;
          return state.dimensionSocioOrganizativa22.preg222.Puntos;
        }

        primeraRespuesta +=
          Number(
            state.dimensionSocioOrganizativa22.preg222.respuesta.puntaje
          ) || 0;
        respuestaSubpreg +=
          Number(
            state.dimensionSocioOrganizativa22.preg222.subPreg222.respuesta
              .puntaje
          ) || 0;

        state.dimensionSocioOrganizativa22.preg222.Puntos = numeroDecimal(
          primeraRespuesta + respuestaSubpreg
        );
        return state.dimensionSocioOrganizativa22.preg222.Puntos;
      },

      puntajeTotal223(state) {
        let puntajeTotal = 0;
        state.dimensionSocioOrganizativa22.preg223.items.forEach(
          (produccionAgroecologica) => {
            puntajeTotal +=
              Number(produccionAgroecologica.respuesta.puntaje) || 0;
          }
        );
        state.dimensionSocioOrganizativa22.preg223.puntos =
          numeroDecimal(puntajeTotal);
        return state.dimensionSocioOrganizativa22.preg223.puntos;
      },
      puntajeTotalPreg224(state) {
        let primeraRespuesta = 0;
        if (!state.dimensionSocioOrganizativa22.preg224.incentivados) {
          state.dimensionSocioOrganizativa22.preg224.puntos = 0;
          return state.dimensionSocioOrganizativa22.preg224;
        }

        state.dimensionSocioOrganizativa22.preg224.incentivados.forEach(
          (incentivado) => {
            primeraRespuesta += Number(incentivado.puntaje)
              ? Number(incentivado.puntaje)
              : 0;
          }
        );

        state.dimensionSocioOrganizativa22.preg224.puntos =
          numeroDecimal(primeraRespuesta);

        return state.dimensionSocioOrganizativa22.preg224.puntos;
      },

      puntajeTotal225(state) {
        let primeraRespuesta = 0;
        state.dimensionSocioOrganizativa22.preg225.items.forEach(
          (asistenciaACapacitaciones) => {
            primeraRespuesta +=
              Number(asistenciaACapacitaciones.respuesta.puntaje) || 0;
          }
        );
        state.dimensionSocioOrganizativa22.preg225.puntos =
          numeroDecimal(primeraRespuesta);
        return state.dimensionSocioOrganizativa22.preg225.puntos;
      },

      puntajeTotal226(state) {
        let puntajeTotal = 0;
        state.dimensionSocioOrganizativa22.preg226.items.forEach(
          (puestoEnPractica) => {
            puntajeTotal += Number(puestoEnPractica.respuesta.puntaje) || 0;
          }
        );
        state.dimensionSocioOrganizativa22.preg226.puntos =
          numeroDecimal(puntajeTotal);
        return state.dimensionSocioOrganizativa22.preg226.puntos;
      },
      puntajeTotalPreg231(state) {
        let primeraRespuesta = 0;
        let respuestaSubpreg = 0;

        if (state.dimensionCultural23.preg231.respuesta.label === 'No') {
          state.dimensionCultural23.preg231.puntos = 0;
          return state.dimensionCultural23.preg231.puntos;
        }

        primeraRespuesta +=
          Number(state.dimensionCultural23.preg231.respuesta.puntaje) || 0;
        respuestaSubpreg +=
          Number(state.dimensionCultural23.preg231.respuesta.puntaje) || 0;

        state.dimensionCultural23.preg231.puntos = numeroDecimal(
          primeraRespuesta + respuestaSubpreg
        );
        return state.dimensionCultural23.preg231.puntos;
      },
      puntajeTotalpreg232(state) {
        let primeraRespuesta = 0;

        primeraRespuesta =
          Number(state.dimensionCultural23.preg232.respuesta.puntaje) || 0;

        state.dimensionCultural23.preg232.puntos =
          numeroDecimal(primeraRespuesta);
        return state.dimensionCultural23.preg232.puntos;
      },
      puntajeTotalPreg233(state) {
        let primeraRespuesta = 0;
        state.dimensionCultural23.preg233.plantasC.forEach((plantaCura) => {
          primeraRespuesta += Number(plantaCura.plantaMedic.puntaje);
        });
        state.dimensionCultural23.preg233.puntos =
          numeroDecimal(primeraRespuesta);
        return state.dimensionCultural23.preg233.puntos;
      },
      puntajeTotalPreg234(state) {
        let primeraRespuesta = 0;
        state.dimensionCultural23.preg234.respuesta.forEach((ancestrales) => {
          primeraRespuesta += Number(ancestrales.puntaje);
        });
        state.dimensionCultural23.preg234.puntos =
          numeroDecimal(primeraRespuesta);
        return state.dimensionCultural23.preg234.puntos;
      },
      puntajeTotalPreg235(state) {
        let primeraRespuesta = 0;

        primeraRespuesta +=
          Number(state.dimensionCultural23.preg235.respuesta.puntaje) || 0;

        state.dimensionCultural23.preg235.puntos =
          numeroDecimal(primeraRespuesta);
        return state.dimensionCultural23.preg235.puntos;
      },
      puntajeTotalPreg236(state) {
        let primeraRespuesta = 0;

        state.dimensionCultural23.preg236.items.forEach((practica) => {
          primeraRespuesta += Number(practica.respuesta.puntaje)
            ? Number(practica.respuesta.puntaje)
            : 0;
        });

        state.dimensionCultural23.preg236.puntos =
          numeroDecimal(primeraRespuesta);

        return state.dimensionCultural23.preg236.puntos;
      },

      puntajeTotalDimensionPolitica(state) {
        const PuntajeDimensionPolitica =
          state.dimensionPolitica21.preg211.puntos +
          state.dimensionPolitica21.preg212.puntos +
          state.dimensionPolitica21.preg213.puntos +
          state.dimensionPolitica21.preg214.puntos +
          state.dimensionPolitica21.preg215.puntos;

        state.dimensionPolitica21.puntajeTotal = numeroDecimal(
          PuntajeDimensionPolitica
        );
        return state.dimensionPolitica21.puntajeTotal;
      },
      puntajeTotalDimensionSocioOrg(state) {
        const PuntajeDimensionSocioOrg =
          state.dimensionSocioOrganizativa22.preg221.puntos +
          state.dimensionSocioOrganizativa22.preg222.Puntos +
          state.dimensionSocioOrganizativa22.preg223.puntos +
          state.dimensionSocioOrganizativa22.preg224.puntos +
          state.dimensionSocioOrganizativa22.preg225.puntos +
          state.dimensionSocioOrganizativa22.preg226.puntos;

        state.dimensionSocioOrganizativa22.puntajeTotal = numeroDecimal(
          PuntajeDimensionSocioOrg
        );
        return state.dimensionSocioOrganizativa22.puntajeTotal;
      },
      puntajeTotalDimensionCultar(state) {
        const PuntajeDimensionCultural =
          state.dimensionCultural23.preg231.puntos +
          state.dimensionCultural23.preg232.puntos +
          state.dimensionCultural23.preg233.puntos +
          state.dimensionCultural23.preg234.puntos +
          state.dimensionCultural23.preg235.puntos +
          state.dimensionCultural23.preg236.puntos;

        state.dimensionCultural23.puntajeTotal = numeroDecimal(
          PuntajeDimensionCultural
        );
        return state.dimensionCultural23.puntajeTotal;
      },
    },
    actions: {},
  }
);
