<template>
 <div>
    <category :activeIndex='activeIndex'></category>
 </div>
</template>

<script>
import category from '../components/cata/category.vue'
 export default {
   name: '',
   props: {
   },
   components: {
     category,

   },
   data () {
     return {

     }
   },
   methods: {
     

   },
   mounted() {
      this.activrIndex = this.$route.query.activeIndex
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>