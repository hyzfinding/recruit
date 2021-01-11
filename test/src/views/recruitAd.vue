<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" class="content">
      <div class="cdname">
        <div class="cdname_">
          <img src="../assets/image/候选人.png" alt="" class="cdname_img" />
          <span>候选人</span>
          <span>张三</span>
          <img
            src="../assets/image/未转发.png"
            alt=""
            class="cdname_img_forward"
          />
        </div>
      </div>
      <div class="cdname_list">
        <div class="cdname_list_pd">
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
          <div class="list">
            <span>推荐人</span>
            <span>推荐人</span>
          </div>
        </div>
        <div class="cdname_button">
          <button>人员详情</button>
          <button>简历编辑</button>
          <button>简历转发</button>
          <button>测试转发</button>
        </div>
      </div>
    </van-cell>
    <div class="footer">
      <button>新增</button>
    </div>
  </van-list>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 4) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss">
body {
  background: #f4f4f4;
}
van-list{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cdname {
  border-bottom: 0.1rem solid #f4f4f4;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 2rem;
}
.cdname * {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  background: #ffffff;
  vertical-align: middle;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
}
.cdname_img {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
}
.cdname span {
  margin-left: 0.5rem;
}
.cdname_img_forward {
  width: 4rem;
  height: 4rem;
  float: right;
}
.cdname_list {
  height: 23rem;
  background: #ffffff;
  margin-left: 4%;
  margin-right: 4%;
}
.cdname_list_pd {
  padding: 1rem 1rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
}
.cdname_button{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cdname_button button{
  width: 7rem;
  height: 3rem;
  border: none;
  color: #ffffff;
  outline:none;
}
.footer{
  width: 100%;
  height: 7rem;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  display:flex;
  justify-content: center;
  align-items: center;
}
.footer button{
  width: 90%;
  height: 60%;
  border: none;
  color: #ffffff;
  outline:none;
  background: #c6ab6f;
}
</style>

