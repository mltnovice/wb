<template>
  <div class="about">
    <div class="banner"></div>
    <div class="about-main">
      <p class="about-text">
        广州思铭软件有限公司是一家综合性的餐饮商业管理系统服务商，集预定、点菜、厨房分单、前台结算、客户管理、会员卡管理和后台的进、销、存、成本分析、经营分析等完备一体化功能。支持C/S和SAAS系统架构，支持触摸屏、PC机、平板电脑、点菜宝、手机、微信等多种点菜模式，可以处理预点菜、厨房传菜、前台打印、结帐打印、菜单维护、原料进销存、客户管理、菜品分析、成本分析、经营分析等餐饮管理来务，轻松完成从点菜、打印结帐、采购、库存、核算的一条龙管理。采用了无线信息技术，更有力地促进了餐饮行业信息数字化管理。
      </p>
      <p class="about-text-bold">企业愿景：协助企业构建最优秀，最灵活，最具效益的企业管理和沟通平台！</p>
      <p class="about-text-bold">企业使命：将国内外先进的管理理念和方法转化为切实可行并能帮助企业达致成功的工具平台软件，协助企业持续成功！</p>
      <p class="about-text-bold">
        企业理念：<br>
        <span class="about-text-bold-span">
          专业、实用的产品<br>
          灵活、高效的方案<br>
          优质、及时的服务<br>
          创新、合作的精神<br>
        </span>
      </p>
      <p class="about-text-bold">
        商务联系：<br>
        <span class="about-text-bold-span">
          商务电话：13710518776（何经理）<br>
          商务邮箱：smsoftware19@qq.com<br>
          公司地址: 广州市白云区鹤联街1号中海联8立方创意园A1栋P321<br>
        </span>
      </p>
      <baidu-map
        class="bm-view"
        ak="nSxiPohfziUaCuONe4ViUP2N"
        center="广州市白云区鹤联街1号中海联8立方创意园A1栋P321"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
      >
        <bm-info-window
          :position="{ lng: 113.272927, lat: 23.215261 }"
          :show="infoWindow.show"
        >
          <p v-html="infoWindow.content"></p>
        </bm-info-window>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import { BaiduMap, BmInfoWindow } from 'vue-baidu-map/components'

export default {
  name: 'About',
  data () {
    return {
      zoom: 16,
      infoWindow: {
        show: true,
        content: '中海联8立方创意园<br> 地址：广州市白云区鹤联街1号'
      }
    }
  },
  components: {
    BaiduMap,
    BmInfoWindow
  }
}
</script>

<style lang="stylus" scoped>
.about
  font-size 15px
  .banner
    width: 100%
    padding-bottom 30.7%
    background: url("../../assets/images/Home/banner5.jpg") no-repeat center
    background-size auto 100%
  .about-main
    max-width 1280px
    margin 0 auto
    padding 30px 10px
    text-align left
    line-height 2
    color: #000
    .about-text
      text-indent 2em
    .about-text-bold
      font-size 16px
      font-weight 700
      &:before
        content '•'
        color: #F00
        font-size 20px
        padding 0 5px
      .about-text-bold-span
        display inline-block
        padding-left 4em
    .bm-view
      margin-top 10px
      width 100%
      height 500px
@media (max-width: 490px)
  .about
    .banner
      padding-bottom: 150px
@media (max-width: 475px)
  .about
    .about-main
      padding 10px 10px
      line-height 1.7
      font-size 14px
      .about-text-bold
        .about-text-bold-span
          padding-left 2em
</style>
