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
    /* 上下内边距 */
}

.container {
    max-width: 960px;
    /* 内容最大宽度 */
    margin: 0 auto;
    /* 水平居中 */
    padding: 0 1.5rem;
    /* 左右安全边距 */
    text-align: center;
    /* 内容居中 */
}

.sectionTitle {
    font-size: 1.5rem;
    /* 区域标题字号 */
    font-weight: 700;
    /* 粗体 */
    color: var(--gray-800);
    /* 深灰色文字 */
    margin-bottom: 0.75rem;
    /* 与装饰线间距 */
}

.titleUnderline {
    width: 2rem;
    /* 装饰线宽度 */
    height: 3px;
    /* 装饰线高度 */
    background-color: var(--indigo-500);
    /* 靛蓝色装饰线 */
    margin: 0 auto 3rem;
    /* 居中并留下间距 */
    border-radius: 2px;
    /* 微圆角 */
}

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
