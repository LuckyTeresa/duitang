<template>
<div class='search-wrapper' >
    <input type="text" class='search-box' ref='searchBox'/>
    <div class="text-wrapper" @click='searchBlur'>
        <span>搜索感兴趣的内容</span>
    </div>
    <!-- <i class='iconfont icon-sousuo search-icon'></i> -->
</div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {

    }
  },
    methods:{
        searchBlur(){
            this.$refs.searchBox.focus()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-wrapper{
    width:80%;
    position:relative;
}
.search-box{
    display:inline-block;
    width:100%;
    height:20px;
    font-size:14px;
    padding:4px;
    margin:10px;
    background:#dddddd;
    border:1px solid #f2f2f2;
    outline:none;
    border-radius:3px;
}
.text-wrapper{
    position:absolute;
    top:50%;
    left:50%;
    }
.text-wrapper span{
    font-size:12px;
    color:#666;
    display:block;
    height:24px;
   margin-left:-50%;
   margin-top:-10px;
}
.text-wrapper span:before{
    font-family:"iconfont" !important;
    font-size:20px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content:"\e60e";
}


</style>
