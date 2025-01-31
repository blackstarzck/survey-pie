import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import SelectInput from '../SelectInput';
import styled from 'styled-components';

const Body = ({ type, answer, setAnswer, options }) => {
  let InputComponent = null;

  switch (type) {
    case 'select':
      InputComponent = SelectInput;
      break;
    case 'text':
      InputComponent = TextInput;
      break;
    case 'textarea':
      InputComponent = TextAreaInput;
      break;
    default:
      InputComponent = TextInput;
      break;
  }

  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin: 0 38px;
  flex: 1;
`;

export default Body;
