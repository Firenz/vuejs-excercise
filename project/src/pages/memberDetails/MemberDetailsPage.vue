<template>
  <div :class="$style.body">
    <header-section />
    <main :class="$style.main">
      <v-card :class="$style.cardMember">
        <v-card-title :class="$style.cardMemberHeader">
          <v-avatar :size="120" color="grey lighten-4">
            <img :src="member.avatar_url" />
          </v-avatar>
          <h1>{{member.login}}</h1>
          <div :class="$style.subHeader">
            <div :class="$style.rrss">
              <a
                v-show="member.html_url"
                :href="member.html_url"
                target="_blank"
                alt="GitHub profile"
              >
                <v-btn fab dark color="teal">
                  <v-icon large>public</v-icon>
                </v-btn>
              </a>
              <a
                v-show="member.blog"
                :href="`https://${member.blog}`"
                target="_blank"
                alt="Website"
              >
                <v-btn fab dark color="indigo">
                  <v-icon large>link</v-icon>
                </v-btn>
              </a>
              <a v-show="member.email" :href="`mailto:${member.email}`" target="_blank" alt="Email">
                <v-btn fab dark color="pink">
                  <v-icon large>mail</v-icon>
                </v-btn>
              </a>
            </div>
            <h2>{{member.name}}</h2>
            <div :class="$style.location">
              <p>{{member.location}}</p>
              <v-icon>place</v-icon>
            </div>
          </div>
        </v-card-title>
        <v-divider />
        <v-card-text :class="$style.cardMemberBody">
          <div :class="$style.gitHubInfo">
            <div :class="$style.slot">
              <h3>Repositories</h3>
              <v-avatar color="cyan">
                <span class="white--text headline">{{member.public_repos}}</span>
              </v-avatar>
            </div>
            <div :class="$style.slot">
              <h3>Following</h3>
              <v-avatar color="cyan">
                <span class="white--text headline">{{member.following}}</span>
              </v-avatar>
            </div>
            <div :class="$style.slot">
              <h3>Followers</h3>
              <v-avatar color="cyan">
                <span class="white--text headline">{{member.followers}}</span>
              </v-avatar>
            </div>
          </div>
          <p :class="$style.bio">{{member.bio || "This member has no bio information."}}</p>
        </v-card-text>
        <v-divider />
        <v-card-actions :class="$style.cardMemberFooter">
          <v-btn flat @click="onBackToSearch">Back to search</v-btn>
        </v-card-actions>
      </v-card>
    </main>
    <footer-section />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";
import { HeaderSection } from "../../layouts/header";
import { FooterSection } from "../../layouts/footer";

export default Vue.extend({
  name: "MemberDetailsPage",
  components: { HeaderSection, FooterSection },
  props: {
    member: {} as PropOptions<Member>,
    onBackToSearch: {} as PropOptions<() => void>
  }
});
</script>

<style module>
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main > .cardMember {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 0 auto;
  max-width: 60rem;
  width: 90%;
}

.cardMember .cardMemberHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
}

.cardMemberHeader > div:first-child {
  margin: 1.5rem 0;
}

.cardMemberHeader h1 {
  font-size: 3rem;
}

.cardMemberHeader .subHeader {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: -3rem 2rem 0 0;
}

.cardMemberHeader .subHeader .rrss {
  margin-left: 1.5rem;
}

.cardMemberHeader .subHeader .rrss a {
  text-decoration: none;
}

.cardMemberHeader .subHeader h2 {
  opacity: 0.5;
}

.cardMemberHeader .subHeader .location {
  margin-right: 1.5rem;
}

.cardMemberHeader .subHeader .location p {
  display: inline;
  padding-bottom: 0.2rem;
  opacity: 0.7;
}

.cardMemberBody {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.cardMemberBody .gitHubInfo {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: space-evenly;
}

.cardMemberBody .gitHubInfo .slot {
  text-align: center;
  opacity: 0.7;
}

.cardMemberBody .bio {
  height: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
  margin: 2rem 0;
}

main .cardMemberFooter {
  padding: 0;
}

.cardMemberFooter > button {
  width: 100%;
}
</style>
