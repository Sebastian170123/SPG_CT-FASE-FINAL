import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { IProductorModel } from 'src/models/spgct.models';

function handleApiError(error: any, action: string) {
  console.error(`Error en useProductor.${action}`, error);
  if (error.response) {
    console.error('Respuesta del servidor:', error.response.data);
  } else if (error.request) {
    console.error('No se recibió respuesta del servidor', error.request);
  } else {
    console.error('Error al configurar la solicitud', error.message);
  }
  throw new Error(`Error en la acción ${action}`);
}

export const useProductor = defineStore('productor', {
  state: () => ({}),
  getters: {},
  actions: {
    async getProductores(): Promise<IProductorModel[]> {
      try {
        const token = localStorage.getItem('apiToken'); // O desde donde lo guardes
        const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Si no hay token, no se agrega el header

        const res = await api.get('/Productor', { headers });
        console.log('Productor traído de forma general');
        return res.data as IProductorModel[];
      } catch (error) {
        console.error('Error en useProductor.getProductores:', error);
        throw new Error('Error al obtener los productores');
      }
    },

    async getProductor(id: string): Promise<IProductorModel> {
      try {
        const token = localStorage.getItem('apiToken'); // O desde donde lo guardes
        const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Si no hay token, no se agrega el header

        const res = await api.get(`/Productor/${id}`, { headers });
        console.log('Productor traído por id');
        return res.data as IProductorModel;
      } catch (error) {
        console.error(`Error en useProductor.getProductor (ID: ${id}):`, error);
        throw new Error('Error al obtener el productor');
      }
    },

    async deleteProductor(id: string): Promise<void> {
      try {
        await api.delete(`/Productor/${id}`);
      } catch (error) {
        console.error(
          `Error en useProductor.deleteProductor (ID: ${id}):`,
          error
        );
        throw new Error('Error al eliminar el productor');
      }
    },

    async createProductor(
      productor: IProductorModel
    ): Promise<IProductorModel> {
      try {
        // Ensure the name field is present and valid before sending the request
        if (!productor.id) {
          throw new Error('Productor name is required');
        }

        const res = await api.post('/Productor', productor);
        if (res.status === 201) {
          return res.data as IProductorModel;
        } else {
          console.error(
            'useProductor.createProductor: Respuesta inesperada',
            res
          );
          throw new Error('Error al crear el productor');
        }
      } catch (error) {
        handleApiError(error, 'createProductor');
        throw new Error('Error inesperado al crear el productor');
      }
    },

    async updateProductor(
      productor: IProductorModel
    ): Promise<IProductorModel> {
      try {
        const res = await api.put(`/Productor/${productor.id}`, productor);
        if (res.status === 200) {
          return res.data as IProductorModel;
        } else {
          console.error(
            'useProductor.updateProductor: Respuesta inesperada',
            res
          );
          throw new Error('Error al actualizar el productor');
        }
      } catch (error) {
        handleApiError(error, 'updateProductor');
        throw new Error('Error inesperado al actualizar el productor');
      }
    },
  },
});
