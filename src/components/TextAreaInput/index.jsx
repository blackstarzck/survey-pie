import styled from 'styled-components';

const TextAreaInput = ({ answer = '', setAnswer, options }) => {
  return (
    <TextArea
      type="text"
      placeholder={options.placeholder}
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      {...(options?.max && { maxLength: options.max })}
    />
  );
};

const TextArea = styled.textarea`
  width: 100%;
  height: 196px;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  outline: none;
  resize: none;
`;

export default TextAreaInput;
