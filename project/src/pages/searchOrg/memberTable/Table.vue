<template>
  <v-card :class="$style.cardTable">
    <v-card-text>
      <v-layout row justify-center>
        <v-card-title>
          <h1>Organization members</h1>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-flex xs3>
          <v-text-field
            v-model="filterTerm"
            placeholder="Filter by username..."
            label="Filter members"
            aria-label="Username filter"
            append-icon="filter_list"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-layout column align-center>
      <v-data-table
        :headers="headers"
        :items="members"
        :search="filterTerm"
        :pagination.sync="pagination"
        hide-actions
        class="elevation-1"
        :class="$style.table"
      >
        <template slot="items" slot-scope="props">
          <member-row :key="props.item.id" :member="props.item" />
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">Sorry, nothing to display here :(</v-alert>
        </template>
      </v-data-table>
      <div v-if="pages > 0" class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import MemberRow from "./Row.vue";
import { Member } from "../../../model/member";
import { getAllMembers } from "../../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberRow },
  props: {
    members: {} as PropOptions<Member[]>
  },
  data: () => {
    return {
      filterTerm: "",
      pagination: {
        rowsPerPage: 3,
        page: 1,
        totalVisible: 4
      },
      headers: [
        {
          text: "Avatar",
          align: "center",
          sortable: false
        },
        { text: "Id", align: "center", value: "id" },
        { text: "Username", align: "center", value: "login" }
      ]
    };
  },
  computed: {
    filteredMembers() {
      return this.members.filter(member => {
        return (
          member.login.toLowerCase().indexOf(this.filterTerm.toLowerCase()) > -1
        );
      });
    },
    pages() {
      const rowsPerPage = this.pagination.rowsPerPage;
      const members = this.members;
      return rowsPerPage ? Math.ceil(members.length / rowsPerPage) : 0;
    }
  }
});
</script>

<style module>
.cardTable {
  margin: 2rem;
  height: 48rem;
}

.table {
  width: 80%;
  margin-bottom: 0.5rem;
}
</style>
