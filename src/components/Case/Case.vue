<template>
  <div class="case-wrapper">
    <h2 class="title">客户案例</h2>
    <div class="case-container">
      <div class="case" v-for="count in caseNum" :key="count" :style="caseImgCls(count)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  props: {
    caseNum: {
      type: Number,
      default: 8
    },
    canteen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    caseImgCls (index) {
      if (this.canteen) {
        const img = require(`./${index}.png`)
        return {
          background: `url(${img}) no-repeat center`,
          backgroundSize: '80% auto',
          flexBasis: '20%',
          paddingBottom: '12%'
        }
      } else {
        const img = require(`./case${index}.jpg`)
        return {
          background: `url(${img}) no-repeat center`,
          backgroundSize: '80% auto'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.case-wrapper
  width: 100%
  max-width 1280px
  background: #FFF
  padding: 30px 0
  color: #666
  margin 0 auto
  .title
    text-align: center
    font-weight: bold
    font-size: 40px
    line-height: 1.7
    margin 0
  .case-container
    display flex
    flex-wrap wrap
    justify-content space-between
    .case
      flex-basis: 25%
      height 0
      padding-bottom 25%
@media (max-width: 1280px)
  .case-wrapper
    padding: 10px 0
    .title
      font-size 32px
</style>
