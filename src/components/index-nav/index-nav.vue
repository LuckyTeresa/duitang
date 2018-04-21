<template>
  <div class='navWrapper' ref='navWrapper'>
    <ul class='list' ref='listNav'>
        <li class='list-item'>
          <router-link to='/index/daily' tag='div' class='item'>每日精选</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/lpj' tag='div' class='item'>堆糖商店</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/beauty' tag='div' class='item'>美学课堂</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/foods' tag='div' class='item'>美食菜谱</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/life' tag='div' class='item'>生活家居</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/wallpaper/' tag='div' class='item'>精选壁纸</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/avatar/' tag='div' class='item'>个性头像</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/book' tag='div' class='item'>书影杂谈</router-link>
        </li>
        <li class='list-item'>
          <router-link to='/index/travel' tag='div' class='item'>诗与远方</router-link>
        </li>


    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import indexdaily from 'components/index-daily/index-daily'
import indexlpj from 'components/indexlpj/indexlpj'
import indexbeauty from 'components/index-beauty/index-beauty'
import indexfoods from 'components/index-foods/index-foods'
import indexlife from 'components/index-life/index-life'
import indexwallpaper from 'components/index-wallpaper/index-wallpaper'
import indexavatar from 'components/index-avatar/index-avatar'
import indexbook from 'components/index-book/index-book'
import indextravel from 'components/index-travel/index-travel'
export default {
  name: 'indexNav',
  components:{indexlpj,indexdaily,indexbeauty,indexfoods,indexlife,indexbook,indextravel,indexavatar,indexwallpaper},
  data () {
    return {
      // titles:['每日精选','Class','美学社','悦食季','小生活','书影音','趣旅行','手作绘','新摄团']
    }
  },
 created(){
    this.$nextTick(() => {
      this._setNavWidth();
        this._initScroll();
    });
  },
  methods:{
    _setNavWidth(){
      let width=0,
          listNav=this.$refs.listNav;
          for(let i=0;i<listNav.children.length;i++){
            width+=listNav.children[i].clientWidth
          }
          // 动态获取滚动区的宽度,一定要动态设置ul的宽度才可以
          this.$refs.listNav.style.width=width+'px'
      },
    _initScroll(){
      this.indexNavScroll=new BScroll(this.$refs.navWrapper,{
        scrollX: true,
        scrollY: false,
        momentum: false,
        click: true,
        probeType:3,
        momentum:true
      });
    },
    /*changeStyle(){

    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.navWrapper
  width:100%
  overflow:hidden
  .list
    display:flex
    flex-flow:row nowrap
    // padding:10px
    .list-item
      border-bottom-1px(#dddddd)
      flex: 0 0 100px
      text-align:center
      width:100px
      box-sizing:border-box
      .item
        padding:5px 10px
        white-space:nowrap
        &nth-child(-1)
          padding-right:0
      .router-link-active
        color:$color-active
        border-bottom:3px solid $color-active

</style>
