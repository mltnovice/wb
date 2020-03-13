<template>
  <svg :class="svgCls" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconCls: {
      type: String,
      require: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#${this.iconCls}`
    },
    svgCls () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .svg-icon
    width: 1em
    height: 1em
    vertical-align: -0.15em
    fill: currentColor
    overflow: hidden
</style>
