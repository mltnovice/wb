<template>
  <div class="case">
    <div class="banner" :style="{background: `url(${require('./banner_bg.png')}) no-repeat center`, backgroundSize: 'auto 100%'}">
      <div class="banner-text">
        <span class="banner-text-title">美食专家中西式快餐方案</span>
      </div>
    </div>
    <div class="article">
      <p class="article-text-p">快餐，是餐饮行业内一种很特别的经营模式，对操作的便易性要求很高，本系统所集成的快餐版本，是专为快餐企业量身订做而成，充分考虑快餐店经营管理的通用性和独特性，能够满足多种经营模式，为经营者日常业务的管理提供全面、及时、准确、有效的数据和完善的服务。</p>
      <p class="article-text-bold">快餐网络架构图</p>
      <img src="./article-img1.png" alt="">
      <p class="article-text-bold">架构解析：</p>
      <p class="article-text-p" style="text-indent: 0">
        • 收银机：主要完成营业功能，包括点菜、收银、打印账单，具体机器选型则可根据具体情况而定，可以选择普通PC，可以选择触摸屏。<br>
        • 外卖机：主要完成外卖的接单，送单，收银功能。<br>
        • 服务器：主要安装数据库。<br>
        • 后台管理：主要完成后台的功能操作，如：基础数据维护、会员管理、库存管理、报表统计等。<br>
        • 厨房打印机：完成营业点菜的厨房送单的打印。
      </p>
      <p class="article-text-bold">适合的经营模式：</p>
      <p class="article-text-p">
        —麦当劳模式： 即买即取，无需厨打，出品制作时间短。<br>
        —四海游龙模式：  先买后取，发牌等餐，需要厨打，出品制作时间长。
      </p>
      <p class="article-text-bold">快餐营业流程图</p>
      <img src="./article-img2.png" alt="">
      <p class="article-text-bold">快餐营业流程分析</p>
      <p class="article-text-p" style="text-indent: 0">
        • 点菜消费：顾客进店后，首先来到收银台选择将要消费的菜品，确定后，马上进行付款操作，系统同时打印出结账单作为消费凭证。与此同系统还需进行所点菜品的厨房分单打印，打印到指定厨房打印机上，顾客则自选餐桌就座等候。<br>
        • 厨房打印及出品：对于厨房需要加工菜品，则通过系统进行厨房打印，对于酒水饮料等在收银台储存的物品，则马上出品给顾客。<br>
        • 顾客消费：当菜品制作完毕后，餐厅可能通过叫号让顾客自行领取，也可能通过事先安排的餐桌，由服务员送至顾客就餐位置。
      </p>
      <p class="article-text-bold">快餐营业功能列表</p>
      <img src="./article-img3.png" alt="">
      <p class="article-text-bold">功能特点：</p>
      <p class="article-text-p">
        —灵活的界面及功能自定义<br>
        适应不同的快餐需求，客户可以把常用的功能调整到顺手的位置，加快点单速度。
      </p>
      <p class="article-text-p">
        —提供来电订餐功能<br>
        曾经通过电话订餐的客人，如果再次使用原号码致电时，服务员能够即时清楚来电客户的个人资料和定餐记录，提高服务质量及效率。
      </p>
      <p class="article-text-p">
        —提供强大的【送餐管理系统】<br>
        来电订餐→点单→派工→送餐→收款→交款→结单。
      </p>
      <p class="article-text-p">
        —快捷的套餐功能<br>
        灵活的促销功能
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WesternCase'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/common/stylus/case.styl'
</style>
