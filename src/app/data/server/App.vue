<template>
  <div class="container-fluid">
    <div class="row">
      <div class="d-flex col" style="max-width: 20rem">
        <div
          class="flex-fill w-100 card"
          style="overflow-y: scroll; height: calc(100vh - 3rem)"
        >
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>

            <h5 class="mb-0 card-title">数据源管理</h5>
          </div>
          <div class="card-body py-0">
            <input type="text" class="form-control mb-3" placeholder="搜索" />
            <!--组织结构-->
            <div class="list-group">
              <a
                class="list-group-item list-group-item-action"
                v-for="(item, index) in serverlist"
                :key="index"
                @click="checkserver(item)"
              >
                <i class="fa fa-database mr-1" aria-hidden="true"></i>
                <span v-text="item.name"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill w-100 card">
          <div class="card-header border-bottom mb-3">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">新增</h5>
          </div>
          <div class="card-body py-0">
            <form
              class="form-horizontal"
              style="max-width: 30rem; margin: 0 auto"
            >
              <div class="form-group row">
                <label class="col-md-8 col-form-label">数据源名称</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    :value="server.name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">数据库类型</label>
                <div class="col-md-12">
                  <input
                    type="email"
                    class="form-control"
                    :value="server.type"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">数据库地址</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    :value="server.hostname"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">数据库端口</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    :value="server.hostport"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">数据库用户名</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    :value="server.username"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">密码</label>
                <div class="col-md-12">
                  <input
                    type="password"
                    class="form-control"
                    :value="server.password"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">默认库名称</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    :value="server.database"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-8 col-form-label">数据库编码格式式</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    :value="server.charset"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class style="margin: 1rem auto">
                  <button type="submit" class="btn btn-info">保存设置</button>
                  <button type="submit" class="btn btn-primary">
                    测试链接
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const serverData = reactive({
      serverlist: {},
      server: {},
      checkserver(server) {
        this.server = server;
      },
    });

    yunxi.base.http({
      url: "/data/server/list",
      data: { token: yunxi.base.token },
      success: (result) => {
        if (result.errcode === 0) {
          serverData.serverlist = result.data;
        }
      },
    });
    return serverData;
  },
};
</script>
<style lang="scss">
.tree {
  .nav-link {
    //display: inline-block;
    .fa {
      margin-right: 0.25rem;
      width: 1.25em;
      text-align: center;
    }
  }
  .has-child {
    &:before {
      border-width: 0.1rem 0.1rem 0 0;
      //top: 1.125rem;
      // left: 0;
      //right: 0;
    }

    &.active:before {
      transform: rotate(135deg);
      top: 1.125rem;
    }
  }
}
.table th,
.table td {
  vertical-align: middle;
}
.avatar {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 0;
  text-align: center;
  font-size: 0.75rem;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  overflow: hidden;
  span {
    width: 1.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}
</style>
