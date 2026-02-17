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
  background: linear-gradient(180deg, var(--accent-50) 0%, #ffffff 100%);
  /* 从浅强调色渐变到白色 */
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
  width: clamp(100px, 10cqw, 500px);
  /* 响应式Logo宽度 */
}

.heroTitle {
  font-size: clamp(0px, 10cqw, 60px);
  /* 响应式主标题字号 */
  font-weight: 800;
  /* 粗体 */
  color: var(--gray-800);
  /* 深灰色文字 */
}

.heroSlogan {
  font-size: clamp(0px, 8cqw, 60px);
  /* 响应式副标题字号 */
  font-weight: 700;
  /* 粗体 */
  color: var(--accent);
  /* 强调色文字 */
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
  border-radius: 0.75rem;
  /* 圆角 */
  background-color: var(--accent);
  /* 强调色背景 */
  color: white;
  /* 白色文字 */
  font-size: 0.9375rem;
  /* 按钮文字大小 */
  font-weight: 600;
  /* 半粗体 */
  text-decoration: none;
  /* 移除下划线 */
  transition: filter 0.2s;
  /* 亮度过渡 */
  box-shadow: 0 0 10px rgba(141, 168, 255, 0.3);
  /* 强调色光晕 */
}

.buttonSecondary {
  padding: 0.75rem 2rem;
  /* 按钮内边距 */
  border-radius: 0.75rem;
  /* 圆角 */
  background-color: white;
  /* 白色背景 */
  color: var(--accent);
  /* 强调色文字 */
  font-size: 0.9375rem;
  /* 按钮文字大小 */
  font-weight: 600;
  /* 半粗体 */
  text-decoration: none;
  /* 移除下划线 */
  transition: filter 0.2s;
  /* 亮度过渡 */
  box-shadow: 0 0 10px rgba(141, 168, 255, 0.3);
  /* 强调色光晕 */
}

.buttonPrimary:hover,
.buttonSecondary:hover {
  filter: brightness(1.1);
}

/* 悬停提亮 */
</style>
