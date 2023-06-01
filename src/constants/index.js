import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hexing,
  mingjiang,
  taiyi,
  explorer,
  udunwallet,
  hexingapp,
  threejs,
  jg,
} from '@/assets'

export const navLinks = [
  {
    id: 'about',
    title: '关于',
  },
  {
    id: 'work',
    title: '经历',
  },
  {
    id: 'contact',
    title: '联系我',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DevOps Engineer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Android开发',
    company_name: '明匠智能',
    job_description: '在「产品研发部」中作为基础组件开发的成员，主要担任以下职责：',
    icon: mingjiang,
    iconBg: '#E6DEDD',
    date: '2017.06 - 2018.11',
    points: [
      '提取开发中的公共组件模块，合理分类并封装它们，提升组件复用性，减少团队任务量从而提升开发效率。',
      '参与项目的搭建，选用合适的架构，合理分包，使可读性更好，促进团队开发效率。',
      '参与多个项目的用户界面设计，可灵活运用原生组件，追求良好的用户体验。',
    ],
  },
  {
    title: 'Android高级开发',
    company_name: '和行科技',
    job_description:
      '在「信息技术部」担任Android技术组长，主要负责 移动端和H5的软件的开发、维护、迭代和重构，主要内容如下：',
    icon: hexing,
    iconBg: '#383E56',
    date: '2018.12 - 2020.08',
    points: [
      '主导项目重构工作，对模块进行组件化拆分，大幅提升团队协作开发效率。',
      '对项目性能优化及稳定性优化。',
      '制定团队代码规范及提交流程规范，并集成gradle脚本进行自动化检测。',
      '主导技术交流会议，定期进行技术分享会，带领团队技术提升。',
    ],
  },
  {
    title: 'App架构师/DevOps',
    company_name: '太壹科技',
    job_description:
      '作为App端Leader，主要负责难题攻坚、架构设计实施、开发人员工具、开发流程管理、代码规范等工作，并作出了以下几点主要贡献：',
    icon: taiyi,
    iconBg: '#E6DEDD',
    date: '2020.09 - 2021.05',
    points: [
      '搭建Android项目模板。其中主要包含以下几个方面：1. 基础架构层，包含MVVM及MVI两种模式，并支持单元测试； 2. 视图层，实现主题化UI库，提供多种自定义控件; 3. 工具层，提供代码生成工具，减少重复劳动',
      'CI/CD工作流。从0到1搭建code quality(静态代码检查) → build(构建验证) → testing(核心功能单元测试) → release(打包) → delivery(交付至分发平台)的App开发流程，极大提升开发效率及质量。',
      'Flutter落地实践。带领团队成员落地Flutter应用，并构建Flutter基础架构，包括MVVM，Network，Data，错误处理，主题，国际化，静态代码审查，单元测试等一整套方案。',
    ],
  },
  {
    title: '研发经理/全栈开发',
    company_name: '中科晶格',
    job_description:
      '作为区块链实验室研发经理，带领10人团队以敏捷方式快速交付功能，进行版本迭代，同时以全栈工程师的角色进行核心模块开发。主要工作如下：',
    icon: jg,
    iconBg: '#383E56',
    date: '2021.06 - 至今',
    points: [
      '区块链SDK开发。使用TypeScript和Rust为公司自研链提供SDK开发，并开发相关的Cli工具，提升开发效率。',
      '区块链中台开发。基于SDK使用Nodejs开发了区块链中台，承担应用层与链交互的桥梁；主要包含交易签名、智能合约、区块浏览器等模块。',
      '区块链应用开发。包含区块链浏览器、BaaS管理后台、区块链钱包、NFT商城，DID App等前后端应用。',
      '开发流程标准化。使用Gitlab CI对整个产品线10+个项目进行管理，搭建起代码质量检测、构建Docker镜像、Kubernetes部署的持续集成流程。',
    ],
  },
]

const projects = [
  {
    name: '晶格区块链浏览器',
    description:
      '基于web的查询链上全部数据的工具，主要用于查看联盟链的账户晶格、守护链、交易、合约、上链数据、数据统计以及DApp等信息。',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'graphpql',
        color: 'pink-text-gradient',
      },
    ],
    image: explorer,
    source_code_link: 'https://github.com/',
  },
  {
    name: '优盾企业钱包',
    description:
      '为数字资产平台量身定制的加密资产非托管去中心化管理解决方案。支持全币种多人协同共管，帮助企业安全高效的管理大额资产。',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: udunwallet,
    source_code_link: 'https://github.com/',
  },
  {
    name: '和行约车',
    description: '一款移动出行约车服务平台，致力于为用户提供安全、快捷、舒适、绿色、满意的一站式智能出行解决方案。',
    tags: [
      {
        name: 'kotlin',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android',
        color: 'green-text-gradient',
      },
      {
        name: 'WebSocket',
        color: 'pink-text-gradient',
      },
    ],
    image: hexingapp,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, projects }
