<template>
  <div> <!-- 首页根容器 -->
    <Navbar /> <!-- 顶部导航栏 -->

    <main class="mainContent"> <!-- 主体内容区 -->
      <Hero /> <!-- 首屏宣传区 -->
      <Features /> <!-- 项目介绍区 -->
      <Prototype /> <!-- 设计原型区 -->
      <Progress /> <!-- 开发进度区 -->
    </main>

    <section class="vtuberShowcase"> <!-- 页面底部VTuber大图展示区 -->
      <div class="container"> <!-- 复用全局容器宽度 -->
        <img src="/images/VTuberLogo.svg" alt="炼丹蓝图 VTuber 形象展示" class="vtuberImage"> <!-- 在页脚上方展示品牌形象大图 -->
      </div>
    </section>

    <Footer /> <!-- 页脚信息栏 -->
  </div>
</template>

<script setup>
// --- 编排层：页面元信息 ---
useHead({
  title: '零基础搭建AI架构',                                              // 页面标题，渲染为"零基础搭建AI架构 - 炼丹蓝图"
  meta: [
    {
      name: 'description',
      content: '炼丹蓝图 - 零基础搭建AI架构。用蓝图的形式设计AI架构，拖拽节点、连线，无需编写任何代码。'
    }                                                                    // 页面描述
  ]
});
</script>

<style scoped>
.mainContent {
  padding-top: 3.5rem;
  /* 为固定导航栏留出空间 */
}

.vtuberShowcase {
  padding: 0 0 3rem;
  /* 放在页脚上方，给底部留出展示空间 */
}

.vtuberImage {
  display: block;
  /* 去掉图片默认底部空隙 */
  width: 100%;
  /* 大图自适应容器宽度 */
  height: auto;
  /* 保持原图比例不拉伸 */
}
</style>
