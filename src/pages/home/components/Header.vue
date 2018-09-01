<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/City">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  //在css中使用@符号时需要在前面加~,@代表src目录
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color:#fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: 0.4rem
    .header-input
      flex: 1
      margin-top: 0.12rem
      margin-left: 0.2rem
      padding-left: 0.2rem
      height: 0.64rem
      line-height: 0.64rem
      background: #fff
      border-radius: 0.1rem
      color: #ccc
    .header-right
      color: #fff
      padding: 0 .1rem
      min-width: 1.04rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
