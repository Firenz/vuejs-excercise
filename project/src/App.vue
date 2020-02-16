<template>
  <v-app>
    <search-org-page />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { SearchOrgPage } from "./pages/searchOrg";

export default Vue.extend({
  name: "App",
  components: { SearchOrgPage }
});
</script>
