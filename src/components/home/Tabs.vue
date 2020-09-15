<template>
    <div class="tabs">
        <swiper :options="swiperOption">
				<!-- slides -->
				<swiper-slide  v-for="item in TabsList" :key="item.index">
					<div class="tabs-content">
                        <img :src="item.imgUrl" alt="">
                        <p>{{item.title}}</p>
                    </div>
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>

    </div>
</template>

<script>
export default {
    data(){
        return {
            TabsList:[
                {
                    id:0,
                    imgUrl:'img/tabs1.gif',
                    title: '签证'
                },
                 {
                    id:1,
                    imgUrl:'img/tabs2.png',
                    title: '签证'
                },
                 {
                    id:2,
                    imgUrl:'img/tabs3.png',
                    title: '签证'
                },
                 {
                    id:3,
                    imgUrl:'img/tabs4.gif',
                    title: '签证'
                },
                 {
                    id:4,
                    imgUrl:'img/tabs5.gif',
                    title: '签证'
                },
                 {
                    id:5,
                    imgUrl:'img/tabs6.png',
                    title: '签证'
                },
                 {
                    id:6,
                    imgUrl:'img/tabs7.png',
                    title: '签证'
                },
                 {
                    id:7,
                    imgUrl:'img/tabs8.png',
                    title: '签证'
                },
                 {
                    id:8,
                    imgUrl:'img/tabs9.png',
                    title: '签证'
                },
                 {
                    id:9,
                    imgUrl:'img/tabs10.png',
                    title: '签证'
                }

            ],
            swiperOption:{
                slidesPerView:4.6
            }
        }
    }
    
}
</script>

<style scoped>
.tabs{
	padding:.3rem 0;
}
.tabs-content img{
	margin-left:auto;
	margin-right: auto;
	display: block;
	width: .7733333333rem;
	height: .7733333333rem;
}
.tabs-content p{
	margin-top:.1rem;
	text-align: center;
	font-size:.3rem;
}
</style>