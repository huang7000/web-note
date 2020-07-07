import Vue from "vue";
import Router from "vue-router";
import { routes } from "./setting";

Vue.use(Router);
routes.push({
  path: "",
  name: "复习"
});
routes.push({
  path: "@/views/plan.vue",
  name: "plan",
  component: () => import("@/views/plan.vue")
});
let children = [];
routes.forEach(item => {
  if (!item.path) return;
  let url = item.path.replace(/@/, "").replace(/.(md|vue)$/, "");
  children.push({
    path: url,
    name: item.name,
    component: () => import(`.${item.path.replace(/@/, "")}`)
  });
});

let firstRoute = {
  path: "/",
  name: "notes",
  component: children[0].component
};
export default new Router({
  mode: process.argv.includes("--gh-pages") ? "hash" : "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [firstRoute, ...children]
});
