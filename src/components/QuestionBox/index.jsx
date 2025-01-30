import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

const QuestionBox = () => {
  return (
    <div>
      <Title>타이틀입니다.</Title>
      <Desc>설명입니다.</Desc>
      <Body type={'text'} />
      <ActionButtons type={'text'} />
    </div>
  );
};

export default QuestionBox;
