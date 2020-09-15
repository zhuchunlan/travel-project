<template>
  <div class="banner">
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutUp">
      <div class="banner-left" v-show="toshow"></div>
    </transition>
    <div class="banner-header">
      <div class="banner-top">
        <div class="top-left">
          北京
          <i class="iconfont">&#xe600;</i>
        </div>
        <div class="top-search">
          <i class="iconfont">&#xe610;</i>
          泰国
        </div>
        <div class="top-right">
          <img src="@/assets/img/show.png" @click="toShow" />
        </div>
      </div>
      <div class="banner-swiper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img src="@/assets/img/banner1.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/banner2.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/banner3.png" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toshow: false,
      swiperOption: {
		loop: true,
		pagination: {
            el: '.swiper-pagination'
          }
      },
    };
  },
  methods: {
    toShow() {
      this.toshow = !this.toshow;
    },
  },
};
</script>

<style scoped>
.banner-left {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background: #000;
  width: 6.6666666rem;
  height: 100%;
}
.banner-header {
  background: #f5f5f5;
  width: 100%;
  height: 5.6rem;
  position: relative;
}
.banner-top {
  position: absolute;
  left: 0;
  top: 0.5rem;
  z-index: 2;
  height: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-left {
  padding: 0.2rem 0.4rem;
  color: #fff;
  font-size: 0.4266666rem;
}
.top-search {
  flex: 1;
  color: #333;
  background: #fff;
  border-radius: 0.1rem;
  font-size: 0.3733333rem;
  padding: 0.2rem 0.2rem;
}
.top-right {
  padding: 0.2rem 0.4rem;
}
.top-right img {
  height: 0.5333333rem;
  width: 0.5333333rem;
}

.banner-swiper {
  width: 100%;
  height: 100%;
}
.banner-swiper img {
  width: 100%;
  height: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
</style>