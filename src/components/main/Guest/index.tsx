import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import FeatureSection from '@/components/main/Guest/FeatureSection';
import * as SectionStyled from '@/components/main/Guest/FeatureSection/style';
import Typer from '@/components/main/Guest/Typer';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const Guest = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Styled.Root>
        <Styled.LeftTopGradientContainer>
          <Styled.LeftTopGradient />
        </Styled.LeftTopGradientContainer>

        <Styled.RightBottomGradientContainer>
          <Styled.RightBottomGradient />
        </Styled.RightBottomGradientContainer>

        <Styled.TyperBox>
          <div>꾸준하고픈 개발자의</div>
          <Typer
            sequence={[
              [{ text: '모든 단계를 ' }, { text: '기록', style: { color: '#EF4365' } }, { text: '하는 공간' }],
              [{ text: '모든 단계를 ' }, { text: '공유', style: { color: '#EF4365' } }, { text: '하는 공간' }],
              [{ text: '목표를 ' }, { text: '성취', style: { color: '#EF4365' } }, { text: '하는 공간' }],
            ]}
            span={{
              fill: 1500,
              full: 1500,
              erase: 1000,
              empty: 300,
            }}
          />{' '}
          {/* 높이 유지용 빈칸 디폴트로 빈칸을 넣어놓았음 */}
        </Styled.TyperBox>
        <Styled.SubTitle>
          <div>TIL-y 에서 학습 방향성을 제공받고 공유하며 성장해보세요.</div>
        </Styled.SubTitle>

        <Styled.ButtonContainer onClick={() => router.push(tilyLinks.verify())}>
          <Button css={Styled.ButtonStyles}>Get Started</Button>
        </Styled.ButtonContainer>

        <Styled.IntroSection>
          <SectionStyled.HardWareContainer>
            <Image src="/assets/images/landing1.png" alt="TIL-y" width={980} height={540} />
          </SectionStyled.HardWareContainer>
        </Styled.IntroSection>

        <FeatureSection
          title={SECTION.roadmap.title}
          width={SECTION.roadmap.width}
          height={SECTION.roadmap.height}
          alt={SECTION.roadmap.alt}
          imgsrc={SECTION.roadmap.imgsrc}
        />

        <FeatureSection
          title={SECTION.github.title}
          width={SECTION.github.width}
          height={SECTION.github.height}
          alt={SECTION.github.alt}
          imgsrc={SECTION.github.imgsrc}
        />

        <FeatureSection
          title={SECTION.share.title}
          width={SECTION.share.width}
          height={SECTION.share.height}
          alt={SECTION.share.alt}
          imgsrc={SECTION.share.imgsrc}
        />

        <FeatureSection
          title={SECTION.group.title}
          width={SECTION.group.width}
          height={SECTION.group.height}
          alt={SECTION.group.alt}
          imgsrc={SECTION.group.imgsrc}
        />

        <FeatureSection
          title={SECTION.team.title}
          width={SECTION.team.width}
          height={SECTION.team.height}
          alt={SECTION.team.alt}
          imgsrc={SECTION.team.imgsrc}
        />

        <SectionStyled.FeatureSection>
          <SectionStyled.SectionTitle>이 모든것을 TIL-y 에서</SectionStyled.SectionTitle>
          <Styled.ButtonContainer>
            <Button css={Styled.StartButtonStyles} onClick={() => router.push(tilyLinks.verify())}>
              시작하기
            </Button>
          </Styled.ButtonContainer>
        </SectionStyled.FeatureSection>
      </Styled.Root>
      <Footer />
    </>
  );
};

export default Guest;

const SECTION = {
  roadmap: {
    title: '개발공부의 방향성 제시',
    width: 980,
    height: 540,
    imgsrc: '/assets/images/roadmap.gif',
    alt: '개발공부의 방향성 제시',
  },
  github: {
    title: 'TIL 깃허브 업로드',
    width: 980,
    height: 540,
    imgsrc: '/assets/images/roadmap.gif',
    alt: 'TIL 깃허브 업로드',
  },
  share: {
    title: '동일 주제에 대한 TIL 공유 기능',
    width: 980,
    height: 540,
    imgsrc: '/assets/images/roadmap.gif',
    alt: '동일 주제에 대한 TIL 공유 기능',
  },
  group: {
    title: '그룹 로드맵 생성',
    width: 980,
    height: 540,
    imgsrc: '/assets/images/roadmap.gif',
    alt: '그룹 로드맵 생성',
  },
  team: {
    title: '팀 내 학습 관리',
    width: 980,
    height: 540,
    imgsrc: '/assets/images/roadmap.gif',
    alt: '팀 내 학습 관리',
  },
};