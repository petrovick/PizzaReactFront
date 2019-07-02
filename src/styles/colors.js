import { css } from 'styled-components';

const colors = {
  default: css`
    background: #7289da;

    &:hover {
      background: #5f73bc;
    }
  `,
  danger: css`
    background: #e04848;

    &:hover {
      background: #a43d3d;
    }
  `,
  red: css`
    background: #fd003e;
  `,
  gray: css`
    background: #b9bbbe;
    color: #666;

    &:hover {
      background: #999;
    }
  `,
};

export default colors;
