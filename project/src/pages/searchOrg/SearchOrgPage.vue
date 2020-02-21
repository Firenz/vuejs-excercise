<template>
  <div :class="$style.body">
    <header-section />
    <main :class="$style.main">
      <search-bar :search-term="searchTerm" :on-update-search-term="onUpdateSearchTerm" />
      <member-table :members="members" :is-loading="isLoading"/>
    </main>
    <footer-section />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { HeaderSection } from "../../layouts/header";
import { FooterSection } from "../../layouts/footer";
import { SearchBar } from "./searchBar";
import { MemberTable } from "./memberTable";
import { SearchOrhProps } from "./searchOrgProps";

export default Vue.extend({
  name: "SearchOrgPage",
  components: { HeaderSection, FooterSection, MemberTable, SearchBar },
  props: {
    searchTerm: {},
    isLoading: {},
    members: {},
    onUpdateSearchTerm: {}
  } as SearchOrhProps
});
</script>

<style module>
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
