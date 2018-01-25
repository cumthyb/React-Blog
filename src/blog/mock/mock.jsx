import Mock from "mockjs";



const MockData = () => {
    var data = Mock.mock({
        //list|1-10 数组元素个数随机范围， id|+2 属性值递增, age|20-30数值随机范围
        // test|3.2-5 3.xx-3.xxxxx 整数位3，小数位位数范围为2-5
        //'yourname|2-4': 'alice-' 重复字符串的次数范围2-4
        //常规真实数据格式，@name @color @url @first @last

        'articles|11-99': [{
            'id|+1': 1,
            'title': '@csentence',
            // 'time': '@date',
            // 'category': '@cword(4)',
            // 'tag': '@cword(3)',
            'desc': '@cparagraph(3)'
        }]
    });


    const categorys = ['前端', '数据结构', '算法', '网络', '软件工程', 'C#', 'Node', "随笔", "吐槽"]
    const tags = ['HTML', 'CSS', 'JavaScript', 'WebSocket', 'React', 'Redux', 'ES6', 'VS Code', 'Koa2', 'Java', '多线程', 'AE', 'MapBox']
    data.articles.map((item) => {
        item['category'] = categorys[Mock.Random.integer(0, 6)];
        item['tag'] = tags[Mock.Random.integer(0, 12)];
        item['time'] = "" + (Mock.Random.integer(0, 6) + 2012) + "-" + Mock.Random.integer(1, 12) + "-" + Mock.Random.integer(1, 30);
    })


    return data.articles;
    // return JSON.stringify(articles);


}


export default MockData;