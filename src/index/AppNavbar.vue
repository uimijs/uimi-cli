<template>
  <nav class="navbar navbar-expand navbar-light">
    <ul class="nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" @click="showMinMenu">
          <i class="fa fa-dedent"></i>
        </a>
      </li>
    </ul>
    <ul class="nav">
      <!-- .app-bar-menu -->
      <li class="nav-item">
        <ui-dropdown>
          <a class="nav-link">
            <i class="fa fa-envelope"></i>
          </a>
          <span class="badge badge-pill badge-danger">99+</span>
          <ui-dropdown-menu>
            <a class="dropdown-item">测试</a>
            <a class="dropdown-item">测试</a>
            <a class="dropdown-item">测试</a>
          </ui-dropdown-menu>
        </ui-dropdown>
      </li>
      <li class="nav-item">
        <ui-dropdown>
          <a class="nav-link">
            <i class="fa fa-bell"></i>
          </a>
          <span class="badge badge-pill badge-danger">99+</span>
          <ui-dropdown-menu class="dropdown-menu-right">
            <a class="dropdown-item">测试</a>
            <a class="dropdown-item">测试</a>
            <a class="dropdown-item">测试</a>
          </ui-dropdown-menu>
        </ui-dropdown>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-cog"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-arrows-alt"></i>
        </a>
      </li>
    </ul>
    <!-- .app-bar-info -->
    <div
      class="d-flex border-left border-right p-3 mx-3"
      style="min-width: 11rem"
    >
      <ui-avatar
        :src="info.avatar"
        :name="info.name"
        :size="'2.25rem'"
      ></ui-avatar>
      <div class="align-self-center col" style="line-height: 1.125">
        <span class="d-block" v-text="info.name"></span>
        <span class="text-black-50 small" v-text="position"></span>
      </div>
    </div>
  </nav>
</template>
<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    showMinMenu: Function,
    info: {
      avatar: "",
      name: "",
      corpname: "",
      position: "",
      department: {},
    },
  },
  inheritAttrs: false,
  setup(props) {
    const position = computed(() => {
      const { position, department } = props.info;
      const job = position ? "-" + position : "";
      if (!department) return job;
      const dep = department[Object.keys(department)[0]];
      return dep + job;
    });
    return {
      position,
    };
  },
};
</script>
