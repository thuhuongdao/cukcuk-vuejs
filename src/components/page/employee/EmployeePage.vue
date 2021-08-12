<template>
  <div class="page">
    <div class="employee-header">
      <p class="employee-lable">Danh sách nhân viên</p>
      <base-icon-button
        id="btn-add-employee"
        class="add-employee"
        awesomeIcon="fas fa-user-plus"
        text="Thêm nhân viên"
        @click.native="addEmployee()"
      ></base-icon-button>
    </div>

    <div class="filter-bar">
      <div class="left-filter">
        <base-icon-input
          searchIconUrl="icon/search.png"
          xIconUrl="icon/x.svg"
          place="Tìm kiếm theo mã, tên hoặc số điện thoại"
        ></base-icon-input>
        <base-auto-combo-box
          type="department"
        
          comboWidth="30%"
        ></base-auto-combo-box>
        <base-auto-combo-box
        type="position"
          comboWidth="30%"
        ></base-auto-combo-box>
      </div>

      <div class="right-filter">
        <base-third-button
          class="track-button"
          iconUrl="fa fa-trash-o"
          @click.native="showPopUp = true"
        ></base-third-button>
        <base-third-button
          class="refresh-button"
          iconUrl="fa-refresh"
          @click.native="loadData()"
        ></base-third-button>
      </div>
    </div>
    <div class="wrap-table">
    <table class="employee-list">
     <tbody>
        <tr>
          <th></th>
          <th class="employee-id">Mã nhân viên</th>
          <th class="fullname">Họ và tên</th>
          <th class="gender">Giới tính</th>
          <th class="birthday">Ngày sinh</th>
          <th class="mobile">Điện thoại</th>
          <th class="email">Email</th>
       
          <th class="position">Chức vụ</th>
          <th class="department">Phòng ban</th>
          <th class="salary">Mức lương cơ bản</th>
          <th class="status">Tình trạng công việc</th>
        </tr>
      
      
        <tr @dblclick="editEmployee(index)" v-for="(item,index) in list" :key="item.employeeId">
          <td><input type="checkbox"  :value="item.employeeId" v-model="checkedId"  ></td>
          <td class="employee-code">{{ item.employeeCode }}</td>
          <td class="fullname">{{ item.fullName }}</td>
          <td class="gender">{{ genderName(item.gender) }}</td>
          <td class="birthday text-align-center">{{ formatDate(item.dateOfBirth) }}</td>
          <td class="mobile">{{ item.phoneNumber }}</td>
          <td class="email">{{ item.email }}</td>
          <td class="position">{{ item.positionName }}</td>
          <td class="department">{{ item.departmentName }}</td>
          <td class="salary text-align-right">{{ formatMoney(item.salary) }}</td>
          <td class="workStatus">{{workStatus(item.workStatus)}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="paging-bar">
      <p>Hiển thị 1-10/1000 nhân viên</p>
      <div class="paging">
        <button class="btn-angle">
          <i class="fa fa-angle-double-left"></i>
        </button>
        <button class="btn-angle"><i class="fa fa-angle-left"></i></button>
        <button class="btn-number" name="page">1</button>
        <button class="btn-number" name="page">2</button>
        <button class="btn-number" name="page">3</button>
        <button class="btn-number" name="page">4</button>
        <button class="btn-angle"><i class="fa fa-angle-right"></i></button>
        <button class="btn-angle">
          <i class="fa fa-angle-double-right"></i>
        </button>
      </div>
      <p>10 nhân viên/trang</p>
    </div>

    <employee-dialog
    ref="employeeDialog"
      @success="loadData"
      v-on:close-dialog="isShowDialog = false"
      v-show="isShowDialog"
      :mode="dialogMode"
      :item="item"
    ></employee-dialog>
    <base-pop-up v-show="showPopUp" @delete="deleteEmployee" v-on:close-popup = "showPopUp = false"></base-pop-up>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import format from "../../../script/common/format";


import BaseIconButton from "../../base/button/BaseIconButton.vue";

import BaseIconInput from "../../base/input/BaseIconInput.vue";

import BaseAutoComboBox from "../../base/BaseAutoComboBox.vue";
import BaseThirdButton from "../../base/button/BaseThirdButton.vue";

import EmployeeDialog from './EmployeeDialog.vue';
import BasePopUp from '../../base/BasePopUp.vue';

export default {
  components: {
    BaseIconButton,
    BaseIconInput,

    BaseAutoComboBox,
    BaseThirdButton,
    EmployeeDialog,
    BasePopUp,
  },
  data() {
    return {
      list: undefined,
      item: {},
      showPopUp: false,
      isShowDialog: false,
      departmentList: [],
      positionList: [],
      dialogMode: "add",
      newEmployeeCode: undefined,
      checkedId : [],
      genderList: ["Nữ", "Nam","Khác"],
      workStatusList: ["","Đang thử việc","Đang làm việc", "Đã Nghỉ việc","Đã nghỉ hưu"]
    };
  },
  created() {
    this.loadData();
  },
  methods: {

    loadData: function() {
      console.log("load");
      axios
        .get("https://localhost:44301/api/v1/employees")
        .then((response) => {
          console.log("load dc");

          this.list = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    formatDate : function(value){
      return format.formatDate(value);
    },
    formatMoney : function(value){
      return format.formatMoney(value);
    },
    genderName : function(value){
      if(value == null) return "";
      else return this.genderList[value];
    },
    workStatus : function(value){
      if(value == null) return "";
      else return this.workStatusList[value];
    },


    getNewEmployeeCode: function() {
 
      axios
        .get("https://localhost:44301/api/v1/employees/newcode")
        .then((res) => {


          this.item.employeeCode = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addEmployee: function() {
      this.dialogMode = "add";
      this.item = {
        employeeCode: "",
        fullName: "",
        dateOfBirth: null,
        gender: null,
        identityNumber: "",
        identityDate: null,
        identityPlace: "",
        imail: "",
        phoneNumber: "",
        departmentId: null,
        positionId: null,
        workStatus: null,
        personalTaxCode: "",
        salary: null,
        joinDate: null,
      };
      this.getNewEmployeeCode();
      this.isShowDialog = true;
    },
    editEmployee:function(index){


      this.dialogMode = "edit";
      this.item.EmployeeId = this.list[index].EmployeeId;
      this.item.EmployeeCode = this.list[index].EmployeeCode;
      this.item.FullName = this.list[index].FullName;
      this.item.DateOfBirth = this.list[index].DateOfBirth;
      this.item.Gender = this.list[index].Gender;
      this.item.IdentityNumber = this.list[index].IdentityNumber;
      this.item.IdentityDate = this.list[index].IdentityDate;
      this.item.IdentityPlace = this.list[index].IdentityPlace;
      this.item.PhoneNumber = this.list[index].PhoneNumber;
      this.item.Email = this.list[index].Email;
      this.item.DepartmentId = this.list[index].DepartmentId;
      this.item.PositionId = this.list[index].PositionId;
      this.item.WorkStatus = this.list[index].WorkStatus;
      this.item.PersonalTaxCode = this.list[index].PersonalTaxCode;
      this.item.Salary = this.list[index].Salary;
      this.item.JoinDate = this.list[index].JoinDate;
     
      this.isShowDialog = true;
    },
     deleteEmployee: async function(){
      this.showPopUp = false;
      for(let id of this.checkedId){
       
        const response =  await axios.delete("https://localhost:44301/api/v1/employees/" + id)
        console.log(response);
      }
      this.loadData();
    },

    
  },
  
};
</script>

<style scoped>
@import "../../../css/base/button/button.css";
@import "../../../css/common/page.css";
@import "../../../css/page/employee/employee-header.css";
@import "../../../css/page/employee/filter-bar.css";
@import "../../../css/page/employee/wrap-table.css";
@import "../../../css/page/employee/table.css";
@import "../../../css/page/employee/paging-bar.css";
</style>
