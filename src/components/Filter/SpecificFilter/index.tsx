import Chip from "@components/Elements/Chip";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { StyledSpecificFilter } from "./SpecificFilter";

interface SpecificFilter {
  title: string,
  filterCollection: string[],
  hasOpenBtn: boolean
}

interface Props {
  specificFilter: SpecificFilter;
}

const SpecificFilter = (props: Props) => {
  const { specificFilter } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleFilter = () => {
    setOpen(!open);
  }


  return (
    <StyledSpecificFilter>
      <div className="filter-title">
        {specificFilter.title}
      </div>
      <ul className={open ? 'list-chip list-chip--open' : 'list-chip'}>
        {specificFilter.filterCollection.map((filter, index) => (
          <li key={index} className="list-chip__item">
            <Chip name={filter} mr="8px" mb="10px" />
          </li>
        ))}
      </ul>

      {specificFilter.hasOpenBtn && (
        <div className="readmore-btn" onClick={handleToggleFilter}>
          {open ? (
            <BiChevronUp />
          ) : (
            <BiChevronDown />
          )}
        </div>
      )}

    </StyledSpecificFilter>
  )
}

export default SpecificFilter;