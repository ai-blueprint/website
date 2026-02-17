<template>
    <section id="progress"> <!-- 开发进度区域 -->
        <div class="container"> <!-- 内容定宽容器 -->
            <h2 class="sectionTitle">开发进度</h2> <!-- 区域主标题 -->
            <div class="titleUnderline"></div> <!-- 标题下方装饰线 -->

            <div class="progressGrid"> <!-- 2x2进度卡片网格 -->
                <div v-for="(item, index) in progressList" :key="index" class="progressCard" :class="item.theme"> <!-- 进度卡片，直接用flex布局 -->
                    <svg class="statusIcon" viewBox="0 0 24 24" fill="none"> <!-- 状态图标 -->
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" /> <!-- 外圈 -->
                        <path v-if="item.icon === 'check'" d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> <!-- 勾选 -->
                        <polygon v-if="item.icon === 'play'" points="10,8 16,12 10,16" fill="currentColor" /> <!-- 播放 -->
                        <path v-if="item.icon === 'link'" d="M10 13a3 3 0 003 0l1-1a3 3 0 00-3-3l-1 1m2-1a3 3 0 00-3 0l-1 1a3 3 0 003 3l1-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /> <!-- 链接 -->
                    </svg>
                    <span class="cardText">{{ item.text }}</span> <!-- 进度文字 -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// --- 算子层：定义进度数据 ---
const progressList = [                                                   // 开发进度列表
    { text: '调研选型完成', theme: 'themeIndigo', icon: 'check' },      // 已完成
    { text: 'MVP试验开发结束', theme: 'themeIndigo', icon: 'check' },      // 已完成
    { text: '开发正式工具', theme: 'themeOrange', icon: 'play' },       // 进行中
    { text: '架构开源社区开发', theme: 'themeGray', icon: 'link' }        // 计划中
];
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
    /* 标题居中 */
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

.progressGrid {
    display: grid;
    /* 网格布局 */
    grid-template-columns: repeat(2, 1fr);
    /* 两列等宽 */
    gap: 1.25rem;
    /* 卡片间距 */
}

@media (max-width: 640px) {
    .progressGrid {
        grid-template-columns: 1fr;
        /* 小屏单列 */
    }
}

.progressCard {
    display: flex;
    /* 横向排列图标和文字 */
    align-items: center;
    /* 垂直居中 */
    gap: 0.75rem;
    /* 图标与文字间距 */
    border-radius: 0.75rem;
    /* 圆角 */
    padding: 2rem 1.5rem;
    /* 内边距 */
    color: white;
    /* 白色文字 */
    transition: transform 0.2s;
    /* 变换过渡 */
}

.progressCard:hover {
    transform: translateY(-2px);
    /* 悬停微浮 */
}

.themeIndigo {
    background-color: var(--indigo-300);
}

/* 靛蓝色背景 */
.themeOrange {
    background-color: var(--orange-400);
}

/* 橙色背景 */
.themeGray {
    background-color: var(--gray-400);
}

/* 灰色背景 */

.statusIcon {
    width: 1.75rem;
    /* 图标宽度 */
    height: 1.75rem;
    /* 图标高度 */
    flex-shrink: 0;
    /* 防止压缩 */
    color: rgba(255, 255, 255, 0.9);
    /* 白色半透明 */
}

.cardText {
    font-size: 1.0625rem;
    /* 文字大小 */
    font-weight: 600;
    /* 半粗体 */
}
</style>
