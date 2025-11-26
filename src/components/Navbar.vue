<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <!-- LOGO 区域 -->
        <div class="navbar-logo">
          <div class="logo-icon">
            <img src="../assets/images/logo.svg" alt="炼丹蓝图LOGO">
          </div>
          <span class="logo-text">炼丹蓝图</span>
        </div>

        <!-- 菜单 -->
        <div class="navbar-menu">
          <a href="#features" class="menu-item">核心功能</a>
          <a href="#audience" class="menu-item">目标用户</a>
          <a href="#cta" class="menu-item">立即体验</a>
        </div>

        <!-- 行动按钮 -->
        <div class="navbar-actions">
          <a href="#" class="btn-cta">敬请期待</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 组合式 API 逻辑
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--slate-100);
  transition: all 0.3s ease;
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

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 1rem;
}

.navbar-logo {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon,.logo-icon img {
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: bold;
}

.logo-svg {
  width: 1.5rem;
  height: 1.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--slate-800);
  letter-spacing: -0.025em;
}

.navbar-menu {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) {
  .navbar-menu {
    display: flex;
  }
}

.menu-item {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate-600);
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: var(--primary-color);
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.btn-cta {
  padding: 0.625rem 1.5rem;
  border-radius: 9999px;
  background-color: var(--slate-900);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.btn-cta:hover {
  background-color: var(--slate-800);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>