<template>
    <section id="prototype"> <!-- 设计原型展示区域 -->
        <div class="container"> <!-- 内容定宽容器 -->
            <h2 class="sectionTitle">设计原型</h2> <!-- 区域主标题 -->
            <div class="titleUnderline"></div> <!-- 标题下方装饰线 -->

            <div class="previewFrame"> <!-- 编辑器预览外框 -->
                <img src="/images/editor.svg" alt="炼丹蓝图编辑器预览" class="previewImage"> <!-- 编辑器截图 -->
            </div>

            <div class="prototypeActions"> <!-- 体验入口按钮区域 -->
                <a href="https://editor.lingloft.cn/" target="_blank" rel="noopener noreferrer" class="experienceButton">打开在线编辑器体验</a> <!-- 外链打开在线编辑器，减少用户寻找入口成本 -->
            </div>
            <div class="vtuberShowcase"> <!-- VTuber形象展示区 -->
                <img src="/images/VTuberLogo.svg" alt="炼丹蓝图 VTuber 形象展示" class="vtuberImage"> <!-- 首页大图展示，突出品牌形象 -->
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

.prototypeActions {
    margin-top: 1.25rem;
    /* 与截图留出呼吸空间 */
    display: flex;
    /* 弹性布局方便居中 */
    justify-content: center;
    /* 按钮水平居中 */
}

.experienceButton {
    padding: 0.7rem 1.5rem;
    /* 按钮内边距 */
    border-radius: 0.65rem;
    /* 圆角与站点风格统一 */
    background-color: var(--accent);
    /* 强调色背景 */
    color: #ffffff;
    /* 白色文字提高对比度 */
    font-size: 0.9375rem;
    /* 文本尺寸和首页按钮一致 */
    font-weight: 600;
    /* 半粗体，突出可点击性 */
    text-decoration: none;
    /* 去掉下划线 */
    box-shadow: 0 0 10px rgba(141, 168, 255, 0.3);
    /* 轻微发光，增强视觉引导 */
    transition: filter 0.2s;
    /* 悬停提亮过渡 */
}

.experienceButton:hover {
    filter: brightness(1.1);
    /* 悬停时轻微提亮，给出交互反馈 */
}

.vtuberShowcase {
    margin-top: 2.5rem;
    /* 与体验按钮拉开层级间距 */
    overflow: hidden;
    /* 裁剪超出内容，保证圆角生效 */
}

.vtuberImage {
    display: block;
    /* 变为块级元素，消除默认底部空隙 */
    width: 100%;
    /* 大图自适应容器宽度 */
    height: auto;
    /* 按比例缩放，避免拉伸 */
}
</style>
