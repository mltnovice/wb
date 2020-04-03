<template>
  <div class="Customer">
    <div class="banner"></div>
    <div class="Customer-main">
      <case></case>
    </div>
  </div>
</template>

<script>
import Case from '@/components/Case/Case'
export default {
  name: 'CustomerCase',
  components: {
    Case
  }
}
</script>

<style lang="stylus" scoped>
.Customer
  color: #666
  font-size 15px

  .banner
    width: 100%
    padding-bottom: 30.7%
    background: url("../../assets/images/Home/banner5.jpg") no-repeat center
    background-size auto 100%
  .Customer-main
    max-width 1280px
    margin 0 auto
@media (max-width: 1280px)
  .Customer
    .banner
      padding-bottom 30.7%
@media (max-width: 490px)
  .Customer
    .banner
      padding-bottom: 150px
</style>
