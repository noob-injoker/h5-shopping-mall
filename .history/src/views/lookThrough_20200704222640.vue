<template>
<div>
   
   <div class="top df h50 ">

        <div class="goback ccc " @click="goback">
            <van-icon name="arrow-left" />
        </div>

        <div class="ccc fs18 w300 text2">最近浏览</div>

    </div>

    <div>
    
      <div></div>

    </div>

</div>
</template>

<script>
import uniq from 'lodash/uniq'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            getDatas: null,

        }
    },
    methods: {
        getData() {
            this.getDatas = JSON.parse(localStorage.getItem('viewss'))
            console.log(this.getDatas);
            this.getDatas = uniq(this.getDatas)
            this.getDatas.map((item, index) => {
                this.$api.getGoodsOne(item).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            })
        },
        goback(){
          this.$router.back()
        }

    },
    mounted() {
        this.getData()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>
.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}

.goback {
    width: 30px;
}
.text2{
  letter-spacing:2px;
}

</style>
