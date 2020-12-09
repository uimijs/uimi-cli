<template>
  <div class="navbar-brand">
    <img src="/logo.png" height="36" />
    <span class="font-weight-bold" v-text="corpname"></span>
  </div>
</template>
<script>
export default {
  props: {
    corpname: "",
  },
  inheritAttrs: false,
};
</script>
