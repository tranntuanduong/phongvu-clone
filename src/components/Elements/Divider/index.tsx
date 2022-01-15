import { colors } from '@theme/colors';
import styled from 'styled-components';

type size = 'small' | 'medium' | 'large';

interface Props {
  size: size;
  margin?: string;
}

const sizeDefine = {
  small: '1px',
  medium: '2px',
  large: '3px',
};

const Divider = (props: Props) => {
  const { size, margin } = props;

  return <StyledDivider theme={{ borderWidth: sizeDefine[size], margin: margin }} />;
};

const StyledDivider = styled.div`
  width: 100%;
  border-top: ${(props) => props.theme.borderWidth} solid ${colors.border};
  margin: ${props => props.theme.margin ?? '8px 0'};
`;

export default Divider;
