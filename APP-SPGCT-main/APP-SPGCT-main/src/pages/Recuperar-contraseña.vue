<template>
  <div class="recover-password-container">
    <div class="card">
      <h3 class="text-center">Cambiar Contraseña</h3>
      <form @submit.prevent="handleSubmit">

        <div class="input-group">
          <label for="newPassword">Nueva Contraseña</label>
          <input :type="isPasswordVisible ? 'text' : 'password'" id="newPassword" v-model="newPassword" required />
        </div>

        <div class="input-group">
          <label for="confirmPassword">Confirmar Contraseña</label>
          <input :type="isPasswordVisible ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword"
            required />
        </div>

        <div class="checkbox-container">
          <input type="checkbox" id="showPassword" v-model="isPasswordVisible" />
          <label for="showPassword">
            {{ isPasswordVisible ? 'Ocultar Contraseña' : 'Ver Contraseña' }}
          </label>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            Recuperar Contraseña
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { credentials } from '../models/spgct.models.user';
import { postResetLogin } from '../stores/backend/access_tokens';
import { loadCredentials } from '../stores/backend/access_tokens';

export default {
  name: 'recuperar-contrasena',
  setup() {
    const newPassword = ref('');
    const confirmPassword = ref('');
    const isPasswordVisible = ref(false);

    const handleSubmit = () => {
      if (newPassword.value !== confirmPassword.value) {
        alert('Las contraseñas no coinciden.');
      } else {
        const emailLogin = loadCredentials().email;
        const userCredentials: credentials = {
          email: emailLogin,
          password: newPassword.value,
        };
        localStorage.setItem('userCredentials', JSON.stringify(userCredentials));

        postResetLogin();
        alert('Contraseña actualizada correctamente.')
      }
    };

    return {
      newPassword,
      confirmPassword,
      handleSubmit,
      isPasswordVisible,
    };
  },
};
</script>


<style scoped>
.recover-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  font-size: 1em;
  margin-bottom: 5px;
}

input[type="password"],
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 12px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4caf50;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 1.1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* Desplaza el checkbox y el texto ligeramente a la derecha */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  margin-left: 10px;
  /* Ajuste para mover el contenido hacia la derecha */
}

.checkbox-container input {
  margin: 0;
}

.checkbox-container label {
  font-size: 1em;
  margin: 0;
}
</style>
