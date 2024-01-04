<template>
  <div class="box">
    <div class="wrapper">
      <aside>
        <Navbar/>
      </aside>
      <main>
        <Home/>
      </main>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar/Navbar.vue";
  import Home from "./components/Home/Home.vue";
  import Footer from "./components/Footer/Footer.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      Home,
      Footer
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,700&display=swap');
  @import "./assets/scss/variables";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  .box {
    position: relative;
    display: flex;
    flex-direction: column;

    .wrapper {
      display: flex;

      aside {
        width: 20%;
        background-color: $aside-bg;
        position: fixed;
        left: 0;
        height: auto;
        padding-bottom: 2100px;

      }

      main {
        height: auto;
        width: 80%;
        position: absolute;
        right: 0;
        background: linear-gradient(to bottom, $color-gradient-1, $color-gradient-2, $color-gradient-3, $color-gradient-4, $color-gradient-5, $color-gradient-5, $color-gradient-6);
        padding-bottom: 300px;
      }
    }

    .footer {
      height: 15vh;
      width: 100%;
      background-color: $footer-bg;
      position: fixed;
      bottom: 0;
    }
  }
</style>