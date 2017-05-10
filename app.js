//app.js
App({
  onLaunch: function (ops) {
    if(ops.scene == 1044){ // 当用户通过带 shareTicket 的分享卡片进入小程序时，小程序才开始读取群聊信息
      // console.log(ops.shareTicket)  你可以取消注释它，将 shareTicket 输出至控制台
      wx.getShareInfo({
        shareTicket: ops.shareTicket,
        complete(res){
          console.log(res) // 输出加密后的当前群聊的 openGId 信息
        }
      })
      /* 特别注意：
       * 如果希望在开发者工具中，调试用户通过 1044 场景值进入小程序的情况
       * 请在开发者工具中选择「自定义编译」，场景选择 1044
       * 再随意选择一个测试群即可。
       *
       * 本代码由让你更知小程序的知晓程序（微信号 zxcx0101）提供。
       */
    }
  }
})