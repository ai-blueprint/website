<template>
  <section id="features" class="features">
    <div class="container">
      <div class="features-header">
        <h2 class="features-title">化繁为简，专注创新</h2>
        <p class="features-description">无论是初学者还是资深算法工程师，炼丹蓝图都能为你提供最流畅的架构设计体验。</p>
      </div>

      <div class="features-grid">
        <!-- 卡片 1 -->
        <div class="feature-card">
          <div class="card-icon card-icon-blue">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h3 class="card-title">蓝图式可视化</h3>
          <p class="card-description">
            不需要代码。通过直观的节点拖拽和连线，清晰呈现数据流向，像搭积木一样组装复杂的AI底层架构。
          </p>
        </div>

        <!-- 卡片 2 -->
        <div class="feature-card">
          <div class="card-icon card-icon-purple">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <h3 class="card-title">丰富的 AI 组件库</h3>
          <p class="card-description">
            内置数百种 AI 底层计算组件，即拖即用。支持自定义封装模块，复用你的独家“丹方”。
          </p>
        </div>

        <!-- 卡片 3 -->
        <div class="feature-card">
          <div class="card-icon card-icon-teal">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="card-title">实时数据展示</h3>
          <p class="card-description">
            实时计算多样数据在您设计的架构下的流通情况，自动发现问题，可单独查看某个节点的输出数据并可视化展示。
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>


<style scoped>
.features {
  padding: 6rem 0;
  background-color: var(--white);
}

@media (min-width: 1024px) {
  .features {
    padding: 8rem 0;
  }
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

.features-header {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 4rem;
}

@media (min-width: 1024px) {
  .features-header {
    margin-bottom: 5rem;
  }
}

.features-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .features-title {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
}

.features-description {
  font-size: 1.125rem;
  color: var(--slate-500);
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

.feature-card {
  padding: 2rem;
  border-radius: 1.5rem;
  background-color: var(--slate-50);
  border: 1px solid var(--slate-100);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.15);
}

.card-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.card-icon-blue {
  background-color: var(--blue-100);
  color: var(--blue-600);
}

.feature-card:hover .card-icon-blue {
  background-color: var(--blue-500);
  color: var(--white);
}

.card-icon-purple {
  background-color: var(--purple-100);
  color: var(--purple-600);
}

.feature-card:hover .card-icon-purple {
  background-color: var(--purple-500);
  color: var(--white);
}

.card-icon-teal {
  background-color: var(--teal-100);
  color: var(--teal-600);
}

.feature-card:hover .card-icon-teal {
  background-color: var(--teal-500);
  color: var(--white);
}

.icon-svg {
  width: 1.75rem;
  height: 1.75rem;
  transition: all 0.3s ease;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--slate-800);
  margin-bottom: 0.75rem;
}

.card-description {
  color: var(--slate-500);
  line-height: 1.6;
}
</style>