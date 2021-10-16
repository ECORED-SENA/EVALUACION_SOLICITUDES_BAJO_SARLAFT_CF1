<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')

    p(data-aos="fade") A continuación, se presentará el video que hará una breve introducción del presente componente formativo:

    .row.justify-content-center.tarjeta.fondo-video(data-aos="fade-down") 
      .col-md-10.py-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
