---
title: 'Simulador ecográfico web'
description: 'Una plataforma web enfocada a la docencia ecográfica y evaluación de los conocimientos.'
tech: ['Node', 'NuxtJS', 'Supabase']
github: https://github.com/SimuFisio
pubDate: 'Jul 17 2025'
heroImage: '../../../assets/ultrazound.webp'
lang: es
---

Una plataforma web diseñada para simular escaneos de ecografías en tiempo real con fines educativos en el ámbito de la fisioterapia. La aplicación permite a los estudiantes explorar e **interactuar de forma visual con simulaciones de ultrasonidos**, así como acceder a un **mapa anatómico de estructuras musculares**, donde cada región puede inspeccionarse e identificarse dinámicamente. Además, el sistema permite a los estudiantes practicar técnicas de ecografía y evaluar sus conocimientos mediante cuestionarios generados automáticamente.

La plataforma integra un **frontend desarrollado con NuxtJS**, que ofrece una interfaz responsive y modular con visualización fluida en tiempo real. El **backend**, desarrollado con **Node.js y Express**, proporciona una RESTful API para autenticación, intercambio de datos y gestión de pruebas. **Supabase (PostgreSQL)** se encarga de la persistencia de datos, el almacenamiento de archivos y la autenticación, alojado en una instancia autogestionada para garantizar un control completo sobre los recursos y la seguridad.

Un componente clave del sistema es el **flujo de procesamiento multimedia impulsado por FFmpeg**, que convierte las grabaciones de ecografías en secuencias de **I-frames (intra-coded frames)** para permitir una navegación precisa y sin latencia dentro del entorno de simulación. Esta técnica permite a los usuarios desplazarse de forma fluida por las secuencias ecográficas sin necesidad de decodificar el vídeo completo, mejorando así la capacidad de respuesta y la interactividad general.

Para mejorar la comprensión anatómica, se superponen **SVG overlays** sobre los fotogramas de ultrasonidos para resaltar estructuras específicas, creados con Inkscape. El modelado del sistema y el diseño de la interfaz se realizaron con Visual Paradigm y Figma, mientras que GitHub se utilizó para el control de versiones y la organización modular del proyecto. El desarrollo siguió metodologías Agile, garantizando un progreso iterativo y una colaboración continua.

Esta solución ofrece una alternativa accesible y rentable al hardware tradicional de ultrasonidos, proporcionando a los estudiantes de fisioterapia un entorno de **aprendizaje inmersivo y dinámico** que conecta el conocimiento teórico con la práctica.
