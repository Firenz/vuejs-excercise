<template>
  <div>
    <input
      type="text"
      placeholder="lemoncode"
      :value="currentSearchTerm"
      v-debounce="onUpdateSearchTerm"
    />
  </div>
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

<style scoped>
</style>
