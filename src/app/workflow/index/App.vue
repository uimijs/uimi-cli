<template>
  <div
    class="d-flex bg-white position-fixed border-bottom p-1 w-100"
    style="z-index: 1030"
  >
    <ul class="nav mr-auto">
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-legal"></i>
          <span>核准</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-hand-paper-o"></i>
          <span>拒绝</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-reply"></i>
          <span>退回</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-save"></i>
          <span>保存</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-sliders"></i>
          <span>流程追踪</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-list-ul"></i>
          <span>更多操作</span>
        </a>
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-refresh"></i>
          <span>刷新</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa fa-print"></i>
          <span>打印</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-pencil"></i>
          <span>意见栏</span>
        </a>
      </li>
    </ul>
  </div>
  <!--left-->
  <div class="left"></div>
  <div class="container" style="padding-top: 3.5rem">
    <div class="page">
      <div class="card">
        <div class="card-header border-bottom">销货单单头档</div>
        <div class="card-body">
          <div class="card-columns">
            <div class="card">
              <label>字段1</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="card">
              <label>字段2</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="card">
              <label>字段3</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="card">
              <label>字段4</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="card">
              <label>字段5</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="card">
              <label>字段6</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="card">
              <label>字段7</label>
              <textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">销货单单身档</div>

        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Progress</th>
                <th>Team</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-1"
                    />
                    <label
                      for="checkbox-1"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Konr Admin Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="90%"
                  >
                    <div class="progress-bar bg-success w-90"></div>
                  </div>
                </td>
                <td></td>
                <td>10-11-2018</td>
                <td>
                  <div class="badge badge-success">Testing</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-2"
                    />
                    <label
                      for="checkbox-2"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Gogg beauty Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="40%"
                  >
                    <div class="progress-bar bg-primary w-40"></div>
                  </div>
                </td>
                <td></td>
                <td>29-11-2018</td>
                <td>
                  <div class="badge badge-info">Coding</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-3"
                    />
                    <label
                      for="checkbox-3"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Hytr Hosting Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    style="height: 4px"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="60%"
                  >
                    <div class="progress-bar bg-danger w-60"></div>
                  </div>
                </td>
                <td></td>
                <td>31-10-2018</td>
                <td>
                  <div class="badge badge-warning">Process</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-4"
                    />
                    <label
                      for="checkbox-4"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Ureo Education Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="50%"
                  >
                    <div class="progress-bar bg-secondary w-50"></div>
                  </div>
                </td>
                <td></td>
                <td>15-10-2018</td>
                <td>
                  <div class="badge badge-danger">Completed</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
