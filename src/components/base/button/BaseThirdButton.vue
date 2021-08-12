<template>
     <button class="third-button ">
        <i class="fa" :class="iconUrl" ></i>
      </button>
</template>
<style scoped>
@import '../../../css/base/button/third-button.css';
</style>
<script>
export default {
    props :{
        iconUrl : String,
    }
}
</script>