<template>
    <div class="scroll">
        <div class="scroll-content">
            <div class="scroll-right">
                <ul>
                    <li  v-for="item in ScrollList" :key="item.index">
                        <img src="../../assets/img/scroll.png" alt="">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ScrollList:[
                {
                    id:0,
                    title:'清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
                },
                {
					id:1,
					title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
				},
				{
					id:2,
					title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
				},
				{
					id:3,
					title:"清迈旅游落地签如何搞定？360°带你了解泰北小城清迈"
				},
				{
					id:4,
					title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
				},
				{
					id:5,
					title:"清迈旅游落地签如何搞定？360°带你了解泰北小城清迈"
				}
            ]
        }
    }
}
</script>

<style scoped>
.scroll{
	padding:.3rem 0;
}
.scroll-content{
    background: url('../../../public/img/scroll.png') no-repeat;
    background-size: 100%;
    width: 100%;
    height: 1.333333rem;
    position: relative;
}
.scroll-right{
    position: absolute;
    right: 0;
    width: 8.133333rem;
    height: 1.333333rem;
    overflow: hidden;
}
li{
    font-size: .35rem;
    color: #333;
    line-height: 0.6666666rem;
    overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
li img{
	width: .16rem;
	height: .16rem;
}
</style>