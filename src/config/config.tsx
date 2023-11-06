import {
  InsuranceOutlined,
  CrownOutlined,
  PayCircleOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';

export default {
  route: {
    routes: [
      {
        path: 'user',
        name: '玩家中心',
        icon: <UserOutlined />,
        routes: [
          {
            path: 'list',
            name: '玩家列表',
            component: './docs',
          },
        ],
      },
      {
        path: 'season',
        name: '赛季中心',
        icon: <CrownOutlined />,
        routes: [
          {
            path: 'rankList',
            name: '赛季排行',
            component: './Welcome',
          },
          {
            path: 'award',
            name: '赛季获奖记录',
            component: './Welcome',
          },
        ],
      },
      {
        path: 'pay',
        name: '交易中心',
        icon: <PayCircleOutlined />,
        routes: [
          {
            path: 'auction',
            name: '拍卖卡牌列表',
            component: './Welcome',
          },
          {
            path: 'exchange',
            name: '交易卡牌列表',
            component: './Welcome',
          },
        ],
      },
      {
        path: 'pledge',
        name: '质押中心',
        icon: <InsuranceOutlined />,
        routes: [
          {
            path: 'list',
            name: '质押列表',
            component: './Welcome',
          },
          {
            path: 'draw',
            name: '质押抽卡列表',
            component: './Welcome',
          },
          {
            path: 'fgc',
            name: 'FGC抽卡列表',
            component: './Welcome',
          },
        ],
      },
      {
        path: 'setting',
        name: '系统设置',
        icon: <HomeOutlined />,
        routes: [
          {
            path: 'organization',
            name: '组织架构',
            component: './Welcome',
          },
        ],
      },
    ],
  },
};
