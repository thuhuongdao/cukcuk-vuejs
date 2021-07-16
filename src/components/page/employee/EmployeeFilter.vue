<template>
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
</template>
<style scoped>
@import '../../../css/page/employee/filter-bar.css';
</style>