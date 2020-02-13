<template>
  <div>
    <h2>Member Page</h2>
    <input v-model="filterTerm" placeholder="lemoncode" />
    <table :class="$style.table">
      <thead>
        <member-head />
      </thead>
      <tbody>
        <template v-for="member in filteredMembers">
          <member-row :key="member.id" :member="member" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../../model/member";
import { getAllMembers } from "../../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  props: {
    members: {} as PropOptions<Member[]>
  },
  data: () => {
    return {
      filterTerm: ""
    };
  },
  computed: {
    filteredMembers() {
      return this.members.filter(member => {
        return (
          member.login.toLowerCase().indexOf(this.filterTerm.toLowerCase()) > -1
        );
      });
    }
  }
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
