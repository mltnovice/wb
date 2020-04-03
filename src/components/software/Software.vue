<template>
  <div class="software">
    <div class="main-contain-title">软件产品</div>
    <div class="software-contain">
      <div class="software-contain-item" v-for="software in softwareList" :key="software.name" @click="route(software.src)">
        <div class="software-contain-item-img" :style="{background: `url(${software.img}) no-repeat center`, backgroundSize: '100% auto'}">
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
  name: 'Software',
  data () {
    return {
      softwareList: [
        {
          name: 'delicacy',
          img: require('../../assets/images/Product/delicacy.jpg'),
          src: '/delicacy',
          title: '美食专家',
          desc: '一体化解决桌台管理、收银、营销策略、后台管理、成本控制、供应链等方面的问题，是一款触摸您内心世界的餐饮管理软件。'
        },
        {
          name: 'business',
          img: require('../../assets/images/Product/business.jpg'),
          src: '/business',
          title: '商业专家',
          desc: '本系统以界面直观、易学易用、功能全面、系统稳定为主要特点，支持连锁及多业态经营管理模式，能从根本上满足现代商业企业的管理高效、分析精确、降低成本的要求，帮助企业实现物流、信息流、资金流的科学管理，为企业提高自身竞争力奠定坚实的基础。'
        },
        {
          name: 'phone_order',
          img: require('../../assets/images/Product/phone_order.png'),
          src: '/phone',
          title: '手机点菜',
          desc: '全面替代传统点菜宝，点餐结账全程一体化； 酒楼、快餐、西餐、咖啡厅、火锅店，全面适用，支持各种支付； 从开台、点餐，厨打、结账，各环节大幅提升服务质量，节约人力成本，是餐饮老板的好臂助，是服务员的好朋友。'
        },
        {
          name: 'pad_order',
          src: '/pad',
          img: require('../../assets/images/Product/pad_order.png'),
          title: '平板点菜',
          desc: '电子菜谱以声，色，图，文，互动性为一体，成为替代传统纸质菜谱的上佳选择，又可以让顾客自助点餐，替餐厅大大节省服务员人力成本。顾客的体验感得以加强，餐厅的档次亦得以提升。'
        },
        {
          name: 'queue',
          img: require('../../assets/images/Product/queue.png'),
          src: '/queue',
          title: '排队系统',
          desc: '到店后，顾客只需输入人数和手机号，现场取票，进入排队，等候餐厅通知；也可扫描关注微信公众号，手机微信云端取号开始排队。'
        },
        {
          name: 'paddle',
          img: require('../../assets/images/Product/paddle.png'),
          src: '/paddle',
          title: '划菜系统',
          desc: '通过触屏划菜，对厨房出品全盘掌控，无需要打印纸，低碳环保，一目了然，节省人力，提高工作效率，降低出错机率，提高顾客满意度。'
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
