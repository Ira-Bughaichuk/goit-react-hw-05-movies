import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  margin-bottom: 30px;
`;
export const SearchFormInput = styled.input`
  border: 1px solid blue;
  border-radius: 3px;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  padding: 0 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 200px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  &:hover {
    opacity: 1;
  }
  background-color: #42f2f5;
  gap: 10px;
  align-content: center;
  align-items: center;
`;
