<template>
<div class="pop-up-background" @click="clickOutSide">
    <div class="pop-up">
        <div class="x-icon" @click="close"></div>
        <div class="title">Xóa bản ghi </div>
        <div class="content">
            <div class="warning-icon"><i class="fas fa-exclamation-triangle" style="color: red"></i></div>
            <div class="warning-text">Bạn có chắc muốn xóa bản ghi này hay không?</div>
        </div>
        <div class="footer">
            <base-second-button text="Huỷ" @click.native="close"/> 
            <base-normal-button class="btn-delete" text="Xoá" @click.native="$emit('delete')"/>

        </div>
    </div>
</div>
</template>
<style scoped>
@import '../../css/base/pop-up.css';
</style>
<script>
import BaseNormalButton from './button/BaseNormalButton.vue';

import BaseSecondButton from './button/BaseSecondButton.vue';
export default {
    components:{
      
        BaseSecondButton,
        BaseNormalButton
    },
    methods: {
        close: function(){
            this.$emit('close-popup');
        },
        clickOutSide: function(event){
            if(event.target.classList.contains('pop-up-background')){
                this.close();
            }
        }


    },
}
</script>
