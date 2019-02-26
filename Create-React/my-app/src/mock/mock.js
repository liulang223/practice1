import Mock from 'mockjs'
import data from './data.json'
import URL from '../service.config'

Mock.mock('https://api.myjson.com/bins/9inum',{dataList:data})
Mock.mock('https://www.helloworld.com/1',{
    'name|4':'Hello',
    'age|5-10':1
})
Mock.mock('https://www.helloworld.com/2',{
    'list|10-20':[
        {
            'id|+1':1,
            'name':'@first @last',
            'text':'@cword(10,15)',
            'time':'@time(hh:mm:ss)',
            'cname':'@cname',
            'img':'@img(100x100)'
        }
    ]
})
let Random = Mock.Random;

let TestDataList =()=>{
    let list = [];
    for(let i=0;i<10;i++){
        let obj = {
            name:Random.cname(),
            id:Random.integer(100,999),
            img:Random.dataImage('50x50',Random.name()),
            address:Random.province()
        }
        list.push(obj);
    }
    return list;
}

Mock.mock(URL.getData3,{data:TestDataList})