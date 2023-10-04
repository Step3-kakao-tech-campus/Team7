import type { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import type { CalendarTooltipProps } from '@nivo/calendar';
import { ResponsiveCalendar } from '@nivo/calendar';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import { useGetUserHistory } from '@/hooks/queries/user';
import * as Styled from './style';

const History = () => {
  const { history, isLoading } = useGetUserHistory();

  return (
    <>
      <Styled.HistoryTitle>
        <span>홍박사</span>
        <span>님의 학습 히스토리</span>
      </Styled.HistoryTitle>
      <Styled.Container>
        <CustomSuspense isLoading={isLoading} fallback={<Skeleton css={Styled.SkeletonStyles} />}>
          <ResponsiveCalendar
            data={history}
            from="2023-01-01"
            to="2023-12-31"
            align="top"
            emptyColor="#eeeeee"
            colors={['#EF4365']}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={45}
            yearLegendOffset={12}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            tooltip={CustomTooltip}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
              },
            ]}
          />
        </CustomSuspense>
      </Styled.Container>
    </>
  );
};

export default History;

const CustomTooltip = ({ day }: CalendarTooltipProps) => {
  return <Tooltip>{day}</Tooltip>;
};

const Tooltip = ({ children }: PropsWithChildren) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        padding: 6px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 6px;
        background: #181818;
        color: #ffffff;
        box-shadow:
          0px 2px 4px -2px rgba(16, 24, 40, 0.1),
          0px 4px 6px -1px rgba(0, 0, 0, 0.1);
      `}>
      <div
        css={css`
          position: absolute;
          top: calc(100% - 6px);
          background: #181818;
          width: 12px;
          height: 12px;
          transform: rotate(45deg);
        `}
      />
      {children}
    </div>
  );
};