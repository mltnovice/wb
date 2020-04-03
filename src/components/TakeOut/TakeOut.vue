<template>
  <div class="takeOut">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">外卖平台接单系统</span>
        <p class="banner-text-p">《美食专家》餐饮软件，已全面对接"饿了么"，"美团外卖"外卖订餐接口</p>
        <p class="banner-text-p">一站式智能接单打单服务系统，快让线上订单自动飞到店里来</p>
      </div>
      <div class="banner-img"></div>
    </div>
    <div class="takeOut-main">
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">支持美团外卖与饿了么外卖</h2>
          <p>实时监控2大平台订单信息</p>
          <p>能自动接单、打印送出单、通知厨房</p>
          <p>能自动写入交易，来自订餐平台的顾客转化为熟客</p>
          <p>方便商户深度挖掘潜在客户的价值</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">实时监控订单</h2>
          <p>可手动或自动接单</p>
          <p>厨房打印菜品明细,大厨看单下菜</p>
          <p>小票打印地址、外送号码，方便骑手小哥对应取餐</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">营销立即生效</h2>
          <p>地址等自动导入美食专家或云专家SAAS系统</p>
          <p>店家可将营销手段渗透其中，或可摆脱平台高额提成收取</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakeOut'
}
</script>

<style lang="stylus" scoped>
.takeOut
  color #666
  font-size 15px
  .banner
    width 100%
    height 30.7vw
    background url("./banner_bg.png") no-repeat center
    background-size: auto 100%
    position relative
    .banner-text
      position absolute
      top: 50%
      left: 15%
      transform translateY(-50%)
      color: #FFF
      font-size 18px
      line-height 2
      text-align left
      background rgba(0, 0, 0, .5)
      padding 20px
      .banner-text-title
        margin-bottom: 10px
        font-size 24px
        font-weight 700
        line-height 1
        color #fedaaf
  .takeOut-main
    .section
      display flex
      align-items center
      flex-wrap wrap
      justify-content space-around
      padding 50px 0
      .section-img
        flex-basis 40%
        height 350px
        min-width 450px
        margin: 0 5%
      .section-text
        flex-basis 40%
        line-height 1.5
        font-size 16px
        padding: 0 5%
        .section-text-title
          font-size 40px
          padding 10px 0
          margin 0
          color: #666
      &:nth-child(1)
        background #F1F1F1
        text-align left
        .section-img
          background url("section1.png") no-repeat right
          background-size: auto 90%
      &:nth-child(2)
        flex-direction row-reverse
        text-align right
        .section-img
          background url("section2.png") no-repeat left
          background-size: auto 90%
      &:nth-child(3)
        background #F1F1F1
        text-align left
        .section-img
          background url("section3.png") no-repeat right
          background-size: auto 90%
@media (max-width: 1280px)
  .takeOut
    .takeOut-main
      .section
        padding 20px 0
        &:nth-child(1), &:nth-child(2), &:nth-child(3)
          text-align center
          .section-img
            background-position center
@media (max-width: 860px)
  .takeOut
    .banner
      .banner-text
        background transparent
        text-align center
        left 50%
        transform translate(-50%, -50%)
        width 90%
        .banner-text-p
          display none
        .banner-text-title
          font-size 32px
          line-height 1
    .takeOut-main
      .section
        .section-text
          flex-basis 80%
          .section-text-title
            font-size 28px
@media (max-width: 490px)
  .takeOut
    .banner
      height 150px
    .takeOut-main
      .section
        padding 15px 0
        .section-img
          flex-basis 100%
          height 77.3vw
          min-width 300px
        .section-text
          flex-basis 100%
</style>
