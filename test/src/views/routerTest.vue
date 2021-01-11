<template>
  <div class="routerTest">
    <h2 @click="goRecruitManageList">招募管理</h2>
    <h2 @click="goRecruitInterview">招募面试</h2>
    <h2 @click="goRecruitAptitudeTestList">性向测试</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log(123)
  },
  methods: {
    goRecruitManageList() {},
    goRecruitInterview() {},
    goRecruitAptitudeTestList() {}
  }
}
</script>
