// statys
// pending, in-progress, done

import styled from 'styled-components';

const Bar = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 16px;
  background-color: ${({ status }) => {
    if (status === 'pending') return '#E3E2E7';
    if (status === 'in-progress') return '#6542F1';
    if (status === 'done') return '#BAA9FF';
  }};
`;

export default Bar;
