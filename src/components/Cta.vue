<template>
  <section id="cta" class="cta">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">准备好开始炼丹了吗</h2>
        <p class="cta-description">下载安装，打开即用。无需配置环境，简单便捷。</p>
        <a href="#" class="btn-cta">下载·敬请期待</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组合式 API 逻辑
</script>

<style scoped>
.cta {
  padding: 5rem 0;
  background-color: var(--white);
}

@media (min-width: 1024px) {
  .cta {
    padding: 6rem 0;
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

.cta-content {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .cta-title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
}

.cta-description {
  font-size: 1.125rem;
  color: var(--slate-500);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.btn-cta {
  display: inline-block;
  padding: 1.25rem 2.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--blue-600) 0%, var(--purple-600) 100%);
  color: var(--white);
  font-weight: 700;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.btn-cta:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>