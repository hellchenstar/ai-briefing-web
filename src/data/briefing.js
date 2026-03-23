export const briefingMeta = {
  siteTitle: 'AI 行业快讯',
  intro: '聚合前 24 小时 AI 热点、产品更新、模型发布和行业动态。默认每天早上 8 点发布一版；遇到重大模型、平台或融资发布，再做突发更新。',
  publishRule: '每日 08:00 固定更新，约 30 条；重大事件实时插播。',
  timezone: 'Asia/Shanghai'
}

export const dailyIssue = {
  issueDate: '2026-03-23',
  window: '2026-03-22 08:00 ~ 2026-03-23 08:00',
  updatedAt: '2026-03-23 16:35',
  summary: '当前为内容结构版。后续日报会按前一天 24 小时窗口，整理模型发布、产品更新、投融资、开源项目、平台动作和行业趋势。',
  tags: ['模型发布', '产品更新', '开源', '融资', 'Agent', '视频生成', 'AI 编程'],
  items: [
    {
      id: 'seed-01',
      source: '日报模板',
      time: '示例',
      level: '常规',
      title: '这里会放每天早上 8 点产出的 AI 热点摘要',
      summary: '每条内容控制在一屏内可读，优先写清楚发生了什么、为什么重要、对产品或开发有什么影响。',
      tags: ['日报', '模板'],
      takeaway: '目标不是堆链接，是做可快速浏览的中文摘要。'
    },
    {
      id: 'seed-02',
      source: '日报模板',
      time: '示例',
      level: '重点',
      title: '重大事件会被顶到前面，并打上重点标记',
      summary: '像 OpenAI 新模型、Anthropic 关键能力更新、Google 大版本发布、头部融资或开源爆款，会优先展示。',
      tags: ['重点', '模型发布'],
      takeaway: '同一天的大事件优先级高于一般资讯。'
    }
  ]
}

export const urgentUpdates = [
  {
    id: 'urgent-seed-01',
    publishedAt: '待命中',
    title: '重大更新会实时插到这里',
    summary: '例如头部模型发布、重要 API 升级、平台级功能上线、重大收购或融资。',
    impact: '命中后会作为突发更新同步到站点顶部。'
  }
]
