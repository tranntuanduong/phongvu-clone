import { Children, ReactNode } from "react";
import { StyledGridItem } from "./GridItem";

interface GridProps {
  children?: ReactNode;
  sx?: number;
}

const GridItem = (props: GridProps) => {
  const { children, sx } = props
  return (
    <StyledGridItem theme={{ gridColumn: sx }}>
      {children}
    </StyledGridItem>
  )
}

export default GridItem;