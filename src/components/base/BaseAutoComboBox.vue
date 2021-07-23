<template>
  <div class="combo-box" :style="{ width: comboWidth + 'px' }">
    <div
      class="combo-box-header"
      :class="{ 'combo-box-active': isActive, 'combo-box-error': isError }"
    >
      <input
        ref="search"
        @click="clickInput()"
        v-on:keyup="autoSearch"
        v-model="searchContent"
        autocomplete="off"
        class="combo-box-input"
        type="text"
        placeholder=""
        @blur="blurInput"
      />
      <!-- <img class="x-icon" src="../content/icon/x.svg"> -->

      <div class="wrap-arrow" @mousedown="arrow">
        <i
          class="arrow-icon fa "
          :class="[isDown ? 'fa-angle-down' : 'fa-angle-up']"
        ></i>
      </div>
    </div>
    <div class="combo-box-content" v-if="isShow">
      <div
        class="combo-box-item"
        :class="{
          'combo-box-item-hover': hover.id == item.id,
          'combo-box-item-active': active == item.id,
        }"
        @mouseover="mouseOver(index)"
        @mousedown="select(index)"
        v-for="(item, index) in filtered"
        :key="item.id"
      >
        <div class="check-icon"><i class="fas fa-check"></i></div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../css/base/combo-box.css";
</style>
<script>
export default {
  props: {
    goodsList: [],
    active: [String, Number],
    value : {
      default : "",
    },
    comboWidth: String,
  },
  computed: {
    searchContent: 
       function(){
        return this.value;
      },
      
  },

  data() {
    return {
     
      id: undefined,

      isActive: false,
      isError: false,
      isDown: true,

      isShow: false,

      filtered: [],

      hover: {
        id: -1,
        index: -1,
      },

      
     
    };
  },
  // watch:{
  //   defaultId: function(){
  //     console.log("create gender");

  //     if (
  //       this.defaultId == undefined ||
  //       this.defaultId == null ||
  //       this.defaultId == ""
  //     ) {
  //       this.active.id = -1;
  //       this.active.index = -1;
  //       this.value = "";
  //     } else {
  //       console.log("gender default");
  //       this.goodsList.forEach((item, index) => {
  //         if (item.id == this.defaultId) {
  //           this.active.index = index;
  //           this.active.id = this.defaultId;
  //           this.value = item.name;
  //         }
  //       });
  //     }
  //   }
  // },
  methods: {
    /**
     * click ra ngoai
     * change border color
     * xoay lai chieu mui ten
     * close box
     *
     */
    blurInput: function() {
      console.log("blur");
      this.isActive = false;
      this.isDown = true;
      this.isShow = false;
    },

    /**
     * click vao input
     */
    clickInput: function() {
      this.isActive = true;
      this.isDown = false;
      this.isShow = true;

      let val = this.searchContent.toLowerCase();
      this.filtered = this.goodsList.filter(({ name }) => {
        return name.toLowerCase().includes(val);
      });

      this.hover.index = 0;
      this.hover.id = this.filtered[0].id;
    },
    /**
     * nhap du lieu autocomplete
     */
    autoSearch: function(event) {
      let keyCode = event.keyCode;

      if (keyCode == 40) {
        if (this.isShow == false) return;

        let index = (this.hover.index + 1) % this.filtered.length;
        let id = this.filtered[index].id;

        this.hover = {
          index,
          id,
        };
      } else if (keyCode == 38) {
        if (this.isShow == false) return;
        let index = this.hover.index - 1;

        index = index < 0 ? this.filtered.length - 1 : index;
        let id = this.filtered[index].id;

        this.hover = {
          index,
          id,
        };
      } else if (keyCode == 13) {
        // if(this.isShow == false) return;

        this.searchContent = this.filtered[this.hover.index].name;
        this.active = this.hover.id;
        this.$refs.search.blur();

        //this.filtered = this.goodsList;
        this.$emit("select", this.active);
      } else {
        /**
         * loc data
         */
        // this.isShow = true;
        let val = this.searchContent.toLowerCase();
        this.filtered = this.goodsList.filter(function(good) {
          return good.name.toLowerCase().includes(val);
        });
        /**
         * khong co item thoa man , error
         */
        if (!this.filtered.length) {
          this.isError = true;
          return;
        }
        this.isError = false;
        /**
         * hover id vuot qua so luong filter dc
         * hover lai vao item dau tien
         */
        if (this.hover.index >= this.filtered.length) {
          this.hover.index = 0;
          this.hover.id = this.filtered[0].id;
        } else {
          const id = this.filtered[this.hover.index].id;
          this.hover.id = id;
        }
      }
    },
    /**
     * hover vao cac item
     */
    mouseOver: function(index) {
      this.hover.index = index;
      this.hover.id = this.filtered[index].id;
    },
    /**
     * chon item
     */
    select: function(index) {
      console.log("chon select");


      this.active= this.filtered[index].id;
    
      //console.log(this);
      this.$emit("select", this.active);
      this.searchContent = this.filtered[index].name;
      console.log(this.filtered[index].name);
      console.log(this.searchContent);
      console.log(this);
      console.log(this.searchContent);
      //this.isShow = false;
      //this.isDown = true;
      //this.filtered = this.goodsList;
      this.isError = false;

      
    },
    /**
     * click vao mui ten hien thi cac option
     */
    arrow: function(event) {
      if (this.isDown == true) {
        console.log("log ra1");
        this.isActive = true;
        this.isDown = false;
        this.isShow = true;
        this.filtered = this.goodsList;
        this.$refs.search.focus();
        event.preventDefault();
      } else {
        console.log("log ra");
        this.isDown = true;
        this.isShow = false;
        this.isActive = false;
      }
    },
  },
};
</script>
