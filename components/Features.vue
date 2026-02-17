<template>
  <section id="features"> <!-- 项目介绍区域 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <h2 class="sectionTitle">项目介绍</h2> <!-- 区域主标题 -->
      <div class="titleUnderline"></div> <!-- 标题下方装饰线 -->

      <div class="cardGrid"> <!-- 两列卡片网格 -->
        <article v-for="(card, index) in cardList" :key="index" class="featureCard"> <!-- 特性卡片 -->
          <svg class="cardIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <!-- 图标 -->
            <path stroke-linecap="round" stroke-linejoin="round" :d="card.iconPath" /> <!-- 图标路径 -->
          </svg>
          <h3 class="cardTitle">{{ card.title }}</h3> <!-- 卡片标题 -->
          <p v-for="(line, lineIndex) in card.lines" :key="lineIndex" class="cardLine">{{ line }}</p> <!-- 描述行 -->
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// --- 算子层：定义卡片数据 ---
const cardList = [                                                       // 项目介绍卡片列表
  {
    title: '启蒙',                                                       // 第一张卡片标题
    iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1', // 链接图标
    lines: ['推动青少年AI教育的启蒙', '成为易于理解的教育工具']             // 描述文字
  },
  {
    title: '目标',                                                       // 第二张卡片标题
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',         // 目标勾选图标
    lines: ['致力于降低 AI 架构创新门槛', '让每个人都能成为 AI 架构师']    // 描述文字
  }
];
</script>

<style scoped>
section {
  padding: 5rem 0;
}

/* 区块上下内边距 */

.cardGrid {
  display: grid;
  /* 网格布局 */
  grid-template-columns: repeat(2, 1fr);
  /* 两列等宽 */
  gap: 3rem;
  /* 卡片间距 */
}

@media (max-width: 640px) {
  .cardGrid {
    grid-template-columns: 1fr;
  }

  /* 小屏单列 */
}

.featureCard {
  background-color: #fff;
  /* 白色背景 */
  border-radius: 1rem;
  /* 圆角 */
  padding: 2.5rem 2rem;
  /* 内边距 */
  text-align: center;
  /* 内容居中 */
  transition: box-shadow 0.2s;
  /* 阴影过渡 */
  box-shadow: 0 0 20px rgba(141, 168, 255, 0.1);
  /* 强调色淡阴影 */
}

.featureCard:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  /* 悬停浮起阴影 */
}

.cardIcon {
  width: 3rem;
  /* 图标大小 */
  height: 3rem;
  /* 图标大小 */
  color: var(--accent);
  /* 强调色图标 */
  margin: 0 auto 1.25rem;
  /* 居中并留下间距 */
  padding: 0.5rem;
  /* 撑大可点击区域 */
  box-sizing: content-box;
  /* padding不影响图标大小 */
  border-radius: 50%;
  /* 圆形 */
  display: block;
  /* 块级居中 */
}

.cardTitle {
  font-size: 2rem;
  /* 卡片标题字号 */
  font-weight: 700;
  /* 粗体 */
  color: var(--accent);
  /* 强调色标题 */
  margin-bottom: 1rem;
  /* 与描述间距 */
}

.cardLine {
  font-size: 1rem;
  /* 描述文字字号 */
  color: var(--gray-600);
  /* 灰色文字 */
  line-height: 1.8;
  /* 行高 */
}
</style>
