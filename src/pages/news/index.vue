<template>
    <div class="news-container">
        <van-tabs v-model="active" @change="gaib">
            <van-tab v-for="item in news" :key="item.id">
                <div slot="title" @click="onClick(item.id)">{{ item.name }}</div>
                <div class="news" v-for="item in newList" :key="item.id">{{item}}</div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news:[],
            page:1,
            pageSize:20,
            newList:[],
            active:0
        }
    },
    created(){
        this.getNews()
       
    },
    updated(){
        this.onClick(1)  
    },
    methods:{
        getNews(){
            this.$axios.get('/news/getNewsCategories')
            .then(res=>{
                if(res.data.status===200){
                    this.news=res.data.data
                }
            })
        },
        onClick(e){
            setTimeout(()=>{
                this.$axios.get(`news/getNewsList?cate=${e}&page=${this.page}&pageSize=${this.pageSize}`)
                .then(res=>{
                    if(res.data.status===200){
                        this.newList=res.data.data.news
                    }
                })
            },20)
        },
        gaib(){
            console.log(1)
        }
    },
}
  
</script>

<style lang="less" scoped>
</style>
