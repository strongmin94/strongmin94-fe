import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';
import styled from 'styled-components';

interface IProps {
  type?: HTMLInputTypeAttribute;
  label: string;
  id: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>
  onBlur: () => void;
  errorInfo?: string;
  required?: boolean;
}

const Input = ({ type = 'text', label, id, value, onChange, onBlur, errorInfo, required }: IProps) => {
  return (
    <Container>
      <InputTitle htmlFor={id}>{label}</InputTitle>
      <TextInput
        id={id}
        type={type}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        onBlur={onBlur}
        isError={!!errorInfo}
        required={required}
      />
      <ErrorInfo isVisible={!!errorInfo}>{errorInfo}</ErrorInfo>
    </Container>
  );
};

export default Input;

const Container = styled.div`
`;

const InputTitle = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #6c6c7d;
`;

const TextInput = styled.input<{ isError: boolean }>`
  width: 100%;
  margin-top: 8px;
  padding: 16px;
  background-color: ${(props) => (props.isError ? '#fdedee' : '#f7f7fa')};
  border-radius: 12px;
`;

const ErrorInfo = styled.p<{ isVisible: boolean }>`
  visibility: ${(props) => (props.isVisible ? 'unset' : 'hidden')};
  margin-top: 8px;
  font-size: 13px;
  font-weight: 400;
  color: #ed4e5c;
`;
