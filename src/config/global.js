export default {
  global: {
    componenteFormativo: 'El riesgo con respecto a SARLAFT',
    descripcionCurso:
      'La gestión de riesgo en Colombia y su aplicación en entidades privadas y públicas es un tema que se viene trabajando desde los años 90; sin embargo, en los últimos tiempos ha tomado no solo  fuerza sino importancia con el Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT). <br/><br/>Todas las organizaciones deben prepararse para su conocimiento y su implementación, más que por cumplir un requisito, es un método de prevención y cuidado ante hechos de tipo delictivo a nivel organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentación de SARLAFT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sectores',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Línea de tiempo de normatividad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lavado de activos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Financiación del terrorismo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'El riesgo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Gafilat. (2020). Estándares internacionales sobre la lucha contra el lavado de activos y el financiamiento del terrorismo y el financiamiento de la proliferación de armas. Gafilat. ',
      link:
        'https://www.gafilat.org/index.php/es/biblioteca-virtual/gafilat/documentos-de-interes-17/publicaciones-web/4013-recomendaciones-metodologia-actdic20-1/file ',
    },
    {
      referencia: 'INFOLAFT (2021). SARLAFT. ',
      link: 'https://www.infolaft.com/?s=sarlaft ',
    },

    {
      referencia:
        'Rojas, D.  y Posada, L. (2021). Conocimiento del cliente: gestión efectiva del riesgo de lavado de activos y financiación del terrorismo en empresas aseguradoras. Universidad del Valle. ',
      link:
        'https://bibliotecadigital.univalle.edu.co/xmlui/bitstream/handle/10893/21092/CB-0605573.pdf?sequence=1&isAllowed=y ',
    },

    {
      referencia:
        'Valbuena, A. (2018). Sistema de administración del riesgo de lavado de activos INCP. ',
      link:
        'https://incp.org.co/sistema-administracion-del-riesgo-lavado-activos/ ',
    },
  ],
  glosario: [
    {
      termino: 'Decreto',
      significado:
        'Es un acto administrativo promulgado por el poder ejecutivo con contenido normativo reglamentario, sin necesidad de ser sometido al órgano legislativo.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'Son los agentes generadores del riesgo de LA/FT. Para efectos del SARLAFT las entidades vigiladas deben tener en cuenta como mínimo los siguientes: clientes/usuarios, productos, canales de distribución y jurisdicciones.',
    },
    {
      termino: 'Financiamiento de delitos',
      significado:
        'Actividad por la cual cualquier persona deliberadamente provee o recolecta fondos o recursos por el medio que fuere, directa o indirectamente, con la intención ilícita de que sean utilizados o a sabiendas que serán utilizados en todo o en parte para cometer un acto o actos delictivos.',
    },
    {
      termino: 'Formularios de inclusión',
      significado:
        'Son los formatos estandarizados que deben llenarse con la información de las contrapartes, al inicio de la relación contractual o comercial con la entidad, cada vez que una transacción lo amerite y cuando se juzgue necesario actualizar datos. Los formularios pueden ser solicitudes para convertirse en socio, cliente de crédito o inversión, aperturas de cuenta, inscripción como proveedor o de empleo, entre otros.',
    },
    {
      termino: 'Formularios de origen y destino de recursos',
      significado:
        'Es una declaración expresa del socio o cliente, indicando que los recursos que moviliza tienen origen lícito o serán usados de forma lícita.',
    },
    {
      termino: 'F/T',
      significado:
        'Actividad por la cual cualquier persona deliberadamente provee o recolecte fondos o recursos por el medio que fuere, directa o indirectamente, con la intención ilícita de que sean utilizados o a sabiendas que serán utilizados, en todo o en parte para cometer un acto o actos de terrorismo, por una organización terrorista o por un terrorista. ',
    },
    {
      termino: 'LA',
      significado:
        'Es el proceso mediante el cual se da apariencia de licitud al dinero y activos obtenidos de fuentes ilícitas, a través de varias formas denominadas tipología. ',
    },
    {
      termino: 'Leyes',
      significado:
        'Son el conjunto de normas jurídicas dictaminadas por un legislador, o sea, por una autoridad competente en la materia. Su función es ordenar, prohibir o permitir algo específico y concreto.',
    },
    {
      termino: 'Operación inusual',
      significado:
        'Es aquella cuya cuantía o características no guardan relación con la actividad económica de los clientes o que por su número, por las cantidades transadas o por sus características particulares se salen de los parámetros de normalidad establecidos.',
    },
    {
      termino: 'Operación sospechosa',
      significado:
        'Es aquella que por su número, cantidad o características no se enmarca dentro de los sistemas y prácticas normales de los negocios, de una industria o de un sector determinado. ',
    },
    {
      termino: 'Producto',
      significado:
        'Son las operaciones legalmente autorizadas que pueden adelantar las entidades vigiladas mediante la celebración de un contrato.',
    },
    {
      termino: 'Resolución',
      significado:
        'Las resoluciones son decisiones, no normativas por parte de una autoridad ya sea política, administrativa o judicial que solventa un conflicto o da pautas a seguir en una materia determinada.',
    },
    {
      termino: 'Riesgo inherente',
      significado:
        'Es el nivel de riesgo propio de la actividad, sin tener en cuenta el efecto de los controles.',
    },
    {
      termino: 'Riesgo legal',
      significado:
        'Es la posibilidad de pérdida en que incurre una entidad al ser sancionada u obligada a indemnizar daños como resultado del incumplimiento de normas o regulaciones y obligaciones contractuales. Surge también como consecuencia de fallas en los contratos y transacciones, derivadas de actuaciones malintencionadas, negligencia o actos involuntarios que afectan la formalización o ejecución de contratos o transacciones.',
    },
    {
      termino: 'Riesgo operativo',
      significado:
        'Es la posibilidad de incurrir en pérdidas por deficiencias, fallas en el talento humano, los procesos, la tecnología, la infraestructura o por la ocurrencia de acontecimientos externos. Esta definición incluye el riesgo legal y reputacional, asociados a tales factores.',
    },
    {
      termino: 'Riesgos asociados al LA/FT',
      significado:
        'Son los riesgos a través de los cuales se materializa el riesgo de LA/FT, estos son: reputacional, legal, operativo y de contagio. ',
    },
    {
      termino: 'Superintendencia Financiera de Colombia',
      significado:
        'Es un organismo técnico adscrito al Ministerio de Hacienda y Crédito Público, con personería jurídica, autonomía administrativa, financiera y patrimonio propio.',
    },
    {
      termino: 'Transferencia',
      significado:
        'Es la transacción efectuada por una persona natural o jurídica denominada ordenante, a través de una entidad autorizada en la respectiva jurisdicción para realizar transferencias nacionales y/o internacionales, mediante movimientos electrónicos o contables, con el fin de que una suma de dinero se ponga a disposición de una persona natural o jurídica denominada beneficiaria, en otra entidad autorizada para realizar este tipo de operaciones. ',
    },
    {
      termino: 'Unidad de Información y Análisis Financiero - UIAF',
      significado:
        'De conformidad con las Leyes 526 de 1999 (modificada por la Ley 1121 de 2006 y 1762 de 2015) y la Ley 1621 de 2013 y con los Decretos 1068 y 1070 de 2015 “la Unidad de Información y Análisis Financiero (UIAF) es un organismo de inteligencia y contrainteligencia del Estado, adscrito al Ministerio de Hacienda y Crédito Público, cuyas funciones son las de intervenir en la economía mediante actividades de inteligencia financiera y económica, con el fin de prevenir y detectar conductas que puedan estar asociadas a los delitos de lavado de activos, financiación del terrorismo, contrabando y/o fraude aduanero”. A esta entidad se hacen reportes de operaciones sospechosas ROS.',
    },
    {
      termino: 'Usuarios',
      significado:
        'Son aquellas personas naturales o jurídicas a las que sin ser clientes la entidad les presta un servicio.',
    },
  ],
  complementario: [
    {
      texto:
        'Grupo Bancolombia.  (2014). ¿Sabes qué es el lavado de activos y cómo prevenirlo? [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=WT5YQ4qV9yY&ab_channel=GrupoBancolombia',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático ',
        centro:
          'Centro de la Industria, la Empresa y los Servicios CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional de Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
