// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    img:'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
    filmdetails:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let _this=this;
    wx.request({
      // console.log(options)
      url: 'http://127.0.0.1:5555' + options.url + options.id, //仅为示例，并非真实的接口地址
      success(res) {

        _this.setData({
          title: res.data.title,
          filmdetails: res.data.subjects
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})