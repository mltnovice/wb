<template>
  <div class="queue">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">点餐排队的全新体验</span>
        <p class="banner-text-p">解决了顾客对排队状况实时把握的需求</p>
        <div class="banner-text-desc">顾客通过手机远程取号，在移动端实时显示排队状态，不用亲自来到店面取票，也无需再苦苦等待，让用户自由安排自己的时间，配合微信实时提醒功能，带给顾客全新的人性化的体验。</div>
        <img class="banner-img" src="./banner_img.jpg" alt="排队预约" width="160px" height="160px">
        <p>扫描微信二维码体验取号，预约排队。</p>
      </div>
    </div>
    <div class="queue-main">
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <p>手机用户扫微信二维码即可取号。</p>
          <p>用户也支持微信排队预约取号，大大减少用户的等待时间。</p>
          <p>同时支持现场人工取号。</p>
          <p>实时查看排队人数，做到精准排队。</p>
          <p>系统自动实时提醒，防止过号。</p>
          <p>提升排队体验的同时也积累商户的粉丝。</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <p>我们针对餐饮行业推出微信点餐产品，餐饮店家如果要提升点餐效率，</p>
          <p>增加点菜粉丝经济， 请进入 微信点餐 了解。</p>
          <p>顾客在排队同时预先手机点菜，当轮到号后，</p>
          <p>扫下桌上的自助点餐二维码即可下单到收银台和厨房，大大节省点菜时间！</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">与时俱进高效的排队系统</h2>
          <p>客户有多种方式排队，用手机扫二维码排队、店内取票排队、预约排队、公众号直接排队。</p>
          <p>客户即能享受微信排队实时查询和推送进度。</p>
          <p>商家轻松掌控排队节奏，排队更高效，更不忘吸引粉丝，营销无处不在。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Queue'
}
</script>

<style lang="stylus" scoped>
.queue
  color #666
  font-size 15px
  .banner
    width 100%
    height: 590px
    background url("banner_bg.jpg") no-repeat center
    background-size: 100% 100%
    .banner-text
      width 600px
      padding 50px 0
      margin 0 20%
      color: #FFF
      line-height 2
      text-align left
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
      .banner-text-p
        font-weight 700
        font-size 24px
      .banner-text-desc
        text-indent 2em
        padding 30px 10px
        background rgba(0, 0, 0, .5)
        border-radius 10px
      .banner-img
        display flex
        justify-content center
        margin: 20px 10px
  .queue-main
    .section
      display flex
      align-items center
      flex-wrap wrap
      justify-content space-around
      padding 50px 0
      .section-img
        flex-basis 50%
        height 300px
        min-width 450px
      .section-text
        flex-basis 50%
        line-height 2
        font-size 16px
        .section-text-title
          font-size 40px
          color: #666
          line-height 1
      &:nth-child(1)
        .section-img
          background url("section1.png") no-repeat right
          background-size: auto 90%
      &:nth-child(2)
        background #F1F1F1
        flex-direction row-reverse
        .section-img
          background url("section2.png") no-repeat center
          background-size: auto 90%
        .section-text
          text-align right
      &:nth-child(3)
        flex-direction column-reverse
        .section-img
          flex-basis 450px
          min-width 100%
          background url("section3.jpg") no-repeat center
          background-size: auto 100%
</style>
