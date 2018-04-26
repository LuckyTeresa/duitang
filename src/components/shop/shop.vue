<template>
  <div class='shop'>
    <div class="search">
      <search class='search-item'></search>
      <div >
        <i class="iconfont icon-tubiaolunkuo-1 "></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class='scrollWrapper'>
      <scroll :data='columnList' class='scroll'>
        <div>
          <div v-if='shopAd.length>0' class='bannerWrapper'>
              <banner>
                  <div v-for='(item,index) in shopAd' >
                      <a :href='item.target'>
                        <img :src="item.image_url" >
                      </a>
                  </div>
              </banner>
          </div>
          <shopcategory :shopAd='shopAd' :rankings='rankings'></shopcategory>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
          <div class='column'>
            <div class="special">专题</div>
            <shopcolumn ref='shopcolumn' :columnList='columnList'></shopcolumn>
          </div>
        </div>
      </scroll>

    </div>
  </div>
</template>

<script>
import banner from 'base/banner/banner'
import search from 'base/search/search'
import shopcategory from 'components/shop-category/shop-category'
import {getShopTop,getRanking,getColumnData} from 'common/js/api'
import {ERR_OK} from 'common/js/config'
import scroll from 'base/scroll/scroll'
import shopcolumn from 'components/shopcolumn/shopcolumn'
export default {
  name: 'shop',
  components:{banner,search,shopcategory,scroll,shopcolumn},
  data () {
    return {
      shopAd:[],
      rankings:[],
      columnList:[],
      categoryUrls:['/shop/shopnews/','/shop/shoprankinglist/','/shop/shopparents/']
    }
  },
  created(){
      this._getShopTop();
      this._getRanking();
      this._getColumnData();
  },
  methods:{
    _getShopTop(){
        getShopTop().then((res)=>{
            if(res.status==ERR_OK){
              this.shopAd=res.data.object_list
            }

        })
    },
    _getRanking(){
      getRanking().then((res)=>{
        if(res.status==ERR_OK){
          this.rankings=res.data.object_list;
          // console.log(this.rankings)//子组件在哪一个阶段获取到的数据
        for(let i=0;i<this.rankings.length;i++){
            this.rankings[i].url=this.categoryUrls[i]
        }
        }
      })
    },
    _getColumnData(){
        getColumnData().then((res)=>{
            if(res.status==ERR_OK){
              let temp=res.data.object_list;
                for(let i=0;i<temp.length;i++){
                  if(temp[i].display_type!=3){
                    this.columnList.push(temp[i])
                  }
                }
                console.log(this.columnList);
            }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

  .search
    display:flex
    justify-content:space-around
    align-items:center
    .search-item
      flex:0 0 75%
  .scrollWrapper
    position:fixed
    width:100%
    top:50px
    bottom:50px
    .scroll
      height:100%
      overflow:hidden
    .bannerWrapper
      position:relative
      width:100%
      overflow:hidden
    .column
      margin-top:10px
      background:$color-element
      text-align:center
      .special
        padding:15px


</style>