 <template>
  <div class="app-body">
    <!-- .app-nav-card -->
    <div class="nav-scroller">
      <a class="nav-link">
        <i class="fa fa-angle-left"></i>
      </a>
      <div class="nav col">
        <div class="nav-underline" style="transform: translateX(0)">
          <a
            class="nav-link"
            @click="showit(-1)"
            :class="{ active: -1 === show }"
          >
            <i class="fa fa-refresh"></i>
            <span>工作台</span>
          </a>
          <a
            class="nav-link"
            v-for="(item, index) in list"
            :key="item.link"
            :class="{ active: index === show }"
            @click="showit(index)"
          >
            <i class="fa fa-refresh"></i>
            <span v-text="item.name"></span>
            <i class="fa fa-close" @click.stop="remove(index)"></i>
          </a>
        </div>
      </div>
      <a class="nav-link">
        <i class="fa fa-angle-right"></i>
      </a>
      <a class="nav-link disabled">
        <i class="fa fa-angle-down"></i>
      </a>
    </div>
    <!-- .app-nav-card -->
    <!-- .app-iframe -->
    <div class="embed-responsive">
      <iframe v-show="-1 === show" src="app/desktop"></iframe>
      <iframe
        v-for="(item, index) in list"
        v-show="index === show"
        :key="item.link"
        :src="item.link"
      ></iframe>
    </div>
    <!-- .app-iframe -->
  </div>
</template>
<script>
import { toRefs } from "vue";
export default {
  props: {
    data: {
      show: -1,
      list: [],
    },
  },
  setup(props) {
    const { list, show } = toRefs(props.data);
    const showit = (index) => {
      props.data.show = index;
    };
    const remove = (index) => {
      props.data.list.splice(index, 1);
      const len = props.data.list.length;
      if (len <= props.data.show || len == 0) props.data.show = len - 1;
    };
    return {
      list,
      show,
      showit,
      remove,
    };
  },
};
</script>

