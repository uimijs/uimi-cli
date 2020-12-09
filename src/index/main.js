import login from "./Login.vue";
import App from "./App.vue";
import "./style.scss"
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/home', component: App }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp({ template: '<router-view></router-view>' })
  .use(meui)
  .use(router)
  .mount('#app')

if (yunxi.base.token) {
  router.push("home")
} else {
  //判断是否是钉钉登录，如果是则直接获取token
  const dingding_id = yunxi.util.url.getQueryStringByName("dingding_id")
  //console.log(window.location.href)
  if (dingding_id) {
    // console.log(dingding_id);
    dd.ready(function () {
      dd.runtime.permission.requestAuthCode({
        corpId: dingding_id,
        onSuccess: function (result) {
          yunxi.base.http({
            url: "/auth/login/gettokenbycode",
            data: {
              dingding_id: dingding_id,
              code: result.code
            },
            success: function (res) {
              if (res.errcode === 0) {
                // console.log(res.data);
                yunxi.base.token = res.data.token
                router.push("home")
              }
            }
          });
        },
        onFail: function (error) {
          console.log(JSON.stringify(error));
        }
      });
    });
    dd.error(function (error) {
      console.log(JSON.stringify(error));
    });
  } else {
    router.push("login")
  }
}
