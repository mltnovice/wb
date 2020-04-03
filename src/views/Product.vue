<template>
  <div class="product">
    <div class="banner"></div>
    <div class="main">
      <div class="product-sidebar">
        <div class="product-sidebar-menu">
          <router-link
            class="product-sidebar-nav"
            v-for="nav in menu"
            :key="nav.id"
            :to="nav.src"
          >{{nav.desc}}</router-link>
        </div>
        <div class="contact">
          <h3 class="contact-title">联系方式</h3>
          <p>商务电话：13710518776</p>
          <p>技术电话：14739275730</p>
          <p>技术电话：18824158860</p>
          <p>技术 QQ：532148277</p>
          <p>技术 QQ：1402147350</p>
          <p>微信同号</p>
        </div>
        <div class="company-addr">
          <h3 class="company-addr-title">广州思铭软件有限公司</h3>
          <p>地址：广州市白云区鹤联街1号中海联8立方创意园A1栋P321</p>
          <p>公司网址：www.gzsmsf.com</p>
        </div>
      </div>
      <div class="main-contain">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      menu: [
        {
          id: 0, desc: '软件产品', src: '/product/software', name: 'software'
        },
        {
          id: 1, desc: '移动互联+', src: '/product/mobile', name: 'mobile'
        },
        {
          id: 2, desc: '解决方案', src: '/product/solution', name: 'solution'
        }
      ]
    }
  },
  methods: {
    route (url) {
      this.showProductFlag = false
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
.product
  color: #666
  font-size 15px
  .banner
    width: 100%
    padding-bottom: 30.7%
    background: url("../assets/images/Home/banner5.jpg") no-repeat center
    background-size auto 100%
  .main
    width 100%
    max-width 1280px
    margin 20px auto 0
    display flex
    .product-sidebar
      min-width 300px
      .product-sidebar-menu
        display flex
        flex-direction column
        .product-sidebar-nav
          margin 10px 0
          width 100%
          height 60px
          line-height 60px
          border 1px solid #E9E9E9
          box-shadow 1px 1px 1px 0 #d9e3e7
          border-radius 4px
          /*color: #0e4d6f*/
          font-weight 700
          letter-spacing 1.2px
          box-sizing border-box
          &:hover
            cursor pointer
        .router-link-active
          color: #1EC67A
          border 1px solid #1EC67A
          background #F3F3F3
          box-shadow 1px 1px 1px 0 #d9e3e7
      .contact, .company-addr
        margin-bottom 10px
        line-height 2
        text-align left
        padding-left: 20px
        border 1px solid #E9E9E9
        box-shadow 1px 1px 1px 0 #d9e3e7
        border-radius 4px
        .company-addr-title, .contact-title
          line-height 1
@media (max-width: 1280px)
  .product
    .banner
      padding-bottom: 30.7%
    .main
      padding 0 1em
      box-sizing border-box
@media (max-width: 900px)
  .product
    .main
      flex-direction column
      .product-sidebar
        .contact, .company-addr
          display none
@media (max-width: 490px)
  .product
    .banner
      padding-bottom: 150px
</style>
