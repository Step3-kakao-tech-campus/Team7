import styled from '@emotion/styled';

export const Root = styled.button<{ isActiveStep: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 3px 0;
  padding: 0.875rem 1.25rem;
  border-radius: 10px;
  background-color: ${({ theme, isActiveStep }) => isActiveStep && theme.colors.rose_light};

  &:hover {
    background-color: ${({ theme, isActiveStep }) => (isActiveStep ? theme.colors.rose_light : theme.colors.gray_300)};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const CheckIconContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Title = styled.span``;
