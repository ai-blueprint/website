<template>
  <section id="features" class="features"> <!-- 核心特性区域 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <header class="section-header" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visibleOnce="{ opacity: 1, scale: 1 }"> <!-- 标题进入动画 -->
        <h2 class="section-title">超厉害的核心功能</h2> <!-- 卡通化标题 -->
        <p class="section-description"> <!-- 副标题描述 -->
          专注于 AI 架构设计的快乐与效率，让复杂的模型结构像拼图一样简单
        </p>
      </header>

      <div class="features-layout"> <!-- 弹性布局容器 -->
        <FeatureCard v-for="(featureItem, featureIndex) in featureList" :key="featureIndex" :title="featureItem.title" :description="featureItem.description" :icon="featureItem.icon" :color="featureItem.color" v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { delay: featureIndex * 150, type: 'spring', stiffness: 100 }
        }" /> <!-- 自动弹入的特性卡片 -->
      </div>
    </div>
  </section>
</template>

<script setup>
// --- 算子层：定义静态数据 ---
const featureList = [                                                   // 核心功能数据列表
  {
    title: "魔法架构设计",                                              // 功能名称
    description: "拖拽节点即可构建复杂的神经网络，彻底告别枯燥的纯代码编写方式。", // 功能描述
    icon: "Layout",                                                     // 图标标识
    color: "blue"                                                       // 主题色
  },
  {
    title: "一键变出代码",                                               // 功能名称
    description: "支持导出工业级的 PyTorch 代码，让你的奇思妙想瞬间变成现实。",    // 功能描述
    icon: "Code",                                                       // 图标标识
    color: "purple"                                                     // 主题色
  },
  {
    title: "组件大宝库",                                                // 功能名称
    description: "内置海量深度学习组件，像玩乐高一样组装你的专属 AI 模型。",      // 功能描述
    icon: "Layers",                                                     // 图标标识
    color: "indigo"                                                     // 主题色
  }
];
</script>

<style scoped>
.features {
  padding: clamp(4rem, 10vw, 8rem) 0;
  /* 响应式上下内边距 */
  background-color: #fdfeff;
  /* 极浅蓝背景 */
}

.container {
  max-width: 1200px;
  /* 最大宽度 */
  margin: 0 auto;
  /* 居中 */
  padding: 0 1.5rem;
  /* 左右边距 */
}

.section-header {
  text-align: center;
  /* 文字居中 */
  margin-bottom: clamp(3rem, 8vw, 5rem);
  /* 响应式下边距 */
}

.section-title {
  font-size: clamp(2rem, 6vw, 3rem);
  /* 响应式标题字号 */
  font-weight: 900;
  /* 极粗字重 */
  color: var(--slate-900);
  /* 深色文字 */
  margin-bottom: 1.5rem;
  /* 下边距 */
}

.section-description {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  /* 响应式描述字号 */
  color: var(--slate-600);
  /* 灰色文字 */
  max-width: 42rem;
  /* 最大宽度 */
  margin: 0 auto;
  /* 居中 */
}

.features-layout {
  display: flex;
  /* 弹性布局 */
  flex-wrap: wrap;
  /* 自动换行适配多端 */
  gap: 2rem;
  /* 卡片间距 */
  justify-content: center;
  /* 居中排列 */
}

/* FeatureCard 组件内部已处理弹性，此处仅负责容器排布 */
</style>
