import { defineStore } from 'pinia';
import { IProductorModel } from '../models/spgct.models';

// external-package/ExternalClass.ts
export class ExternalClass {
  // Genera un ID hexadecimal de 24 caracteres
  public static generarIdHexadecimal(): string {
    const caracteres = '0123456789abcdef';
    let id = '';

    for (let i = 0; i < 24; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres[indiceAleatorio];
    }

    return id;
  }
}
