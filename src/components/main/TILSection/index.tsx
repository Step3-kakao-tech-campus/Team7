import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTilsParam } from '@/api/hooks/til';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
import Fallback from '@/components/common/Fallback';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import SearchBar from '@/components/main/SearchBar';
import TIL from '@/components/main/TIL';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import * as Styled from './style';

const TILSection = () => {
  const router = useRouter();
  const { ref, isVisible } = useIntersectionObserver();
  const { tils, isLoading, fetchNextPage, hasNextPage } = useGetTilsParam({ queryKey: [router.query] });

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage, ref]);

  return (
    <Styled.Root>
      <Responsive device="mobile">
        <SearchBar />
      </Responsive>
      <Styled.Container>
        <CustomSuspense isLoading={isLoading} fallback={<TILSection.Skeleton />}>
          <ConditionalRender data={tils} EmptyUI={<TILSection.Empty />}>
            <>
              {tils.map((til, index) => {
                return <TIL til={til} key={index} />;
              })}
            </>
          </ConditionalRender>
        </CustomSuspense>
        <Styled.ObserverInterSectionTarget ref={ref} />
      </Styled.Container>
    </Styled.Root>
  );
};

export default TILSection;

TILSection.Empty = function () {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_peopleTILEmpty.svg" width={200} height={200} alt="다른 사람의 TIL이 없습니다." />
      <Styled.Description>
        <span>작성된 TIL이 없습니다</span>
        <span>TIL 를 작성하고 학습 히스토리를 남겨보세요!</span>
      </Styled.Description>
    </Styled.EmptyRoot>
  );
};

const SKELETON_COUNT = 9;

TILSection.Skeleton = function () {
  return (
    <>
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Skeleton key={index} css={Styled.SkeletonStyles} />
      ))}
    </>
  );
};

TILSection.Fallback = function (props: ErrorBoundaryProps) {
  const { resetErrorBoundary } = props;

  return (
    <Styled.EmptyRoot>
      <Fallback
        onClick={() => {
          resetErrorBoundary();
        }}
      />
    </Styled.EmptyRoot>
  );
};
