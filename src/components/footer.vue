<template>
  <div id="footer">
    <div class="footer-position">
    <div class="shop-cart"><div class="circle" :class="{'circle-bg': totalGoodsNum}" @touchstart="showOrder">
      <i class="iconfont icon-caigou" :class="{'cart-bg': totalGoodsNum}"></i>
      <div class="food-count" v-show="totalGoodsNum > 0">{{totalGoodsNum}}</div>
    </div>
    </div>
      <div class="total-price" v-if="fullPrice == 0">￥ {{fullPrice}}</div>
      <div class="total-price" v-if="fullPrice != 0" style="color: #fff">￥ {{fullPrice}}</div>
      <div class="dec">另需配送费4元</div>
      <div class="btn" v-if="fullPrice < 20 && fullPrice != 0">还差￥ {{20 - fullPrice}}元</div>
      <div class="btn" v-if="fullPrice == 0">￥20起送</div>
      <div class="btn account" v-if="fullPrice >= 20">去结算</div>
    </div>
    <div class="mask" @touchstart="cancelMask()" v-bind:style="styleMask"></div>
    <div class="order-list wrapper" ref="wrapper" style="height: 0;" v-bind:style="{bottom: bottom+'px',left: left+'px',position: position}">
      <div ref="totalHeight">
      <div class="top-dec"><span>购物车</span><span @touchstart="clearGoods" class="clear-cart">清空</span></div>
        <div class="block-cart">
        <ul class="order-goods-list">
          <li v-for="(item, index, key) in cartList" :key="key" v-if="item.count > 0">
            <span>{{item.goodsName}}</span>
            <span>￥{{item.price * item.count}}</span>
            <cartcontrol  :food="item"></cartcontrol>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../assets/eventBus'
import BScroll from 'better-scroll'
import Vue from 'vue'
import cartcontrol from './cartcontrol'
Vue.component('cartcontrol', cartcontrol)
export default {
  data () {
    return {
      cartList: [],
      totalGoodsNum: '',
      food: '',
      left: -9999,
      bottom: -9999,
      position: 'fixed',
      styleMask: {
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: '0',
        width: '0',
        height: '0',
        overflow: 'hidden',
        textAlign: 'center',
        fontSize: '14px',
        backgroundColor: 'rgba(37,38,45,.4)'
      },
      flag: 1
    }
  },
  created: function () {
    bus.$on('cart-food', (eventData) => {
    //  this.cartList.push(eventData);
      console.log(eventData, 'eventData')
      var result = []
      var number = 0;
      var flag = 0;
      this.cartList.forEach(function (arr, index, list) {
        /*var bool = list.indexOf(arr, index + 1);  //从传入参数的下一个索引值开始寻找是否存在重复
        if (bool === -1) {
          result.push(arr);
          number += arr.count;
        }*/
        if (arr.goodsName === eventData.goodsName) {
          arr.count = eventData.count;
          flag = 1;
        }
        number += arr.count;
      });
      if (flag === 0) {
        this.cartList.push(eventData);
        number += eventData.count;
      }
     // this.cartList = result;
      this.totalGoodsNum = number;
    })
  },
  methods: {
    showOrder: function () {
      var wrapperHeight = this.$refs.wrapper.offsetHeight;
      var totalHeight = this.$refs.totalHeight.offsetHeight;
      var a;
      function anim(domHeight) {
        if (parseInt(domHeight, 10) <= totalHeight) {
          a = parseInt(domHeight, 10) + 2 + 'px';
          setTimeout(function () {
            wrapperHeight = anim(a);
          }, 2);
        }
        document.getElementsByClassName('wrapper')[0].style.height = a;
      }
      if (this.flag && this.totalGoodsNum) {
        this.bottom = 48;
        this.left = 0;
        this.flag = 0;
        this.$refs.wrapper.style.height = anim(wrapperHeight);
        this.styleMask = {
          position: 'fixed',
          left: '0',
          top: '0',
          zIndex: '0',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          textAlign: 'center',
          fontSize: '14px',
          backgroundColor: 'rgba(37,38,45,.4)'
        }
      } else {
        this.cancelMask();
        this.flag = 1;
      }
    },
    cancelMask: function () {
      var a;
      var wrapperHeight = this.$refs.wrapper.style.height;

      function anim(domHeight) {
        if (parseInt(domHeight, 10) > 0) {
          a = parseInt(domHeight, 10) - 2 + 'px';
          setTimeout(function () {
            wrapperHeight = anim(a);
          }, 2);
        }
        document.getElementsByClassName('wrapper')[0].style.height = a;
      }
      this.$refs.wrapper.style.height = anim(wrapperHeight);
      this.styleMask = {
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: '-1',
        width: '0',
        height: '0',
        overflow: 'hidden',
        textAlign: 'center',
        fontSize: '14px',
        backgroundColor: '#fff',
        display: 'block'
      }
      setTimeout(() => {
        this.bottom = -9999;
        this.left = -9999;
      }, 500);
    },
    clearGoods: function () {
      this.totalGoodsNum = 0;
      this.cancelMask();
      this.cartList.forEach(function (arr, index, list) {
        arr.count = 0;
      });
    }
  },
  computed: {
    fullPrice: function () {
      var allPrice = 0;
      this.cartList.forEach(function (arr, index, list) {
        allPrice += arr.count * arr.price;
      });
      return allPrice;
    }
  },
  mounted: function () {
    this.foodScroll = new BScroll('.block-cart');
  }
}
</script>

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
    z-index: 9;
    height: 100%;
    background: #141d27;
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

  #footer .icon-caigou {
    color: #80858a;
  }

  #footer .food-count {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -4px;
    margin-right: -5px;
    background: #f01414;
    color: #fff;
    font-size: 9px;
    width: 24px;
    height: 16px;
    line-height: 16px;
    font-weight: bold;
    border-radius: 8px;
  }

   #footer .circle-bg {
    background: #00a0dc;
  }

  #footer .cart-bg {
    color: #fff;
  }

  #footer .order-list {
    position: absolute;
    background: #fff;
    width: 100%;
    bottom: 48px;
  }

  #footer .top-dec {
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    color: #07111b;
  }

  #footer .order-goods-list {
    list-style-type: none;
    padding: 0;
    line-height: 40px;
    margin: 0 18px;
  }

  #footer .order-goods-list li {
    font-size: 14px;
    color: #07111b;
    position: relative;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #ddd;
  }

  #footer .order-goods-list li span:first-child {
    position: absolute;
    left: 0;
  }

  #footer .order-goods-list li span:nth-child(2) {
    position: absolute;
    right: 85px;
    top: 0;
    color: #f01414;
  }

  #footer .order-goods-list li .cartcontrol {
    position: absolute;
    right: 0;
    top: 0;
  }

  #footer .cartcontrol {
    position: relative;
    bottom: 0;
    right: 0;
    line-height: 48px;
  }

  #footer .mask {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 14px;
    background-color: rgba(37, 38, 45, 0.4);
  }

  #footer .account {
    background: #00b43c;
    color: #fff;
  }

  #footer .clear-cart {
    font-size: 12px;
    color: #00a0dc;;
  }

  #footer .block-cart {
    max-height: 195px;
    overflow: hidden;
  }
</style>
