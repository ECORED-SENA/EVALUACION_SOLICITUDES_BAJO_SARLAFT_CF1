<template lang="pug">
.btns
  img(src='@/assets/curso/info-fondo.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-center.px-3.py-4(v-if="index === hover") 
      .col-md-3.col-5.p-0
        img(:src="boton.icono")
      .col-md-9.p-2
        p.mb-0(v-html="boton.texto")


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '33%',
    botones: [
      {
        img: require('@/assets/curso/info-01.svg'),
        img_h: require('@/assets/curso/info-01-b.svg'),
        pos_x: '34%',
        pos_y: '-9%',
        icono: require('@/assets/curso/figura2-img1.svg'),
        texto:
          'Reporte de operaciones intentadas y operaciones sospechosas - ROS.',
      },
      {
        img: require('@/assets/curso/info-02.svg'),
        img_h: require('@/assets/curso/info-02-b.svg'),
        pos_x: '70%',
        pos_y: '32%',
        icono: require('@/assets/curso/figura2-img2.svg'),
        texto: 'Reporte de ausencia de operaciones sospechosas.',
      },
      {
        img: require('@/assets/curso/info-03.svg'),
        img_h: require('@/assets/curso/info-03-b.svg'),
        pos_x: '34%',
        pos_y: '72%',
        icono: require('@/assets/curso/figura2-img3.svg'),
        texto: 'Reporte de transacciones en efectivo.',
      },
      {
        img: require('@/assets/curso/info-04.svg'),
        img_h: require('@/assets/curso/info-04-b.svg'),
        pos_x: '-3%',
        pos_y: '32%',
        icono: require('@/assets/curso/figura2-img4.svg'),
        texto: 'Reporte de ausencia de transacciones en efectivo.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: cover
    border-radius: 50%
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    position: absolute
    bottom: 0%
    left: 100%
    background-color: #FFECB3
    width: 300px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)

@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>
