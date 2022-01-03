import { Children, ReactNode } from "react";
import { StyledContainerGrid } from "./GridContainer";

interface GridProps {
  children?: ReactNode;
  gap?: string;
  justifyContent?: string
}

const GridContainer = (props: GridProps) => {
  const { children, gap } = props;
  return (
    <StyledContainerGrid theme={{ gap: gap }}>
      {children}
    </StyledContainerGrid>
  )
}

export default GridContainer;