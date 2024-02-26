import styled from 'styled-components';

import swordIcon from '../../../../public/assets/static/sword.svg';

export const Header = styled.header`
  display: flex;
  gap: 16px;
  padding: 50px 0;

  ul {
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: space-around;

    li {
      align-items: center;
      display: flex;
      gap: 4px;

      &::after {
        content: url(${swordIcon});
        max-width: 20px;
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
