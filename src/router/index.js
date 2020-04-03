import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '@/views/Product'
import Delicacy from '@/components/Delicacy/Delicacy'
import Business from '@/components/Business/Business'
import Pad from '@/components/Pad/Pad'
import Phone from '@/components/Phone/Phone'
import Queue from '@/components/Queue/Queue'
import Paddle from '@/components/Paddle/Paddle'
import WeChat from '@/components/WeChat/WeChat'
import Member from '@/components/Member/Member'
import Operation from '@/components/Operation/Operation'
import TakeOut from '@/components/TakeOut/TakeOut'
import LightningPay from '@/components/LightningPay/LightningPay'
import Code from '@/components/Code/Code'
import HotPotCase from '@/components/HotPotCase/HotPotCase'
import SquareCase from '@/components/SquareCase/SquareCase'
import MilkTeaCase from '@/components/MilkTeaCase/MilkTeaCase'
import CoffeeCase from '@/components/CoffeeCase/CoffeeCase'
import WesternCase from '@/components/WesternCase/WesternCase'
import RestaurantCase from '@/components/RestaurantCase/RestaurantCase'
import ConvenienceStoreCase from '@/components/ConvenienceStoreCase/ConvenienceStoreCase'
import StorageCase from '@/components/StorageCase/StorageCase'
import SupermarketCase from '@/components/SupermarketCase/SupermarketCase'
import Canteen from '@/components/Canteen/Canteen'
import CustomerCase from '@/components/CustomerCase/CustomerCase'
import Service from '@/components/Service/Service'
import About from '@/components/About/About'
import Software from '@/components/software/Software'
import Mobile from '@/components/Mobile/Mobile'
import Solution from '@/components/Solution/Solution'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    redirect: '/product/software',
    meta: {
      title: '产品中心'
    },
    children: [
      {
        path: 'software',
        name: 'Software',
        component: Software
      },
      {
        path: 'mobile',
        name: 'Mobile',
        component: Mobile
      },
      {
        path: 'solution',
        name: 'Solution',
        component: Solution
      }
    ]
  },
  {
    path: '/delicacy',
    name: 'Delicacy',
    component: Delicacy,
    meta: {
      title: '美食专家'
    }
  },
  {
    path: '/business',
    name: 'Business',
    component: Business,
    meta: {
      title: '商业专家'
    }
  },
  {
    path: '/pad',
    name: 'Pad',
    component: Pad,
    meta: {
      title: '平板点菜'
    }
  },
  {
    path: '/phone',
    name: 'Phone',
    component: Phone,
    meta: {
      title: '手机点菜'
    }
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue,
    meta: {
      title: '排队叫号'
    }
  },
  {
    path: '/paddle',
    name: 'Paddle',
    component: Paddle,
    meta: {
      title: '划菜系统'
    }
  },
  {
    path: '/weChat',
    name: 'WeChat',
    component: WeChat,
    meta: {
      title: '微信点菜'
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
    meta: {
      title: '微信会员'
    }
  },
  {
    path: '/operation',
    name: 'Operation',
    component: Operation,
    meta: {
      title: '老板报表'
    }
  },
  {
    path: '/takeOut',
    name: 'TakeOut',
    component: TakeOut,
    meta: {
      title: '外卖平台'
    }
  },
  {
    path: '/lightningPay',
    name: 'LightningPay',
    component: LightningPay,
    meta: {
      title: '秒付'
    }
  },
  {
    path: '/code',
    name: 'Code',
    component: Code,
    meta: {
      title: '一码多用'
    }
  },
  {
    path: '/hotpot',
    name: 'HotPotCase',
    component: HotPotCase,
    meta: {
      title: '火锅店解决方案'
    }
  },
  {
    path: '/square',
    name: 'SquareCase',
    component: SquareCase,
    meta: {
      title: '美食广场解决方案'
    }
  },
  {
    path: '/milkTea',
    name: 'MilkTeaCase',
    component: MilkTeaCase,
    meta: {
      title: '奶茶店解决方案'
    }
  },
  {
    path: '/coffee',
    name: 'CoffeeCase',
    component: CoffeeCase,
    meta: {
      title: '咖啡厅解决方案'
    }
  },
  {
    path: '/western',
    name: 'WesternCase',
    component: WesternCase,
    meta: {
      title: '中西式快餐解决方案'
    }
  },
  {
    path: '/restaurant',
    name: 'RestaurantCase',
    component: RestaurantCase,
    meta: {
      title: '酒楼解决方案'
    }
  },
  {
    path: '/convenienceStore',
    name: 'ConvenienceStoreCase',
    component: ConvenienceStoreCase,
    meta: {
      title: '超市/便利店解决方案'
    }
  },
  {
    path: '/storage',
    name: 'StorageCase',
    component: StorageCase,
    meta: {
      title: '仓储卖场解决方案'
    }
  },
  {
    path: '/supermarket',
    name: 'SupermarketCase',
    component: SupermarketCase,
    meta: {
      title: '百货超市解决方案'
    }
  },
  {
    path: '/canteen',
    name: 'Canteen',
    component: Canteen,
    meta: {
      title: '食堂系统'
    }
  },
  {
    path: '/case',
    name: 'Case',
    component: CustomerCase,
    meta: {
      title: '客户案例'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: {
      title: '技术支持'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if ((to.name === 'Software' || to.name === 'Mobile' || to.name === 'Solution') && (from.name === 'Software' || from.name === 'Mobile' || from.name === 'Solution')) {
        return
      }
      return { x: 0, y: 0 }
    }
  }
})

export default router
