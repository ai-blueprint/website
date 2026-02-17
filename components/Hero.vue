<template>
  <section class="hero"> <!-- 首屏主视觉区域 -->
    <div class="container heroContent"> <!-- 合并容器和内容布局 -->
      <img src="/logo.svg" alt="炼丹蓝图" class="heroLogo"> <!-- 品牌Logo图标 -->
      <h1 class="heroTitle">炼丹蓝图</h1> <!-- 主标题 -->
      <p class="heroSlogan">零基础搭建AI架构</p> <!-- 副标题口号 -->
      <p class="heroDescription">用蓝图的形式设计AI架构。拖拽节点、连线，无需编写任何代码</p> <!-- 功能描述 -->

      <div class="heroActions"> <!-- 按钮组 -->
        <a href="https://qm.qq.com/q/EqzcoKCV4O" target="_blank" class="buttonPrimary">加入社区</a> <!-- 主按钮 -->
        <a href="https://github.com/ai-blueprint" target="_blank" class="buttonSecondary">查看仓库</a> <!-- 次按钮 -->
      </div>
    </div>
  </section>
</template>

<script setup>
// 纯静态展示，无需逻辑                                                    // 保持组件简洁
</script>

<style scoped>
.hero {
  padding: 8rem 0 6rem;
  /* 上方留出导航栏空间 */
  background: linear-gradient(180deg, #eef2ff 0%, #ffffff 100%);
  /* 从浅靛蓝渐变到白色 */
}

.heroContent {
  display: flex;
  /* 弹性布局 */
  flex-direction: column;
  /* 纵向排列 */
  align-items: center;
  /* 水平居中 */
  text-align: center;
  /* 文字居中 */
}

.heroLogo {
  width: 7rem;
  /* Logo宽度 */
  height: 7rem;
  /* Logo高度 */
  margin-bottom: 1.5rem;
  /* 与标题的间距 */
  opacity: 0.35;
  /* 半透明淡化效果 */
}

.heroTitle {
  font-size: 2.5rem;
  /* 主标题字号 */
  font-weight: 800;
  /* 粗体 */
  color: var(--gray-800);
  /* 深灰色文字 */
  margin-bottom: 0.75rem;
  /* 与副标题间距 */
}

.heroSlogan {
  font-size: 2.25rem;
  /* 副标题字号 */
  font-weight: 700;
  /* 粗体 */
  color: var(--indigo-400);
  /* 靛蓝色文字 */
  margin-bottom: 1.25rem;
  /* 与描述文字间距 */
}

.heroDescription {
  font-size: 1rem;
  /* 描述文字字号 */
  color: var(--gray-500);
  /* 中灰色文字 */
  max-width: 32rem;
  /* 限制文字宽度 */
  margin-bottom: 2.5rem;
  /* 与按钮组间距 */
}

.heroActions {
  display: flex;
  /* 横向排列按钮 */
  gap: 1rem;
  /* 按钮间距 */
  flex-wrap: wrap;
  /* 小屏自动换行 */
  justify-content: center;
  /* 居中排列 */
}

.buttonPrimary {
  padding: 0.75rem 2rem;
  /* 按钮内边距 */
  border-radius: 0.5rem;
  /* 圆角 */
  background-color: var(--indigo-500);
  /* 靛蓝色背景 */
  color: white;
  /* 白色文字 */
  font-size: 0.9375rem;
  /* 按钮文字大小 */
  font-weight: 600;
  /* 半粗体 */
  text-decoration: none;
  /* 移除下划线 */
  transition: background-color 0.2s;
  /* 背景色过渡 */
}

.buttonPrimary:hover {
  background-color: var(--indigo-600);
}

/* 悬停加深背景 */

.buttonSecondary {
  padding: 0.75rem 2rem;
  /* 按钮内边距 */
  border-radius: 0.5rem;
  /* 圆角 */
  background-color: white;
  /* 白色背景 */
  color: var(--indigo-500);
  /* 靛蓝色文字 */
  font-size: 0.9375rem;
  /* 按钮文字大小 */
  font-weight: 600;
  /* 半粗体 */
  text-decoration: none;
  /* 移除下划线 */
  border: 1px solid var(--indigo-200);
  /* 浅靛蓝边框 */
  transition: all 0.2s;
  /* 全属性过渡 */
}

.buttonSecondary:hover {
  border-color: var(--indigo-400);
  /* 悬停边框加深 */
  background-color: var(--indigo-50);
  /* 悬停浅靛蓝背景 */
}
</style>
