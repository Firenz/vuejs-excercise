<template>
  <footer :class="$style.footer">
    Developed with Vue + Vuetify by
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
  background-color: #0097ac;
  color: #e9fdfb;
  padding: 1rem;
}

.footer > a {
  text-decoration: none;
  color:#f9f871;
}
</style>
