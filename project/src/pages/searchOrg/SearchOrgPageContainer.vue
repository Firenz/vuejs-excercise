<template>
  <search-org-page
    :search-term="searchTerm"
    :is-loading="isLoading"
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
      isLoading: false as boolean,
      members: [] as Member[]
    };
  },
  methods: {
    onUpdateSearchTerm(newSearchTerm: string) {
      this.searchTerm = newSearchTerm;
      this.isLoading = true;
      getAllMembers(this.searchTerm)
        .then(members => {
          this.members = members;
          this.isLoading = false;
        })
        .catch(() => {
          this.members = [];
          this.isLoading = false;
        });
    }
  }
});
</script>

<style scoped>
</style>
