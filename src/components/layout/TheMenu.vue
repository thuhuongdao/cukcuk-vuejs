<template>
    <div class="menu">
            <div  class="menu-item " v-bind:class="{active : (activeId == 1)} " @click="activeMenuItem(1)"> 
                <img src="../../assets/icon/dashboard.png" >
                <p>Tổng quan</p>
            </div>
            <div class="menu-item" v-bind:class="{active : (activeId == 2)}" @click="activeMenuItem(2)"> 
                <img src="../../assets/icon/report.png">
                <p>Báo cáo</p>
            </div>
            <div class="menu-item" v-bind:class="{active : (activeId == 3)}" @click="activeMenuItem(3)"> 
                <img src="../../assets/icon/dashboard.png">
                <p>Mua hàng</p>
            </div>
            <div class="menu-item" v-bind:class="{active : (activeId == 4)}" @click="activeMenuItem(4)"> 
                <img src="../../assets/icon/dic-employee.png">
                <p>Danh mục nhân viên</p>
            </div>
            <div class="menu-item" v-bind:class="{active : (activeId == 5)}" @click="activeMenuItem(5)"> 
                <img src="../../assets/icon/setting.png">
                <p>Thiết lập hệ thống</p>
            </div>
        
    </div>
</template>
<style scoped>
@import '../../css/common/menu.css';
</style>
<script>
export default {
    data() {
        return {
            activeId : 1,

        }

    },
    methods: {
        activeMenuItem: function(value){
            console.log(this);
            this.activeId = value;
        }
    },

}
</script>