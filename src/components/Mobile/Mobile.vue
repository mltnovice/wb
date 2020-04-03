<template>
  <div class="software">
    <div class="main-contain-title">移动互联+</div>
    <div class="software-contain">
      <div class="software-contain-item" v-for="software in mobileList" :key="software.name" @click="route(software.src)">
        <div class="software-contain-item-img" :style="{background: `url(${software.img}) no-repeat center`, backgroundSize: '95% 95%'}">
          <div class="software-contain-item-img-mask"></div>
        </div>
        <p class="software-contain-item-name">{{software.title}}</p>
        <p class="software-contain-item-desc">{{software.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mobile',
  data () {
    return {
      mobileList: [
        {
          name: 'weChat',
          img: require('../../assets/images/Product/wechat.png'),
          src: '/weChat',
          title: '微信点菜',
          desc: '以微信为入口的，以软件商、经销商、商户、顾客为利益链条的，实现线上线下（O2O）完美对接的移动互联餐饮管理系统一揽子解决方案'
        },
        {
          name: 'member',
          img: require('../../assets/images/Product/member.png'),
          src: '/member',
          title: '微信会员',
          desc: '扫描二维码快速成为商家会员，节约制卡成本；快速招募会员，实现优惠、打折、储值、积分、优惠券等功能；会员信息商户自主掌控，会员行为数据深度挖掘分析，数据清晰呈现，方便商户经营决策，实现精准化会员营销与服务。'
        },
        {
          name: 'operation',
          img: require('../../assets/images/Product/operation.png'),
          src: '/operation',
          title: '老板报表',
          desc: '营运助理”针对老板在家里、出差或旅游时无法实时监控门店营运情况，专门推出的新一代智能手机查询系统。'
        },
        {
          name: 'takeOut',
          img: require('../../assets/images/Product/take_out.jpg'),
          src: '/takeOut',
          title: '外卖平台',
          desc: '支持美团外卖与饿了么外卖，实时监控2大平台的订单信息，并能自动接单、打印送出单、通知厨房等，还能自动写入交易，并将来自订餐平台的顾客转化为熟客，方便商户深度挖掘潜在客户的价值。'
        },
        {
          name: 'lightningPay',
          img: require('../../assets/images/Product/lightning_pay.png'),
          src: '/lightningPay',
          title: '秒付',
          desc: '“秒付”顾客在用餐完毕后，无需服务员介入，支付宝或微信直接扫描二维码，自动完成桌号绑定、账单确认、会员身份识别、计算会员价、扣减积分、使用优惠券、返还积分等步骤，3步买单，10秒清台，大幅提升餐厅运营效率。'
        },
        {
          name: 'code',
          img: require('../../assets/images/Product/code.png'),
          src: '/code',
          title: '一码多用',
          desc: '餐厅每张餐台上都可放置二维码图片供食客扫描点餐。餐桌上的每位客人都可以通过各自手机共同浏览该餐厅菜品图片，一起参与点餐下单'
        }
      ]
    }
  },
  methods: {
    route (url) {
      if (this.$route.path === url) {
        this.$router.go(0)
      } else {
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/common/stylus/product.styl"
</style>
