<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left" v-if="somedata.length>0">
            <div class="left_text" v-for="(item,index) in somedata" :key="index">
                <div> {{item.mallCategoryName}}</div>
            </div>
        </div>
        <div class="right">

            <div class="right_content">

                <div v-if="somedata.length>0" class="df">
                    <div class="right_item" v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index">
                        {{item.mallSubName}}
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            list: [],
            somedata: [],
            aIndex: ''

        }
    },
    methods: {

    },
    mounted() {

        this.somedata = JSON.parse(localStorage.getItem('somedata'))
        this.aIndex = localStorage.getItem('oneIndex')
        console.log(this.aIndex);
        console.log(this.somedata);
        // console.log(this.somedata[0].bxMallSubDto);

    },
    watch: {

    },
    computed: {

        oneIndex() {
            return this.$store.state.oneIndex
        }

    }
}
</script>

<style lang="scss" scoped>
.top {
    width: 375px;
    height: 40px;
    border: 1px solid red;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left {
    width: 75px;
    height: 564px;
    border: 1px solid red;
}

.left_text {
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right {
    width: 300px;
    height: 564px;
    border: 1px solid red;
    display: flex;
}

.right_item {
    font-size: 15px;
    padding-block: 10px;
    padding-ri
    height: 30px;
    
}
</style>
