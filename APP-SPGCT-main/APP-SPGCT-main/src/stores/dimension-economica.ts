import { defineStore } from 'pinia';
import {
  IOpciones,
  IComercializacion,
  IProcesados,
  IReinvierteParcela,
  IConsumidoresIdentificados,
} from 'app/src/models/spgct.models';
import { numeroDecimal } from 'src/utils/utils';

export const useDimensionEconomica = defineStore('formDimensionEconomica', {
  state: () => ({
    dimensionEconomica25: {
      nombre: '2.5 Dimensión Economica 15 Puntos',
      puntajeTotal: 0,
      preg251: {
        nombre: '2.5.1 ¿Cómo sabe si gana o pierde en su chacra?',
        puntos: 0,
        respuesta: {} as IOpciones,
        subpreg: {
          nombre:
            '¿Considera usted que la producción agroecológica es rentable?',
          respuesta: {} as IOpciones,
          porque: '',
        },
      },
      preg252: {
        nombre: '2.5.2 ¿Cuántos rubros son los que más comercializa?',
        puntos: 0,
        rubros: [] as IComercializacion[],
      },
      preg253: {
        nombre:
          '2.5.3 ¿Cuáles son los productos procesados que usted elabora para consumo o venta?',
        puntos: 0,
        prodProcesados: [] as IProcesados[],
        subpreg: {
          nombre:
            '¿Su organización o comunidad tiene caja de ahorro y crédito?',
          respuesta: {} as IOpciones,
        },
        subpreg2: {
          nombre: '¿Para qué activad hace creditos?',
          respuesta: {} as IOpciones,
        },
      },
      preg254: {
        nombre: '¿Qué actividad  desea hacer para mejorar la feria?',
        puntos: 0,
        respuesta: {} as IOpciones,
      },
      preg255: {
        nombre:
          '2.5.5 ¿De los ingresos que obtiene por venta de productos, en que los invierte?',
        puntos: 0,
        canastaFamiliar: [] as IReinvierteParcela[],
        Insumos: [] as IReinvierteParcela[],
      },
      preg256: {
        nombre:
          '2.5.6 ¿En el último año, cuántos consumidores fieles o frecuentes ha identificado?',
        puntos: 0,
        consumidoresIdentificados: [] as IConsumidoresIdentificados[],
      },
    },
  }),

  getters: {
    puntajetotalpreg251(state) {
      let puntajePreg251 = 0;
      let puntajeSubpreg251 = 0;

      puntajePreg251 =
        Number(state.dimensionEconomica25.preg251.respuesta.puntaje) || 0;
      puntajeSubpreg251 =
        Number(state.dimensionEconomica25.preg251.subpreg.respuesta.puntaje) ||
        0;
      state.dimensionEconomica25.preg251.puntos = numeroDecimal(
        puntajePreg251 + puntajeSubpreg251
      );
      return state.dimensionEconomica25.preg251.puntos;
    },
    puntajetotalpreg252(state) {
      let puntajePreg252 = 0;
      state.dimensionEconomica25.preg252.rubros.forEach((rubro) => {
        puntajePreg252 += Number(rubro.productos.puntaje);
      });
      state.dimensionEconomica25.preg252.puntos = numeroDecimal(puntajePreg252);
      return state.dimensionEconomica25.preg252.puntos;
    },
    puntajeTotalpreg253(state) {
      let puntajePreg253 = 0;
      let puntajeSubpreg253 = 0;
      let puntajeSubpreg2532 = 0;

      state.dimensionEconomica25.preg253.prodProcesados.forEach((prod) => {
        puntajePreg253 += Number(prod.productos.puntaje);
      });

      puntajeSubpreg253 =
        Number(state.dimensionEconomica25.preg253.subpreg.respuesta.puntaje) ||
        0;
      puntajeSubpreg2532 =
        Number(state.dimensionEconomica25.preg253.subpreg2.respuesta.puntaje) ||
        0;

      state.dimensionEconomica25.preg253.puntos = numeroDecimal(
        puntajePreg253 + puntajeSubpreg253 + puntajeSubpreg2532
      );
      return state.dimensionEconomica25.preg253.puntos;
    },
    puntajeTotalpreg254(state) {
      let puntajePreg254 = 0;
      puntajePreg254 =
        Number(state.dimensionEconomica25.preg254.respuesta.puntaje) || 0;
      state.dimensionEconomica25.preg254.puntos = numeroDecimal(puntajePreg254);
      return state.dimensionEconomica25.preg254.puntos;
    },
    puntajeTotalpreg255(state) {
      let puntajePreg255 = 0;
      let puntajePreg2552 = 0;
      state.dimensionEconomica25.preg255.canastaFamiliar.forEach((canasta) => {
        puntajePreg255 += Number(canasta.productos.puntaje);
      });
      state.dimensionEconomica25.preg255.Insumos.forEach((insumo) => {
        puntajePreg2552 += Number(insumo.productos.puntaje);
      });
      state.dimensionEconomica25.preg255.puntos = numeroDecimal(
        puntajePreg255 + puntajePreg2552
      );
      return state.dimensionEconomica25.preg255.puntos;
    },
    puntajeTotalpreg256(state) {
      state.dimensionEconomica25.preg256.puntos =
        state.dimensionEconomica25.preg256.consumidoresIdentificados.length > 0
          ? 1
          : 0;
      return state.dimensionEconomica25.preg256.puntos;
    },
    puntajeTotalDimensionEconomica25(state) {
      let puntajeTotal = 0;
      puntajeTotal =
        state.dimensionEconomica25.preg251.puntos +
        state.dimensionEconomica25.preg252.puntos +
        state.dimensionEconomica25.preg253.puntos +
        state.dimensionEconomica25.preg254.puntos +
        state.dimensionEconomica25.preg255.puntos +
        state.dimensionEconomica25.preg256.puntos;

      state.dimensionEconomica25.puntajeTotal = numeroDecimal(puntajeTotal);
      return state.dimensionEconomica25.puntajeTotal;
    },
  },
  actions: {},
});
