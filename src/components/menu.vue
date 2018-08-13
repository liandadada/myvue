<template>
  <div>
  <div id="menu">
    <div class="menu-list" v-bind:style="{height : menuH , overflow : 'hidden'}">
      <ul class="content-menu" v-bind:style="{height: contentMenuH}">
        <li v-for="(i,index, key) in menuList" :key="key"><span>{{i}}</span></li>
      </ul>
    </div>
    <div class="menu-goods" v-bind:style="{height : menuH , overflow : 'hidden'}">
      <div class="content-goods" v-bind:style="{height: contentGoodsH}" >
      <div v-for="(title, index, key) in menuTitle" :key="key">
        <div class="separat">{{title}}</div>
      <div class="goods clearfix" v-for="(goods, index) in menuGoods" :key="index" v-if="goods.title === title">
        <img v-bind:src="goods.goodsImg" alt="" width="57px" class="goodsImg"/>
        <div class="goods-dec">
          <p class="foods-name">{{goods.goodsName}}</p>
          <p v-if="goods.notic" class="notic">{{goods.notic}}</p>
          <p class="goods-sales">月售{{goods.sales}}份  好评率{{goods.praise}}</p>
          <p class="goods-price">￥ {{goods.price}}</p>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="menuGoods" @showFood="addFood1"></cartcontrol>
        </div>

        <div class="cart-count" v-if="food.count>0">{{this.food.count}}</div>
        <!-- <div><i class="iconfont icon-plus-circle-fill" @click.stop.prevent="addFood"></i></div> -->
      </div>
      </div>

      </div>
    </div>
  </div>
    <footer-list></footer-list>
  </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll'
import mockdata from '../mock'
import cartcontrol from './cartcontrol'
Vue.component('cartcontrol', cartcontrol)
export default {
  data () {
    return {
      menuH: document.documentElement.clientHeight - (134 + 48 + 40) + 'px',
      contentMenuH: '',
      contentGoodsH: '',
      menuList: ['热销榜', '单人精彩套餐', '冰爽饮品限时特惠', '精选热菜', '爽口凉菜', '精选套餐', '果拼果汁', '小吃主食', '特色粥品'],
      menuGoods: [],
      menuTitle: [],
      footCount: '',
      food: ''
    }
  },
  methods: {
    addFood1(data) {
      console.log('wode88888', data);
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      }
  },
  mounted: function () {
    var wrapMenu = new BScroll('.menu-list')
    var wrapper = new BScroll('.menu-goods')
    this.contentMenuH = document.getElementsByClassName('content-menu')[0].clientHeight + 'px'
    this.contentMenuH = document.getElementsByClassName('content-goods')[0].clientHeight + 'px'

    this.$axios.get('/api/data').then(res => {
      this.menuGoods = res.data.menuGoods

      var array = [];
      res.data.menuGoods.forEach(function(item, index, arr){    
        array.push(item.title)
       })

      var result = [];
      array.forEach(function(item, index, arr){ 
          var bool = arr.indexOf(item,index+1); 
          if(bool === -1){
          result.push(item);
          }
      })
      this.menuTitle = result;
    })
  }
}
</script>

<style>
  #menu {
    color: #07111b;
    display: flex;
    display: -webkit-flex;
  }

  #menu .menu-list {
    width: 80px;
    font-size: 12px;
    padding: 0;
    margin: 0;
    float: left;
    background: #f3f5f7;
  }

  #menu .menu-list ul {
    width: 80px;
    padding: 0;
    margin: 0;
  }

  #menu .menu-list ul li {
    list-style-type: none;
    height: 54px;
    width: 56px;
    margin: 0 12px;
    line-height: 14px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    display: table;
  }

  #menu .menu-list ul li span {
    display: table-cell;
    vertical-align: middle;
  }

  #menu .goods-dec {
    float: left;
    text-align: left;
    padding-left: 10px;
  }

  #menu .goodsImg {
    float: left;
  }

  #menu .foods-name {
    font-size: 14px;
  }

  #menu .notic, #menu .goods-sales {
    font-size: 10px;
    color: #93999f;
  }

  #menu .goods-price {
    color: #f01414;
    font-size: 14px;
  }

  #menu .menu-goods {
    width: 100%;
  }

  #menu .goods {
    padding: 18px 0;
    margin-left: 18px;
    margin-right: 18px;
    position: relative;
    border-bottom: 1px solid #ccc;
  }

  #menu .iconfont {
    font-size: 25px;
    color: #00a0dc;
    position: absolute;
    bottom: 15px;
    right: 12px;
  }

  #menu .separat {
    background: #f3f5f7;
    height: 25px;
    line-height: 25px;
    text-align: left;
    padding-left: 14px;
    font-size: 12px;
    font-weight: bold;
    color: #93999f;
  }

  .clearfix:after {
    clear: both;
    content: '';
    visibility: hidden;
    height: 0;
    display: block;
  }

  .clearfix {
    zoom: 1;
  }
</style>
