<template>
  <div>
    <input placeholder="lemoncode" v-model="currentSearchTerm" />
    <button @click.prevent="onUpdateSearchTerm(currentSearchTerm)">Search</button>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "SearchBar",
  props: {
    searchTerm: String,
    onUpdateSearchTerm: {} as PropOptions<(newSearchTerm: string) => void>
  },
  beforeMount() {
    this.currentSearchTerm = this.searchTerm || "";
  },
  data: () => {
    return {
      currentSearchTerm: ""
    };
  },
  methods: {
    debounceOnUpdateSearchTerm(newSearchTerm: string) {}
  }
});
</script>
