// components/cart/cart.js
const computedBehavior = require('miniprogram-computed')


Component({

  


  /**
   * 组件的属性列表
   */
  properties: {
    cartlist: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  computed: {
    behaviors: [computedBehavior],
    totalNum(data) {
      console.log(data)
      return data.cartlist.reduce((sum, item) => {
        return sum + item.num
      }, 0)
    },
    totalPrice(data) {
      console.log(data)
      return data.cartlist.reduce((sum, item) => {
        return sum + item.num * item.price
      }, 0)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
