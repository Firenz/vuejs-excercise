<template>
  <member-details-page :member="member" :onBackToSearch="onBackToSearch"/>
</template>

<script lang="ts">
import Vue from "vue";
import { router } from "../../router";
import { getUser } from "../../api/memberAPI";
import { Member, createDefaultMember } from "../../model/member";
import MemberDetailsPage from "./MemberDetailsPage.vue";
export default Vue.extend({
  name: "MemberDetailsPageContainer",
  components: { MemberDetailsPage },
  props: { id: String },
  data() {
    return {
      member: createDefaultMember()
    };
  },
  beforeMount() {
    const login = String(this.id || "");
    getUser(login)
      .then(member => {
        this.member = member;
      })
      .catch(error => console.log(error));
  },
  methods: {
    onBackToSearch() {
      this.$router.back();
    }
  }
});
</script>

<style module>
</style>
