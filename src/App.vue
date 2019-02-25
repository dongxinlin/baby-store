<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o">分类</van-tabbar-item>
      <van-tabbar-item icon="new-o">新闻</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" info="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less">

</style>
