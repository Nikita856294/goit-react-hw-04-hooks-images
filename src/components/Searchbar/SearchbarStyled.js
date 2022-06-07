import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: rgb(139, 41, 70);
`;

const SubmitButton = styled.button`
  display: flex;
  margin-right: 15px;
  padding: 10px;
  outline: none;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
`;

const InputForm = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
`;
export { SearchForm, SubmitButton, InputForm };
