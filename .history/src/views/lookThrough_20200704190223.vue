<template>
 <div>
    this is go through
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
      getData(){
       this.getlocalStorage.getItem('viewss')
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

</style>