import { ReactElement } from "react";
import { StyledSection } from "./Section";

interface Props {
  children: ReactElement
}

const Section = (props: Props) => {
  const { children } = props;
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section;