





<template>
    <div class="waterFallWrapper" ref='waterFallWrapper' v-if='waterfall.length>0'>
    <div class='flowBox'>
      <div class="picWrapper" ref='picWrapper' v-for='item in waterfall'>
        <div class='pic' >
            <div class='image'>
              <img class='picImg' :src="item.photo.path" alt="" />
              <span class='picInfo'>{{item.msg}}</span>
            </div>
            <div class="stars">
              <span class="iconfont icon-shoucang starsIcon"></span>
              <span class="starNum">{{item.like_count}}</span>
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
    </div>
</template>

<script>
export default {
  name: 'waterfall',
  data () {
    return {
      cols:2,
      columnHeigth:[]
    }
  },
  props:{
    waterfall:{
        type:Array,
        default(){ return []},
    }
  },
  updated(){
    // console.log(this.waterfall);
    setTimeout(()=>{
      this.setColumn();

    },1000)

  },
  methods:{
    setColumn(){
      let picWrappers=this.$refs.picWrapper;
      let picWidth=picWrappers[0].offsetWidth;

      // this.cols=Math.floor(window.innerWidth/picWidth);
      this.$refs.waterFallWrapper.style.width=this.cols*picWidth+'px';

      for(let i=0;i<picWrappers.length;i++){
        if(i<this.cols){
          this.columnHeigth.push(picWrappers[i].offsetHeight)
          console.log(this.columnHeigth);
        }else{
          console.log(this.columnHeigth)
          let minH=Math.min.apply(null,this.columnHeigth);

          let index=this.getMinhIndex(this.columnHeigth,minH);
          console.log(index)
          picWrappers[i].style.position='absolute';
          picWrappers[i].style.top=minH+'px';
          picWrappers[i].style.left=index*picWidth+'px';
          // console.log(this.columnHeigth[index]+picWrappers[i].offsetHeight);

          this.columnHeigth[index]+=picWrappers[i].offsetHeight;
        }
      }
      this.$emit('setEnd')

    },
    getMinhIndex(arr,val){
        for(var i in arr){
            if(arr[i]==val){
                return i;
            }
        }
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.waterFallWrapper
  padding-top:15px
  margin:0 auto
  position:relative
  .picWrapper
    padding:10px
    float:left
    // position:absolute
    top:0
    left:0
    .pic
      box-sizing:border-box
      background:$color-element
      font-size:$font-size-medium
      width:150px
      // break-inside:avoid//避免文本块分解为单独的列
      // border-1px($color-line)
      // border-bottom-1px($color-line)
      // border-left-1px($color-line)
      // border-right-1px($color-line)
      border-1px(red)
      border-bottom-1px(red)
      border-left-1px(red)
      border-right-1px(red)
      .image
        display:flex
        flex-direction:column
        align-items:flex-start
        .picImg
          width:100%
        .picInfo
          padding:8px
          line-height:20px
      .stars
        border-bottom-1px(red)
        padding:0 8px 8px 8px
        color:$color-text-secondary
      .userInfo
        display:flex
        justify-content:flex-start
        padding:5px 8px
        .userAvatar
          flex:0 0 40px
          width:40px
          height:40px
          border-radius:50%
          margin-right:15px
        .userTXTInfo
          display:flex
          flex-flow:column wrap
          line-height:18px
          .username
            color: $color-link
            margin-bottom:5px
          .albumname
            margin-bottom:5px
            white-space:wrap

</style>
