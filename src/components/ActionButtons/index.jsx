import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';
import questionsLengthState from '../../store/survey/questionsLengthState';
import postAnswers from '../../services/postAnswers';
import { useState } from 'react';

const ActionButtons = () => {
  const [isPosting, setIsPosting] = useState(false);
  const step = useStep();
  const surveyId = useSurveyId();
  const [answers, setAnswers] = useAnswers();
  const questionLength = useRecoilValue(questionsLengthState);
  const isRequired = useRequiredOption();

  const isLast = questionLength - 1 === step;
  const navigate = useNavigate();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                setAnswers([]);
                navigate(`/complete/${surveyId}`);
              })
              .catch((error) => {
                setIsPosting(false);
                console.log(error);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          disabled={isBlockToNext}
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
};

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default ActionButtons;
