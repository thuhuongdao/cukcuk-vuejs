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
      <base-icon-input
        searchIconUrl="icon/search.png"
        xIconUrl="icon/x.svg"
        place="Tìm kiếm theo mã, tên hoặc số điện thoại"
        
      ></base-icon-input>
      <base-auto-combo-box :goodsList="departmentList" comboWidth="250"></base-auto-combo-box>
      <base-auto-combo-box :goodsList="positionList" comboWidth="250"></base-auto-combo-box>
      

      
      
      <div class="right-filter">
        <base-second-button class="track-button" iconUrl="fa fa-trash-o" ></base-second-button>
     <base-second-button class="refresh-button" iconUrl="fa-refresh" @click.native="loadData()"></base-second-button>
      </div>
     
    </div>
    <div class="wrap-table">
      <table class="employee-list">
        <thead>
          <tr>
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
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.EmployeeId" >
            <td class="employee-code">{{ item.EmployeeCode }}</td>
            <td class="fullname">{{ item.FullName }}</td>
            <td class="gender">{{ item.GenderName }}</td>
            <td class="birthday">{{ formatDate(item.DateOfBirth) }}</td>
            <td class="mobile">{{ item.PhoneNumber }}</td>
            <td class="email">{{ item.Email }}</td>
            <td class="position">{{ item.PositionName }}</td>
            <td class="department">{{ item.DepartmentName }}</td>
            <td class="salary">{{ item.Salary }}</td>
            <td class="status">Fresher</td>
          </tr>
        </tbody>
      </table>
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
    </div>
    <employee-dialog @success="loadData" v-on:close-dialog="isShowDialog=false" :isShow="isShowDialog" :mode="dialogMode" :item="item"></employee-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import BaseIconButton from "../../base/button/BaseIconButton.vue";

import BaseIconInput from "../../base/input/BaseIconInput.vue";


import BaseAutoComboBox from "../../base/BaseAutoComboBox.vue";
import BaseSecondButton from '../../base/button/BaseSecondButton.vue';


import EmployeeDialog from './EmployeeDialog.vue';

export default {
  components: {
    BaseIconButton,
    BaseIconInput,

    BaseAutoComboBox,
    BaseSecondButton,
    EmployeeDialog,
  },
  data() {
    return {
      list: undefined,
      item:{},
      isShowDialog: false,
      departmentList: [],
      positionList:[],
      dialogMode : "add",
      newEmployeeCode : undefined,

      
    };
  },
  methods: {
    
    loadData: function(){
      console.log("load");
      axios
      .get("http://cukcuk.manhnv.net/v1/Employees")
      .then((response) => {
        console.log("load dc");

        this.list = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    getNewEmployeeCode: function() {
      console.log("new");
      axios
        .get("http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode")
        .then((res) => {
          console.log("dc");

          this.item.employeeCode = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addEmployee: function(){
      this.dialogMode = "add";
      this.item = {
        employeeCode: "",
        fullName: "",
        dateOfBirth: "",
        gender: 0,
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
      }
      this.getNewEmployeeCode();
      this.isShowDialog = true;

    },
    
    formatDate: function(value) {
      var date = new Date(value);

      return date.toLocaleDateString("en-GB");
    },

  },

  created() {
    this.loadData();
    
      
   
    
  },
 
};
</script>

<style scoped>
@import "../../../css/common/page.css";
@import "../../../css/page/employee/employee-header.css";
@import "../../../css/page/employee/filter-bar.css";
@import "../../../css/page/employee/wrap-table.css";
@import "../../../css/page/employee/table.css";
@import "../../../css/page/employee/paging-bar.css";

</style>
