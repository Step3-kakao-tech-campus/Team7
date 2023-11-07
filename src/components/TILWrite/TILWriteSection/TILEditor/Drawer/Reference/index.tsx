import { useRouter } from 'next/router';
import { useGetRoadmapStepReference } from '@/api/hooks/roadmap';
import Fallback from '@/components/common/Fallback';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';
import Docs from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference/Docs';
import Header from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference/Header';
import Youtube from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference/Youtube';
import * as Styled from './style';

interface ReferenceProps {
  stepTitle: string;
  handleCloseReferenceAside: () => void;
}
const Reference = (props: ReferenceProps) => {
  const { stepTitle, handleCloseReferenceAside } = props;

  const { query } = useRouter();
  const { reference } = useGetRoadmapStepReference({
    roadmapId: Number(query?.roadmapId),
    stepId: Number(query?.stepId),
  });

  return (
    <Styled.Root>
      <Header stepTitle={stepTitle} handleCloseReferenceAside={handleCloseReferenceAside} />

      <Styled.Reference>참고 자료</Styled.Reference>

      {reference?.youtubes?.map((item, index) => {
        return <Youtube key={item.id} index={index + 1} link={item.link} />;
      })}

      {reference?.webs?.map((item, index) => {
        return <Docs key={item.id} index={index + 1} link={item.link} />;
      })}
    </Styled.Root>
  );
};

export default Reference;

Reference.Fallback = function (props: ErrorBoundaryProps) {
  const { resetErrorBoundary } = props;

  return (
    <Styled.FallbackRoot>
      <Fallback
        onClick={() => {
          resetErrorBoundary();
        }}
      />
    </Styled.FallbackRoot>
  );
};
