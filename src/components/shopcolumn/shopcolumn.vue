<template>
<div>
    <div v-if='columnList.length>0' class='columnWrapper' v-for='(column,index) in columnList'>
      <div class="columnTitle">
            <div v-if='column.display_type==2'>
                <div class='topBorder'>
                  <div class='columnTxt topColumn'>
                      <p class="topSubTitle">{{column.description}}</p>
                      <p class='topCountDown'>
                          <span class='topCountDownItem'>03</span>:<span class='topCountDownItem'>46</span>:<span class='topCountDownItem'>53</span>
                      </p>
                      <span class="topSeeDetial">查看详情></span>
                  </div>
                </div>
                <img class='columnBackground' width='100%' :src='column.image_url'>
                <div class='BackgroundBox'>
                </div>
            </div>
              <div v-else-if='column.display_type==1'>
                  <div class='columnTxt'>
                      <p class="specialName">{{column.stitle}}</p>
                      <p class="subTitle">{{column.description}}</p>
                      <span class="seeDetial">查看详情</span>
                  </div>
                  <img  class='columnBackground' width='100%' :src='column.image_url'>
                  <div class='BackgroundBox'>
                  </div>
              </div>
              <!-- 有问题 -->
              <div v-else>
                  <div class='columnTxt'>
                      <p  class="specialName"></p>
                      <p class="subTitle"></p>
                      <span class="seeDetial">查看详情</span>
                  </div>
                  <img class='columnBackground' width='100%' >
                  <div class='BackgroundBox'>
                  </div>
              </div>

      </div>
        <div class='triangle'>
        </div>
        <div class="goodsBox">
            <!-- goodsWrapper上添加滚动,设置display:flex -->
            <div class="goodsWrapper" >
                <!-- goods为单个商品的box -->
                <div class="goods" v-for='goods in column.inventory_list'>
                    <!-- goodsinner 为单个goods中的flex布局添加 -->
                    <div class="goodsinner">
                        <img class="goodsImg" :src='goods.pictures[0]' ></img>
                        <p class="goodsName">{{goods.inventory_caption}}</p>
                        <div v-if='goods.vip_sale_price' class="goodsPrice">
                            <span class="price">¥{{goods.vip_sale_price}}</span>
                            <span class="preprice">¥{{goods.sale_price}}</span>
                        </div>
                        <div v-else class='goodsPrice'>
                            <span class="secondaryColumn">¥{{goods.sale_price}}</span>
                        </div>
                    </div>
                </div>
                <div v-if='column.inventory_list' class="seeMore">
                    <span class="iconfont icon-quanbu1 seeMoreIcon"></span>
                    <span class="seeMoreTxt">查看更多></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'shopcolumn',
  components:{},
  data () {
    return {
    }
  },
  props:{
    columnList:{type:Array,default:function(){ return []}}
  },
  mounted(){
    setTimeout(()=>{
        let goodsWrappers=document.getElementsByClassName('goodsWrapper');
        let goodsBoxs=document.getElementsByClassName('goodsBox');
            for(let i=0;i<goodsWrappers.length;i++){
                this._setWrapperWidth(goodsWrappers,i);
                this._initScroll(goodsBoxs,i);
            }
            // console.log(this.columnList[4].column_list)
    },1000)
  },
  methods:{
    _setWrapperWidth(goodsWrappers,index){
        let goods=goodsWrappers[index],
            seeMore=document.getElementsByClassName('seeMore'),
            width=0;
            // seeMoreBoxWidth=seeMore.children[0].clientWidth
            for(let i=0;i<goods.children.length;i++){
                width+=goods.children[i].clientWidth
            }
            goods.style.width=width+100+'px';
    },
    _initScroll(goodsBoxs,index){
        this.goods=new BScroll(goodsBoxs[index],{
            scrollX: true,
            scrollY: false,
            momentum: false,
            click: true,
            probeType:3,
            momentum:true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.columnWrapper
    position:relative
    .columnTitle
        position:relative
        font-size:0
        .columnTxt
            position:absolute
            top:50%
            left:50%
            transform:translate(-50%,-50%)
            font-size:18px
            color:$color-element
            z-index:10
            width:100%
            .specialName
                width:100%
                font-size:$font-size-medium
                padding:5px
            .subTitle
                width:100%
                font:normal bold 20px/24px 'Microsoft Heiti'
            .seeDetial
                display:inline-block
                padding:5px 10px
                margin:10px auto
                border:1px solid #fff
                border-radius:15px
            &.topColumn
                background:$color-element
                color:$color-text
                padding:15px
                width:45%
                .topSubTitle
                    font:normal 300 $font-size-large/20px 'sans-serif'
                    padding:3px
                .topCountDown
                    padding:5px
                    .topCountDownItem
                        display:inline-block
                        border:1px solid #333
                        border-radius:5px
                        padding:5px
                        margin:0 3px
                        font-size:$font-size-small
                .topSeeDetial
                    font-size:$font-size-medium
        .BackgroundBox
            position:absolute
            top:0
            left:0
            width:100%
            height:100%
            background:rgba(0,0,0,0.3)
            z-index:5
    .triangle
        position:absolute
        width:0
        height:0
        border-left:10px solid transparent
        border-right:10px solid transparent
        border-bottom:12px solid #ffffff
        z-index:11
        margin-left:-6px
        bottom:169px
        left:50%
    .goodsWrapper
        height:170px
        box-sizing:border-box
        display:flex
        justify-content:space-around
        overflow:hidden
        padding:10px
        .goods
            flex:0 0 150px
            width:150px
            display:flex
            flex-flow:column nowrap
            justify-content:space-between
            .goodsinner
                flex:0 1 150px
                .goodsImg
                    width:100px
                    height:100px
                .goodsName
                    font-size:$font-size-small
                    padding-top:10px
                .goodsPrice
                    font-size:$font-size-small
                    padding:5px 0
                    .price
                        color:$color-active
                        dispaly:inline-block
                        margin-right:5px
                    .preprice
                        color:$color-text-secondary
                        text-decoration:line-through
                    .secondaryColumn
                        color:$color-active
        .seeMore
            flex:0 0 100px
            width:100px
            border:1px solid $color-text-secondary
            border-radius:5px
            display:flex
            flex-flow:column nowrap
            justify-content:center
            .seeMoreIcon
                font-size:34px
                color:$color-text-secondary
            .seeMoreTxt
                font-size:$font-size-medium





</style>
