<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
      </ul>
<!--      路由缓存,可以保证include的组件不被销毁，include="组件名"，多个组件写数组-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>