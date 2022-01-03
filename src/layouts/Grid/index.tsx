import { ReactNode } from "react";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";

interface GridProps {
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  sx?: number;
  justifyContent?: string;
  gap?: string;
}

const Grid = (props: GridProps) => {
  const { children, item, sx, justifyContent, gap } = props;

  if (item) return (
    <GridItem sx={sx}>
      {children}
    </GridItem>
  )

  return (
    <GridContainer justifyContent={justifyContent} gap={gap}>
      {children}
    </GridContainer>
  )
}

export default Grid;