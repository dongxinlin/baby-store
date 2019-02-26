<template>
  <div class="goodslist-container">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft"/>
<scroller 
  :on-refresh="refresh"
  :on-infinite="infinite"
  ref="scroller">

    <div class="list-container">
        <ul>
            <router-link  :to="'/goodsinfo/'+item.id" class="item" v-for="(item) in goodslist" :key="item.id">
                <img :src="item.cover_img" alt="">
               <div>
                   <p>商品名称:&nbsp;&nbsp;<span class="name">{{item.name}}}</span></p>
                   <p >市场价:
                       <span class="price">
                           {{item.price}}
                       </span>
                   </p>
               </div>
            </router-link>
        </ul>
    </div>
</scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: parseInt(this.$route.query.id),
      title:this.$route.query.title,
      goodslist:[],
      page:1,
      pageSize:10,
      totalCount:0
    };
  },
  created(){
      this.getGoodsList()
  },
  methods: {
    onClickLeft() {
        this.$router.go(-1)
    },
    getGoodsList(flag){
       return this.$axios.get('goods/getGoodsList?cateId='+this.id+'&page='+this.page+'&pageSize='+this.pageSize).then( result => {
            if(result.status === 200){
                this.totalCount = result.data.data.totalCount
                if(flag){
                    this.goodslist = this.goodslist.concat(result.data.data.goods)
                }else{
                    this.goodslist = result.data.data.goods
                }
            }
        })
    },
    refresh(){
        this.page = 1;
        this.getGoodsList().then( () => {
            this.$refs.scroller.finishPullToRefresh()
        })
    },
    infinite(){
        this.page++
        this.getGoodsList(true).then( () => {
            this.$refs.scroller.finishInfinite( this.goodslist.length >= this.totalCount)
        })
    }
  }
}
</script>

<style lang="less" scope>
.goodslist-container {
.pull-to-refresh-layer{
    margin-top: -10px !important;
}
._v-container{
    margin-bottom: 50px !important;
}

    .list-container{
        padding: 5px;
        .item{
            width: 100%;
            height: 100px;
            border: 1px solid #eaeaea;
            box-shadow: 0 0 5px #eaeaea;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            img{
                height: 100%;
            }
            p{
                font-size: 14px;
                margin-bottom: 5px;
            }
            .name{
                color: #226aff;
            }
            .price{
              color: red;
            }
        }
    }
}
</style>
