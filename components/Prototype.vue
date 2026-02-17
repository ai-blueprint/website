<template>
    <section id="prototype"> <!-- 设计原型展示区域 -->
        <div class="container"> <!-- 内容定宽容器 -->
            <h2 class="sectionTitle">设计原型</h2> <!-- 区域主标题 -->
            <div class="titleUnderline"></div> <!-- 标题下方装饰线 -->

            <div class="previewFrame"> <!-- 编辑器预览外框 -->
                <img src="/images/editor.svg" alt="炼丹蓝图编辑器预览" class="previewImage"> <!-- 编辑器截图 -->
            </div>
        </div>
    </section>
</template>

<script setup>
// 纯静态展示，无需逻辑                                                    // 保持组件简洁
</script>

<style scoped>
section {
    padding: 5rem 0;
}

/* 区块上下内边距 */

.previewFrame {
    border-radius: 0.75rem;
    /* 圆角 */
    overflow: hidden;
    /* 裁剪溢出 */
    border: 1px solid var(--gray-200);
    /* 浅灰边框 */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    /* 柔和阴影 */
}

.previewImage {
    width: 100%;
    /* 撑满容器 */
    height: auto;
    /* 自适应高度 */
    display: block;
    /* 块级消除间隙 */
}
</style>
