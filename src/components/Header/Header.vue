<template>
  <div class="header">
    <div class="logo-wrapper">
      <i class="logo"></i>
      <div class="company">
        <h3 class="company-name">广州思铭软件有限公司</h3>
        <h4 class="company-addr">www.gzsmsf.com</h4>
      </div>
    </div>
    <div class="nav-list">
      <router-link
        class="nav"
        v-for="nav in navItems"
        :key="nav.id"
        :to="nav.src"
        :class="routerLinkCls(nav.name)"
        @mouseover.native="showProduct(nav.name)"
        @mouseout.native="closeProduct(nav.name)"
      >
        {{nav.desc}}
      </router-link>
    </div>
    <transition name="toggle-in">
      <div class="product-menu" v-show="showProductFlag" @mouseover="showProduct('product')" @mouseout="closeProduct('product')">
        <div class="product-menu-list" v-for="menus in productMenu" :key="menus.name">
          <div class="product-menu-list-name">{{menus.name}}</div>
          <div class="product-menu-item" v-for="(menu, index) in menus.menuList" :key="menu + index">{{menu}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navItems: [
        {
          id: 0, desc: '首页', src: '/home', name: 'home'
        },
        {
          id: 1, desc: '产品', src: '/product', name: 'product'
        },
        {
          id: 2, desc: '服务', src: '/service', name: 'service'
        },
        {
          id: 3, desc: '下载', src: '/download', name: 'download'
        },
        {
          id: 4, desc: '关于', src: '/about', name: 'about'
        }
      ],
      productMenu: [
        {
          name: '软件产品',
          menuList: [
            '美食专家',
            '商业专家',
            '平板点菜',
            '手机点菜',
            '排队系统',
            '划菜系统'
          ]
        },
        {
          name: '移动互联+',
          menuList: [
            '微信点菜',
            '微信会员',
            '老板报表',
            '外卖平台',
            '秒付',
            '一码多用'
          ]
        },
        {
          name: '解决方案',
          menuList: [
            '酒楼解决方案',
            '中西式快餐解决方案',
            '火锅店解决方案',
            '美食广场解决方案',
            '酒奶茶店解决方案',
            '咖啡厅解决方案',
            '超市/便利店解决方案',
            '仓储卖场解决方案',
            '百货超市解决方案'
          ]
        }
      ],
      showProductFlag: false
    }
  },
  methods: {
    routerLinkCls (name) {
      const path = this.$route.path.slice(1)
      if (name === path) {
        return 'nav-item-active'
      }
      if (name === 'product' && this.showProductFlag) {
        return 'nav-item-active'
      }
    },
    showProduct (name) {
      if (name === 'product') {
        this.showProductFlag = true
      }
    },
    closeProduct (name) {
      if (name === 'product') {
        this.routerLinkCls('')
        this.showProductFlag = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  height: 64px
  display: flex
  justify-content: space-around
  align-items center
  background #F5F5F5
  position relative
  .logo-wrapper
    display: flex
    align-items: center
    height 64px
    .logo
      display: inline-block
      width: 60px
      height: 60px
      background: url("./logo.png") no-repeat
      background-size: 100% 100%
    .company
      .company-name, .company-addr
        margin: .5em 0
  .nav-list
    height 64px
    .nav
      display inline-block
      width 110px
      line-height 64px
      color: #666
      text-decoration: none
      &:hover
        color: #999
        background: #FFF
        border-radius: 6px
    .nav-item-active
      color: #999
      background: #FFF
  .product-menu
    position: absolute
    top: 65px
    left: 50%
    transform: translateX(-50%)
    padding: 16px
    display flex
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2)
    .product-menu-list
      padding 8px
      .product-menu-list-name
        width: 200px
        padding: 8px
        border-bottom: 1px solid #CCC
        color: #F96A0A
        &:hover
          cursor pointer
      .product-menu-item
        padding: 8px
        font-size: 14px
        color: #666
        &:hover
          color: #F96A0A
          cursor pointer
</style>
