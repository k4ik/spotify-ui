<template>
  <div class="box">
    <div class="wrapper">
      <aside>navbar</aside>
      <main>home</main>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>

  export default {
    name: "App",
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
        background-color: black;
      }

      main {
        width: 80%;
        background: linear-gradient(to bottom, #222222, #1F1F1F, #171717, #151515, #131313, #121212, );
      }
    }

    .footer {
      height: 15vh;
      width: 100%;
      background-color: #181818;
    }
  }
</style>