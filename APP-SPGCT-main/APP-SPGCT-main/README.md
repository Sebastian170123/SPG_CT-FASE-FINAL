fTareas release/0.0.1
--- Glosario ----------
"[*]" Tarea completa
"[-]" Revisar tarea
"[]" Tarea sin iniciar

---

[] Agregar el siguiente evento a todos los formularios actuales y futuros
-> @validation-error="
(ref: any) =>
ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })
"

---

[*] Cambiar el q-imput por q-select y colocar las opciones de Provincia, parroquia y canton
-> falta agregar la propiedad rules, la propiedad :rules="[(v) => !!v || 'Debe seleccionar una opción']", esta sera la regla para todas los q-select que exista, lo que hace es que debe estar seleccionado un campo
-> falta agregar la propiedad para las opciones que pueden escoger
[*] Anidar el formulario que sirve para agregar chacras al formulario principal.
-> Eliminar el elemento div que esta antes del forulario de chacras.
-> al formulario darle las clases "col-12 row"
-> a sus hijos (q-imput, q-select, lo que anida se les dice hijos), hay que agregar la clase col-6,
-> comunidad y barrio son q-select o q-input definan que usaran ?
[*] Colocar identificadores a los formularios, ejemplo id="FormularioDatosGenerales" asi para todos los formularios en adelante
[] Solicitar las Cantones para cada Provincia y parroquias para cada Canton (En su cuaderno u hoja)
[*] Agregar los campos para coordenadas
[*] Revisar en sus casas la funcionalidad Watch de vue en videos o documentacion https://vuejs.org/guide/essentials/watchers.html#basic-example

---

[*] En componente Datos Generales crear variables "ref" de la siguiente manera
->opcProvincias, inicializar con el arreglo de las provincias Pichincha, Imbabura, Sto. Domingo
->opcCantones, inicializar como un arreglo vacio
->opcParroquias, inicializar como un arreglo vacio

[*] En la interfaz IUbicacionChacra anidar el siguiente objeto
coordenadas; {
latitud: string,
longitud: string,
altura: string
}

[*] anidar el objeto coordenadas al objeto ubicacionChacra que se encuentra en DatosGenerales
coordenadas; {
latitud: "",
longitud: "",
altura: ""
}

---

[*] Dentro de src crear un nuevo directorio llamado Models, dentro de este directorio crear la clase spgct.models.ts
[*] mover y exportar la interfaz IUbicacionChacra a la nueva clase creada anteriormente, importar esta interfaz al store datos-generales y poner el valor de la propiedad ubiChacra de la siguiente manera "[] as IUbicacionChacra[]".
[*] Borrar la interfaz IUbicacionChacra del componente DatosGenerales, importar la interfaz de la clase models, eliminar la variable ubicacionesChacras
[*] En la funcion agregarUbicacion, renombrar y colocarle el nombre agregarUbicacionChacra, cambiar ubicacionesChacras.value por ubiChacra del store,
[*] Hacer las correcciones necesarias y agregar comentarios, explicando los cambios que van realizando

---

[*] En la ruta src/css/app.scss crear una clase de CSS llamada "contenedor", declarar esta clase css para que sea la encargada de dar un ancho maximo de 600px.

[*] En la ruta src/pages/IndexPage.vue, borrar las clases que tiene ahorita y agregar la clase "contenedor" al componente <q-page> y tambien centrarlo en el eje x, pueden agregar la clase css de quasar "q-mx-auto"

---

[*] Agregar comentario para agregarlo como documentacion de que es cada linea de lo realizado hasta ahora en el componete DatosGenerales y datos-generales-store ejem:

    <!-- <q-form> = Es un componente Forumario
        @submit  = Evento nativo de Quasar
    -->
    // formDatosGeneralesSubmit = Funcion que se ejecuta en el evento submit
    TENER EN CUENTA QUE LOS COMENTARIOS EN **HTML** SON DISTINTOS EN **JS Y TS**
    COMENTARIOS EN HTML <!-- aqui el comentario -->
    COMENTARIOS EN JS Y TS
    existen 2:
    En linea se usa: // aqui el comentario
    En bloque se usa: /_ aqui el comentario_/

