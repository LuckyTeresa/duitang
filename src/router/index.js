import Vue from 'vue'
import Router from 'vue-router'


import index from 'components/index/index'
import find from 'components/find/find'
import shop from 'components/shop/shop'
import mine from 'components/mine/mine'

import indexdaily from 'components/index-daily/index-daily'
import indexlpj from 'components/indexlpj/indexlpj'
import indexbeauty from 'components/index-beauty/index-beauty'
import indexfoods from 'components/index-foods/index-foods'
import indexlife from 'components/index-life/index-life'
import indexwallpaper from 'components/index-wallpaper/index-wallpaper'
import indexavatar from 'components/index-avatar/index-avatar'
import indexbook from 'components/index-book/index-book'
import indextravel from 'components/index-travel/index-travel'

import shophufu from 'components/shophufu/shophufu'
import shoptoplist from 'components/shoptoplist/shoptoplist'
import shopallcategory from 'components/shopallcategory/shopallcategory'
import shopnews from 'components/shopnews/shopnews'
import shopparents from 'components/shopparents/shopparents'
import shoprankinglist from 'components/shoprankinglist/shoprankinglist'

import user from 'components/user/user'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {path: '/',redirect: '/index'},

    {path: '/index',component: index,children:[
        {path:'',redirect:'/index/daily'},
        {path:'/index/daily',component:indexdaily},
        {path:'/index/lpj',component:indexlpj},
        {path:'/index/beauty',component:indexbeauty},
        {path:'/index/foods',component:indexfoods},
        {path:'/index/life',component:indexlife},
        {path:'/index/wallpaper',component:indexwallpaper},
        {path:'/index/avatar',component:indexavatar},
        {path:'/index/book',component:indexbook},
        {path:'/index/travel',component:indextravel},
    ]},

    {path:'/find',component:find},

    {path:'/shop',component:shop,children:[
        {path:'/shop/shophufu',component:shophufu},
        {path:'/shop/shoptoplist',component:shoptoplist},
        {path:'/shop/shopallcategory',component:shopallcategory},
        {path:'/shop/shopnews',component:shopnews},
        {path:'/shop/shoprankinglist',component:shoprankinglist},
        {path:'/shop/shopparents',component:shopparents},
    ]},

    {path:'/mine',component:mine},

  ]
})
