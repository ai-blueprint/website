<template>
    <section id="roadmap" class="roadmap"> <!-- 开发计划区域 -->
        <div class="container"> <!-- 内容定宽容器 -->
            <header class="section-header" v-motion :initial="{ opacity: 0, scale: 0.8 }" :visibleOnce="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250 } }"> <!-- 快速入场动画 -->
                <h2 class="section-title">我们的进化蓝图</h2> <!-- 卡通风格标题 -->
                <p class="section-description"> <!-- 副标题描述 -->
                    让 AI 学习变得像玩积木一样简单有趣，以下是我们要实现的超级功能
                </p>
            </header>

            <div class="roadmap-list"> <!-- 计划项流式布局 -->
                <div v-for="(roadmapItem, itemIndex) in roadmapList" :key="itemIndex" class="roadmap-card" :class="roadmapItem.colorTheme" v-motion :initial="{ opacity: 0, scale: 0.5, y: 20 }" :visibleOnce="{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { delay: itemIndex * 50, type: 'spring', stiffness: 300 }
                }" :hovered="{ scale: 1.05, y: -8 }"> <!-- 紧凑布局的彩色卡片 -->
                    <div class="status-wrap"> <!-- 状态包裹层 -->
                        <div class="status-badge"> <!-- 卡通状态标签 -->
                            {{ roadmapItem.statusText }} <!-- 显著的 emoji -->
                        </div>
                    </div>
                    <h3 class="item-title">{{ roadmapItem.title }}</h3> <!-- 计划标题 -->
                    <p class="item-description">{{ roadmapItem.description }}</p> <!-- 计划描述 -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// --- 算子层：定义计划数据 ---
const roadmapList = [                                                   // 使用用户提供的新配色
    {
        title: "魔法编辑器 1.0",
        description: "基础节点拖拽、连线及 PyTorch 代码一键生成功能。",
        statusText: "✅ 已解锁",
        colorTheme: "theme-teal"                                            // #75cdbc
    },
    {
        title: "实时数据超能力",
        description: "在节点间实时看清数据的大小和流动，像拥有透视眼一样调试架构。",
        statusText: "⚡ 进化中",
        colorTheme: "theme-orange"                                          // #ef8f68
    },
    {
        title: "架构性能大比拼",
        description: "一键测试你的模型跑得有多快，给你的 AI 设计打个分吧！",
        statusText: "🚀 计划中",
        colorTheme: "theme-blue"                                            // #82cbfa
    },
    {
        title: "创意分享乐园",
        description: "发布你的天才蓝图，让全世界看到你的作品，还可以魔改别人的哦！",
        statusText: "🌟 计划中",
        colorTheme: "theme-purple"                                          // #bb6ef7
    },
    {
        title: "全球荣耀榜",
        description: "凭实力登上跑分排行榜，成为社区里最闪耀的 AI 架构大师。",
        statusText: "🏆 计划中",
        colorTheme: "theme-green"                                           // #a0d45c
    }
];
</script>

<style scoped>
.roadmap {
    padding: clamp(3rem, 8vw, 6rem) 0;
    /* 缩小上下边距 */
    background-color: #ffffff;
    /* 纯白背景 */
}

.container {
    max-width: 1100px;
    /* 缩小容器宽度 */
    margin: 0 auto;
    padding: 0 1.25rem;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
    /* 缩小下边距 */
}

.section-title {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    /* 缩小标题字号 */
    font-weight: 900;
    color: var(--slate-900);
    margin-bottom: 1rem;
}

.section-description {
    font-size: clamp(0.95rem, 2.5vw, 1.125rem);
    /* 缩小描述字号 */
    color: #64748b;
    max-width: 40rem;
    margin: 0 auto;
}

.roadmap-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    /* 缩小卡片间距 */
}

.roadmap-card {
    position: relative;
    padding: 2rem 1.5rem;
    /* 缩小内边距 */
    border-radius: 2rem;
    /* 维持卡通圆角 */
    color: white;
    overflow: hidden;
    cursor: pointer;
    flex: 1 1 280px;
    /* 缩小基础宽度 */
    max-width: 320px;
    /* 缩小最大宽度 */
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.05);
    /* 减薄卡通阴影 */
}

/* --- 应用新卡通配色 (#75cdbc, #ef8f68, #82cbfa, #bb6ef7, #a0d45c) --- */
.theme-teal {
    background-color: #75cdbc;
}

.theme-orange {
    background-color: #ef8f68;
}

.theme-blue {
    background-color: #82cbfa;
}

.theme-purple {
    background-color: #bb6ef7;
}

.theme-green {
    background-color: #a0d45c;
}

.status-wrap {
    margin-bottom: 1.25rem;
    /* 缩小间距 */
}

.status-badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    /* 缩小内边距 */
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 1rem;
    font-size: 1.25rem;
    /* 适度缩小 emoji */
    font-weight: 900;
    border: 2px solid rgba(255, 255, 255, 0.4);
}

.item-title {
    font-size: 1.5rem;
    /* 缩小标题字号 */
    font-weight: 900;
    margin-bottom: 0.75rem;
}

.item-description {
    font-size: 1rem;
    /* 缩小描述字号 */
    line-height: 1.5;
    opacity: 0.95;
    font-weight: 700;
    /* 加粗字体 */
}
</style>
