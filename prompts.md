# REGISTRO DE PROMPTS UTILIZADOS
**Autor**: Pedro Cortés
**Proyecto**: TDD - Inserción de Candidatos
**Descripción**: Bitácora de prompts para trazabilidad del proyecto.
---

## 001 - Solicitud de prompt
**Fecha:** 2025-12-09 10:00
**Prompt Original:**
> Quiero que prepares un prompt para establecer todo el entorno de la nueva tarea. Naturalmente, incluye todas las buenas practicas en la generacion de prompting y ten cuidado con los markdown anidados.

En este caso, crearemos una suite de test unitarios en jest para la funcionalidad de insertar candidatos en la base de datos. Quiero que la set de suites siga el patron red-green-refactor.

Tendremos dos familias principales de tests, recepcion de los datos del formulario (frontend) y guardado en la base de datos (backend).

Quiero que planifiques por fases el desarrollo de esta tarea, almacenando todo en un archivo planning.md. La idea es que pueda referirme a este planning para ir documentando el proceso, así como utilizarlo como contexto en caso de que sea necesario.

Antes de realizar código, el primer paso es generar un archivo AGENTS.md que registre todas las reglas e indicaciones que vaya dandote. 

Incluye que queremos registrar los prompts en un archivo llamado prompts.md en la raiz del proyecto. En caso de no existir, que lo cree y que incluya el encabezado inciial estandar:

  ```markdown
  # REGISTRO DE PROMPTS UTILIZADOS
  **Autor**: [Usuario]
  **Proyecto**: TDD
  **Descripción**: Bitácora de prompts para trazabilidad del proyecto.
  ---
  ```

En caso de que exista, debe leer la ultima entrada para determinar el siguiente ID. Este es el snippet:

```markdown
## [ID-INCREMENTAL] - [Título Breve]
**Fecha:** YYYY-MM-DD HH:MM
**Prompt Original:**
> [Contenido del prompt completo. IMPORTANTE, no resumir el contenido del prompt original.]

**Resumen de la Respuesta/Acción:**
[Breve resumen de la solución entregada]
---
```

Es importante que el resumen de la respuesta sea breve.

Recuerda, solo quiero el prompt bien definido para proporcionartelo.

En caso de que tengas alguna duda, hazme las preguntas necesarias


**Resumen de la Respuesta/Acción:**
Optención de prompt para proporcionar a Github Copilot

---

## 002 - Configuración Inicial del Entorno
**Fecha:** 2025-12-09 10:00
**Prompt Original:**
> Actúa como un experto en desarrollo de software Full Stack y metodologías ágiles, especializado en TDD (Test Driven Development) con Jest.
>
> Tu objetivo principal es configurar el entorno y planificar el desarrollo de una nueva funcionalidad: **Inserción de candidatos en la base de datos**.
>
> Debes seguir estrictamente el ciclo **Red-Green-Refactor** para la implementación de los tests.
>
> ### 1. Configuración Inicial y Reglas del Agente (`AGENTS.md`)
>
> Antes de escribir cualquier código funcional o de test, crea un archivo llamado `AGENTS.md` en la raíz del proyecto. Este archivo servirá como "memoria" de nuestras reglas de trabajo. Debe contener:
>
> - **Rol**: Experto en TDD y Full Stack.
> - **Metodología**: Red-Green-Refactor obligatorio.
> - **Estructura de Tests**: Separación clara entre Frontend (validación/envío) y Backend (persistencia).
> - **Gestión de Prompts**: Instrucciones para el registro de prompts (ver punto 3).
> - **Documentación**: Actualización constante del `planning.md`.
>
> ### 2. Planificación del Desarrollo (`planning.md`)
>
> Crea un archivo `planning.md` en la raíz. Desglosa la tarea en fases claras y ejecutables. La estructura debe ser similar a esta:
>
> - **Fase 1: Configuración y Contexto**: Creación de archivos de documentación (`AGENTS.md`, `prompts.md`) y análisis de la estructura actual.
> - **Fase 2: Tests de Frontend (Formulario)**:
>     - Definición de casos de prueba (validación de campos, llamada al servicio).
>     - Implementación en Rojo (Red).
>     - Implementación mínima en Verde (Green).
>     - Refactorización (Refactor).
> - **Fase 3: Tests de Backend (Base de Datos)**:
>     - Definición de casos de prueba (recepción de datos, validación de esquema, inserción en DB simulada/mock).
>     - Implementación en Rojo (Red).
>     - Implementación mínima en Verde (Green).
>     - Refactorización (Refactor).
> - **Fase 4: Integración y Revisión**: Verificación final de ambas suites.
>
> Este archivo servirá para llevar el estado del proyecto. Marca las tareas como `[ ]` (pendientes) o `[x]` (completadas).
>
> ### 3. Sistema de Registro de Prompts (`prompts.md`)
>
> Implementa un mecanismo para registrar cada prompt que te envíe en un archivo `prompts.md` en la raíz.
>
> **Reglas de `prompts.md`:**
> 1.  **Verificación**: Si el archivo no existe, créalo con este encabezado:
>     ```markdown
>     # REGISTRO DE PROMPTS UTILIZADOS
>     **Autor**: Pedro Cortés
>     **Proyecto**: TDD - Inserción de Candidatos
>     **Descripción**: Bitácora de prompts para trazabilidad del proyecto.
>     ---
>     ```
> 2.  **Registro Incremental**: Si ya existe, lee la última entrada para determinar el siguiente ID numérico.
> 3.  **Formato de Entrada**: Cada nueva interacción debe añadirse al final del archivo siguiendo este formato exacto:
>     ```markdown
>     ## [ID-INCREMENTAL] - [Título Breve Descriptivo]
>     **Fecha:** YYYY-MM-DD HH:MM
>     **Prompt Original:**
>     > [Aquí copiarás el contenido íntegro del prompt que te he enviado. NO lo resumas.]
>
>     **Resumen de la Respuesta/Acción:**
>     [Un resumen muy breve (1-2 líneas) de la solución o acción que tomaste]
>     ---
>     ```
>
> ### Instrucciones de Ejecución Inmediata
>
> Para comenzar, por favor realiza **SOLO** las siguientes acciones en este primer paso:
> 1.  Crea el archivo `AGENTS.md` con las reglas descritas.
> 2.  Crea el archivo `planning.md` con la estructura de fases detallada.
> 3.  Verifica/Crea el archivo `prompts.md` y registra este primer prompt (ID 001) siguiendo

**Resumen de la Respuesta/Acción:**
Creación de archivos AGENTS.md, planning.md y prompts.md con la configuración inicial solicitada.
---
