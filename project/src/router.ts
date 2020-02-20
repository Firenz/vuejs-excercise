import Router, { RouteConfig } from "vue-router";
import { SearchOrgPageContainer } from "./pages/searchOrg";
import { MemberDetailsPageContainer } from "./pages/memberDetails";

const routes: RouteConfig[] = [
  { path: "/", component: SearchOrgPageContainer },
  { path: "/member/:id", component: MemberDetailsPageContainer, props: true }
];

export const router = new Router({
  routes
});
