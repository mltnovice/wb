<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="product-link">
          <div class="product-link-title product-link-text" @click="jump('/product')">产品中心</div>
          <div class="subProduct-link">
            <div class="product-link-text" @click="jump('/product/software')">软件产品</div>
            <div class="product-link-text" @click="jump('/product/mobile')">移动互联+</div>
            <div class="product-link-text" @click="jump('/product/solution')">解决方案</div>
          </div>
        </div>
        <div class="product-link">
          <div class="product-link-title product-link-text">关于我们</div>
          <div>
            <div class="product-link-text" @click="jump('/about')">公司介绍</div>
            <div class="product-link-text" @click="jump('/service')">技术支持</div>
            <div class="product-link-text">商务电话：13710518776</div>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div>
          <img class="weChat" src="./qrcode.jpg" alt="微信号：13710518776"/>
          <p>商务微信</p>
        </div>
        <div>
          <img class="weChat" src="./qrcode.jpg" alt="微信号：13710518776"/>
          <p>微信公众号</p>
        </div>
      </div>
    </div>
    <div class="copyright">版权所有：© 2019 广州思铭软件有限公司 粤ICP备：19144170</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    jump (url) {
      if (this.$route.path === url) {
        this.$router.go(0)
      } else {
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  background: #3A3A3A
  color: #FFF
  font-size 15px
  .footer-container
    padding 20px 0
    display flex
    flex-wrap wrap
    align-items center
    justify-content space-around
    .footer-left
      flex-basis 80%
      display flex
      flex-wrap wrap
      justify-content space-around
      .product-link
        .product-link-title
          font-size 16px
          font-weight 700
        .product-link-text
          margin 30px
          &:hover
            cursor pointer
    .footer-right
      display flex
      .weChat
        width 100px
        height 100px
        margin-left 10px
  .copyright
    height 50px
    line-height 50px
    border-top 1px solid #FFF
    border-bottom 1px solid #FFF
@media (max-width: 475px)
  .footer
    .footer-container
      .footer-left
        .product-link
          .product-link-text
            margin 12px
</style>
