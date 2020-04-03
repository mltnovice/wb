<template>
  <div class="canteen">
    <div class="banner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="banner banner1"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner2"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner3"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner4"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="canteen-main">
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">餐前预订  减少浪费</h3>
          <p>用餐前员工通过微信、APP、订餐机、网页等多种方式提前预订，食堂管理员可以精准统计订餐数量与点菜数量，做到精准备餐与采购，有效避免了备餐不足或做多浪费的现象，节省了食堂经营成本，提升就餐体验，打造智能化、现代化的智能食堂餐厅。</p>
        </div>
        <div class="section-img-wrapper">
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-1.png" alt="">
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-2.png" alt="">
          </div>
          <div class="section-img-li">
            <img class="section-img-li-img" src="./section1-3.png" alt="">
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">多种设备就餐取餐</h3>
          <p>支持单屏双屏一体机、二维码消费机、平板电脑、手持消费机等多种设备就餐取餐，支持刷原单位ID卡\IC卡、按指纹、手机二维码、人脸识别等方式验证。</p>
        </div>
        <div class="equip">
          <div class="equip-item">
            <div class="equip-info">
              <h3 class="equip-name"><span class="equip-list-num">1 </span>触摸一体机</h3>
              <p class="equip-desc">可使用原单位IC卡、ID卡<br/>可接二维码扫描器、指纹仪<br/>可接人脸识别摄像头,实现刷脸就餐<br/>支持离线刷卡、上线自动上传<br/>集成无线WIFI功能，无需布线<br/>是否订餐、声音提示与文字提示</p>
            </div>
            <img src="./equip1.jpg" alt="" class="equip-img">
          </div>
          <div class="equip-item">
            <img src="./equip2.jpg" alt="" class="equip-img">
            <div class="equip-info">
              <h3 class="equip-name"><span class="equip-list-num">2 </span>网络消费机</h3>
              <p class="equip-desc">普通消费网络机支持刷原单位的IC\ID卡，无需换卡<br/>二维码消费机支持IC\ID卡、手机二维码<br/>支持直联云服务，无需本地中转<br/>支持离线刷卡、上线自动上传<br/>语音播报、离线记录5万条记录<br/>可放入道闸中，订餐后才能通过道闸<br/>订餐机支持刷卡即订餐，无需按键</p>
            </div>
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
      <div class="section">
        <h2 class="introduction-item-title">因需制宜 灵活选择</h2>
        <div class="introduction-item-list">
          <div class="introduction-item-list-li">
            <div class="introduction-item-list-li-img-wrapper">
              <img src="./introduction-item-list-li-img1.png" alt="" class="introduction-item-list-li-img">
              <div class="mask"></div>
            </div>
            <span class="introduction-item-list-li-name">台式触屏一体机</span>
          </div>
          <div class="introduction-item-list-li">
            <div class="introduction-item-list-li-img-wrapper">
              <img src="./introduction-item-list-li-img2.png" alt="" class="introduction-item-list-li-img">
              <div class="mask"></div>
            </div>
            <span class="introduction-item-list-li-name">双屏电脑取餐实景</span>
          </div>
          <div class="introduction-item-list-li">
            <div class="introduction-item-list-li-img-wrapper">
              <img src="./introduction-item-list-li-img3.png" alt="" class="introduction-item-list-li-img">
              <div class="mask"></div>
            </div>
            <span class="introduction-item-list-li-name">U型电脑取餐实图</span>
          </div>
          <div class="introduction-item-list-li">
            <div class="introduction-item-list-li-img-wrapper">
              <img src="./introduction-item-list-li-img4.png" alt="" class="introduction-item-list-li-img">
              <div class="mask"></div>
            </div>
            <span class="introduction-item-list-li-name">闸道领餐，未订餐不能入</span>
          </div>
          <div class="introduction-item-list-li">
            <div class="introduction-item-list-li-img-wrapper">
              <img src="./introduction-item-list-li-img5.png" alt="" class="introduction-item-list-li-img">
              <div class="mask"></div>
            </div>
            <span class="introduction-item-list-li-name">人脸识别取餐实景</span>
          </div>
          <div class="introduction-item-list-li">
            <div class="introduction-item-list-li-img-wrapper">
              <img src="./introduction-item-list-li-img6.png" alt="" class="introduction-item-list-li-img">
              <div class="mask"></div>
            </div>
            <span class="introduction-item-list-li-name">人脸识别一体机</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Canteen',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.canteen
  background #FFF
  .banner
    width: 100%
    height: 30.7vw
    min-height 150px
    min-width 320px
  .banner1
    background: url("./banner_bg1.png") no-repeat center
    background-size auto 100%
  .banner2
    background: url("./banner_bg2.png") no-repeat center
    background-size auto 100%
  .banner3
    background: url("./banner_bg3.png") no-repeat center
    background-size auto 100%
  .banner4
    background: url("./banner_bg4.png") no-repeat center
    background-size auto 100%
  >>> .swiper-pagination-bullet
    background #FFF
    height .8rem
    width .8rem
    border-radius 50%
  .canteen-main
    .section
      border-top 20px solid #F1F1F1
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
      &:nth-child(1)
        border-top 0
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
        .equip
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          padding-bottom: 40px;
          .equip-item
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap wrap
            .equip-name
              margin 0
              line-height: 1.7
              padding: 20px 0 10px;
              font-size: 36px;
              font-weight: 900;
              color: #ff0000;
              .equip-list-num
                color: #089B88;
            .equip-desc
              line-height: 2;
              font-size: 20px;
              color: #5f717f;
              font-weight: bold;
            .equip-img
              width 320px
      &:nth-child(4)
        .introduction-item-title
          margin: 0
          line-height: 2
          font-size: 36px;
          font-weight: bold;
          text-align: center;
        .introduction-item-img
          display: block;
          max-width: 100%;
          margin: 0 auto;
          padding-bottom: 30px;
        .introduction-item-list
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          .introduction-item-list-li
            flex-basis 33%
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0 20px 0;
            &:hover
              cursor: pointer;
            .introduction-item-list-li-img-wrapper
              position: relative;
            .mask
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, .1);
              &:hover
                opacity: 0;
            .introduction-item-list-li-name
              font-size: 18px;
              margin: 10px auto;
@media (max-width: 1280px)
  .canteen
    .banner
      width: 100%
      height: 30.7vw
    .canteen-main
      .section
        padding 10px 0
        .section-text
          font-size 14px
          .section-text-title
            font-size 32px
        &:nth-child(2)
          .equip
            padding-bottom: 20px
            .equip-item
              .equip-name
                padding: 10px 0 5px
                font-size: 28px
              .equip-desc
                line-height: 1.7;
                font-size: 18px;
                color: #5f717f;
                font-weight: bold;
              .equip-img
                width 320px
        &:nth-child(4)
          .introduction-item-title
            font-size 28px
</style>
