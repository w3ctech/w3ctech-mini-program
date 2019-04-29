<script>
export default {
  onShareAppMessage () {
    return {
      title: 'w3ctech',
      path: 'pages/index/main'
    }
  }
}
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-sizing: border-box;
}
</style>
