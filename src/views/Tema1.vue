<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Fundamentación de SARLAFT
    
    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/banner-tema1.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade") El Sistema de administración del riesgos de lavado de activos y de financiación del terrorismo –<b>SARLAFT</b> se creó mediante la circular 22 de 2007, que fue modificada de la circular básica jurídica de la antigua Superintendencia Bancaria– hoy conocida como Superintendencia Financiera, la cual en el año 2008 se actualizó y se mejoró, ahora se conoce como Sistema integral para la prevención del lavado de activos (SIPLA) y así se nació el nuevo sistema llamado <b>SARLAFT</b>, como se muestra la siguiente figura.      

    .row.justify-content-end.mb-4
      .col-md-5(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 1.</b> SARLAFT
        figure
          img(src='@/assets/curso/tema1-img1.svg', alt='SARLAFT')  
      .col-md-6
        .bg-secundario-2.border-bottom-verde.p-4.px-md-5(data-aos="fade") 
          p Este sistema permite a las entidades prevenir los riesgos que pueden sufrir por la propensión de ser utilizadas directamente por:
          ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
            li.mb-0
              i.fas.fa-square
              | Los accionistas.
            li.mb-0 
              i.fas.fa-square
              | Administradores.  
            li.mb-0 
              i.fas.fa-square
              | Funcionarios de las organizaciones.    
    
    p.mb-4(data-aos="fade") A continuación, se presentará un video que hará una breve explicación sobre SARLAFT.

    .row.justify-content-center.mb-4
      .col-md-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/tema1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 ¿Qué es SARLAFT?
                  p.mb-0.text-small El presente video explica brevemente la definición de SARLAFT, beneficios e implementación en entidades financieras.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=Z2-NcLdi7XY&ab_channel=SuperintendenciadelaEconom%C3%ADaSolidaria')" target="_blank")
                    span Enlace
                    i.fas.fa-link 

    p(data-aos="fade") Este sistema se encuentra compuesto por etapas y elementos necesarios para que el proceso de implementación se realice de la manera más adecuada y siguiendo la normativa nacional. 

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1  Etapas

    p.mb-4(data-aos="fade") En la Superintendencia Financiera de Colombia se establece que para poder llevar a cabo la implementación en las entidades de este sistema se debe cumplir con cuatro etapas que son: 

    .row(data-aos="fade-down")
      .col-md-3.mb-3
        .block
          .block--img.block1
          .block--text
            h4 Identificar el riesgo
            p Se debe identificar todos los riesgos que posiblemente estén implicados con el lavado de activos y la financiación del terrorismo.
      .col-md-3.mb-3
        .block(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .block--img.block2
          .block--text
            h4 Medición y/o impacto del riesgo
            p Todas las organizaciones que disponen o deseen disponer de un SARLAFT deben medir la probabilidad de riesgo que puede tener la entidad y que puede generar.
      .col-md-3.mb-3
        .block
          .block--img.block3
          .block--text
            h4 Control de riesgo
            p Se deben establecer ciertas medidas para controlar los riesgos que sean identificados.
      .col-md-3
        .block
          .block--img.block4
          .block--text
            h4 Monitoreo del riesgo
            p Se debe implementar un seguimiento a las medidas implementadas para medir el riesgo, y así estar alerta a los sucesos que sean poco inusuales. 

    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2  Elementos

    p.mb-4(data-aos="fade") Para que este sistema funcione y sea constituido como tal se debe implementar ocho elementos primordiales, estos componentes son los siguientes: 
    
    AcordeonB(tipo="a" clase-tarjeta="tarjeta color-secundario" data-aos="fade-down")
      .row.align-items-center(titulo="Políticas")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord1.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Estas nacen de objetivos claros y aplicables.
      .row.align-items-center(titulo="Procedimientos")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord2.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Es la forma de ejecutar un determinado elemento o etapa.    
      .row.align-items-center(titulo="Documentación")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord3.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Son los registros que muestran el efectivo cumplimiento y la disponibilidad de la información.
      .row.align-items-center(titulo="Estructura organizacional")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord4.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Es un esquema jerarquizado. 
      .row.align-items-center(titulo="Órganos de control")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord5.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Para esto se requiere de responsables que hagan seguimiento y evaluación.  
      .row.align-items-center(titulo="Infraestructura tecnológica")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord6.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Es importante disponer de la tecnología y herramientas necesarias y acordes a la realidad de la empresa.
      .row.align-items-center(titulo="Divulgación de información")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord7.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Son los  canales de comunicación, tanto internos como externos deben ser efectivos y eficientes.
      .row.align-items-center(titulo="Capacitación")
        .col-md-2
          figure
            img.px-md-4(src='@/assets/curso/tema1-2-acord8.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Al final se requiere la elaboración y diseño de un plan formativo sobre SARLAFT .

    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3  Sectores

    p.mb-5(data-aos="fade") Según la Guía de Normatividad ALA/CFT de la Unidad de Información y Análisis Financiero – UIAF estos son los sectores donde la implementación SARLAFT aplica:  

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico1.svg', alt='Texto que describa la imagen')
      .col-md-7.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Sector vigilado por la Superintendencia Financiera de Colombia.   

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p Para la Superintendencia financiera de Colombia SFC existen ciertas normas, que permiten regular el cumplimiento de SARLAFT, a continuación, algunas de estas:
        a.anexo.mb-4.mb-lg-3(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1348" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Decreto 663 de 1993.</b> Artículos 102 a 107 del Estatuto Orgánico del Sistema Financiero – Decreto 663 de 1993.
        a.anexo.mb-4.mb-lg-3(href="https://www.superfinanciera.gov.co/inicio/normativa/normativa-general/circular-basica-juridica-ce----10083443" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Circular Básica Jurídica de la Superintendencia Financiera.</b> Parte I, Título IV, Capítulo IV, Circular Básica Jurídica de la Superintendencia Financiera.    
      .col-md-6(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/tema1-3-img1.png', alt='Texto que describa la imagen') 

    p.mb-4(data-aos="fade") Adicionalmente, a la normativa anterior a tener en cuenta es importante el conocimiento de la realización de reportes a la UIAF, mediante el SIREL y su periodicidad. 

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-3-img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La 
              strong UIAF 
              | es la Unidad de Información y Análisis Financiero, que tiene como función disponer para los usuarios externos e internos la aplicación sobre la Web llamada SIREL Sistema de Reporte en Línea, el cual permite que las entidades encargadas de realizar reportes carguen la información, teniendo en cuenta la obligación que tienen según normativa para cada sector. Estos reportes deben hacerse de manera oportuna, eficiente y segura, de igual manera, 
              strong SIREL 
              | también facilita la consulta de los certificados de cargue en cualquier momento que se requiera. 

    p.mb-4(data-aos="fade") A continuación, se visualizan los tipos de reportes que se deben realizar a la UIAF, mediante la aplicación SIREL, como se muestra en la siguiente tabla.

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 1.</b> Tipo de reportes para el sector vigilado por la SFC.
    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota. Tomado de la Unidad de Información y Análisis Financiero. 
          strong https://www.uiaf.gov.co/sala_prensa/publicaciones/guia_normatividad_ala_cft
        thead
          tr
            th Reportes
            th Periodicidad
            th.column-3 Enviado a
        tbody
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Reporte de operaciones sospechosas
            td.text-center 
              strong De forma inmediata
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Reporte de ausencia de operaciones sospechosas
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF   
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Reporte de transacciones en efectivo
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF  
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Reporte de clientes exonerados del reporte de transacciones en efectivo
            td.text-center 
              strong Trimestral
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Reporte sobre operaciones de transferencias, remesa, compra y venta de divisas
            td.text-center
              strong Mensual
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Reporte de información sobre transacciones realizadas en Colombia con tarjetas de crédito o débito expedidas en el exterior 
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Reporte sobre productos ofrecidos por las entidades vigiladas
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 8
                  | Reporte de almacenes generales de depósito a otras autoridades
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 9
                  | Reporte de patrimonios autónomos administrados por entidades vigiladas
            td.text-center 
              strong 3 días hábiles siguientes a la constitución de un patrimonio autónomo
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 10
                  | Reporte de información sobre campañas políticas y partidos políticos
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF                        

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico2.svg', alt='Texto que describa la imagen')
      .col-md-11.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Sector vigilado por el Ministerio de Tecnología de la Información y las Comunicaciones – MinTIC   

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p Para este sector se aplican las siguientes normativas, expedidas por el MinTIC:
        a.anexo.mb-4.mb-lg-3(href="https://normograma.mintic.gov.co/mintic/docs/resolucion_mintic_2564_2016.htm" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Resolución No. 0002564 de diciembre de 2016.</b> Resolución No. 0002564 de diciembre de 2016 del MinTIC.
        a.anexo.mb-4.mb-lg-3(href="https://www.uiaf.gov.co/caracterizacion_usuarios/perfiles/reportantes/ministerio_tecnologias_informacion_29352/28717" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Resolución No. 0002679 de diciembre de 2016.</b> Resolución No. 0002679 de diciembre de 2016 del MinTIC.
      .col-md-6(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/tema1-3-img3.png', alt='Texto que describa la imagen') 

    p(data-aos="fade") Estas normas las deben aplicar los operadores de servicios postales de pago y los operadores de postal oficial.

    p.mb-4(data-aos="fade") Los tipos de reportes que deben realizarse a la UAIF se muestran en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
      .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 2.</b> Tipos de reportes
      .col-md-10.tarjeta.bg-secundario-2.p-5
        .row.justify-content-center  
          .col-md-7
            BotonesB


    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico3.svg', alt='Texto que describa la imagen')
      .col-md-11.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Sector vigilado por la Superintendencia de la Economía Solidaria

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p Este sector los regula la norma de la circular básica jurídica de la Superintendencia de la Economía Solidaria, estas normas las deben aplicar todas las entidades solidarias vigiladas por la Supersolidaria.
      .col-md-6(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/tema1-3-img4.png', alt='Texto que describa la imagen') 

    p.mb-4(data-aos="fade") Se aplica el sistema SARLAFT y se deben realizar los siguientes reportes a la UIAF mediante el SIREL y su periodicidad, como se muestra en la siguiente tabla.

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 2.</b> Tipos de reportes sector Superintendencia de la Economía Solidaria.
    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota. Tomado de la Unidad de Información y Análisis Financiero.  
          strong https://www.uiaf.gov.co/sala_prensa/publicaciones/guia_normatividad_ala_cft
        thead
          tr
            th Reportes
            th Periodicidad
            th.column-3 Enviado a
        tbody
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Reporte de operaciones intentadas, rechazadas y sospechosas 
            td.text-center 
              strong De forma inmediata
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Reporte de ausencia de operaciones sospechosas
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF   
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Reporte de transacciones en efectivo
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF  
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Reporte de asociados exonerados del reporte de transacciones en efectivo 
            td.text-center 
              strong Trimestral
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Reporte sobre productos ofrecidos por las organizaciones vigiladas 
            td.text-center
              strong Trimestral
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Reporte sobre tarjetas de crédito o débito expedidas por las cooperativas que ejercen actividad financiera 
            td.text-center 
              strong Mensual
            td.text-center 
              strong UIAF

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-3-img5.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h5.mb-0 ¿Qué organizaciones deben dar cumplimiento?
            ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
              li.mb-0
                i.fas.fa-square
                | Cooperativas de ahorros y crédito, multiactivas integrales.
              li.mb-0 
                i.fas.fa-square
                | Fondos de empleados.  
              li.mb-0 
                i.fas.fa-square
                | Las demás organizaciones vigiladas y clasificadas en el nivel 3 de supervisión.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico4.svg', alt='Texto que describa la imagen')
      .col-md-11.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Sector vigilado por la Superintendencia de Vigilancia y Seguridad Privada

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p A este sector lo regulan diferentes normas:
        a.anexo.mb-4.mb-lg-3(href="https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema/circulares/circular_externa_8_2011_3646" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Circular externa No. 008 de marzo de 2011.</b> Circular externa No. 008 de marzo de 2011 de la Superintendencia de Vigilancia y Seguridad Privada.
        a.anexo.mb-4.mb-lg-3(href="https://www.supervigilancia.gov.co/publicaciones/6060/circular-465-de-2017-siplaft/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Circular externa No. 20172000000465 de noviembre de 2017.</b> Circular externa No. 20172000000465 de noviembre de 2017 de la Superintendencia de Vigilancia y Seguridad Privada.
        a.anexo.mb-4.mb-lg-3(href="https://www.redjurista.com/Documents/circular_45_de_2018_superintendencia_de_vigilancia_y_seguridad_privada.aspx#/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Circular externa No. 20182000000045 de febrero de 2018.</b> Circular externa No. 20182000000045 de febrero de 2018 de la Superintendencia de Vigilancia y Seguridad Privada.    
      .col-md-6(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/tema1-3-img5.png', alt='Texto que describa la imagen') 

    .row.py-4.mb-5.align-items-center.border-primario(data-aos="fade-down")
      .col-md-4
        h5 Estas normas las deben aplicar las siguientes empresas, teniendo en cuenta la Circular externa No. 008 de marzo de 2011:
      .col-md-8
        ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
          li.mb-0
            i.fas.fa-square
            | Empresas transportadoras de valores.
          li.mb-0 
            i.fas.fa-square
            | Empresas de seguridad y vigilancia privada autorizada en la modalidad de transporte de valores.  
          li.mb-0 
            i.fas.fa-square
            | Empresa blindadora de vehículos.

    p.mb-4(data-aos="fade") Circular externa No. 20172000000465 de noviembre de 2017, la cual menciona que se deben realizar los reportes a la UIAF que aparecen en la siguiente tabla:

    .row.justify-content-center
      .col-md-9(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Tabla 3.</b> Tipo de reportes para el sector vigilado por la Superintendencia de Vigilancia y Seguridad Privada.
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Nota. Tomado de la Unidad de Información y Análisis Financiero. 
              strong https://www.uiaf.gov.co/sala_prensa/publicaciones/guia_normatividad_ala_cft
            thead
              tr
                th Reportes
            tbody
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 1
                      | Empresas y cooperativa de vigilancia y seguridad privada.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Servicios especiales.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 3
                      | Servicios comunitarios.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 4
                      | Servicios con armas.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 5
                      | Servicios sin armas.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 6
                      | Escuelas de capacitación y entrenamiento.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 7
                      | Departamento de seguridad.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 8
                      | Servicios de asesoría y consultoría e investigación de seguridad.
              tr
                td 
                  ol.lista-ol--cuadro.mb-0
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 9
                      | Empresas dedicadas a la fabricación, instalación, comercialización y utilización de equipos para la vigilancia y la seguridad privada.                                                        

    p.mb-4(data-aos="fade") Adicionalmente, las siguientes normativas sugieren tener en cuenta las circulares que aparecen en la tabla 4.

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Tabla 4.</b> Circulares.
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Circular
                th Acciones
            tbody
              tr
                td Circular externa No. 20182000000045 de febrero de 2018
                td 
                  strong Deben realizar reportes los prestadores de servicios de arrendamientos de vehículos blindados. 
              tr
                td Circular No. 008 de marzo de 2011 
                td 
                  strong Se debe aplicar el Sistema de Administración de Riesgos de Lavado de Activos y de la Financiación del Terrorismo – SARLAFT.
              tr
                td Circular No. 20172000000465 de noviembre de 2017 
                td 
                  strong Se debe aplicar el Sistema Integral para la Prevención y Control del Lavado de Activos y Financiación del Terrorismo – SIPLAFT.
              tr
                td Circular No. 20182000000045 de febrero de 2018
                td 
                  strong Se debe aplicar el sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo - SARLAFT.       

    p.mb-4(data-aos="fade") Para este sector varían los tipos de reportes a la UIAF, teniendo en cuenta cada circular.

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/tema1-3-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Guia de normatividad ALACFT 2020
                  p.mb-0.text-small En el presente archivo, encontrará los diferentes tipos de reportes, teniendo en cuenta las circulares expedidas. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Guia_de_normatividad_ALACFT_2020.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico5.svg', alt='Texto que describa la imagen')
      .col-md-11.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Sector vigilado por la Dirección de Impuestos y Aduana Nacionales - DIAN - Cambistas profesionales

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p A este sector los regula las normas:
        a.anexo.mb-4.mb-lg-3(href="https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema/resoluciones/resolucion_59_2013" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Resolución No. 059 de abril de 2013.</b> Resolución No. 059 de abril de 2013 de la UIAF.
        a.anexo.mb-4.mb-lg-3(href="https://www.uiaf.gov.co/caracterizacion_usuarios/perfiles/reportantes/direccion_impuestos_aduanas_29351/29255" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Resolución No. 000061 de noviembre de 2017.</b> Resolución No. 000061 de noviembre de 2017 de la Dirección de Impuestos y Aduanas Nacionales.
        p Estas normas las deben aplicar aquellos profesionales de compra, venta de divisas y cheques de viajero. Además, se debe aplicar al sistema SARLAFT y FPADM (Financiación de la Proliferación de Armas de Destrucción Masiva).
      .col-md-6(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/tema1-3-img6.png', alt='Texto que describa la imagen') 

    p.mb-4(data-aos="fade") A estas normas se les debe realizar los siguientes reportes para la UIAF, mencionados en la siguiente tabla: 

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 5.</b> Tipos de reportes sector vigilado por la DIAN
    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota. Tomado de la Unidad de Información y Análisis Financiero.
          strong https://www.uiaf.gov.co/sala_prensa/publicaciones/guia_normatividad_ala_cft
        thead
          tr
            th Reportes
            th Periodicidad
            th.column-3 Enviado a
        tbody
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Reporte de operaciones intentadas, rechazadas y sospechosas – ROS 
            td.text-center 
              strong De forma inmediata
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Reporte de ausencia de operaciones sospechosas 
            td.text-center 
              strong Trimestral
            td.text-center 
              strong UIAF   
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Reporte de transacciones en efectivo
            td.text-center 
              strong Trimestral
            td.text-center 
              strong UIAF  
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Reporte de ausencia de transacciones en efectivo
            td.text-center 
              strong Trimestral
            td.text-center 
              strong UIAF

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico6.svg', alt='Texto que describa la imagen')
      .col-md-11.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Sector vigilado por la Superintendencia Nacional de Salud

    p.mb-4(data-aos="fade") En este sector se regula la norma de la circular externa No. 000009 de abril de 2016 de la Superintendencia Nacional de Salud, estas normas se deben aplicar en las entidades que aparecen en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Figura 2.</b> Tipos de reportes
    figure.mb-5
          img(src='@/assets/curso/tema1-figura2.svg', alt='Tipos de reportes')    

    p.mb-4(data-aos="fade") A este sector se debe aplicar el sistema SARLAFT y a su vez se deben realizar los reportes a la UIAF, como se menciona en la siguiente tabla:

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 6.</b> Tipos de reportes sector vigilado por la Superintendencia de Salud
    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota. Tomado de la Unidad de Información y Análisis Financiero.
          strong https://www.uiaf.gov.co/sala_prensa/publicaciones/guia_normatividad_ala_cft
        thead
          tr
            th Reportes
            th Periodicidad
            th.column-3 Enviado a
        tbody
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Reporte de operaciones intentadas y/o sospechosas – ROS 
            td.text-center 
              strong De forma inmediata
            td.text-center 
              strong UIAF
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Reporte de ausencia de operaciones sospechosas  
            td.text-center 
              strong Mensual 
            td.text-center 
              strong UIAF   
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Reporte de transacciones en efectivo 
            td.text-center 
              strong Mensual 
            td.text-center 
              strong UIAF  
          tr
            td 
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Reporte de ausencia de transacciones en efectivo
            td.text-center 
              strong Mensual 
            td.text-center 
              strong UIAF

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-3-img7.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el 
              strong SARLAFT 
              | no existe un sistema único, cada entidad debe adaptarse y a su vez ir creando y perfeccionando su propio sistema, debido a esto debe entenderse desde un punto de vista crítico y legal como una norma de actividad reguladora para las organizaciones.

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4  Línea de tiempo de normatividad

    p.mb-4(data-aos="fade") Es importante tener en cuenta que a medida que va transcurriendo el tiempo se van expidiendo ciertas normativas gubernamentales, ya sean leyes, decretos y/o reformas de estas mismas, que permiten abarcar una mayor proporción de sectores y reportes a realizar.  

    .row.justify-content-center.mb-4
      .col-md-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/tema1-4-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Linea de tiempo evolución normativa
                  p.mb-0.text-small En el presente archivo la mención de la normativa expedida por el gobierno a través de los últimos años, sobre el cumplimiento que se debe llevar frente a esta temática. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo2_Linea_de_tiempo_evolucion_normativa_lavado_activos_1990-2017.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 


</template>

<script>
import AcordeonB from '../components/AcordeonB'
import BotonesB from '../components/BotonesB'
export default {
  name: 'Tema1',
  components: {
    AcordeonB,
    BotonesB,
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
