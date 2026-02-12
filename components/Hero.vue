<template>
  <section class="hero"> <!-- 主页首屏区域 -->
    <div class="blob blob-blue"></div> <!-- 背景装饰蓝球 -->
    <div class="blob blob-purple"></div> <!-- 背景装饰紫球 -->

    <div class="container"> <!-- 内容定宽容器 -->
      <div class="hero-content"> <!-- 首屏文字内容区 -->
        <div class="hero-badge" v-motion :initial="{ opacity: 0, scale: 0.5 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } }"> <!-- 徽章快速弹出 -->
          <div class="badge-dot"> <!-- 固定形状的小球 -->
            <span class="dot-inner"></span> <!-- 内部核心 -->
          </div>
          <span class="badge-text">欢迎加入 AI 冒险岛</span> <!-- 精简后的文字 -->
        </div>

        <h1 class="hero-title" v-motion :initial="{ opacity: 0, y: 50, scale: 0.9 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 100, type: 'spring', stiffness: 250 } }"> <!-- 标题快速滑入 -->
          像玩积木一样<br /> <!-- 卡通化文案 -->
          <span class="gradient-text">设计你的 AI 魔法</span> <!-- 纯色副标题 -->
        </h1>

        <p class="hero-description" v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"> <!-- 描述快速滑入 -->
          炼丹蓝图是专为好奇心打造的 AI 创作乐园。通过简单的拖拽和连线，你就能亲手构建出强大的神经网络，并瞬间变出可运行的代码！
        </p>

        <div class="hero-actions" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"> <!-- 按钮组快速滑入 -->
          <a href="https://github.com/ai-blueprint" target="_blank" class="btn-action btn-primary" v-motion :initial="{ scale: 1, y: 0 }" :enter="{ scale: 1, y: 0 }" :hovered="{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- GitHub 按钮平滑放大 -->
            <svg class="btn-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.63-.33 2.47-.33c.83 0 1.68.11 2.47.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
            <span>前往 GitHub</span> <!-- 精简文字 -->
          </a>
          <a href="https://qm.qq.com/q/EqzcoKCV4O" target="_blank" class="btn-action btn-secondary" v-motion :initial="{ scale: 1, y: 0 }" :enter="{ scale: 1, y: 0 }" :hovered="{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- 社区按钮平滑放大 -->
            <span>加入社区</span> <!-- 精简文字 -->
          </a>
        </div>

        <article class="editor-preview" v-motion :initial="{ opacity: 0, y: 50, scale: 0.95 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 400, type: 'spring', stiffness: 150 } }"> <!-- 预览图快速滑入 -->
          <div class="preview-glow"></div> <!-- 预览图背景发光 -->
          <div class="preview-frame"> <!-- 预览图外框 -->
            <img src="/images/editor.svg" alt="编辑器预览" class="preview-img"> <!-- 预览图片 -->
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// 纯静态展示，无需逻辑                                                   // 保持组件简洁
</script>

<style scoped>
.hero {
  position: relative;
  /* 相对定位 */
  padding: clamp(6rem, 15vw, 10rem) 0 clamp(4rem, 10vw, 6rem);
  /* 响应式上下内边距 */
  text-align: center;
  /* 文字居中 */
  overflow: hidden;
  /* 隐藏溢出装饰 */
  background-color: #fdfeff;
  /* 极浅蓝背景 */
}

.blob {
  position: absolute;
  /* 绝对定位装饰球 */
  filter: blur(100px);
  /* 增加模糊效果 */
  z-index: -1;
  /* 置于底层 */
  opacity: 0.5;
  /* 透明度 */
  width: clamp(20rem, 50vw, 35rem);
  /* 响应式宽度 */
  height: clamp(20rem, 50vw, 35rem);
  /* 响应式高度 */
  border-radius: 50%;
  /* 圆形 */
}

.blob-blue {
  background-color: #dbeafe;
  /* 浅蓝色背景 */
  top: -10%;
  /* 位置 */
  left: -10%;
  /* 位置 */
}

.blob-purple {
  background-color: #f3e8ff;
  /* 浅紫色背景 */
  top: -10%;
  /* 位置 */
  right: -10%;
  /* 位置 */
}

.container {
  max-width: 1200px;
  /* 最大宽度 */
  margin: 0 auto;
  /* 居中 */
  padding: 0 1.5rem;
  /* 左右边距 */
}

.hero-content {
  max-width: 64rem;
  /* 内容最大宽度 */
  margin: 0 auto;
  /* 居中 */
}

.hero-badge {
  display: inline-flex;
  /* 行内弹性布局 */
  align-items: center;
  /* 垂直居中 */
  gap: 0.6rem;
  /* 缩小间距 */
  padding: 0.5rem 1rem;
  /* 紧凑内边距 */
  border-radius: 2rem;
  /* 保持圆角 */
  background-color: #f0f9ff;
  /* 浅蓝背景 */
  border: 0.2rem solid #bae6fd;
  /* 边框 */
  color: #0369a1;
  /* 蓝色文字 */
  font-size: 0.95rem;
  /* 紧凑字号 */
  font-weight: 900;
  /* 极粗 */
  margin-bottom: 2.5rem;
  /* 下边距 */
  box-shadow: none;
  /* 移除徽章阴影 */
}

