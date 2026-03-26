export const briefingMeta = {
  siteTitle: 'AI 行业快讯',
  intro: '聚合前 24 小时 AI 热点、产品更新、模型发布和行业动态。默认每天早上 8 点发布一版；遇到重大模型、平台或融资发布，再做突发更新。',
  publishRule: '每日 08:00 固定更新，约 30 条；重大事件实时插播。',
  timezone: 'Asia/Shanghai'
}

export const dailyIssue = {
  issueDate: '2026-03-26',
  window: '2026-03-25 08:00 ~ 2026-03-26 08:00',
  updatedAt: '2026-03-26 08:00',
  summary: '过去 24 小时，真正值得盯的还是平台能力、推理基础设施和企业级 AI 动作。Google 一口气把 AI Studio 全栈开发体验、Lyria 3 Pro 和 TurboQuant 推上台面；AWS 联合 Cerebras 继续卷云端推理速度；Wiz、Intel、CrowdStrike、DataGrail 等厂商则把 Agent 安全、合规和企业落地往前推。融资面不算最密，但 Harvey 这类垂直 AI 公司估值继续抬高，说明资本依然愿意为可收费的 AI 产品买单。',
  tags: ['Google', 'AI Studio', 'Lyria 3', 'TurboQuant', 'AWS', 'Cerebras', 'Agent 安全', 'Harvey'],
  items: [
    {
      id: '2026-03-26-01',
      source: 'Google',
      time: '03-26 06:37',
      level: '重点',
      title: 'Google AI Studio 上线新的全栈 vibe coding 体验',
      summary: 'Google 把 AI Studio 从模型调试继续推到页面、应用与工作流一体化开发，明显是在和 AI IDE、AI 原型平台正面抢入口。',
      tags: ['Google', 'AI Studio', '开发工具'],
      takeaway: '开发者平台竞争已经不是比模型参数，而是比从想法到成品的闭环速度。'
    },
    {
      id: '2026-03-26-02',
      source: 'Google',
      time: '03-26 00:06',
      level: '重点',
      title: 'Google 发布 Lyria 3 Pro，扩展音乐生成产品线',
      summary: 'Google 发布更适合长音轨生成的 Lyria 3 Pro，并同步扩展到更多 Google 产品与开发者调用链路。',
      tags: ['Google', 'Lyria 3', '音乐生成'],
      takeaway: '多模态竞争正在从图像视频继续往音频创作平台化推进。'
    },
    {
      id: '2026-03-26-03',
      source: 'Google Research',
      time: '03-26 01:36',
      level: '重点',
      title: 'Google 推出 TurboQuant 压缩算法，主打更低内存占用',
      summary: 'TurboQuant 主打在尽量不伤精度的前提下显著压缩 LLM 内存占用，外部报道普遍把它看作推理成本优化的重要一击。',
      tags: ['Google', 'TurboQuant', '推理优化'],
      takeaway: '今年真正值钱的不是再堆大模型，而是把模型跑得更便宜。'
    },
    {
      id: '2026-03-26-04',
      source: 'AWS / Cerebras',
      time: '03-26 03:26',
      level: '重点',
      title: 'AWS 联手 Cerebras，主打云上超高速 AI 推理',
      summary: 'AWS 与 Cerebras 宣布合作，核心卖点是把高吞吐、低时延推理能力直接带进云端标准采购路径。',
      tags: ['AWS', 'Cerebras', '推理基础设施'],
      takeaway: '云厂商开始把“推理速度”做成标准化服务卖点。'
    },
    {
      id: '2026-03-26-05',
      source: 'Wiz',
      time: '03-26 00:12',
      level: '重点',
      title: 'Wiz 发布 Red Agent，用 AI 自动模拟攻击者行为',
      summary: 'Wiz 把红队测试进一步产品化，让 AI 直接扮演攻击者去找系统和 Agent 链路的薄弱点。',
      tags: ['Wiz', 'Agent 安全', '红队'],
      takeaway: 'Agent 时代的安全测试正在从人工脚本转向自动化攻防。'
    },
    {
      id: '2026-03-26-06',
      source: 'SiliconANGLE',
      time: '03-26 05:10',
      level: '重点',
      title: '法律 AI 公司 Harvey 新融资后估值升至 110 亿美元',
      summary: 'Harvey 在新一轮约 2.5 亿美元融资后估值被推到 110 亿美元，说明垂直行业 AI 应用仍是资本高确定性方向。',
      tags: ['Harvey', '融资', '法律 AI'],
      takeaway: '能直接收费、能嵌进专业流程的 AI 应用，估值依然很硬。'
    },
    {
      id: '2026-03-26-07',
      source: 'AP / Axios / WIRED',
      time: '03-26 05:41',
      level: '重点',
      title: '美国政界围绕 AI 数据中心暂停建设提案激烈交锋',
      summary: '围绕 AI 数据中心能耗与扩建速度的争论继续升温，支持方强调环境成本，反对方则认为会直接卡住 AI 竞争力。',
      tags: ['政策', '数据中心', '能源'],
      takeaway: 'AI 基建的下一场硬仗，不只在芯片，也在电力和审批。'
    },
    {
      id: '2026-03-26-08',
      source: 'Intel / CrowdStrike',
      time: '03-26 03:14',
      level: '常规',
      title: 'Intel 与 CrowdStrike 扩大合作，主打企业安全落地 AI',
      summary: '双方把硬件平台、安全能力和企业 AI 落地话术绑在一起，目标是降低企业采用门槛。',
      tags: ['Intel', 'CrowdStrike', '企业安全'],
      takeaway: '企业买 AI，越来越像买“能过安全审查的方案包”。'
    },
    {
      id: '2026-03-26-09',
      source: 'SLB / NVIDIA',
      time: '03-25 20:11',
      level: '常规',
      title: 'SLB 联合 NVIDIA 推进能源行业 AI 工业化',
      summary: 'SLB 将 NVIDIA 能力带入能源行业工作流，强调行业模型、仿真与工程环节的落地。',
      tags: ['NVIDIA', '能源', '行业 AI'],
      takeaway: '垂直行业 AI 的价值，最终还是靠行业软件和流程吃出来。'
    },
    {
      id: '2026-03-26-10',
      source: 'NVIDIA',
      time: '03-26 03:04',
      level: '常规',
      title: 'NVIDIA 再次强调 AI 将长期并存于开源与闭源生态',
      summary: 'NVIDIA 官方最新表态继续为开放生态站台，但同时也强调商业闭源模型的持续价值。',
      tags: ['NVIDIA', '开源', '生态'],
      takeaway: '大厂现在更爱讲“开源与闭源都要”，因为两边都能赚钱。'
    },
    {
      id: '2026-03-26-11',
      source: 'Meta / CNBC',
      time: '03-25 20:00',
      level: '常规',
      title: 'Hugo Barra 回归 Meta，强化其 AI 产品推进节奏',
      summary: 'CNBC 报道 Hugo Barra 回归 Meta，被外界视作扎克伯格继续加码 AI 产品化与组织调度的信号。',
      tags: ['Meta', '组织', 'AI 产品'],
      takeaway: 'AI 竞争打到现在，抢人和重组节奏同样关键。'
    },
    {
      id: '2026-03-26-12',
      source: 'Axios',
      time: '03-26 03:37',
      level: '常规',
      title: 'Meta 高层称美国需要一整套新的 AI 劳动力体系',
      summary: 'Meta 总裁公开表示，AI 带来的不是局部岗位升级，而是整套人才结构与训练体系重建。',
      tags: ['Meta', '人才', '劳动力'],
      takeaway: '大厂开始把 AI 竞争定义成长期人才工程。'
    },
    {
      id: '2026-03-26-13',
      source: 'Axios',
      time: '03-26 02:46',
      level: '常规',
      title: 'Meta 高层称 AI 是“人类层面的转型”',
      summary: '这是典型的大厂战略话术升级：把 AI 从工具故事抬到社会级基础能力故事。',
      tags: ['Meta', '战略', 'AI 叙事'],
      takeaway: '当大厂开始讲文明级叙事，说明资本开支不会轻易收。'
    },
    {
      id: '2026-03-26-14',
      source: 'DataGrail',
      time: '03-26 02:16',
      level: '常规',
      title: 'DataGrail 为合规平台加入 AI Agent 能力',
      summary: 'DataGrail 把 AI Agent 引入隐私与合规平台，目标是提升企业处理复杂合规流程的自动化程度。',
      tags: ['DataGrail', '合规', 'Agent'],
      takeaway: 'Agent 不只是生产力工具，也在往审计和合规部门渗透。'
    },
    {
      id: '2026-03-26-15',
      source: 'IAPP',
      time: '03-26 02:06',
      level: '常规',
      title: 'DataGrail 的新动作再次推高企业对 AI 合规工具关注',
      summary: '行业观察普遍认为，随着企业内部 Agent 增多，数据治理、隐私和责任边界会变成新的采购项。',
      tags: ['隐私', '治理', '企业 AI'],
      takeaway: '企业越想把 AI 用深，越躲不开治理系统。'
    },
    {
      id: '2026-03-26-16',
      source: 'EFF',
      time: '03-26 01:20',
      level: '常规',
      title: 'EFF 起诉要求公开 Medicare 的 AI 试验细节',
      summary: 'EFF 质疑政府在医保系统中的 AI 试验透明度不足，希望推动更多披露与问责。',
      tags: ['EFF', '政府 AI', '透明度'],
      takeaway: '政府用 AI，接下来会越来越多碰到公开性和解释性问题。'
    },
    {
      id: '2026-03-26-17',
      source: 'Lawfare',
      time: '03-26 00:06',
      level: '常规',
      title: '美国联邦 AI 政策继续围绕偏见治理与儿童保护展开',
      summary: '最新政策解读认为，联邦层面开始更明确聚焦政府 AI 偏见控制与未成年人保护，但仍留有执行空白。',
      tags: ['监管', '政府 AI', '安全'],
      takeaway: 'AI 监管现在最容易先从政府采购和儿童保护切进去。'
    },
    {
      id: '2026-03-26-18',
      source: 'Cornell Tech / Mastercard',
      time: '03-26 04:16',
      level: '常规',
      title: 'Cornell Tech 与 Mastercard 联手推进 AI 治理标准',
      summary: '双方希望把高校研究与企业治理实践结合，推动更可执行的 AI 治理标准。',
      tags: ['治理', 'Mastercard', '标准'],
      takeaway: 'AI 治理开始从口号阶段进入标准化阶段。'
    },
    {
      id: '2026-03-26-19',
      source: 'Amazon',
      time: '03-26 03:19',
      level: '常规',
      title: 'Amazon 继续把推理速度包装成云业务核心卖点',
      summary: 'AWS 与 Cerebras 的合作之外，Amazon 也在加大对云端 AI 推理性能话语权的争夺。',
      tags: ['Amazon', '云计算', '推理'],
      takeaway: '云厂商的 AI 战略，正从模型托管转向性能竞赛。'
    },
    {
      id: '2026-03-26-20',
      source: 'VentureBeat',
      time: '03-26 03:36',
      level: '常规',
      title: '外部媒体普遍将 TurboQuant 解读为降本型关键技术',
      summary: '多家媒体把 TurboQuant 视作降低大模型显存压力和部署成本的现实路线，而不是实验室噱头。',
      tags: ['TurboQuant', '成本优化', '部署'],
      takeaway: '能进生产环境的效率工具，市场反馈通常比新 benchmark 更直接。'
    },
    {
      id: '2026-03-26-21',
      source: 'Ars Technica',
      time: '03-26 01:59',
      level: '常规',
      title: 'Google 新压缩方案被指可把 LLM 内存占用降到原来的数分之一',
      summary: '媒体拆解认为，该方案对本地部署、边缘推理和成本敏感场景尤其有吸引力。',
      tags: ['Google', 'LLM', '边缘部署'],
      takeaway: '如果压缩不明显掉点，边缘和私有化市场会立刻跟进。'
    },
    {
      id: '2026-03-26-22',
      source: 'PYMNTS',
      time: '03-26 06:46',
      level: '常规',
      title: '平台方开始收紧客户自带 AI Agent 的接入权限',
      summary: '随着 AI Agent 具备更强代操作能力，平台开始担心风控、支付和权限滥用，限制策略明显增多。',
      tags: ['Agent', '平台规则', '风控'],
      takeaway: 'Agent 要真进交易链路，平台不会轻易全开放。'
    },
    {
      id: '2026-03-26-23',
      source: 'Bloomberg',
      time: '03-26 05:34',
      level: '常规',
      title: 'AI 已开始改变软件合同结构与谈判方式',
      summary: '彭博观察认为，AI 软件采购让合同周期、条款长度和责任边界都在重写。',
      tags: ['企业采购', 'SaaS', '合同'],
      takeaway: 'AI 商业化不只改产品，也在改销售和法务流程。'
    },
    {
      id: '2026-03-26-24',
      source: 'FedScoop',
      time: '03-26 04:50',
      level: '常规',
      title: 'GAO 警告 IRS 预算削减可能拖累其 AI 计划',
      summary: '美国政府审计层面提醒，机构若没有稳定预算与人才，AI 计划很难真正落地。',
      tags: ['政府 AI', '预算', '执行'],
      takeaway: 'AI 项目最怕的不是 PPT 少，而是预算和人手不够。'
    },
    {
      id: '2026-03-26-25',
      source: 'Google / 9to5Mac',
      time: '03-25 23:31',
      level: '常规',
      title: 'Apple 与 Google 的 AI 合作细节继续被外界追踪',
      summary: '最新报道提到 Gemini 相关合作细节仍在被市场放大解读，移动端 AI 入口之争还没结束。',
      tags: ['Apple', 'Google', 'Gemini'],
      takeaway: '终端入口一旦和模型绑定，平台议价权就会重新洗牌。'
    },
    {
      id: '2026-03-26-26',
      source: 'OpenAI / 媒体综合',
      time: '03-26 05:38',
      level: '常规',
      title: 'Sora 关停余波继续发酵，视频生成赛道转向更现实的产品化讨论',
      summary: '多家媒体继续讨论 Sora 关停后的视频生成市场格局，焦点从技术惊艳转向商业可持续性。',
      tags: ['OpenAI', 'Sora', '视频生成'],
      takeaway: '视频模型再火，最后还是要过产品经营这一关。'
    },
    {
      id: '2026-03-26-27',
      source: 'Google',
      time: '03-26 00:06',
      level: '常规',
      title: 'Google 把音乐生成能力继续接入更多产品',
      summary: 'Lyria 3 Pro 不只是单点模型发布，更像是 Google 在把生成式音频铺进自己整套产品矩阵。',
      tags: ['Google', '多模态', '产品整合'],
      takeaway: '真正强势的平台打法，是新模型发布时顺手完成分发。'
    },
    {
      id: '2026-03-26-28',
      source: 'Harvard Business School',
      time: '03-26 07:27',
      level: '常规',
      title: '研究称生成式 AI 能提效，但不能直接把新手变成专家',
      summary: '最新研究再次提醒，AI 能显著提高效率，但对高质量判断与专业能力的替代仍有限。',
      tags: ['研究', '生产力', '教育'],
      takeaway: 'AI 很擅长放大已有能力，不太擅长凭空创造专业性。'
    },
    {
      id: '2026-03-26-29',
      source: 'Nature',
      time: '03-26 06:51',
      level: '常规',
      title: 'Nature 关注端到端自动化 AI 研究的可能性',
      summary: '相关讨论继续升温，核心问题不是能不能自动化，而是自动化到什么边界仍可被信任。',
      tags: ['科研自动化', '研究工具', '可信性'],
      takeaway: 'AI 进科研最难的不是生成内容，而是可验证。'
    },
    {
      id: '2026-03-26-30',
      source: 'National Science Foundation',
      time: '03-26 00:00',
      level: '常规',
      title: 'NSF 发起新计划，推动美国劳动力与社区 AI 就绪',
      summary: 'NSF 希望把 AI 准备度从企业内部扩展到更广泛的劳动力与社区层面，带有明显政策导向。',
      tags: ['NSF', '人才', '政策'],
      takeaway: 'AI 基础设施之外，人才基础设施也开始被正式写进议程。'
    }
  ]
}

