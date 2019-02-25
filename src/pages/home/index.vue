<template>
    <div class="home-container" >
     <van-row type="flex" justify="space-between" align="center">
        <van-col span="3">
            <router-link to="/getGoodsCategories">
                 <van-icon name="label-o" size="18px" />
            </router-link>
        </van-col>
        <van-col span="18">
            <div class="searchBox">
                 <van-icon name="search"  />
                <input type="text" class="search" placeholder="大家在搜索: 衣服">
            </div>
        </van-col>
        <van-col span="3"><router-link to="/user/login">登录</router-link></van-col>
     </van-row>
     <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item.id"><img :src="item.img" alt=""></van-swipe-item>
    </van-swipe>
    <ul class="list">
        <li class="commodity" v-for="item in goodsList" :key="item.id">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            banners:[],
            goodsList:[],
            page:1,
            pageSize:30
        }
    },
    created(){
        this.getBanners()
        this.getGoodsSubCategories()
    },
    methods: {
        getBanners(){
            this.$axios.get('/home/getBanners')
            .then(res=>{
                if(res.data.status===200){
                    this.banners=res.data.data
                }
            })
        },
        getGoodsSubCategories(){
            this.$axios.get(`/goods/getGoodsSubCategories?page=${this.page}&pageSize=${this.pageSize}`)
            .then(res=>{
               if(res.data.status===200){
                   this.goodsList=res.data.data.cates
               }
            })
            .catch(err=>{
                console.dir(err)
            })
        }
    },
}
</script>

<style lang="less" scoped>
.home-container{
    .van-row--align-center{
        position: absolute;
        z-index: 999;
        margin-top: 5px;
         height: 30px;
         width: 100%;
        .van-col{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            a{
                color: black;
            }
        }
        .searchBox{
            position: relative;
            width: 100%;
            height:30px;
            color: #323233;
           .search{
               height: 100%;
               width: 100%;
               border-radius: 20px;
               border: 1px solid #ccc;
               padding-left: 50px;
               font-size: 13px;
               box-sizing: border-box;
           }
           .van-icon{
               position: absolute;
               top: 50%;
               transform: translateY(-40%);
               left:30px;
           }
        }
    }
    .van-swipe-item{
        img{
            width: 100%;
        }
    }
    .list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .commodity{
            padding: 10px 0;
            width: 33%;
            text-align: center;
            img{
                width: 50%;
                visibility: center;
            }
            p{
                font-size: 12px;
                color: #888;
            }
        }   
    }
    
}
</style>


