---
description: Instala y configura Prettier para usarlo en tu proyecto
sidebar_position: 1
---

# Cómo configurarlo

Para instalar y ocupar Prettier en tu proyecto, sigue los siguientes pasos:

1. Instala el paquete `prettier` ejecutando en tu terminal:

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

4. En tu `package.json`, dentro de `scripts`, agrega lo siguiente:

   ```json title="package.json"
   "format": "prettier --write ."
   ```

5. Ahora puedes arreglar el formato de todos tus archivos ejecutando lo
   siguiente en tu terminal:

   ```bash npm2yarn
   npm run format
   ```
