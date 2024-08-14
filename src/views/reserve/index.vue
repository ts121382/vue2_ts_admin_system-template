<template>
  <div class="container">
    <el-row
      :gutter="24"
      type="flex"
      justify="space-between"
      align="middle"
      style="flex-direction: column; height: 100%"
    >
      <el-col :span="24" class="box mainArea">
        <div
          style="width: 100%; height: 90%; margin-top: 10px; overflow-y: scroll"
        >
          <el-table
            v-loading="loading"
            :data="recordList"
            border
            height="100%"
            style="width: 100%"
            :row-style="{ minHeight: 50 + 'px', height: 'auto' }"
            :cell-style="{ padding: 5 + 'px' }"
          >
            <!-- <el-table-column
              align="center"
              label="学院名"
              prop="departmentName"
            ></el-table-column>
            <el-table-column
              align="center"
              label="得分"
              prop="point"
            ></el-table-column>
            <el-table-column
              align="center"
              label="来源"
              prop="origin"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="300">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  icon="el-icon-edit-outline"
                  @click="openModel(scope.row, true)"
                >
                  编辑
                </el-button>
                <template>
                  <el-popconfirm
                    confirm-button-text="我已知晓风险, 确定删除"
                    confirm-button-type="danger"
                    cancel-button-text="放弃本次操作"
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定要删除该能力维度配置吗, 若该维度正在使用, 删除后可能导致数据丢失"
                    @confirm="removeScore(scope.row.id)"
                  >
                    <el-button
                      icon="el-icon-delete"
                      slot="reference"
                      type="text"
                      style="color: #f56c6c; margin-left: 30px"
                    >
                      删除
                    </el-button>
                  </el-popconfirm>
                </template>
              </template>
            </el-table-column> -->
          </el-table>
        </div>
        <!--分页器 -->
        <div class="page">
          <el-pagination
            :current-page.sync="pageInfo.page"
            :page-sizes="[3, 5, 10, 15]"
            :page-size="pageInfo.pageSize"
            layout="sizes, prev, pager, next"
            :total="totalPage"
            @size-change="handleSizeChange"
            @current-change="loadReservePage"
          />
        </div> </el-col></el-row>
  </div>
</template>

<script>
import { reservePageApi } from '@/api/reserve/index'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      totalPage: 0,
      pageInfo: {
        begin: '',
        end: '',
        page: 1,
        pageSize: 3
      },
      recordList: []
    }
  },
  computed: {
    ...mapGetters(['userId'])
  },
  created() {
    this.loadReservePage()
  },
  methods: {
    handleSizeChange() {
      this.pageInfo.page = 1
      this.loadReservePage()
    },
    loadReservePage() {
      this.pageInfo.userId = this.userId
      reservePageApi(this.pageInfo).then((res) => {
        if (res.code === 1) {
          this.totalPage = res.data.total
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 50px);
  min-width: 1326px;
  min-height: 665.2px;
  padding: 10px;
  display: flex;
  justify-content: center;
  .el-row {
    width: calc(100%);
    .el-col {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      .box {
        padding-left: 10px;
        border-radius: 4px;
        height: calc(100vh - 70px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
      }
      .mainArea {
        height: 90.5%;
        justify-content: space-between;
        .page {
          display: flex;
          align-items: center;
          height: 8%;
        }
      }
    }
  }
}
</style>
