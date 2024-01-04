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
      footer
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Home from "./components/Home.vue"

  export default {
    name: "App",
    components: {
      Navbar,
      Home
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
    display: flex;
    flex-direction: column;

    .wrapper {
      display: flex;

      aside, main {
        height: 85vh;
      }

      aside {
        width: 20%;
        background-color: $aside-bg;
      }

      main {
        width: 80%;
        background: linear-gradient(to bottom, $color-gradient-1, $color-gradient-2, $color-gradient-3, $color-gradient-4, $color-gradient-5, $color-gradient-5, $color-gradient-6);
      }
    }

    .footer {
      height: 15vh;
      width: 100%;
      background-color: $footer-bg;
    }
  }
</style>