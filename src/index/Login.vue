<template>
  <div class="top" style="height: 5rem"></div>
  <div
    class="container-fluid"
    style="
      height: calc(100vh - 10rem);
      background: url(/assets/img/app/login.jpg) center center;
      background-size: cover;
    "
  >
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <div
          class="rounded"
          style="
            width: 18rem;
            text-align: center;
            margin: 4rem auto;
            background: #fff;
          "
        >
          <ul class="nav nav-tabs nav-justified font-weight-bold">
            <li class="nav-item">
              <a class="nav-link active">账号登陆</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">扫码登陆</a>
            </li>
          </ul>
          <div class="tab-content m-3">
            <div class="tab-pane fade show active">
              <form class="container" @submit.prevent="login">
                <div class="form-group">
                  <input
                    type="mobile"
                    v-model.trim="loginData.username"
                    class="form-control"
                    placeholder="输入手机号"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    autocomplete="off"
                    v-model="loginData.password"
                    class="form-control"
                    placeholder="输入登陆密码"
                    required
                  />
                  <small v-if="errmsg" class="form-text text-danger">
                    {{ errmsg }}
                    <a href="forgot.html">忘记密码</a>
                  </small>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block" type="submit">
                    登陆
                  </button>
                </div>
                <div class="form-group">
                  <a href="forgot.html">忘记密码</a>
                </div>
              </form>
            </div>
            <div class="tab-pane fade">
              <div id="scanlogin">功能开发中</div>
            </div>
          </div>
          <div class="btn-group mb-3">
            <a class="mr-2">
              <img
                class="rounded-circle"
                src="/assets/img/brand/dingding.png"
                style="width: 2rem; height: 2rem"
              />
            </a>
            <a>
              <img
                class="rounded-circle"
                src="/assets/img/brand/weixin.png"
                style="width: 2rem; height: 2rem"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="main-footer mt-4">
    <div class="text-center mt-2">
      <a href="http://yunxioa.com/">网站导航</a>|
      <a href="http://yunxioa.com/">客户案例</a>|
      <a href="http://yunxioa.com/">设计与咨询</a>|
      <a href="http://yunxioa.com/">关于云僖</a>|
      <a href="http://yunxioa.com/">联系我们</a>
    </div>
    <div class="text-center mt-2">
      Copyright ©2019
      <a href="http://yunxioa.com/">云僖网络</a> 版权所有
    </div>
  </footer>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup(props, { attrs, slots, emit }) {
    // Attribute (非响应式对象)
    console.log("// Attribute (非响应式对象)", attrs);

    // 插槽 (非响应式对象)
    console.log("// 插槽 (非响应式对象)", slots);

    // 触发事件 (方法)
    console.log("// 触发事件 (方法)", emit);
   // emit()
    const errmsg = ref("");
    const loginData = reactive({
      username: "",
      password: "",
    });
    return {
      errmsg,
      loginData,
    };
  },
  methods: {
    login() {
      console.log(this.loginData);
      yunxi.base.http({
        url: "/auth/login/gettoken",
        data: this.loginData,
        type: "POST",
        success: (res) => {
          if (res.errcode === 0) {
            console.log(res.data);
            yunxi.base.token = res.data.token;
            this.$router.push("home");
          } else {
            this.errmsg = res.msg;
            console.error(res);
          }
        },
      });
    },
  },
};
</script>

