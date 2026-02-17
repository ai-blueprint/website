<template>
  <footer class="footer"> <!-- 页脚区域 -->
    <p class="copyright">© 炼丹蓝图 2025 - {{ currentYear }}</p> <!-- 版权信息 -->
  </footer>
</template>

<script setup>
// --- 算子层：获取当前年份 ---
const currentYear = new Date().getFullYear();                            // 动态获取当前年份
</script>

<style scoped>
.footer {
  padding: 2.5rem 0;
  /* 上下内边距 */
  text-align: center;
  /* 文字居中 */
}

.copyright {
  font-size: 0.875rem;
  /* 版权文字大小 */
  color: var(--gray-400);
  /* 浅灰色文字 */
}
</style>
