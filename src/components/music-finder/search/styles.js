import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  width: 400px;
  margin: 32px 16px 0px 16px;
`;

export const InputField = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: white;
  outline: none;
  margin-right: 8px;
  font-family: "Basier Circle", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  opacity: 0.6;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #fff;
    opacity: 0.6;
    font-family: "Basier Circle", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  opacity: 0.4;
  cursor: pointer;
`;
