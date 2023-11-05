import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import SideBar from '@/components/Roadmap/manage/SideBar';
import Table from '@/components/Roadmap/manage/member/Table';
import TabBar from '@/components/Roadmap/manage/mobile/TabBar';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const Member = () => {
  return (
    <Root>
      <Container>
        <Responsive device="desktop">
          <LeftArea>
            <SideBar />
          </LeftArea>
        </Responsive>

        <Responsive device="mobile">
          <TabBar />
        </Responsive>

        <RightArea>
          <Header>구성원 관리</Header>
          <Table />
        </RightArea>
      </Container>
    </Root>
  );
};

setLayout(Member, HeaderLayout);

export default Member;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (!isUserLogin) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0;
  }
`;

export const Container = styled.main`
  display: flex;
  height: 100%;

  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: column;
  }
`;

export const LeftArea = styled.aside`
  position: sticky;
  top: ${({ theme }) => theme.layout.main.GNBHeight};
  width: 200px;
  padding: 0.5rem;
  height: ${({ theme }) => `calc(100vh - ${theme.layout.main.GNBHeight})`};
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

export const RightArea = styled.main`
  padding: 2.5rem 5rem 5rem 3.5rem;
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding: 20px 48px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    padding: 0;
  }
`;

export const Header = styled.h1`
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    width: 100%;
    justify-content: space-between;
    padding: 8px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    display: none;
  }
`;
