<template>
    <div class="goodsInfo-container">
    <van-nav-bar title="title" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>