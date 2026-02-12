<template>
  <footer class="footer" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }"> <!-- 页脚淡入动画 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <div class="footer-card"> <!-- 页脚主体卡通卡片 -->
        <div class="footer-layout"> <!-- 弹性居中布局 -->

          <div class="brand-section" v-motion :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"> <!-- 品牌区居中排列 -->
            <div class="brand-header"> <!-- Logo标题行 -->
              <div class="logo-box"> <!-- 图标方块 -->
                <img src="/logo.svg" alt="LOGO" class="logo-img"> <!-- 项目图标 -->
              </div>
              <span class="brand-title">炼丹蓝图</span> <!-- 缩小后的标题 -->
            </div>
            <p class="brand-text"> <!-- 描述文字 -->
              致力于降低 AI 架构设计门槛，让每个人都能像玩积木一样，变出属于自己的 AI 魔法。
            </p>
          </div>

          <nav class="nav-section"> <!-- 导航链接区 -->
            <div v-for="(group, groupIndex) in navGroups" :key="groupIndex" class="nav-group" v-motion :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 300 + groupIndex * 100 } }"> <!-- 导航组居中对齐 -->
              <h4 class="group-name">{{ group.title }}</h4> <!-- 分组标题 -->
              <div class="link-stack"> <!-- 链接垂直堆叠 -->
                <a v-for="(link, linkIndex) in group.links" :key="linkIndex" :href="link.url" class="footer-link" v-motion :initial="{ x: 0 }" :hovered="{ x: 8, color: '#9975f7' }"> <!-- 悬停反馈 -->
                  <span class="dot"></span> <!-- 装饰小圆点 -->
                  {{ link.name }}
                </a>
              </div>
            </div>
          </nav>

          <div class="social-section" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 500 } }"> <!-- 社交区居中 -->
            <a href="https://github.com/kernyr/bmad" target="_blank" class="github-pill" v-motion :hovered="{ scale: 1.05, y: -5 }"> <!-- 精简后的药丸按钮 -->
              <svg class="pill-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.63-.33 2.47-.33c.83 0 1.68.11 2.47.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
              <span>GitHub 魔法屋</span>
            </a>
          </div>

        </div>

        <div class="footer-divider"></div> <!-- 分割线 -->

        <div class="footer-info"> <!-- 版权行 -->
          <p class="copyright-text">
            © {{ currentYear }} 炼丹蓝图冒险团队
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// --- 算子层：定义页脚数据 ---
const currentYear = new Date().getFullYear();

const navGroups = [
  {
    title: '冒险地图',
    links: [
      { name: '魔法功能', url: '#features' },
      { name: '进化蓝图', url: '#roadmap' }
    ]
  },
  {
    title: '传送门',
    links: [
      { name: '冒险社区', url: 'https://pd.qq.com/s/9n7u1p' },
      { name: 'QQ 频道', url: 'https://pd.qq.com/s/9n7u1p' }
    ]
  }
];
</script>

<style scoped>
.footer {
  background-color: #f8fafc;
  padding: clamp(2rem, 5vw, 3rem) 0;
  /* 缩小上下内边距 */
}

.container {
  max-width: 1100px;
  /* 缩小容器最大宽度 */
  margin: 0 auto;
  padding: 0 1.25rem;
}

.footer-card {
  background-color: white;
  border-radius: 2.5rem;
  /* 缩小圆角 */
  padding: clamp(2rem, 6vw, 3.5rem);
  /* 缩小内边距 */
  border: 0.35rem solid #f1f5f9;
  /* 减薄边框 */
  box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.05);
  /* 减薄阴影 */
}

.footer-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  /* 缩小分块间距 */
  align-items: flex-start;
  justify-content: center;
  /* 全端居中 */
  text-align: center;
  /* 文字居中 */
}

.brand-section {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.logo-box {
  width: 2.75rem;
  /* 缩小图标框 */
  height: 2.75rem;
  background-color: #eff6ff;
  border-radius: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.15rem solid #dbeafe;
}

.logo-img {
  width: 1.75rem;
  height: 1.75rem;
}

.brand-title {
  font-size: 1.5rem;
  /* 缩小标题字号 */
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.brand-text {
  font-size: 1rem;
  /* 缩小描述字号 */
  line-height: 1.5;
  color: #64748b;
  max-width: 32rem;
  font-weight: 700;
}

.nav-section {
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}

.nav-group {
  flex: 0 1 auto;
  min-width: 130px;
}

.group-name {
  font-size: 1rem;
  /* 缩小分组标题 */
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 1rem;
}

.link-stack {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  /* 缩小链接间距 */
  align-items: center;
}

.footer-link {
  font-size: 0.95rem;
  /* 缩小链接字号 */
  font-weight: 800;
  color: #64748b;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dot {
  width: 0.35rem;
  height: 0.35rem;
  background-color: #9975f7;
  /* 使用新配色中的梦幻紫 */
  border-radius: 50%;
  opacity: 0.5;
}

.social-section {
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.github-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #1e293b;
  color: white;
  padding: 0.75rem 1.5rem;
  /* 缩小药丸内边距 */
  border-radius: 1.25rem;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.2);
  /* 卡通立体阴影 */
}

.pill-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.footer-divider {
  height: 0.25rem;
  /* 减薄分割线 */
  background-color: #f8fafc;
  border-radius: 1rem;
  margin: 2.5rem 0;
  /* 缩小上下边距 */
}

.footer-info {
  display: flex;
  justify-content: center;
}

.copyright-text {
  font-size: 0.9rem;
  /* 缩小版权字号 */
  font-weight: 800;
  color: #94a3b8;
}
</style>
