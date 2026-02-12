<template>
  <section id="audience" class="audience"> <!-- 适用人群区域 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <div class="audience-layout"> <!-- 弹性布局容器 -->
        <div v-for="(audienceGroup, groupIndex) in audienceList" :key="groupIndex" class="audience-card" :class="groupIndex === 0 ? 'card-blue' : 'card-purple'" v-motion :initial="{ opacity: 0, scale: 0.9, y: 20 }" :visibleOnce="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 200, damping: 20 }
        }" :hovered="{ scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- 自动弹入的卡通卡片 -->
          <h3 class="audience-title">{{ audienceGroup.title }}</h3> <!-- 分组标题 -->
          <ul class="audience-list"> <!-- 特点列表 -->
            <li v-for="(pointText, pointIndex) in audienceGroup.points" :key="pointIndex" class="audience-item" v-motion :initial="{ x: 0 }" :hovered="{ x: 8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 15 } }"> <!-- 列表项悬停微移 -->
              <div class="check-circle"> <!-- 卡通打钩圆圈 -->
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span class="point-text">{{ pointText }}</span> <!-- 特点文字 -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// --- 算子层：定义人群数据 ---
const audienceList = [                                                  // 适用人群数据列表
  {
    title: "AI 小探险家",                                                // 分组名称
    points: [                                                           // 核心收益
      "像玩积木一样玩转 AI",
      "看清数据怎么跑来跑去",
      "变身成为 AI 小专家"
    ]
  },
  {
    title: "算法大魔法师",                                               // 分组名称
    points: [                                                           // 核心收益
      "快速验证你的神奇想法",
      "一键生成标准代码",
      "一眼看懂你的魔法架构"
    ]
  }
];
</script>

<style scoped>
.audience {
  padding: clamp(3rem, 6vw, 5rem) 0;
  /* 显著缩小上下内边距 */
  background-color: #f8fafc;
  /* 极浅灰背景 */
}

.container {
  max-width: 1000px;
  /* 再次缩小容器宽度 */
  margin: 0 auto;
  /* 居中 */
  padding: 0 1.25rem;
  /* 左右内边距 */
}

.audience-layout {
  display: flex;
  /* 弹性布局 */
  flex-wrap: wrap;
  /* 自动换行 */
  gap: 1.5rem;
  /* 缩小卡片间距 */
  justify-content: center;
  /* 居中排列 */
}

.audience-card {
  flex: 1 1 320px;
  /* 显著缩小基础宽度 */
  max-width: 450px;
  /* 限制最大宽度 */
  padding: 2.5rem 2rem;
  /* 显著缩小内边距 */
  color: white;
  /* 白色文字 */
  display: flex;
  /* 弹性布局 */
  flex-direction: column;
  /* 纵向排列 */
  border-radius: 2.5rem;
  /* 适中卡通圆角 */
  box-shadow: 0 12px 0 rgba(0, 0, 0, 0.05);
  /* 立体阴影 */
  border: 0.4rem solid rgba(255, 255, 255, 0.2);
  /* 卡通边框 */
  cursor: pointer;
  /* 手型指针 */
}

.card-blue {
  background-color: #82cbfa;
  /* 使用新配色天蓝 */
}

.card-purple {
  background-color: #bb6ef7;
  /* 使用新配色薰衣草紫 */
}

.audience-title {
  font-size: 1.75rem;
  /* 显著缩小标题字号 */
  font-weight: 900;
  /* 极粗字重 */
  margin-bottom: 1.5rem;
  /* 缩小下边距 */
  text-align: center;
  /* 标题居中 */
}

.audience-list {
  list-style: none;
  /* 移除默认列表样式 */
  padding: 0;
  /* 移除内边距 */
  margin: 0;
  /* 移除外边距 */
  display: flex;
  /* 弹性布局 */
  flex-direction: column;
  /* 纵向排列 */
  gap: 1.25rem;
  /* 缩小列表项间距 */
}

.audience-item {
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  gap: 1rem;
  /* 间距 */
  font-size: 1.1rem;
  /* 缩小文字大小 */
  line-height: 1.3;
  /* 紧凑行高 */
  font-weight: 800;
  /* 极粗字重 */
}

.point-text {
  flex: 1;
  /* 占据剩余空间 */
}

.check-circle {
  width: 2.25rem;
  /* 缩小圆圈尺寸 */
  height: 2.25rem;
  /* 缩小圆圈尺寸 */
  background-color: rgba(255, 255, 255, 0.3);
  /* 透明背景 */
  border-radius: 50%;
  /* 圆形 */
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  flex-shrink: 0;
  /* 防止压缩 */
  border: 2px solid rgba(255, 255, 255, 0.4);
  /* 细边框 */
}

.check-icon {
  width: 1.1rem;
  /* 缩小图标尺寸 */
  height: 1.1rem;
  /* 缩小图标尺寸 */
  color: white;
  /* 白色图标 */
}

@media (max-width: 700px) {
  .audience-card {
    flex: 1 1 100%;
    /* 手机端占满 */
    max-width: none;
    /* 取消限制 */
    border-radius: 2rem;
    /* 缩小圆角 */
  }
}
</style>
