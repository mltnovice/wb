<template>
  <div class="applets">
    <div class="banner"></div>
    <div class="applets-main">
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">功能概述</h3>
          <div class="fun-detail">
            <div class="fun-detail-li">
              <img src="./section1-icon1.png" alt="" class="icon">
              <span>提供简单便捷的点餐</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon2.png" alt="" class="icon">
              <span>与收银系统连通的会员</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon3.png" alt="" class="icon">
              <span>提供定位服务</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon4.png" alt="" class="icon">
              <span>多种会员营销功能</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon5.png" alt="" class="icon">
              <span>储物柜功能</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon6.png" alt="" class="icon">
              <span>可使用移动支付功能</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon7.png" alt="" class="icon">
              <span>可设置做法，沽清等</span>
            </div>
            <div class="fun-detail-li">
              <img src="./section1-icon8.png" alt="" class="icon">
              <span>可对接第三方配送平台</span>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section2.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">小程序点餐</h3>
          <p class="section-text-desc">提供简洁，方便并且与收银系统前台标准化对接的点餐功能</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section3.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">小程序会员、营销</h3>
          <p class="section-text-desc">可以在小程序中使用会员折扣、会员充值、会员营销等功能</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section4.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">定位</h3>
          <p class="section-text-desc">进入小程序后，自动定位到里自己最近的已经门店，可以导航前往。还可以选择其他门店
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section5.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">小程序储物柜</h3>
          <p class="section-text-desc">储物柜可以存储赠送的酒或是其他的商品，需要兑换是可以方便兑换</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section6.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">支持对接移动支付</h3>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section7-1.png" alt="">
            <img class="section-img-li-img" src="./section7-2.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">沽清与做法规格</h3>
          <p class="section-text-desc">支持与收银系统前台同步沽清、可设置多种品项做法与规格的设置</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section8.png" alt="">
          </div>
        </div>
        <div class="section-text">
          <h3 class="section-text-title">对接达达快送</h3>
          <p class="section-text-desc">商家如不想自己送可以通过咱们系统对接达达快送，一键呼叫达达</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img style="max-width: 100%" class="section-img-li-img" src="./section9.png" alt="">
          </div>
        </div>
      </div>
      <div class="section">
        <span class="section-title">应用场景</span>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img style="max-width: 100%" class="section-img-li-img" src="./section10.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Applets'
}
</script>

<style lang="stylus" scoped>
.applets
  color #666
  font-size 15px

  .banner
    width 100%
    height 30.7vw
    background url("./banner.png") no-repeat center
    background-size: 100% 100%
    position relative
  .applets-main
    max-width 1280px
    margin 0 auto
  .section
    display flex
    align-items center
    flex-wrap wrap
    justify-content space-around
    padding 50px 0
    .section-img-wrapper
      flex-basis 50%
      .section-img-li-img
        max-width 100%
    .section-text
      padding 0
      text-align left
      flex-basis 50%
      .section-text-title
        position relative
        line-height 100px
        text-indent 100px
        font-size 40px
        &:before
          content: ''
          font-size 46px
          line-height 3
          text-indent 100px
          position absolute
          width 100px
          height 100px
          top: 0
          left: 0
        &:after
          content ''
          position absolute
          left 100px
          bottom 0
          width 80px
          border-bottom 8px solid
      .section-text-desc
        padding 100px 0
        font-size 24px
        color: #666
    &:nth-child(even)
      flex-direction row-reverse
    &:nth-child(1)
      .section-text
        flex-basis 50%
        padding 0
        text-align left
        .fun-detail
          display flex
          flex-wrap wrap
          font-size 18px
          .fun-detail-li
            flex-basis 50%
            margin 8px 0
            display flex
            align-items center
            .icon
              width 75px
              height 75px
              margin-right 8px
    &:nth-child(2)
      .section-text
        .section-text-title
          color: #2f5597
          &:before
            background: url("./section2-icon.png") no-repeat
            background-size 100%
    &:nth-child(3)
      .section-text
        .section-text-title
          &:before
            background: url("./section3-icon.png") no-repeat
            background-size 100%
    &:nth-child(4)
      .section-text
        .section-text-title
          color: #5b9bd5
          &:before
            background: url("./section4-icon.png") no-repeat
            background-size 100%
    &:nth-child(5)
      .section-text
        .section-text-title
          color: #f00
          &:before
            background: url("./section5-icon.png") no-repeat
            background-size 100%
    &:nth-child(6)
      .section-text
        .section-text-title
          color: #5b9bd5
          &:before
            background: url("./section6-icon.png") no-repeat
            background-size 100%
    &:nth-child(7)
      .section-text
        .section-text-title
          &:before
            background: url("./section7-icon.png") no-repeat
            background-size 100%
    &:nth-child(8)
      .section-img-wrapper
        max-width 50%
      .section-text
        max-width 50%
        .section-text-title
          &:before
            background: url("./section8-icon.png") no-repeat
            background-size 100%
    &:nth-child(9)
      margin-left: calc((1280px - 100vw) / 2)
      margin-right: calc((1280px - 100vw) / 2)
      background-image: linear-gradient(#0092ba, #00a99f)
      .section-img-wrapper
        max-width 100%
        flex-basis 100%
    &:nth-child(10)
      margin-left: calc((1280px - 100vw) / 2)
      margin-right: calc((1280px - 100vw) / 2)
      padding-bottom 0
      .section-title
        font-size 40px
        margin 40px 0
      .section-img-wrapper
        padding 0 !important
        max-width 100% !important
        flex-basis 100%
@media (max-width: 1380px)
  .applets
    .applets-main
      .section
        .section-img-wrapper
          padding 0 5%
          max-width 40%
        .section-text
          padding 0 5%
          flex-basis 40%
@media (max-width: 1280px)
  .applets
    .applets-main
      .section
        &:nth-child(9), &:nth-child(10)
          margin-left: 0
          margin-right: 0
@media (max-width: 900px)
  .applets
    .applets-main
      .section
        padding-top 0
        flex-direction column-reverse
        &:last-child
          flex-direction column
        .section-text
          width 100%
          box-sizing border-box
          .section-text-title
            margin-bottom 0
          .section-text-desc
            padding 20px 0
        .section-img-wrapper, .section-text
          flex-basis 100%
          max-width 100%
@media (max-width: 639px)
  .applets
    .applets-main
      .section
        .section-text
          font-size 10px
          .section-text-title
            position relative
            line-height 2.5em
            text-indent 2.5em
            font-size 1.8em
            &:before
              font-size 1em
              width 2.5em
              height 2.5em
            &:after
              font-size 1em
              left 2.5em
              width 2.5em
              border-bottom 2px solid
          .section-text-desc
            font-size 1.4em
        &:first-child
          .section-text
            .section-text-title
              text-indent 0
            .fun-detail
              font-size 1.4em
              .fun-detail-li
                .icon
                  width 3.5em
                  height 3.5em
        &:last-child
          font-size 10px
          .section-title
            margin 1em 0
            font-size 1.8em
</style>
