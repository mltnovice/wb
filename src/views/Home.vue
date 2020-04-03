<template>
  <div class="home">
    <div class="nav-slide">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="banner banner1"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner2"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner3"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner4"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner5"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="product">
      <h2 class="title">产品中心</h2>
      <p class="subtitle">我们会不断提升产品的性能和体验，为你提供更好的产品</p>
      <div class="product-container">
        <transition name="toggle-in">
          <div class="product-item" @click="jump('/product/software')">
            <i class="product-item-icon software"></i>
            <h4 class="product-item-name">软件产品</h4>
            <p class="product-item-desc">软件产品的介绍</p>
            <div class="product-item-jump">查看更多...</div>
          </div>
        </transition>
        <div class="product-item" @click="jump('/product/mobile')">
          <i class="product-item-icon inter"></i>
          <h4 class="product-item-name">移动互联+</h4>
          <p class="product-item-desc">移动互联+类型的产品</p>
          <div class="product-item-jump">查看更多...</div>
        </div>
        <div class="product-item" @click="jump('/product/solution')">
          <i class="product-item-icon solve"></i>
          <h4 class="product-item-name">解决方案</h4>
          <p class="product-item-desc">产品提供的解决方案</p>
          <div class="product-item-jump">查看更多...</div>
        </div>
        <div class="product-item" @click="jump('/case')">
          <i class="product-item-icon case"></i>
          <h4 class="product-item-name">客户案例</h4>
          <p class="product-item-desc">各大类型客户案例</p>
          <div class="product-item-jump">查看更多...</div>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="section" v-for="(section, index) in sectionList" :key="section.sectionName + index">
        <div class="section-img" :style="sectionImgCls(index)"></div>
        <div class="section-list">
          <h3 class="section-list-tittle">{{section.sectionName}}</h3>
          <div class="section-list-wrapper">
            <div
              class="section-list-item"
              v-for="(sectionIcon, reIndex) in section.sectionIconList"
              :key="sectionIcon.iconName + reIndex"
              :style="{ flexBasis: `${1 / (section.sectionIconList.length / 2) * 100}%` }"
            >
              <img class="section-list-item-icon" :src="sectionIcon.iconSrc"/>
              <h4 class="section-list-item-name">{{sectionIcon.iconName}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="separate"></div>
    <case></case>
  </div>
</template>

<script>
import Case from '@/components/Case/Case'

export default {
  name: 'Home',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      fadeIn: false,
      sectionList: [
        {
          sectionName: '多种平台和场景',
          sectionIconList: [
            {
              iconSrc: require('../assets/images/Home/三种前台.png'),
              iconName: '三种前台'
            },
            {
              iconSrc: require('../assets/images/Home/后台管理.png'),
              iconName: '后台管理'
            },
            {
              iconSrc: require('../assets/images/Home/pad点餐.png'),
              iconName: 'pad点餐'
            },
            {
              iconSrc: require('../assets/images/Home/手机app.png'),
              iconName: '手机app'
            },
            {
              iconSrc: require('../assets/images/Home/硬件点菜机.png'),
              iconName: '硬件点菜机'
            },
            {
              iconSrc: require('../assets/images/Home/消费机对接.png'),
              iconName: '消费机对接'
            },
            {
              iconSrc: require('../assets/images/Home/外卖服务.png'),
              iconName: '外卖服务'
            },
            {
              iconSrc: require('../assets/images/Home/扫码点餐.png'),
              iconName: '扫码点餐'
            }
          ]
        },
        {
          sectionName: '各种管理功能',
          sectionIconList: [
            {
              iconSrc: require('../assets/images/Home/收银支付.png'),
              iconName: '收银支付'
            },
            {
              iconSrc: require('../assets/images/Home/会员管理.png'),
              iconName: '会员管理'
            },
            {
              iconSrc: require('../assets/images/Home/厨打出品.png'),
              iconName: '厨打出品'
            },
            {
              iconSrc: require('../assets/images/Home/库存管理.png'),
              iconName: '库存管理'
            },
            {
              iconSrc: require('../assets/images/Home/厨房划菜.png'),
              iconName: '厨房划菜'
            },
            {
              iconSrc: require('../assets/images/Home/交班对账.png'),
              iconName: '交班对账'
            }
          ]
        },
        {
          sectionName: '各种营销手段',
          sectionIconList: [
            {
              iconSrc: require('../assets/images/Home/票券管理.png'),
              iconName: '票券管理'
            },
            {
              iconSrc: require('../assets/images/Home/折扣方案.png'),
              iconName: '折扣方案'
            },
            {
              iconSrc: require('../assets/images/Home/特价菜品.png'),
              iconName: '特价菜品'
            },
            {
              iconSrc: require('../assets/images/Home/会员日优惠.png'),
              iconName: '会员日优惠'
            },
            {
              iconSrc: require('../assets/images/Home/菜品买赠.png'),
              iconName: '菜品买赠'
            },
            {
              iconSrc: require('../assets/images/Home/菜品促销.png'),
              iconName: '菜品促销'
            },
            {
              iconSrc: require('../assets/images/Home/减满活动.png'),
              iconName: '满减活动'
            },
            {
              iconSrc: require('../assets/images/Home/半价促销.png'),
              iconName: '半价促销'
            }
          ]
        },
        {
          sectionName: '报表清晰可见',
          sectionIconList: [
            {
              iconSrc: require('../assets/images/Home/首页指标.png'),
              iconName: '首页指标'
            },
            {
              iconSrc: require('../assets/images/Home/收银统计.png'),
              iconName: '收银统计'
            },
            {
              iconSrc: require('../assets/images/Home/菜品销售.png'),
              iconName: '菜品销售'
            },
            {
              iconSrc: require('../assets/images/Home/收银交班.png'),
              iconName: '收银交班'
            },
            {
              iconSrc: require('../assets/images/Home/存酒挂账.png'),
              iconName: '存酒挂账'
            },
            {
              iconSrc: require('../assets/images/Home/提成报表.png'),
              iconName: '提成报表'
            },
            {
              iconSrc: require('../assets/images/Home/扫码点餐报表.png'),
              iconName: '扫码点餐报表'
            },
            {
              iconSrc: require('../assets/images/Home/消费机报表.png'),
              iconName: '消费机报表'
            }
          ]
        }
      ]
    }
  },
  methods: {
    sectionImgCls (index) {
      const img = require(`../assets/images/Home/section${index + 1}.jpg`)
      return {
        background: `url(${img}) no-repeat center`,
        backgroundSize: 'auto 80%'
      }
    },
    jump (url) {
      if (this.$route.path === url) {
        this.$router.go(0)
      } else {
        this.$router.push(url)
      }
    }
  },
  components: {
    Case
  }
}
</script>

