<template>
  <article class="feature-card"> <!-- 特性卡片容器 -->
    <div class="feature-icon" :class="color"> <!-- 图标背景容器 -->
      <BaseIcon :name="icon" size="xl" /> <!-- 显著放大图标 -->
    </div>

    <h3 class="feature-title">{{ title }}</h3> <!-- 特性标题展示 -->
    <p class="feature-description">{{ description }}</p> <!-- 特性描述文本 -->
    <div class="card-bubble"></div> <!-- 装饰性小气泡 -->
  </article>
</template>

<script setup>
// --- 算子层：定义接收参数 ---
const props = defineProps({                                             // 定义组件属性
  title: { type: String, required: true },                              // 特性卡片标题
  description: { type: String, required: true },                        // 特性详细描述
  icon: { type: String, required: true },                               // 图标名称标识
  color: { type: String, default: 'blue' }                              // 主题颜色类名
});
</script>

<style scoped>
.feature-card {
  background-color: white;
  /* 白色背景 */
  padding: clamp(2.5rem, 6vw, 3.5rem) clamp(1.5rem, 4vw, 2.5rem);
  /* 响应式内边距 */
  border-radius: 3rem;
  /* 增大圆角 */
  border: 0.4rem solid #f1f5f9;
  /* 增加边框厚度 */
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* 快速弹性过渡 */
  display: flex;
  /* 弹性布局 */
  flex-direction: column;
  /* 纵向排列 */
  align-items: center;
  /* 居中对齐 */
  text-align: center;
  /* 文字居中 */
  position: relative;
  /* 相对定位 */
  overflow: hidden;
  /* 隐藏溢出 */
  flex: 0 1 320px;
  /* 限制基础宽度 */
  max-width: 380px;
  /* 限制最大宽度 */
  box-shadow: 0 12px 0 #f1f5f9;
  /* 卡通立体阴影 */
  cursor: pointer;
  /* 手型指针 */
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.08);
  /* 显著放大上浮 */
  border-color: #3b82f6;
  /* 边框变蓝 */
  box-shadow: 0 20px 0 #dbeafe;
  /* 阴影变色 */
}

.feature-icon {
  width: clamp(4.5rem, 12vw, 5.5rem);
  /* 显著增大图标容器 */
  height: clamp(4.5rem, 12vw, 5.5rem);
  /* 显著增大图标容器 */
  border-radius: 1.5rem;
  /* 容器圆角 */
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  margin-bottom: 2rem;
  /* 增加下边距 */
  transition: transform 0.2s ease;
  /* 快速过渡 */
}

.feature-card:hover .feature-icon {
  transform: rotate(15deg) scale(1.15);
  /* 悬停图标大幅旋转放大 */
}

/* 卡通纯色主题 */
.feature-icon.blue {
  background-color: #3b82f6;
  color: white;
}

/* 纯蓝背景 */
.feature-icon.purple {
  background-color: #a855f7;
  color: white;
}

/* 纯紫背景 */
.feature-icon.indigo {
  background-color: #6366f1;
  color: white;
}

/* 纯靛背景 */

.feature-title {
  font-size: clamp(1.5rem, 5vw, 2rem);
  /* 增加标题字号 */
  font-weight: 900;
  /* 极粗字重 */
  color: var(--slate-900);
  /* 深色文字 */
  margin-bottom: 1.25rem;
  /* 下边距 */
}

.feature-description {
  color: var(--slate-600);
  /* 灰色文字 */
  line-height: 1.5;
  /* 紧凑行高 */
  font-size: clamp(1.1rem, 3vw, 1.25rem);
  /* 增加描述字号 */
  font-weight: 700;
  /* 加粗描述 */
}

.card-bubble {
  position: absolute;
  /* 绝对定位装饰 */
  top: -1.5rem;
  /* 位置 */
  right: -1.5rem;
  /* 位置 */
  width: 5rem;
  /* 尺寸 */
  height: 5rem;
  /* 尺寸 */
  background: rgba(0, 0, 0, 0.03);
  /* 极淡背景 */
  border-radius: 50%;
  /* 圆形 */
}
</style>
