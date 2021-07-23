<template>
  <div
    class="input label-input"
    :class="{ 'active-input': activeInput, 'error-input': errorInput }"
  >
    <input autocomplete="on"
      type="text"
      placeholder=""
      v-model="inputValue"
      ref="input"
      @click="clickInput"
      @keyup="keyUp"
      @blur="blurInput"
    />
    <img
      class="x-icon"
      src="../../../assets/icon/x.svg"
      v-show="xShow"
      @click="deleteInput"
    />
    <p v-if="vndShow" class="vnd" style="padding-right: 10px;font-style: italic;">(VNĐ)</p>
    <div class="wrap-title" v-show="titleShow">
      <div class="title">Thông tin này là bắt buộc</div>
      <i class="fas fa-caret-down"></i>
    </div>
  </div>
</template>
<style scoped>
@import "../../../css/base/input/input.css";
@import "../../../css/base/input/label-input.css";
</style>
<script>
export default {
  props: {
      status: String,
      inputType: String,
      value : String,
  },
  data() {
    return {
      
      activeInput: false,
      errorInput: false,
      xShow: false,
      titleShow: false,
      

    };
  },
  
  computed:{
    vndShow : function (){
      if(this.inputType == "salary" ) return true;
      return false;
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    clickInput: function() {
        //console.log(thí.)
     this.errorInput = false;
      this.activeInput = true;

    },
    keyUp: function() {
      if (this.inputValue != "") this.xShow = true;
      else this.xShow = false;
    },
    blurInput: function(){
        console.log("blur");
        this.activeInput = false;
        console.log(this.inputValue);
            if(this.status == "1"){
                console.log("status");
                if(this.inputValue == "") this.errorInput = true;

            }
        if(this.inputType == "email"){
          let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!reg.test(this.inputValue.toLowerCase()))  this.errorInput = true;

        }
        if(this.inputType == "phoneNumber"){
          let reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
          if(!reg.test(this.inputValue))  this.errorInput = true;

        }



    },
    deleteInput: function() {

      this.inputValue = "";
      this.xShow = false;
      this.$refs.input.click();
      this.$refs.input.focus();

    },

  },
};
</script>
