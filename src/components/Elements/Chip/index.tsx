import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from 'react-icons/bs';
import { StyledChip } from "./Chip";

interface Props {
  name: string;
  mr?: string;
  mb?: string;
  active?: boolean;
  hasIcon?: boolean;
  openSubFilter?: boolean;
  borderBottom?: string;
}

export const Chip = (props: Props) => {
  const { name, mr, mb, active, hasIcon, openSubFilter, borderBottom } = props;
  return (
    <StyledChip theme={{
      marginRight: mr,
      marginBottom: mb,
      borderBottom: borderBottom
    }}
      className={active ? "active" : ''} >
      <div className="wrap">
        {name}
        {hasIcon && (
          <div className="icon">
            <BiChevronDown />
          </div>
        )}
      </div>
      {active && (
        <Fragment>
          <div className="tag-active" />
          <div className="icon-active">
            <BsCheck />
          </div>
        </Fragment>
      )}
    </StyledChip>
  )
}

export default Chip;