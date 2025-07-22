import { v4 as uuidv4 } from 'uuid';
import { email, pass } from 'src/models/spgct.models.user';
import { api, apiUser } from '../../boot/axios';

export const authService = {
  email: '',
  password: '',

  // Método de login
  async login(emailInput: string, password: string): Promise<boolean> {
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('apiToken');
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashedPassword = hashArray
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');

      if (emailInput === email && hashedPassword === pass) {
        const sessionToken = uuidv4();
        localStorage.setItem('authToken', sessionToken);
        localStorage.setItem('email', emailInput);
        localStorage.setItem('password', hashedPassword);
        window.location.href = '#/nuevo-productor';
        return true;
      } else {
        console.error('Login local fallido, enviando a la API');
        const response = await apiUser.post('login/Validate', {
          email: emailInput,
          password,
        });

        if (response.data?.token) {
          const authToken = response.data.token;
          localStorage.setItem('authToken', authToken);
          window.location.href = '#/recuperar-contrasena';
          return true;
        } else {
          console.error('Error: No se obtuvo un token válido');
          return false;
        }
      }
    } catch (error) {
      console.error('Error en el login:', error);
      return false;
    }
  },

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('apiToken');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  },
};

// Recuperar credenciales desde localStorage
export function loadCredentials() {
  const savedEmail = localStorage.getItem('email') || '';
  const savedPassword = localStorage.getItem('password') || '';

  return {
    email: savedEmail,
    password: savedPassword,
  };
}

// Enviar credenciales a la API para validación
export async function postApiLogin() {
  try {
    const credentials = loadCredentials();
    const response = await apiUser.post('login/Validate', {
      email: credentials.email,
      password: credentials.password,
    });
    const token = response.data?.token;
    localStorage.setItem('apiToken', token);
  } catch (error) {
    console.error('Error al validar las credenciales con la API:', error);
  }
}

// Resetear la contraseña y enviarla por correo
export async function postResetLogin() {
  const credentials = getCredentialsReset();

  if (!credentials) {
    console.warn('No se encontraron credenciales para resetear');
    return;
  }

  try {
    const response = await apiUser.post('Mail/update-password', credentials);
    console.log('Contraseña actualizada:', response.data);
  } catch (error) {
    console.error('Error al resetear la contraseña:', error);
    throw error;
  }
}
// Funcion para validar el origen de los tokends y dar permisos a ciertas funciones
export function verifyTokenType(): string {
  let localToken = localStorage.getItem('authToken');
  const apiToken = localStorage.getItem('apiToken');

  if (localToken && !apiToken) {
    return 'local';
  } else {
    localToken = '';

    if (!localToken && apiToken) {
      return 'api';
    }

    console.warn('Acceso denegado: ningún token válido.');
    return 'none';
  }
}

// Obtener credenciales para resetear desde localStorage
export function getCredentialsReset() {
  const storedData = localStorage.getItem('userCredentials');
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error al parsear datos almacenados:', error);
      return null;
    }
  }
  console.warn('No se encontraron datos en localStorage.');
  return null;
}
