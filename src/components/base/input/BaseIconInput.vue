<template>
    <div class="input icon-input" :class="{'active-input' : isActive}">
        <img class="search-icon" :src="require(`@/assets/${searchIconUrl}`)" >
        <input type="text" v-model="value" :placeholder="place" @click="isActive = true" @keyup="setKeyup()" @blur="isActive = false" ref="textInput" >
        <img v-show="isShow" class="x-icon" :src="require(`@/assets/${xIconUrl}`)" @click="deleteInput()">
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false,
            isShow : false,
            value : ""
        }
    },
    props :{
        searchIconUrl : String,
        xIconUrl : String,
        place : String
    },
    methods: {
        setKeyup: function(){
            if(this.value !== "") this.isShow=true;
            else this.isShow = false;
        },
        deleteInput: function(){
            console.log("helo")
            this.value="";
            this.isShow = false;
            console.log(this.$refs.textInput);

            this.$refs.textInput.click();
            this.$refs.textInput.focus();

        }
    },
}
</script>
<style scoped>
@import '../../../css/base/input/input.css';
@import '../../../css/base/input/icon-input.css';
</style>