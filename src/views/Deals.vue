<template>
    <div>
        <Navbar/>
        <div class="header">
          <img src="../assets/img/deals.jpg" alt="">
        </div>
        <div class="sub-header">
          <img src="../assets/img/promohariini.jpg" alt="">
        </div>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "Deals",
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
  margin-left: 80px;
  width: 1000px;
}
</style>