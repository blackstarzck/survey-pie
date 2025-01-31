import React from 'react';
import textState from '../../store/test/atom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import testWithComma from '../../store/test/testWithComma';

const CompletionPage = () => {
  const text = useRecoilValue(testWithComma);

  return <CompletionPageWrapper>{text}</CompletionPageWrapper>;
};

const CompletionPageWrapper = styled.div``;

export default CompletionPage;
