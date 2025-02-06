import styled from 'styled-components';

const TextInput = ({ answer = '', setAnswer, options }) => {
  return (
    <Input
      type="text"
      placeholder={options.placeholder}
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
};

const Input = styled.input`
  width: 100%;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  outline: none;
`;

export default TextInput;
