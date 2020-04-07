<template>
  <div class="code">
    <div class="banner">
      <div class="banner-text">
        <div>
          <span class="banner-text-title">一码多用</span>
          <p class="banner-text-p">餐厅每张餐台上都可放置二维码图片供食客扫描点餐,餐桌上的每位客人都可以各自用手机共同浏览菜品图片，一起参与点餐下单后服务员收到订单，同食客确认后发送到厨房，避免错单、漏单,中途食客可任意加菜、增加了随意点餐的乐趣，提高餐厅营业额</p>
        </div>
        <div class="banner-img">
          <p>赶紧扫描二维码，来体验吧！</p>
          <img src="./banner_img.jpg" width="160px" height="160px" alt="">
        </div>
      </div>
    </div>
    <div class="code-main">
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">二维码点餐的优势</h3>
          <p>顾客可以扫描二维码直接进入点餐，无需安装客户端，方便快捷</p>
          <p>让顾客自己点，自己玩，把顾客的手机为我所用，降低餐厅的设备成本</p>
          <p>服务员无须守在顾客旁边等待点餐，可以更好地为他人服务，节约了餐厅的人力成本</p>
          <p>新奇、时尚，数字化的餐厅，不再让所有人抢着一本菜谱，</p>
          <p>大家都可以自己扫、自己看、自己点，这种参与感一定会让顾客爱上它</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-1.png" alt="">
            <h3 class="section-text-title">一码多用主界面</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-2.png" alt="">
            <h3 class="section-text-title">点餐界面</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-3.png" alt="">
            <h3 class="section-text-title">点餐大图</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-4.png" alt="">
            <h3 class="section-text-title">多人扫码点餐</h3>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-img">
          <div class="section-img-text">
            <h3 class="section-img-text-title">功能特点</h3>
            <p class="section-img-text-p">让点餐更傻瓜、更简单、更美观、功能更强大</p>
            <p class="section-img-text-p">使商户虽人工不足仍可泰然自若，更换菜品易如反掌，服务效率极大提高，员工请假辞工不再如履薄冰</p>
            <p class="section-img-text-p">让顾客自助点餐怡然自得，边点边听悦耳音乐，边点边享受美味视觉冲击，快乐点餐，时尚达人</p>
            <i class="section-img-icon1"></i>
            <p class="section-img-text-p">支持移动支付 结算更简单</p>
            <i class="section-img-icon2"></i>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">下单快捷，付款便捷</h3>
          <p>通过将实物菜品数字化，为多种线上营销创造可能！</p>
          <p>餐厅可轻松实现线上销售，如网页订餐，手机订餐；</p>
          <p>餐厅的数字化商品，将有机会成为食客眼中的焦点。</p>
          <p>结合移动支付 结算更简单</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-1.png" alt="">
            <h3 class="section-text-title">未确认订单</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-2.png" alt="">
            <h3 class="section-text-title">确认订单</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-3.png" alt="">
            <h3 class="section-text-title">微信结算界面</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3-4.png" alt="">
            <h3 class="section-text-title">支付宝结算界面</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Code'
}
</script>

<style lang="stylus" scoped>
.code
  color #666
  font-size 15px
  .banner
    width 100%
    height 30.7vw
    min-width 150px
    background url("banner_bg.png") no-repeat center
    background-size: auto 100%
    position relative
    .banner-text
      width 600px
      padding 10px 20px
      position absolute
      top: 50%
      transform translateY(-50%)
      right 10%
      color: #FFF
      font-size 18px
      line-height 2
      text-align left
      border-radius 6px
      background rgba(0, 0, 0, .5)
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
      .banner-img
        margin-top: 20px
  .code-main
    .section
      padding 30px 0
      .section-text
        line-height 1.5
        font-size 16px
        padding: 0 5%
        .section-text-title
          font-size 40px
          padding 10px 0
          margin 0
          color: #666
      &:nth-child(1), &:nth-child(3)
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
              font-size 28px
              line-height 1.2
            .section-img-li-img
              width 100%
              border-radius 10px
      &:nth-child(2)
        color: #e56534
        padding 0
        .section-img
          height 600px
          padding-top 1.5%
          background url("./section2.png") no-repeat center
          position relative
          .section-img-text
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            padding 20px
            box-sizing border-box
            height 550px
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
            .section-img-icon1
              display block
              width 70px
              height 50px
              background url("./section2-1.png") no-repeat center
              background-size 100%
            .section-img-icon2
              display block
              width 100%
              height 50px
              background url("./section2-2.png") no-repeat left
              background-size auto 100%
@media (max-width: 1600px)
  .code
    .banner
      .banner-text
        display flex
        right 50%
        transform translate(50%, -50%)
        width 80%
        text-align center
        border-radius 6px
@media (max-width: 1280px)
  .code
    .banner
      .banner-text
        .banner-text-title
          font-size 28px
        .banner-img
          display none
    .code-main
      .section
        padding 20px 0
        &:nth-child(1), &:nth-child(3)
          .section-img-wrapper
            .section-img-li
              .section-text-title
                font-size 22px
@media (max-width: 860px)
  .code
    .banner
      .banner-text
        display block
        text-align center
        .banner-text-p
          display none
        .banner-text-title
          font-size 32px
          line-height 1
    .code-main
      .section
        .section-text
          flex-basis 80%
          .section-text-title
            font-size 28px
        &:nth-child(2)
          .section-img
            position relative
            .section-img-text
              position absolute
              left 50%
              top 50%
              transform translate(-50%, -50%)
              margin 0
              height auto
              min-width 310px
              font-size 16px
              .section-img-text-title
                font-size 20px
</style>
