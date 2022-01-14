import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

interface Props {
  type?: 'password' | 'text' | 'date' | 'radio';
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  id?: string;
}

const TextField = (props: Props) => {
  const { name, ...rest } = props;
  return <StyledTextField {...rest} name={name} />;
};

const StyledTextField = styled.input.attrs(({ id, name, ...rest }) => ({
  ...rest,
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

export default TextField;
