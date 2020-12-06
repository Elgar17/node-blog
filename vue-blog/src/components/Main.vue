<template>
  <div class="home">
    <div class="outer">
      <section id="main">
        <article class="article">
          <div class="article-inner">
            <h2>hello world</h2>
            <div class="article-meta">分类：技术 | 2020-12-04</div>
            <div class="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nemo obcaecati praesentium fugiat iure eum error atque consectetur
              quo necessitatibus neque laboriosam, distinctio a nostrum
              quibusdam? Unde modi incidunt quasi.
            </div>
          </div>
        </article>
        <article class="article">
          <div class="article-inner">
            <h2>hello world</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nemo obcaecati praesentium fugiat iure eum error atque consectetur
              quo necessitatibus neque laboriosam, distinctio a nostrum
              quibusdam? Unde modi incidunt quasi.
            </div>
            <div class="article-meta">分类：感想 | 2020-12-04</div>
          </div>
        </article>
      </section>

      <!-- 侧边栏 -->
      <aside id="sidebar">
        <div class="widget-wrap">
          <h3>分类</h3>
          <ul class="widget">
            <li><a href="">感想与观点（2）</a></li>
            <li><a href="">技术篇（75）</a></li>
          </ul>
        </div>
        <div class="widget-wrap">
          <h3>阅读排行</h3>
          <ul class="widget">
            <li><a href="">你好哦</a></li>
            <li><a href="">wooo</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@media screen and (max-width: 600px) {
  #main,
  #sidebar {
    width: 100% !important;
  }
}
.outer {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
  #main {
    display: inline;
    float: left;
    width: 73.333333333%;
    margin: 0 0.833333333333333%;
    .article {
      margin: 50px 0;
      .article-inner {
        overflow: hidden;
        background: #fff;
        box-shadow: 1px 2px 3px #ddd;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding-bottom: 15px;
        h2 {
          font-size: 18px;
        }
        .article-meta {
          font-size: 14px;
          color: #b5b5b5;
          padding: 0 0 7px 0;
          font-weight: 500;
        }
        .content {
          padding: 0 20px;
        }
      }
    }
  }
  #sidebar {
    display: inline;
    float: left;
    width: 23.333333333333332%;
    margin: 0 0.833333333333333%;
    .widget-wrap {
      margin: 50px 0;
      h3 {
        text-align: left;
        color: #999;
      }
    }
    .widget {
      color: #777;
      text-shadow: 0 1px #fff;
      background: #ddd;
      -webkit-box-shadow: 0 -1px 4px #ccc inset;
      box-shadow: 0 -1px 4px #ccc inset;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 3px;
      li {
        list-style: none;
        text-align: left;
        margin: 5px;
        a {
          color: #258fb8;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>