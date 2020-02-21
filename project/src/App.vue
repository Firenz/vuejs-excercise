<template>
  <v-app>
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>
