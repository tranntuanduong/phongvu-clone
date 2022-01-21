import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

interface Props {
  type?: 'password' | 'text' | 'date' | 'radio' | 'textarea';
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  id?: string;
}

const TextField = (props: Props) => {
  const { name, type, ...rest } = props;

  if (type === 'textarea') return <StyledTextAreaField {...rest} name={name} />;

  return <StyledTextField {...rest} name={name} type={type} />;
};

const StyledTextField = styled.input.attrs(({ id, name, type, ...rest }) => ({
  ...rest,
  type: type,
  id: id || name,
}))`
  border: 1px solid ${colors.inputBorder};
  border-radius: 4px;
  outline: none;
  font-size: ${fontSizes.body2};
  width: 100%;
  padding: 8px 12px;

  &::placeholder {
    color: ${colors.textGrey};
    font-size: ${fontSizes.body2};
  }
`;

const StyledTextAreaField = styled.textarea.attrs(({ id, name, ...rest }) => ({
  ...rest,
  id: id || name,
  rows: 6,
}))`
  border: 1px solid ${colors.inputBorder};
  border-radius: 4px;
  outline: none;
  font-size: ${fontSizes.body2};
  width: 100%;
  padding: 8px 12px;
  resize: vertical;
  max-height: 200px;
  min-height: 40px;

  &::placeholder {
    color: ${colors.textGrey};
    font-size: ${fontSizes.body2};
  }
`;

export default TextField;
