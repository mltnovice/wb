<template>
  <div class="paddle">
    <div class="banner">
      <div class="banner-text">
        <span class="banner-text-title">触屏划菜系统</span>
        <p class="banner-text-p">通过划菜系统可以帮助划菜人员，按照不同维度进行全方位的的划菜操作。</p>
        <p class="banner-text-p">系统可以按照单品划菜，统计每个菜品所点总数，针对量大单品，可优先通知厨房处理。</p>
        <p class="banner-text-p">同时也可以按照客位进行划菜，查看每座菜品情况，以及是否上菜，对于只剩一道菜品的桌位，提醒优先处理，提升翻台率。</p>
      </div>
    </div>
    <div class="paddle-main">
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h3 class="section-text-title">厨打机+触摸屏划菜方案</h3>
          <p>厨房打印菜品、厨师做菜、传菜员触屏划菜，很好地解决了传统划菜模式的缺点，传菜员通过触屏划菜，提高工作效率，降低了出错机率。</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img"></div>
        <div class="section-text">
          <h3 class="section-text-title">KDS </h3>
          <p>全程无纸化方案，前台点餐后厨房间大屏幕按顺序显示菜品，厨师做好后更改菜品状态，传菜员快速划菜；有效管理上菜顺序和进度，真实记录菜品制作时间、厨师和传菜员的工作量，菜品制作过程可进行追溯管理。</p>
        </div>
      </div>
      <div class="section">
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img src="./section3-1.png" alt="" class="section-img-li-img">
            <p>单号模式</p>
          </div>
          <div class="section-img-li">
            <img src="./section3-2.png" alt="" class="section-img-li-img">
            <p>品项模式</p>
          </div>
          <div class="section-img-li">
            <img src="./section3-3.png" alt="" class="section-img-li-img">
            <p>桌台模式</p>
          </div>
        </div>
        <div class="section-text">
          <h2 class="section-text-title">多种显示信息</h2>
          <p>按单号排序、按桌台排序、按品项排序、按点单时间、</p>
          <p>按点单时长、品项模式、桌台看板等，可过滤筛选，还可查询过期任务。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paddle'
}
</script>

<style lang="stylus" scoped>
.paddle
  color #666
  font-size 15px
  .banner
    width 100%
    height: 30.7vw
    display flex
    align-items center
    background url("banner_bg.png") no-repeat center
    background-size: 100% 100%
    .banner-text
      width 800px
      padding 40px
      margin 0 15%
      color: #FFF
      font-size 22px
      line-height 2
      text-align left
      background rgba(0, 0, 0, .7)
      border-radius 10px
      .banner-text-title
        margin-bottom: 10px
        font-size 38px
        font-weight 700
        color #fedaaf
  .paddle-main
    .section
      display flex
      align-items center
      flex-wrap wrap
      justify-content space-around
      padding 20px 0
      .section-img
        flex-basis 50%
        height 300px
        min-width 450px
      .section-text
        flex-basis 50%
        line-height 2
        font-size 16px
        padding 0 20px
        box-sizing border-box
        .section-text-title
          padding-right 10px
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
          text-align center
      &:nth-child(3)
        flex-direction column-reverse
        .section-img-wrapper
          padding-top 10px
          display flex
          flex-wrap wrap
          justify-content space-around
          margin 0 5%
          .section-img-li
            flex-basis 25%
            max-width 25%
            min-width 300px
            font-size 28px
            line-height 1.5
            .section-img-li-img
              width 100%
              border-radius 10px
@media (max-width: 1280px)
  .paddle
    .banner
      .banner-text
        margin 0 5%
        padding 12px
        font-size 18px
        .banner-text-title
          font-size 32px
@media (max-width: 900px)
  .paddle
    .banner
      .banner-text
        margin 0 5%
        padding 12px
        font-size 18px
        background transparent
        text-align center
        .banner-text-p
          display none
    .paddle-main
      .section
        .section-text
          line-height 1.7
          flex-basis 80%
          .section-text-title
            font-size 30px
            line-height 1.5
            margin 0
@media (max-width: 490px)
  .paddle
    .banner
      height 150px
    .paddle-main
      .section
        .section-img
          flex-basis 100%
          height 77.3vw
          min-width 300px
        .section-text
          flex-basis 100%
</style>
