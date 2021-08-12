<template>
    <button  class="icon-button" >
                    <i :class="awesomeIcon"></i>
                    <p>{{text}} </p>
        </button>
</template>
<style scoped>
@import '../../../css/base/button/icon-button.css';
</style>

<script>


export default ({
    props :{
        awesomeIcon : String,
        text : String
    },

    methods: {
      
    },
})
</script>
