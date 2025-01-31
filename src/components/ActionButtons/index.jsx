import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';

const ActionButtons = ({ questionLength, step }) => {
  let isLast = questionLength - 1 === step;
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
