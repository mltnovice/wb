<template>
  <div class="weChat">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">微信点餐</span>
        <p class="banner-text-p">智能手机一代又迭代，互联网的商业模式也一遍又一遍的革新，丰富、智能了我们的日常生活。</p>
        <p class="banner-text-p">使用手机点餐、扫码点餐、扫码支付，这已经是生活中的消费常态。</p>
        <p class="banner-text-p">商户建立自己的微信公众服务号，配合建立微网站。</p>
        <p class="banner-text-p">微网站（含微商城）和实体店餐饮软件对接，实现线上线下完美结合。</p>
        <p class="banner-text-p">客户对微信的依赖性，粘性，互动性很强，微信的可拓展性也相当强。</p>
        <p class="banner-text-p">顾客关注商户的服务号，即可在微信里点餐，预定，下单，消费查询乃至支付等等。</p>
        <p class="banner-text-p">大大节省人力成本，提升翻台率，减少排队。</p>
        <p class="banner-text-p">是一种目前看来比较完美的O2O模式</p>
      </div>
      <div class="banner-img"></div>
    </div>
    <div class="weChat-main">
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">订单可直接打印到厨房</h2>
          <p>▪ 商品详情、桌号、用餐人数、顾客备注等一目了然</p>
          <p>▪ 紧紧抓住数亿手机及微信用户，移动点餐，时尚</p>
          <p>▪ 随时，随地，随意，随心，微信点餐，高效</p>
          <p>▪ 经测算，点餐时间，翻台率可提高20%</p>
          <p>▪ 完全取代传统点菜宝，触摸屏pos机，节约</p>
          <p>▪ 线上手机预定下单，线下餐饮软件无缝对接，完美</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">玩转多种营销活动</h2>
          <p>顾客通过微信可查询自己的历史消费记录</p>
          <p>也可查询储值卡余额变动情况</p>
          <p>支持打折、优惠、满减优惠、满送优惠券等多种玩法</p>
          <p>商户可提供各种互动节目、如刮刮乐、大转盘、笑话、</p>
          <p>有奖猜谜、促销信息推送、积分兑换等</p>
          <p>商户可开放顾客就餐体验反馈，对菜品和服务进行点评，</p>
          <p>有利于改进菜品，提升管理水平</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">顾客下单自动关注成为微信粉丝</h2>
          <p>将客户从线下引流到线上</p>
          <p>顾客可将体验进一步分享给微博，微信等好友，</p>
          <p>利用移动互联网最为广泛的替商户宣传</p>
        </div>
      </div>
      <div class="section">
        <div class="section-li">
          <div class="section-li-img"></div>
          <h3>多种实时接单方式</h3>
          <p>支持无线打印机、手机app、智能收银机等多种方式接收订单、方便及时</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <h3>多种支付方式</h3>
          <p>支持会员支付、微信支付、现金支付等多种支付方式</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <h3>多店铺管理</h3>
          <p>支持连锁店，支持与外卖店铺数据同步，支持多店独立设置。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeChat'
}
</script>

<style lang="stylus" scoped>
.weChat
  color #666
  font-size 15px
  .banner
    width 100%
    height 30.7vw
    background url("./banner_bg.png") no-repeat center
    background-size: 100% 100%
    position relative
    .banner-text
      position absolute
      top: 50%
      transform translateY(-50%)
      padding-left 10%
      color: #FFF
      line-height 2
      text-align left
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
  .weChat-main
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
          color: #666
          margin 0
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
      &:nth-child(4)
        align-items center
        flex-wrap wrap
        .section-li
          height 280px
          flex-basis 33%
          max-width 360px
          min-width 250px
          line-height 1.7
          .section-li-img
            width 150px
            height 150px
            margin 10px auto
          &:nth-child(1)
            .section-li-img
              background url("section4-1.png") no-repeat center
              background-size 90%
          &:nth-child(2)
            .section-li-img
              background url("section4-2.png") no-repeat center
              background-size 90%
          &:nth-child(3)
            .section-li-img
              background url("section4-3.png") no-repeat center
              background-size 90%
      &:nth-child(3)
        text-align left
        background #F1F1F1
        .section-img
          background url("section3.png") no-repeat right
          background-size: auto 90%
@media (max-width: 1280px)
  .weChat
    .banner
      .banner-text
        left 50%
        transform translate(-50%, -50%)
        padding 20px
        box-sizing border-box
        line-height 1.7
        white-space: nowrap
        .banner-text-title
          font-size 28px
@media (max-width: 1125px)
  .weChat
    .weChat-main
      .section
        &:nth-child(1), &:nth-child(2), &:nth-child(3)
          text-align center
          .section-img
            background-position center
@media (max-width: 860px)
  .weChat
    .banner
      .banner-text
        .banner-text-p
          display none
        .banner-text-title
          font-size 32px
    .weChat-main
      .section
        .section-text
          flex-basis 80%
          .section-text-title
            font-size 28px
@media (max-width: 490px)
  .weChat
    .banner
      height 150px
    .weChat-main
      .section
        padding 15px 0
        .section-img
          flex-basis 100%
          height 77.3vw
          min-width 300px
        .section-text
          flex-basis 100%
</style>
