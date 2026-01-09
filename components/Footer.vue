<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <!-- Logo和简介 -->
        <div class="footer-brand">
          <div class="brand-logo">
            <NuxtImg
              src="/logo.svg"
              :alt="t('site.name')"
              width="32"
              height="32"
              loading="lazy"
            />
            <span class="brand-name">{{ t('site.name') }}</span>
          </div>
          <p class="brand-description">
            <template v-for="(line, index) in descriptionLines" :key="index">
              {{ line }}<br v-if="index < descriptionLines.length - 1" />
            </template>
          </p>
        </div>

        <!-- 导航链接 -->
        <nav class="footer-links" aria-label="页脚导航">
          <div class="link-group">
            <h3 class="link-title">{{ t('footer.links.product.title') }}</h3>
            <ul class="link-list" role="list">
              <li v-for="(item, index) in productLinks" :key="index">
                <a :href="item.url">{{ item.name }}</a>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h3 class="link-title">{{ t('footer.links.resources.title') }}</h3>
            <ul class="link-list" role="list">
              <li v-for="(item, index) in resourceLinks" :key="index">
                <a :href="item.url">{{ item.name }}</a>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h3 class="link-title">{{ t('footer.links.contact.title') }}</h3>
            <ul class="link-list" role="list">
              <li v-for="(item, index) in contactLinks" :key="index">
                <a :href="item.url">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <p class="copyright">
          {{ t('footer.copyright') }}
        </p>
        <div class="social-links" role="list" aria-label="社交媒体链接">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()

// 获取本地化的页脚链接
const productLinks = computed(() => [
  { name: t('footer.links.product.items[0].name'), url: t('footer.links.product.items[0].url') },
  { name: t('footer.links.product.items[1].name'), url: t('footer.links.product.items[1].url') }
])

const resourceLinks = computed(() => [
  { name: t('footer.links.resources.items[0].name'), url: t('footer.links.resources.items[0].url') },
  { name: t('footer.links.resources.items[1].name'), url: t('footer.links.resources.items[1].url') }
])

const contactLinks = computed(() => [
  { name: t('footer.links.contact.items[0].name'), url: t('footer.links.contact.items[0].url') },
  { name: t('footer.links.contact.items[1].name'), url: t('footer.links.contact.items[1].url') }
])

// 按逗号分隔描述文本，实现换行显示
const descriptionLines = computed(() => {
  const description = t('footer.description')
  // 中文用中文逗号分隔，英文用英文逗号分隔
  if (description.includes('，')) {
    return description.split('，').map((line, index, arr) =>
      index < arr.length - 1 ? line + '，' : line
    )
  } else if (description.includes(', ')) {
    return description.split(', ').map((line, index, arr) =>
      index < arr.length - 1 ? line + ',' : line
    )
  }
  return [description]
})
</script>

<style scoped>
.footer {
  background-color: var(--slate-900);
  color: var(--slate-300);
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
  gap: 3rem;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 2fr 3fr;
  }
}

.footer-brand {
  max-width: 24rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
}

.brand-description {
  color: var(--slate-400);
  line-height: 1.6;
}

.footer-links {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-list a {
  color: var(--slate-400);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.875rem;
}

.link-list a:hover {
  color: var(--white);
}

.link-list a:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
  border-radius: 0.25rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--slate-800);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.copyright {
  font-size: 0.875rem;
  color: var(--slate-500);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: var(--slate-400);
  transition: color 0.2s ease;
}

.social-links a:hover {
  color: var(--white);
}

.social-links a:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
  border-radius: 0.25rem;
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
