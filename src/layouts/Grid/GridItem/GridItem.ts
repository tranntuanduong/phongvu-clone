import styled from 'styled-components';
export const StyledGridItem = styled.div`
  grid-column: ${props => props.theme.gridColumn
    ? `span ${props.theme.gridColumn}`
    : "span 1"}
`