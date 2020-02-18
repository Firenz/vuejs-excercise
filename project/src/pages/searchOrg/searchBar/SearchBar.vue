<template>
  <v-layout row justify-center :class="$style.searchBar">
    <v-flex xs4>
      <v-text-field
        type="text"
        placeholder="lemoncode"
        :value="currentSearchTerm"
        v-debounce="onUpdateSearchTerm"
        label="Organization name"
        aria-label="Organization search"
        append-icon="search"

      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { debounce } from "vue-debounce";

export default Vue.extend({
  name: "SearchBar",
  props: {
    searchTerm: String,
    onUpdateSearchTerm: {} as PropOptions<(newSearchTerm: string) => void>
  },
  data: () => {
    return {
      currentSearchTerm: ""
    };
  }
});
</script>

<style module>
.searchBar {
  margin-bottom: 2.2rem;
}
</style>
