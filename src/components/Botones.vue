<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-around
    .col-md-11.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/botones-fondo3.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            :position="index"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")

</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '11.3%',
        pos_y: '0%',
        size: '38%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '50.7%',
        pos_y: '0%',
        size: '38%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '68%',
        pos_y: '21%',
        size: '39%',
      },
      {
        img: require('@/assets/curso/botones-ico-04-a.svg'),
        img_h: require('@/assets/curso/botones-ico-04-b.svg'),
        pos_x: '60.5%',
        pos_y: '56%',
        size: '38%',
      },
      {
        img: require('@/assets/curso/botones-ico-05-a.svg'),
        img_h: require('@/assets/curso/botones-ico-05-b.svg'),
        pos_x: '30%',
        pos_y: '70%',
        size: '40%',
      },
      {
        img: require('@/assets/curso/botones-ico-06-a.svg'),
        img_h: require('@/assets/curso/botones-ico-06-b.svg'),
        pos_x: '1.7%',
        pos_y: '56%',
        size: '38%',
      },
      {
        img: require('@/assets/curso/botones-ico-07-a.svg'),
        img_h: require('@/assets/curso/botones-ico-07-b.svg'),
        pos_x: '1%',
        pos_y: '20%',
        size: '39%',
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
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out
</style>
