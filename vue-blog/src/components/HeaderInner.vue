<template>
  <div id="site-navgation">
    <div class="header-outer">
      <!--手机屏幕显示 -->
      <nav class="nav-button">
        <a>
          <i @click="drawer = true" type="primary" class="el-icon-menu"></i>
        </a>
      </nav>
      <el-drawer
        title="我是标题"
        direction="ltr"
        size='50%'
        :with-header="false"
        :visible.sync="drawer"
      >
        <div class="m-nav">
          <router-link tag="a" to="/" href="">主页</router-link>
        </div>
        <div class="m-nav">
          <router-link tag="a" to="/about" href="">归档</router-link>
        </div>
        <div class="m-nav">
          <router-link tag="a" to="/about" href="">想法与感想</router-link>
        </div>
        <div class="m-nav">
          <router-link tag="a" to="/about" href="">技术博客</router-link>
        </div>
      </el-drawer>
      <!-- 电脑屏幕显示 -->
      <nav class="main-nav">
        <router-link tag="a" to="/" href="">主页</router-link>
        <router-link tag="a" to="/about" href="">归档</router-link>
        <router-link tag="a" to="/about" href="">想法与感想</router-link>
        <router-link tag="a" to="/about" href="">技术博客</router-link>
      </nav>
      <nav class="sub-nav">
        <a href=""><i class="el-icon-moon"></i></a>
        <!-- el-icon-sunny -->
        <a href=""><i class="el-icon-share"></i></a>
      </nav>
      <nav class="search-nav">
        <el-input
          class="input-nav"
          v-model="input"
          placeholder="请输入内容"
          size="mini"
        >
        </el-input>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      input: ""
    };
  },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 600px) {
  .main-nav,
  .input-nav {
    display: none !important;
  }
  .nav-button {
    display: block !important;
  }
}
#site-navgation {
  .header-outer {
    max-width: 1220px;
    margin: 0 auto;
    overflow: hidden;
    .m-nav {
      margin: 15px 40px;
    }
  }
  height: 50px;
  padding: 0 20px;
  color: #a5a5a5;
  background: #0e0e0e;
  z-index: 9999;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  nav {
    display: block;
  }
  .nav-button {
    display: none;
    float: left;
    height: 100%;
    a {
      float: left;
      display: block;
      color: #fff;
      opacity: 0.6;
      line-height: 50px;
      text-decoration: none;
      text-shadow: 0 1px rgba(0, 0, 0, 0.2);
      padding: 0 15px;
    }
  }
  .main-nav {
    float: left;
    a {
      float: left;
      display: block;
      color: #fff;
      opacity: 0.6;
      line-height: 50px;
      text-decoration: none;
      text-shadow: 0 1px rgba(0, 0, 0, 0.2);
      padding: 0 15px;
    }
    a:hover {
      opacity: 1;
    }
  }
  .search-nav {
    float: left;
    line-height: 50px;
    margin-right: 30px;
  }
  .sub-nav {
    float: right;
    line-height: 50px;
    a {
      color: #fff;
      opacity: 0.6;
      margin-left: 15px;
      font-size: 16px;
    }
    a:hover {
      opacity: 1;
    }
  }
}
</style>