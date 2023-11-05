import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;

  & > h2 {
    font-size: 28px;

    @media ${({ theme }) => theme.mediaQuery.sm} {
      font-size: 20px;
    }
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1rem;

  & > button {
    border-color: black;
    border-radius: 1.5rem;
    font-weight: 600;

    &:hover {
      background-color: black;
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    justify-content: space-around;
    width: 100%;
    margin-bottom: 15px;

    & > button {
      width: 100%;
      padding: 8px;
      font-size: 14px;
    }
  }
`;