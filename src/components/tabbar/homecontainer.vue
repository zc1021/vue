<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in lunbo" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
  
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbo: []
    };
  },
  created() {
    this.getLunbon();
  },
  methods: {
    getLunbon() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          // console.log(result);
          this.lunbo = result.data.message;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9{
    border: none;
    background-color: #fff;
    .mui-table-view-cell{
        border: none;
        background-color: #fff;
        img{
            width: 50px;
            height: 50px;
        }
        .mui-media-body{
            font-size: 12px;
        }
    }
}
</style>
