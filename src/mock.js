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
      evaluat: '良心店铺',
      satisfied: '1'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '2',
      evaluat: '送货速度慢',
      satisfied: '0'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '量给得还可以',
      satisfied: '1'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '服务态度不错',
      satisfied: '1'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '5',
      evaluat: '吃了还想再吃',
      satisfied: '1'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '5',
      evaluat: '好吃',
      satisfied: '1'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '还行',
      satisfied: '1'
    }, {
      time: '2018-07-23 10:22',
      phone: '12222222222',
      string: '4',
      evaluat: '不太行',
      satisfied: '0'
    }],
    storeList:[{
      img: '/static/store/jian.png',
      desc: '在线支付满28减5'
    },{
      img: '/static/store/zhe.png',
      desc: 'VC无限橙果汁全场8折'
    },{
      img: '/static/store/te.png',
      desc: '单人精彩套餐'
    },{
      img: '/static/store/piao.png',
      desc: '该商家支持发票，请下单写好发票抬头'
    },{
      img: '/static/store/bao.png',
      desc: '已加入"外卖保"计划，食品安全保障'
    }],
    liveList: [
      '/static/store/live1.jpeg', '/static/store/live2.jpeg', '/static/store/live3.jpeg', '/static/store/live4.jpeg',
    ],
    storeInformation: [
      '该商家支持发票,请下单写好发票抬头', '品类:其他菜系,包子粥店', '北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340', '营业时间:10:00-20:30'
    ]
  }
})
export default {
  data
}