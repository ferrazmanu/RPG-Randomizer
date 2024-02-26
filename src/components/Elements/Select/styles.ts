import styled, { css } from 'styled-components';

interface Props {
  open?: boolean;
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Wrapper = styled.div<Props>`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 38px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  .header {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 28px;

    .header-title {
      font-size: 14px;
    }
  }

  svg {
    position: absolute;

    ${(props) =>
      props.loading
        ? css`
            right: 50%;
            top: 50%;
            transform: translate(50%, -50%);
          `
        : css`
            right: 3px;
            top: 50%;
            transform: translateY(-50%);
            z-index: -1;
          `}
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  width: inherit;
  border-bottom: 1px solid #fff;
  background: #111;
`;

export const Item = styled.li<Props>`
  display: flex;
  gap: 4px;
  width: inherit;
  padding: 10px 5px;
  min-height: 30px;
  font-size: 14px;
  align-items: center;

  ${(props) =>
    props.selected &&
    css`
      background-color: gray;
    `}

  &.select-search {
    position: relative;
    width: inherit;
    font-size: 12px;
    border: 1px solid #fff;
    padding: 0 !important;
    margin-bottom: 5px;

    input {
      width: inherit;
      padding: 0 24px 0 2px;
    }

    button {
      width: min-content;
    }

    svg {
      right: 3px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
    }
  }

  &:hover {
    background-color: gray;
  }

  &:first-child {
    padding: 8px 5px;
    height: 40px;
  }
`;
