<template>
  <div
    class="input label-input"
    :class="{ 'active-input': activeInput, 'error-input': errorInput }"
  >
    <input
      autocomplete="on"
      type="text"
      placeholder=""
      v-model="inputValue"
      ref="input"
      @focus="focusInput"
      @keypress="keyPress"
      @keyup="keyUp"
      @blur="blurInput"
      
    />
    <img
      class="x-icon"
      src="../../../assets/icon/x.svg"
      v-show="xShow"
      @click="deleteInput"
    />
    <p
      v-show="vndShow"
      class="vnd"
      style="padding-right: 10px;font-style: italic;"
    >
      (VNĐ)
    </p>
    <div class="wrap-title" v-show="titleShow">
      <div class="title">{{errorMsg}}</div>
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
    value: String,
  },
  data() {
    return {
      activeInput: false,
      errorInput: false,
      errorMsg: null,
      xShow: false,
      titleShow: false,
    };
  },

  computed: {
    vndShow: function() {
      if (this.inputType == "salary") return true;
      return false;
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        if (val != "" && val != null ) {
        this.xShow = true;
        }else this.xShow=false;
       
        this.$emit("input", val);
      },
    },
  },
 
  methods: {
    autoFocus: function(){
      this.$refs.input.focus();
    },
    errorShow: function(value){
      this.errorInput = value;
      this.titleShow = value;
    },
    focusInput: function() {
      this.errorShow(false);
      this.activeInput = true;
      
    },
    keyPress: function(event){
    
 
      if(this.inputType == "identityNumber" || this.inputType == "phoneNumber" || this.inputType == "tax-code" || this.inputType == "salary" ){

        if(event.keyCode <48 || event.keyCode >57){
          event.preventDefault();
         
         
        }
      }


    },
    keyUp: function() {
      if (this.inputValue != "") this.xShow = true;
      else this.xShow = false;
    },
    blurInput: function() {
    
      this.activeInput = false;
    
      if (this.status == "1") {
    
        if (this.inputValue == ""){
          this.errorMsg = "Thông tin này bắt buộc nhập";
          this.errorShow(true);
          return false;
        
        }
      }
      if (this.inputType == "email") {
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(this.inputValue.toLowerCase())) 
        {
          this.errorMsg = "Email không đúng định dạng";
          this.errorShow(true);
          return false;
      
        }
      }
      if (this.inputType == "phoneNumber") {
        let reg = /((84|0)[3|5|7|8|9])+([0-9]{8})\b/;
        if (!reg.test(this.inputValue)) {
          this.errorMsg = "Số điện thoại không đúng định dạng";
          this.errorShow(true);
          return false;

        }
      }
      if (this.inputType == "identityNumber") {
        if(this.inputValue.length != 9 && this.inputType.length != 12){
          this.errorMsg = "Số CMTND/Căn cước không đúng";
          this.errorShow(true);
          return false;
        }

      }
      
      return true;
      //this.$emit('blur', this.errorInput);
      
    },
    deleteInput: function() {
      this.inputValue = "";
      this.xShow = false;
 
      this.$refs.input.focus();
    },
  },
};
</script>
