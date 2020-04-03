<template>
  <div class="software">
    <div class="main-contain-title">解决方案</div>
    <div class="software-contain">
      <div class="software-contain-item" v-for="software in solutionList" :key="software.name" @click="route(software.src)">
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
  name: 'Solution',
  data () {
    return {
      solutionList: [
        {
          name: 'hotpot',
          img: require('../../assets/images/Product/hotpot.jpg'),
          src: '/hotpot',
          title: '火锅店解决方案',
          desc: '思铭美食专家火锅店解决方案'
        },
        {
          name: 'square',
          img: require('../../assets/images/Product/square.jpg'),
          src: '/square',
          title: '美食广场解决方案',
          desc: '思铭美食专家美食广场解决方案'
        },
        {
          name: 'milkTea',
          img: require('../../assets/images/Product/milkTea.jpg'),
          src: '/milkTea',
          title: '奶茶店解决方案',
          desc: '思铭美食专家奶茶店解决方案'
        },
        {
          name: 'coffee',
          img: require('../../assets/images/Product/coffee.jpg'),
          src: '/coffee',
          title: '咖啡厅解决方案',
          desc: '思铭美食专家咖啡厅解决方案'
        },
        {
          name: 'western',
          img: require('../../assets/images/Product/western.jpg'),
          src: '/western',
          title: '中西式快餐方案',
          desc: '思铭美食专家美食中西式快餐方案'
        },
        {
          name: 'restaurant',
          img: require('../../assets/images/Product/restaurant.jpg'),
          src: '/restaurant',
          title: '酒楼解决方案',
          desc: '思铭美食专家酒楼解决方案'
        },
        {
          name: 'convenienceStore',
          img: require('../../assets/images/Product/convenienceStore.jpg'),
          src: '/convenienceStore',
          title: '超市/便利店解决方案',
          desc: '思铭美食专家超市/便利店解决方案'
        },
        {
          name: 'storage',
          img: require('../../assets/images/Product/storage.jpg'),
          src: '/storage',
          title: '仓储卖场解决方案',
          desc: '思铭美食专家仓储卖场解决方案'
        },
        {
          name: 'supermarket',
          img: require('../../assets/images/Product/supermarket.jpg'),
          src: '/supermarket',
          title: '百货超市解决方案',
          desc: '思铭美食专家百货超市解决方案'
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
