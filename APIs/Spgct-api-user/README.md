# ApiUsuarios
Api de Logueo Basica con C#

Esta api es creada con C# y el framewok de .Net y swagger para el registro 
de Usuarios dentro de MongoDB


## Autor

```
/////////////////////////////////////////////////////////

   ((())))     ||||    ||||      /|||\       (LL\\\\\\
  ((((())))    ||| |||| |||     ///  \\\     |||    )))
 (((      ))   |||  ||  |||    |||\\\\|||    |||\\\\\/
  ((((())))    |||      |||   |||      |||   |||   \\\
   (((()))     |||      |||  |||        |||  |||     \\

/////////////////////////////////////////////////////////
```

**Nombre:** Omar Sani

**LinkedIn:** [Omar Sani](https://www.linkedin.com/in/omar-sani-b9733a2b9/)

# API Funcional protegido con JWT

## Descripción
En el controlador `AutenticationControllers.cs`, se encuentra implementada la funcionalidad de generación de tokens JWT. Sin embargo, al probar la autenticación en Swagger:

- Aparece el candado de autenticación JWT.
- **Problema:** El sistema valida los tokens generados correctamente.


2. **Pasos recomendados:**
   - Verificar las opciones de validación del token, como:
     - Clave secreta.
     - Algoritmo de firma.
     - Tiempo de expiración.
   - Configurar correctamente el esquema de autenticación JWT en `program.cs`.


3. **Prueba final:**
   - Regenerar un token JWT.
   - Probar nuevamente en Swagger.

---

Si necesitas más ayuda para implementar o ajustar este código, ¡hazmelo saber! 😊
