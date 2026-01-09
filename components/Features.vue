<template>
  <section id="features" class="features">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">{{ t('features.title') }}</h2>
        <p class="section-description">{{ t('features.subtitle') }}</p>
      </header>

      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in localizedFeatures"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :color="feature.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()

// 获取本地化的功能列表
const localizedFeatures = computed(() => {
  return [
    {
      title: t('features.items[0].title'),
      description: t('features.items[0].description'),
      icon: t('features.items[0].icon'),
      color: t('features.items[0].color')
    },
    {
      title: t('features.items[1].title'),
      description: t('features.items[1].description'),
      icon: t('features.items[1].icon'),
      color: t('features.items[1].color')
    },
    {
      title: t('features.items[2].title'),
      description: t('features.items[2].description'),
      icon: t('features.items[2].icon'),
      color: t('features.items[2].color')
    }
  ]
})
</script>

<style scoped>
.features {
  padding: 5rem 0;
  background-color: var(--slate-50);
}

@media (min-width: 1024px) {
  .features { padding: 7rem 0; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .section-title { font-size: 3rem; }
}

.section-description {
  font-size: 1.125rem;
  color: var(--slate-500);
  max-width: 42rem;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .features-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
