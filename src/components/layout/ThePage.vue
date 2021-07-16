<template>
    <div class="page">
           <EmployeeHeader/>
           <EmployeeFilter/>
           <EmployeeList/>
            
    
            
    </div>
</template>
<script>
import EmployeeHeader from '../page/employee/EmployeeHeader.vue'
import EmployeeFilter from '../page/employee/EmployeeFilter.vue'
import EmployeeList from '../page/employee/EmployeeList.vue'


export default {
  components: {
    EmployeeHeader,EmployeeFilter,EmployeeList
  },
  // ...
}
</script>
<style scoped>
@import '../../css/base/button.css';
@import '../../css/base/input/input.css';
@import '../../css/base/input/icon-input.css';
@import '../../css/base/input/label-input.css';
@import '../../css/base/input/input-title.css';
@import '../../css/base/dropdown.css';
@import '../../css/base/combo-box.css';
@import '../../css/common/page.css';

</style>