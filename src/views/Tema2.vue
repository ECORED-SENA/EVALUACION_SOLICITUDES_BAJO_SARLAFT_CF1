<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Lavado de activos

    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/banner-tema2.png', alt='Texto que describa la imagen')  

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es una actividad criminal que da una apariencia legal a recursos con índole ilícito, que tiene como finalidad ocultar el origen y la ubicación del control del dinero y/o bienes y servicios obtenidos ilegalmente; debido a esto se involucra en la economía de activos con procedencia ilícita, brindando una apariencia de legalidad facilitándoles a delincuentes y organizaciones criminales ocultar el verdadero origen de su producto y/o servicio sin exponer la verdadera fuente.

    p.mb-4(data-aos="fade") El lavado de activos se puede originar en diferentes ámbitos y principalmente se destacan los sociales, económicos, financieros y reputacionales, como se muestra en la siguiente figura.

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 4.</b> Actividades ilícitas 
        figure.mb-5
          img.mb-2(src='@/assets/curso/tema2-figura.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomado de la Unidad de Información y Análisis Financiero. <b>https://www.uaf.cl/images/lavado/graf_diagrama.gif_cft</b>
    




   
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
