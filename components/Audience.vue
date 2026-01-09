<!--
  目标用户板块组件
  与原版网站 https://aib.hujiarong.site/ 样式保持一致
  - 无标题
  - 两个卡片并排，蓝色和紫色渐变背景
-->
<template>
  <section id="audience" class="audience">
    <div class="container">
      <div class="audience-grid">
        <div 
          v-for="(group, index) in localizedGroups" 
          :key="index"
          class="audience-card"
          :class="index === 0 ? 'card-blue' : 'card-purple'"
        >
          <h3 class="audience-title">{{ group.title }}</h3>
          <ul class="audience-list">
            <li v-for="(point, pointIndex) in group.points" :key="pointIndex" class="audience-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()

// 获取本地化的目标用户列表
const localizedGroups = computed(() => {
  return [
    {
      title: t('audience.items[0].title'),
      points: [
        t('audience.items[0].points[0]'),
        t('audience.items[0].points[1]'),
        t('audience.items[0].points[2]')
      ]
    },
    {
      title: t('audience.items[1].title'),
      points: [
        t('audience.items[1].points[0]'),
        t('audience.items[1].points[1]'),
        t('audience.items[1].points[2]')
      ]
    }
  ]
})
</script>

<style scoped>
/* 板块容器 */
.audience {
  padding: 5rem 0;
  background-color: var(--slate-50);
}

@media (min-width: 1024px) {
  .audience {
    padding: 7rem 0;
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

/* 卡片网格 - 两列并排 */
.audience-grid {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  border-radius: 1.5rem;
  overflow: hidden;
}

@media (min-width: 768px) {
  .audience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 卡片基础样式 */
.audience-card {
  padding: 3rem 2.5rem;
  color: white;
}

@media (min-width: 1024px) {
  .audience-card {
    padding: 4rem 3rem;
  }
}

/* 蓝色卡片 - AI初学者 */
.card-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
}

/* 紫色卡片 - 算法工程师 */
.card-purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
}

/* 用户群体标题 */
.audience-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
}

@media (min-width: 768px) {
  .audience-title {
    font-size: 2rem;
  }
}

/* 使用场景列表 */
.audience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* 单个使用场景项 */
.audience-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .audience-item {
    font-size: 1.0625rem;
  }
}

/* 勾选图标 */
.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.9);
}
</style>
