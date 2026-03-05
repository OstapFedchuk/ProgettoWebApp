<template>
  <div id="app">
    <Header />
    
    <main>
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }

</script>



<style scoped>
  
  template {
    height: 100%;
    margin: auto;
    padding: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

</style>
