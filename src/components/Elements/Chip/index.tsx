import { Fragment } from "react";
import { BsCheck } from 'react-icons/bs';
import { StyledChip } from "./Chip";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface Props {
  name: string;
  mr?: string;
  mb?: string;
  active?: boolean;
  hasIcon?: boolean;
  openSubFilter?: boolean
}

export const Chip = (props: Props) => {
  const { name, mr, mb, active, hasIcon, openSubFilter } = props;
  return (
    <StyledChip theme={{ marginRight: mr, marginBottom: mb }} className={active ? "active" : ''} >
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