<template>
  <div class="member">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">微信会员，让顾客离你更近</span>
        <p>顾客自助快捷获得会员资格，享受门店会员权利</p>
        <p>消费时无需携带实体卡，屏幕显示图片即可，方便</p>
        <p>顾客可自行用支付宝给自己虚拟会员卡充值，去收银台可扣款</p>
        <p>商户可在后台无限制推送任何信息给会员们</p>
        <p>商户可在后台发送优惠券给会员们，收银台买单可直接抵扣菜金</p>
      </div>
      <div class="banner-img"></div>
    </div>
    <div class="member-main">
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">支持在线开通微信会员</h2>
          <p>微信实时查看会员余额和消费记录</p>
        </div>
      </div>
      <div class="section">
        <div class="section-li">
          <div class="section-li-img"></div>
          <h3>会员信息全记录</h3>
          <p>会员姓名、电话、地址、性别、生日、交易次数等信息详细记录</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <h3>支持在线支付充值</h3>
          <p>实体会员卡可与微信会员卡绑定，同步充值，共享余额</p>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">完美融合微信卡券、微信会员卡</h3>
          <p>资料智能复用，免填写，秒激活</p>
          <p>通过公众号，卡券入口，扫码均可查找</p>
          <p>未关注用户也不会错过通知</p>
          <p>大数据分析，成本投入更精准</p>
          <p>解决了传统营销方式单一，难以沉淀粉丝，会员留存困难的问题</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-1.png" alt="">
            <h3 class="section-text-title">会员中心</h3>
            <p>高曝光 高转化</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-2.png" alt="">
            <h3 class="section-text-title">会员订单</h3>
            <p>会员订单明细记录</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-3.png" alt="">
            <h3 class="section-text-title">会员储值</h3>
            <p>会员储值帮助商户快速聚集会员回笼资金</p>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-4.png" alt="">
            <h3 class="section-text-title">会员优惠券</h3>
            <p>社交营销 以老带新</p>
          </div>
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
          <h2 class="section-text-title">详细而清晰的会员统计</h2>
          <p>追踪会员充值、消费、活跃度情况</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member'
}
</script>

<style lang="stylus" scoped>
.member
  color #666
  font-size 15px
  .banner
    width 100%
    height 590px
    background url("./banner_bg.png") no-repeat center
    background-size: 100% 100%
    position relative
    .banner-text
      position absolute
      top: 50%
      right: 15%
      transform translateY(-80%)
      padding 10px 20px
      width 600px
      color: #FFF
      font-size 18px
      line-height 2
      text-align left
      border-radius 4px
      background rgba(0, 0, 0, .5)
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
  .member-main
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
        align-items center
        flex-wrap wrap
        .section-li
          height 280px
          flex-basis 45%
          max-width 360px
          min-width 250px
          line-height 1.7
          .section-li-img
            width 150px
            height 150px
            margin 10px auto
          &:nth-child(1)
            .section-li-img
              background url("section2-1.png") no-repeat center
              background-size 90%
          &:nth-child(2)
            .section-li-img
              background url("section2-2.png") no-repeat center
              background-size 90%
      &:nth-child(3)
        background #F1F1F1
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
              font-size 32px
            .section-img-li-img
              width 100%
              border-radius 10px
      &:nth-child(4)
        text-align right
        flex-direction row-reverse
        .section-img
          background url("section4.png") no-repeat left
          background-size: auto 90%
      &:nth-child(5)
        text-align left
        background #F1F1F1
        .section-img
          background url("section5.png") no-repeat right
          background-size: auto 90%
</style>
