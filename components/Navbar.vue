<template>
  <nav class="navbar"> <!-- 顶部固定导航栏 -->
    <div class="container navbarContent"> <!-- 合并容器和布局 -->
      <NuxtLink to="/" class="logoText">炼丹蓝图</NuxtLink> <!-- 品牌名称 -->

      <div class="navMenu"> <!-- 导航菜单 -->
        <a v-for="(item, index) in menuItems" :key="index" :href="item.link" class="menuItem"> <!-- 菜单项 -->
          {{ item.name }}
        </a>
      </div>

      <a href="https://qm.qq.com/q/EqzcoKCV4O" target="_blank" class="joinButton">加入</a> <!-- 加入按钮 -->
    </div>
  </nav>
</template>

<script setup>
// --- 算子层：定义菜单数据 ---
const menuItems = [                                                      // 导航菜单项列表
  { name: '项目介绍', link: '#features' },                               // 跳转到项目介绍区
  { name: '设计原型', link: '#prototype' },                              // 跳转到设计原型区
  { name: '开发进度', link: '#progress' }                                // 跳转到开发进度区
];
</script>

<style scoped>
.navbar {
  position: fixed;
  /* 固定在页面顶部 */
  top: 0;
  /* 紧贴顶部 */
  left: 0;
  /* 紧贴左侧 */
  right: 0;
  /* 紧贴右侧 */
  z-index: 100;
  /* 确保在最上层 */
  background-color: rgba(255, 255, 255, 0.95);
  /* 半透明白色背景 */
  backdrop-filter: blur(12px);
  /* 毛玻璃模糊效果 */
  border-bottom: 1px solid var(--gray-200);
  /* 底部细分割线 */
}

.navbarContent {
  display: flex;
  /* 弹性横向布局 */
  justify-content: space-between;
  /* 两端对齐 */
  align-items: center;
  /* 垂直居中 */
  height: 3.5rem;
  /* 导航栏高度 */
}

.logoText {
  font-size: 1.25rem;
  /* 品牌文字大小 */
  font-weight: 800;
  /* 粗体 */
  color: var(--indigo-500);
  /* 靛蓝色品牌色 */
  text-decoration: none;
  /* 移除下划线 */
}

.navMenu {
  display: none;
  /* 移动端默认隐藏 */
  gap: 2rem;
  /* 菜单项间距 */
}

@media (min-width: 768px) {
  .navMenu {
    display: flex;
  }

  /* 桌面端显示菜单 */
}

.menuItem {
  font-size: 0.875rem;
  /* 菜单文字大小 */
  font-weight: 500;
  /* 中等粗细 */
  color: var(--gray-600);
  /* 灰色文字 */
  text-decoration: none;
  /* 移除下划线 */
  transition: color 0.2s;
  /* 颜色过渡动画 */
}

.menuItem:hover {
  color: var(--indigo-500);
}

/* 悬停变靛蓝色 */

.joinButton {
  padding: 0.4rem 1.25rem;
  /* 按钮内边距 */
  border-radius: 0.5rem;
  /* 圆角 */
  background-color: var(--indigo-500);
  /* 靛蓝色背景 */
  color: white;
  /* 白色文字 */
  font-size: 0.875rem;
  /* 按钮文字大小 */
  font-weight: 600;
  /* 半粗体 */
  text-decoration: none;
  /* 移除下划线 */
  transition: background-color 0.2s;
  /* 背景色过渡 */
}

.joinButton:hover {
  background-color: var(--indigo-600);
}

/* 悬停加深背景 */
</style>
