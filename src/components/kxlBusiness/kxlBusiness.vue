<template>
  <div class="queue">
    <div class="banner">
      <div class="banner-text-half">
        <span class="banner-text-title">客享来--商业版</span>
        <p class="banner-text-p">"客享来--商业版"是全新打造的SaaS互联网产品
          共享千万商品库的大数据融合，覆盖多业态/多场景，真正实现商业管理系统的互通互联
          实现企业高效管理、成本降低的根本目标</p>
      </div>
      <div class="banner-img-half"></div>
    </div>
    <div class="queue-main">
      <div class="summary">
        <h2 class="summary-title">商超行业支持多种模式</h2>
        <div class="summary-icons">
          <div class="summary-icon">
            <img class="summary-icon-img" src="./syms-sc.png" alt="中小商超"/>
            <p class="summary-icon-text">中小商超</p>
          </div>
          <div class="summary-icon">
            <img class="summary-icon-img" src="./syms-bld.png" alt="便利店"/>
            <p class="summary-icon-text">便利店</p>
          </div>
          <div class="summary-icon">
            <img class="summary-icon-img" src="./syms-lf.png" alt="量贩店"/>
            <p class="summary-icon-text">量贩店</p>
          </div>
          <div class="summary-icon">
            <img class="summary-icon-img" src="./syms-zmd.png" alt="专卖店"/>
            <p class="summary-icon-text">专卖店</p>
          </div>
          <div class="summary-icon">
            <img class="summary-icon-img" src="./syms-rh.png" alt="洗化店"/>
            <p class="summary-icon-text">洗化店</p>
          </div>
          <div class="summary-icon">
            <img class="summary-icon-img" src="./syms-qt.png" alt="其它行业"/>
            <p class="summary-icon-text">其它行业</p>
          </div>
        </div>
      </div>
      <div>
        <div class="section">
          <div class="section-img"></div>
          <div class="section-text">
            <p class="section-text-title">全新界面</p>
            <p>界面清新，全新设计</p>
            <p>功能齐全，超越旧版，化繁为简</p>
            <p>操作简便，一学就会，商户傻瓜式快速上手</p>
          </div>
        </div>
        <div class="section">
          <div class="section-img"></div>
          <div class="section-text">
            <p class="section-text-title">在线商品库</p>
            <p>内置千万级商品库，自动调用商品名称、提供参考成本、参考销售价格</p>
            <p>前台直接扫描商品条码即可即时添加商品</p>
          </div>
        </div>
        <div class="section">
          <div class="section-img"></div>
          <div class="section-text">
            <p class="section-text-title">预包装设置</p>
            <p>无条码商品可自定义条码</p>
            <p>生鲜商品称重后打印标签，上货架摆放销售，可节省一台条码秤</p>
          </div>
        </div>
        <div class="section">
          <div class="section-text">
            <p class="section-text-title-bold">更多线上功能</p>
            <p>客享来--商业版除去零售基本应用外还新增了许多线上功能，为商家打造全新商业生态圈，真正实现“商业工具”的理念。</p>
          </div>
        </div>
        <div class="section">
          <div class="section-imgs">
            <img class="section-img-li" src="./section4-1.jpg" alt="">
            <img class="section-img-li" src="./section4-2.jpg" alt="">
          </div>
          <div class="section-text">
            <p class="section-text-title">微商城</p>
            <p>小程序商城</p>
            <p>自提--可实现客户自助收银</p>
            <p>配送--自营外卖，可对接第三方配送平台</p>
          </div>
        </div>
        <div class="section">
          <div class="section-imgs">
            <img class="section-img-li exImg" src="./section5-1.jpg" alt="">
            <img class="section-img-li" src="./section5-2.jpg" alt="">
          </div>
          <div class="section-text">
            <p class="section-text-title">要货专家</p>
            <p>分店要货小程序</p>
            <p>门店要货申请</p>
            <p>要货订单管理</p>
            <p>订单支付...</p>
          </div>
        </div>
        <div class="section">
          <div class="section-imgs">
            <img class="section-img-li" src="./section6-1.jpg" alt="">
            <img class="section-img-li" src="./section6-2.jpg" alt="">
          </div>
          <div class="section-text">
            <p class="section-text-title">老板助手</p>
            <p>老板的收银云管家</p>
            <p>实时报表(销售、会员、库存、收款统计...)</p>
            <p>业务数据分析</p>
            <p>异常订单监控</p>
          </div>
        </div>
        <div class="section">
          <div class="section-text">
            <p class="section-text-title-bold">敬请期待。。。</p>
            <p>客享来更多功能正在持续更新中 ...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kxlBusiness'
}
</script>

