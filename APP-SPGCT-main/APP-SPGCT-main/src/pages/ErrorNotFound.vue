<template>
  <div class="q-pa-md q-gutter-md flex flex-center" style="height: 100vh; background-color: #f0f4f8;">
    <div class="text-center">
      <!-- Título Principal -->
      <div class="text-h1" style="font-size: 5rem; font-weight: 600; color: #2c3e50; margin-bottom: 20px;">
        404
      </div>

      <div class="text-h6" style="opacity: 0.7; color: #7f8c8d; margin-bottom: 40px;">
        Oops. Nothing here...
      </div>

      <!-- Botón para regresar -->
      <q-btn class="q-mt-xl" color="primary" text-color="white" unelevated to="/" label="Go Home" no-caps />
    </div>

    <!-- Créditos de los desarrolladores -->
    <div class="credit-section">
      <q-card class="q-mb-md" flat bordered>
        <q-card-section>
          <h3 class="text-h5" style="color: #2c3e50;">Créditos de Desarrollo</h3>
          <p class="text-subtitle2" style="color: #7f8c8d;">Gracias a los siguientes colaboradores que hicieron posible
            esta aplicación.

            En conjunto con el Instituto Nelson Torres y el departamento de Desarrollo de Software del Municipio de
            Cayambe que llevaron acabo el desarrollo de la aplicacion
          </p>
        </q-card-section>
      </q-card>

      <!-- Fase 1 -->
      <q-card class="q-mb-md" flat bordered>
        <q-card-section>
          <h4 class="text-h6" style="color: #2c3e50;">Fase 1: Construcción</h4>
          <ul>
            <li><a href="mailto:gualli.maria@intsuperior.edu.ec" class="footer-link">Daniela Gualli</a> | 0992462559
            </li>
            <li><a href="mailto:christopher.llamatumbi@intsuperior.edu.ec" class="footer-link">Ismael Llamatumbi</a> |
              0980993652</li>
            <li><a href="mailto:joselin.tutillo@intsuperior.edu.ec" class="footer-link">Abigail Tutillo</a> | 0959094951
            </li>
            <li><a href="mailto:brayan.jimenez@intsuperior.edu.ec" class="footer-link">Brayan Jimenez</a> | 0987842124
            </li>
          </ul>
        </q-card-section>
      </q-card>

      <!-- Fase 2 -->
      <q-card class="q-mb-md" flat bordered>
        <q-card-section>
          <h4 class="text-h6" style="color: #2c3e50;">Fase 2: Construcción</h4>
          <ul>
            <li><a href="mailto:andres.moya@intsuperior.edu.ec" class="footer-link">Andres Moya</a> | 0988091107</li>
            <li><a href="mailto:jean.delacruz@intsuperior.edu.ec" class="footer-link">Jean De la Cruz</a> | 0997431311
            </li>
            <li><a href="mailto:lisbeth.esmeralda@intsuperio.edu.ec" class="footer-link">Lisbeth Esmeralda</a> |
              0994846279</li>
            <li><a href="mailto:omarxdj4@gmail.com" class="footer-link">Omar Sani</a> | 0959491061</li>
          </ul>
        </q-card-section>
      </q-card>

      <!-- Fase 3 (Depuración y Lanzamiento) -->
      <q-card class="q-mb-md" flat bordered>
        <q-card-section>
          <h4 class="text-h6" style="color: #2c3e50;">Fase 3: Construccion Depuración y Lanzamiento</h4>
          <ul>
            <li><a href="mailto:omarxdj4@gmail.com" class="footer-link">Omar Sani</a> | 0959491061 | 0963285407</li>
            <li><a href="mailto:stalynfg5@gmail.com" class="footer-link">Stalyn Fernandez</a> | 0968809537</li>
            <li><a href="mailto:darwincampiues2908@gmail.com" class="footer-link">Darwin Campues</a> | 0986265270</li>
            <li><a href="mailto:mg8462654@gmail.com" class="footer-link">Micheal Garcia</a> | 0988493858</li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Estilo global para el enlace en el pie de página */
.footer-link {
  text-decoration: none;
  font-weight: 500;
  color: #2980b9;
}

.footer-link:hover {
  text-decoration: underline;
}

.credit-section {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
}

q-card {
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

q-card-section {
  padding: 20px;
}

.text-h5,
.text-h6 {
  color: #2c3e50;
}

.text-subtitle2 {
  color: #7f8c8d;
}

q-btn {
  width: 200px;
  margin-top: 30px;
}
</style>
