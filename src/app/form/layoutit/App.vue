<template>
  <div class="edit">
    <header>
      <div>单据设置页面测试</div>
    </header>

    <div class="d-flex">
      <!--left-->
      <left-menu></left-menu>

      <div class="center col scrollbar">
        <div class="page"></div>
      </div>
      <div class="right scrollbar">
        <div class="form-group mt-2">
          <div
            class="input-group input-group-sm"
            data-toggle="collapse"
            data-target="#tree"
          >
            <input
              type="text"
              class="form-control"
              id="sub_items"
              child_data
              readonly
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "./LeftMenu.vue";

export default {
  components: { LeftMenu },
};
</script>
