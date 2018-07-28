<template>
  <div id="navlist">
    <ul class="clearfix">
      <li><router-link to="/">商品</router-link></li>
      <li><router-link to="/comments">评论</router-link></li>
      <li><router-link to="/store">店家</router-link></li>
    </ul>
  </div>
</template>

<style>
  #navlist ul {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #ddd;
  }

  #navlist ul li {
    font-size: 14px;
    list-style-type: none;
    float: left;
    width: 33.33%;
  }

  #navlist ul li a {
    color: #4d555d;
    text-decoration: none;
    display: inline-block;
    line-height: 40px;
    width: 100%;
  }

  .clearfix:after {
    clear: both;
    height: 0;
    content: '';
    display: block;
    visibility: hidden;
  }

  .clearfix {
    zoom: 1;
  }
</style>
