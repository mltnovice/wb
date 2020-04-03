<template>
  <div class="service">
    <div class="banner"></div>
    <div class="server-main">
      <div class="section">
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>电话服务</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>在线服务</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>远程服务</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>现场服务</p>
        </div>
      </div>
      <div class="section">
        <div class="section-text">
          <h3 class="section-text-title">我们将竭诚为您提供以下服务</h3>
        </div>
        <div class="section-img">
          <div class="section-li">
            <div class="section-li-img"></div>
            <div class="section-li-text">
              <h3 class="section-li-text-title">售前服务</h3>
              <p class="section-li-text-p">向客户提供介绍资料，初步了解客户需求</p>
              <p class="section-li-text-p">进行软件功能演示</p>
              <p class="section-li-text-p">实地调研客户需求</p>
              <p class="section-li-text-p">向客户提供管理流程咨询和系统 解决方案</p>
            </div>
          </div>
          <div class="section-li">
            <div class="section-li-img"></div>
            <div class="section-li-text">
              <h3 class="section-li-text-title">售中服务</h3>
              <p class="section-li-text-p">提供网络布线设计方案及布线指导</p>
              <p class="section-li-text-p">根据客户需要进行硬件设备的采购及运输</p>
              <p class="section-li-text-p">按照系统实施方案所规定的内容进行现场安装、调试</p>
              <p class="section-li-text-p">对管理人员和操作人员进行现场培训</p>
              <p class="section-li-text-p">餐厅开业现场工程师进行驻场技术支持</p>
            </div>
          </div>
          <div class="section-li">
            <div class="section-li-img"></div>
            <div class="section-li-text">
              <h3 class="section-li-text-title">售后服务</h3>
              <p class="section-li-text-p">提供24小时热线维护</p>
              <p class="section-li-text-p">通过远程维护实时解决问题</p>
              <p class="section-li-text-p">系统出现故障问题，公司在接到通知后及时作出响应，确保系统快速恢复运行</p>
              <p class="section-li-text-p">新上系统软件提供一年的免费维护，免费升级</p>
              <p class="section-li-text-p">定期进行用户回访，现场解决问题</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>电话: 14739275730</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>邮箱: smsoftware19@qq.com</p>
        </div>
        <div class="section-li">
          <div class="section-li-img"></div>
          <p>微信号：GZSMSoftWare</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="stylus" scoped>
.service
  color: #666
  font-size 15px
  .banner
    width: 100%
    padding-bottom 30.7%
    background: url("../../assets/images/Home/banner5.jpg") no-repeat center
    background-size auto 100%
  .server-main
    max-width 1280px
    margin 0 auto
    .section
      display flex
      align-items center
      flex-wrap wrap
      justify-content space-around
      padding 50px 10px
      .section-img
        flex-basis 50%
      .section-text
        line-height 1.5
        font-size 16px
        .section-text-title
          font-size 28px
          margin 0
      &:nth-child(1)
        align-items center
        flex-wrap wrap
        .section-li
          flex-basis 24%
          max-width 360px
          min-width 150px
          .section-li-img
            width 100px
            height 100px
            margin 10px auto
          &:nth-child(1)
            .section-li-img
              background url("section1-1.png") no-repeat center
              background-size 90%
          &:nth-child(2)
            .section-li-img
              background url("section1-2.png") no-repeat center
              background-size 90%
          &:nth-child(3)
            .section-li-img
              background url("section1-3.png") no-repeat center
              background-size 90%
          &:nth-child(4)
            .section-li-img
              background url("section1-4.png") no-repeat center
              background-size 90%
      &:nth-child(2)
        background #EFF6F8
        align-items center
        flex-wrap wrap
        flex-direction column
        .section-img
          width 100%
          display flex
          align-items center
          flex-wrap wrap
          justify-content space-around
          .section-li
            flex-basis 240px
            .section-li-img
              width 100px
              height 100px
              margin 10px auto
            .section-li-text
              height 380px
              max-width 250px
              margin 0 auto
              padding 0 20px 0 30px
              border 1px solid #CCC
              .section-li-text-p
                line-height 2
                text-align left
                &:before
                  content: '•'
                  display inline-block
                  width 10px
                  height 10px
            &:nth-child(1)
              .section-li-img
                background url("section2-1.png") no-repeat center
                background-size 90%
            &:nth-child(2)
              .section-li-img
                background url("section2-2.png") no-repeat center
                background-size 90%
            &:nth-child(3)
              .section-li-img
                background url("section2-3.png") no-repeat center
                background-size 90%
      &:nth-child(3)
        align-items center
        flex-wrap wrap
        background #F8F8F8
        margin 20px 0
        .section-li
          flex-basis 33%
          max-width 360px
          min-width 200px
          .section-li-img
            width 32px
            height 32px
            margin 10px auto
          &:nth-child(1)
            .section-li-img
              background url("section3-1.png") no-repeat center
              background-size 90%
          &:nth-child(2)
            .section-li-img
              background url("section3-2.png") no-repeat center
              background-size 90%
          &:nth-child(3)
            .section-li-img
              background url("section3-3.png") no-repeat center
              background-size 90%
@media (max-width: 490px)
  .service
    .banner
      padding-bottom: 150px
</style>
