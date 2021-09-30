export default {
  global: {
    componenteFormativo: 'Normatividad en promoción de la donación de sangre',
    descripcionCurso:
      'En el presente componente, el aprendiz podrá identificar la normatividad asociada con el área de promoción de la donación voluntaria y habitual de sangre, incluida la revisión de los lineamientos y boletines técnicos publicados a nivel nacional; por otro lado, el aprendiz también podrá comprender, cómo está constituida la red de sangre en Colombia y cuál es la función que cumple cada uno de los actores que la conforman. De esta manera, contarán con lo necesario a nivel normativo, quienes deseen desempeñar funciones en promoción de la donación de sangre.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      //{
      //  nombreRuta: 'introduccion',
      //  icono: 'fas fa-info',
      //  titulo: 'Introducción',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Decreto 1571 de 1993',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Resolución 0901 de 1996',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Circulares',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.4',
            titulo: 'Lineamientos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Boletines técnicos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Estándares de trabajo para servicios de sangre (OPS, 2020)',
            hash: 't_1_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
      regional: 'Dirección general',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Instituto Nacional de Salud',
      },
      {
        nombre: 'Magda Juliana Rodríguez Rodríguez',
        cargo: 'Experta temática',
        centro: 'Red Nacional Bancos de Sangre y Servicios de Transfusión.',
      },
      {
        nombre: 'Mauricio Hernán Bonilla Contreras',
        cargo: 'Experto temático',
        centro: 'Red Nacional Bancos de Sangre y Servicios de Transfusión.',
      },
      {
        nombre: 'Olga Maritza Berrio Pérez',
        cargo: 'Experta temática',
        centro: 'Red Nacional Bancos de Sangre y Servicios de Transfusión.',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Evaluador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte Organizacional',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'José Jaime Luis Tang Pinzón',
          'Maria Camila Ovalle Ospina',
          'María Natalia Maldonado Delgado',
          'Wilson Andres Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Nacional de Salud. (2015). Circular 003 de 2015. Recomendaciones para afrontar la insuficiencia de glóbulos rojos y plaquetas en la época decembrina y post decembrina: ',
      link: 'https://www.ins.gov.co/BibliotecaDigital/Circular-003-de-2015.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2011). Boletín técnico. Promoción de la donación voluntaria y habitual de sangre como impacto en la seguridad transfusional de 2011.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/promocion-donacion-sangre-como-impacto-en-seguridad-transfusional.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2019). Boletín técnico. Mecanismos de respuesta de la Red Nacional de Bancos de Sangre y Servicios de Transfusión ante situaciones de riesgo de desastre, emergencia y desastre en Colombia de 2019',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/mecanismos-de-respuesta-red-bancos-de-sangre-y-servicios-de-transfusion-ante-situaciones-de-emergencia.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2019). Boletín técnico. Colecta de sangre en puestos móviles.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/colecta-de-sangre-en-puestos-moviles.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2018). Boletín técnico. Estrategias asociadas a promoción de la donación de sangre de 2018. ',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/estrategias-asociadas-a-promocion-de-la-donacion-de-sangre.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2019). Boletín técnico. Notificación de tres casos de infección transmitida por transfusión (ITT) - Virus de Inmunodeficiencia Humana (VIH) de 2019.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/notificacion-casos-infeccion-transmitida-por-transfusion-virus-inmunodeficiencia-humana.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2016). Boletín técnico. Resumen casos de donación coaccionada 2016.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/resumen-casos-donacion-coaccionada-2016.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2006). Circular 001 de 2006. Donación voluntaria y altruista de sangre',
      link: 'https://www.ins.gov.co/BibliotecaDigital/Circular-001-de-2006.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2019). Lineamiento Promoción de la donación de sangre y componentes anatómicos de 2019.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/promocion-donacion-sangre-y-componentes-anatomicos.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2018). Lineamiento Selección de donantes de sangre de 2018. ',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/seleccion-donantes-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Salud (1993). Decreto 1571 de 1993. Por el cual se reglamenta parcialmente el título IX de la Ley 09 de 1979, en cuanto a funcionamiento de establecimientos dedicados a la extracción, procesamiento, conservación y transporte de sangre total o de sus hemoderivados, se crean la red nacional de bancos de sangre y el consejo nacional de bancos de sangre y se dictan otras disposiciones sobre la materia',
      link: 'https://www.ins.gov.co/BibliotecaDigital/Decreto-1571-de-1993.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (1996). Resolución 0901 de 1996. Manual de normas técnicas, administrativas y de procedimientos en bancos de sangre.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/Resolucion-0901-de-1996.pdf',
    },
    {
      referencia:
        'Organización Panamericana de Salud – OPS. (2013). Estándar de trabajo para servicios de sangre. Organización Panamericana de Salud.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Banco de sangre',
      significado:
        'establecimiento o dependencia con licencia sanitaria de funcionamiento para adelantar actividades relacionadas con la obtención, procesamiento y almacenamiento de sangre humana destinada a la transfusión de la sangre total o en componentes separados, a procedimientos de aféresis y a otros procedimientos preventivos, terapéuticos y de investigación. Tiene como uno de sus propósitos asegurar la calidad de la sangre y sus derivados.',
    },
    {
      termino: 'Donante de sangre',
      significado:
        'persona que, previo el cumplimiento de los requisitos, da, sin retribución económica y a título gratuito y para fines preventivos, terapéuticos, de diagnóstico o de investigación, una porción de su sangre en forma voluntaria, libre y consciente.',
    },
    {
      termino: 'Red Nacional de Bancos de Sangre',
      significado:
        'sistema de coordinación técnico, administrativo y asistencial que permiten desarrollar, organizar, supervisar y evaluar, con el propósito de garantizar el suministro suficiente, oportuno y seguro de la sangre y sus hemoderivados en el territorio nacional.',
    },
    {
      termino: 'Hemocomponente',
      significado:
        'parte que se obtiene mediante la separación de una unidad de sangre total, utilizando medios físicos o mecánicos, tales como sedimentación, centrifugación, congelación o filtración.',
    },
    {
      termino: 'Promoción de la donación de sangre',
      significado:
        'acciones de información, sensibilización y educación sobre la donación de sangre y conductas de autocuidado ofrecidas por el personal de los bancos de sangre a la población en general, con el objetivo de generar cultura de donación y cuyo mensaje va enfocado a obtener sangre y hemocomponentes provenientes de personas que tienen un bajo riesgo de transmitir infecciones, además de contar con una provisión de sangre disponible para atender las demandas transfusionales de las diferentes instituciones hospitalarias; así mismo, pretende fortalecer la responsabilidad social en los ciudadanos y las acciones en salud pública, que conlleven a que el sistema transfusional sea eficaz y eficiente.',
    },
    {
      termino: 'Donante voluntario',
      significado:
        'persona que dona sangre o componentes por su propia voluntad y no recibe ningún pago, ya sea en forma de dinero en efectivo o en especie que podría ser considerado un sustituto del dinero. Esto incluiría el tiempo fuera del trabajo que no sea razonablemente necesario para la donación y el viaje. Pequeños suvenires, refrigerios y reembolsos de los gastos directos asociados al viaje/transportación son compatibles con este tipo de donación',
    },
    {
      termino: 'Donante voluntario habitual, repetitiva / de repetición',
      significado:
        'persona que dona sangre o componentes por lo menos 2 veces en los últimos 12 meses, por su propia voluntad y no recibe ningún pago, ya sea en forma de dinero en efectivo o en especie que podría ser considerado un sustituto del dinero.',
    },
    {
      termino: 'Donante coaccionado o por reposición',
      significado:
        'persona que dona sangre o componentes, previo proceso de sensibilización y educación, cuando es requerida por un miembro de su familia o comunidad sin que haya exigencia de por medio para la prestación del servicio.',
    },
  ],
  complementario: [
    {
      texto:
        'Organización Panamericana de la salud (2002). Curso de gestión de calidad para servicios de sangre. OPS.',
      tipo: 'Guía',
      link:
        'downloads/complementario/OPS-Curso-Gestion-Calidad-Sangre-2002.pdf',
    },
    {
      texto:
        'Organización Panamericana de la Salud. (2005). Manual hagamos la diferencia. OPS.',
      tipo: 'Manual',
      link: 'downloads/complementario/Hagamosdiferencia-spa.pdf',
    },
    {
      texto:
        'Organización Mundial de la Salud. (2005). Propuesta para el establecimiento del Día Mundial del Donante de Sangre. OPS.',
      tipo: 'Orden',
      link: 'downloads/complementario/WHA58_13-sp.pdf',
    },
    {
      texto:
        'Organización Panamericana de la Salud. (2006). Guía metodológica para educadores comunitarios. OPS',
      tipo: 'Guía',
      link: 'downloads/complementario/Dadores_de_vida.pdf',
    },
  ],
}
