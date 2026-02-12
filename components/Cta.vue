<template>
  <section id="cta" class="cta"> <!-- 行动召唤区域 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <div class="cta-content"> <!-- 文字内容区 -->
        <h2 class="cta-title" v-motion :initial="{ opacity: 0, scale: 0.95 }" :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { type: 'spring', stiffness: 200, damping: 20 }
        }"> <!-- 标题平滑弹出 -->
          准备好开启你的 AI 魔法冒险了吗？
        </h2>
        <p class="cta-description" v-motion :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"> <!-- 描述平滑滑入 -->
          加入我们的魔法社区，和成千上万的小伙伴一起，用最有趣的方式探索 AI 的奥秘吧！
        </p>
        <div class="cta-actions"> <!-- 按钮组 -->
          <a href="https://github.com/kernyr/bmad" target="_blank" class="btn-action btn-github" v-motion :initial="{ scale: 1 }" :enter="{ scale: 1 }" :hovered="{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- GitHub 按钮平滑放大 -->
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.63-.33 2.47-.33c.83 0 1.68.11 2.47.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
            <span>给项目点个 Star</span>
          </a>
          <a href="https://qm.qq.com/q/EqzcoKCV4O" target="_blank" class="btn-action btn-community" v-motion :initial="{ scale: 1 }" :enter="{ scale: 1 }" :hovered="{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- 社区按钮平滑放大 -->
            <span>进入冒险社区</span>
          </a>
        </div>
      </div>
    </div>
    <div class="cta-decoration-1"></div> <!-- 装饰性大圆圈 -->
    <div class="cta-decoration-2"></div> <!-- 装饰性小圆圈 -->
  </section>
</template>

<script setup>
// 纯静态展示，无需逻辑                                                   // 保持组件简洁
</script>

<style scoped>
.cta {
  padding: clamp(6rem, 15vw, 10rem) 0;
  /* 响应式上下内边距 */
  background-color: #3b82f6;
  /* 明亮纯蓝色 */
  position: relative;
  /* 相对定位 */
  overflow: hidden;
  /* 隐藏溢出内容 */
}

.container {
  max-width: 1200px;
  /* 最大宽度 */
  margin: 0 auto;
  /* 居中 */
  padding: 0 1.5rem;
  /* 左右内边距 */
  position: relative;
  /* 相对定位 */
  z-index: 10;
  /* 确保在装饰层之上 */
}

.cta-content {
  text-align: center;
  /* 文字居中 */
  color: white;
  /* 白色文字 */
}

.cta-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  /* 响应式标题字号 */
  font-weight: 900;
  /* 极粗字重 */
  margin-bottom: 2rem;
  /* 下边距 */
  line-height: 1.2;
  /* 行高 */
}

.cta-description {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  /* 响应式描述字号 */
  margin-bottom: 4rem;
  /* 下边距 */
  opacity: 0.95;
  /* 微透明 */
  max-width: 44rem;
  /* 最大宽度 */
  margin-left: auto;
  /* 居中 */
  margin-right: auto;
  /* 居中 */
  line-height: 1.6;
  /* 行高 */
  font-weight: 700;
  /* 加粗描述 */
}

.cta-actions {
  display: flex;
  /* 弹性布局 */
  flex-wrap: wrap;
  /* 自动换行适配多端 */
  justify-content: center;
  /* 居中 */
  gap: 2rem;
  /* 增加间距 */
}

.btn-action {
  padding: 1.25rem 2.5rem;
  /* 统一按钮内边距 */
  border-radius: 2rem;
  /* 增加圆角 */
  font-weight: 900;
  /* 极粗 */
  text-decoration: none;
  /* 移除下划线 */
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 文字居中 */
  gap: 0.75rem;
  /* 图标文字间距 */
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* 快速弹性过渡效果 */
  flex: 0 1 auto;
  /* 随内容撑开 */
  min-width: 220px;
  /* 最小宽度 */
}

.btn-github {
  background-color: white;
  /* 白色背景 */
  color: #3b82f6;
  /* 品牌色文字 */
  box-shadow: 0 8px 0 #2563eb;
  /* 卡通立体阴影 */
}

.btn-community {
  background-color: rgba(255, 255, 255, 0.2);
  /* 强化透明度 */
  color: white;
  /* 白色文字 */
  border: 0.25rem solid rgba(255, 255, 255, 0.4);
  /* 响应式边框 */
  backdrop-filter: blur(8px);
  /* 增加模糊 */
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.1);
  /* 卡通立体阴影 */
}

.btn-icon {
  width: 1.5rem;
  /* 放大图标 */
  height: 1.5rem;
  /* 放大图标 */
}

.cta-decoration-1 {
  position: absolute;
  /* 绝对定位装饰 */
  top: -10%;
  /* 相对位置 */
  left: -10%;
  /* 相对位置 */
  width: clamp(15rem, 40vw, 30rem);
  /* 响应式尺寸 */
  height: clamp(15rem, 40vw, 30rem);
  /* 响应式尺寸 */
  background: rgba(255, 255, 255, 0.1);
  /* 极淡白背景 */
  border-radius: 50%;
  /* 圆形 */
}

.cta-decoration-2 {
  position: absolute;
  /* 绝对定位装饰 */
  bottom: -5%;
  /* 相对位置 */
  right: -5%;
  /* 相对位置 */
  width: clamp(10rem, 30vw, 20rem);
  /* 响应式尺寸 */
  height: clamp(10rem, 30vw, 20rem);
  /* 响应式尺寸 */
  background: rgba(255, 255, 255, 0.1);
  /* 极淡白背景 */
  border-radius: 50%;
  /* 圆形 */
}
</style>
