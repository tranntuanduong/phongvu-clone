import { colors } from '@theme/colors';
import styled from 'styled-components';

type size = 'small' | 'medium' | 'large';

interface Props {
  size: size;
}

const sizeDefine = {
  small: '1px',
  medium: '2px',
  large: '3px',
};

const Divider = (props: Props) => {
  const { size } = props;

  return <StyledDivider theme={{ borderWidth: sizeDefine[size] }} />;
};

const StyledDivider = styled.div`
  width: 100%;
  border-top: ${(props) => props.theme.borderWidth} solid ${colors.border};
  margin: 8px 0px;
`;

export default Divider;
