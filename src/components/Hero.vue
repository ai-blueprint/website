<template>
  <section class="hero" role="banner" aria-label="主页横幅">
    <!-- 顶部背景光晕 -->
    <div class="blob blob-blue" aria-hidden="true"></div>
    <div class="blob blob-purple" aria-hidden="true"></div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-badge" role="status" aria-live="polite">
          <span class="badge-indicator"></span>
          内测阶段即将开始！
        </div>

        <h1 class="hero-title">
          AI 架构设计<br />
          <span class="gradient-text">从未如此优雅简单</span>
        </h1>

        <p class="hero-description">
          用蓝图的形式设计AI架构。拖拽节点、连线，<br class="desktop-only" />
          让灵感在"炼丹蓝图"中瞬间转化为可运行的模型代码。
        </p>

        <!-- 编辑器界面展示 -->
        <article
          class="editor-container float-animation"
          aria-label="编辑器预览"
        >
          <!-- 装饰性背景块 -->
          <div class="editor-background" aria-hidden="true"></div>

          <!-- 主截图容器 -->
          <div class="editor-screenshot">
            <img
              src="../assets/images/editor.svg"
              alt="炼丹蓝图编辑器界面预览：展示AI架构可视化设计工具"
              width="100%"
              height="100%"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组合式 API 逻辑
</script>

<style scoped>
.hero {
  position: relative;
  padding: 8rem 0 5rem;
  text-align: center;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .hero {
    padding: 10rem 0 7rem;
  }
}

.blob {
  position: absolute;
  filter: blur(80px);
  z-index: -1;
  opacity: 0.6;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
}

.blob-blue {
  background-color: var(--blue-200);
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.blob-purple {
  background-color: var(--purple-200);
  top: 0;
  right: 0;
  transform: translate(33%, -50%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

.hero-content {
  max-width: 56rem;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--blue-50);
  border: 1px solid var(--blue-100);
  color: var(--blue-600);
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.badge-indicator {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
}

.badge-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--blue-500);
  border-radius: 50%;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.badge-indicator::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--blue-500);
  border-radius: 50%;
}

@keyframes ping {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 5rem;
  }
}

.gradient-text {
  background: linear-gradient(
    135deg,
    var(--secondary-color) 0%,
    var(--accent-purple) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--slate-500);
  margin-bottom: 4rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.25rem;
  }
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
}

@media (min-width: 640px) {
  .hero-actions {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 6rem;
  }
}

.btn {
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(
    135deg,
    var(--secondary-color) 0%,
    var(--accent-purple) 100%
  );
  color: var(--white);
  box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.15);
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.btn-secondary {
  background: var(--white);
  color: var(--slate-700);
  border: 1px solid var(--slate-200);
}

.btn-secondary:hover {
  background: var(--slate-50);
}

.btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.editor-container {
  position: relative;
  max-width: 64rem;
  margin: 0 auto;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.editor-background {
  position: absolute;
  inset: -0.25rem;
  background: linear-gradient(
    135deg,
    var(--blue-400) 0%,
    var(--purple-400) 100%
  );
  border-radius: 1.5rem;
  opacity: 0.2;
  filter: blur(1rem);
}

.editor-screenshot {
  position: relative;
  background-color: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.editor-toolbar {
  height: 2.5rem;
  background-color: var(--slate-50);
  border-bottom: 1px solid var(--slate-100);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 0.5rem;
}

.toolbar-buttons {
  display: flex;
  gap: 0.375rem;
}

.toolbar-button {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.toolbar-button-red {
  background-color: var(--red-400);
}

.toolbar-button-yellow {
  background-color: var(--yellow-400);
}

.toolbar-button-green {
  background-color: var(--green-400);
}

.toolbar-title {
  margin-left: 1rem;
  width: 16rem;
  height: 1.25rem;
  background-color: var(--slate-200);
  border-radius: 0.375rem;
}

.editor-content {
  flex: 1;
  display: flex;
  background-color: var(--slate-50);
  position: relative;
}

.editor-sidebar {
  width: 16rem;
  border-right: 1px solid var(--slate-200);
  background-color: var(--white);
  padding: 1rem;
  display: none;
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .editor-sidebar {
    display: flex;
  }
}

.sidebar-item {
  height: 2rem;
  background-color: var(--slate-100);
  border-radius: 0.5rem;
}

.sidebar-item-blue {
  background-color: var(--blue-50);
  width: 100%;
}

.sidebar-item:nth-child(2) {
  width: 75%;
}

.sidebar-item:nth-child(3) {
  width: 83%;
}

.sidebar-item:nth-child(4) {
  width: 100%;
}

.editor-canvas {
  flex: 1;
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.canvas-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--slate-300) 1px, transparent 1px);
  background-size: 1.25rem 1.25rem;
  opacity: 0.5;
}

.canvas-node {
  position: absolute;
  width: 10rem;
  height: 6rem;
  background-color: var(--white);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.node-input {
  top: 33%;
  left: 25%;
  border: 2px solid var(--blue-400);
}

.node-hidden {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--slate-200);
}

.node-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.node-label-purple {
  color: var(--purple-500);
}

.node-input .node-label {
  color: var(--blue-500);
}

.node-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

.node-icon-blue {
  background-color: var(--blue-100);
}

.node-icon-purple {
  background-color: var(--purple-100);
}

.canvas-connections {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.editor-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.05);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.editor-screenshot:hover .editor-overlay {
  background-color: rgba(15, 23, 42, 0);
}

.overlay-text {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate-500);
  transition: opacity 0.3s ease;
}

.editor-screenshot:hover .overlay-text {
  opacity: 0;
}
</style>
