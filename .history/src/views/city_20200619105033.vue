<template>
 <div>

 </div>
</template>

<script>
import axios from 'axios'
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
     
   },
   mounted() {
     axios.get('./city.json').then(res=>{
       console.log(res)
     }).catch(err=>{
       confir
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>