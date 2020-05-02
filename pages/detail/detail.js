// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    othersList:null,
    commentData:null    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId=options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },
/**
 * 得到视频评论数据
 * */
getCommentList(videoId){
  let that=this;
  wx.request({
    url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/commentsList?id='+videoId,
    success(res){
      if(res.data.code===0){
        that.setData({
          commentData:res.data.data.commentData
        })
      }
    }
  })
},
/**
 * 得到视频详情数据
 * */
getCurrentVideo(videoId){
  let that=this;
  wx.request({  
   url:'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id='+videoId,
    success(res){
        if(res.data.code==0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
    }
  })  
},
/**
 * 得到推荐视频
 */
getOthersList(videoId){
  let that=this;
  wx.request({
    url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/othersList?id='+videoId,
    success(res){
      if(res.data.code==0){
        that.setData({
          othersList:res.data.data.othersList
        })
      }
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