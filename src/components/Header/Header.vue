<template>
  <div class="header">
    <div class="logo-wrapper">
      <i class="logo"></i>
      <div class="company">
        <h3 class="company-name">广州思铭软件有限公司</h3>
        <div class="company-addr-wrapper">
          <i class="line"></i>
          <h4 class="company-addr">www.gzsmsf.com</h4>
          <i class="line"></i>
        </div>
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
      >
        {{nav.desc}}
      </router-link>
      <i class="phone-icon"></i>
      <span class="phone-number">13710518776</span>
    </div>
    <div class="nav-list-mini">
      <i class="phone-icon"></i>
      <span class="phone-number">13710518776</span>
      <i class="nav-list-mini-icon iconfont" @click="showMiniMenu">&#xe62a;</i>
    </div>
    <div class="nav-list-mini-list-mask" v-show="showMiniMenuFlag" @click="showMiniMenu">
      <div class="nav-list-mini-list">
        <router-link v-for="nav in navItems" :key="nav.id" :to="nav.src">{{nav.desc}}</router-link>
      </div>
    </div>
    <transition name="toggle-in">
      <div class="product-menu" v-show="showProductFlag" @mouseout.stop="closeProduct" @click="closeProductClick">
        <div class="product-menu-list" v-for="menus in productMenu" :key="menus.name">
          <div class="product-menu-list-name" @click.stop.prevent="route(menus.src)">{{menus.name}}</div>
          <div class="product-menu-item" v-for="(menu, index) in menus.menuList" :key="menu.name + index" @click.stop.prevent="route(menu.src)">{{menu.name}}</div>
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
          id: 0, desc: '首页', src: '/', name: 'home'
        },
        {
          id: 1, desc: '餐饮系统', src: '/product', name: 'product'
        },
        {
          id: 2, desc: '食堂系统', src: '/canteen', name: 'canteen'
        },
        {
          id: 3, desc: '客户案例', src: '/case', name: 'case'
        },
        {
          id: 4, desc: '技术支持', src: '/service', name: 'service'
        },
        {
          id: 5, desc: '关于我们', src: '/about', name: 'about'
        }
      ],
      productMenu: [
        {
          name: '软件产品',
          src: '/product/software',
          menuList: [
            {
              name: '美食专家',
              src: '/delicacy'
            },
            {
              name: '商业专家',
              src: '/business'
            },
            {
              name: '客享来-商业版',
              src: '/kxlBusiness'
            },
            {
              name: '平板点菜',
              src: '/pad'
            },
            {
              name: '手机点菜',
              src: '/phone'
            },
            {
              name: '排队系统',
              src: '/queue'
            },
            {
              name: '划菜系统',
              src: '/paddle'
            }
          ]
        },
        {
          name: '移动互联+',
          src: '/product/mobile',
          menuList: [
            {
              name: '微信点菜',
              src: '/weChat'
            },
            {
              name: '小程序点菜',
              src: '/applets'
            },
            {
              name: '微信会员',
              src: '/member'
            },
            {
              name: '老板报表',
              src: '/operation'
            },
            {
              name: '外卖平台',
              src: '/takeOut'
            },
            {
              name: '秒付',
              src: '/lightningPay'
            },
            {
              name: '一码多用',
              src: '/code'
            }
          ]
        },
        {
          name: '解决方案',
          src: '/product/solution',
          menuList: [
            {
              name: '酒楼解决方案',
              src: '/restaurant'
            },
            {
              name: '中西式快餐解决方案',
              src: '/western'
            },
            {
              name: '火锅店解决方案',
              src: '/hotpot'
            },
            {
              name: '美食广场解决方案',
              src: '/square'
            },
            {
              name: '奶茶店解决方案',
              src: '/milkTea'
            },
            {
              name: '咖啡厅解决方案',
              src: '/coffee'
            },
            {
              name: '超市/便利店解决方案',
              src: '/convenienceStore'
            },
            {
              name: '仓储卖场解决方案',
              src: '/storage'
            },
            {
              name: '百货超市解决方案',
              src: '/supermarket'
            }
          ]
        }
      ],
      showProductFlag: false,
      showMiniMenuFlag: false
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
      this.showProductFlag = name === 'product'
    },
    closeProduct (event) {
      const el = window.event || event
      const target = el.target
      const to = el.relatedTarget
      const req = to.compareDocumentPosition(target)
      if (req === 20) {
        if (to.className !== 'product-menu-list') {
          this.showProductFlag = false
        }
      }
      if (!(req === 20 || req === 0 || req === 10 || req === 2 || req === 4)) {
        this.showProductFlag = false
      }
    },
    closeProductClick () {
      this.showProductFlag = false
    },
    route (url) {
      this.showProductFlag = false
      if (this.$route.path === url) {
        this.$router.go(0)
      } else {
        this.$router.push(url)
      }
    },
    showMiniMenu () {
      this.showMiniMenuFlag = !this.showMiniMenuFlag
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
        margin: .3em 0
        color: #1D7BDC
      .company-addr-wrapper
        display flex
        align-items center
        .company-addr
          flex-shrink 1
        .line
          flex-grow 1
          border-bottom 1px solid #1D7BDC
  .nav-list-mini, .nav-list-mini-list-mask
    display none
  .phone-icon
    display inline-block
    width 22px
    height 22px
    margin-left 20px
    background url("phone.png") no-repeat center
    background-size 100% 100%
    vertical-align middle
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
    background: #FFF
    z-index 999
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
    &.toggle-in-enter-active
      animation: toggle-in .5s
    &.toggle-in-leave-active
      transition opacity .5s
    &.toggle-in-leave-to
      opacity 0

@keyframes toggle-in
  0%
    transform translate(-50% ,30%)
  100%
    transform translateY(-50%, 0)
@media (max-width: 1060px)
  .header
    padding 0 10px
    justify-content space-between
    .nav-list
      display none
    .nav-list-mini
      display flex
      align-items center
      .nav-list-mini-icon
        display inline-block
        font-size 30px
        margin-left: 5px
    .nav-list-mini-list-mask
      display block
      position fixed
      top: 0
      right 0
      bottom 0
      left 0
      z-index 999
      .nav-list-mini-list
        position absolute
        top: 0
        right: 0
        padding 15px 30px
        background #312F2F
        display flex
        flex-direction column
        line-height 2
        color: #FFF
        z-index 999
@media (max-width: 490px)
  .header
    padding 0 10px
    justify-content space-between
    .logo-wrapper
      .logo
        width 30px
        height 30px
      .company
        .company-name
          font-size: 16px
        .company-addr
          font-size 12px
@media (max-width: 390px)
  .header
    .nav-list-mini
      .phone-icon, .phone-number
        display none
</style>
