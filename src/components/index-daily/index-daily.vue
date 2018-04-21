<template>
  <div class='indexDaily'>
    <scroll :data='waterFall' ref='scroll' class='indexScroll' :pullup='pullup' @scrollToEnd='showMore'>
      <div>
          <div v-if='bannerList.length' class="bannerWrapper">
            <banner>
              <div v-for='(item,index) in bannerList' :refs='`bannerBox${index}`'>
                  <a :href='`https://m.duitang.com/${item.link}`'>
                    <img :src="item.image" v-on:load='loadImg'>
                  </a>
              </div>
            </banner>
          </div>
          <waterfall :waterfall='waterFall' @update='refreshScroll'></waterfall>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getBanner,getWaterFall} from 'common/js/api'
import {ERR_OK} from 'common/js/config'
import banner from 'base/banner/banner'
import waterfall from 'base/waterFall/waterfall'
import scroll from 'base/scroll/scroll'
import user from 'components/user/user'
export default {
  name: 'indexdaily',
  components:{banner,user,waterfall,scroll},
  data () {
    return {
      pullup:true,
      more:true,
      start:0,
      limit:24,
      bannerList:[],
      waterFall:[]
    }
  },
  created(){
   this._getBanner();
   this._getWaterFall();

  },
  methods:{
    _getBanner(){
      getBanner().then((res)=>{
        if(res.status==ERR_OK){
          this.bannerList=res.data.object_list
        }
      })
    },
    refreshScroll(){
      // console.log('已经refresh了');
      this.$refs.scroll.refresh();
    },
    _getWaterFall(){
      getWaterFall(this.start,this.limit).then((res)=>{
        if(res.status==ERR_OK){
          if(this.start>res.data.total){
            this.more=false
          }
          this.waterFall=res.data.object_list
          this.start+=this.limit
          }
        })
    },
    loadImg(){
      if(!this.checkLoad){
        this.$refs.scroll.refresh()
        this.checkLoad=true
      }
    },
    showMore(){
      if(!this.more){
        return
      }
      getWaterFall(this.start,this.limit).then((res)=>{
        if(res.status==ERR_OK){
          this.waterFall=this.waterFall.concat(res.data.object_list)
          // this.waterFall=res.data.object_list
        }
        this.start+=this.limit
        if(this.start>res.data.total){
          this.more=false
        }
        this.$refs.scroll.refresh()
      })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.indexDaily
  position:fixed
  bottom:50px
  top:83px
  width:100%
  .indexScroll
    height:100%
    overflow:hidden
    .bannerWrapper
      position:relative
      width:100%
      overflow:hidden








</style>
