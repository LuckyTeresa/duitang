<template>
<div class='guide'>
    <router-link tag='div' class='guide-item' to='/index'>
        <i class='iconfont icon-quanbu1'></i>
        <span class='guide-item-txt'>首页</span>
    </router-link>
    <router-link tag='div' class='guide-item' to='/find'>
        <i class='iconfont icon-faxian'></i>
        <span class='guide-item-txt'>发现</span>
    </router-link>
    <router-link tag='div' class='guide-item' to='/shop'>
        <i class='iconfont icon-shangdian'></i>
        <span class='guide-item-txt'>商店</span>
    </router-link>
    <router-link tag='div' class='guide-item' to='/mine'>
        <i class='iconfont icon-wode'></i>
        <span class='guide-item-txt'>我的</span>
    </router-link>
</div>

</template>

<script>
import index from 'components/index/index'
import find from 'components/find/find'
import shop from 'components/shop/shop'
import mine from 'components/mine/mine'

export default {
  'name': 'guide',
  components:{index,find,shop,mine},
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.guide
    border-1px(#dddddd)
    position:fixed
    z-index:99
    bottom:0
    display:flex
    justify-content:center
    width:100%
    height:50px
    background:$color-element
    .guide-item
        flex:1
        text-align:center
        display:inline-flex
        flex-direction:column
        justify-content:center
        &.router-link-active
            color:$color-active
        .guide-item-txt
            font-size:$font-size-small


</style>
