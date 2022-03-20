<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner></Banner>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          路由-->
          <router-link class="list-group-item" active-class="active" :to="{name:'about'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
<!--            展示-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import About from "@/pages/About";
import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {
    Banner,
    About
  }
}
</script>