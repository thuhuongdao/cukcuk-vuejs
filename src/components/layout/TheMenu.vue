<template>
    <div class="menu">
            <a  class="menu-item " :class="{active: activeId == 1 } " @click="activate(1)"> 
                <img src="../../assets/icon/dashboard.png" >
                <p>Tổng quan</p>
            </a>
            <a class="menu-item" :class="{active: activeId == 2 }" @click="activate(2)"> 
                <img src="../../assets/icon/report.png">
                <p>Báo cáo</p>
            </a>
            <a class="menu-item" :class="{active: activeId == 3 }" @click="activate(3)"> 
                <img src="../../assets/icon/dashboard.png">
                <p>Mua hàng</p>
            </a>
            <a class="menu-item" :class="{active: activeId == 4 }" @click="activate(4)"> 
                <img src="../../assets/icon/dic-employee.png">
                <p>Danh mục nhân viên</p>
            </a>
            <a class="menu-item" :class="{active: activeId == 5 }" @click="activate(5)"> 
                <img src="../../assets/icon/setting.png">
                <p>Thiết lập hệ thống</p>
            </a>
        
    </div>
</template>
<style scoped>
@import '../../css/common/menu.css';
</style>
<script>
export default {
    data() {
        return {
            activeId : 1
        }
    },
    methods: {
        activate : function(value){
            console.log(this);
            this.activeId = value;
        }
    },
}
</script>