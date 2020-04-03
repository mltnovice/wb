<template>
  <div class="case">
    <div class="banner" :style="{background: `url(${require('./banner_bg.png')}) no-repeat center`, backgroundSize: 'auto 100%'}">
      <div class="banner-text">
        <span class="banner-text-title">商业专家超市/便利店解决方案</span>
      </div>
    </div>
    <div class="article">
      <p class="article-text-p">我国的连锁超市/便利店从20世纪90年代初的掀起到现在，在短短的十几年内已走过了从萌芽到成熟的过程，并逐渐成为中国零售业的主流业态。</p>
      <img class="article-img" src="./article-img1.png" alt="">
      <p class="article-text-p">
        便利业态的重点在于“连锁”“便利”。也就是说，第一，要形成严密的连锁体系，统一管理，建立规模化优势；第二，坚持便利的经营思想，在任何时间、任何地点为客户提供贴心的商品和服务。其经营特点如下：<br>
        ● 门店营业面积小、时间长、一般只配备1～2台收银机<br>
        ● 网点多，分布广，要求快速大规模扩张<br>
        ● 门店人员数量少(3-8人)，计算机操作能力不高<br>
        ● 强调零售 + 服务<br>
      </p>
      <p class="article-text-p" style="text-indent: 0">商业专家适用于便利总部、配送中心、直营门店和加盟门店。</p>
      <p class="article-text-p" style="text-indent: 0">商业专家设计与实现</p>
      <p class="article-text-p" style="text-indent: 0">
        ◆ 总部统一建立商品主档，授权门店通讯<br>
        ◆ 门店自动下载商品信息、上传营业资料<br>
        ◆ 会员可分为本地会员与连锁会员、相互独立<br>
        ◆ 门店订货、总部直送<br>
        ◆ 门店叫货、供应商配送<br>
      </p>
      <p class="article-text-p" style="text-indent: 0">
        开发平台<br>
        操作系统： XP、2000、2003<br>
        数 据 库：SQL Server2000  sp4<br>
        网络体系：Client / Server<br>
      </p>
      <p class="article-text-p" style="text-indent: 0">
        功能特点：<br>
        门店前台POS系统<br>
        ◆灵活多样的促销支持<br>
        ◆智能化错误提醒功能（错误条码、商品价格、数量等）<br>
        ◆ 严格权限控制<br>
        ◆销售业绩及时查询<br>
        ◆前台录入盘点数据<br>
        ◆前台日志，详细记录收银机上的所有操作，方便核对<br>
        ◆键盘的灵活设定<br>
      </p>
      <p class="article-text-p" style="text-indent: 0">
        总部、配送后台MIS系统主要功能：<br>
        ◆商品资料维护<br>
        ◆供应商资料维护（帐期、结算）<br>
        ◆多种权限管理，与管理密切配合<br>
        ◆员工类别管理（与实际部门对应，方便管理）<br>
        ◆严密、精简的订货流程（供应商、采购员商品控制，避免越权和串货现象）<br>
        ◆进货管理<br>
        ◆库存调整（内部调拨、损耗、溢余管理）<br>
        ◆盘点（自动化的盘点流程，支持多种盘点方式）<br>
        ◆全方位的信息监控（ABC、滞销商品分析、单品库存跟踪等）<br>
        ◆单店单品价格体系<br>
        ◆多种促销方式的一单解决方案<br>
        ◆提供供应商 / 客户对帐单，简化对帐工作<br>
        ◆提供供应商 / 客户结算单、付款单<br>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConvenienceStoreCase'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/common/stylus/case.styl'
</style>
