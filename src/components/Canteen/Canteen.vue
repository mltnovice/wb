<template>
  <div class="canteen">
    <div class="banner">
      <swiper class="swiper" :options="swiperOption">
        <div class="swiper-slide">
            <div class="swiper-slide-text">
              <div class="ani swiper-slide-text-middle" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">微信、钉钉、APP、订餐机等订餐</div>
              <div class="ani swiper-slide-text-large" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">30天免费试用</div>
              <div class="ani swiper-slide-text-small" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">手机APP、微信、钉钉、订餐机等多种方式提前订餐报餐，取餐时可以通过扫描二维码、打卡(或刷卡)、按指纹、扫描人脸、道闸等设备验证。系统提供食堂小外卖部，加班登记用餐、接待登记用餐、进销存等功能，实现智能化食堂管理，控制食堂成本。</div>
            </div>
            <img swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="./banner-img1.png" alt="" class="swiper-slide-img ani">
          </div>
        <div class="swiper-slide">
            <img swiper-animate-effect="rotateIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="./banner-img2.png" alt="" class="swiper-slide-img ani">
            <div class="swiper-slide-text">
              <div class="ani swiper-slide-text-middle" swiper-animate-effect="rotateIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">已有1000多家单位食堂使用！</div>
              <div class="ani swiper-slide-text-large" swiper-animate-effect="rotateIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">傻瓜化操作订餐！</div>
              <div class="ani swiper-slide-text-large" swiper-animate-effect="rotateIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">一键批量订餐！</div>
            </div>
          </div>
        <div class="swiper-slide">
            <div class="swiper-slide-text">
              <div class="ani swiper-slide-text-middle" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s">刷卡、指纹、二维码、人脸等方式验证取餐</div>
              <div class="ani swiper-slide-text-large" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">智能化食堂解决方案</div>
              <div class="ani swiper-slide-text-small" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">订餐宝通过云端Saas系统模式部署，以移动互联+云服务+大数据+物联网全方位应用解决食堂智能化管理，杜绝食堂浪费的订餐报餐管理软件,咨询热线:13710518776。</div>
            </div>
            <img swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="./banner-img3.png" alt="" class="swiper-slide-img ani">
          </div>
        <div class="swiper-slide">
            <div class="swiper-slide-text">
              <div class="ani swiper-slide-text-middle" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">微信、APP、网页订餐报餐</div>
              <div class="ani swiper-slide-text-large" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">智能化食堂</div>
              <div class="ani swiper-slide-text-small" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">政企单位食堂、医院食堂、学校食堂提前订餐报餐，根据订餐情况按需备餐，杜绝食堂浪费，实现单位内部食堂智能化管理。</div>
            </div>
            <img swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" src="./banner-img4.png" alt="" class="swiper-slide-img ani">
          </div>
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
    <case :case-num="caseNum" :canteen="canteen"></case>
  </div>
</template>

<script>
import { swiperAnimateCache, swiperAnimate } from '../../../public/js/swiper.animate1.0.3.min'
import Case from '@/components/Case/Case'

export default {
  name: 'Canteen',
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: function () {
            swiperAnimateCache(this) // 隐藏动画元素
            swiperAnimate(this) // 初始化完成开始动画
          },
          slideChangeTransitionEnd: function () {
            swiperAnimate(this) // 每个slide切换结束时也运行当前slide动画
            // this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      },
      caseNum: 20,
      canteen: true
    }
  },
  components: {
    Case
  }
}
</script>

<style lang="stylus" scoped>
.canteen
  background #FFF
  .banner
    width: 100%;
    height: 30.7vw;
    background: url("./banner-bg.jpg");
    background-size: 100% 100%;
    position: relative;
    min-width 320px
    >>> .swiper-pagination-bullet
      background #FFF
      height .8rem
      width .8rem
      border-radius 50%
    .swiper
      height 100%
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      max-height 590px

      .swiper-slide
        display: flex;
        justify-content: space-around;
        align-items: center;

        .swiper-slide-text
          display flex
          flex-direction column
          justify-content space-around
          height 60%
          max-width 45%

          .swiper-slide-text-large
            color: #FFFFFF;
            font-size: 36px;

          .swiper-slide-text-middle
            color: #FFFFFF;
            font-size: 28px;

          .swiper-slide-text-small
            color: #FFFFFF;
            font-size: 16px;
            line-height 1.7

        .swiper-slide-img
          max-width 45%
          width: 100%;
          height: auto;
          max-height 90%
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
      .swiper
        .swiper-slide
          .swiper-slide-text
            max-width 45%
            height 80%
            .swiper-slide-text-small
              display none
            .swiper-slide-text-middle
              font-size 20px
              padding 0
            .swiper-slide-text-large
              font-size 28px
              padding 0
          .swiper-slide-img
            max-width 45%
            width 100%
            height auto
            max-height 90%
@media (max-width: 490px)
  .canteen
    .banner
      height: 150px
      .swiper
        .swiper-slide
          .swiper-slide-text
            .swiper-slide-text-middle
              font-size 16px
            .swiper-slide-text-large
              white-space: nowrap
              font-size 22px
          .swiper-slide-img
            max-width 40%
            width 100%
            height auto
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
