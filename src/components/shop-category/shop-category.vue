<template>
    <div class='categoryWrapper'>
        <div class='category'>
                <div class='categoryRow'>
                    <router-link class='categoryItem' tag='div'  to='/shop/shophufu'>
                        <i class="categoryIcon iconfont icon-37"></i>
                        <span class='categoryTxt'>护肤</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-kouhong"></i>
                        <span class='categoryTxt'>彩妆</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-ui"></i>
                        <span class='categoryTxt'>个人护理</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-baozhuanhuan"></i>
                        <span class='categoryTxt'>服饰箱包</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-huihuaban"></i>
                        <span class='categoryTxt'>文具手账</span>
                    </router-link>
                </div>
                <div class='categoryRow'>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-jujia"></i>
                        <span class='categoryTxt'>居家</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-coffekafei"></i>
                        <span class='categoryTxt'>美食</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to=''>
                        <i class="categoryIcon iconfont icon-aixin"></i>
                        <span class='categoryTxt'>堆糖制物</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div'  to='/shop/shoptoplist'>
                        <i class="categoryIcon iconfont icon-huiyuan"></i>
                        <span class='categoryTxt'>畅销单品</span>
                    </router-link>
                    <router-link class='categoryItem' tag='div' to='/shop/shopallcategory'>
                        <i class="categoryIcon iconfont icon-quanbu1"></i>
                        <span class='categoryTxt'>全部分类</span>
                    </router-link>
                </div>
        </div>
        <div v-if='rankings.length>0' class='rankingWrappers'>
            <router-link  tag='div' class="ranking" v-for='(ranking,index) in rankings' :key='index' to='/shop/shopnews/'>
            <!-- to  无法渲染?? -->
                <span class='rankingItems' >{{ranking.enter_main_title}}</span>
                <span class='rankingItems' >{{ranking.enter_sub_title}}</span>
                <img class='rankingItems rankingImg' :src='ranking.enter_image_url'>
            </router-link>
        </div>

    </div>
</template>

<script>

import shophufu from 'components/shophufu/shophufu'
import shoptoplist from 'components/shoptoplist/shoptoplist'
import shopallcategory from 'components/shopallcategory/shopallcategory'
import {ERR_OK} from 'common/js/config'
export default {
  name: 'shopcategory',
  components:{shophufu,shoptoplist,shopallcategory,},
  data () {
    return {
    }
  },
  props:{
    shopAd:{type:Array,default:function(){return []}},
    rankings:{type:Array,default:function(){ return []}}
  },
  created(){
  },
  mounted(){
    this.$nextTick(()=>{
        //console.log(this.rankings)//子组件在哪一个阶段获取到的数据
        // for(let i=0;i<this.rankings.length;i++){
        //     this.rankings[i].url=this.categoryUrls[i]
        // }

    })
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.categoryWrapper
    width:100%
    // padding:10px
    margin:0 auto
    background:$color-element
    .categoryRow
        display:flex
        justify-content:space-around
        .categoryItem
          display:inline-flex
          flex-direction:column
          align-items:center
          width:20%
          height:50px
          padding:10px 0
          .categoryIcon
              font-size:32px
              padding-bottom:5px
          .categoryTxt
              font-size:$font-size-medium
    .rankingWrappers
        display:flex
        justify-content:space-between
        height:130px
        padding:15px 10px
        margin-top:10px
        border-1px($color-line)
        border-bottom-1px($color-line)
        .ranking
            text-align:center
            border-right-1px($color-line)
        .rankingItems
            display:block
            font-size:$font-size-medium
            &:nth-child(2)
                font-size:$font-size-medium
                color:$color-text-secondary
                padding:10px
            &.rankingImg
                width:80px
                height:80px
                margin:0 auto






</style>
