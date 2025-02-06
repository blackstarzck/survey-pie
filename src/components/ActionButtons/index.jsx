import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnsers';
import questionsLengthState from '../../store/survey/questionsLengthState';
import postAnswers from '../../services/postAnswers';

const ActionButtons = () => {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const questionLength = useRecoilValue(questionsLengthState);

  const isLast = questionLength - 1 === step;
  const navigate = useNavigate();

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
            postAnswers(surveyId, answers);
            navigate('/complete');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
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
