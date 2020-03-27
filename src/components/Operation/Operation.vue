<template>
  <div class="operation">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">老板报表</span>
        <p>针对老板在家里、出差或旅游时无法实时监控门店营运情况，专门推出的新一代智能手机查询系统。</p>
        <p>“老板报表”通过与美食专家、商业专家软件产品无缝结合，使管理者通过智能移动平台即可实时掌握门店的营业情况，</p>
        <p>查看关键的销售数据，极大改善领导决策的迟滞性，保证公司营运顺畅，提升管理效率和企业竞争力。</p>
        <p>赶紧扫描二维码下载来掌握营业情况吧！</p>
        <div class="banner-img">
          <img src="./ios.png" width="160px" height="160px" alt="ios下载" style="margin-right: 10px">
          <img src="./android.png" width="160px" height="160px" alt="Android下载" style="margin-left: 10px">
        </div>
      </div>
    </div>
    <div class="operation-main">
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">随时随地掌握企业销售营运情况,数据实时同步</h3>
          <p>数据报表丰富，日报，商品销售，营业收银，线性走势图，饼图一目了然</p>
          <p>根据权限可查看不同数据,适用于拥有合资门店或者采取地区代理制的连锁加盟店</p>
          <p>ios/Android系统手机均可使用</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-1.png" alt="">
            <h3 class="section-text-title">月营业走势图</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-2.png" alt="">
            <h3 class="section-text-title">畅销商品排行榜</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-3.png" alt="">
            <h3 class="section-text-title">类别销售报表</h3>
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-4.png" alt="">
            <h3 class="section-text-title">类别销售饼图</h3>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">详细的财务统计</h2>
          <p>店铺收入一目了然</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">让您对店铺经营状况了如指掌</h2>
          <p>订单统计、商品销量统计、配送统计</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">顾客统计、访问量统计</h2>
          <p>帮您掌握店铺人气</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">数据统计同步</h2>
          <p>让你可以实时查看真实数据</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h2 class="section-text-title">所有报表均可导出</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Operation'
}
</script>

<style lang="stylus" scoped>
.operation
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
      width 600px
      position absolute
      top: 10%
      right 10%
      color: #FFF
      line-height 2
      text-align left
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
      .banner-img
        margin-top: 20px
  .operation-main
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
      &:nth-child(2)
        text-align left
        .section-img
          background url("section2.png") no-repeat right
          background-size: auto 90%
      &:nth-child(3)
        flex-direction row-reverse
        background #F1F1F1
        text-align right
        .section-img
          background url("section3.png") no-repeat left
          background-size: auto 90%
      &:nth-child(4)
        text-align left
        .section-img
          background url("section4.png") no-repeat right
          background-size: auto 90%
      &:nth-child(5)
        flex-direction row-reverse
        background #F1F1F1
        text-align right
        .section-img
          background url("section5.png") no-repeat left
          background-size: auto 90%
      &:nth-child(6)
        text-align left
        .section-img
          background url("section6.png") no-repeat right
          background-size: auto 90%
</style>