[*] En la ruta src/layouts/MainLayout.vue:
-> Cambiar el nombre "Quasar App" por "SPGCT-APP"
-> Eliminar el bloque div que contiene la version de "Quasar Quasar v"

---

[*] Input Cedula el tipo de input debe ser text, porque hay cedulas que empiezan con 0 y al hacerlo tipo number este input no tomaria en cuenta el 0, se debe crear las reglas que sea solo 10 caracteres y el ingreso debe ser solamente de numeros.

[*] Agregar un formulario al componente DatosGenerales https://quasar.dev/vue-components/form
-> No existe la etiqueta de cierre </form>
-> No existe Boton en el formulario
-> import { QInput } from 'quasar'; Esta importacion es innecesaria, porque es un componente global y no necesita ser importado para este proyecto, se lo puede usar sin importar.

[*] Colocar el Input creado anteriormente dentro del Formulario

[*] Validar el input con la propiedad rules para que solo permita el ingreso de letras, y muestre un error si ingresa caracteres incorrectos ejemplo de caracteres incorrectos (numeros, signos), Leer la documentacion de la propiedad rules de Qinput https://quasar.dev/vue-components/input

[*] Crear una funcion llamada formDatosGeneralesSubmit() dentro de la funcion realizar un console.log() con el valor de la variable nombre que esta en el Stor
-> Aunque esta bien, sin el boton no puedo ver los copnsole.log()

[*] en el componente DatosGenerales crear un input haciendo uso de QImput lo encuentran en la direccion https://quasar.dev/vue-components/input

[*] El v-model de este input tiene que ser la variable ¨nombre¨ que se encuentra en el STORE y no declarar una variable nombre

[*] agregar una etiqueta div y dentro del div colocar variable nombre del store y ver los cambios cuando ingrense letras en los input y ver como cambia el estado de nombre a los caracteres que se ingresa

[*] Eliminar codigo innesario Todo esto es innesario

  <div>
    {{ datosGeneralesStore.getNombre.toString() }}
    {{ datosGeneralesStore.getCedula.toString() }}
    {{ datosGeneralesStore.getEdad.toString() }}
    {{ datosGeneralesStore.getFecha.toString() }}
  </div>

import { ref } from 'vue';

/_const nombre = ref(datosGeneralesStore.getNombre.toString());
const cedula = ref(datosGeneralesStore.getCedula());
const edad = ref(datosGeneralesStore.getEdad());
const fecha = ref(datosGeneralesStore.getFecha());_/

# Quasar App (app-spgct)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

Configuracion previas para construir apk
Configurar variables de entorno del sistema
JAVA_HOME = C:\Program Files\Java\jdk-17

ANDROID_HOME = C:\Users\<Usuario>\AppData\Local\Android\Sdk

NOTA IMPORTANTE: el path de android_home, funciona si se realiozo una instalacion completa de android studio

### Ejecutar el siguiente comando

````bash

```yarn quasar build -m capacitor -T android

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Contruccion Fase 1

Daniela Gualli | gualli.maria@intsuperior.edu.ec | 0992462559
Ismael Llamatumbi | christopher.llamatumbi@intsuperior.edu.ec | 0980993652
Abigail Tutillo | joselin.tutillo@intsuperior.edu.ec | 0959094951
Brayan Jimenez | brayan.jimenez@intsuperior.edu.ec | 0987842124

### Construccion Fase 2

Andres Moya | andres.moya@intsuperior.edu.ec | 0988091107
Jean De la Cruz | jean.delacruz@intsuperior.edu.ec | 0997431311
Lisbeth Esmeralda | lisbeth.esmeralda@intsuperio.edu.ec | 0994846279
Omar Sani | omarxdj4@gmail.com | 0959491061

### Construccion Depuracion y Lanzamiento Fase 3

Omar Sani | omarxdj4@gmail.com | 0959491061
Stalyn Fernandez | stalynfg5@gmail.com | 0968809537
Darwin Campues | darwincampiues2908@gmail.com | 0986265270
Micheal Garcia | mg8462654@gmail.com| 0988493858

### Certifiaciones de Funcionalidad Fase 4

Stalyn Fernandez | stalynfg5@gmail.com | 0968809537
Darwin Campues | darwincampiues2908@gmail.com | 0986265270
Micheal Garcia | mg8462654@gmail.com| 0988493858
````
