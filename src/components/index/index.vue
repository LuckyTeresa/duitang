<template>
<div class='index'>
    <search></search>
    <span class="iconfont icon-jiahao publish" @click='show'></span>
    <div class='publishNew' v-show='togglePublishNew' ref='publishNew'>
      <span class="iconfont icon-msnui-close close" @click='hidden'></span>
      <p class='publishTxt'>发布新的</p>
      <div class='publishIcon'>
        <div class="article articleBox">
          <span class="iconfont icon-tianxie articleIcon"></span>
          <p class="publishArticleTxt">文章</p>
        </div>
        <div class="pic picBox">
          <span class="iconfont icon-dynpublishcover picIcon"></span>
          <p class="publishPicTxt">图片</p>
        </div>

      </div>
    </div>
    <index-nav></index-nav>
    <keep-alive>
       <router-view></router-view>
    </keep-alive>

</div>
</template>

<script>
import search from 'base/search/search'
import indexNav from 'components/index-nav/index-nav'
export default {
  name: 'index',
  components:{search,indexNav},
  data () {
    return {
      togglePublishNew:false
    }
  },
  methods:{
    show(){
      this.togglePublishNew=true
    },
    hidden(){
      this.togglePublishNew=false

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.index
  position:relative
  .publish
    position:absolute
    top:14px
    right:14px
    font-size:28px
    font-weight:700
    cursor:pointer
  .publishNew
    width:100%
    height:100%
    z-index:100
    position:fixed
    top:0
    left:0
    background:$color-background
    .close
      position:absolute
      font-size:32px
      top:15px
      right:15px
      cursor:pointer
    .publishTxt
      position:absolute
      text-align:center
      padding:20px
      top:30%
      left:50%
      transform:translate(-50%,-50%)
      font-size:28px
    .publishIcon
      position:absolute
      top:50%
      left:50%
      width:300px
      transform:translate(-50%,-50%)
      display:inline-flex
      justify-content:space-around
      .article,.pic
        display:inline-block
        box-sizing:border-box
        width:100px
        height:100px
        text-align:center
        padding:20px 20px
        border-radius:50%
        &.articleBox
          color:#ff6666
          border:1px solid #ff6666
        &.picBox
          color:#5ed125
          border:1px solid #5ed125
        .picIcon,.articleIcon
          font-size:32px
</style>