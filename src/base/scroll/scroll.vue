<template>
<div ref='wrapper'>
    <slot>

    </slot>
</div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props:{
    probeType:{type:Number,default:1},
    click:{type:Boolean,default:true},
    data:{type:Array,default:null},
    pullup:{type:Boolean,default:false}
  },
  mounted(){
    setTimeout(()=>{
      // console.log(this.data)
        this._initScroll()
    },20)
  },
  methods:{
    _initScroll(){
        if(!this.$refs.wrapper){
            return
        }
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:this.click
        })
        if(this.pullup){
          this.scroll.on('scrollEnd',()=>{
            if(this.scroll.y<=(this.scroll.maxScrollY)){
              this.$emit('scrollToEnd')
            }
          })
        }
    },
    enabled(){
        this.scroll&&this.scroll.enabled()
    },
    refresh(){
        this.scroll&&this.scroll.refresh()
    }
  },
  watch:{
    data(){
        setTimeout(()=>{
            this.refresh()
            // console.log('refresh');
        },20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
