<template>
  <section id="cta" class="cta" role="complementary" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta-content">
        <h2 id="cta-title" class="cta-title">{{ t('cta.title') }}</h2>
        <p class="cta-description">
          {{ t('cta.subtitle') }}
        </p>
        <a 
          href="#download" 
          class="cta-button"
          role="button"
          :aria-label="t('cta.button')"
        >
          {{ t('cta.button') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-purple) 100%);
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
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
  text-align: center;
  color: var(--white);
}

.cta-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .cta-title {
    font-size: 3rem;
  }
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .cta-description {
    font-size: 1.25rem;
  }
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--white);
  color: var(--secondary-color);
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.cta-button:hover {
  transform: translateY(-0.125rem);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-button:focus {
  outline: 2px solid var(--white);
  outline-offset: 2px;
}
</style>
