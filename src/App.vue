<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">标签</van-tabbar-item>
      <van-tabbar-item icon="label-o">标签</van-tabbar-item>
      <van-tabbar-item icon="new-o">标签</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" info="20">标签</van-tabbar-item>
      <van-tabbar-item icon="contact">标签</van-tabbar-item>
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
    #app{
      
    }
</style>
