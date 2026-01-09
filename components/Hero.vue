<template>
  <section class="hero" role="banner" aria-label="主页横幅">
    <div class="blob blob-blue" aria-hidden="true"></div>
    <div class="blob blob-purple" aria-hidden="true"></div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-badge" role="status" aria-live="polite">
          <span class="badge-indicator"></span>
          {{ t('hero.badge') }}
        </div>

        <h1 class="hero-title">
          {{ t('hero.title') }}<br />
          <span class="gradient-text">{{ t('hero.subtitle') }}</span>
        </h1>

        <p class="hero-description">
          {{ t('hero.description') }}
        </p>

        <article class="editor-container float-animation" aria-label="编辑器预览">
          <div class="editor-background" aria-hidden="true"></div>
          <div class="editor-screenshot">
            <img
              src="/images/editor.svg"
              :alt="t('site.name') + ' 编辑器界面预览'"
              loading="eager"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.hero {
  position: relative;
  padding: 8rem 0 5rem;
  text-align: center;
  overflow: hidden;
}

@media (min-width: 1024px) { .hero { padding: 10rem 0 7rem; } }

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

.badge-indicator::before,
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

.badge-indicator::before {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (min-width: 768px) { .hero-title { font-size: 4rem; } }
@media (min-width: 1024px) { .hero-title { font-size: 5rem; } }

.gradient-text {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-purple) 100%);
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

@media (min-width: 768px) { .hero-description { font-size: 1.25rem; } }

.desktop-only { display: none; }
@media (min-width: 768px) { .desktop-only { display: block; } }

.editor-container {
  position: relative;
  max-width: 64rem;
  margin: 0 auto;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.editor-background {
  position: absolute;
  inset: -0.25rem;
  background: linear-gradient(135deg, var(--blue-400) 0%, var(--purple-400) 100%);
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
  line-height: 0;
}

.editor-screenshot img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
