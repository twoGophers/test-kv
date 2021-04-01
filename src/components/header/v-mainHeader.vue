<template>
  <div class="v-mainHeader">
    
    <div  style="position: relative; z-index: 9999; background-color: #fff;">
        <vHeader></vHeader>
        <vMainHeaderContent></vMainHeaderContent>
      <div class="mainHeader"  >
          <parallax >
            <div class="mainHeaderImages">
                <img src="../../assets/images/bg1.jpg">
            </div>
          </parallax>
      </div>
    </div>

    <vMainContent></vMainContent>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import vHeader from "./v-header"
import vMainHeaderContent from "./v-mainHeaderContent"
import vMainContent from "../mainContent/v-mainContent"

export default {
    name : "v-mainHeader",
    data() {
      return{
        styleObject : {
          marginTop : "10px"
        }

      
      }
    },
    components: {
      Parallax,
      vHeader,
      vMainHeaderContent,
      vMainContent
    },
  // mounted() {
  //   window.addEventListener("scroll", this.onScroll);
  //   },
  //   beforeDestroy() {
  //       window.removeEventListener("scroll", this.onScroll);
  //   },
  //   methods: {
  //       onScroll(e) {
  //           this.test = e.target.documentElement.scrollTop;
  //           if(this.test > 0) {

  //           } else if(this.test == 0) {

  //           }
  //       }
  //   },
};
</script>

<style lang="scss">
.v-mainHeader {
  .mainHeader {
    background-color:rgba(0,0,0,.3);
    top:0;
    left:0;
    .mainHeaderImages{
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 860px) and (min-width: 767px) {
  .v-mainHeader{
    //display: flex;
    .mainHeader{
      //display: flex; 
      height: 0px;
      margin-bottom: 100%;
    }
  }
}

@media (max-width: 600px) and (min-width: 230px) {
  .v-mainHeader{
    //display: flex;
    .mainHeader{
      //display: flex; 
      height: 0px;
      margin-bottom: 100%;
    }
  }
}
</style>
