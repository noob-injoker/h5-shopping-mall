<template>
<div>

    <div>
        <div class="w" v-for="(item,index) in slides" :key="index">
            <img :src="item.image" alt="">
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        slides: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

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
