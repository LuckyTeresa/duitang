import axios from 'axios'

// 获取首页banner数据
export function getBanner(){
    const url='/api/getBanner/';
    const data={
        app_code:'mdt',
        // format:'json'
    }
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}


// 获取shop页面banner数据
export function getShopTop(){
    const url='/api/getShopTop/';
    const data={
        ad_id: 'COM018',
        limit: '5',
        start: '0',
        timestamp: new Date().getTime().toString()
    }
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}


// 请求shop页面新品速递,口碑排行数据
export function getRanking(){
    const url='/api/getRanking/';
    const data={
        type:'3,4,7',
        timestamp: new Date().getTime().toString()
    }
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}

// 获取shop页面专栏数据
export function getColumnData(){
    const url='/api/getColumnData/';
    const data={
        limit: '5',
        start: '0',
        timestamp: new Date().getTime().toString()
    }
     return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}

// 获取首页下瀑布流数据
export function getWaterFall(start,limit){
    const url='/api/getWaterFall/';
    const data={
        start: start,
        include_fields:'sender%2Calbum',
        limit: limit,
        _: new Date().getTime().toString()
    }
    // console.log(url)
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}


