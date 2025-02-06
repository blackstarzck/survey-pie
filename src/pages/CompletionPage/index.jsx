import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import testWithComma from '../../store/test/testWithComma';
import axios from 'axios';

const CompletionPage = () => {
  const text = useRecoilValue(testWithComma);

  return <CompletionPageWrapper>{text}</CompletionPageWrapper>;
};

const CompletionPageWrapper = styled.div``;

export default CompletionPage;
