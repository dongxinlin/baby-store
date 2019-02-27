<template>
    <div class="goodsInfo-container">
    <van-nav-bar :title="goodsinfo.name" left-text="返回" left-arrow @click-left="onClickLeft"/>
   <div class="img">
        <img :src="img[0]" alt="" @click="swiperImg">
   </div>
    <div class="info">
        <p>商品名称:
            <span class="name">{{goodsinfo.name}}</span>
        </p>
        <p >商品价格:
            <span class="price">{{goodsinfo.price}}</span>
        </p>
        <p class="count">
            购买数量:
            <van-stepper v-model="value" />
        </p>
        <p>商品描述:
            <span class="describe">{{goodsinfo.description}}</span>
        </p>
        <p >商品详情:</p> 
        <div v-html="goodsinfo.content"></div>
    </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';

export default {
    data() {
        return {
            id:this.$route.params.id,
            goodsinfo:{},
            img:[],
            value:1
        }
    },
    created(){
        this.getGoodsInfo()
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        getGoodsInfo(){
            this.$axios.get('goods/getGoodsInfo/'+this.id).then( result => {
                if(result.status === 200){
                    this.goodsinfo = result.data.data
                    this.img = result.data.data.big_img
                }
            })
        },
        swiperImg(){
            ImagePreview(this.img)
        }
        
    }
}
</script>

<style lang="less">
    .goodsInfo-container{
           .img{
                img{
                width: 100%;
                height: 300px;
            }
           }
            .info{
                padding: 5px;
                p{
                    font-size: 16px;
                    font-weight: bolder;
                    margin-bottom: 5px;
                }
                img{
                    width: 100%;
                }
                .name{
                    color: red;
                }
                .price{
                    color: red;
                }
                .count{
                    display: flex;
                    align-items: center;
                }
            }
    }
    .van-image-preview{
        img{
            width:100%;
        }
    }
</style>