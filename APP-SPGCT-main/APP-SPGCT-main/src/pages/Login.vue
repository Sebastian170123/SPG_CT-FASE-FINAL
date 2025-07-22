<template>
  <div class="app-container">
    <div class="info-container">
      <h1 class="app-title">Bienvenido a SPGCT</h1>
      <p class="app-description">
        SPGCT es una plataforma diseñada para facilitar el seguimiento del desarrollo
        comunitario del canton Cayambe.
      </p>
      <ul class="features-list">
        <li>Registro de productores agroecológicos</li>
        <li>Seguimiento de metas y resultados.</li>
        <li>Colaboración en equipo y análisis de datos.</li>
        <li>Certificación de productores agroecológicos</li>
      </ul>
    </div>

    <div class="login-container">
      <!-- Contenedor del login -->
      <h2 class="login-title">Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" required placeholder="Ingresa tu correo" class="form-input" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input :type="isPasswordVisible ? 'text' : 'password'" id="password" v-model="password" required
            placeholder="Ingresa tu contraseña" class="form-input" />
        </div>
        <div class="show-password-checkbox">
          <input type="checkbox" id="showPassword" v-model="isPasswordVisible" />
          <label for="showPassword">
            {{ isPasswordVisible ? 'Ocultar Contraseña' : 'Ver Contraseña' }}
          </label>
        </div>
        <q-circular-progress v-if="loading" indeterminate rounded size="50px" color="light-blue" class="q-ma-md" />
        <button type="submit" class="login-button">Iniciar Sesión</button>

        <p class="reset-password-link" @click="toggleCard">Recuperar Contraseña</p>
      </form>
    </div>

    <div v-if="showCard" class="floating-card">
      <div class="card-content">
        <h3 class="card-title">Información Importante</h3>
        <p class="card-description">Contactate con tu administrador de aplicacion para recuperar tu contraseña de
          usuario</p>
        <button @click="toggleCard">Cerrar</button>
      </div>
    </div>

  </div>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 SPGCT. Todos los derechos reservados.</p>
      <p>Creado por: <span class="creator-name">Equipo SPGCT</span> | <a
          href="https://www.linkedin.com/in/omar-sani-b9733a2b9/" target="_blank">visita nuestro perfil</a></p>
      <p>Contacto: <a href="mailto:info@spgct.com" class="footer-link">info@spgct.com</a></p>
    </div>
  </footer>
</template>



<script>
import { authService } from '../stores/backend/access_tokens';
import { postApiLogin } from '../stores/backend/access_tokens';

const LoginPage = {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      isPasswordVisible: false,
      loading: false,
      showCard: false,
    };
  },
  methods: {
    async handleLogin() {
      try {
        if (this.email && this.password) {
          this.loading = true;

          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);

          postApiLogin();
          const isAuthenticated = await authService.login(this.email, this.password);

          if (isAuthenticated) {
            window.location.href = '#/nuevo-productor';
          }
        } else {
          alert('Por favor, ingresa tanto el correo como la contraseña.');
        }
      } catch (error) {
        alert('Correo o contraseña incorrectos');
      } finally {
        this.loading = false;
      }
    },
    toggleCard() {
      this.showCard = !this.showCard;
    },
  },
};

export default LoginPage;
</script>



<style scoped>
.app-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  position: relative;
  background: url(/src/img/imagen_fondo.png) center/cover no-repeat;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.app-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.636);
  z-index: 0;
}

/* Contenedor de la información */
.info-container {
  max-width: 50%;
  padding: 2rem;
  z-index: 1;
}

/* Título de la aplicación */
.app-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease;
  z-index: 1;
}

.app-title:hover {
  color: #5c6bc0;
}

/* Descripción de la aplicación */
.app-description {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #000000;
  text-align: justify;
  font-family: 'Open Sans', sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.3s ease;
}

/* Lista de características */
.features-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.features-list li {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.features-list li i {
  font-size: 2rem;
  color: #5c6bc0;
  margin-bottom: 1rem;
}

/* Estilos adicionales */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Contenedor del login */
.login-container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.1);
  transition: background-color 1s ease;
}

.login-container:hover {
  background-color: #ffffffb0;
}

.login-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Formulario de login */
.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
}

.form-input:focus {
  outline: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

/* Checkbox para mostrar contraseña */
.show-password-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.show-password-checkbox input {
  margin-right: 0.5rem;
}

/* Botón de login */
.login-button {
  background-color: #6093ec;
  color: #ffffff;
  border: none;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #1b5ec2;
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Centra verticalmente */
    height: 100vh;
    /* Asegura que ocupe toda la pantalla */
    padding: 1rem;
  }

  .login-container {
    width: 90%;
    max-width: 400px;
    margin: auto;
    /* Centra horizontalmente */
    padding: 2rem;
    text-align: center;
  }

  .app-title {
    font-size: 1.8rem;
  }

  .app-description {
    font-size: 0.9rem;
  }

  .features-list li {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .app-container {
    height: 100vh;
    padding: 10px;
  }

  .info-container {
    display: none;
    /* Opcional: oculta la sección informativa en móviles */
  }

  .login-container {
    width: 100%;
    max-width: 350px;
    padding: 1.5rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login-title {
    font-size: 1.5rem;
  }

  .form-input {
    font-size: 0.9rem;
    padding: 12px;
  }

  .login-button {
    font-size: 1rem;
    padding: 12px;
  }
}


.footer {

  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  font-size: 1rem;
  color: #333;
}

.footer-link {
  color: #5c6bc0;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.creator-name {
  font-weight: bold;
  color: #333;
}


.app-container {
  padding: 20px;
}

.info-container {
  margin-bottom: 20px;
}

.login-container {
  margin-top: 100px;
}

.floating-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.card-content {
  text-align: center;
}

.card-title {
  font-size: 1.5rem;
  color: #333;
}

.card-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #005bb5;
}



.reset-password-link {
  color: #df5a5a;
  cursor: pointer;
  font-weight: bold;
}

.reset-password-link:hover {
  text-decoration: underline;
}
</style>
