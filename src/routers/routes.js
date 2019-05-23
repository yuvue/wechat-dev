export default [
  {
    path: "/chat/:id",
    component: () => import("v/chat/_id/Index"),
    meta: {},
    name: "chatId"
  },
  {
    path: "/contact",
    component: () => import("v/contact/Index"),
    meta: {},
    name: "contact"
  },
  {
    path: "/contact/add",
    component: () => import("v/contact/Add"),
    meta: {},
    name: "contactAdd"
  },
  {
    path: "/contact/friend",
    component: () => import("v/contact/Friend"),
    meta: {},
    name: "contactFriend"
  },
  {
    path: "/contact/search",
    component: () => import("v/contact/search/Index"),
    meta: {},
    name: "contactSearch"
  },
  {
    path: "/contact/search/verify",
    component: () => import("v/contact/search/Verify"),
    meta: {},
    name: "contactSearchVerify"
  },
  {
    path: "/contact/:id/config",
    component: () => import("v/contact/_id/Config"),
    meta: {},
    name: "contactIdConfig"
  },
  {
    path: "/contact/:id",
    component: () => import("v/contact/_id/Index"),
    meta: {},
    name: "contactId"
  },
  {
    path: "/contact/:id/remark",
    component: () => import("v/contact/_id/Remark"),
    meta: {},
    name: "contactIdRemark"
  },
  {
    path: "/",
    component: () => import("v/Index"),
    meta: {},
    name: "index"
  },
  {
    path: "/login",
    component: () => import("v/Login"),
    meta: {},
    name: "login"
  },
  {
    path: "/me/edit",
    component: () => import("v/me/Edit"),
    meta: {},
    name: "meEdit"
  },
  {
    path: "/me",
    component: () => import("v/me/Index"),
    meta: {},
    name: "me"
  },
  {
    path: "/moment",
    component: () => import("v/Moment"),
    meta: {},
    name: "moment"
  },
  {
    path: "/register",
    component: () => import("v/Register"),
    meta: {},
    name: "register"
  },
  {
    path: "/group",
    component: () => import("v/group/Index"),
    meta: {},
    name: "group"
  },
  {
    path: "/group/add",
    component: () => import("v/group/Add"),
    name: "groupAdd"
  },
  {
    path: "/error",
    component: () => import("v/Error"),
    meta: {},
    name: "error",
    alias: "*"
  }
];
