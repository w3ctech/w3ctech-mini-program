<template>
  <div class="container">
    <div class="card-container">
      <Card v-for="item in lists" :key="item.id" :list="item"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@src/components/Card'

export default {
  data () {
    return {
      userInfo: {},
      lists: []
    }
  },
  components: {
    Card
  },
  onShareAppMessage () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onPullDownRefresh () {},
  onReachBottom () {},
  methods: {
    getUserInfo () {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  },
  mounted () {},
  onLoad () {
    wx.showLoading({title: '加载中'})
  }
}
</script>

<style lang="scss">
$white: #fff;
$bg-color: #F1F1F1;
$text-main: #262a2f;
$button-primary: #67c23a;

.item-box{
  padding: 0 10px;
  color: $text-main;
  background: $bg-color;
}
</style>
