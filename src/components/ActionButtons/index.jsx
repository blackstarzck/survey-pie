import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const ActionButtons = ({ questionLength, step }) => {
  let isLast = questionLength - 1 === step;
  const navigate = useNavigate();

  return (
    <div>
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
    </div>
  );
};

export default ActionButtons;
