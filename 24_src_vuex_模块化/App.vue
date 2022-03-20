<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from "@/components/Count";

export default {
  name: 'App',
  components: {
    Count
  }
}
</script>

<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

button{
  margin-left: 5px;
}
</style>