export const urgentUpdates = [
  {
    id: 'hot-2026-03-26-01',
    publishedAt: '2026-03-26 00:00',
    title: 'Google 发布 Lyria 3，并接入 Gemini API 与 AI Studio',
    summary: 'Google 官方刚发布新一代音乐生成模型 Lyria 3，现已进入 Gemini API 付费预览，并可在 Google AI Studio 中测试。',
    impact: '这属于 Google 的实打实新模型上线，说明其生成式媒体能力开始更明确地进入开发者平台和商用调用链路。'
  },
  {
    id: 'hot-2026-03-25-01',
    publishedAt: '2026-03-25 03:15',
    title: 'OpenAI Foundation 表示未来一年将投入至少 10 亿美元',
    summary: 'OpenAI 官方更新称，其 Foundation 未来一年预计将在生命科学、就业与经济影响、AI 韧性和社区项目上投入至少 10 亿美元。',
    impact: '这不是模型发布，但金额和方向都够重磅，说明 OpenAI 正把 AI 社会影响与长期资源配置拉到更高优先级。'
  },
  {
    id: 'hot-2026-03-24-01',
    publishedAt: '2026-03-24 10:20',
    title: 'Google AI Studio 把 vibe coding 往全栈应用搭建推进',
    summary: 'Google 今天的焦点还是 AI Studio 能力扩展，方向很明确：从模型调用继续往页面生成、原型开发和完整应用工作流整合。',
    impact: '开发者工具竞争继续卷“从想法到成品”的一站式体验。'
  },
  {
    id: 'hot-2026-03-24-02',
    publishedAt: '2026-03-24 10:20',
    title: 'Cisco 与 Palo Alto 同时押注 Agent 安全赛道',
    summary: 'Cisco 推 Agent 红队测试，Palo Alto 同步发安全浏览器与 Prisma AIRS 3.0，说明企业 AI 安全已经从概念讨论走向产品对位。',
    impact: 'Agent 真正大规模进企业前，安全大概率先成为独立采购项。'
  },
  {
    id: 'hot-2026-03-24-03',
    publishedAt: '2026-03-24 10:20',
    title: 'NVIDIA 把 AI 基建叙事继续延伸到工业、机器人和电力侧',
    summary: '一边推进 IGX Thor 面向工业与医疗边缘场景，一边推动更“弹性”的 AI 数据中心，热点已经不只是芯片本身，而是整套行业基础设施。',
    impact: '算力竞争正在从 GPU 参数战，扩展到能源、调度和垂直行业落地。'
  },
  {
    id: 'hot-2026-03-24-04',
    publishedAt: '2026-03-24 10:20',
    title: '金融行业继续把 AI 推进到组织级和治理级',
    summary: '汇丰任命首位 Chief AI Officer，摩根大通讨论下一代 Agent 安全，说明银行业对 AI 的关注点已经从试点工具转向长期治理和生产环境。',
    impact: '金融 AI 下一阶段看的是组织能力、风控和责任边界。'
  },
  {
    id: 'hot-2026-03-24-05',
    publishedAt: '2026-03-24 10:20',
    title: '医疗 AI 与推理基础设施仍是今天融资关注点',
    summary: 'Doctronic 拿到 4000 万美元融资，Gimlet Labs 继续围绕推理瓶颈拿关注，资本依旧偏爱能直接落地和能降本的方向。',
    impact: '比起再讲大模型故事，医疗场景和推理优化更容易拿到真实资金。'
  },
  {
    id: 'hot-2026-03-24-06',
    publishedAt: '2026-03-24 10:20',
    title: '开源生态与产业链能力继续成为全球 AI 竞争焦点',
    summary: '今天多条报道都在强调开源模型、制造能力与供应链协同的组合优势，讨论重心已经不只是闭源模型谁更强。',
    impact: 'AI 竞争越来越像体系战，不再只是单点模型战。'
  }
]
