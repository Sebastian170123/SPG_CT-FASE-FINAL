/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { ExternalClass } from './id-veedurias';
// import { ref } from 'vue';
import { LocalStorage } from 'quasar';
// import { useProductor } from './backend/Productor';
// import { IProductorModel } from 'src/models/spgct.models';
// const productores = ref<IProductorModel[]>([]);
// const productorStore = useProductor();
export const useFormulariosControl = defineStore('formulariosControl', {
  state: () => ({
    datosVeedor: null,
    datosGenerales: null,
    dimensionEcologica: null,
    dimensionEconomica: null,
    dimensionSocialCulturalPolitica: null,
  }),
  getters: {
    puntajeTotal: (state) => {
      let puntajeTotal = 0;
      if (
        !state.dimensionEcologica ||
        !state.dimensionEconomica ||
        !state.dimensionSocialCulturalPolitica
      )
        return 0;
      puntajeTotal =
        Number((state.dimensionEcologica as any).puntajeTotal) +
        Number((state.dimensionEcologica as any).puntajeTotal) +
        Number((state.dimensionEcologica as any).puntajeTotal);
      return puntajeTotal;
    },
  },
  actions: {
    setDatosVeedor(datosVeedor: any) {
      this.datosVeedor = datosVeedor;
    },

    setDatosGenerales(datosGenerales: any) {
      this.datosGenerales = datosGenerales;
    },
    setDimensionEcologica(dimensionEcologica: any) {
      this.dimensionEcologica = dimensionEcologica;
    },
    setDimensionEconomica(dimensionEconomica: any) {
      this.dimensionEconomica = dimensionEconomica;
    },
    setDimensionSocialCulturalPolitica(dimensionSocialCulturalPolitica: any) {
      this.dimensionSocialCulturalPolitica = dimensionSocialCulturalPolitica;
    },
    guardarInformacionEnLocalStorage() {
      // Obtener la lista actual de productores desde el localStorage

      const listaProductores: any = LocalStorage.getItem('productores') || [];

      const nuevoProductor = {
        //cedula: (this.datosGenerales as any).cedula,
        id: ExternalClass.generarIdHexadecimal(),
        datosVeedor: this.datosVeedor,
        datosGenerales: this.datosGenerales,
        dimensionEcologica: this.dimensionEcologica,
        dimensionEconomica: this.dimensionEconomica,
        dimensionSocialCulturalPolitica: this.dimensionSocialCulturalPolitica,
      };

      // Agregar el nuevo productor a la lista
      listaProductores.push(nuevoProductor);
      // Guardar la lista actualizada en el localStorage
      LocalStorage.set('productores', listaProductores);
    },
  },
});