<style lang="stylus" scoped>
  .queue
    color #666
    font-size 15px
    .banner
      width 100%
      height: 30.7vw
      background url("banner_bg.jpg") no-repeat center
      background-size: 100% 100%
      display flex
      .banner-bg
        width: 100%
        padding-bottom: 30.7%
        display flex
      .banner-text-half
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

      .banner-img-half
        flex-basis 50%
        height 100%
        background url("banner_img.png") no-repeat center
        background-size 60% auto
    .queue-main
      .summary
        max-width 1280px
        margin 0 auto 40px
        color: #707981

        .summary-title
          font-size 24px
          margin 20px 0 10px

        .summary-icons
          display flex
          justify-content space-around
          align-items center
          flex-wrap wrap

          .summary-icon
            margin 10px 20px

          .summary-icon-img
            height 80px
            width 80px
      .section
        display flex
        align-items center
        flex-wrap wrap
        justify-content space-around
        padding 40px 0
        .section-img
          flex-basis 50%
          height 500px
          min-width 320px
        .section-imgs
          width 50%
          height 800px
          display flex
          align-items center
          justify-content space-around
          .section-img-li
            height 90%
          .exImg
            width 250px
            height 250px
        .section-text
          flex-basis 50%
          line-height 2
          font-size 16px
          .section-text-title
            margin 0
            font-size 40px
            color: #666
            line-height 2
          .section-text-title-bold
            font-size 22px
            font-weight 700
        &:nth-child(1)
          .section-img
            background url("section1.png") no-repeat right
            background-size: auto 90%
        &:nth-child(2)
          .section-img
            background url("section2.png") no-repeat center
            background-size: auto 90%
        &:nth-child(3)
          .section-img
            background url("section3.png") no-repeat center
            background-size: auto 90%
        &:nth-child(5)
          .section-img
            background url("section4-1.jpg") no-repeat 35% 50%, url("section4-2.jpg") no-repeat 100% 50%
            background-size: auto 90%
        &:nth-child(odd)
          background #F1F1F1
        &:nth-child(even)
          flex-direction row-reverse
  @media (max-width: 1725px)
    .queue
      .queue-main
        .section
          &:nth-child(1), &:nth-child(2), &:nth-child(3)
            .section-img
              background-size: 90% auto
          &:nth-child(5), &:nth-child(6), &:nth-child(7)
            flex-direction column-reverse
  @media (max-width: 1280px)
    .queue
      .queue-main
        .section
          padding 10px 0
          &:nth-child(5), &:nth-child(6), &:nth-child(7)
            .section-imgs
              height 500px
          &:nth-child(1), &:nth-child(2), &:nth-child(3)
            .section-img
              background-size: 90% auto
          .section-text
            .section-text-title
              font-size 28px
  @media (max-width: 900px)
    .queue
      .banner
        .banner-text-title
          font-size 28px
      .queue-main
        .section
          &:nth-child(1), &:nth-child(2), &:nth-child(3)
            flex-direction column-reverse
            height 400px
            justify-content center
            .section-img
              height 300px
            .section-text
              flex-basis auto
          &:nth-child(5), &:nth-child(6), &:nth-child(7)
            .section-imgs
              height 400px
              .exImg
                width 200px
                height 200px
  @media (max-width: 650px)
    .queue
      .banner
        .banner-text-title
          font-size 18px
        .banner-text-p
          font-size 12px
      .queue-main
        .section
          &:nth-child(5), &:nth-child(6), &:nth-child(7)
            .section-imgs
              height 300px
              .exImg
                width 150px
                height 150px
  @media (max-width: 490px)
    .queue
      .banner
        height 150px
        .banner-text-title
          font-size 15px
        .banner-text-p
          font-size 10px
</style>
