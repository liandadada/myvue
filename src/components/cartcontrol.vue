<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count>0" @touchstart.stop.prevent="decrease_cart">
            <transition name="inner">
              <i class="iconfont icon-minus-circle-fill decrease-circle"></i>
            </transition>
        </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <i class="iconfont icon-plus-circle-fill" @touchstart.stop.prevent="add_food"></i>
  </div>
</template>

<script>
import Vue from 'vue'
import bus from '../assets/eventBus'
import ball from './ball'
export default {
  props: {
    food: {
      goods: Object
    }
  },
  methods: {
    add_food: function () {
      console.log(this.food, this.food.count, 'aaa')
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      bus.$emit('cart-food', this.food)
    },
    decrease_cart: function () {
      if (this.food.count) {
        this.food.count--;
      }
      bus.$emit('cart-food', this.food)
    }
  }
};
</script>

<style>
  .iconfont {
    font-size: 25px;
    color: #00a0dc;
  }

  .cartcontrol {
    position: absolute;
    bottom: 15px;
    right: 12px;
    line-height: 24px;
    display: flex;
    display: -webkit-flex;
  }

  .cart-count {
    padding: 0 5px;
    color: #93999f;
    font-size: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translate3d(30px, 0, 0);   /*fade-enter:即将运动的初始定位;fade-leave-to:运动的结束状态*/
  }

  .inner {
    display: inline-block;
    line-height: 24px;
    font-size: 24px;
    vertical-align: top;
    color: #00A0DC;
  }
  .inner-enter-active, .inner-leave-active {
    transition: all 0.4s linear;
    opacity: 1;
    transform: rotate(0);
  }
  .inner-enter, .inner-leave-active {
    opacity: 0;
    transform: rotate(180deg);
  }

</style>
