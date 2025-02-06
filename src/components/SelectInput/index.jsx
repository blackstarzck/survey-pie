import styled from 'styled-components';

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] ~ div {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    border-radius: 50%;
    margin-right: 10px;
  }
  input[type='checkbox']:checked ~ div {
    border: 8px solid #6542f1;
  }
  input[type='checkbox']:checked ~ span {
    font-weight: bold;
  }
`;

const Item = ({ children, checked, onChange }) => {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div></div>
        <span>{children}</span>
      </label>
    </ItemWrapper>
  );
};

const SelectInput = ({ answer = [], setAnswer, options }) => {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      const max = options?.max || 1;
      if (answer.length >= max) {
        return;
      }

      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => (
        <Item
          checked={answer.includes(index)}
          key={index}
          onChange={(e) => {
            handleChange(e.target.checked, index);
          }}
        >
          {item}
        </Item>
      ))}
    </SelectInputWrapper>
  );
};

export default SelectInput;
