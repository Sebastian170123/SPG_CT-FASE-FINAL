import { defineStore } from 'pinia';

export const useDatosVeedor = defineStore('formDatosVeedor', {
  state: () => ({
    nombre: '',
    cedula: '',
    organizacionPert: '',
  }),

  getters: {},
  actions: {},
});
