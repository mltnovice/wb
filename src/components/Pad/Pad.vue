<template>
  <div class="pad">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">iPad/Android平板点餐</span>
        <p class="banner-text-p">电子菜谱以声，色，图，文，互动性为一体，又可以让顾客自助点餐，成为替代传统纸质菜谱的上佳选择，替餐厅大大节省服务员人力成本。顾客的体验感得以加强，餐厅的档次亦得以提升。</p>
        <div class="banner-img">
          <p>扫描二维码下载APP体验奇妙的点餐之旅</p>
          <div>
            <img src="./ios_qrcode.png" width="160px" height="160px" alt="ios下载" style="margin-right: 10px">
            <img src="./Android_qrcode.png" width="160px" height="160px" alt="Android下载" style="margin-left: 10px">
          </div>
        </div>
      </div>
    </div>
    <div class="pad-main">
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">就餐从此优雅</h3>
          <p>顾客端iPad电子菜单，可实现点菜、下单、呼叫服务、付款，固定每桌一台iPad效果更佳！</p>
        </div>
        <img src="./section1.png" width="80%" height="80%" alt="">
      </div>
      <div class="section">
        <div class="section-text-wrapper">
          <div class="section-text">
            <h3 class="section-text-title">方便</h3>
            <p>自助点餐怡然自得<br>图文并茂生动形象</p>
          </div>
          <div class="section-text">
            <h3 class="section-text-title">酷炫</h3>
            <p>一点美味就会来<br>随呼随到服务生<br>傻瓜界面超简单</p>
          </div>
          <div class="section-text">
            <h3 class="section-text-title">酷炫</h3>
            <p>高端大气上档次<br>奢华智能惹人爱</p>
          </div>
        </div>
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
          <h3 class="section-text-title">电视点餐</h3>
          <p>电视点餐系统是利用增加安卓的电视盒，使得电视机不仅仅可以看电视节目，</p>
          <p>还可用于顾客自助点餐，给顾客愉快的就餐体验，也节约了人力成本和菜单制作成本。</p>
          <p>功能十分丰富，一切以顾客体验为中心设计。</p>
        </div>
        <img src="./section3.png" width="80%" height="80%" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pad'
}
</script>

<style lang="stylus" scoped>
.pad
  color #666
  font-size 15px
  .banner
    width 100%
    height 30.73vw
    background url("banner_bg.jpg") no-repeat center
    background-size: auto 100%
    .banner-text
      padding 50px 0
      margin 0 auto
      display flex
      flex-direction column
      justify-content center
      color: #FFF
      line-height 1.7
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
      .banner-img
        display flex
        flex-direction column
        justify-content center
        margin-top: 20px
  .section
    .section-text
      line-height 1.7
      padding 20px 0
      .section-text-title
        font-size 30px
        padding 20px 0
        margin 0
    &:nth-child(2)
      color: #e56534
      .section-text-wrapper
        display flex
        justify-content space-around
        flex-wrap wrap
        .section-text
          display flex
          align-items center
          font-size 18px
          line-height 35px
          .section-text-title
            padding 0 20px
            line-height 1.2
            font-size 46px
    .section-img
      height 600px
      padding-top 1.5%
      background url("./section2.jpg") no-repeat center
      .section-img-text
        margin 0 0 0 10%
        padding 20px
        box-sizing border-box
        width 450px
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
@media (max-width: 1280px)
  .pad
    .banner
      position relative
      .banner-text
        position absolute
        top: 50%
        left 50%
        width 80%
        transform translate(-50%, -50%)
        font-size 14px
        background rgba(0,0,0,.5)
        border-radius 6px
        padding 20px
        .banner-text-title
          margin 0
          font-size 28px
        .banner-img
          display none
@media (max-width: 560px)
  .pad
    .banner
      .banner-text
        background transparent
        .banner-text-title
          font-size 32px
        .banner-text-p
          display none
    .pad-main
      .section
        .section-img
          position relative
          .section-img-text
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            margin 0
            height auto
            width 320px
            font-size 16px
            .section-img-text-title
              font-size 20px
        .section-text
          line-height 1.7
          .section-text-title
            padding 0
            font-size 22px
@media (max-width: 490px)
  .pad
    .banner
      height 150px
</style>
