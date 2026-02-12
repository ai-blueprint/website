<template>
  <svg class="base-icon" :class="sizeClass" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <!-- SVG 图标容器 -->
    <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath" /> <!-- 渲染图标路径 -->
  </svg>
</template>

<script setup>
// --- 算子层：定义图标路径数据 ---
const iconMap = {                                                       // 图标路径映射表
  Layout: "M3 3h18v18H3zM3 9h18M9 21V9",                                // 布局图标路径
  Code: "m16 18 6-6-6-6M8 6l-6 6 6 6",                                  // 代码图标路径
  Layers: "m12 2 10 5-10 5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"           // 图层图标路径
};

// --- 算子层：定义接收参数 ---
const props = defineProps({                                             // 定义组件属性
  name: { type: String, required: true },                               // 图标名称
  size: { type: String, default: 'md' }                                 // 图标尺寸
});

// --- 算子层：计算属性 ---
const iconPath = computed(() => iconMap[props.name] || "");             // 根据名称获取路径
const sizeClass = computed(() => `icon-${props.size}`);                 // 生成尺寸类名
</script>

<style scoped>
.base-icon {
  flex-shrink: 0;
  /* 防止图标被压缩 */
  display: inline-block;
  /* 行内块显示 */
  vertical-align: middle;
  /* 垂直居中对齐 */
}

.icon-sm {
  width: 1rem;
  height: 1rem;
}

/* 小号：16px */
.icon-md {
  width: 1.25rem;
  height: 1.25rem;
}

/* 中号：20px */
.icon-lg {
  width: 1.5rem;
  height: 1.5rem;
}

/* 大号：24px */
.icon-xl {
  width: 2rem;
  height: 2rem;
}

/* 特大号：32px */
</style>
