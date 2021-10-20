<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 El riesgo

    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/banner-tema4.png', alt='Texto que describa la imagen') 
    
    .row.justify-content-center
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 “El riesgo es la exposición a una situación donde hay una posibilidad de sufrir un daño o de estar en peligro. Es la vulnerabilidad o amenaza a que ocurra un evento y sus efectos sean negativos y que alguien o algo puedan verse afectados por él. Cuando se dice que un sujeto está en riesgo es porque se considera que se encuentra en desventaja frente a algo más, bien sea por su ubicación o posición, además de ser susceptible a recibir una amenaza sin importar cuál sea su índole” (ConceptoDefinición, s.f.). 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-8.bg-secundario-2.border-bottom-verde.p-4.px-md-5(data-aos="fade") 
        p Además, también se debe tener en cuenta la gestión de riesgos como un proceso:
        ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
          li.mb-0
            i.fas.fa-square
            | Identifica.
          li.mb-0 
            i.fas.fa-square
            | Analiza. 
          li.mb-0 
            i.fas.fa-square
            | Responde a los diferentes factores de riesgo que pueden existir en un proyecto. 
          li.mb-0 
            i.fas.fa-square
            | Se pueden obtener beneficios, al identificar y solucionar estos riesgos.     

    p.mb-4(data-aos="fade")  Este sistema se encuentra diseñado para cuantificar el riesgo y predecir su impacto en los proyectos que se tienen en las organizaciones, con esto se puede deducir si el resultado es aceptable o inaceptable; al ser un proceso continuo y disciplinado facilita la organización, planificación, el presupuesto y el control de costos, como se muestra en la siguiente figura:

    .row.justify-content-center.mb-4
      .col-md-8(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 5.</b> Ciclo de gestión del riesgo
        Botones


    p.mb-5(data-aos="fade") A continuación, se presentarán las diferentes maneras de administrar el riesgo: 

    .row.mb-5(data-aos="fade-down") 
      .col-lg-4.col-md-6
        .cards
          .face.face1
            .content.text-center
              .icon
                img(src="@/assets/curso/tema4-hover1.jpg", alt="Imagen decorativa")
          .face.face2.p-2.px-4
            .content.text-center
              p.mb-0 Uso sistemático de la información disponible para determinar qué tan frecuentemente pueden ocurrir eventos especificados y la magnitud de sus consecuencias. 
      .col-lg-4.col-md-6
        .cards(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .face.face1
            .content.text-center
              .icon
                img(src="@/assets/curso/tema4-hover2.jpg", alt="Imagen decorativa")
          .face.face2.p-2.px-4
            .content.text-center
              p.mb-0 Una decisión informada de aceptar consecuencias y probabilidades de un riesgo particular.
      .col-lg-4.col-md-6
        .cards
          .face.face1
            .content.text-center
              .icon
                img(src="@/assets/curso/tema4-hover3.jpg", alt="Imagen decorativa")
          .face.face2.p-2.px-4
            .content.text-center
              p.mb-0 La cultura, procesos y estructuras que están dirigidas hacia la administración efectiva de oportunidades potenciales y efectos adversos.
    
    .row.mb-3
    p.mb-4(data-aos="fade") A continuación, se presentarán las diferentes maneras de administrar el riesgo:

    .row.justify-content-center.bg-secundario-2.py-5
      .col-md-10(data-aos="fade-down") 
        SlyderE(indicadores="izquierda")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Riesgos asociados
              p El riesgo es la posibilidad de pérdidas o daños que pueden sufrir las organizaciones. El riesgo de LA/FT es materializado a través de diferentes factores de riesgos que son asociados como, por ejemplo, el legal, el reputacional, operativo y de contagio y esto por consecuencia trae un efecto económico negativo, al que se exponen las entidades que representan la estabilidad financiera utilizada para tales actos.
                br
                | Estos factores de riesgo son agentes generadores como los clientes, usuarios, productos, canales de distribución y jurisdicciones.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-slider1.svg', alt='Riesgos asociados')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Riesgos asociados
              p Su naturaleza es diferente a los procesos de administración de riesgos típicamente financieros (crédito, técnicos de seguros, mercado, liquidez, etc.), pues los primeros mecanismos de administración se enfocan en prevenir, detectar y reportar oportuna y eficazmente; a diferencia de los segundos mecanismos de administración, que se dirigen a asumirlos integral o parcialmente en función del perfil de riesgo de la entidad y de la relación rentabilidad/riesgo.
            .col-md-5
              figure
                img(src='@/assets/curso/tema4-slider2.svg', alt='Riesgos asociados')      
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Riesgos asociados
              p Según la Guía del Riesgo de LA/FT para el sector solidario existen siete elementos que deben ser incorporados al proceso integral de administración y de la gestión global del riesgo. El gráfico a continuación representa el flujo del proceso de gestión del riesgo.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-slider3.svg', alt='Riesgos asociados')  



</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema4',
  components: {
    Botones,
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
