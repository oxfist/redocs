---
title: 2. Cómo configurar Prettier
description: Instala y configura Prettier para usarlo en tu proyecto
sidebar_position: 2
---

# Cómo configurar Prettier

Para instalar y ocupar Prettier en tu proyecto e integrarlo a VSCode, sigue las
instrucciones en las secciones a continuación.

## Instalación en tu proyecto

1. Instala el paquete `prettier` ejecutando lo siguiente en tu terminal:

   ```bash npm2yarn
   npm install --save-dev prettier
   ```

2. Crea el archivo `.prettierrc.json` y agrega un objeto vacío para usar las
   configuraciones por defecto:

   ```json title=".prettierrc.json"
   {}
   ```

3. Crea el archivo `.prettierignore` y escribe la ruta `node_modules/` dentro
   para que esta carpeta no se incluya en el formateo de código:

   ```rc title=".prettierignore"
   node_modules/
   ```

4. Para ejecutar el formateo desde la terminal, agrega en tu `package.json`,
   dentro de `scripts`, lo siguiente:

   ```json title="package.json"
   "format": "prettier --write ."
   ```

5. Finalmente, ahora puedes arreglar el formato de todos tus archivos ejecutando
   lo siguiente en tu terminal:

   ```bash npm2yarn
   npm run format
   ```

## Integración con VSCode

Sigue los siguientes pasos para que Prettier funcione automáticamente en VSCode:

1. Instala la extensión de Prettier en VSCode:

   ![Captura de pantalla de la extensión de Prettier en VSCode](./prettier_extension.png "Busca e instala la extensión Prettier")

2. Habilita Prettier como el formateador por defecto bajo **Text Editor** en las
   configuraciones de VSCode para asegurarte de usar este programa para el
   formateo de código:

   ![Captura de pantalla de formateador por defecto habilitado](./default_formatter.png "Habilita Prettier como formateador")

3. Activa la opción “Format On Save” bajo **Text Editor > Formatting** para que
   Prettier ajuste el formateo del código cada vez que guardes un archivo:

   ![Captura de pantalla de la opción Format On Save habilitada](./format_on_save.png "Activa la opción Format On Save")

4. Finalmente, activa la opción “Require Config” de la extensión de Prettier
   para que solo se aplique el formateo de código si existe un archivo de
   configuración, ej. `.prettierrc.json`, y así evitar posibles confusiones con
   reglas de formateo:

   ![Captura de pantalla de opción Require Config activada](./require_config.png "Activa la opción Require Config")

Terminando el último paso Prettier debiera formatear automáticamente el código
cada vez que guardes el contenido de un archivo.
