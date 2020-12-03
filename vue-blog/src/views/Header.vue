<template>
  <header>
    <div class="banner"></div>
    <h1>
      <a href="" class="logo">Elgarblogic</a>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

header {
  position: relative;
  height: 300px;
  .banner {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../assets/img/bg1.png);
    background-size: cover;
    // z-index: 10000;
  }
  h1 {
    position: absolute;
    width: 100%;
    top: 45%;
    margin: 0;
    .logo{
      font-size: 40px;
      color: #fff;
    }
  }
}

</style>