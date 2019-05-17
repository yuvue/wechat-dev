export default [
  {
    path: "/",
    name: "chat",
    component: () => import("../views/chat")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact")
  },
  {
    path: "/moment",
    name: "moment",
    component: () => import("../views/moment")
  },
  {
    path: "/me",
    name: "me",
    component: () => import("../views/me")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register")
  },

  {
    path: "/me/edit",
    name: "me-edit",
    component: () => import("../views/me/Edit")
  }
];
