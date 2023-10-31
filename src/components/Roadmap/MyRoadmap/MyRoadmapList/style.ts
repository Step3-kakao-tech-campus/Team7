import SliderList from 'react-slick';
import styled from '@emotion/styled';
import SkeletonBox from '@/components/common/Skeleton';

export const Slider = styled(SliderList)`
  position: relative;

  & > div {
    overflow: hidden;
  }

  & > div > div {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
  }

  & > button:nth-of-type(1) {
    position: absolute;
    top: 46%;
    left: -35px;
    width: 20px;
    height: 40px;
    background-image: url('/assets/icons/ic_chevronLeftBlack.svg');
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 0;
    transform: translateY(-50%);
  }

  & > button:nth-of-type(2) {
    position: absolute;
    bottom: 54%;
    right: -35px;
    width: 20px;
    height: 40px;
    background-image: url('/assets/icons/ic_chevronRightBlack.svg');
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 0;
    transform: translateY(50%);
  }

  & > ul {
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  & > ul > li > button {
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.gray_600};
    font-size: 0;
  }

  & > ul > li.slick-active > button {
    background-color: ${({ theme }) => theme.colors.black};
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    margin: 0;

    & > div > div {
      gap: 10px;
    }
  }
`;

export const SkeletonRoot = styled.section`
  display: flex;
  gap: 10px;
`;
export const Skeleton = styled(SkeletonBox)`
  width: 100%;
  height: 230px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 55px auto 55px;
`;
