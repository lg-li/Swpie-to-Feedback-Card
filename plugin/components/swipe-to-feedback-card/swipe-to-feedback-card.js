// plugin/components/swipe-to-feedback-card/swipe-to-feedback-card.js
Component({
  lifetimes: {
    attached() {
      console.log(this.data.list[0])
      this.setData({
        currentItem: this.data.list[0],
        currentItemIndex: 0
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [{
          id: 0,
          type: "image",
        url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=328517395,2303970886&fm=27&gp=0.jpg",
          title: "TEST1",
          subtitle: "Swipe-to-feedback Card",
          description: "请通过组件传参传入自己的数据",
          navigateUrl: ""
        },
        {
          id: 1,
          type: "image",
          url: "http://img4.imgtn.bdimg.com/it/u=3300954562,1274487754&fm=26&gp=0.jpg",
          title: "TEST2",
          subtitle: "Swipe-to-feedback Card",
          description: "请通过组件传参传入自己的数据",
          navigateUrl: ""
        }
      ]
    },
    emptyDescription: {
      type: String,
      value: '此处已无更多卡片'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentCardOption: 0, // -1 dislike, 0 not selected, 1 like
    currentItem: null,
    currentCardPosition: {
      x: null,
      y: null
    },
    currentHideClass: '',
    like: [],
    dislike: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(item) {
      // 向父组件传递喜欢的项目
      this.triggerEvent("onlike", item);
    },
    onDislike: function (item) {
      // 向子组件传递不喜欢的项目
      this.triggerEvent("ondislike", item);
    },
    onFinshSwipe: function(e) {
      let cardOptionInThisRound = this.data.currentCardOption
      let that = this
      if (cardOptionInThisRound == -1) {
        // 不喜欢
        that.data.dislike.push(that.data.currentItem)
        that.setData({
          currentHideClass: 'card-hide-left'
        })
        that.onDislike(that.data.currentItem)
      } else if (cardOptionInThisRound == 1) {
        // 喜欢
        that.data.like.push(that.data.currentItem)
        that.setData({
          currentHideClass: 'card-hide-right'
        })
        that.onLike(that.data.currentItem)
      }
      if (cardOptionInThisRound != 0) {
        // 仅当用户已经选择一种喜好后 向前或向后移出当前卡片
        setTimeout(function() {
          that.data.list.shift()
          if (that.data.list.length > 0) {
            let nextItem = that.data.list[0]
            that.setData({
              currentCardPosition: {
                x: 0,
                y: 0
              },
              currentCardOption: 0,
              currentHideClass: ''
            })
            setTimeout(function () {
              that.setData({
                list: that.data.list,
                currentItem: nextItem
              })
            }, 50)
          }
        }, 800)
      } else {
        // 没有做出选择，复位当前卡片
        that.setData({
          currentCardPosition: {
            x: 0,
            y: 0
          }
        })
      }


    },
    onSwiperChange: function(e) {
      let that = this
      // console.log(e)
      // console.log(this.data.currentItem)
      if (e.detail.source == 'out-of-bounds' || e.detail.source == 'touch-out-of-bounds') {
        if (e.detail.x <= 0) {
          // 不喜欢
          this.setData({
            currentCardOption: -1
          })
        } else {
          // 喜欢
          this.setData({
            currentCardOption: 1
          })
        }
      } else if (e.detail.source == 'touch') {
        this.setData({
          currentCardOption: 0
        })
      }
    }
  }
})