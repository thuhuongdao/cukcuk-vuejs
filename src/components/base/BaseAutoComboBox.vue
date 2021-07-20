<template>
  <div class="combo-box">
    <div class="combo-box-header" :class="{ 'combo-box-active': isActive }">
      <input
      ref="search"
        @click="activeComboBox()"
        v-on:keyup="autoSearch"
        v-model="searchGoods"
        autocomplete="off"
        class="combo-box-input"
        id="employee-gender"
        type="text"
        placeholder=""
      />
      <!-- <img class="x-icon" src="../content/icon/x.svg"> -->

      <div class="wrap-arrow" @click="arrow">
        <i
          class="arrow-icon fa "
          :class="[isDown ? 'fa-angle-down' : 'fa-angle-up']"
        ></i>
      </div>
    </div>
    <div class="combo-box-content" v-if="isShow">
      <div
        class="combo-box-item"
        :class="{ 'combo-box-item-hover': hover.id == item.id, 'combo-box-item-active': active.id == item.id}"
     
        @mouseover="mouseOver(index)"
        @click="select(index)"
        v-for="(item,index) in filtered"
        :key="item.id"
      >
        <div class="check-icon"><i class="fas fa-check"></i></div>
        <p>{{ item.gender }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../css/base/combo-box.css";
</style>
<script>
export default {
  data() {
    return {
      isActive: false,
      isDown: true,

      isShow: false,

      goodsList: [
        {
          id: 0,
          gender: "Nữ",
        },
        {
          id: 1,
          gender: "Nam",
        },
        {
          id: 2,
          gender: "Khác",
        },
      ],
      filtered: [
        {
          id: 0,
          gender: "Nữ",
        },
        {
          id: 1,
          gender: "Nam",
        },
        {
          id: 2,
          gender: "Khác",
        },
      ],
      hover: {
        id: -1,
        index: -1,
      },
      active:{
        id: -1,
        index : -1
      },
      searchGoods: "",
    };
  },

  methods: {
    activeComboBox: function() {
      this.isActive = true;
      this.isDown = false;
      this.isShow = true;
    },
    autoSearch: function(event) {
      console.log("aja");
      console.log(event.keyCode);
      let keyCode = event.keyCode;
      if (keyCode == 40) {
        if(this.isShow == false) return;
        console.log("vao day");

        let index = (this.hover.index + 1) % this.filtered.length;
        let id = this.filtered[index].id;
        console.log("vao day");
        this.hover = {
          index,
          id,
        };
      } else if (keyCode == 38) {
        if(this.isShow == false) return;
        let index = this.hover.index - 1;
        console.log(index);
        index = index < 0 ? this.filtered.length - 1 : index;
        let id = this.filtered[index].id;

        this.hover = {
          index,
          id,
        };
      } else if (keyCode == 13) {
        if(this.isShow == false) return;
        this.searchGoods = this.goodsList[this.hover.id].gender;
        this.active.id = this.hover.id; 
        this.isShow = false;
        this.isDown = true;
        this.filtered = this.goodsList;
        
        
      } else {
        console.log("watch");
        this.isShow = true;
        let a = this.searchGoods.toLowerCase();
        console.log(a);
        this.filtered = this.goodsList.filter(function(good) {
          console.log(good);
          console.log(good.gender.toLowerCase());
          return good.gender.toLowerCase().includes(a);
        });

        if (!this.filtered.length) {
          return;
        }
        if (this.hover.index >= this.filtered.length) {
          this.hover.index = -1;
          this.hover.id = -1;
        } else {
          const id = this.filtered[this.hover.index].id;
          this.hover.id = id;
        }
      }
    },
    mouseOver: function(index){
      this.hover.index = index;
      this.hover.id = this.filtered[index].id;
    },
    select: function (index) {
        this.active.index = index;
        this.active.id = this.filtered[index].id;
        this.searchGoods = this.goodsList[this.active.id].gender;
       
        this.isShow = false;
        this.isDown = true;
        this.filtered = this.goodsList;
        //console.log(this);
        // console.log(this.$refs.aaa);
        this.$refs.search.focus();
        
      
    },
    arrow: function(){
      if(this.isDown == true){
        this.isDown = false;
        this.isShow = true;
      }else{
        this.isDown = true;
        this.isShow = false;
      }
    }
  },
};
</script>
