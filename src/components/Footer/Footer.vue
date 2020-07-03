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
        <div class="weChat">
          <img src="./qrcode.jpg" alt="微信号：13710518776" width="100px" height="100px"/>
          <p>商务微信</p>
        </div>
        <div class="weChat">
          <img src="./qrcode2.jpg" alt="微信公众号号：13710518776" width="100px" height="100px"/>
          <p>微信公众号</p>
        </div>
      </div>
    </div>
    <div class="copyright">版权所有：© 2019 广州思铭软件有限公司 <a href="http://www.beian.miit.gov.cn" target="_blank"  class="copyright-link">粤ICP备19144170号-1</a></div>
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
      flex-basis 70%
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
      flex-basis 30%
      display flex
      justify-content space-around
  .copyright
    height 50px
    line-height 50px
    border-top 1px solid #FFF
    border-bottom 1px solid #FFF
    .copyright-link
      &:hover
        color: #1d7bdc
@media (max-width: 675px)
  .footer
    .footer-container
      .footer-left
        width 100%
        flex-basis 100%
        .product-link
          width 180px
          .product-link-text
            margin 15px 0
            font-size 12px
      .footer-right
        width 100%
        flex-basis 100%
        font-size 12px
    .copyright
      font-size 10px
@media (max-width: 475px)
  .footer
    .footer-container
      .footer-left
        .product-link
          .product-link-text
            margin 12px
</style>
