<template>
  <!-- The Modal -->
  <div id="employee-modal-id" class="employee-modal" @click="clickOutSide">
    <!--Modal content-->
    <div class="modal-content">
      <div class="modal-top">
        <div class="modal-header">
          <p>Thông tin nhân viên</p>
          <img
            id="x"
            src="../../../assets/icon/x.svg"
            @click="$emit('close-dialog')"
          />
        </div>
        <form id="add-employee-form">
          <div class="modal-body">
            <div class="left-body">
              <img src="../../../assets/img/default-avatar.jpg" />
              <p>(Vui lòng chọn ảnh có định</p>
              <p>dạng</p>
              <p>.jpg .jpeg, .png, .gif )</p>
            </div>
            <div class="right-body">
              <p>A. Thông tin chung</p>
              <div class="green-line"></div>
              <table class="information">
                <tr>
                  <td>
                    <p>Mã nhân viên (<span class="star">*</span>)</p>
                    <base-label-input
                      id="employee-code"
                      ref="employeeCode"
                      status="1"
                      :value="item.employeeCode"
                      @input="item.employeeCode = $event"
                      inputType="text"
                      @blur="error.employeeCode = $event"
                    ></base-label-input>
                  </td>
                  <td>
                    <p>Họ và tên (<span class="star">*</span>)</p>
                    <base-label-input
                      id="employee-fullname"
                      status="1"
                      :value="item.fullName"
                      @input="item.fullName = $event"
                      inputType="text"
                      @blur="error.fullName = $event"
                    ></base-label-input>
                  </td>
                </tr>
              
                <tr>
                  <td>
                    <p>Ngày sinh</p>
                    <base-date-input
                      id="employee-dob"
                      :date="formatDateInput(item.dateOfBirth)"
                      v-on:pick-date="item.dateOfBirth = $event"
                      dateType = "dateOfBirth"
                    />
                  </td>
                  <td>
                    <p>Giới tính</p>
                    <base-auto-combo-box
                      id="employee-gender"
                      type="gender"
                      :value="item.gender"
                      v-on:select="item.gender = $event"
                      comboWidth="300px"
                      @blur="error.gender = $event"
                    ></base-auto-combo-box>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p>Số CMTND/ Căn cước (<span class="star">*</span>)</p>
                     <base-label-input
                      id="employee-identify"
                      status="1"
                      :value="item.identityNumber"
                      @input="item.identityNumber = $event"
                      inputType="identify"
                      @blur="error.identityNumber = $event"
                    ></base-label-input>
                  </td>
                  <td>
                    <p>Ngày cấp</p>
                    <base-date-input
                      id="employee-indetify-date"
                      :date="formatDateInput(item.identityDate)"
                      v-on:pick-date="item.identityDate = $event"
                      dateType = "identityDate"
                    />
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p>Nơi cấp</p>
                    <base-label-input
                      id="employee-identify-place"
                      status="0"
                      :value="item.identityPlace"
                      @input="item.identityPlace = $event"
                      inputType="text"
                    ></base-label-input>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p>Email (<span class="star">*</span>)</p>
                    <base-label-input
                      id="employee-email"
                      status="1"
                      :value="item.email"
                      @input="item.email = $event"
                      inputType="email"
                      @blur="error.email = $event"
                    ></base-label-input>
                  </td>
                  <td>
                    <p>Số điện thoại (<span class="star">*</span>)</p>
                    <base-label-input
                      id="employee-phone"
                      status="1"
                      :value="item.phoneNumber"
                      @input="item.phoneNumber = $event"
                      inputType="phoneNumber"
                      @blur="error.phoneNumber = $event"
                    ></base-label-input>
                  </td>
                </tr>
                
              </table>

              <p>B.Thông tin công việc</p>
              <div class="green-line"></div>
              <table class="information">
                <tr>
                  <td>
                    <p>Vị trí</p>
                    <base-auto-combo-box
                      id="employee-position"
                      type="position"
                      :value="item.positionId"
                      v-on:select="item.positionId = $event"
                      comboWidth="300px"
                      @blur="error.position = $event"
                    ></base-auto-combo-box>
                  </td>
                  <td>
                    <p>Phòng ban</p>
                    <base-auto-combo-box
                      id="employee-department"
                      type="department"
                      :value="item.departmentId"
                      v-on:select="item.departmentId = $event"
                      comboWidth="300px"
                      @blur="error.department = $event"
                    ></base-auto-combo-box>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p>Mã số thuế cá nhân</p>
                    <base-label-input
                      id="employee-tax-code"
                      status="0"
                      :value="item.personalTaxCode"
                      @input="item.personalTaxCode = $event"
                      inputType="tax-code"
                    ></base-label-input>
                  </td>
                  <td>
                    <p>Mức lương cơ bản</p>
                    <base-label-input
                      id="employee-salary"
                      status="0"
                      :value="item.salary"
                      @input="item.salary = $event"
                      inputType="salary"
                    ></base-label-input>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p>Ngày gia nhập công ty</p>
                    <base-date-input
                      id="employee-joindate"
                      @pick-date="item.joinDate = $event"
                      :date="formatDateInput(item.joinDate)"
                      dateType = "joinDate"
                    />
                  </td>
                  <td>
                    <p>Tình trạng công việc</p>
                    <base-auto-combo-box
                      id="employee-status"
                      type="workStatus"
                      :value="item.workStatus"
                      v-on:select="item.workStatus = $event"
                      comboWidth="300px"
                      @blur="error.workStatus = $event"
                    ></base-auto-combo-box>
                  </td>
                </tr>
                
              </table>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <div class="right-footer">
          <button class="m-btn-cancel" onclick="closePopUp()">Huỷ</button>
          <base-icon-button
            id="btn-save-employee"
            class="m-btn-save"
            text="Lưu"
            awesomeIcon="fa fa-save"
            @click.native="save"
          />
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
@import "../../../css/page/employee/modal.css";
</style>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import BaseLabelInput from "../../base/input/BaseLabelInput.vue";
import BaseAutoComboBox from "../../base/BaseAutoComboBox.vue";
import BaseDateInput from "../../base/input/BaseDateInput.vue";
import BaseIconButton from "../../base/button/BaseIconButton.vue";


