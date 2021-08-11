<template>
  <div class="header">
        <!-- Navbar -->
        <div class="container">
            <div class="d-flex justify-content-between align-items center">
                <div class="d-flex align-items-center">
                    <router-link to="#" class="mr-2">Seller Centre</router-link>
                    <div class="hr1 mr-2"></div>
                    <router-link to="#" class="mr-2">Mulai Jual</router-link>
                    <div class="hr1 mr-2"></div>
                    <router-link to="#" class="mr-2">Download</router-link>
                    <div class="hr1 mr-2"></div>
                    <router-link to="#" class="mr-2">Ikuti kami di</router-link>
                    <router-link to="#">
                      <img class="icon-media mr-1" src="../assets/img/facebook-circle-logo-24.png" >
                      <img class="icon-media mr-1" src="../assets/img/instagram-logo-24.png" >
                      <img class="icon-media mr-1" src="../assets/img/twitter-logo-24.png" >
                    </router-link>
                </div>
                <div class="d-flex align-items-center">
                    <img class="mr-1 icon-media" src="../assets/img/notification-regular-24.png" >
                    <span class="mr-3">Notifikasi</span>
                    <img class="mr-1 icon-media" src="../assets/img/help-circle-regular-24.png" >
                    <span class="mr-3">Bantuan</span>
                    <router-link to="/Login" class="details-under">
                        <span class="mr-3">Login</span>
                    </router-link>
                    <div class="hr1 mr-3"></div>
                    <router-link to="/Login" class="details-under">
                        <span class="mr-3">Daftar</span>
                    </router-link>
                </div>
            </div>

            <!-- input search -->
            <div class="d-flex justify-content-between align-items center">
                <div class="d-flex align-items-center">
                    <router-link to="/">
                      <img class="img-shope" src="../assets/img/sopi-tes.jpg" alt="Shoope">
                    </router-link>
                </div>
                <div class="wrap-navbar-input">
                    <div class="wrap-search">
                        <input type="text" class="form-control" placeholder="Ekstra Voucher Gratis Ongkir">
                            <router-link type="button" class="btn btn-search" to="">
                                <div class="wrap-icon-s">
                                    <img class="icon-search" src="../assets/img/search-alt-2-regular-24.png" alt="cari">
                                </div>
                            </router-link>
                    </div>
                    <div class="under-input d-flex mt-2">
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Masker</span>
                        </router-link>
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Daster</span>
                        </router-link>
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Masker Kn95</span>
                        </router-link>
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Tas Wanita</span>
                        </router-link>
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Masker Medis</span>
                        </router-link>
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Celana Wanita</span>
                        </router-link>
                        <router-link class="details-under" to="/">
                            <span class="mr-3">Pop It</span>
                        </router-link>
                    </div>
                </div>
                <router-link to="" type="button">
                    <img src="../assets/img/cart-regular-24.png" class="icon-cart img-cart" alt="Cart Product">
                </router-link>
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
  background: #f53d2d;
  height: 150px;
  width: 100%;
  position: fixed;
  color: #f5f0ef;
  padding-top: 10px;
  z-index: 99;
}
.mr-2{
  color: #f5f0ef;
}
.hr1 {
  width: 2px;
  height: 15px;
  background-color: #f5f0ef;
}

.img-shope {
  width: 190px;
}
.img-cart{
  margin-left: 50px;
}
.wrap-search {
  margin-left: 25px;
  margin-top: 27px;
  position: relative;
  width: 780px;
  height: 45px;
  background-color: #f5f0ef;
  border-radius: 5px;
}
.form-control {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: none;
  background-color: transparent;
}
.icon-media {
  width: 20px;
}
.wrap-icon-s {
  background: #FD6033;
  border-radius: 4px;
  position: absolute;
  width: 80px;
  height: 87%;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
}
.wrap-icon-s:hover {
  background: #f75547;
}
.form-control:focus {
  box-shadow: none;
  border-radius: 12px;
}
.icon-search {
  width: 28px;
  margin-left: 5px;
  margin-top: 7px;
}
.details-under {
  color: #f5f0ef;
}
.icon-cart {
  width: 36px;
  height: 36px;
  margin-top: 35px;
  margin-right: 70px;
}
.under-input {
  margin-left: 28px;
  font-size: 13px;
  font-weight: 100;
}

</style>