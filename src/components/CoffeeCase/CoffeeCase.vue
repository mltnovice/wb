<template>
  <div class="case">
    <div class="banner" :style="{background: `url(${require('./banner_bg.png')}) no-repeat center`, backgroundSize: 'auto 100%'}">
      <div class="banner-text">
        <span class="banner-text-title">美食专家咖啡厅解决方案</span>
      </div>
    </div>
    <div class="article">
      <p class="article-text-p">美食专家餐饮管理可以说是一套专业的咖啡厅管理软件，咖啡店收银系统，咖啡店经营软件。它集前台收费系统，员工管理系统，会员管理系统等强大功能为一身，系统界面简洁优美，操作直观简单，无需专门培训即可正常使用。咖啡店管理软件为咖啡厅业经营者提供了强大的成本分析，利润分析，物流管理等诸多功能，能广泛适用西餐厅管理，咖啡厅日常管理，连锁咖啡店管理等场合。咖啡厅管理系统是您提高咖啡厅经营水平，杜绝管理漏洞，增加效益的强大武器。系统除包含桌位管理、厨房打印管理、菜品管理等基本功能模块外、还包含强大的会员管理、库存管理功能、以及统计分析功能，实现有序高效的信息化管理体制并能适应多种经营方式，为企业提高自身竞争能力奠定坚实的基础。</p>
      <p class="article-text-bold">咖啡店网络拓扑图</p>
      <img src="./article-img1.png" alt="">
      <p class="article-text-bold">后台管理界面</p>
      <p class="article-text-p">后台管理主要包括菜目管理、库存管理、会员管理、财务管理、前台营业、决策分析、系统设置等功能。后台管理是运行整个系统的基础和保证。</p>
      <p class="article-text-bold">桌台管理界面</p>
      <p class="article-text-p">桌台显示清晰明了，桌台统计信息列于界面，下方，右边的功能按钮方便您进行开单、点菜、结单等操作。</p>
      <p class="article-text-bold">单据管理界面</p>
      <p class="article-text-p">本系统的点菜及收银管理既简单又灵活，可以更加桌台的区域设置服务费、茶位费、以及最低消费，还可以进行催菜、缓菜等操作。</p>
      <p class="article-text-bold">厨房打印管理界面</p>
      <p class="article-text-p">本系统具备完美的厨房打印管理功能，根据设置，系统可以将点菜信息发送到不同制作部门的打印机上，免去跑菜员反复奔忙。</p>
      <p class="article-text-bold">桌位预定界面</p>
      <p class="article-text-p">本系统还很好的支持的桌位预定功能，您既可以定单张桌位，也可以定多张桌位，还可以预先点菜，预付定金。已经预定的桌位，在顾客抵达的时间区间内，会自动占用桌位。</p>
      <p class="article-text-bold">连锁配送、安全高效</p>
      <p class="article-text-p">系统采用分部申请，总部采购的物料管理模式。由总部统一进行采购、调拔管理，处理与供应商的关系，与供应商进行结算。</p>
      <p class="article-text-bold">全面的决策分析报表</p>
      <p class="article-text-p">详尽的营业报表，日营业情况统计、出入库统计、毛利分析报表、菜品畅销排行报表、会员消费报表等，并可以将这些营业数据汇总上传到总部。集中的信息管理，通过数据传输，总部可以查询各个分部的营业情况，包括菜品销售情况、毛利情况、会员消费情况等，辅助总部做出相应的决策。</p>
      <p class="article-text-bold">强大的短信平台 完善的会员管理、灵活方便</p>
      <p class="article-text-p">短信平台功能 为您搭建更紧的客户关系。（增值功能）
        系统支持连锁会员消费 真正达到在非实时通讯情况下实现一店发卡，各店通用的会员消费模式。通过会员消费报表实现各店之间会员消费的结算。
        系统提供储值、借记、优惠三种会员类型，支持IC卡、磁卡及条码卡。
        支持多种折扣方案 根据会员分配折扣方案，满足多层次会员不同折扣的需求。 </p>
      <p class="article-text-bold">前台操作、简洁方便</p>
      <p class="article-text-p">前台营业提供数据操作界面、图形操作界面、触摸屏操作界面，用户可根据需求自由选择。
        同时支持键盘和鼠标操作，支持编码及拼音简称两种点菜模式模式，提高前台营业操作速度。
        支持外卖管理，支持多种结帐方式，方便实用。 </p>
      <p class="article-text-bold">数据通讯安全、可靠、稳定</p>
      <p class="article-text-p">传输方式同时支持远程拨号、VPN、数字专线光纤、Internet宽带（ADSL、ISDN）FTP文件传输、文件拷贝等传输方式。</p>
      <p class="article-text-p">适用对象：广泛适用于西餐厅管理，咖啡厅日常管理，连锁咖啡店管理等场合。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeeCase'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/common/stylus/case.styl'
</style>
