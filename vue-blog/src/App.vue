<template>
  <div id="app">
    <HeaderInner />
    <Header />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/views/Header.vue'
import HeaderInner from '@/components/HeaderInner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    HeaderInner,
    Footer
  }
}
</script>

<style lang="less">
body,html{
  margin: 0;
  padding: 0;
  background-color: #eee;
}
a{
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
