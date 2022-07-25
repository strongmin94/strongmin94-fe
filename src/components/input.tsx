import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';
import styled from 'styled-components';

interface IProps {
  type?: HTMLInputTypeAttribute;
  title: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  errorInfo?: string;
  onBlur?: () => void;
}

const Input = ({ type = 'text', title, value, onChange, errorInfo, onBlur }: IProps) => {
  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <TextInput
        type={type}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        isError={!!errorInfo}
        onBlur={onBlur}
      />
      <ErrorInfo isVisible={!!errorInfo}>{errorInfo}</ErrorInfo>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  margin-bottom: 16px;
`;

const InputTitle = styled.p`
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
