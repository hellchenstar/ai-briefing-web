<template>
  <div class="page-shell">
    <header class="hero">
      <div>
        <p class="eyebrow">Signal Hub</p>
        <h1>{{ briefingMeta.siteTitle }}</h1>
        <p class="hero-text">{{ briefingMeta.intro }}</p>
      </div>
      <div class="hero-panel">
        <img class="brand-logo" src="/brand-logo.svg" alt="Signal Hub" />
        <p>发布规则</p>
        <ul>
          <li>{{ briefingMeta.publishRule }}</li>
          <li>日报窗口：{{ dailyIssue.window }}</li>
          <li>最近更新时间：{{ dailyIssue.updatedAt }}</li>
        </ul>
        <a class="ghost-link" :href="backUrl">返回平台</a>
      </div>
    </header>

    <section class="issue-panel">
      <div>
        <p class="eyebrow">Daily Edition</p>
        <h2>{{ dailyIssue.issueDate }} 日报</h2>
        <p class="panel-text">{{ dailyIssue.summary }}</p>
      </div>
      <div class="issue-tags">
        <span v-for="tag in dailyIssue.tags" :key="tag">{{ tag }}</span>
      </div>
    </section>

    <section class="urgent-panel" v-if="urgentUpdates.length">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Hot Topics</p>
          <strong>热点资讯</strong>
        </div>
        <span class="urgent-count">{{ urgentUpdates.length }} 条</span>
      </div>
      <div class="urgent-list">
        <article v-for="item in urgentUpdates" :key="item.id" class="urgent-card">
          <div class="card-topline">
            <span class="level-badge hot">热点</span>
            <span class="time">{{ item.publishedAt }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p class="summary">{{ item.summary }}</p>
          <p class="takeaway">{{ item.impact }}</p>
        </article>
      </div>
    </section>

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
      <article v-for="item in filteredItems" :key="item.id" class="brief-card">
        <div class="card-topline">
          <span class="source">{{ item.source }}</span>
          <div class="card-meta-right">
            <span class="level-badge" :class="item.level === '重点' ? 'hot' : ''">{{ item.level }}</span>
            <span class="time">{{ item.time }}</span>
          </div>
        </div>
        <h3>{{ item.title }}</h3>
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
import { briefingMeta, dailyIssue, urgentUpdates } from './data/briefing'

const activeTag = ref('全部')

const tags = computed(() => ['全部', ...dailyIssue.tags])

const filteredItems = computed(() => {
  if (activeTag.value === '全部') {
    return dailyIssue.items
  }
  return dailyIssue.items.filter((item) => item.tags.includes(activeTag.value))
})

const backUrl = computed(() => {
  const params = new URLSearchParams(window.location.search)
  return params.get('back') || '/'
})
</script>
