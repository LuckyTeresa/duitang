<template>
<div class="banner" ref='banner'>
    <div class="banner-group" ref='bannerGroup'>
        <slot></slot>
    </div>
    <div class="dots">
        <span class='dot' v-for='(item,index) in dots' :class="{active:currentPageIndex===index}"></span>
    </div>

</div>
</template>

<script>
import {hasClass,addClass} from 'common/js/dom'
import BScroll from 'better-scroll'
export default {
  name: 'banner',
  data () {
    return {
        dots:[],
        currentPageIndex:0
    }
  },
  props:{
    loop:{type:Boolean,default:true},
    autoPlay:{type:Boolean,default:true},
    interval:{type:Number,default:2000}
  },
  created(){
    this.$nextTick(()=>{
        this._setWidth()
        this._initDots()
        this._initBanner()
        if(this.autoPlay){
            this._play()
        }
    })
    window.addEventListener('resize',()=>{
        if(!this.banner){
          return
        }
        this._setWidth(true);
        this.banner.refresh()
      })
  },
  methods:{
    _setWidth(isResize){
        this.children=this.$refs.bannerGroup.children;
        let width=0,//用这个宽度来初始化BScroll
            bannerWidth=this.$refs.banner.clientWidth;//视口宽度
        for(let i=0;i<this.children.length;i++){
            addClass(this.children[i],'banner-item')
            this.children[i].style.width=bannerWidth+'px'
            width+=bannerWidth
        }
        if(this.loop&&!isResize){
            width+=2*bannerWidth
        }
        this.$refs.bannerGroup.style.width=width+'px'
    },
    _initBanner(){
        this.banner=new BScroll(this.$refs.banner,{
            scrollX:true,
            scrollY:false,
            momentum:false,
            snap:{
              loop:this.loop,
              threshold:0.3,
              speed:400
            }

        })
        this.banner.on('scrollEnd',()=>{
          let pageIndex=this.banner.getCurrentPage().pageX;
          this.currentPageIndex=pageIndex;

          if (this.autoPlay){
            clearTimeout(this.timer);
            this._play();
          }
        })
        this.banner.on('scrollStart',()=>{//手指滑动时清除自动轮播事件
          clearTimeout(this.timer)
        })
    },
     _play(){
        let pageIndex=this.currentPageIndex;
        if(this.loop){
          if(pageIndex==this.children.length){
            pageIndex=0;
          }
            pageIndex+=1;
        }
        this.timer=setTimeout(()=>{
          this.banner.next();
        },this.interval)
      },
    _initDots(){
        this.dots=new Array(this.children.length)
    },
    destroyed(){
      clearTimeout(this.timer);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
    .banner-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .banner-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background:$color-element
        &.active
          /*width: 20px
          border-radius: 5px*/
          background: $color-active
</style>
