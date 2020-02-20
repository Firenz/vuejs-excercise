<template>
  <v-text-field
    type="text"
    placeholder="lemoncode"
    :value="currentSearchTerm"
    v-debounce="onUpdateSearchTerm"
    label="Organization name"
    aria-label="Organization search"
    append-icon="search"
    :class="$style.searchBar"
  />
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
main .searchBar {
  margin: 2.2rem;
  flex: 0;
  justify-self: flex-start;
}
</style>
