<template>
<div>

    <div>

        <div class="top df h50">
            <div class="ccc text1">
                <div @click="goback">
                    <van-icon name="arrow-left" />
                </div>
            </div>

            <div class="ccc w300 text2">评价中心</div>
        </div>
    </div>

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

        }
    },
    methods: {

        goback() {
            history.go(-1)
        },

        grtComment(id, rate, content, anonymous, _id, order_id, image) {
            return service.post(`/goodsOne/comment`, {
                    id: id,
                    rate: rate,
                    content: content,
                    anonymous: anonymous,
                    _id: _id,
                    order_id: order_id,
                    image: image
                }),
               
        },
         getOrderNum() {
                    this.$api.getOrderNum().then(res => {

                        console.log(res);

                    }).catch(err => {
                        console.log(err);
                    })
                }

    },
    mounted() {
        this.getOrderNum()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
