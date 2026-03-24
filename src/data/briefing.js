export const briefingMeta = {
  siteTitle: 'AI 行业快讯',
  intro: '聚合前 24 小时 AI 热点、产品更新、模型发布和行业动态。默认每天早上 8 点发布一版；遇到重大模型、平台或融资发布，再做突发更新。',
  publishRule: '每日 08:00 固定更新，约 30 条；重大事件实时插播。',
  timezone: 'Asia/Shanghai'
}

export const dailyIssue = {
  issueDate: '2026-03-24',
  window: '2026-03-23 08:00 ~ 2026-03-24 08:00',
  updatedAt: '2026-03-24 08:00',
  summary: '过去 24 小时，AI 头条集中在 Google AI Studio 全栈 vibe coding、Cisco/Palo Alto 等安全厂商押注 Agent 安全、NVIDIA 把 AI 基础设施继续往工业与电力侧延伸，同时医疗、金融、企业软件和开源生态也有一批新动作。模型硬发布不多，平台与工具链更新明显更密集。',
  tags: ['AI Studio', 'Agent 安全', '企业 AI', '融资', '开源', '基础设施', '金融 AI'],
  items: [
    {
      id: '2026-03-24-01',
      source: 'Google',
      time: '03-24 04:42',
      level: '重点',
      title: 'Google AI Studio 上线新的全栈 vibe coding 体验',
      summary: 'Google 宣布 AI Studio 提供更完整的全栈开发体验，信号很明确：从模型调用继续往原型生成、应用搭建和开发者工作流一体化推进。',
      tags: ['Google', 'AI Studio', '开发工具'],
      takeaway: '开发者工具竞争继续往“从提示到应用”整合。'
    },
    {
      id: '2026-03-24-02',
      source: 'Anthropic',
      time: '03-24 05:41',
      level: '重点',
      title: 'Anthropic 发布“Vibe physics: The AI grad student”研究内容',
      summary: 'Anthropic 新内容继续围绕 AI 在科研与推理场景的使用方式展开，侧面说明头部厂商仍在强化模型作为研究助手与专业工具的定位。',
      tags: ['Anthropic', '研究', '推理'],
      takeaway: '科研与高知识密度场景仍是大模型的重要落点。'
    },
    {
      id: '2026-03-24-03',
      source: 'Cisco',
      time: '03-23 20:03',
      level: '重点',
      title: 'Cisco AI Defense 推出 Explorer Edition，面向 Agent 应用红队测试',
      summary: 'Cisco 把 Agent 安全做成更偏构建期的能力，主打对 AI 应用和代理进行红队测试，帮助团队在上线前发现越权、越狱和数据泄露风险。',
      tags: ['Cisco', 'Agent', '安全'],
      takeaway: 'Agent 安全开始从概念走向标准化产品。'
    },
    {
      id: '2026-03-24-04',
      source: 'Palo Alto Networks',
      time: '03-24 05:30',
      level: '重点',
      title: 'Palo Alto Networks 推出面向 Agentic AI 的安全浏览器',
      summary: 'Palo Alto 把浏览器作为 Agent 工作入口来做安全加固，说明浏览器正重新变成 AI 工作流和企业防护的关键控制点。',
      tags: ['Palo Alto', '浏览器', 'Agent 安全'],
      takeaway: 'Agent 时代的终端安全，不只是 API 网关。'
    },
    {
      id: '2026-03-24-05',
      source: 'Palo Alto Networks',
      time: '03-24 06:35',
      level: '重点',
      title: 'Palo Alto Networks 发布 Prisma AIRS 3.0',
      summary: '新版本继续围绕 Agentic AI 场景做能力扩展，和其安全浏览器发布形成组合拳，明显在抢企业 AI 安全平台入口。',
      tags: ['Palo Alto', '安全平台', '企业 AI'],
      takeaway: '安全厂商正把 AI 安全打包成平台方案。'
    },
    {
      id: '2026-03-24-06',
      source: 'NVIDIA Developer',
      time: '03-24 04:28',
      level: '重点',
      title: 'NVIDIA 宣布 IGX Thor 面向工业、医疗和机器人边缘 AI 场景',
      summary: 'NVIDIA 继续把 AI 计算形态往边缘侧推，重点卡位工业控制、医疗设备和机器人等高附加值行业。',
      tags: ['NVIDIA', '边缘 AI', '机器人'],
      takeaway: '边缘推理和行业设备仍是 NVIDIA 的重点增量市场。'
    },
    {
      id: '2026-03-24-07',
      source: 'Axios / WSJ',
      time: '03-23 21:23',
      level: '重点',
      title: 'NVIDIA 与 Emerald AI 联合能源企业推进“弹性”AI 数据中心',
      summary: '这类合作核心是让 AI 负载更贴近电力侧调度，缓解推理和训练基础设施的能耗与供电约束。',
      tags: ['NVIDIA', '数据中心', '能源'],
      takeaway: '算力竞争正在延伸到电力与调度能力。'
    },
    {
      id: '2026-03-24-08',
      source: 'STAT',
      time: '03-23 22:52',
      level: '重点',
      title: 'AI 医疗公司 Doctronic 完成 4000 万美元融资',
      summary: 'Doctronic 融资表明临床辅助、患者沟通和医疗 AI 仍是资本愿意下注的细分方向。',
      tags: ['融资', '医疗 AI', '初创'],
      takeaway: '医疗 AI 仍是相对确定的融资赛道。'
    },
    {
      id: '2026-03-24-09',
      source: 'TechCrunch',
      time: '03-24 00:00',
      level: '重点',
      title: 'Gimlet Labs 试图解决 AI 推理瓶颈',
      summary: 'TechCrunch 报道该公司从基础设施层切入推理效率问题，说明“降推理成本”仍是创业公司最现实的机会之一。',
      tags: ['推理', '基础设施', '初创'],
      takeaway: '推理优化依然比“再做一个模型”更容易拿到关注。'
    },
    {
      id: '2026-03-24-10',
      source: 'Reuters',
      time: '03-23 21:13',
      level: '重点',
      title: '汇丰任命首位 Chief AI Officer',
      summary: '传统大行把 AI 负责人正式抬到 CXO 级别，说明 AI 已经从创新项目转为成本、组织和业务协同层面的长期工程。',
      tags: ['HSBC', '金融 AI', '组织变动'],
      takeaway: '大型金融机构的 AI 治理进入正式编制阶段。'
    },
    {
      id: '2026-03-24-11',
      source: 'Reuters',
      time: '03-23 20:02',
      level: '重点',
      title: '美国咨询机构警告中国开源生态优势可能威胁美国 AI 领先地位',
      summary: '报道把焦点放在开源模型和制造能力的组合优势上，反映 AI 竞争已经不只是闭源大模型之争。',
      tags: ['开源', '中美', '政策'],
      takeaway: '开源生态与制造能力开始被视为 AI 国家竞争力核心变量。'
    },
    {
      id: '2026-03-24-12',
      source: 'MoonPay',
      time: '03-24 05:11',
      level: '常规',
      title: 'MoonPay 发布面向 AI Agents 的开源钱包标准',
      summary: '虽然偏 AI+Crypto 交叉，但“代理可持有和调用钱包”是 Agent 商业化里一个实际问题，开源标准有助于先把接口统一。',
      tags: ['开源', 'Agent', '支付'],
      takeaway: 'Agent 经济的底层账户体系开始有人抢标准位。'
    },
    {
      id: '2026-03-24-13',
      source: 'Saab',
      time: '03-24 01:06',
      level: '常规',
      title: 'Saab 与 Cohere 签署高级 AI 合作备忘录',
      summary: '军工企业与模型厂商合作，说明企业级和防务级私有 AI 方案仍在扩张。',
      tags: ['Cohere', '企业 AI', '防务'],
      takeaway: 'Cohere 继续走强行业、强合规路线。'
    },
    {
      id: '2026-03-24-14',
      source: 'Business Insider',
      time: '03-24 06:33',
      level: '常规',
      title: '微软在 Mustafa Suleyman 团队下吸纳前 AI2 CEO',
      summary: '微软继续扩充顶级研究和产品人才，说明其 AI 组织建设还在持续加码。',
      tags: ['Microsoft', '人才', '组织'],
      takeaway: '头部厂商的人才战还没打完。'
    },
    {
      id: '2026-03-24-15',
      source: 'Bloomberg',
      time: '03-24 07:03',
      level: '常规',
      title: 'Meta 吸纳 Dreamer 团队相关高管',
      summary: 'Meta 继续通过挖人补齐 AI 产品和组织能力，延续其近阶段快速堆团队的节奏。',
      tags: ['Meta', '人才', '组织'],
      takeaway: 'AI 大厂补强团队的方式越来越直接。'
    },
    {
      id: '2026-03-24-16',
      source: 'FedScoop',
      time: '03-24 05:25',
      level: '常规',
      title: 'GSA 延长 AI 合同条款征求意见期',
      summary: '美国政府采购侧对 AI 条款争议不小，延长期限意味着行业对合规、责任和采购边界仍在博弈。',
      tags: ['政府', '合规', '采购'],
      takeaway: 'AI 商业化往政府市场走时，合同条款是第一道门槛。'
    },
    {
      id: '2026-03-24-17',
      source: 'ABA Banking Journal',
      time: '03-24 02:19',
      level: '常规',
      title: '美国财政部与 FSOC 推动金融行业 AI 采用支持工作',
      summary: '监管层口径开始从“只谈风险”转向“风险可控前提下推动应用”，对银行与保险机构是偏积极信号。',
      tags: ['金融 AI', '监管', '美国'],
      takeaway: '金融 AI 的下一阶段是“边监管边放行”。'
    },
    {
      id: '2026-03-24-18',
      source: 'PYMNTS',
      time: '03-24 04:43',
      level: '常规',
      title: '美国财政部门关注降低银行采用 AI 的监管摩擦',
      summary: '相比口号式鼓励，这类“减摩擦”动作更务实，意味着银行实际部署 AI 的阻力主要在流程和责任界定。',
      tags: ['银行', '监管', '部署'],
      takeaway: '企业 AI 落地，往往卡在制度不是模型。'
    },
    {
      id: '2026-03-24-19',
      source: 'JPMorganChase',
      time: '03-24 04:30',
      level: '常规',
      title: '摩根大通讨论下一代 AI Agents 的安全问题',
      summary: '大型金融机构已把 Agent 安全视为独立议题，不再把它简单当成传统模型风险的延伸。',
      tags: ['Agent', '安全', '金融'],
      takeaway: 'Agent 真正进企业前，安全会先走一步。'
    },
    {
      id: '2026-03-24-20',
      source: 'Cisco / Yahoo Finance',
      time: '03-24 04:05',
      level: '常规',
      title: 'Cisco 发布面向 AI agents 的新安全服务',
      summary: 'Cisco 继续把网络安全能力包装成 AI agent 时代的新基础服务，押注企业会为代理风险单独采购。',
      tags: ['Cisco', 'Agent', '网络安全'],
      takeaway: 'Agent 安全正在形成独立预算项。'
    },
    {
      id: '2026-03-24-21',
      source: 'NVIDIA Developer',
      time: '03-24 04:28',
      level: '常规',
      title: 'NVIDIA 持续强调工业、医疗、机器人边缘推理场景',
      summary: '除通用算力外，NVIDIA 正用垂直行业叙事加强其软硬件一体优势。',
      tags: ['NVIDIA', '行业 AI', '边缘'],
      takeaway: '行业化叙事是算力厂商维持溢价的重要方式。'
    },
    {
      id: '2026-03-24-22',
      source: 'MacRumors',
      time: '03-24 01:16',
      level: '常规',
      title: '市场预计苹果将在 WWDC 2026 展示更多 AI 能力',
      summary: '虽然还不是正式发布，但外界预期已重新聚焦苹果 AI 进展，说明终端 AI 竞争仍会看苹果怎么补课。',
      tags: ['Apple', '终端 AI', '预期'],
      takeaway: '苹果哪怕没发新品，市场也盯着它的 AI 节奏。'
    },
    {
      id: '2026-03-24-23',
      source: 'Reuters',
      time: '03-23 20:13',
      level: '常规',
      title: '汇丰希望通过 AI 推动降本增效',
      summary: '从任命 AI 高管到明确成本目标，传统金融机构对 AI 的核心诉求仍然非常现实：效率和利润。',
      tags: ['HSBC', '降本增效', '金融 AI'],
      takeaway: '企业买 AI，最后看的是财务结果。'
    },
    {
      id: '2026-03-24-24',
      source: 'SCMP / Reuters',
      time: '03-24 06:34',
      level: '常规',
      title: '海外舆论持续关注中国在开源模型与制造侧的综合优势',
      summary: '相关报道延续“开源模型 + 供应链能力”会改变全球 AI 竞争格局的判断。',
      tags: ['开源', '中国 AI', '供应链'],
      takeaway: 'AI 竞争正从模型能力扩展到产业体系。'
    },
    {
      id: '2026-03-24-25',
      source: 'Axios',
      time: '03-23 21:23',
      level: '常规',
      title: '美国保守派新组织推动更强硬 AI 监管',
      summary: 'AI 监管已经明显跨党派，后续美国市场的合规预期不会轻松。',
      tags: ['监管', '美国', '政策'],
      takeaway: 'AI 监管不是短期噪音，而是常态化变量。'
    },
    {
      id: '2026-03-24-26',
      source: 'Government / Governing',
      time: '03-24 03:46',
      level: '常规',
      title: '白宫 AI 框架被解读为可能压制部分州级 AI 法规',
      summary: '联邦与州层面的监管边界仍在拉扯，企业后续做跨州 AI 产品仍需关注适用规则变化。',
      tags: ['白宫', '州法', '合规'],
      takeaway: '美国 AI 合规的复杂度短期还在上升。'
    },
    {
      id: '2026-03-24-27',
      source: 'Federal News Network',
      time: '03-24 05:34',
      level: '常规',
      title: '美国政府继续推进在政务体系采用 AI',
      summary: '政务 AI 推进速度不慢，但外界焦点仍在治理、采购与责任划分。',
      tags: ['政务 AI', '美国', '采购'],
      takeaway: '政务 AI 会是大厂和咨询公司都不想错过的市场。'
    },
    {
      id: '2026-03-24-28',
      source: 'IBM Newsroom',
      time: '03-24 05:45',
      level: '常规',
      title: 'IBM 继续强化企业对 AI 可解释性与清晰度的讨论',
      summary: 'IBM 的叙事仍然围绕企业可信 AI，说明大企业采购侧对“稳定可控”需求没变。',
      tags: ['IBM', '可信 AI', '企业 AI'],
      takeaway: '企业市场依旧吃“合规+可解释”这套。'
    },
    {
      id: '2026-03-24-29',
      source: 'Open finance / Bloomberg',
      time: '03-24 01:52',
      level: '常规',
      title: '摩根大通推出与 AI 债务风险相关的新对冲思路',
      summary: '金融机构开始把 AI 主题拆成更可交易的风险因子，说明资本市场已在为 AI 基础设施周期定价。',
      tags: ['Bloomberg', '资本市场', 'AI 基建'],
      takeaway: 'AI 影响已从科技股扩散到更复杂的金融产品。'
    },
    {
      id: '2026-03-24-30',
      source: 'Reuters / CNBC / Guardian 汇总',
      time: '03-23 22:00',
      level: '常规',
      title: 'AI 财富分配与生产率外溢再次成为主流财经讨论主题',
      summary: '过去一天多家主流媒体集中讨论 AI 是否会扩大贫富差距，说明市场情绪开始从“技术能力”进一步切到“分配结果”。',
      tags: ['宏观', '生产率', '财富分配'],
      takeaway: 'AI 叙事正在从工具层走向更大的经济议题。'
    }
  ]
}

export const urgentUpdates = [
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
