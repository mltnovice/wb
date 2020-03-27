<template>
  <div class="business">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">商业专家</span>
        <p>本系统以界面直观、易学易用、功能全面、系统稳定为主要特点 ，支持连锁及多业态经营管理模式，</p>
        <p>能从根本上满足现代商业企业的管理高效、 分析精确、降低成本的要求，</p>
        <p>帮助企业实现物流、信息流、资金流的科学管理， 为企业提高自身竞争力奠定坚实的基础。</p>
        <p>适用范围：快餐、餐厅、酒楼、火锅店、茶楼、美食广场、咖啡馆、奶茶店、酒吧、休闲中心…</p>
      </div>
      <div class="banner-img"></div>
    </div>
    <div class="business-main">
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">操作简单，数据精准</h2>
          <p>商业管理功能强大完备,但操作简单，维护简便；</p>
          <p>成本毛利核算精准，数据更具决策分析价值。</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">安装维护、操作简便</h2>
          <p>· 提供百万条标准条码库，可自行维护，厚积薄发</p>
          <p>· 向导式图形操作界面，业务流程清晰，操作简单直观</p>
          <p>· 培训简单，一学就会，商户傻瓜式快速上手，后期维护量极少</p>
        </div>
      </div>
      <div class="section">
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>丰富多彩的多渠道支付</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>提供会员卡、储值卡、积分卡功能，灵活的积分规则设置</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>零售特价单、会员特价单、固定时间特价单等多种促销方式</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">报表图形化分析，数据分析更直观</h2>
          <p>系统提供强大的统计分析功能，可以对采购、批发、库存、销售、</p>
          <p>POS销售等业务数据按照各种不同的口径进行统计分析，满足公司领导层的经营决策</p>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h2 class="section-text-title">严谨高效的后台管理系统</h2>
          <p class="section-text-li">严谨的类别管理、品牌管理 多级配方管理</p>
          <p class="section-text-li">严格的权限控制保证公司业务流程的规范化、数据的安全性</p>
          <p class="section-text-li">应收应付管理，精确的财务监控</p>
          <p class="section-text-li">支持手动补货及动态智能补货（根据日均销量及商品的采购周期动态计算）</p>
          <p class="section-text-li">大小包装单位换算，精确管理多包装规格的商品库存</p>
          <p class="section-text-li">总部能对分店的库存做统一调配管理</p>
          <p class="section-text-li">先进的采购、收货管理</p>
          <p class="section-text-li">批发出入库、收款、促销员与客户的关系管理</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Business'
}
</script>

<style lang="stylus" scoped>
.business
  color #666
  font-size 15px
  .banner
    width 100%
    height 30.73vw
    background url("banner_bg.jpg") no-repeat center
    background-size: 100% 100%
    display flex
    .banner-text
      flex-basis 50%
      display flex
      flex-direction column
      justify-content center
      padding-left 10%
      color: #FFF
      line-height 1.5
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
    .banner-img
      flex-basis 50%
      height 100%
      background url("banner_img.png") no-repeat center
      background-size 60% auto
  .business-main
    .section
      display flex
      align-items center
      flex-wrap wrap
      justify-content space-around
      padding 50px 0
      .section-img
        flex-basis 50%
        height 450px
        min-width 450px
      .section-text
        flex-basis 50%
        line-height 1.5
        font-size 16px
        .section-text-title
          font-size 40px
          color: #666
      &:nth-child(1)
        .section-img
          background url("section1.png") no-repeat center
          background-size: auto 90%
      &:nth-child(2)
        background #F1F1F1
        flex-direction row-reverse
        .section-img
          background url("section2.png") no-repeat center
          background-size: auto 90%
      &:nth-child(3)
        align-items center
        flex-wrap wrap
        .section-li
          height 220px
          flex-basis 33%
          max-width 360px
          min-width 250px
          .section-li-img
            width 150px
            height 150px
            margin 10px auto
          &:nth-child(1)
            .section-li-img
              background url("section3-1.png") no-repeat center
              background-size 90%
          &:nth-child(2)
            .section-li-img
              background url("section3-2.png") no-repeat center
              background-size 90%
          &:nth-child(3)
            .section-li-img
              background url("section3-3.png") no-repeat center
              background-size 90%
      &:nth-child(4)
        background #F1F1F1
        flex-direction column-reverse
        .section-img
          flex-basis 450px
          min-width 100%
          background url("section4.png") no-repeat center
          background-size: auto 90%
      &:nth-child(5)
        text-align left
        .section-text-li
          line-height 1.7
          &:before
            content '●'
            color: #076A8A
            margin-right 5px
</style>
