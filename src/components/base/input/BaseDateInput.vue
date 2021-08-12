<template>
  <input
    type="date"
    @focus="focus"
    @blur="isActive = false"
    v-model="date"
    :max="maxDate"
    @click="isActive = true"
    :class="{ 'active-date': isActive }"
  />
</template>
<style scoped>
@import "../../../css/base/input/date-input.css";
</style>
<script>
export default {
  props: ["date","dateType"],
  data() {
    return {
      isActive: false,
      maxDate: null
    };
  },
  created(){
      
      if(this.dateType == "joinDate") return;
      var date = new Date;
      var month = date.getMonth() + 1;
      var day = date.getDate();
      
      var year = date.getFullYear();
      if(this.dateType == "dateOfBirth") year = year - 15;
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
     
    this.maxDate =  year + "-" + month + "-" + day;
  },
  watch: {
    date: function() {
      this.$emit("pick-date", this.date);
    },
  },
  methods: {
    focus: function() {
      this.isActive = true;
    },
    
  },
};
</script>