export default {
  components: {
    BaseLabelInput,
    BaseAutoComboBox,
    BaseDateInput,
    BaseIconButton,

  },
  props: ["mode", "item"],

  data() {
    return {
      error: {
        employeeCode: false,
        fullName: false,
        gender: false,
        identityNumber: false,
        email: false,
        phoneNumber: false,
        position: false,
        department: false,
        workStatus: false,
      },
    };
  },
  mounted(){
    console.log("auto");
      this.$refs.employeeCode.autoFocus();
  },
  methods: {
   
    
    close: function(){
      this.$emit('close-dialog');
    },
    clickOutSide: function(event){
      if(event.target.classList.contains('employee-modal')){
                this.close();
            }
    },
    //  autoFocus: function(){
    //    console.log("auto");
    //   this.$refs.employeeCode.autoFocus();
    // },
    formatDateInput:function(value){
      if(value == null) return null;
      var date = new Date(value);
      var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

   return yyyy+'-'+mm+'-'+dd;



    },

    validForm: function() {
      if (
        this.item.employeeCode == "" ||
        this.item.fullName == "" ||
        this.item.identityNumber == "" ||
        this.item.email == "" ||
        this.item.phoneNumber == ""
      )
        return false;
      for (let item in this.error) {
        if (this.error[item] == true) return false;
      }
      return true;
    },
    addEmployee: function() {
      axios
        .post("https://localhost:44301/api/v1/employees", this.item)
        .then((response) => {
          // console.log("add thanh cong");
          console.log(response);
          this.close();
          this.$emit("success");
        });
    },
    editEmployee: function(){
     
      axios.put("http://cukcuk.manhnv.net/v1/Employees/" + this.item.employeeId, this.item)
      .then((res) =>{
        console.log(res);
        
        this.close();
        this.$emit("success");
      })
    },

    save: function() {

      if (this.validForm()) {


        if (this.mode == "add") this.addEmployee();
        else this.editEmployee();
      }
    },
  },
};
</script>
