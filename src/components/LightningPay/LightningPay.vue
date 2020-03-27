<template>
  <div class="lightningPay">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">秒付</span>
        <p>支持移动支付 结算更简单</p>
        <img src="./banner_img.png" alt="" class="banner-img">
      </div>
    </div>
    <div class="lightningPay-main">
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">移动支付,让收款更便捷</h3>
          <p>《美食专家》餐饮软件 /《商业专家》零售软件已全面打通支付宝和微信支付接口，</p>
          <p>前台界面新增“支付宝”和“微信支付”付款方式，实现手机支付宝和微信扫码付款。</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-1.png" alt="">
            <h3 class="section-text-title">支付宝扫码结账界面</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-2.png" alt="">
            <h3 class="section-text-title">微信扫码结账界面</h3>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">支付场景</h3>
          <p>支付宝和微信扫码支付分2种场景，可在后台添加付款方式时约定好二维码支付还是条码支付。</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section2-1.png" alt="">
            <p>预打账单，并获取二维码</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section2-2.png" alt="">
            <p>打印出二维码，供顾客扫描支付</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section2-3.png" alt="">
            <p>点餐时，收银员扫描顾客的支付宝或者微信的付款码即刻扣款，再用餐</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section2-4.png" alt="">
            <p>会员充值时亦可扫描付款码实现支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LightningPay'
}
</script>

<style lang="stylus" scoped>
.lightningPay
  color #666
  font-size 15px
  .banner
    width 100%
    height 590px
    min-height 450px
    background url("banner_bg.png") no-repeat center
    background-size: auto 100%
    position relative
    .banner-text
      position absolute
      padding 20px
      top: 50%
      transform translateY(-50%)
      right 10%
      color: #FFF
      font-size 24px
      line-height 1.5
      text-align left
      border-radius 4px
      background rgba(0, 0, 0, .5)
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
      .banner-img
        margin-top: 20px
  .lightningPay-main
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
      .section-img-wrapper
        display flex
        flex-wrap wrap
        justify-content space-around
        padding-left 5%
        margin 10px 5%
        .section-img-li
          flex-basis 25%
          max-width 25%
          min-width 200px
          padding-right 5%
          box-sizing border-box
          line-height 2
          .section-text-title
            padding 0
            margin 0
            font-size 28px
          .section-img-li-img
            width 100%
            border-radius 10px
</style>
