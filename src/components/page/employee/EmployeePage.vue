<template>
    <div class="page">
        <div class="employee-header">
            <p class="employee-lable">Danh sách nhân viên</p>
                <base-icon-button id="btn-add-employee" class="add-employee" url="icon/add.png" text="Thêm nhân viên"></base-icon-button>
            </div>
           
          <div class="filter-bar">
                <div class="input icon-input">
                    <img class="search-icon" src="../../../assets/icon/search.png">
                    <input type="text" placeholder="Tìm kiếm theo mã, tên hoặc số điện thoại" >
                    <img class="x-icon" src="../../../assets/icon/x.svg">
                
                </div>
             
               
                <div class="dropdown">
                    <div class="dropdown-top">
                        <p class="dropdown-label">Tất cả phòng ban</p>
                        <!-- <img class="dropdown-img" src="../content/img/dropdown.png"> -->
                        <i class="dropdown-icon fa fa-angle-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <div class="dropdown-item dropdown-active">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Tất cả phòng ban</p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Phòng Nhân sự</p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Phòng Đào tạo</p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Phòng Công nghệ</p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Phòng marketing</p>
                        </div>
                    </div>
                    
                </div>
                <div class="dropdown">
                    <div class="dropdown-top">
                        <p class="dropdown-label">Tất cả vị trí</p>
                        <i class="dropdown-icon fa fa-angle-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <div class="dropdown-item dropdown-active">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Tất cả vị trí</p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Phòng </p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Thu ngân</p>
                        </div>
                        <div class="dropdown-item">
                            <div class="check-icon"><i class="fas fa-check"></i></div>
                            <p>Nhân viên</p>
                        </div>
                        
                    </div>
                    
                </div>
                <button class="second-button refresh-button">
                    <img src="../../../assets/icon/refresh.png">
                </button>
            </div>
           <div class="wrap-table">

           
            <table class="employee-list" >
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
                
                
               
                
            </tbody>
                
                
                
            </table>
            <div class="paging-bar">
                <p>Hiển thị 1-10/1000 nhân viên</p>
                <div class="paging">
                    <button class="btn-angle"><i class="fa fa-angle-double-left"></i></button>
                    <button class="btn-angle"><i class="fa fa-angle-left"></i></button>
                    <button class="btn-number"  name="page">1</button>
                    <button class="btn-number" name="page">2</button>
                    <button class="btn-number" name="page">3</button>
                    <button class="btn-number" name="page">4</button>
                    <button class="btn-angle"><i class="fa fa-angle-right"></i></button>
                    <button class="btn-angle"><i class="fa fa-angle-double-right"></i></button>
                </div>
                <p>10 nhân viên/trang</p>
    
            </div>
           </div>
            
    
            
    </div>
</template>
<script>
import BaseIconButton from '../../base/button/BaseIconButton.vue'




export default {
  components: {
      BaseIconButton


  },
  // ...
}
</script>
<style scoped>

@import '../../../css/common/page.css';
@import '../../../css/page/employee/employee-header.css';
@import '../../../css/page/employee/filter-bar.css';
@import '../../../css/page/employee/wrap-table.css';
@import '../../../css/page/employee/table.css';
@import '../../../css/page/employee/paging-bar.css';


</style>