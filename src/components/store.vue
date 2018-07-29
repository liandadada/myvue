<template>
  <div id="store">
    <div class="store-list">
      <div class="total-dec">
        <div class="top">
          <p class="store-name">粥品香坊（回龙观）<i class="iconfont icon-heart-fill"></i></p>
          <p class="store-desc"><template v-for="i in 5"><i class="iconfont icon-shoucang" v-bind:key="i"></i>&nbsp;</template>
          <span class="score">(24)</span><span>月售90单</span><span class="collection">收藏</span></p>
        </div>
        <div class="flags">
          <ul>
            <li>
              <p>起送价</p>
              <p><span>20</span>元</p>
              </li>
            <li>
              <p>商家配送</p>
              <p><span>4</span>元</p>
            </li>
            <li>
              <p>平均配送时间</p>
              <p><span>38</span>分钟</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="separat"></div>
      <div class="notice">
        <ul>
          <li>
            <h4>公告与活动</h4>
            <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
          </li>
          <template v-for="(k, index) in storeDesc">
            <li v-bind:key="index">
            <img :src="k.img" alt=""/>
            <span>{{k.desc}}</span>
            </li>
            </template>
        </ul>
      </div>
      <div class="separat"></div>
      <div class="store-live">
        <h4>商家实景</h4>
        <ul>
          <template v-for="(k, index) in liveList">
            <li v-bind:key="index"><img :src="k" alt=""/></li>
            </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mockdata from '../mock'
export default {
  data () {
    return {
      storeDesc: [],
      liveList: []
    }
  },
  mounted: function () {
    this.$axios.get('/api/data').then(res => {
      this.storeDesc = res.data.storeList
    })

    this.$axios.get('/api/data').then(res => {
      this.liveList = res.data.liveList
      console.log(res.data)
    })
  }
}
</script>

<style>
#store .total-dec {
  padding: 18px;
  text-align: left;
}

#store .top {
  padding-bottom: 18px;
  border-bottom: 1px solid #ccc;
}

#store .store-name {
  font-size: 14px;
  color: #07111b;
  position: relative;
}

#store .store-name i {
  font-size: 24px;
  color: #d4d6d9;
  position: absolute;
  right: 0;
}

#store .store-desc {
  font-size: 10px;
  position: relative;
  margin-top: 5px;
}

#store .store-desc i {
  color: #d4d6d9;
}

#store .store-desc .score {
  padding-left: 8px;
  padding-right: 12px;
}

#store .collection {
  position: absolute;
  right: 0;
  top: 5px;
}

#store .flags {
  margin: 18px 18px 0;
}

#store .flags ul {
  padding-left: 0;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 0;
}

#store .flags ul li {
  list-style-type: none;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#store .flags ul li:nth-child(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

#store .flags ul li p {
  font-size: 10px;
}

#store .flags ul li p>span {
  font-size: 24px;
}

#store .flags ul li p:first-child {
  color: #93999f;
}

#store .separat {
  background: #f3f5f7;
  height: 18px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

#store .notice {
  padding: 18px 18px 0;
}

#store .notice ul {
  padding-left: 0;
  margin-bottom: 0;
}

#store .notice ul li {
  list-style-type: none;
  text-align: left;
  font-size: 12px;
  line-height: 24px;
  padding: 16px 12px;
  border-bottom: 1px solid #ccc;
} 

#store .notice ul li:last-child {
  border-bottom: none;
}

#store .notice ul li h4 {
  font-size: 14px;
  margin: 0 0 8px -12px;
}

#store .notice ul li p {
  color: #f01414;
}

#store .notice ul li img {
  width: 16px;
  vertical-align: middle;
  padding-right: 5px;
}

#store .store-live {
  padding: 18px;
}

#store .store-live h4 {
  font-size: 14px;
  text-align: left;
}

#store .store-live ul {
  padding-left: 0;
}

#store .store-live ul li {
  list-style-type: none;
  float: left;
  padding-right: 5px;
}

#store .store-live ul li img {
  height: 90px;
}
</style>

