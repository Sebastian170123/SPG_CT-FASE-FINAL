export const email = 'desarrollo.productivo25@gmail.com';
export const pass =
  'fa32a82df83ff1ebddd089581f0940aa259322aaf27ef042fe7c9f4e2324ae25';

// Definición de la interfaz

export interface credentials {
  email: string;
  password: string;
}

export interface UserModel {
  id?: string;
  email: string;
  password: string;
}
