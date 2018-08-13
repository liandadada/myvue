<template>
   <div class="cartcontrol">
        <!-- <transition name="fade"> 
            <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
                <transition name="inner"> 
                    <i class="iconfont icon-minus-circle-fill"></i>
                </transition>
            </div>
        </transition> -->
        <!-- <div class="cart-count" v-show="food.count > 0">{{food.count}}</div> -->
        <div class="33">999</div>
        
        <button  @click="addFood()">wowwo</button>
        <div v-on:click="$emit('click', 1)">666</div>
        <i class="iconfont icon-plus-circle-fill"  @click="addFood()">33333</i>
    </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    props: {
      food: {
        menuGoods: Object
      }
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    methods: {
      addFood() {

          console.log('aaada==')
          this.$emit('showFood', 0);
        // if (!event._constructed) {
        //   return;
        // }
        // if (!this.food.count) {
        //   Vue.set(this.food, 'count', 1);
        // } else {
        //   this.food.count++;
        // }
      },
      decreaseFood(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    },
     created() {
     //   console.log(this.food); //忘记加this
    }

  };
</script>

<style></style>
