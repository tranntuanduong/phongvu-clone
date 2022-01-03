import styled from "styled-components";

export const StyledContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: ${props => props.theme.justifyContent ?? 'flex-start'};
  gap: ${props => props.theme.gap ?? '0px'}
`