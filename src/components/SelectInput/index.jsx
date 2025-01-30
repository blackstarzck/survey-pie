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

const Item = ({ children, onChange }) => {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <div></div>
        <span>{children}</span>
      </label>
    </ItemWrapper>
  );
};

const SelectInput = ({ answer = [], setAnswer, options }) => {
  const handleChange = (isChecked, index) => {
    const value = isChecked
      ? [...answer, index]
      : answer.filter((item) => item !== index);

    setAnswer(value);
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => (
        <Item
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
