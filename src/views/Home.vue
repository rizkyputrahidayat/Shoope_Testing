<template>
  <div class="home">
    <Navbar />
      <section class="hero mb-5">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <router-link to="/Deals">
              <img class="header-images" src="../assets/img/header-image-1.jpg" alt="">
              </router-link>
            </div>
            <div class="col-4">
              <div class="row">
                <router-link to="/Deals">
                  <img class="header-kanan" src="../assets/img/header-kanan-1.jpg">
                </router-link>
              </div>
              <router-link to="/Deals">
                  <img class="header-kanan-1" src="../assets/img/header-kanan-2.jpg">
              </router-link>
            </div>
          </div>
          <router-link to="/">
            <img class="sopi-header" src="../assets/img/sopi-header1.jpg" alt="">
          </router-link>
          <router-link to="/bayar-di-tempat">
            <img class="pengguna-baru" src="../assets/img/tess.jpg" alt="">
          </router-link>
        </div>
        <Footer />
      </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.header-images{
  margin-top: 170px;
  width: 700px;
  height: 235px;
}
.sopi-header{
  margin-top: 7px;
  margin-left: 13px;
  width: 100%;
}
.pengguna-baru{
  width: 100%;
  margin-left: 15px;
}
.header-kanan{
  width: 400px;
  margin-top: 170px;
}
.header-kanan-1{
  margin-top: 5px;
  margin-left: -15px;
  width: 400px;
}
</style>
