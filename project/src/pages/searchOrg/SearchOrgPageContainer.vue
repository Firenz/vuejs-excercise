<template>
  <search-org-page
    :search-term="searchTerm"
    :on-update-search-term="onUpdateSearchTerm"
    :members="members"
  />
</template>

<script lang="ts">
import Vue from "vue";
import SearchOrgPage from "./SearchOrgPage.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "SearchOrgPageContainer",
  components: { SearchOrgPage },
  data: () => {
    return {
      searchTerm: "" as string,
      members: [] as Member[]
    };
  },
  methods: {
    onUpdateSearchTerm(newSearchTerm: string) {
      this.searchTerm = newSearchTerm;
      getAllMembers(this.searchTerm).then(members => {
        this.members = members;
      });
    }
  }
});
</script>

<style scoped>
</style>
