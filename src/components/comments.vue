<template>
    <div id="comment"  v-bind:style="{height : commentH , overflow : 'hidden'}">
      <div class="comment-list">
      <div class="conclusion clearfix">
        <div class="box-left">
          <p>4.2</p>
          <p>综合评分</p>
          <p>高于周边商家85%</p>
        </div>
        <div class="box-right">
          <div class="service">服务态度<span class="star"><template v-for="i in 5"><i class="iconfont icon-shoucang" v-bind:key="i"></i>&nbsp;</template>
            </span><span class="score">4.1</span>
          </div>
          <div class="service">商品评分<span class="star"><template v-for="i in 5"><i class="iconfont icon-shoucang" v-bind:key="i"></i>&nbsp;</template>
            </span><span class="score">4.3</span>
          </div>
          <div>送达时间<span class="time">38分钟</span></div>
        </div>
      </div>
      <div class="conclusion-btn">
        <div class="btn">
          <button @click="numChiose('2')" ref="allBgcolor">全部<span class="count">24</span></button>
          <button @click="numChiose('1')" ref="SatisfiedBgcolor">满意<span class="count">15</span></button>
          <button @click="numChiose('0')">不满意<span class="count">6</span></button>
        </div>
        <div class="flitrate">
          <i class="iconfont icon-check-circle-fill" :class="{active: isActive}" @click="filt"></i> 只看有内容的评价
        </div>
        <div class="evaluation">
          <ul>
            <li v-for="(item, index) in evaluated" v-bind:key="index">
              <div class="yonghu"><i class="iconfont icon-yonghu" ></i></div>
              <div class="description">
              <p>{{item.phone | ellipsis}}</p>
              <p class="timer">{{item.time}}</p>
              <p><template v-for="i in 5"><i class="iconfont icon-shoucang" v-bind:key="i"></i>&nbsp;</template></p>
              <p>{{item.evaluat}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import mockdata from '../mock'
export default {
  data () {
    return {
      commentH: document.documentElement.clientHeight - (134 + 48 + 40) + 'px',
      commentList: '',
      isActive: false,
      evaluation: [],
      evaluated: []
    }
  },
  methods: {
    filt: function () {
      this.isActive = !this.isActive
    },
    numChiose: function(num) {
      
      this.evaluated = []
      if (num == '2') {
        this.evaluated = this.evaluation;
        return
      }
      this.evaluation.forEach((item, index) => {
        if(item.satisfied == num) {
          this.evaluated.push(item);
        }
      });
    }
  },
  mounted: function () {
    var wrapper = new BScroll('#comment')
    this.commentList = document.getElementsByClassName('comment-list')[0].clientHeight + 'px'

    this.$axios.get('/api/data').then(res => {
      this.evaluation = res.data.evaluation
      this.evaluated = this.evaluation;
    })
  },
  filters: {
    ellipsis: function (value) {
      return value.slice(0, 1) + '......' + value.slice(-1)
    }
  }
}
</script>

<style>
  #comment {
    color: #07111b;
  }

  #comment .conclusion {
    padding: 18px 0;
    border-bottom: 1px solid #ddd;
  }

  #comment .box-left {
    width: 137px;
    text-align: center;
    border-right: 1px solid #ddd;
    float: left;
  }

  #comment .box-left p:first-child {
    color: #ff9900;
    font-size: 24px;
  }

  #comment .box-left p:nth-child(2) {
    font-size: 12px;
    padding-bottom: 5px;
    margin: 0 8px;
  }

  #comment .box-left p:last-child {
    color: #93999f;
    font-size: 10px;
  }

  #comment .box-right {
    font-size: 12px;
    float: left;
    padding-left: 24px;
    text-align: left;
  }

  #comment .service {
    padding-bottom: 7px;
  }

  #comment div .star {
    text-align: left;
    padding-left: 12px;
  }

  #comment div .score {
    padding-left: 8px;
    color: #ff9900;
  }

  #comment div .time {
    color: #93999f;
    padding-left: 12px;
  }

  #comment .icon-shoucang {
    color: #ff9900;
  }

  #comment .icon-shoucang:nth-child(5) {
    color: #93999f;
  }

  #comment .conclusion-btn {
    margin: 0 18px;
    text-align: left;
  }

  #comment .btn {
    border-bottom: 1px solid #ddd;
    padding: 18px 0;
  }

  #comment .btn button {
    font-size: 12px;
    padding: 8px 12px;
    border: 0;
  }

  #comment .btn button:first-child {
    background: #00a0dc;
    color: #fff;
  }

  #comment .btn button:nth-child(2) {
    background: rgba(0,160,220,0.2);
    color: #4d555d;
    margin: 0 8px;
  }

  #comment .btn button:nth-child(3) {
    background: rgba(77,85,93,0.2);
    color: #4d555d;
  }

  #comment .count {
    font-size: 8px;
  }

  #comment .flitrate {
    font-size: 12px;
    color: #93999f;
    padding: 18px 0;
    border-bottom: 1px solid #ddd;
  }

  #comment .flitrate i {
    font-size: 22px;
    vertical-align: middle;
  }

  #comment .active {
    color: #00c850;
  }

   #comment .evaluation ul {
     padding-left: 0;
   }

  #comment .evaluation ul li {
    list-style-type: none;
    font-size: 12px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid #ccc;
    position: relative;
    display: flex;
    display: -webkit-flex;
    align-items: flex-start;
  }

  #comment .yonghu i {
    font-size: 26px;
  }

  #comment .evaluation .icon-shoucang {
    font-size: 10px;
  }

  #comment .description {
    float: left;
    padding-left: 12px;
  }

  #comment .timer {
    color: #93999f;
    position: absolute;
    top: 18px;
    right: 0;
    margin-right: 0;
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