<template>
<div>

    <van-checkbox-group v-model="list">
       

            <div v-if="list.length>0">
            
              <div v-for="(item,index) in list" :key="index">
                <van-checkbox name="item.kk">{{item.check}}</van-checkbox>

            </div>
            
            </div>
       
    </van-checkbox-group>

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

            list: [{
                check: false,
                kk:a
            }, {
                check: true,
                kk:b
            }, {
                check: false,
                kk:c
            }],
            result: []

        }
    },
    methods: {

        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
