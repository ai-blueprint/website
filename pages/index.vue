<template>
  <div class="home-page"> <!-- 首页根容器 -->
    <Navbar /> <!-- 顶部导航栏 -->

    <main> <!-- 主体内容区 -->
      <Hero /> <!-- 首屏宣传区 -->
      <Features /> <!-- 核心特性区 -->
      <Roadmap /> <!-- 开发计划区 -->
      <Audience /> <!-- 适用人群区 -->
      <Cta /> <!-- 行动召唤区 -->
    </main>

    <Footer /> <!-- 页脚信息栏 -->
  </div>
</template>

<script setup>
// --- 编排层：整合所有业务板块 ---
// 页面元信息配置
useHead({
  title: '首页',                                                        // 页面标题
  meta: [
    {
      name: 'description',
      content: '炼丹蓝图 - 可视化 AI 架构设计工具，让灵感瞬间转化为代码。'
    }                                                                   // 页面描述
  ]
});
</script>

<style scoped>
.home-page {
  width: 100%;
  /* 宽度撑满 */
  min-height: 100vh;
  /* 最小高度占满全屏 */
  display: flex;
  /* 弹性布局 */
  flex-direction: column;
  /* 纵向排列 */
}

main {
  flex: 1;
  /* 主体占据剩余空间 */
  padding-top: 4.5rem;
  /* 为固定导航栏留出空间 */
}
</style>
