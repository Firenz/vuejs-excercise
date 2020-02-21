<template>
  <v-card :class="$style.cardTable">
    <v-card-text>
      <v-layout row :class="$style.filterMembers">
        <v-card-title>
          <h1>Organization members</h1>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="filterTerm"
          placeholder="Filter by id or username..."
          label="Filter members"
          aria-label="Username filter"
          append-icon="filter_list"
          :class="$style.filterSearch"
        />
      </v-layout>
    </v-card-text>
    <v-layout :class="$style.tableLayout">
      <v-data-table
        :headers="headers"
        :items="members"
        :search="filterTerm"
        :loading="isLoading"
        :pagination.sync="pagination"
        hide-actions
        class="elevation-1"
        :class="$style.table"
      >
        <template slot="items" slot-scope="props">
          <member-row :key="props.item.id" :member="props.item" />
        </template>
        <template slot="no-data">
          <v-alert
            :value="true"
            color="error"
            icon="warning"
            :class="$style.alert"
          >Sorry, nothing to display here :(</v-alert>
        </template>
      </v-data-table>
    </v-layout>
    <v-pagination
      v-if="filteredMembers.length > pagination.rowsPerPage"
      v-model="pagination.page"
      :length="pages"
      :class="$style.pagination"
    />
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
    isLoading: false as PropOptions<boolean>,
    members: {} as PropOptions<Member[]>
  },
  data: () => {
    return {
      filterTerm: "",
      pagination: {
        rowsPerPage: 4,
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
    filteredMembers(): Member[] {
      return this.members.filter(member => {
        return (
          member.login.toLowerCase().indexOf(this.filterTerm.toLowerCase()) > -1
        );
      });
    },
    pages(): number {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.filteredMembers.length / this.pagination.rowsPerPage)
        : 0;
    }
  }
});
</script>

<style module>
.filterSearch {
  margin-right: 1rem;
}

main .cardTable {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 1rem 3rem;
  padding-bottom: 1rem;
  max-width: 60rem;
  width: 90%;
  height: 45rem;
}

.cardTable .filterMembers {
}

.cardTable .tableLayout {
  flex: 0;
  width: 100%;
  margin-bottom: auto;
}

.table {
  width: 80%;
  margin: 0 auto 0.5rem;
}

thead > tr {
  background-color: #e9fdfb;
}

.alert {
  text-align: center;
  flex-direction: column;
}

.alert > * {
  padding-bottom: 0.4rem;
}

.pagination {
  margin-bottom: 2rem;
}
</style>
