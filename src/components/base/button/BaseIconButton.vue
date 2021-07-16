<template>
    <button  class="icon-button" >
                    <img :src="require(`@/assets/${url}`)" />
                    <p>{{text}} </p>
        </button>
</template>
<style scoped>
@import '../../../css/base/icon-button.css';
</style>

<script>


export default ({
    props :{
        url : String,
        text : String
    }

    
})
</script>
