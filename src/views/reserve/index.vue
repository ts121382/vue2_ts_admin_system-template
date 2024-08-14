<template>
  <div>
    <el-dialog />
    <!--分页器 -->
    <el-pagination
      :current-page.sync="pageInfo.page"
      :page-sizes="[3, 5, 10, 15]"
      :page-size="pageInfo.pageSize"
      layout="sizes, prev, pager, next"
      :total="totalPage"
      @size-change="handleSizeChange"
      @current-change="loadReservePage"
    />
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
      }
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

<style lang="scss" scoped></style>
