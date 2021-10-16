<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Financiación del terrorismo

    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/banner-tema3.png', alt='Texto que describa la imagen')  

    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema3-img1.svg', alt='Texto que describa la imagen')  
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 La UIAF – Unidad de Información y Análisis Financiero toma la definición de “A review of Sources on Terrorist Financing” que define el terrorismo como un método para realizar acciones violentas repetitivas, utilizando individuos, grupos o actores clandestinos (semi)estatales, por razones ideológicas, religiosas o políticas.

    p(data-aos="fade") La financiación del terrorismo está directamente relacionada con los fondos, bienes o recursos a las que ingresan las organizaciones terroristas para mantener sus actividades ilícitas.

    p.mb-4(data-aos="fade") A continuación,  se presentará el video que hará una breve explicación sobre la financiación del terrorismo. 

    .row.justify-content-center
      .col-md-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-2(src="@/assets/curso/tema3-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Prevención del lavado de activos y financiación del terrorismo
                  p.mb-0.text-small En el presente video se explicará el concepto de lavado de activos y las diferentes modalidades de financiación del terrorismo. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=BxJfd8BYMts')" target="_blank")
                    span Enlace
                    i.fas.fa-link  

</template>

<script>
export default {
  name: 'Tema3',
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
