import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import defaultProps from '@/config/config';
import { Outlet } from 'umi';

export default () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  return (
    <div
      id='test-pro-layout'
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={250}
        title='FingerGuess 管理后台'
        {...defaultProps}
        route={defaultProps.route}
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '测试用户名',
          size: 'small',
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
      >
        <PageContainer fixedHeader>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <Outlet />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};
