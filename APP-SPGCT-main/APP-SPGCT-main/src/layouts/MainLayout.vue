<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="row justify-center items-center">
        <q-img src="../assets/partelogo.png" style="height: 150px; width: 150px" />
      </div>

      <q-list>
        <!-- Enlaces esenciales -->
        <q-item v-for="link in essentialLinks" :key="link.title" :to="link.blocked ? undefined : link.link" clickable
          :class="{ 'text-grey-5': link.blocked, 'cursor-not-allowed': link.blocked }">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label> {{ link.title }} </q-item-label>
            <q-item-label caption> {{ link.caption }} </q-item-label>
          </q-item-section>
        </q-item>

        <!-- Botón para cerrar sesión -->
        <q-item clickable @click="logout">
          <q-item-section avatar>
            <q-icon name="logout" color="red" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-red">Cerrar sesión</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { verifyTokenType } from '../stores/backend/access_tokens';

const leftDrawerOpen = ref(false);

// Configuración inicial de los enlaces
const essentialLinks = reactive([
  {
    title: 'Agregar productor',
    caption: 'Agregar un nuevo productor',
    icon: 'person_add',
    link: '/nuevo-productor',
    blocked: true,
  },
  {
    title: 'Productores',
    caption: 'Productores agregados',
    icon: 'settings_accessibility',
    link: '/productores',
    blocked: true,
  },
  {
    title: 'Dashboard',
    caption: 'Panel administrativo',
    icon: 'dashboard',
    link: '/dashboard',
    blocked: true,
  },
  {
    title: 'Historial',
    caption: 'Historial vedurias',
    icon: 'email',
    link: '/historialPage',
    blocked: true,
  },
  {
    title: 'Cambiar Contraseña',
    caption: 'Restablecer tu contraseña',
    icon: 'lock_reset',
    link: '/recuperar-contrasena',
    blocked: true,
  }
]);

// Configurar enlaces según el tipo de acceso
onMounted(() => {
  const tokenType = verifyTokenType();

  if (tokenType === 'local') {
    essentialLinks.forEach((link) => {
      link.blocked = !['/nuevo-productor', '/historialPage'].includes(link.link);
    });
  } else if (tokenType === 'api') {
    essentialLinks.forEach((link) => {
      link.blocked = false;
    });
  } else {
    console.warn('Acceso denegado: ningún token válido.');
    essentialLinks.forEach((link) => link.blocked = true);
  }
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Función para cerrar sesión
const router = useRouter();

function logout() {
  try {
    console.log('Cerrando sesión...');
    localStorage.removeItem('authToken');
    localStorage.removeItem('apiToken');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    router.push('/login');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
}
</script>
