<template>
  <div id="app">
    <TheHeader/>
    <div class="wrap">
      <TheMenu/>
      <ThePage/>
   

    </div>
  </div>
  
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
import TheMenu from './components/layout/TheMenu.vue'
import ThePage from './components/layout/ThePage.vue'

export default {
  name: 'App',
  components: {
    TheHeader,TheMenu,ThePage
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
@import './css/common/main.css';
@import './css/common/wrap.css';
</style>