.badge-dot {
  width: 0.75rem;
  /* 固定宽度 */
  height: 0.75rem;
  /* 固定高度 */
  flex-shrink: 0;
  /* 禁止被挤压 */
  position: relative;
  /* 相对定位 */
}

.dot-inner {
  display: block;
  /* 块级 */
  width: 100%;
  /* 撑满 */
  height: 100%;
  /* 撑满 */
  background-color: #0ea5e9;
  /* 明亮蓝小球 */
  border-radius: 50%;
  /* 强制圆形 */
}

.dot-inner::after {
  content: "";
  /* 动画外圈 */
  position: absolute;
  /* 绝对定位 */
  inset: 0;
  /* 撑满 */
  background-color: inherit;
  /* 继承颜色 */
  border-radius: 50%;
  /* 圆形 */
  animation: pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  /* 呼吸动画 */
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  /* 开始 */
  100% {
    transform: scale(3);
    opacity: 0;
  }

  /* 结束 */
}

.badge-text {
  white-space: nowrap;
  /* 强制不换行 */
}

.hero-title {
  font-size: clamp(2.25rem, 8vw, 4rem);
  /* 适度缩小标题 */
  font-weight: 900;
  /* 极粗 */
  line-height: 1.1;
  /* 行高 */
  margin-bottom: 1.5rem;
  /* 下边距 */
  color: var(--slate-900);
  /* 深色文字 */
  letter-spacing: -0.02em;
  /* 紧凑字间距 */
}

.gradient-text {
  color: #3b82f6;
  /* 魔法蓝纯色 */
}

.hero-description {
  font-size: clamp(1rem, 3vw, 1.25rem);
  /* 适度缩小描述 */
  color: var(--slate-600);
  /* 灰色文字 */
  line-height: 1.5;
  /* 行高 */
  margin-bottom: 3.5rem;
  /* 下边距 */
  max-width: 42rem;
  /* 限制宽度 */
  margin-left: auto;
  /* 居中 */
  margin-right: auto;
  /* 居中 */
  font-weight: 700;
  /* 加粗 */
}

.hero-actions {
  display: flex;
  /* 弹性布局 */
  flex-wrap: wrap;
  /* 自动换行适配多端 */
  justify-content: center;
  /* 居中 */
  gap: 1.5rem;
  /* 间距 */
  margin-bottom: 5rem;
  /* 下边距 */
}

.btn-action {
  padding: 0.8rem 2rem;
  /* 紧凑按钮内边距 */
  border-radius: 1.25rem;
  /* 适中圆角 */
  font-weight: 900;
  /* 极粗 */
  text-decoration: none;
  /* 无下划线 */
  display: flex;
  /* 弹性 */
  align-items: center;
  /* 居中 */
  justify-content: center;
  /* 居中 */
  gap: 0.6rem;
  /* 间距 */
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* 弹性动画 */
  flex: 0 1 auto;
  /* 随内容撑开 */
  min-width: 180px;
  /* 基础宽度 */
}

.btn-primary {
  background-color: #3b82f6;
  /* 魔法蓝 */
  color: white;
  /* 白色文字 */
  box-shadow: 0 6px 0 #2563eb;
  /* 立体卡通阴影 */
}

.btn-secondary {
  background-color: white;
  /* 纯白 */
  color: var(--slate-900);
  /* 深色文字 */
  border: 0.2rem solid #f1f5f9;
  /* 浅灰边框 */
  box-shadow: 0 6px 0 #f1f5f9;
  /* 立体阴影 */
}

.btn-icon {
  width: 1.5rem;
  /* 图标尺寸 */
  height: 1.5rem;
  /* 图标尺寸 */
}

.editor-preview {
  position: relative;
  /* 相对定位 */
  max-width: 68rem;
  /* 适度缩小预览 */
  margin: 0 auto;
  /* 居中 */
}

.preview-glow {
  position: absolute;
  /* 绝对定位 */
  inset: -3%;
  /* 发光范围 */
  background: #3b82f6;
  /* 魔法蓝发光 */
  filter: blur(50px);
  /* 模糊 */
  opacity: 0.1;
  /* 极淡透明 */
  border-radius: 3rem;
  /* 圆角 */
}

.preview-frame {
  position: relative;
  /* 相对定位 */
  background: white;
  /* 纯白 */
  border: 0.4rem solid #f1f5f9;
  /* 卡通厚边框 */
  border-radius: clamp(1.5rem, 5vw, 2.5rem);
  /* 圆角 */
  padding: 0.75rem;
  /* 内边距 */
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.1);
  /* 柔和阴影 */
}

.preview-img {
  width: 100%;
  /* 撑满 */
  height: auto;
  /* 自适应 */
  display: block;
  /* 块级 */
  border-radius: clamp(0.75rem, 2vw, 1.5rem);
  /* 图片圆角 */
}
</style>
