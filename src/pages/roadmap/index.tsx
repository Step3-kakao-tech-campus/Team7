import styled from '@emotion/styled';
import MyRoadmap from '@/components/Roadmap/MyRoadmap';
import RecruitRoadmap from '@/components/Roadmap/RoadmapList';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapList = () => {
  return (
    <RoadmapListPage>
      <MyRoadmap />
      <RecruitRoadmap />
    </RoadmapListPage>
  );
};

setLayout(RoadmapList, HeaderLayout, false);

export default RoadmapList;

const RoadmapListPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 960px;
  padding: 0 40px;
  margin: 3rem auto 0;
`;
