export interface StudentInfo {
  titulo: string;
  nombreCompleto: string;
  curso: string;
  asignatura: string;
  institucion: string;
  profesor: string;
  fecha: string;
  tituloVideo: string;
  autorVideo: string;
  urlVideo: string;
  youtubeId: string;
}

export interface Concepto {
  numero: number;
  nombre: string;
  definicion: string;
  ejemplo: string;
}

export interface PreguntaRespuesta {
  numero: number;
  pregunta: string;
  respuesta: string;
  puntosClave?: string[];
}

export interface PasoPractico {
  paso: number;
  titulo: string;
  descripcion: string;
  comando?: string;
  nota?: string;
}

export interface TareaData {
  estudiante: StudentInfo;
  introduccion: string;
  conceptos: Concepto[];
  cuestionario: PreguntaRespuesta[];
  aplicacionPractica: {
    titulo: string;
    descripcion: string;
    pasos: PasoPractico[];
  };
  conclusion: string;
  fuentes: {
    titulo: string;
    url: string;
    descripcion: string;
  }[];
}

export const defaultData: TareaData = {
  estudiante: {
    titulo: "Lo que aprendí del video",
    nombreCompleto: "Thais Nuñes",
    curso: "Informática y Desarrollo Web",
    asignatura: "Programación y Bases de Datos",
    institucion: "Colegio / Instituto Técnico",
    profesor: "Profesor del Área",
    fecha: "2026",
    tituloVideo: "Supabase, Tutorial Práctico y Overview (REST API)",
    autorVideo: "Fazt Code",
    urlVideo: "https://www.youtube.com/watch?v=pi33WDrgfpI",
    youtubeId: "pi33WDrgfpI",
  },
  introduccion:
    "En esta página presento lo que aprendí al ver el video sobre Supabase. El video explica cómo utilizar esta plataforma como backend en la nube para crear una base de datos PostgreSQL, administrar tablas desde un panel visual y consultar o guardar información mediante una API REST automática, sin necesidad de programar un servidor completo desde cero.",
  conceptos: [
    {
      numero: 1,
      nombre: "BaaS (Backend as a Service)",
      definicion:
        "Plataforma en la nube que te da la base de datos, la autenticación y las APIs ya listas, para que como desarrollador solo te concentres en la aplicación y no en mantener servidores.",
      ejemplo:
        "En lugar de crear un servidor con Node.js y conectarlo a mano a una base de datos, Supabase te lo da resuelto con unos clics.",
    },
    {
      numero: 2,
      nombre: "Base de Datos Relacional (PostgreSQL)",
      definicion:
        "Motor de base de datos potente y estructurado en tablas con filas y columnas, que permite relacionar datos entre sí de manera ordenada y segura.",
      ejemplo:
        "Crear una tabla de 'tareas' con columnas para título, descripción y estado booleano de si está terminada o no.",
    },
    {
      numero: 3,
      nombre: "API REST Automática",
      definicion:
        "Endpoints generados por la propia plataforma para que tu frontend pueda consultar, insertar, modificar o borrar datos usando peticiones HTTP estándar.",
      ejemplo:
        "Hacer una petición GET a la URL de Supabase para traer la lista de tareas directamente a tu página web.",
    },
    {
      numero: 4,
      nombre: "Row Level Security (RLS)",
      definicion:
        "Reglas de seguridad que controlan qué filas puede ver o editar cada usuario según su cuenta o permisos, protegiendo los datos directamente en la base.",
      ejemplo:
        "Una regla que permite que cada alumno solo pueda ver y modificar sus propias calificaciones o notas.",
    },
    {
      numero: 5,
      nombre: "Claves API (Anon Key y Service Role)",
      definicion:
        "Identificadores que autentican las peticiones a la base de datos: una clave pública para el navegador y una clave secreta para operaciones de administración.",
      ejemplo:
        "Usar la clave anon pública en el código del frontend para que los usuarios puedan interactuar respetando las reglas de seguridad RLS.",
    },
  ],
  cuestionario: [
    {
      numero: 1,
      pregunta: "¿Cuál es el tema principal del video? Explica de qué trata.",
      respuesta:
        "El tema principal es cómo funciona Supabase como backend en la nube de código abierto. El video muestra cómo crear un proyecto, diseñar tablas en PostgreSQL y conectar una aplicación web para leer y escribir datos a través de su API REST.",
      puntosClave: [
        "Introducción a Supabase como alternativa abierta a Firebase",
        "Manejo de base de datos PostgreSQL en la nube",
        "Conexión y consumo mediante API REST",
      ],
    },
    {
      numero: 2,
      pregunta: "¿Qué problema o necesidad tecnológica se aborda?",
      respuesta:
        "Aborda la necesidad de tener un backend rápido sin tener que configurar servidores complejos, instalar bases de datos en la máquina local o escribir cientos de líneas de código repetitivo solo para conectar el frontend con la base de datos.",
      puntosClave: [
        "Ahorro de tiempo en la configuración de servidores",
        "Evitar crear endpoints repetitivos para cada tabla",
        "Facilidad para proyectos que necesitan persistencia de datos inmediata",
      ],
    },
    {
      numero: 3,
      pregunta: "¿Cuáles son los cinco conceptos más importantes? Define cada uno.",
      respuesta:
        "Son: 1) BaaS (backend listo para usar en la nube). 2) PostgreSQL (base de datos relacional robusta). 3) API REST (interfaz para comunicar la web con los datos). 4) Row Level Security (seguridad por filas para restringir el acceso). 5) API Keys (claves para autorizar las conexiones).",
      puntosClave: [
        "Backend as a Service (BaaS)",
        "PostgreSQL relacional",
        "API REST autogenerada",
        "Seguridad a nivel de fila (RLS)",
        "Credenciales y claves de acceso",
      ],
    },
    {
      numero: 4,
      pregunta: "¿Qué herramientas, programas o tecnologías se mencionan y para qué sirven?",
      respuesta:
        "Se mencionan: Supabase (plataforma en la nube), PostgreSQL (el motor de datos), el navegador web (para entrar al panel de administración), Postman o Thunder Client (para probar las peticiones HTTP a la API), y un editor de código como Visual Studio Code con JavaScript para consumir los datos.",
      puntosClave: [
        "Supabase (panel y base en la nube)",
        "PostgreSQL (almacenamiento de datos)",
        "Cliente de peticiones HTTP (pruebas de API)",
        "Editor de código (desarrollo web)",
      ],
    },
    {
      numero: 5,
      pregunta: "¿Qué procedimientos o pasos se explican? Preséntalos en orden.",
      respuesta:
        "El orden explicado es: 1° Crear una cuenta y un nuevo proyecto en Supabase. 2° Elegir nombre de proyecto y contraseña de la base. 3° Ir al Table Editor y crear una nueva tabla con sus columnas y tipos de datos. 4° Obtener la URL del proyecto y la anon key. 5° Probar las peticiones GET y POST a la API. 6° Configurar las políticas de seguridad RLS para controlar el acceso.",
      puntosClave: [
        "1. Creación del proyecto en la nube",
        "2. Definición de tablas y columnas",
        "3. Obtención de URL y claves de conexión",
        "4. Peticiones de lectura y escritura",
        "5. Ajuste de seguridad con políticas RLS",
      ],
    },
    {
      numero: 6,
      pregunta: "¿Qué ejemplos prácticos aparecen? Explica uno detalladamente.",
      respuesta:
        "Aparece el ejemplo de una tabla de tareas (todos). En el video crean la tabla con columnas como 'id', 'title' y 'is_complete', agregan varias tareas desde el panel visual, y luego muestran cómo hacer una petición para obtener todas las tareas en formato JSON y cómo insertar una nueva tarea enviando los datos.",
      puntosClave: [
        "Creación de tabla de tareas con columnas id, title y is_complete",
        "Carga visual de registros iniciales",
        "Consulta de datos en formato JSON desde el navegador/cliente",
      ],
    },
    {
      numero: 7,
      pregunta: "¿Qué conocimientos previos son necesarios para comprender lo explicado?",
      respuesta:
        "Tener nociones básicas de qué es una base de datos (tablas, filas, columnas), entender qué es una petición HTTP (verbos GET, POST, DELETE) y saber un poco de JavaScript o cómo funcionan las páginas web al consultar datos externos.",
      puntosClave: [
        "Conceptos básicos de bases de datos relacionales",
        "Peticiones HTTP básicas (GET, POST)",
        "Estructura básica de datos en formato JSON",
      ],
    },
    {
      numero: 8,
      pregunta: "¿Qué ventajas o beneficios ofrece la tecnología o procedimiento?",
      respuesta:
        "Permite desarrollar proyectos mucho más rápido, tienes la potencia de PostgreSQL sin tener que instalarlo en tu PC, las copias de seguridad y el hosting están resueltos, y la plataforma ofrece un plan gratuito excelente para estudiantes y proyectos de práctica.",
      puntosClave: [
        "Desarrollo ágil sin configurar servidores",
        "Uso de PostgreSQL real y confiable",
        "Plan gratuito accesible para estudiantes",
      ],
    },
    {
      numero: 9,
      pregunta: "¿Qué dificultades, errores o precauciones deben considerarse?",
      respuesta:
        "La principal precaución es la seguridad: si dejas la tabla pública sin configurar RLS, cualquiera con la clave anónima podría borrar o modificar registros. También hay que cuidar la contraseña maestra de la base de datos y no subir la clave 'service_role' al código público del frontend.",
      puntosClave: [
        "Activar siempre Row Level Security (RLS)",
        "No exponer la clave secreta service_role en el navegador",
        "Definir bien los tipos de datos en cada columna",
      ],
    },
    {
      numero: 10,
      pregunta: "¿Cómo aplicarías lo aprendido en un proyecto informático real?",
      respuesta:
        "Lo aplicaría para crear una aplicación web escolar o un sistema de gestión de tareas donde los usuarios puedan registrarse, guardar sus notas o pendientes y ver sus datos actualizados en tiempo real desde su computadora o celular.",
      puntosClave: [
        "Aplicación web de gestión o registro de datos",
        "Conexión directa entre el frontend y la base de datos",
        "Inicio de sesión seguro para cada estudiante o usuario",
      ],
    },
    {
      numero: 11,
      pregunta: "¿Qué parte del video consideras más importante y por qué?",
      respuesta:
        "La parte donde explica cómo funciona la API REST automática a partir de las tablas creadas. Me parece lo más importante porque te muestra que con solo diseñar la base de datos ya tienes listos los enlaces para consultar y guardar información sin escribir código de backend.",
      puntosClave: [
        "Generación automática de endpoints para cada tabla",
        "Eliminación del trabajo repetitivo en el servidor",
        "Facilidad para consumir datos desde cualquier lenguaje",
      ],
    },
    {
      numero: 12,
      pregunta: "¿Qué conocimientos nuevos adquiriste y cómo los explicarías a otra persona?",
      respuesta:
        "Aprendí qué es un BaaS y cómo Supabase aprovecha PostgreSQL. Se lo explicaría a un amigo diciendo que es como tener una hoja de cálculo súper avanzada en internet que viene con cables automáticos listos para que tu página web lea y escriba datos sin pedirte que construyas un servidor.",
      puntosClave: [
        "Comprensión de BaaS como base lista en la nube",
        "Metáfora de base de datos con conectores automáticos",
        "Capacidad de crear proyectos con base de datos real",
      ],
    },
  ],
  aplicacionPractica: {
    titulo: "Creación de una Base de Datos y Consulta vía REST API",
    descripcion:
      "A continuación se describe el procedimiento paso a paso para crear un proyecto en Supabase, definir una tabla de datos y consumirla desde una aplicación web:",
    pasos: [
      {
        paso: 1,
        titulo: "Creación del proyecto en Supabase",
        descripcion:
          "Se accede al panel de Supabase con una cuenta, se hace clic en 'New Project', se define un nombre (por ejemplo, 'proyecto-escolar') y una contraseña segura para la base de datos.",
        nota: "El proyecto se provisiona automáticamente en la nube en pocos segundos.",
      },
      {
        paso: 2,
        titulo: "Diseño de la tabla en el Table Editor",
        descripcion:
          "En el menú lateral se ingresa a 'Table Editor' y se presiona 'Create a new table'. Se define el nombre 'tareas' y se agregan las columnas correspondientes: id (int8 primario), title (text) y is_complete (boolean).",
        nota: "Cada columna debe tener asignado su tipo de dato correcto.",
      },
      {
        paso: 3,
        titulo: "Carga de registros de prueba",
        descripcion:
          "Directamente desde la interfaz web se pueden insertar filas para tener datos iniciales y verificar su correcta visualización en la tabla.",
      },
      {
        paso: 4,
        titulo: "Obtención de la URL y la clave de acceso",
        descripcion:
          "En los ajustes del proyecto ('Project Settings' > 'API'), se copian la URL del proyecto y la 'anon public key' para usarlas en las peticiones del frontend.",
        nota: "La clave pública permite consultas respetando las políticas de seguridad.",
      },
      {
        paso: 5,
        titulo: "Configuración de seguridad (RLS)",
        descripcion:
          "En 'Authentication' > 'Policies', se habilitan las políticas de Row Level Security para permitir la lectura (SELECT) o restringir la inserción y edición a usuarios autorizados.",
        nota: "Garantiza que la base de datos no quede expuesta a modificaciones indebidas.",
      },
    ],
  },
  conclusion:
    "El video me permitió entender de manera muy clara cómo funcionan las herramientas modernas de backend en la nube. Supabase facilita enormemente la creación de proyectos reales porque elimina la barrera de tener que administrar servidores por cuenta propia. Es una alternativa práctica y potente que sin duda aplicaré en futuros trabajos de programación y desarrollo web.",
  fuentes: [
    {
      titulo: "Video: Supabase, Tutorial Práctico y Overview (REST API)",
      url: "https://www.youtube.com/watch?v=pi33WDrgfpI",
      descripcion: "Video tutorial observado y analizado para la realización de este trabajo práctico.",
    },
    {
      titulo: "Documentación Oficial de Supabase",
      url: "https://supabase.com/docs",
      descripcion: "Guía oficial de referencia técnica sobre base de datos PostgreSQL, APIs y seguridad.",
    },
  ],
};
