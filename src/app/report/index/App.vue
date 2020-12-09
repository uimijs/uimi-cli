<template>
  <div class="container-fluid">
    <div class="card" v-for="btnGroup in btnData" :key="btnGroup">
      <div class="card-body clearfix">
        <div class="float-left">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-light"
              v-for="btn in btnGroup['left']"
              :key="btn"
              v-text="btn.name"
            ></button>
          </div>
        </div>
        <div class="float-right" v-if="btnGroup['right']">
          <div
            class="btn-group"
            v-if="btnGroup['right'][0]['type'] == 'default'"
          >
            <button type="button" class="btn btn-light">高级查询</button>
          </div>
          <div
            class="input-group"
            v-if="btnGroup['right'][0]['type'] == 'fast'"
          >
            <input type="text" class="form-control" style="min-width: 20rem" />
            <div class="input-group-append">
              <span class="btn input-group-text bg-light">快速查询</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="btn-group">
          <button type="button" class="btn btn-primary">新增</button>
          <button type="button" class="btn btn-success">修改</button>
          <button type="button" class="btn btn-danger">删除</button>
        </div>
      </div>
      <div class="table-responsive">
        <ui-table :data="tableData">
          <tr>
            <th>测试</th>
            <th>CREATOR</th>
            <th>USR_GROUP</th>
            <th>CREATE_DATE</th>
            <th>MODIFIER</th>
            <th>MODI_DATE</th>
            <th>FLAG</th>
            <th>TG001</th>
            <th>TG002</th>
            <th>TG003</th>
            <th>TG004</th>
            <th>TG005</th>
            <th>TG006</th>
            <th>TG007</th>
            <th>TG008</th>
            <th>TG009</th>
            <th>TG010</th>
            <th>TG011</th>
            <th>TG012</th>
            <th>TG013</th>
            <th>TG014</th>
            <th>TG015</th>
            <th>TG016</th>
            <th>TG017</th>
            <th>TG018</th>
            <th>TG019</th>
            <th>TG020</th>
            <th>TG021</th>
            <th>TG022</th>
            <th>TG023</th>
            <th>TG024</th>
            <th>TG025</th>
            <th>TG026</th>
            <th>TG027</th>
            <th>TG028</th>
            <th>TG029</th>
            <th>TG030</th>
            <th>TG031</th>
            <th>TG032</th>
            <th>TG033</th>
            <th>TG034</th>
            <th>TG035</th>
            <th>TG036</th>
            <th>TG037</th>
            <th>TG038</th>
            <th>TG039</th>
            <th>TG040</th>
            <th>TG041</th>
            <th>TG042</th>
            <th>TG043</th>
            <th>TG044</th>
            <th>TG045</th>
            <th>TG046</th>
            <th>TG047</th>
            <th>TG048</th>
            <th>TG049</th>
            <th>TG050</th>
            <th>TG051</th>
            <th>TG052</th>
            <th>TG053</th>
            <th>TG054</th>
            <th>TG055</th>
            <th>TG056</th>
            <th>TG057</th>
            <th>TG058</th>
            <th>TG059</th>
            <th>TG060</th>
            <th>TG061</th>
            <th>TG064</th>
            <th>TG065</th>
            <th>TG066</th>
            <th>TG067</th>
            <th>TG068</th>
            <th>TG069</th>
            <th>TG070</th>
            <th>TG071</th>
            <th>TG072</th>
            <th>TG073</th>
            <th>TG074</th>
            <th>TG075</th>
            <th>UDF01</th>
            <th>UDF02</th>
            <th>UDF03</th>
            <th>UDF04</th>
            <th>UDF05</th>
            <th>UDF06</th>
            <th>UDF51</th>
            <th>UDF52</th>
            <th>UDF53</th>
            <th>UDF54</th>
            <th>UDF55</th>
            <th>UDF56</th>
            <th>UDF07</th>
            <th>UDF08</th>
            <th>UDF09</th>
            <th>UDF10</th>
            <th>UDF11</th>
            <th>UDF12</th>
            <th>UDF57</th>
            <th>UDF58</th>
            <th>UDF59</th>
            <th>UDF60</th>
            <th>UDF61</th>
            <th>UDF62</th>
            <th>ROW_NUMBER</th>
          </tr>
        </ui-table>
      </div>
      <div class="card-footer d-flex">
        <div class="col">
          <span style="vertical-align: middle">显示57项中的1至10项</span>
          <div class="dropdown" style="display: inline-block">
            <button class="btn dropdown-toggle" data-toggle="dropdown">
              20条
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item">20条</a>
              <a class="dropdown-item">30条</a>
              <a class="dropdown-item">40条</a>
              <a class="dropdown-item">50条</a>
            </div>
            <div class="dropdown-mask"></div>
          </div>
        </div>
        <ui-pagination
          :pagerCount="5"
          :currentPage="9"
          :pageCount="100"
        ></ui-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const btnData = ref([
      {
        left: [
          { name: "待指派", sql: "" },
          { name: "已指派" },
          { name: "已接受" },
          { name: "进行中" },
          { name: "异常工单" },
          { name: "未完成工单" },
          { name: "已完成工单" },
        ],
        right: [
          {
            type: "default",
          },
        ],
      },
      {
        left: [
          { name: "全部" },
          { name: "我创建的" },
          { name: "我负责的" },
          { name: "我协同的" },
        ],
        right: [
          {
            type: "fast",
          },
        ],
      },
    ]);
    const tableData = ref({});
    yunxi.base.http({
      url: "/data",
      data: { id: 1, token: yunxi.base.token },
      success: (result) => {
        if (result.errcode === 0) {
          tableData.value = result.data;
        }
      },
    });
    return {
      btnData,
      tableData,
    };
  },
};
</script>
