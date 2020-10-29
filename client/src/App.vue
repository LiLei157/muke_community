<template>
  <div id="app">
    <common-header></common-header>
    <div class="layui-main">
          <router-view class="animate__animated animate__fadeIn"></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '@/components/CommonFooter'
export default {
  name: 'App',
  data(){
    return{
        
    }
  },
  components: {
    // HelloWorld
    CommonHeader,
    CommonFooter
  },
  mounted(){
    
  }
}
</script>

<style lang="scss">
@import '~@/assets/font/font.css';
#app{
  height:100vh;
  .layui-main{
    width: 100%;
    top: 61px;
    // height: 86vh;
    background-color: #f2f2f2;
    padding-top: 15px;
  }
}
</style>
