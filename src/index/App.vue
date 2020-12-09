<template>
  <div class="d-flex">
    <!--left-menu-->
    <nav class="sidebar" :class="{ 'sidebar-min': minMenu }">
      <app-brand v-bind="userInfo"></app-brand>
      <div class="sidebar-content">
        <ui-tree :data="appMenu" :clickMenu="clickMenu"></ui-tree>
      </div>
    </nav>
    <!--left-menu end-->
    <!--content-->
    <div class="app-content">
      <!--top-->
      <app-navbar :info="userInfo" :showMinMenu="showMinMenu"></app-navbar>
      <!--top end-->
      <app-frame :data="frameItem"></app-frame>
    </div>
    <!--content end-->
  </div>
</template>
<script>
import AppBrand from "./AppBrand.vue";
import AppNavbar from "./AppNavbar.vue";
import AppFrame from "./AppFrame.vue";
import { nextTick, reactive, ref } from "vue";
export default {
  components: {
    AppBrand,
    AppNavbar,
    AppFrame,
  },
  setup() {
    const userInfo = ref({});
    yunxi.base.http({
      url: "/main/user",
      data: { token: yunxi.base.token },
      success: (res) => {
        if (res.errcode === 0) {
          yunxi.cache.cookie.setItem("username", res.data.name);
          userInfo.value = res.data;
          console.log("username储存", userInfo);
        }
      },
    });
    console.log(userInfo);
    const appMenu = ref({});
    yunxi.base.http({
      url: "/main/menu",
      data: { token: yunxi.base.token },
      success: (result) => {
        if (result.errcode === 0) {
          const { data } = result;
          const menu = {};
          const menu_length = data.length;
          for (let i = 0; i < menu_length; i++) {
            const pid = data[i].pid;
            if (!menu.hasOwnProperty(pid)) menu[pid] = [];
            menu[pid].push(data[i]);
          }
          appMenu.value = menu;
        }
      },
    });
    const minMenu = ref(false);
    const showMinMenu = () => {
      minMenu = !minMenu;
      //console.log("左菜单转换");
    };
    const frameItem = reactive({
      show: -1,
      list: [],
    });
    const clickMenu = (menu) => {
      //console.log("点击了", menu);
      var index = frameItem.list.indexOf(menu);
      if (!menu.link) return;
      if (index < 0) {
        frameItem.list.push(menu);
        index = frameItem.list.length - 1;
      }
      frameItem.show = index;
    };
    nextTick(() => {
      //添加滚动条
      const ps = new PerfectScrollbar(".sidebar-content", {
        suppressScrollX: true,
      });
    });
    return {
      userInfo,
      appMenu,
      minMenu,
      showMinMenu,
      frameItem,
      clickMenu,
    };
  },
};
</script>

