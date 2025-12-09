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

## 003 - Análisis de Estructura y Fin de Fase 1
**Fecha:** 2025-12-09 10:05
**Prompt Original:**
> Ahora quiero que realices el análisis que remata la fase 1. Recuerda que vamos a hacer dos suite de tests, y pregunta si tienes alguna duda

**Resumen de la Respuesta/Acción:**
Análisis de estructura backend/frontend realizado. Actualización de planning.md.
---

## 004 - Solicitud de prompt
**Fecha:** 2025-12-09 10:07
**Prompt Original:**
> Me gustaría que me indicaras un prompt en formato markdown (cuidado con los markdown anidados) para solicitarte que inicies la fase 2: tests de frontend.

De cara a tomar decisiones relativas a los archivos específicos de configuracion de jest, quiero que sigas las buenas prácticas para TDD. Cualquier decision que tomes repsecto a la arquitectura o al entorno, incluyela en el archivo AGENTS.md

Recuerda, no quiero que moficiques nada, solo dame el prompt

**Resumen de la Respuesta/Acción:**
Prompt obtenido
---

## 005 - Inicio Fase 2: Tests de Frontend (RED)
**Fecha:** 2025-12-09 10:10
**Prompt Original:**
> Actúa como experto en TDD y desarrollo Frontend con React. Iniciamos la **Fase 2: Tests de Frontend**.
>
> ### 1. Arquitectura y Configuración
> Para asegurar la independencia y escalabilidad del proyecto, tomaremos la decisión de **aislar la configuración de pruebas**.
> - Crea un archivo `jest.config.js` específico dentro del directorio `frontend/`.
> - **AGENTS.md**: Añade una nueva sección "Decisiones de Arquitectura" y registra esta regla: *"Cada subsistema (frontend/backend) mantendrá su propia configuración de testing aislada para evitar acoplamientos."*
>
> ### 2. Ciclo TDD: Estado RED
> El objetivo es validar el componente `AddCandidateForm`.
> 1.  **Configuración**: Asegura que el entorno de test en `frontend/` funciona correctamente.
> 2.  **Test Suite**: Crea el archivo `frontend/src/components/__tests__/AddCandidateForm.test.js`.
> 3.  **Casos de Prueba (RED)**: Implementa los tests iniciales que deben fallar.
>     - Verificar que el formulario renderiza los campos básicos (Nombre, Apellidos, Email).
>     - Verificar que se muestra un error de validación si se intenta enviar el formulario vacío.
>     - Simular la llamada al servicio de creación (mock) y verificar que NO se llama si hay errores de validación.
>
> ### 3. Documentación
> - Registra este prompt en `prompts.md` con el siguiente ID incremental.
> - Actualiza `planning.md` indicando que estamos trabajando en la definición e implementación en Rojo de la Fase 2.
>
> Ejecuta los tests y muéstrame la salida de error para confirmar el estado **RED**.

**Resumen de la Respuesta/Acción:**
Configuración de arquitectura aislada, creación de tests RED para AddCandidateForm.
---
## 006 - Completar Fase 2: GREEN y REFACTOR
**Fecha:** 2025-12-09 10:30
**Prompt Original:**
> Procede a completar la fase GREEN y el refactor para finalizar la fase 2

**Resumen de la Respuesta/Acción:**
Implementación GREEN (labels, validación) y REFACTOR (funciones extraídas). Tests: 6/6 pasando.
---

## 007 - Fase 3: Tests de Backend (RED-GREEN-REFACTOR)
**Fecha:** 2025-12-09 11:00
**Prompt Original:**
> Ejecuta ahora la fase 3, la suite de tests para el backend

**Resumen de la Respuesta/Acción:**
Suite completa backend: 8 tests (validación, persistencia mock, datos complejos). Arquitectura refactorizada con servicio directo Prisma y helpers de mapeo.
---

## 008 - Fase 4: Integración y Revisión Final
**Fecha:** 2025-12-09 11:30
**Prompt Original:**
> Vamos con la fase 4 para terminar este proyecto. Añade la informacion relativa a l aejecucion de tests en el archivo README.md

**Resumen de la Respuesta/Acción:**
README.md actualizado con secciones de testing (EN/ES). Verificación final: Frontend 6/6 ✅, Backend 8/8 ✅. Proyecto completado.
---
