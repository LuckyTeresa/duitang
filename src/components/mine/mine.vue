<template>
<div class='mine'>
    <div class='top'>
        <div class='topTxt'>
            <span class='me'>我</span>
            <div class='topIcon'>
               <span class='iconfont icon-youxi topIconGroup game'></span>
               <span class='iconfont icon-shezhi topIconGroup tools'></span>
            </div>
        </div>
        <div class='topUser'>
        <div class='topUserLeft'>
            <div class='userAvatar'>
                <img src="" alt="" />
            </div>
            <div class='userTxt'>
                <p class='username'>韩十一</p>
                <p class='signature'>前路不需太重行囊</p>
            </div>
        </div>
            <div class='more'>&gt;</div>
        </div>
    </div>
    <div class='order'>
        <div class='orderTxt'>
            <div class='orderTxtLeft'>
                <span class='iconfont icon-tubiaolunkuo- orderLeftIcon'></span>
                <span>我的订单</span>
            </div>
            <div>&gt;</div>
        </div>
        <div class='orderIcon'>
            <div class='payfor orderIconItem'>
                <span class='iconfont icon-daifukuan icontop'></span>
                <span class='payforTxt'>待付款</span>
            </div>
            <div class='waitfor orderIconItem'>
                <span class='iconfont icon-icon-test icontop'></span>
                <span class='waitforTxt'>待发货</span>
            </div>
            <div class='receive orderIconItem'>
                <span class='iconfont icon-daishouhuo icontop'></span>
                <span class='receiveTxt'>待收货</span>
            </div>
            <div class='evaluate orderIconItem'>
                <span class='iconfont icon-gerenzhongxindingdandaipingjia icontop'></span>
                <span class='evaluateTxt'>待评价</span>
            </div>
        </div>
        <div class='luckyBag'>
        <div class='myPresent'>
            
        </div>
        <div class='myArticle'>
            
        </div>
            
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.top
    background:$color-element
    .topTxt
        padding:15px
        border-bottom-1px($color-line)
        .me
            font-weight:700
            line-height:20px
        .topIcon
            float:right
            .topIconGroup
                font-size:26px
                &.game
                    display:inline-block
                    margin-right:25px
    .topUser
        padding:15px
        display:flex
        flex-direction:row
        justify-content:space-between
        align-items:center
        margin-bottom:15px
        .topUserLeft
            display:flex
            .userAvatar
                width:70px
                height:70px
                background:$color-active
                border-radius:50%
                margin-right:15px
                flex:0 0 70px
                width:70px
            .userTxt
                display:flex
                flex-direction:column
                justify-content:center
                line-height:30px
                align-items:flex-start
                .username
                    font-weight:700
                .signature
                    font-size:$font-size-medium
.order
    background:$color-element
    display:flex
    padding:15px
    flex-direction:column
    margin-bottom:15px
    .orderTxt
        display:flex
        justify-content:space-between
        padding-bottom:20px
        .orderLeftIcon
            font-size:24px
            display:inline-block
            margin-right:20px
    .orderIcon
        display:flex
        justify-content:space-between
        padding:0 15px 0 15px
        .orderIconItem
            display:flex
            flex-direction:column
            align-items:center
            .icontop
                font-size:28px
                padding:5px
            .payforTxt,.waitforTxt,.receiveTxt,.evaluateTxt
                font-size:$font-size-medium









</style>


.icon-gerenzhongxindingdandaipingjia
