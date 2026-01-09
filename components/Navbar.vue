<template>
  <nav class="navbar" role="navigation" :aria-label="t('nav.features')">
    <div class="container">
      <div class="navbar-content">
        <NuxtLink :to="localePath('/')" class="logo-link" :aria-label="t('site.name')">
          <img src="/logo.svg" :alt="t('site.name') + ' LOGO'" class="logo-icon" width="40" height="40">
          <span class="logo-text">{{ t('site.name') }}</span>
        </NuxtLink>

        <nav class="navbar-menu" aria-label="页面导航">
          <a href="#features" class="menu-item">{{ t('nav.features') }}</a>
          <a href="#audience" class="menu-item">{{ t('nav.audience') }}</a>
          <a href="#cta" class="menu-item">{{ t('nav.tryNow') }}</a>
        </nav>

        <div class="navbar-actions">
          <LanguageSwitcher />
          <a href="#" class="btn-cta">{{ t('nav.download') }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--slate-800);
}

.navbar-menu {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) { .navbar-menu { display: flex; } }

.menu-item {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate-600);
  transition: color 0.3s ease;
}

.menu-item:hover { color: var(--primary-color); }

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-cta {
  padding: 0.625rem 1.5rem;
  border-radius: 9999px;
  background-color: var(--slate-900);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-cta:hover {
  background-color: var(--slate-800);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 移动端隐藏下载按钮文字 */
@media (max-width: 640px) {
  .btn-cta {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
