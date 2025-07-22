import { defineStore } from 'pinia';
import { ITipoTerreno, IUbicacionChacra } from 'app/src/models/spgct.models';
/* Esta línea importa la función de la biblioteca
 en la que se utiliza para crear una nueva instancia de almacén. */

export const useDatosGenerales = defineStore('formDatosGenerales', {
  /* Esta línea exporta una constante denominada que representa la instancia de almacén creada con la función.
    El primer argumento que se pasa es un nombre único.
    El segundo argumento es un objeto que define el estado, los captadores y las acciones del almacén. */
  state: () => ({
    nombre: '',
    edad: '',
    cedula: '',
    fecha: '',
    instruccion: '',
    jefeHogar: '',
    numHombres: 0,
    numMujeres: 0,
    numHijos: 0,
    telefono: '',
    correo: '',
    ubiChacra: [] as IUbicacionChacra[],
    organizacionPert: '',
    aniosCultiv: '',
    numVeedurias: '',
    produtCertif: '',
    tiposTerrenos: [] as ITipoTerreno[],
    totalMetrosCuadrados: 0,

    /* Este es un método que devuelve un objeto que representa el estado inicial .
  En este caso, el objeto de estado tiene cuatro propiedades y todas inicializadas
  con cadenas vacías. */
  }),

  getters: {
    /* Los captadores son funciones que permiten acceder a las propiedades de estado de forma calculada.
     En este caso, hay cuatro captadores y cada uno devuelve la propiedad de estado correspondiente. */
    totalHijos: (state) => {
      state.numHijos = Number(state.numHombres) + Number(state.numMujeres);
    },
    calculoMetrosTotales: (state) => {
      let sumaMetrosTerreno = 0;
      state.tiposTerrenos.forEach(
        (terreno) => (sumaMetrosTerreno += Number(terreno.areaTerreno))
      );

      state.totalMetrosCuadrados = sumaMetrosTerreno;
    },
  },
  actions: {
    /*Las acciones son funciones que se pueden utilizar para modificar el estado.
  En este caso, hay cuatro acciones y cada una acepta un parámetro de cadena y establece
  la propiedad de estado correspondiente en el valor proporcionado */
  },
});
