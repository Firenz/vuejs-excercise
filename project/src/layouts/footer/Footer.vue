<template>
  <footer :class="$style.footer">
    Developed with Vue by
    <a href="mailto:alicia.guardenoalbertos@gmail.com">Alicia G.</a>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FooterSection"
});
</script>

<style module>
.footer {
  text-align: center;
  font-size: 1.2rem;
  background-color: aquamarine;
  color: white;
  padding: 1rem;
}

.footer > a {
  text-decoration: none;
  color:blanchedalmond;
}
</style>
