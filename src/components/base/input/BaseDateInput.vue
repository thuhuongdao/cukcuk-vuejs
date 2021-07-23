<template>
    <input type="date" v-model="date" @click="isActive = true" :class="{'active-date' : isActive}" />

</template>
<style scoped>
@import '../../../css/base/input/date-input.css';

</style>
<script>
export default {
    props:['date'],
    data() {
        return {
            isActive : false,
         
        }
    },
    watch:{
        date : function (){
            this.$emit('pick-date', this.date);
        }
    }
}
</script>