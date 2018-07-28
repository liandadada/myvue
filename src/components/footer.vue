<template>
  <div id="footer">
    <div class="footer-position">
    <div class="shop-cart"><div class="circle">
      <i class="iconfont icon-caigou"></i>
    </div>
    </div>
    <div class="total-price">￥ 10</div>
    <div class="dec">另需配送费4元</div>
    <div class="btn">￥10起送</div>
      </div>
  </div>
</template>

<style>
  #footer {
    height: 48px;
    width: 100%;
    color: #80858a;
    position: absolute;
    bottom: 0;
    background-color: #141d27;
  }

  #footer .footer-position {
    position: relative;
  }

  #footer .shop-cart {
    width: 56px;
    height: 56px;
    background-color: #141d27;
    -webkit-border-radius: 56px;
    -moz-border-radius: 56px;
    border-radius: 56px;
    position: relative;
    bottom: 8px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    float: left;
    margin-top: -7px;
  }

  #footer .circle {
    background-color: #2b343c;
    width: 45px;
    height: 45px;
    -webkit-border-radius: 45px;
    -moz-border-radius: 45px;
    border-radius: 45px;
    position: absolute;
    bottom: 4px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
  }

  #footer .shop-cart i {
    font-size: 25px;
  }

  #footer .total-price {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding-left: 18px;
    float: left;
    padding-right: 12px;
    border-right: 1px solid #80858a;
    margin: 12px auto;
  }

  #footer .dec {
    font-size: 10px;
    float: left;
    padding-left: 12px;
    line-height: 48px;
  }

  #footer .btn {
    font-size: 12px;
    font-weight: bold;
    background-color: #2b333b;
    width: 105px;
    float: right;
    height: 48px;
    line-height: 48px;
  }
</style>
