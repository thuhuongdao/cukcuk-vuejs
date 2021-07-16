<template>
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
</template>
<style scoped>
@import '../../../css/page/employee/wrap-table.css';
@import '../../../css/page/employee/table.css';
@import '../../../css/page/employee/paging-bar.css';
</style>