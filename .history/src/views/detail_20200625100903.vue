<template>
 <div>
        <div class="box">
           
          <div class="r1"> 
            <div class="w2 b1"><van-icon name="arrow-left" /></div>
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
   data () {
     return {
            id:'',
     }
   },
   methods: {
       
       getDetail(){
           this.$api.getGoodsOne(this.id).then(res=>{
               console.log(res);
           }).catch(err=>{
               console.log(err);
           })
       }

   },
   mounted() {
       this.id = this.$route.query.id 
       console.log(this.id);
       this.getDetail()

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>