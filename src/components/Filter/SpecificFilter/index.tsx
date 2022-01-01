import { StyledSpecificFilter } from "./SpecificFilter";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";

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
            {filter}
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