<style lang="stylus" scoped>
.home
  .separate
    height 30px
    background #F0F1F3
  .nav-slide
    .banner
      width: 100%
      padding-bottom: 30.7%
    .banner1
      background: url("../assets/images/Home/banner1.jpg") no-repeat center
      background-size auto 100%
    .banner2
      background: url("../assets/images/Home/banner2.jpg") no-repeat center
      background-size auto 100%
    .banner3
      background: url("../assets/images/Home/banner3.jpg") no-repeat center
      background-size auto 100%
    .banner4
      background: url("../assets/images/Home/banner4.jpg") no-repeat center
      background-size auto 100%
    .banner5
      background: url("../assets/images/Home/banner5.jpg") no-repeat center
      background-size auto 100%
    >>> .swiper-pagination-bullet
      background #FFF
      height .8rem
      width .8rem
      border-radius 50%
  .product
    width: 100%
    background: #F0F1F3
    padding: 45px 0
    color: #666
    .title
      text-align: center
      font-weight: bold
      font-size: 40px
      line-height: 1.5
      margin 0
    .subtitle
      text-align: center;
      font-size: 16px;
      line-height: 1.7;
    .product-container
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .product-item
        flex-basis: 220px;
        height: 220px;
        padding: 20px;
        margin: 20px;
        text-align: center;
        background: #FFF;
        transition: ease .5s;
        &:hover
          cursor: pointer;
          transform: scale(1.1);
        .product-item-icon
          display: inline-block;
          height: 60px;
          margin: 10px;
          width: 80px;
        .software
          margin: 0;
          height: 80px;
          background: url("../assets/images/Home/product.png") no-repeat center;
          background-size: auto 100%;
        .inter
          background: url("../assets/images/Home/inter.png") no-repeat center;
          background-size: auto 100%;
        .solve
          background: url("../assets/images/Home/solve.png") no-repeat center;
          background-size: auto 100%;
        .case
          background: url("../assets/images/Home/case.png") no-repeat center;
          background-size: auto 100%;
  .introduce
    max-width 1280px
    display flex
    flex-direction column
    margin 0 auto
    .section
      display flex
      padding 0 50px
      flex-wrap wrap
      &:nth-child(even)
        flex-direction row-reverse
      .section-img
        flex-basis: 50%
      .section-list
        flex-basis: 50%
        padding 40px 0
        .section-list-tittle
          padding-bottom 30px
        .section-list-wrapper
          display flex
          flex-wrap wrap
          justify-content space-between
          align-items center
          .section-list-item
            .section-list-item-icon
              width 36px
              height 36px
@media (max-width: 1280px)
  .home
    .nav-slide
      .banner
        padding-bottom: 30.7%
    .product
      padding 0 1em
      box-sizing border-box
      .title
        font-size 32px
        line-height 2
@media (max-width: 750px)
  .home
    .introduce
      .section
        padding 0 30px
        .section-list
          flex-basis 100%
          padding 10px 0
          .section-list-tittle
            padding-bottom 10px
@media (max-width: 490px)
  .home
    .nav-slide
      .banner
        padding-bottom: 150px
      .banner1
        background-size 100% 100%
      .banner2
        background-size 100% 100%
      .banner3
        background-size 100% 100%
      .banner4
        background-size 100% 100%
      .banner5
        background-size 100% 100%
</style>
