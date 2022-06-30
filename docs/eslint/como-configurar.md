---
title: 2. Cómo configurar ESLint
description: Instala y configura ESLint para usarlo en tu proyecto
sidebar_position: 2
---

# Cómo configurar ESLint

Para instalar y ocupar ESLint en tu proyecto y luego integrarlo a VSCode, puedes
seguir las instrucciones en las secciones a continuación.

## Instalación en tu proyecto

1. Instala el paquete `eslint` ejecutando lo siguiente en tu terminal:

   ```bash npm2yarn
   npm install --save-dev eslint
   ```

2. Si tu proyecto _ya tiene un archivo de configuración_, ej. `.eslintrc.js`,
   puedes saltarte al paso 4.

   Crea el archivo `.eslintrc.js` ejecutando el siguiente comando:

   <Tabs>
   <TabItem value="npm">

   ```bash
   npm init @eslint/config
   ```

   </TabItem>
   <TabItem value="Yarn">

   ```bash
   yarn create @eslint/config
   ```

   </TabItem>
   </Tabs>

3. En el tutorial interactivo que saldrá en tu terminal puedes indicar las
   características de tu proyecto. A continuación algunas sugerencias para este
   tutorial:

   - Cuando te pregunte por qué uso quieres para ESLint, selecciona la opción
     **“To check syntax, find problems, and enforce code style”** para así
     obtener más ayudas:

     ![Captura de tutorial interactivo de ESLint en la terminal](./eslint_init_config_style.png "Selecciona la opción que incluye sintaxis, problemas y estilo de código")

   - Selecciona la opción de módulos de JavaScript (import/export) a menos que
     tu proyecto importe módulos usando `require`

   - Cuando te pregunte por _framework_, selecciona la opción **“None of
     these”**, a menos que estés usando React o Vue

   - Cuando te pregunte por una guía de estilos, selecciona la opción de seguir
     una guía y puedes simplemente seleccionar **“Airbnb”**. Aunque también
     existen otras, Airbnb es una de las más usadas

     ![Captura de tutorial interactivo de ESLint en la terminal eligiendo guía de estilos](./eslint_style_guide.png "Selecciona las opciones para seguir la guía de estilos de Airbnb")

   - Cuando te pregunte por instalar dependencias adicionales, selecciona la
     opción para instalarlas inmediatamente

4. Crea el archivo `.eslintignore`, si aún no existe, y agrega lo siguiente para
   que estas carpetas estén excluidas del análisis de código:

   ```rc title=".eslintignore"
   node_modules/
   dist/
   build/
   ```

5. Ya teniendo lista la configuración de ESLint, puedes agregar lo siguiente en
   tu `package.json`, dentro de `scripts`, para ejecutar el análisis de código
   desde la terminal:

   ```json title="package.json"
   {
      ...
      "scripts": {
         ...
         "lint": "eslint ."
      }
      ...
   }
   ```

6. Finalmente, ahora puedes usar el linter para hacer el análisis de todo tu
   proyecto ejecutando lo siguiente en tu terminal:

   <Tabs>
   <TabItem value="npm">

   ```bash
   npm run lint
   ```

   </TabItem>
   <TabItem value="Yarn">

   ```bash
   yarn lint
   ```

   </TabItem>
   </Tabs>

## Integración con Prettier

Si instalas ESLint y Prettier en el mismo proyecto, es probable que tengas
algunas colisiones entre errores de ESLint y el formateo de Prettier.

La integración con Prettier consiste en instalar dos nuevas dependencias, (1) un
paquete para que el formateo no colisione con ESLint y (2) un paquete para
mostrar los errores de formateo en los reportes de ESLint.

Para hacer la integración puede seguir los siguientes pasos:

1. Instala el paquete `eslint-config-prettier` para desactivar las reglas de
   ESLint que colisionan con el formateo de Prettier

   ```bash npm2yarn
   npm install --save-dev eslint-config-prettier
   ```

2. Instala el paquete `eslint-plugin-prettier` para que los errores de formateo
   de Prettier salgan en los reportes de ESLint:

   ```bash npm2yarn
   npm install --save-dev eslint-config-prettier
   ```

3. Actualiza tu `.eslintrc.json` con lo siguiente.

   Para incorporar las configuraciones que trae `eslint-config-prettier` agrega
   `"prettier"` en `extends`.

   Para registrar los errores de Prettier como errores de ESLint agrega
   `"prettier"` en `plugins` y especifica el tipo de reporte como `"error"`:

   ```js title=".eslintrc.js"
   module.exports = {
     // Si ya extiendes otras configuraciones, asegúrate que "prettier" esté al final
     extends: ["prettier"],

     // Si ya tienes otros plugins, asegúrate que "prettier" esté al final
     plugins: ["prettier"],
     rules: {
       "prettier/prettier": ["error"],
     },
   };
   ```

Terminando estos pasos ya tendrás ESLint y Prettier funcionando bien en
conjunto. 🚀

## Integración con VSCode

En construcción... 🛠
