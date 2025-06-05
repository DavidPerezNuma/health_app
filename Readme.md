# Sistema de Control de Salud para Empleados (Caso de Estudio COVID-19)

## Descripción

Este proyecto es una aplicación de consola desarrollada en JavaScript como solución al caso de estudio `Anexo3.CasoEstudio_CE_27-04-23.pdf`. El sistema está diseñado para ayudar a las empresas a gestionar la información de salud de sus empleados durante una pandemia, como la de COVID-19, permitiendo tomar decisiones informadas sobre la asistencia al trabajo presencial.

La pandemia de COVID-19, causada por el nuevo coronavirus (SARS-CoV-2), generó la necesidad en las empresas de sistematizar la mayor cantidad de datos posibles para operar de manera segura. Este virus afecta principalmente los pulmones y el sistema respiratorio, siendo su contagio muy virulento y con la capacidad de ser transmitido incluso por personas asintomáticas. La Organización Mundial de la Salud (OMS) llegó a decretar la pandemia internacional debido a los elevados factores de mortalidad y la carga en los servicios hospitalarios.

## Contexto del Caso de Estudio

El caso de estudio plantea la necesidad de desarrollar un sistema para gestionar datos en el contexto de la pandemia de COVID-19. Puntos clave del contexto:
* A inicios de diciembre de 2019 se conoció la existencia de un nuevo coronavirus (SARS-CoV-2).
* Este virus causa una enfermedad inflamatoria que afecta mayormente pulmones y sistema respiratorio.
* Existen vacunas para prevenir su contagio.
* El contagio es muy virulento, facilitando su transmisión entre humanos.
* El virus genera diversas patologías, afectando más a personas con comorbilidades (diabetes, hipertensión, problemas renales, del corazón, etc.).
* Personas asintomáticas pueden transmitirlo, lo cual es un agravante.
* Lo anterior causó elevados factores de mortalidad y una carga en los servicios hospitalarios, llevando a la OMS a decretar la pandemia internacional.
* Se establece que las empresas deberán sistematizar la mayor cantidad de datos para operar durante y después de la pandemia.
* Es necesario llevar un control de datos personales de los trabajadores (nombres, dirección, localidad, personas con las que convive).
* Se deben registrar datos de factores clínicos como estado de salud actual, si ha tenido COVID-19 y su nivel de afectación.
* Se debe conocer si el trabajador o algún familiar tiene comorbilidades.
* Es importante registrar a diario cómo se siente el trabajador, si ha tenido contacto con personas con el virus y cuál es su temperatura, para controlar la asistencia al trabajo.

## Objetivos del Proyecto (Según Caso de Estudio)

El desarrollo debe cumplir con los siguientes aspectos técnicos:
* Definición de variables y constantes con sus tipos.
* Inclusión de condicionales.
* Inclusión de ciclos.
* Inclusión de vectores y matrices.

## Funcionalidades Principales

* **Registro de Empleados:** Permite ingresar datos personales (nombre, dirección, localidad, cohabitantes), estado de salud actual, historial de COVID-19 (si lo tuvo y severidad), y comorbilidades (del empleado y/o familiares).
* **Registro de Salud Diario:** Permite a los empleados reportar diariamente cómo se sienten, si han tenido contacto con personas con COVID-19 y su temperatura corporal.
* **Determinación de Elegibilidad para Trabajar:** Basado en los datos diarios y el perfil del empleado, el sistema sugiere si el empleado debe o no asistir al trabajo presencial.
* **Listado de Empleados:** Muestra un resumen de los empleados registrados y su último estado de salud.
* **Visualización de Registros de Salud:** Presenta los registros de salud diarios de un empleado en un formato tabular (conceptualizado como una matriz).

## Tecnologías Utilizadas

* JavaScript (ES6+)
* Node.js (para el entorno de ejecución y sistema de módulos)

## Prerrequisitos

* Node.js instalado en tu sistema. Se recomienda usar un gestor de versiones como NVM (Node Version Manager) para manejar diferentes versiones de Node.js.

## Configuración del Proyecto

1.  **Clonar el repositorio (si aplica) o crear los archivos:**
    Si el proyecto está en un repositorio Git, clónalo. De lo contrario, crea la estructura de archivos y el contenido como se ha definido (puedes usar el script de PowerShell `create_js_project.ps1` proporcionado anteriormente si lo tienes). La estructura de archivos principal es:
    ```
    health_app/
    ├── app.js
    ├── constants.js
    ├── entities.js
    ├── repository.js
    └── services.js
    ```
2.  **Asegurar Node.js:** Verifica que Node.js esté instalado y accesible desde tu terminal.
    ```bash
    node -v
    npm -v
    ```

## Ejecución de la Aplicación

1.  Abre tu terminal o consola.
2.  Navega hasta el directorio raíz del proyecto (donde se encuentra `app.js`, por ejemplo, `health_app/`).
    ```bash
    cd ruta/a/health_app
    ```
3.  Ejecuta la aplicación con Node.js:
    ```bash
    node app.