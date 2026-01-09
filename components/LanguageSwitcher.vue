<template>
  <div class="language-switcher" ref="switcherRef">
    <button 
      class="switcher-btn"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-label="t('language.switch')"
    >
      <svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span class="current-lang">{{ currentLocaleLabel }}</span>
      <svg class="chevron-icon" :class="{ 'rotate': isOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>
    
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown-menu" role="listbox">
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          class="dropdown-item"
          :class="{ 'active': loc.code === currentLocale }"
          role="option"
          :aria-selected="loc.code === currentLocale"
          @click="switchLocale(loc.code)"
        >
          <span class="locale-name">{{ loc.name }}</span>
          <svg v-if="loc.code === currentLocale" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const switcherRef = ref(null)

// 当前语言代码
const currentLocale = computed(() => locale.value)

// 当前语言显示名称
const currentLocaleLabel = computed(() => {
  return locale.value === 'zh-CN' ? '中文' : 'EN'
})

// 可用语言列表
const availableLocales = computed(() => {
  return locales.value.map(l => ({
    code: l.code,
    name: l.name
  }))
})

// 切换下拉菜单
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// 切换语言
const switchLocale = async (code) => {
  if (code !== locale.value) {
    await navigateTo(switchLocalePath(code))
  }
  isOpen.value = false
}

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

// 按 Escape 键关闭
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-flex;
}

.switcher-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--slate-200);
  border-radius: 0.5rem;
  background-color: var(--white);
  color: var(--slate-600);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.switcher-btn:hover {
  border-color: var(--slate-300);
  background-color: var(--slate-50);
  color: var(--slate-800);
}

.switcher-btn:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.globe-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.current-lang {
  min-width: 1.5rem;
}

.chevron-icon {
  width: 0.875rem;
  height: 0.875rem;
  transition: transform 0.2s ease;
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 140px;
  padding: 0.375rem;
  background-color: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--slate-600);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.dropdown-item:hover {
  background-color: var(--slate-100);
  color: var(--slate-900);
}

.dropdown-item.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.dropdown-item.active:hover {
  background-color: var(--primary-color);
}

.locale-name {
  flex: 1;
  text-align: left;
}

.check-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}

/* 移动端适配 */
@media (max-width: 640px) {
  .current-lang {
    display: none;
  }
  
  .switcher-btn {
    padding: 0.5rem;
  }
  
  .chevron-icon {
    display: none;
  }
}
</style>
