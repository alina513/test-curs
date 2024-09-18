import styled from 'styled-components';
export const Container = styled.main`
  padding: 20px 30px;
`;
export const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  border: 5px solid #f2c0bd;
  border-radius: 30px;
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 18px;
`;
export const Input = styled.input`
  border: 3px solid #f2c0bd;
  border-radius: 15px;
  padding-left: 10px;
  font-size: 20px;
  &:hover,
  &:focus {
    border-color: red;
  }
`;
export const Select = styled.select`
  border: 3px solid #f2c0bd;
  border-radius: 15px;
  font-size: 20px;
  &:hover,
  &:focus {
    border-color: red;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
`;
