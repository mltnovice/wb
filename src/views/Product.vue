<template>
  <div class="product">
    <div class="banner"></div>
    <div class="main">
      <div class="product-sidebar">
        <div class="product-sidebar-menu">
          <div
            class="product-sidebar-nav"
            v-for="nav in menu"
            :key="nav.id"
            :class="navActiveCls(nav)"
            @click="changeActive(nav)"
          >{{nav.desc}}</div>
        </div>
        <div class="contact">
          <h3 class="contact-title">联系方式</h3>
          <p>商务电话：13710518776</p>
          <p>技术电话：14739275730</p>
          <p>技术电话：18824158860</p>
          <p>技术 QQ：532148277</p>
          <p>技术 QQ：1402147350</p>
          <p>微信同号</p>
        </div>
        <div class="company-addr">
          <h3 class="company-addr-title">广州思铭软件有限公司</h3>
          <p>地址：广州市白云区鹤联街1号中海联8立方创意园A1栋P321</p>
          <p>公司网址：www.gzsmsf.com</p>
        </div>
      </div>
      <div class="main-contain">
        <div class="software" v-if="selectedId === 0">
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
        <div class="software" v-else-if="selectedId === 1">
          <div class="main-contain-title">移动互联+</div>
          <div class="software-contain">
            <div class="software-contain-item" v-for="software in mobileList" :key="software.name">
              <div class="software-contain-item-img" :style="{background: `url(${software.img}) no-repeat center`, backgroundSize: '95% 95%'}">
                <div class="software-contain-item-img-mask"></div>
              </div>
              <p class="software-contain-item-name">{{software.title}}</p>
              <p class="software-contain-item-desc">{{software.desc}}</p>
            </div>
          </div>
        </div>
        <div class="software" v-else-if="selectedId === 2">
          <div class="main-contain-title">解决方案</div>
          <div class="software-contain">
            <div class="software-contain-item" v-for="software in solutionList" :key="software.name">
              <div class="software-contain-item-img" :style="{background: `url(${software.img}) no-repeat center`, backgroundSize: '95% 95%'}">
                <div class="software-contain-item-img-mask"></div>
              </div>
              <p class="software-contain-item-name">{{software.title}}</p>
              <p class="software-contain-item-desc">{{software.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      menu: [
        {
          id: 0, desc: '软件产品', src: '/product/software', name: 'software'
        },
        {
          id: 1, desc: '移动互联+', src: '/product/mobile', name: 'mobile'
        },
        {
          id: 2, desc: '解决方案', src: '/product/solution', name: 'solution'
        }
      ],
      softwareList: [
        {
          name: 'delicacy',
          img: require('../assets/images/Product/delicacy.jpg'),
          src: '/delicacy',
          title: '美食专家',
          desc: '一体化解决桌台管理、收银、营销策略、后台管理、成本控制、供应链等方面的问题，是一款触摸您内心世界的餐饮管理软件。'
        },
        {
          name: 'business',
          img: require('../assets/images/Product/business.jpg'),
          src: '/business',
          title: '商业专家',
          desc: '本系统以界面直观、易学易用、功能全面、系统稳定为主要特点，支持连锁及多业态经营管理模式，能从根本上满足现代商业企业的管理高效、分析精确、降低成本的要求，帮助企业实现物流、信息流、资金流的科学管理，为企业提高自身竞争力奠定坚实的基础。'
        },
        {
          name: 'phone_order',
          img: require('../assets/images/Product/phone_order.png'),
          src: '/phone',
          title: '手机点菜',
          desc: '全面替代传统点菜宝，点餐结账全程一体化； 酒楼、快餐、西餐、咖啡厅、火锅店，全面适用，支持各种支付； 从开台、点餐，厨打、结账，各环节大幅提升服务质量，节约人力成本，是餐饮老板的好臂助，是服务员的好朋友。'
        },
        {
          name: 'pad_order',
          src: '/pad',
          img: require('../assets/images/Product/pad_order.png'),
          title: '平板点菜',
          desc: '电子菜谱以声，色，图，文，互动性为一体，成为替代传统纸质菜谱的上佳选择，又可以让顾客自助点餐，替餐厅大大节省服务员人力成本。顾客的体验感得以加强，餐厅的档次亦得以提升。'
        },
        {
          name: 'queue',
          img: require('../assets/images/Product/queue.png'),
          src: '/queue',
          title: '排队系统',
          desc: '到店后，顾客只需输入人数和手机号，现场取票，进入排队，等候餐厅通知；也可扫描关注微信公众号，手机微信云端取号开始排队。'
        },
        {
          name: 'paddle',
          img: require('../assets/images/Product/paddle.png'),
          src: '/paddle',
          title: '划菜系统',
          desc: '通过触屏划菜，对厨房出品全盘掌控，无需要打印纸，低碳环保，一目了然，节省人力，提高工作效率，降低出错机率，提高顾客满意度。'
        }
      ],
      mobileList: [
        {
          name: 'weChat',
          img: require('../assets/images/Product/wechat.png'),
          src: '/weChat',
          title: '微信点菜',
          desc: '以微信为入口的，以软件商、经销商、商户、顾客为利益链条的，实现线上线下（O2O）完美对接的移动互联餐饮管理系统一揽子解决方案'
        },
        {
          name: 'member',
          img: require('../assets/images/Product/member.png'),
          src: '/member',
          title: '微信会员',
          desc: '扫描二维码快速成为商家会员，节约制卡成本；快速招募会员，实现优惠、打折、储值、积分、优惠券等功能；会员信息商户自主掌控，会员行为数据深度挖掘分析，数据清晰呈现，方便商户经营决策，实现精准化会员营销与服务。'
        },
        {
          name: 'operation',
          img: require('../assets/images/Product/operation.png'),
          src: '/operation',
          title: '老板报表',
          desc: '营运助理”针对老板在家里、出差或旅游时无法实时监控门店营运情况，专门推出的新一代智能手机查询系统。'
        },
        {
          name: 'takeOut',
          img: require('../assets/images/Product/take_out.jpg'),
          src: '/takeOut',
          title: '外卖平台',
          desc: '支持美团外卖与饿了么外卖，实时监控2大平台的订单信息，并能自动接单、打印送出单、通知厨房等，还能自动写入交易，并将来自订餐平台的顾客转化为熟客，方便商户深度挖掘潜在客户的价值。'
        },
        {
          name: 'lightningPay',
          img: require('../assets/images/Product/lightning_pay.png'),
          src: '/lightningPay',
          title: '秒付',
          desc: '“秒付”顾客在用餐完毕后，无需服务员介入，支付宝或微信直接扫描二维码，自动完成桌号绑定、账单确认、会员身份识别、计算会员价、扣减积分、使用优惠券、返还积分等步骤，3步买单，10秒清台，大幅提升餐厅运营效率。'
        },
        {
          name: 'code',
          img: require('../assets/images/Product/code.png'),
          src: '/code',
          title: '一码多用',
          desc: '餐厅每张餐台上都可放置二维码图片供食客扫描点餐。餐桌上的每位客人都可以通过各自手机共同浏览该餐厅菜品图片，一起参与点餐下单'
        }
      ],
      solutionList: [
        {
          name: 'hotpot',
          img: require('../assets/images/Product/hotpot.jpg'),
          src: '/hotpot',
          title: '火锅店解决方案',
          desc: '思铭美食专家火锅店解决方案'
        },
        {
          name: 'square',
          img: require('../assets/images/Product/square.jpg'),
          src: '/square',
          title: '美食广场解决方案',
          desc: '思铭美食专家美食广场解决方案'
        },
        {
          name: 'milkTea',
          img: require('../assets/images/Product/milkTea.jpg'),
          src: '/milkTea',
          title: '奶茶店解决方案',
          desc: '思铭美食专家奶茶店解决方案'
        },
        {
          name: 'coffee',
          img: require('../assets/images/Product/coffee.jpg'),
          src: '/coffee',
          title: '咖啡厅解决方案',
          desc: '思铭美食专家咖啡厅解决方案'
        },
        {
          name: 'western',
          img: require('../assets/images/Product/western.jpg'),
          src: '/western',
          title: '中西式快餐方案',
          desc: '思铭美食专家美食中西式快餐方案'
        },
        {
          name: 'restaurant',
          img: require('../assets/images/Product/restaurant.jpg'),
          src: '/restaurant',
          title: '酒楼解决方案',
          desc: '思铭美食专家酒楼解决方案'
        },
        {
          name: 'convenienceStore',
          img: require('../assets/images/Product/convenienceStore.jpg'),
          src: '/convenienceStore',
          title: '超市/便利店解决方案',
          desc: '思铭美食专家超市/便利店解决方案'
        },
        {
          name: 'storage',
          img: require('../assets/images/Product/storage.jpg'),
          src: '/storage',
          title: '仓储卖场解决方案',
          desc: '思铭美食专家仓储卖场解决方案'
        },
        {
          name: 'supermarket',
          img: require('../assets/images/Product/supermarket.jpg'),
          title: '百货超市解决方案',
          desc: '思铭美食专家百货超市解决方案'
        }
      ],
      selectedId: 0
    }
  },
  methods: {
    navActiveCls (nav) {
      return nav.id === this.selectedId ? 'nav-active' : ''
    },
    changeActive (nav) {
      this.selectedId = nav.id
    },
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
.product
  color: #666
  font-size 15px
  .banner
    width: 100%
    padding-bottom: 30.73%
    background: url("../assets/images/Home/banner5.jpg") no-repeat center
    background-size 100% auto
  .main
    width 100%
    max-width 1280px
    margin 20px auto 0
    display flex
    .product-sidebar
      flex-basis 300px
      min-width 300px
      .product-sidebar-menu
        display flex
        flex-direction column
        .product-sidebar-nav
          margin 10px 0
          width 100%
          height 60px
          line-height 60px
          border 1px solid #E9E9E9
          box-shadow 1px 1px 1px 0 #d9e3e7
          border-radius 4px
          /*color: #0e4d6f*/
          font-weight 700
          letter-spacing 1.2px
          box-sizing border-box
          &:hover
            cursor pointer
        .nav-active
          color: #1EC67A
          border 1px solid #1EC67A
          background #F3F3F3
          box-shadow 1px 1px 1px 0 #d9e3e7
      .contact, .company-addr
        margin-bottom 10px
        line-height 2
        text-align left
        padding-left: 20px
        border 1px solid #E9E9E9
        box-shadow 1px 1px 1px 0 #d9e3e7
        border-radius 4px
        .company-addr-title, .contact-title
          line-height 1
    .main-contain
      padding 10px 20px
      flex-grow: 1
      .software
        .main-contain-title
          padding 20px
          color: #666
          font-size 20px
          text-align left
          border-bottom: 2px solid #169ed8
        .software-contain
          display flex
          flex-wrap wrap
          justify-content space-around
          .software-contain-item
            flex-basis 250px
            text-align left
            margin: 20px 10px
            &:hover
              cursor pointer
            .software-contain-item-img
              width 100%
              height 0
              padding-bottom 66.6%
              border-radius 4px
              border: 2px solid #eee
              position relative
              .software-contain-item-img-mask
                position absolute
                top: 0
                left: 0
                bottom: 0
                right: 0
                background rgba(0, 63, 76, .5)
                opacity 0
                transition ease .5s
                &:hover
                  opacity 1
            .software-contain-item-name
              color: #000
              padding: 10px 0
            .software-contain-item-desc
              line-height 1.5
              font-size 12px
              height: 72px
              display -webkit-box
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
              overflow: hidden;

</style>
