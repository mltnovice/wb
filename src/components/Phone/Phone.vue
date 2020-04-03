<template>
  <div class="page">
    <div class="banner">
      <div class="banner-text">
        <div>
          <span class="banner-text-title">手机点餐</span>
          <p class="banner-text-p">店员快速响应顾客的神器多个服务员助理在餐厅同时使用，快速点单、响应顾客服务要求，替代了跟后厨的传单、出菜、上菜等沟通环节。让店员可以花更多的时间关注和服务顾客。也可提供给顾客使用，提升顾客体验，替代传统菜单。</p>
        </div>
        <div class="banner-img">
          <p>快下载服务员助理APP来体验吧！</p>
          <img src="./android_qrcode.png" width="160px" height="160px" alt="Android下载">
          android版
        </div>
      </div>
    </div>
    <div class="phone-main">
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">节约点餐时间，提升服务质量</h3>
          <p>快速点单、响应顾客服务要求</p>
          <p>让店员可以花更多的时间关注和服务顾客。</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-1.png" alt="">
            <h3 class="section-text-title">点菜</h3>
            <p>图文形式更直观</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-2.png" alt="">
            <h3 class="section-text-title">订单确认</h3>
            <p>消费明细无比详细</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-3.png" alt="">
            <h3 class="section-text-title">预打单</h3>
            <p>在正式结算前打印预结算单给顾客确认</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-4.png" alt="">
            <h3 class="section-text-title">催菜</h3>
            <p>按台桌或菜品向厨房发起催菜通知</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-img">
          <div class="section-img-text">
            <h3 class="section-img-text-title">功能特色</h3>
            <p class="section-img-text-p">让点餐更傻瓜、更简单、更美观、功能更强大</p>
            <p class="section-img-text-p">每次点单都有完整的点单、下单、制作备注管理。加菜也不会遗漏。</p>
            <p class="section-img-text-p">店员可以对菜品设置上菜状态。整单状态一目了然，有效防止菜品遗漏。</p>
            <p class="section-img-text-p">顾客可以先点单不制作（等叫），直到店员通知厨房才制作菜品（叫起）。</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">桌台管理更加便捷，支付方式丰富多样</h3>
          <p>开、关、转、并，台桌状态一目了然。方便的台桌合并／取消，支持合并下单／结算。</p>
          <p>合并台桌支持先关台后结算，提高翻台率。</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-1.png" alt="">
            <h3 class="section-text-title">桌台管理</h3>
            <p>一目了然</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-2.png" alt="">
            <h3 class="section-text-title">套餐处理</h3>
            <p>方便快捷</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-3.png" alt="">
            <h3 class="section-text-title">付款方式</h3>
            <p>丰富多样</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-4.png" alt="">
            <h3 class="section-text-title">支付结算</h3>
            <p>精确无误</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phone'
}
</script>

<style lang="stylus" scoped>
@import "../../assets/common/stylus/common.styl"
  .banner
    background url("banner_bg.jpg") no-repeat center
    background-size: auto 100%
    .banner-text
      margin 10px 10px 10px auto
      width 600px
      padding 30px 0
      display flex
      flex-direction column
      justify-content center
      color: #FFF
      line-height 2
      font-size 18px
      text-align left
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
      .banner-img
        display inline-block
        width 160px
        text-align center
        margin-top: 20px
        line-height: 1
  .section
    padding 20px 0
    .section-text
      line-height 1.7
      padding 20px 0
    .section-text-title
      font-size 30px
      padding 20px 0
      line-height 1
      margin 0
    .section-img-wrapper
      display flex
      flex-wrap wrap
      justify-content space-around
      padding-left 5%
      margin 0 5%
      .section-img-li
        flex-basis 25%
        max-width 25%
        min-width 200px
        padding-right 5%
        box-sizing border-box
        line-height 2
        .section-img-li-img
          width 100%
          border-radius 10px
    .section-img
      height 550px
      padding-top 1.5%
      background url("./section2.jpg") no-repeat center
      text-align right
      position relative
      .section-img-text
        position absolute
        top: 50%
        right 10%
        transform translateY(-50%)
        padding 20px
        box-sizing border-box
        width 320px
        background rgba(0, 0, 0, .5)
        color: #FFF
        font-weight 700
        font-size 20px
        line-height 1.7
        text-align left
        .section-img-text-title
          font-size 30px
          margin 0
        .section-img-text-p
          padding 10px 0
@media (max-width: 1690px)
  .banner
    .banner-text
      flex-direction row
      align-items center
@media (max-width: 1280px)
  .banner
    .banner-text
      font-size 14px
      background rgba(0,0,0,.5)
      border-radius 6px
      padding 20px
      .banner-text-title
        font-size 28px
@media (max-width: 750px)
  .banner
    .banner-text
      font-size 12px
      .banner-img
        display none
  .section
    padding 5px 0
    .section-text-title
      font-size 22px
      margin 0
      padding 5px 0
    .section-img
      height 100vw
      max-height 400px
      .section-img-text
        font-size 16px
        right 50%
        transform translate(50%, -50%)
        .section-img-text-title
          font-size 20px
        .section-img-text-p
          padding 3px 0
@media (max-width: 560px)
  .banner
    .banner-text
      background transparent
      .banner-text-title
        font-size 32px
      .banner-text-p
        display none
</style>
