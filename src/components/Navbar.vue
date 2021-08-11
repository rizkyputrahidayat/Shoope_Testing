<template>
  <div class="header">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
          <div class="col d-flex align-items item-jual">
          <router-link to="">
            <img src="../assets/img/mulaijual.jpg" >
          </router-link>
          </div>
          <div class="col d-flex item-jual-1">
            <router-link to="/login">
              <img src="../assets/img/login.jpg" >
            </router-link>
          </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <router-link to="/">
            <img class="shoope-icon" src="../assets/img/sopi-tes.jpg" >
          </router-link>
          <router-link to="/">
            <img class="search" src="../assets/img/search.jpg" alt="">
          </router-link>
        </div>
        <div class="wrap-search">
          <input type="text" placeholder="Kolaborasi #SemangatuntukIndonesia" class="form-control">
          <div class="wrap-icon-s"></div>
        </div>
        <!-- <div class="under-input d-flex mt-2">
          <span>Masker</span>
          <span class="mr-2">Masker Kf94</span>
          <span class="mr-2">Daster</span>
          <span class="mr-2">Masker Kn95</span>
          <span class="mr-2">Tas Wanita</span>
          <span class="mr-2">Masker Medis</span>
          <span class="mr-2">Celana Wanita</span>
          <span class="mr-2">Pop It</span>
        </div> -->
        <route-link to="/">
          <img class="img-cart" src="../assets/img/cart.png">
        </route-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name : 'Navbar'
    }
</script>

<style scoped>
.header {
  background: #F54829;
  height: 150px;
  width: 100%;
  position: fixed;
}
.item-jual img{
  width: 350px;
  height: 25px;
}
.item-jual-1 img{
  margin-left: 240px;
  height: 25px;
}
.wrap-search{
  position: absolute;
  width: 670px;
  height: 40px;
  border-radius: 12px;
  margin-left: 280px;
}
.form-control{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: none;
}
.img-cart{
  width: 40px;
}
.search{
  position: absolute;
  width: 70px;
  margin-left: 710px;
  margin-top: -18px;
}
.shoope-icon{
  margin-top: 10px;
  margin-left: 20px;
  width: 220px;
}
span{
  font-size: 12px;
  font-weight: 100;
  /* margin-top: 1000px; */
}
</style>