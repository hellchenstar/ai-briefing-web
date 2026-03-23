<template>
  <div class="page-shell">
    <header class="hero">
      <div>
        <p class="eyebrow">AI Briefing</p>
        <h1>AI 行业快讯</h1>
        <p class="hero-text">给平台预留的 AI 资讯子应用。先用轻量静态数据把内容形态搭起来，后面再接抓取、摘要和后台配置。</p>
      </div>
      <div class="hero-panel">
        <p>当前能力</p>
        <ul>
          <li>精选快讯卡片</li>
          <li>主题标签筛选</li>
          <li>热点摘要信息流</li>
        </ul>
        <a class="ghost-link" :href="backUrl">返回平台</a>
      </div>
    </header>

    <section class="toolbar">
      <button
        v-for="tag in tags"
        :key="tag"
        class="tag-chip"
        :class="{ active: activeTag === tag }"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </section>

    <section class="content-grid">
      <article v-for="item in filteredItems" :key="item.title" class="brief-card">
        <div class="card-topline">
          <span class="source">{{ item.source }}</span>
          <span class="time">{{ item.time }}</span>
        </div>
        <h2>{{ item.title }}</h2>
        <p class="summary">{{ item.summary }}</p>
        <div class="tag-list">
          <span v-for="label in item.tags" :key="label">{{ label }}</span>
        </div>
        <p class="takeaway">{{ item.takeaway }}</p>
      </article>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const items = [
  {
    source: 'Open Model Watch',
    time: '10 分钟前',
    title: '多模态 Agent 工具链继续收敛到工作流平台形态',
    summary: '最近一波产品更新重点不再只是模型参数，而是把搜索、抓取、执行、记录串成完整任务链。',
    tags: ['Agent', '工作流', '产品'],
    takeaway: '适合后续扩展成「工具对比 + 真实用例」的栏目。'
  },
  {
    source: 'AI Product Radar',
    time: '35 分钟前',
    title: '视频生成工具开始主打稳定可控，而不是单次惊艳样片',
    summary: '平台竞争点逐步从炫技转向模板化、可复用和团队协作，商业落地味道更重。',
    tags: ['视频生成', '商业化', '工作流'],
    takeaway: '后面可以挂到你平台里的 AI 视频模块做联动入口。'
  },
  {
    source: 'Frontend x AI',
    time: '1 小时前',
    title: '前端团队开始把 AI 接到需求分析、原型和代码生成的连续流程里',
    summary: '不再只让 AI 写单个函数，而是让它参与需求拆解、接口草图、页面骨架和联调说明。',
    tags: ['前端', '自动化', '工程化'],
    takeaway: '这块和你现在的方向很贴，后续值得单独做专题聚合。'
  },
  {
    source: 'Infra Notes',
    time: '2 小时前',
    title: '越来越多团队把 AI 产品拆成「主平台 + 多子应用」结构',
    summary: '主平台负责统一入口、账号、埋点和推荐，独立项目保持单独迭代，再通过子路径挂回平台。',
    tags: ['架构', '平台化', '子应用'],
    takeaway: '正好和你现在 main-platform 的接入路线一致。'
  }
]

const tags = ['全部', 'Agent', '工作流', '产品', '视频生成', '前端', '平台化']
const activeTag = ref('全部')

const filteredItems = computed(() => {
  if (activeTag.value === '全部') {
    return items
  }
  return items.filter((item) => item.tags.includes(activeTag.value))
})

const backUrl = computed(() => {
  const params = new URLSearchParams(window.location.search)
  return params.get('back') || '/'
})
</script>
