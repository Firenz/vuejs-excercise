<template>
  <div>
    <header-section/>
    <main>
      <search-bar :search-term="searchTerm" :on-update-search-term="onUpdateSearchTerm" />
      <member-table :members="members" />
    </main>
    <footer-section/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { HeaderSection } from "../../layouts/header";
import { FooterSection } from "../../layouts/footer";
import { SearchBar } from "./searchBar";
import { MemberTable } from "./memberTable";
import { SearchOrhProps} from './searchOrgProps';

export default Vue.extend({
  name: "SearchOrgPage",
  components: { HeaderSection, FooterSection, MemberTable, SearchBar },
  props: {
    searchTerm: {},
    members: {},
    onUpdateSearchTerm: {}
  } as SearchOrhProps
});
</script>

<style module>

</style>
