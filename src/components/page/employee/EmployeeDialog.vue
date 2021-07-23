<template>
  <!-- The Modal -->
  <div id="add-employee-modal-id" class="add-employee-modal" v-show="isShow">
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
              <table class="information">
                <tr>
                  <td>
                    <p>Mã nhân viên (<span class="star">*</span>)</p>
                  </td>
                  <td>
                    <p>Họ và tên (<span class="star">*</span>)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <base-label-input
                      id="employee-code"
                      status="1"
                      :value="item.employeeCode"
                      @input="item.employeeCode = $event"
                      inputType="text"
                    ></base-label-input>
                  </td>
                  <td>
                    <base-label-input
                      id="employee-fullname"
                      status="1"
                      :value="item.fullName"
                      @input="item.fullName = $event"
                      inputType="text"
                    ></base-label-input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Ngày sinh</p>
                  </td>
                  <td>
                    <p>Giới tính</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <base-date-input
                      id="employee-dob"
                      :date="item.dateOfBirth"
                      v-on:pick-date="item.dateOfBirth = $event"
                    />
                  </td>

                  <td>
                    <base-auto-combo-box
                      id="employee-gender"
                      :goodsList="genderList"
                       :active="item.gender"
                   v-model = "item.genderName"
               
                      v-on:select="item.gender = $event"
                      comboWidth="300"
                    ></base-auto-combo-box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Số CMTND/ Căn cước (<span class="star">*</span>)</p>
                  </td>
                  <td>
                    <p>Ngày cấp</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <base-label-input
                      id="employee-identify"
                      status="1"
                      :value="item.identityNumber"
                      @input="item.identityNumber = $event"
                      inputType="identify"
                    ></base-label-input>
                  </td>
                  <td>
                    <base-date-input
                      id="employee-indetify-date"
                      :date="item.identityDate"
                      v-on:pick-date="item.identityDate = $event"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Nơi cấp</p>
                  </td>
                </tr>
                <tr>
                  <td>
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
                  </td>
                  <td>
                    <p>Số điện thoại (<span class="star">*</span>)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <base-label-input
                      id="employee-email"
                      status="1"
                      :value="item.email"
                      @input="item.email = $event"
                      inputType="email"
                    ></base-label-input>
                  </td>
                  <td>
                    <base-label-input
                      id="employee-phone"
                      status="1"
                      :value="item.phoneNumber"
                      @input="item.phoneNumber = $event"
                      inputType="phoneNumber"
                    ></base-label-input>
                  </td>
                </tr>
              </table>

              <p>B.Thông tin công việc</p>
              <table class="information">
                <tr>
                  <td>
                    <p>Vị trí</p>
                  </td>
                  <td>
                    <p>Phòng ban</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <base-auto-combo-box
                      id="employee-position"
                      :goodsList="positionList"
                      :active="item.positionId"
                   :value="positionName(item.positionId)"

                      v-on:select="item.positionId = $event"
                     
         
                      comboWidth="300"
                    ></base-auto-combo-box>
                  </td>
                  <td>
                    <base-auto-combo-box
                      id="employee-department"
                      :goodsList="departmentList"


                      :active="item.departmentId"
                   :value="departmentName(item.departmentId)"

                      v-on:select="item.departmentId = $event"
                    
            
                      comboWidth="300"
                    ></base-auto-combo-box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Mã số thuế cá nhân</p>
                  </td>
                  <td>
                    <p>Mức lương cơ bản</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <base-label-input
                      id="employee-tax-code"
                      status="0"
                      :value="item.personalTaxCode"
                      @input="item.personalTaxCode = $event"
                      inputType="number"
                    ></base-label-input>
                  </td>
                  <td>
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
                  </td>
                  <td>
                    <p>Tình trạng công việc</p>
                  </td>
                </tr>
                <tr>
                  <td><base-date-input id="employee-joindate"
                   @pick-date="item.joinDate = $event"
                   :date="item.identityDate"
                   />
                   </td>
                  <td>
                    <base-auto-combo-box
                      id="employee-status"
                      :goodsList="workStatus"
                      :active="item.workStatus"
                   :value="workStatusName(item.workStatus)"

                      v-on:select="item.workStatus = $event"
                      comboWidth="300"
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
  props: ["isShow", "mode","item"],
  
  data() {
    return {
      
      genderList: [
        {
          id: 0,
          name: "Nữ",
        },
        {
          id: 1,
          name: "Nam",
        },
        {
          id: 2,
          name: "Khác",
        },
      ],
      workStatus: [
        {
          id: 0,
          name: "Đang thử việc",
        },
      ],
      departmentList: [],
      positionList: [],
      
    };
  },
  methods: {
   
    
    departmentName: function(value){
      if(value == null) return "";
      for(let i =0 ; i < this.departmentList.length ;i++)
        if(value == this.departmentList[i]) return this.departmentList[i].name;
    },
    positionName: function(value){
      if(value == null) return "";
      for(let i =0 ; i < this.positionList.length ;i++)
        if(value == this.positionList[i]) return this.positionList[i].name;
    },
    workStatusName: function(value){
      if(value == null) return "";
      return "Đang thử việc";
    },
    addEmployee : function (){
      axios.post("http://cukcuk.manhnv.net/v1/Employees",this.item)
      .then(response =>{
        console.log("add thanh cong");
        console.log(response);
        //this.emptyForm();
       this.$emit('close-dialog')
        this.$emit('success');
      })
    },
    emptyForm(){
      this.item ={
        employeeCode: "",
        fullName: "",
        dateOfBirth: "",
        gender: undefined,
        identityNumber: "",
        identityDate: "",
        identityPlace: "",
        email: "",
        phoneNumber: "",
        departmentId: "",
        positionId: "",
        workStatus: undefined,
        personalTaxCode: "",
        salary: undefined,
        joinDate : "",
        genderName : "",

      }

    },
    save: function(){
      if(this.mode== "add") this.addEmployee();
    }
  },
  created() {
    axios
      .get("http://cukcuk.manhnv.net/api/Department")
      .then((res) => {
        res.data.forEach((element, index) => {
          console.log(index);
          this.departmentList.push({
            id: element.DepartmentId,
            name: element.DepartmentName,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://cukcuk.manhnv.net/v1/Positions")
      .then((res) => {
        res.data.forEach((element, index) => {
          console.log(index);
          this.positionList.push({
            id: element.PositionId,
            name: element.PositionName,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
