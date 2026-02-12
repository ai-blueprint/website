<template>
  <nav class="navbar" v-motion :initial="{ y: -60 }" :enter="{ y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }"> <!-- 导航栏微幅下落 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <div class="navbar-content"> <!-- 导航栏主体布局 -->
        <NuxtLink to="/" class="logo-link" v-motion :initial="{ scale: 1 }" :enter="{ scale: 1 }" :hovered="{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- Logo 极微缩放 -->
          <img src="/logo.svg" alt="LOGO" class="logo-icon"> <!-- 项目Logo图标 -->
          <span class="logo-text">炼丹蓝图</span> <!-- 项目名称文字 -->
        </NuxtLink>

        <nav class="navbar-menu"> <!-- 中间菜单区域 -->
          <a v-for="(item, index) in menuItems" :key="index" :href="item.link" class="menu-item" v-motion :initial="{ y: 0, color: '#475569' }" :enter="{ y: 0, color: '#475569' }" :hovered="{ y: -2, color: '#82cbfa', transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- 菜单项极微上浮 -->
            {{ item.name }}
          </a>
        </nav>

        <div class="navbar-actions"> <!-- 右侧动作按钮区 -->
          <a href="https://github.com/ai-blueprint" target="_blank" class="action-icon" v-motion :initial="{ scale: 1, rotate: 0 }" :enter="{ scale: 1, rotate: 0 }" :hovered="{ scale: 1.1, rotate: 8, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- GitHub 极微摇摆 -->
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.63-.33 2.47-.33c.83 0 1.68.11 2.47.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a href="https://qm.qq.com/q/EqzcoKCV4O" target="_blank" class="btn-join" v-motion :initial="{ scale: 1, backgroundColor: '#82cbfa' }" :enter="{ scale: 1, backgroundColor: '#82cbfa' }" :hovered="{ scale: 1.03, backgroundColor: '#5da9e6', transition: { type: 'spring', stiffness: 300, damping: 15 } }" :tapped="{ scale: 0.98 }"> <!-- 按钮极微回弹 -->
            加入社区
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// --- 算子层：定义菜单数据 ---
const menuItems = [                                                     // 导航菜单项
  { name: '魔法功能', link: '#features' },
  { name: '进化蓝图', link: '#roadmap' },
  { name: '谁来加入', link: '#audience' }
];
</script>

<style scoped>
.navbar {
  position: fixed;
  /* 固定在顶部 */
  top: 0;
  /* 靠顶 */
  left: 0;
  /* 靠左 */
  right: 0;
  /* 靠右 */
  z-index: 100;
  /* 确保在最上层 */
  background-color: rgba(255, 255, 255, 0.9);
  /* 增加不透明度 */
  backdrop-filter: blur(12px);
  /* 磨砂玻璃效果 */
  border-bottom: 0.2rem solid #f1f5f9;
  /* 减薄底部线 */
}

.container {
  max-width: 1100px;
  /* 缩小最大宽度 */
  margin: 0 auto;
  /* 水平居中 */
  padding: 0 1.25rem;
  /* 左右内边距 */
}

.navbar-content {
  display: flex;
  /* 弹性布局 */
  justify-content: space-between;
  /* 两端对齐 */
  align-items: center;
  /* 垂直居中 */
  height: 4.5rem;
  /* 缩小高度 */
}

.logo-link {
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  gap: 0.75rem;
  /* 缩小间距 */
  text-decoration: none;
  /* 移除下划线 */
}

.logo-icon {
  width: 2.25rem;
  /* 缩小图标宽度 */
  height: 2.25rem;
  /* 缩小图标高度 */
}

.logo-text {
  font-size: 1.25rem;
  /* 缩小文字大小 */
  font-weight: 900;
  /* 极粗字重 */
  color: var(--slate-900);
  /* 深色文字 */
  letter-spacing: -0.02em;
  /* 紧凑字间距 */
}

.navbar-menu {
  display: none;
  /* 默认隐藏（移动端） */
  gap: 2rem;
  /* 缩小菜单项间距 */
}

@media (min-width: 768px) {
  .navbar-menu {
    display: flex;
    /* 电脑端显示 */
  }
}

.menu-item {
  font-size: 0.95rem;
  /* 缩小菜单文字 */
  font-weight: 800;
  /* 加粗 */
  color: #475569;
  /* 灰色文字 */
  text-decoration: none;
  /* 移除下划线 */
}

.navbar-actions {
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  gap: 1.25rem;
  /* 缩小动作项间距 */
}

.action-icon {
  color: #64748b;
  /* 图标颜色 */
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
}

.icon {
  width: 1.5rem;
  /* 缩小图标尺寸 */
  height: 1.5rem;
  /* 缩小图标尺寸 */
}

.btn-join {
  padding: 0.6rem 1.25rem;
  /* 缩小按钮内边距 */
  border-radius: 1rem;
  /* 缩小圆角 */
  color: white;
  /* 白色文字 */
  font-size: 0.9rem;
  /* 缩小按钮文字 */
  font-weight: 800;
  /* 极粗 */
  text-decoration: none;
  /* 移除下划线 */
  box-shadow: 0 4px 0 #5da9e6;
  /* 卡通立体阴影 */
}

@media (max-width: 640px) {
  .logo-text {
    display: none;
    /* 小屏幕隐藏文字只留图标 */
  }
}
</style>
