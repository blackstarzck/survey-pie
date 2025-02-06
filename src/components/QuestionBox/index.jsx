import styled from 'styled-components';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';

const QuestionBox = () => {
  const question = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer();

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
