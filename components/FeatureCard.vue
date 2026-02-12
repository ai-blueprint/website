<template>
  <article class="feature-card"> <!-- 特性卡片容器 -->
    <div class="feature-icon" :class="color"> <!-- 图标背景容器 -->
      <BaseIcon :name="icon" size="lg" /> <!-- 统一比例图标 -->
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
  padding: 2.25rem 1.75rem;
  /* 缩小内边距 */
  border-radius: 2.5rem;
  /* 卡通圆角 */
  border: 0.3rem solid #f1f5f9;
  /* 边框厚度 */
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* 弹性过渡 */
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
  flex: 0 1 300px;
  /* 缩小基础宽度 */
  max-width: 340px;
  /* 缩小最大宽度 */
  box-shadow: 0 8px 0 #f1f5f9;
  /* 缩小立体阴影 */
  cursor: pointer;
  /* 手型指针 */
}

.feature-card:hover {
  transform: translateY(-6px) scale(1.03);
  /* 减小放大倍率 */
  border-color: #82cbfa;
  /* 边框变蓝 */
  box-shadow: 0 10px 0 #dbeafe;
  /* 阴影微调 */
}

.feature-icon {
  width: 4rem;
  /* 缩小图标容器宽度 */
  height: 4rem;
  /* 缩小图标容器高度 */
  border-radius: 1.25rem;
  /* 容器圆角 */
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  margin-bottom: 1.5rem;
  /* 下边距 */
  transition: transform 0.3s ease;
  /* 快速过渡 */
}

.feature-card:hover .feature-icon {
  transform: rotate(5deg) scale(1.05);
  /* 减小旋转和放大 */
}

/* 卡通纯色主题 (应用新配色) */
.feature-icon.blue {
  background-color: #82cbfa;
  color: white;
}

/* 天蓝背景 */
.feature-icon.purple {
  background-color: #bb6ef7;
  color: white;
}

/* 薰衣草紫背景 */
.feature-icon.indigo {
  background-color: #9975f7;
  color: white;
}

/* 梦幻紫背景 */

.feature-title {
  font-size: 1.5rem;
  /* 标题字号 */
  font-weight: 900;
  /* 极粗字重 */
  color: var(--slate-900);
  /* 深色文字 */
  margin-bottom: 1rem;
  /* 下边距 */
}

.feature-description {
  color: var(--slate-500);
  /* 灰色文字 */
  line-height: 1.5;
  /* 紧凑行高 */
  font-size: 1rem;
  /* 描述字号 */
  font-weight: 700;
  /* 加粗描述 */
}

.card-bubble {
  position: absolute;
  /* 绝对定位装饰 */
  top: -1.25rem;
  /* 位置 */
  right: -1.25rem;
  /* 位置 */
  width: 4.5rem;
  /* 尺寸 */
  height: 4.5rem;
  /* 尺寸 */
  background: rgba(0, 0, 0, 0.02);
  /* 极淡背景 */
  border-radius: 50%;
  /* 圆形 */
}
</style>
