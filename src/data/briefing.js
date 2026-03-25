export const briefingMeta = {
  siteTitle: 'AI 行业快讯',
  intro: '聚合前 24 小时 AI 热点、产品更新、模型发布和行业动态。默认每天早上 8 点发布一版；遇到重大模型、平台或融资发布，再做突发更新。',
  publishRule: '每日 08:00 固定更新，约 30 条；重大事件实时插播。',
  timezone: 'Asia/Shanghai'
}

export const dailyIssue = {
  issueDate: '2026-03-25',
  window: '2026-03-24 08:00 ~ 2026-03-25 08:00',
  updatedAt: '2026-03-25 08:00',
  summary: '过去 24 小时，AI 圈真正够重的消息主要落在三条线：Google AI Studio 把 vibe coding 继续推向全栈应用开发；OpenAI 先后出现 Sora 关停、追加融资与开源安全工具更新；开源 Agent、企业 AI 基建和融资事件同步升温。今天硬核模型发布不算密，但平台、Agent 工具、企业基础设施和资金动作很扎堆。',
  tags: ['Google AI Studio', 'OpenAI', 'Sora', '开源 Agent', '企业 AI', '融资', '基础设施'],
  items: [
    {
      id: '2026-03-25-01',
      source: 'Google',
      time: '03-25 06:32',
      level: '重点',
      title: 'Google AI Studio 推出新的全栈 vibe coding 体验',
      summary: 'Google 官方把 AI Studio 从模型调用继续往页面、应用和开发工作流一体化推进，目标很明确：直接抢开发者原型到成品这一段。',
      tags: ['Google', 'AI Studio', '开发工具'],
      takeaway: 'AI IDE 竞争已经从聊天框升级到整套应用搭建体验。'
    },
    {
      id: '2026-03-25-02',
      source: 'OpenAI / WSJ / NYT',
      time: '03-25 05:56',
      level: '重点',
      title: 'OpenAI 被曝关停 Sora 视频平台',
      summary: '多家主流媒体在过去 24 小时集中报道 Sora 平台被关停，连带 Disney 相关合作也被指终止，视频生成赛道再洗一次牌。',
      tags: ['OpenAI', 'Sora', '视频生成'],
      takeaway: 'AI 视频不是只看发布热度，产品持续经营能力同样残酷。'
    },
    {
      id: '2026-03-25-03',
      source: 'CNBC',
      time: '03-25 06:16',
      level: '重点',
      title: 'OpenAI 追加融资，单轮总额据称扩大到 1200 亿美元',
      summary: 'CNBC 报道 OpenAI 又补进资金，把这轮融资规模推到新高，说明顶级模型公司依旧能持续吸走资本。',
      tags: ['OpenAI', '融资', '资本'],
      takeaway: '头部模型公司的资本门槛还在往上抬。'
    },
    {
      id: '2026-03-25-04',
      source: 'Zhipu / AOL',
      time: '03-25 04:00',
      level: '重点',
      title: '智谱发布新旗舰模型 GLM-5',
      summary: '智谱在过去 24 小时放出新一代旗舰模型，给中文模型市场又加了一次强刺激。',
      tags: ['智谱', 'GLM-5', '模型发布'],
      takeaway: '国内旗舰模型竞争还在高频推进。'
    },
    {
      id: '2026-03-25-05',
      source: 'Ai2',
      time: '03-24 23:10',
      level: '重点',
      title: 'Ai2 开源 MolmoWeb，切入网页自动化 Agent',
      summary: 'Ai2 发布开放式网页 Agent，可直接操控浏览器执行任务，公开对位 OpenAI、Google 和 Anthropic 的闭源路线。',
      tags: ['Ai2', '开源', 'Web Agent'],
      takeaway: '网页 Agent 赛道开始从闭源秀肌肉变成开源正面硬刚。'
    },
    {
      id: '2026-03-25-06',
      source: 'Microsoft',
      time: '03-24 23:00',
      level: '重点',
      title: '微软发布 AI for nuclear energy 方案',
      summary: '微软把 AI 与核能、电网韧性和关键基础设施绑定，方向不是新模型，而是把 AI 叙事继续推向能源系统。',
      tags: ['Microsoft', '能源', '基础设施'],
      takeaway: 'AI 基建竞争正延伸到电力和能源调度。'
    },
    {
      id: '2026-03-25-07',
      source: 'Microsoft',
      time: '03-24 23:00',
      level: '重点',
      title: '微软发布 Supply Chain 2.0，主打仿真、AI Agents 与物理 AI',
      summary: '微软继续往供应链仿真和企业智能体落地推进，明显在做“行业工作流 + agent”组合。',
      tags: ['Microsoft', '供应链', 'Agents'],
      takeaway: '企业 AI 正从 Copilot 式助手，往流程级自动化过渡。'
    },
    {
      id: '2026-03-25-08',
      source: 'The Verge',
      time: '03-25 04:43',
      level: '重点',
      title: 'Arm 首颗自研 CPU 将进入 Meta AI 数据中心',
      summary: 'Arm 首次自研 CPU 直接瞄准 Meta 的 AI 数据中心场景，算力栈的变量不再只有 GPU。',
      tags: ['Arm', 'Meta', '数据中心'],
      takeaway: 'AI 基础设施的博弈开始往 CPU、互连和整机平台扩散。'
    },
    {
      id: '2026-03-25-09',
      source: 'Google Research',
      time: '03-25 03:56',
      level: '常规',
      title: 'Google Research 发布 TurboQuant 压缩方案',
      summary: 'Google 继续围绕极致压缩和效率优化做文章，目标还是降低模型推理和部署成本。',
      tags: ['Google', '模型压缩', '效率'],
      takeaway: '效率优化依旧是今年最稳定的技术主线之一。'
    },
    {
      id: '2026-03-25-10',
      source: 'Oracle',
      time: '03-24 16:43',
      level: '常规',
      title: 'Oracle 发布 Private Agent Factory',
      summary: 'Oracle 把 Agent 工厂和数据库能力捆在一起卖，主打企业内部私有化 Agent 的可管可控。',
      tags: ['Oracle', 'Agent', '企业 AI'],
      takeaway: '数据库和云厂商都在争企业 Agent 的底座。'
    },
    {
      id: '2026-03-25-11',
      source: 'NVIDIA',
      time: '03-24 16:09',
      level: '常规',
      title: 'NVIDIA 向 Kubernetes 社区捐赠 GPU 动态资源分配驱动',
      summary: 'NVIDIA 把 GPU 资源调度能力继续往开源社区下放，方便 AI 集群和 K8s 体系更细粒度分配算力。',
      tags: ['NVIDIA', 'Kubernetes', '开源'],
      takeaway: 'GPU 编排层正在变成 AI 基础设施的新战场。'
    },
    {
      id: '2026-03-25-12',
      source: 'OpenAI',
      time: '03-25 03:20',
      level: '常规',
      title: 'OpenAI 发布面向青少年安全的开源提示词工具包',
      summary: 'OpenAI 开源一套针对未成年人性内容、自伤信息等高风险场景的安全提示词与开发工具。',
      tags: ['OpenAI', '安全', '开源'],
      takeaway: 'AI 安全工具开始更具体地落到垂直风险场景。'
    },
    {
      id: '2026-03-25-13',
      source: 'WSJ',
      time: '03-25 01:18',
      level: '常规',
      title: 'Meta 高层推动员工更广泛使用 AI',
      summary: 'Meta 正从组织层面要求更多内部团队用起 AI，说明大厂内部生产工具普及还在加速。',
      tags: ['Meta', '组织', '效率工具'],
      takeaway: '内部先把 AI 用起来，已经成了大厂共识。'
    },
    {
      id: '2026-03-25-14',
      source: 'WSJ / PYMNTS',
      time: '03-25 00:15',
      level: '常规',
      title: 'Meta 由 CTO 牵头推进员工 AI 工具采用',
      summary: '这不是单点试点，而是高层主导的组织工程，目标是把 AI 变成日常工作流的一部分。',
      tags: ['Meta', 'CTO', '工作流'],
      takeaway: '企业内部 AI 推广越来越像管理项目，不只是技术项目。'
    },
    {
      id: '2026-03-25-15',
      source: 'The Information',
      time: '03-25 03:58',
      level: '常规',
      title: 'OpenAI CEO 调整职责并筹备新模型项目 Spud',
      summary: '报道称 OpenAI 内部正在调整负责人分工，同时为代号 Spud 的新模型项目做准备。',
      tags: ['OpenAI', '组织', '模型研发'],
      takeaway: '头部模型公司一边烧钱，一边还在重排内部节奏。'
    },
    {
      id: '2026-03-25-16',
      source: 'CBS / WIRED',
      time: '03-25 07:46',
      level: '常规',
      title: '法官称五角大楼针对 Anthropic 的举动“令人不安”',
      summary: '相关案件在过去 24 小时发酵，外界关注点落在政府与 AI 公司之间的竞争边界与程序正义。',
      tags: ['Anthropic', 'Pentagon', '监管'],
      takeaway: 'AI 公司和政府机构的关系，后面只会更复杂。'
    },
    {
      id: '2026-03-25-17',
      source: 'TechCrunch',
      time: '03-25 01:18',
      level: '常规',
      title: 'Doss 完成 5500 万美元融资，做 ERP 接入型 AI 库存管理',
      summary: 'Doss 主打把 AI 直接插进 ERP 和库存运营流程，属于很现实的企业降本场景。',
      tags: ['融资', 'ERP', '企业软件'],
      takeaway: '能嵌进老系统的 AI，更容易拿到企业预算。'
    },
    {
      id: '2026-03-25-18',
      source: 'CRN',
      time: '03-25 02:34',
      level: '常规',
      title: 'Gimlet Labs A 轮融资 8000 万美元，押注 AI 推理软件',
      summary: 'Gimlet Labs 从推理软件层切入，继续证明“降低推理成本”仍是热门创业方向。',
      tags: ['融资', '推理', '基础设施'],
      takeaway: '推理优化还是资本最认的硬需求之一。'
    },
    {
      id: '2026-03-25-19',
      source: 'TechCrunch',
      time: '03-24 21:00',
      level: '常规',
      title: 'Mirage 融资 7500 万美元，继续做 AI 视频编辑应用 Captions 背后的模型',
      summary: '视频 AI 赛道虽然波动大，但围绕具体产品场景的模型公司依旧能拿到钱。',
      tags: ['融资', '视频 AI', '应用'],
      takeaway: '视频生成的机会更偏产品化，不只是底模。'
    },
    {
      id: '2026-03-25-20',
      source: 'SiliconANGLE',
      time: '03-25 07:58',
      level: '常规',
      title: 'Highlight AI 融资 4000 万美元并更换 CEO',
      summary: 'AI 生产力工具公司继续拿钱，但同时也在快速调整组织和管理层。',
      tags: ['融资', '生产力工具', '组织'],
      takeaway: 'AI 应用公司抢时间窗口时，融资和换帅经常同步出现。'
    },
    {
      id: '2026-03-25-21',
      source: 'Greater Geneva Bern area',
      time: '03-24 22:49',
      level: '常规',
      title: 'Kandou AI 融资 2.25 亿美元，瞄准 AI 数据传输瓶颈',
      summary: 'Kandou AI 押注的是数据移动这一类“脏但刚需”的基础设施问题。',
      tags: ['融资', '互连', '基础设施'],
      takeaway: 'AI 瓶颈不只有算力，数据搬运同样值钱。'
    },
    {
      id: '2026-03-25-22',
      source: 'Bloomberg',
      time: '03-24 23:00',
      level: '常规',
      title: 'Figure AI 创始人新项目计划做一系列 AI 设备',
      summary: '硬件创业者还在试图把 AI 做成终端设备家族，而不是单一功能产品。',
      tags: ['Figure AI', 'AI 硬件', '设备'],
      takeaway: 'AI 硬件还远没到收官，大家都想赌下一代入口。'
    },
    {
      id: '2026-03-25-23',
      source: 'MoonPay',
      time: '03-24 19:07',
      level: '常规',
      title: 'MoonPay 发布面向 AI Agents 的开源钱包标准',
      summary: 'MoonPay 想先占住 Agent 钱包接口标准，让代理具备可调用、可支付、可结算能力。',
      tags: ['Agent', '支付', '开源标准'],
      takeaway: 'Agent 商业化最终还是要落到账户和支付。'
    },
    {
      id: '2026-03-25-24',
      source: 'NetFoundry',
      time: '03-25 01:00',
      level: '常规',
      title: 'NetFoundry 发布首个面向 AI 工作负载的开源 Zero Trust Enclave',
      summary: 'AI 工作负载专用的零信任隔离开始有单独开源产品，安全栈继续细分。',
      tags: ['安全', 'Zero Trust', '开源'],
      takeaway: 'AI 工作负载安全正在形成独立产品层。'
    },
    {
      id: '2026-03-25-25',
      source: 'Siemens / EE Times Asia',
      time: '03-25 07:34',
      level: '常规',
      title: '西门子推出面向芯片与 PCB 工作流的 AI Agent',
      summary: '西门子把 AI Agent 嵌入半导体、3D IC 和 PCB 流程，制造业软件也开始卷智能体。',
      tags: ['Siemens', '工业软件', 'Agent'],
      takeaway: '垂直行业 Agent 正在快速渗透到专业软件。'
    },
    {
      id: '2026-03-25-26',
      source: 'Sonatype',
      time: '03-25 00:50',
      level: '常规',
      title: 'Sonatype 提醒 AI 编码安全不能只靠更大模型',
      summary: 'Sonatype 强调实时软件情报和依赖治理的重要性，给“模型更强就更安全”泼了盆冷水。',
      tags: ['AI Coding', '安全', '软件供应链'],
      takeaway: '代码安全问题最后还是得回到工程系统。'
    },
    {
      id: '2026-03-25-27',
      source: 'SUSE',
      time: '03-25 01:45',
      level: '常规',
      title: 'SUSE 主打开放基础设施升级 AI 现代化',
      summary: 'SUSE 继续把开源基础设施包装成企业 AI 改造的底座选项。',
      tags: ['SUSE', '开源基础设施', '企业 AI'],
      takeaway: '企业 AI 底层栈之争，本质还是生态和运维能力之争。'
    },
    {
      id: '2026-03-25-28',
      source: 'HPCwire',
      time: '03-25 05:55',
      level: '常规',
      title: '微软在 KubeCon Europe 2026 推进开源 AI 基础设施',
      summary: '微软借 KubeCon 继续强化自己在 Kubernetes 和开源 AI 基础设施上的存在感。',
      tags: ['Microsoft', 'KubeCon', '开源基础设施'],
      takeaway: '开源云原生社区依旧是 AI 基础设施的关键入口。'
    },
    {
      id: '2026-03-25-29',
      source: 'Bloomberg',
      time: '03-25 05:43',
      level: '常规',
      title: '美国用户对中国 AI 产品关注度升温',
      summary: '彭博的观察说明，中国 AI 产品和模型在海外用户侧的存在感还在继续抬升。',
      tags: ['中国 AI', '出海', '市场'],
      takeaway: '全球 AI 用户并不会只盯美国厂商。'
    },
    {
      id: '2026-03-25-30',
      source: 'US Commission / Computerworld',
      time: '03-24 20:34',
      level: '常规',
      title: '美国顾问机构再次警告中国开源 AI 生态可能威胁美国领先地位',
      summary: '围绕中国开源模型与产业配套的讨论继续升温，说明开源已经被正式视作地缘科技变量。',
      tags: ['开源', '中美', '政策'],
      takeaway: '开源生态正在被放进国家竞争框架里看。'
    }
  ]
}

export const urgentUpdates = [
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
