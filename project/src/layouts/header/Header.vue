<template>
  <header>
    <img src="../../img/logo_1.png" :class="$style.image"/>
    <h1>GitHub Organization Searcher by Vue</h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderSection'
})
</script>

<style module>
  .image {
    height: 5rem;
  }
</style>
