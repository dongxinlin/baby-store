<template>
  <div class="GoodsCategories-container">
    <van-tabs  @click="onClick">
      <van-tab  v-for="(item) in categories" :key="item.id" :title="item.name">
        <ul class="item-container">
          <li v-for="(item) in subCategories" :key="item.id">
            <img :src="item.img" alt="">
            <span class="title">{{item.name}}</span>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
        categories:[], // 一级分类
        subCategories:[]
    };
  },
  created(){
    this.getCategories()
    this.getSubCategories(1)
  },
  methods:{
    getCategories(){
      this.$axios.get('goods/getGoodsCategories').then( result => {
        if(result.status === 200){
          this.categories = result.data.data
        }
      })
    },
    getSubCategories(id){
      console.log(id)
      this.$axios.get('/goods/getGoodsSubCategories/'+id,{page:1,pageSize:10}).then( result => {
        if(result.status === 200){
          this.subCategories =[]
          this.subCategories = result.data.data
        }
      })
    },
      onClick(index, title) {
      this.getSubCategories(index+1)
    }
  }
};
</script>

<style lang="less">
  .GoodsCategories-container{
    .van-tabs {
      margin-bottom: 10px;
    }
    .item-container{
      padding:10px 15px 0 15px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        border: 1px solid #ccc;
        box-shadow: 0 0 6px #ccc;
        width: 160px;
        height: 200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        .title{
          color: #2c3e50;
          line-height: 40px;
          font-weight: bolder;
        }
      }
    }
  }
</style>