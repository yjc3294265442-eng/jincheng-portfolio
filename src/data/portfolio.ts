import type { Service, Update, System, Stat } from "@/types";

export const creatorInfo = {
  name: "锦程",
  title: "独立开发者 / AI 探索者 / 数字创作者",
  tag: "OPERATOR TERMINAL",
  bio: "把项目、内容、工具和数据流整理成一个可实时访问的操作终端。不讲故事，只放入口，按需进入即可。",
  avatar: "/avatar.jpg",
};

export const stats: Stat[] = [
  { label: "X / Twitter 关注", value: "5w+" },
  { label: "AI 项目单月营收", value: "100w+" },
  { label: "原创知识库字数", value: "20w+" },
  { label: "创业社群当前价格", value: "499" },
];

export const services: Service[] = [
  {
    id: "community",
    title: "创业社群",
    description: "知识库、微信群、每月线上会、同频资源链接。",
    price: "¥499",
    icon: "Users",
  },
  {
    id: "trading",
    title: "投资交易",
    description: "交易所邀请码、20% 返佣福利和风险提示。",
    price: "返佣福利",
    icon: "TrendingUp",
  },
  {
    id: "transfer",
    title: "中转站业务",
    description: "项目教程、获客方法、合伙人入口和免费学习群。",
    price: "项目入口",
    icon: "ArrowLeftRight",
  },
  {
    id: "accounts",
    title: "账号购买",
    description: "GPT、Claude、Kimi、Google 等主流账号统一入口。",
    price: "独立页面",
    icon: "KeyRound",
  },
];

export const updates: Update[] = [
  {
    id: "1",
    date: "2026-06-27",
    title: "联系页改成表单列表，不再直接放二维码",
    description: "统一通过表单收集需求，减少沟通碎片。",
  },
  {
    id: "2",
    date: "2026-06-25",
    title: "AI 账号购买页新增 AIRROPro 独立入口",
    description: "高阶账号单独成页，方便老用户快速复购。",
  },
  {
    id: "3",
    date: "2026-06-18",
    title: "联系页改为表单列表，不再直接放二维码",
    description: "重复优化，确保所有入口都走统一流程。",
  },
];

export const quickLinks = [
  { label: "创业社群", href: "#community" },
  { label: "投资交易", href: "#trading" },
  { label: "中转站业务", href: "#transfer" },
  { label: "账号购买", href: "#accounts" },
];

export const systems: System[] = [
  {
    id: "content",
    title: "内容系统",
    description: "持续输出可复用的项目复盘与方法论。",
    icon: "FileText",
  },
  {
    id: "traffic",
    title: "流量系统",
    description: "把公域流量沉淀为可触达的私域资产。",
    icon: "Share2",
  },
  {
    id: "product",
    title: "产品系统",
    description: "从需求验证到交付闭环的完整工具链。",
    icon: "Box",
  },
  {
    id: "monetization",
    title: "变现系统",
    description: "社群、工具、交易三条收入线的自动化。",
    icon: "Wallet",
  },
];
