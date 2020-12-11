<template>
  <header>
    <div class="banner"></div>
    <h1>
      <a href="" class="logo">ELGAR'S BLOG</a>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

@font-face {
	font-family: pso;
	src: url('../../public/font/pso.ttf');
}

header {
  position: relative;
  height: 300px;
  .banner {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../assets/img/bg1.png);
    background-size: cover;
  }
  h1 {
    font-family: pso;
    position: absolute;
    color: #fff;
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