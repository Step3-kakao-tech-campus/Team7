import Avatar from '@/components/common/Avatar';
import GNB from '@/components/common/GNB';
import Input from '@/components/common/Input';
import Collapsible from '@/components/main/Collapsible';
import * as Styled from './style';

const Home = () => {
  return (
    <>
      <GNB />
      <Styled.Root>
        <Styled.Inner>
          <Styled.LeftArea>
            <Avatar imageWidth={240} imageHeight={240} iconName="ic_profile" />
            <Input
              css={Styled.InputContainerStyles}
              inputStyles={Styled.InputStyles}
              placeholder="검색어를 입력하세요"
              endIcon="ic_search_2x"
            />

            <Styled.CategoryTitle>TIL 목록</Styled.CategoryTitle>

            <Styled.ShowAllButton>목록 전체보기</Styled.ShowAllButton>

            <Styled.CollapsibleContainer>
              <Collapsible>
                <Collapsible.Header>개인 TIL</Collapsible.Header>
                <Collapsible.Item>
                  <div>- 자바 로드맵</div>
                  <div>- 리액트 로드맵</div>
                  <div>- JavaScript 입문 로드맵</div>
                </Collapsible.Item>
              </Collapsible>
              <Collapsible>
                <Collapsible.Header>로드맵 TIL</Collapsible.Header>
                <Collapsible.Item>
                  <div>- 자바 로드맵</div>
                  <div>- 리액트 로드맵</div>
                  <div>- JavaScript 입문 로드맵</div>
                  <div>- 자바 로드맵</div>
                  <div>- 리액트 로드맵</div>
                  <div>- JavaScript 입문 로드맵</div>
                </Collapsible.Item>
              </Collapsible>
            </Styled.CollapsibleContainer>
          </Styled.LeftArea>

          <Styled.RightArea>hihi</Styled.RightArea>
        </Styled.Inner>
      </Styled.Root>
    </>
  );
};

export default Home;
