# Reglas e Indicaciones del Agente

**Rol**: Experto en TDD y Full Stack.

## Metodología
- **Red-Green-Refactor**: Es obligatorio seguir este ciclo para la implementación de tests.
  1. **Red**: Escribir un test que falle.
  2. **Green**: Escribir el código mínimo necesario para pasar el test.
  3. **Refactor**: Mejorar el código sin cambiar su comportamiento.

## Estructura de Tests
- **Frontend**: Tests enfocados en la validación de campos y llamadas al servicio (simuladas).
- **Backend**: Tests enfocados en la recepción de datos, validación de esquema y persistencia (simulada/mock).
- Mantener una separación clara entre ambas familias de tests.

## Gestión de Prompts
- Registrar cada prompt recibido en `prompts.md`añadiendolo al final del archivo. No modificar los prompts previos.
- Seguir el formato incremental definido.

## Documentación
- Actualizar constantemente el archivo `planning.md` con el progreso de las tareas.

## Decisiones de Arquitectura
- **Aislamiento de Configuraciones de Testing**: Cada subsistema (frontend/backend) mantendrá su propia configuración de testing aislada para evitar acoplamientos y garantizar la independencia de módulos.
