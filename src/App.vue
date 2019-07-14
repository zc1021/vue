<template>
  <div class="Appcontainer">
    <!-- header头部 -->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 组件部分 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/discover">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/my">
        <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Appcontainer {
  padding-top: 40px;
  overflow-X: hidden;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%)
}
.v-leave-to{
     opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active{
    transition: all .5s ease
}
</style>
