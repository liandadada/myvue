import Mock from 'mockjs'

const data = Mock.mock('/api/data', (req, res) => {
  return {
    menuGoods: [{
      goodsImg: '/static/menu/img01.jpeg',
      goodsName: '皮蛋瘦肉粥',
      notic: '咸粥',
      sales: '188',
      praise: '88%',
      price: '10'
    }, {
      goodsImg: '/static/menu/img02.jpeg',
      goodsName: '扁豆闷面',
      sales: '188',
      praise: '96%',
      price: '10'
    }, {
      goodsImg: '/static/menu/img03.jpeg',
      goodsName: '葱花饼',
      sales: '124',
      praise: '96%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img04.jpeg',
      goodsName: '牛肉馅饼',
      sales: '184',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img05.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img06.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img07.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img08.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img09.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img10.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img11.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }, {
      goodsImg: '/static/menu/img12.jpeg',
      goodsName: '皮蛋瘦肉粥',
      sales: '188',
      praise: '88%',
      price: '14'
    }],
    evaluation: [{
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '5',
      evaluat: '良心店铺'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '2',
      evaluat: '送货速度慢'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '量给得还可以'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '服务态度不错'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '5',
      evaluat: '吃了还想再吃'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '5',
      evaluat: '好吃'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '还行'
    }]
  }
})

export default {
  data
}
