<template>
  <div>
  <div id="menu">
    <div class="menu-list" v-bind:style="{height : menuH , overflow : 'hidden'}">
      <ul class="content-menu" v-bind:style="{height: contentMenuH}">
        <li v-for="(i,index) in menuList" :key="index"><span>{{i}}</span></li>
      </ul>
    </div>
    <div class="menu-goods" v-bind:style="{height : menuH , overflow : 'hidden'}">
      <div class="content-goods" v-bind:style="{height: contentGoodsH}">
      <div class="goods clearfix" v-for="(goods, index) in menuGoods" :key="index">
        <img v-bind:src="goods.goodsImg" alt="" width="57px" class="goodsImg"/>
        <div class="goods-dec">
          <p class="foods-name">{{goods.goodsName}}</p>
          <p v-if="goods.notic" class="notic">{{goods.notic}}</p>
          <p class="goods-sales">月售{{goods.sales}}份  好评率{{goods.praise}}</p>
          <p class="goods-price">￥ {{goods.price}}</p>
        </div>
        <div><i class="iconfont icon-plus-circle-fill"></i></div>
      </div>
      </div>
    </div>
  </div>
    <footer-list></footer-list>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import mockdata from '../mock'
export default {
  data () {
    return {
      menuH: document.documentElement.clientHeight - (134 + 48 + 40) + 'px',
      contentMenuH: '',
      contentGoodsH: '',
      menuList: ['热销榜', '单人精彩套餐', '冰爽饮品限时特惠', '精选热菜', '爽口凉菜', '精选套餐', '果拼果汁', '小吃主食', '特色粥品'],
      menuGoods: []
    }
  },
  mounted: function () {
    var wrapper = new BScroll('.menu-goods')
    var wrapMenu = new BScroll('.menu-list')
    this.contentMenuH = document.getElementsByClassName('content-menu')[0].clientHeight + 'px'
    this.contentMenuH = document.getElementsByClassName('content-goods')[0].clientHeight + 'px'

    this.$axios.get('/api/data').then(res => {
      this.menuGoods = res.data.menuGoods
      console.log(res)
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
    border-bottom: 1px solid #ccc;
    position: relative;
  }

  #menu .iconfont {
    font-size: 25px;
    color: #00a0dc;
    position: absolute;
    bottom: 15px;
    right: 12px;
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
