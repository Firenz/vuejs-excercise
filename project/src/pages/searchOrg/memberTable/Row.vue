<template>
  <router-link :class="$style.row" :to="`member/${member.login}`" tag="tr">
    <td :class="$style.columnAvatar">
      <v-avatar :size="60" color="grey lighten-4">
        <img :src="member.avatar_url" />
      </v-avatar>
    </td>
    <td :class="$style.column">
      <span>{{member.id}}</span>
    </td>
    <td :class="$style.column">
      <span>{{member.login}}</span>
    </td>
  </router-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../../model/member";

interface Props {
  member: PropOptions<Member>;
}

export default Vue.extend({
  name: "MemberRow",
  props: {
    member: {}
  } as Props
});
</script>

<style module>
td > * {
  font-size: 1.2rem;
}

.columnAvatar {
  width: 2rem;
  padding: 1rem;
}

.columnAvatar > div {
  margin: 1.3rem;
}

.column {
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}
</style>
