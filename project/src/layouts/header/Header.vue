<template>
  <header :class="$style.header">
    <img src="../../img/logo_1.png" :class="$style.image" />
    <h1 :class="$style.title">GitHub Organization Searcher</h1>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderSection"
});
</script>

<style module>
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  background-color:#0097ac;
  color: #e9fdfb;
  padding: 1rem;
}
.image {
  height: 5rem;
}
.title {
  font-size: 3rem;
  flex: 1 1 auto;
}
</style>
