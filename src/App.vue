<template>
  <div id="app">
    <TheHeader/>
    <div class="wrap">
      <TheMenu/>
      <TheEmployeePage/>
   

    </div>
  </div>
  
</template>

<script>



import TheHeader from './components/layout/TheHeader.vue'
import TheMenu from './components/layout/TheMenu.vue'
import TheEmployeePage from './components/page/employee/EmployeePage.vue'

export default {
  name: 'App',
  components: {
    TheHeader,TheMenu,TheEmployeePage
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';


@import './css/base/input/input.css';
@import './css/base/input/icon-input.css';
@import './css/base/input/label-input.css';
@import './css/base/input/input-title.css';
@import './css/base/dropdown.css';
@import './css/base/combo-box.css';


@import './css/common/main.css';
@import './css/common/wrap.css';



</style>
