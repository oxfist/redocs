---
title: 1. Introducción a ESLint
description: ¿Qué es ESLint y para qué se ocupa?
sidebar_position: 1
---

# Introducción a ESLint

[ESLint](https://eslint.org/) es una herramienta que analiza código y reporta
posibles bugs o errores y facilita el seguir buenas prácticas.

Esta herramienta es conocida formalmente como un _analizador de código estático_
o simplemente _linter_. Algunas cosas posibles gracias análisis estático de
código posibilita

- código más entendible y limpio
- identificar errores fáciles de corregir

Mediante un archivo de configuración puedes especificar qué reglas de análisis
utilizar en tu código, y así sacarle mejor provecho en tu contexto de
desarrollo.

Aunque es posible configurar ESLint de forma “global” para que aplique las
mismas reglas de análisis a diversos proyectos, lo _más recomendado_ —y más
usado— es definir una configuración específica por proyecto.

:::info

Puedes usar ESLint desde la **terminal** o integrarlo a un **editor de texto**
(uso recomendado).

:::

Abajo un ejemplo de cómo funciona ESLint integrado con VSCode para que entregue
reportes directamente en el código.

![Captura de editor de texto mostrando reportes de errores](./eslint_errors.gif "Análisis estático de código")

Si quieres que ESLint esté configurado en tu entorno de desarrollo como se
muestra arriba, sigue los simples pasos que encontrarás en la siguiente página.
👉
