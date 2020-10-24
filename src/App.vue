<template>
  <div id="app">
    <common-header></common-header>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
    // HelloWorld
    CommonHeader
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
