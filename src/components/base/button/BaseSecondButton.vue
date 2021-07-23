<template>
     <button class="second-button ">
        <i class="fa" :class="iconUrl" ></i>
      </button>
</template>
<style scoped>
@import '../../../css/base/second-button.css';
</style>
<script>
export default {
    props :{
        iconUrl : String,
    }
}
</script>