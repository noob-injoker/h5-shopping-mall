<template>
<div>

    <div class="container" ref="container">
        <div class="box">
            <div class="content">
                <router-view>

                </router-view>
            </div>
            <div class="bottomnav  fs14 df">

                <div :class="{'one':flag===1}" class="homelayout f1 df  a-center j-center f-column " @click="gotoHome">
                    <div class="fs25 " >
                        <van-icon name="wap-home-o" />
                    </div>
                    <div class="text">首页</div>

                </div>
                <div :class="{'one':flag===2}" class="catalayout f1 df a-center j-center f-column" @click="gotoCata">
                    <div class="fs25" >
                        <van-icon name="wap-nav" />
                    </div>
                    <div class="text">分类</div>
                </div>
                <div :class="{'one':flag===3}" class="shopcarlayout f1 df a-center j-center f-column " @click="gotoShopCar">
                    <div class="fs25" >
                        <van-icon name="cart" />
                    </div>
                    <div class="text">购物车</div>

                </div>
                <div :class="{'one':flag===4}" class="minelayout f1 df a-center j-center f-column" @click="gotoMine">
                    <div class="fs25" >
                        <van-icon name="manager-o" />
                    </div>
                    <div class="text">我的</div>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios"
// import BScroll from 'better-scroll'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            flag:0,

        }
    },
    methods: {

        gotoHome() {
            if (this.$route.path !== '/') {
                this.$router.push({
                    name: 'home'
                })
            }
            this.flag = 1
        },
        gotoCata() {

            if (this.$route.path !== '/cata') {
                this.$router.push({
                    name: 'cata'
                })
            }
            this.flag = 2

        },
        gotoShopCar() {
            if (this.$route.path !== '/shop') {
                this.$router.push({
                    name: 'shop'
                })
            }
            this.flag = 3

        },
        gotoMine() {

            if (this.$route.path !== '/mine') {
                this.$router.push({
                    name: 'mine'
                })
            }
            this.flag = 4

        },
        getRecommend(){
        this.$api.getRecommend().then(res=>{
                
              }).catch(err=>{
               
              })
        },
        
    },
    mounted() {
        this.getRecommend()
        // new BScroll(this.$refs.container, {
        //     scrollY: true,
        //     click: true
        // })

    },
    watch: {
        '$route.path'(val){
            if(val===1){
                this.flag ===1
            }else if(val===2){
                
            }   
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.one{
    color: skyblue;
}

.text{
    position: relative;
    bottom: 5px;
}
.bottomnav{
    color:#666666;
   
   
    
}
.content {
    height: 615px;
   
}

</style>
