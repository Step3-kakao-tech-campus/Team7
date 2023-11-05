import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetRoadmapsMyList } from '@/api/hooks/roadmap';
import GroupCard from '@/components/Roadmap/RoadmapList/GroupCard';
import * as Styled from '@/components/Roadmap/RoadmapList/MyRoadmap/MyRoadmapList/style';
import TilyCard from '@/components/Roadmap/RoadmapList/TilyCard';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Responsive from '@/components/common/Responsive';
import TILY_LINKS from '@/constants/links';

const Slider = () => {
  const { roadmaps, isLoading: isRoadmapLoading } = useGetRoadmapsMyList();

  if (roadmaps?.groups.length === 0 && roadmaps?.tilys.length === 0) {
    return <EmptyMyRoadmap />;
  }

  return (
    <CustomSuspense isLoading={isRoadmapLoading} fallback={<MyRoadmapSkeleton />}>
      <Styled.Slider {...setting}>
        {roadmaps?.groups.map((roadmap, idx) => <GroupCard key={idx} roadmap={roadmap} />)}
        {roadmaps?.tilys.map((roadmap) => <TilyCard key={roadmap.id} roadmap={roadmap} />)}
      </Styled.Slider>
    </CustomSuspense>
  );
};

const MyRoadmapSkeleton = () => {
  return (
    <>
      {' '}
      <Responsive device="desktop">
        <Styled.SkeletonRoot>
          <Styled.Skeleton />
          <Styled.Skeleton />
          <Styled.Skeleton />
          <Styled.Skeleton />
        </Styled.SkeletonRoot>
      </Responsive>
      <Responsive device="mobile">
        <Styled.SkeletonRoot>
          <Styled.Skeleton />
          <Styled.Skeleton />
        </Styled.SkeletonRoot>
      </Responsive>
    </>
  );
};

const EmptyMyRoadmap = () => {
  const router = useRouter();
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="빈 로드맵" width={60} height={60} />
      <p>참여중인 로드맵이 없습니다.</p>
      <p>직접 로드맵을 만들어보세요!</p>
      <Button onClick={() => router.push(TILY_LINKS.roadmapCreate())}>로드맵 만들기</Button>
    </Styled.EmptyRoot>
  );
};

const setting = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

export default Slider;