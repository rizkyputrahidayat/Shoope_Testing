<template>
    <div>
        <Navbar/>
        <div class="header">
          <img src="../assets/img/cod.jpg" alt="">
        </div>
        <div class="sub-header">
          <img src="../assets/img/cod1.jpg" alt="">
        </div>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "Cod",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.header img{
  margin-left: 100px;
  margin-top: 150px;
  width: 1100px;
}
.sub-header img{
  margin-left: 95px;
  width: 980px;

}
</style>