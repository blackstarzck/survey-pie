import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import SelectInput from '../SelectInput';

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
    <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
  );
};

export default Body;
