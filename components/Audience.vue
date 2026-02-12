<template>
  <section id="audience" class="audience"> <!-- 适用人群区域 -->
    <div class="container"> <!-- 内容定宽容器 -->
      <div class="audience-layout"> <!-- 弹性布局容器 -->
        <div v-for="(audienceGroup, groupIndex) in audienceList" :key="groupIndex" class="audience-card" :class="groupIndex === 0 ? 'card-blue' : 'card-purple'" v-motion :initial="{ opacity: 0, scale: 0.5 }" :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { type: 'spring', stiffness: 300, damping: 15 }
        }" :hovered="{ scale: 1.05, y: -10 }"> <!-- 快速弹出的卡通卡片 -->
          <h3 class="audience-title">{{ audienceGroup.title }}</h3> <!-- 分组标题 -->
          <ul class="audience-list"> <!-- 特点列表 -->
            <li v-for="(pointText, pointIndex) in audienceGroup.points" :key="pointIndex" class="audience-item" v-motion :hovered="{ x: 15, scale: 1.05, color: '#fff' }"> <!-- 列表项显著放大反馈 -->
              <div class="check-circle"> <!-- 卡通打钩圆圈 -->
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span>{{ pointText }}</span> <!-- 特点文字 -->
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
    title: "AI 小探险家",                                                // 卡通化分组名称
    points: [                                                           // 核心痛点/收益
      "不用写复杂的代码，像拼图一样玩转 AI",
      "亲眼看到数据在模型里是怎么跑来跑去的",
      "在玩耍中变身成为厉害的 AI 小专家"
    ]
  },
  {
    title: "算法大魔法师",                                               // 卡通化分组名称
    points: [                                                           // 核心痛点/收益
      "快速变出你的 AI 想法，验证各种神奇架构",
      "一键生成标准代码，省下时间去创造更多可能",
      "直观展示你的作品，让其他人一眼就看懂你的魔法"
    ]
  }
];
</script>

<style scoped>
.audience {
  padding: clamp(4rem, 10vw, 8rem) 0;
  /* 响应式上下内边距 */
  background-color: #f8fafc;
  /* 极浅灰背景 */
}

.container {
  max-width: 1200px;
  /* 最大宽度 */
  margin: 0 auto;
  /* 居中 */
  padding: 0 1.5rem;
  /* 左右内边距 */
}

.audience-layout {
  display: flex;
  /* 弹性布局 */
  flex-wrap: wrap;
  /* 自动换行适配多端 */
  gap: 3rem;
  /* 增加卡片间距 */
  justify-content: center;
  /* 居中排列 */
}

.audience-card {
  flex: 1 1 400px;
  /* 弹性伸缩 */
  min-width: 300px;
  /* 最小宽度 */
  padding: clamp(3rem, 8vw, 5rem) clamp(2rem, 5vw, 4rem);
  /* 响应式内边距 */
  color: white;
  /* 白色文字 */
  display: flex;
  /* 弹性布局 */
  flex-direction: column;
  /* 纵向排列 */
  justify-content: center;
  /* 居中 */
  border-radius: 3rem;
  /* 超大圆角 */
  box-shadow: 0 20px 0 rgba(0, 0, 0, 0.1);
  /* 卡通立体阴影 */
  border: 0.5rem solid rgba(255, 255, 255, 0.2);
  /* 厚实的卡通边框 */
  cursor: pointer;
  /* 手型指针 */
}

.card-blue {
  background-color: #3b82f6;
  /* 明亮蓝色 */
}

.card-purple {
  background-color: #a855f7;
  /* 明亮紫色 */
}

.audience-title {
  font-size: clamp(2rem, 5vw, 3rem);
  /* 增加标题字号 */
  font-weight: 900;
  /* 极粗字重 */
  margin-bottom: 3rem;
  /* 增加下边距 */
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
  gap: 2rem;
  /* 增加列表项间距 */
}

.audience-item {
  display: flex;
  /* 弹性布局 */
  align-items: center;
  /* 垂直居中 */
  gap: 1.5rem;
  /* 增加间距 */
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  /* 增加文字大小 */
  line-height: 1.4;
  /* 紧凑行高 */
  font-weight: 800;
  /* 加粗字体 */
}

.check-circle {
  width: 3rem;
  /* 增大圆圈尺寸 */
  height: 3rem;
  /* 增大圆圈尺寸 */
  background-color: rgba(255, 255, 255, 0.3);
  /* 强化透明度 */
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
  border: 3px solid rgba(255, 255, 255, 0.5);
  /* 增加圆圈边框 */
}

.check-icon {
  width: 1.5rem;
  /* 图标尺寸 */
  height: 1.5rem;
  /* 图标尺寸 */
  color: white;
  /* 白色图标 */
}
</style>
