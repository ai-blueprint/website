<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section logo-section">
          <div class="footer-logo">
            <div class="logo-icon">
              <img src="../assets/images/logo.svg" alt="炼丹蓝图LOGO - AI架构设计工具"/>
            </div>
            <span class="logo-text">炼丹蓝图</span>
          </div>
          <p class="logo-description">
            致力于降低 AI 架构创新门槛，<br class="desktop-only">
            让每个人都能成为 AI 架构师。
          </p>
        </div>

        <div class="footer-section">
          <h4 class="section-title">产品</h4>
          <ul class="section-list">
            <li><a href="#" class="list-item">开放社区</a></li>
            <li><a href="#" class="list-item">架构擂台</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="section-title">资源</h4>
          <ul class="section-list">
            <li><a href="#" class="list-item">官方文档</a></li>
            <li><a href="#" class="list-item">组件市场</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="section-title">联系</h4>
          <ul class="section-list">
            <li><a href="#" class="list-item"> QQ 群</a></li>
            <li><a href="#" class="list-item">微信群</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© 2025 AI Blueprint. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link"></a>
          <a href="#" class="social-link"></a>
          <a href="#" class="social-link"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 组合式 API 逻辑
</script>

<style scoped>
.footer {
  background-color: var(--slate-50);
  border-top: 1px solid var(--slate-200);
  padding: 4rem 0 2rem;
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

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
}

.logo-section {
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .logo-section {
    grid-column: auto;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.logo-icon,.logo-icon img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.375rem;
}

.logo-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--slate-800);
}

.logo-description {
  font-size: 0.875rem;
  color: var(--slate-400);
  line-height: 1.5;
  max-width: 20rem;
}

.section-title {
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.section-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.list-item {
  font-size: 0.875rem;
  color: var(--slate-500);
  transition: color 0.3s ease;
}

.list-item:hover {
  color: var(--blue-600);
}

.footer-bottom {
  border-top: 1px solid var(--slate-200);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.copyright {
  font-size: 0.875rem;
  color: var(--slate-400);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--slate-200);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: var(--slate-300);
}
</style>