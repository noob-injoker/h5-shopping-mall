<template>
 <div>
    <div class="tops h30  df">
      <div class="ccc top_title_left "><van-icon name="arrow-left" /></div>
      <div class="ccc top_title_right">城市列表</div>
    </div>
    <div class="inp">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div >

      <div>当前城市</div>
      <!-- <div>
        <div v-for="(item,index) in this.two" :key="index">
          {{item}}
        </div>
      </div> -->

      <div>
        <div v-for="(item,index)"" in citys.data.cities :keys></div>
       </div>
      
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import city from './lib/city.js'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       citys:[],
       value:'',
       one:'',
       two:''
     }
   },
   methods: {
     
   },
   mounted() {
    //  axios.get('./city.json').then(res=>{
    //   this.citys = res.data
    //  }).catch(err=>{
    //    console.log(err)
    //  })
    this.citys = city
  
    
    console.log(this.citys.data.cities)
     this.one = this.citys.data.cities
     this.two = Object.keys(this.citys.data.cities)

     console.log(this.two);
     

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.tops{
  border-bottom: 1px solid gray;
  padding: 8px 0;
  font-size: 22px;
  .top_title_left{
    width:40px;

  }
  .top_title_right{
  width:335px;
}
}
.inp{
  padding: 0 10px;
}


</style>