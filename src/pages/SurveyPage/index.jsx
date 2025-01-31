import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import styled from 'styled-components';

const SurveyPage = () => {
  const params = useParams();
  const questions = [
    {
      title: '질문 1',
      desc: '이것은 질문 1입니다.',
      type: 'text',
      options: {
        placeholder: '답변을 입력해주세요.',
      },
      required: false,
    },
    {
      title: '질문 2',
      desc: '이것은 질문 2입니다.',
      type: 'textarea',
      options: {
        placeholder: '답변을 입력해주세요.',
      },
      required: false,
    },
    {
      title: '질문 3',
      desc: '이것은 질문 3입니다.',
      type: 'select',
      options: {
        items: ['답변 1', '답변 2', '답변 3', '답변 4', '답변 5'],
      },
      required: false,
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox
        step={step}
        questionLength={questions.length}
        question={questions[step]}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </SurveyPageWrapper>
  );
};

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
