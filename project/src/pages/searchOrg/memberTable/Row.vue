<template>
  <tr :class="$style.row">
    <td :class="$style.columnAvatar">
      <v-avatar :tile="circle" :size="avatarSize" color="grey lighten-4">
        <img :src="member.avatar_url" />
      </v-avatar>
    </td>
    <td :class="$style.column">
      <span>{{member.id}}</span>
    </td>
    <td :class="$style.column">
      <span>{{member.login}}</span>
    </td>
  </tr>
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
  } as Props,
  data: () => {
    return {
      avatarSize: 75
    };
  }
});
</script>

<style module>
.row {
  padding-bottom: 1rem;
}

.columnAvatar {
  width: 2rem;
  padding: 1rem;
}

.column {
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}
</style>
