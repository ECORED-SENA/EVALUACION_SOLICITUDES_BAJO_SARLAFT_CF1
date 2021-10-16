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

    p(data-aos="fade") El Sistema de administración del riesgos de lavado de activos y de financiación del terrorismo –SARLAFT se creó mediante la circular 22 de 2007, que fue modificada de la circular básica jurídica de la antigua Superintendencia Bancaria– hoy conocida como Superintendencia Financiera, la cual en el año 2008 se actualizó y se mejoró, ahora se conoce como Sistema integral para la prevención del lavado de activos (SIPLA) y así se nació el nuevo sistema llamado SARLAFT, como se muestra la siguiente figura.      

  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
