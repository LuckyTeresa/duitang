<template>
    <div class="waterFallWrapper" ref='waterFallWrapper'>
    <div class="picWrapper" v-for='item in waterfall' ref='pics'>
      <div class='pic' >
          <div class='image'>
            <img width='160px' :src="item.photo.path" alt="" />
          </div>
          <div class="stars">
            <div class='picInfo'>{{item.msg}}</div>
            <div class='starInfo'>
              <span class="iconfont icon-shoucang starsIcon"></span>
              <span class="starNum">{{item.like_count}}</span>
            </div>
          </div>
          <div class='userInfo'>
              <img class="userAvatar" width=50px height=50px :src='item.sender.avatar'></img>
            <div class="userTXTInfo">
              <a  class='username'>{{item.sender.username}}</a>
              <a class='albumname'>收集到&nbsp;&nbsp;{{item.album.name}}</a>
            </div>
          </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'waterfall',
  data () {
    return {
      cols:2,
      colHeight:[],
      firstTime:true
    }
  },
  props:{
    waterfall:{
        type:Array,
        default(){ return []},
    }
  },
  updated(){
        this.initWaterfall();

  },
  watch:{
    waterfall(){
      this.$emit('update')
    }

  },
  methods:{
    initWaterfall(){

        let pics=this.$refs.pics
        let picWidth=pics[0].offsetWidth//180,包含20px的padding
        this.$refs.waterFallWrapper.style.width=this.cols*picWidth+'px'//设置宽度

        for(let i=0;i<this.waterfall.length;i++){
          console.log(pics[i].offsetHeight,pics[i].offsetWidth)
          let picHeight=(this.waterfall[i].photo.height*(picWidth-20))/this.waterfall[i].photo.width+pics[i].offsetHeight//每一个pic的高度

          if(i<this.cols){
            this.colHeight.push(picHeight)
            pics[i].style.height=picHeight+'px';
          }else{
            let minH=Math.min.apply(null,this.colHeight);
            let index=this.getMinhIndex(this.colHeight,minH);
            pics[i].style.height=picHeight+'px';
            pics[i].style.position='absolute';
            pics[i].style.top=minH+'px';
            pics[i].style.left=index*picWidth+'px';
            this.colHeight[index]+=picHeight;
          }

        }
          let totalHeight=Math.max.apply(null,this.colHeight)//找出数组中最大高度作为waterFallWrapper的高的
        this.$refs.waterFallWrapper.style.height=`${totalHeight}px`
        this.colHeight=[]
    },
    getMinhIndex(arr,val){
        for(var i in arr){
            if(arr[i]==val){
                return i;
            }
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.waterFallWrapper
  margin:15px auto
  overflow:hidden
  position:relative
  .picWrapper
    padding:10px
    width:180px
    float:left
    box-sizing:border-box
    // border-right-1px(red)
    // border-1px(red)
    // border-bottom-1px(red)
    // border-left-1px(red)
    .pic
      background:$color-element
      font-size:$font-size-medium
      // break-inside:avoid//避免文本块分解为单独的列
      .image
        width:160px
        font-size:0
      .stars
        border-bottom-1px($color-line)
        padding:5px
        line-height:20px
        color:$color-text-secondary
        display:flex
        flex-direction:column
        justify-content:center
        .starInfo
          display:inline-flex
          justify-content:flex-start
      .userInfo
        display:flex
        padding:5px
        justify-content:flex-start
        .userAvatar
          flex:0 0 40px
          width:40px
          height:40px
          border-radius:50%
          margin-right:10px
        .userTXTInfo
          display:flex
          flex-flow:column wrap
          line-height:18px
          .username
            color: $color-link
            margin-bottom:5px
          .albumname
            white-space:wrap

</style>