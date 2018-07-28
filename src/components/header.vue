<template>
  <div>
  <div id="header">
      <div class="bg-img">
        <img src="../img/home/logo.jpg" alt=""/>
        <div class="bg-color"></div>
      </div>
    <div class="title clearfix">
      <img src="../img/home/logo.jpg" alt="粥品商坊（回龙观）" class="logo"/>
      <div class="store">
        <p><img src="../img/home/pinpai.png" alt="品牌" class="pinpai"/>&ensp;<strong>粥品商坊 （回龙观）</strong></p>
        <p>蜂鸟专送/38分钟送达</p>
        <p><img src="../img/home/index.png" alt="减" class="discounts"/>&ensp;在线支付慢28减5</p>
      </div>
      <div class="discount-msg">5个 ></div>
    </div>
    <div class="notice">
      <img src="../img/home/notice.png" alt="公告" class="notice-img"/>&ensp;粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。<span>></span>
    </div>
  </div>
    <navbar-list></navbar-list>
    </div>
</template>

<style>
  #header {
    height: 134px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  #header .bg-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-filter: blur(8px);
    -moz-filter: blur(8px);
    -ms-filter: blur(8px);
    fliter: blur(8px);
  }

  #header .bg-color {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 1000%;
    height: 100%;
  }

  #header .title {
    color: #fff;
    position: relative;
    padding-top: 24px;
    margin-left: 24px;
    margin-right: 18px;
  }

  #header .title .logo {
    width: 64px;
    height: 64px;
    float: left;
  }

  #header .store {
    float: left;
    margin-left: 15px;
  }

  #header .store p {
    text-align: left;
  }

  #header .store p:first-child {
    font-size: 16px;
    line-height: 18px;
  }

  #header .store p:nth-child(2) {
    font-size: 12px;
    line-height: 35px;
  }

  #header .store p:nth-child(3) {
    font-size: 10px;
    line-height: 12px;
  }

  #header .store .pinpai {
    width: 30px;
    vertical-align: bottom;
  }

  #header .discounts {
    width: 12px;
    vertical-align: bottom;
  }

  #header .discount-msg {
    font-size: 10px;
    background-color: #454545;
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 24px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 0 10px;
    background: rgba(0,0,0,0.2);
  }

  #header .notice {
    position: relative;
    font-size: 10px;
    white-space: nowrap;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 28px;
    background-color: #454545;
    margin-top: 18px;
    padding-left: 10px;
    padding-right: 20px;
    text-align: left;
  }

  #header .notice span {
    position: absolute;
    right: 10px;
  }

  #header .notice-img {
    width: 22px;
    display: inline-block;
    vertical-align: baseline;
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
