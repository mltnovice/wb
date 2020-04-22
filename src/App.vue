<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <i class="back-to-top iconfont" @click="backTop"></i>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

/* eslint-disable */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1d565ad3d1ed78d474985e84f57dba2e";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
/* eslint-enable */

export default {
  data () {
    return {
      timer: null
    }
  },
  methods: {
    backTop () {
      cancelAnimationFrame(this.timer)
      this.timer = requestAnimationFrame(() => {
        const oTop = document.body.scrollTop || document.documentElement.scrollTop
        if (oTop > 0) {
          scrollTo(0, oTop - 100)
          this.timer = requestAnimationFrame(this.backTop)
        } else {
          cancelAnimationFrame(this.timer)
        }
      })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  min-width 320px
  .back-to-top
    &:before
      content '\e607'
      display inline-block
      width 50px
      height 50px
      line-height 50px
      font-weight bold
      position fixed
      z-index 99
      right 2%
      bottom 20%
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2)
      border-radius 4px
      cursor pointer
      background-color #f1f2f5
</style>
