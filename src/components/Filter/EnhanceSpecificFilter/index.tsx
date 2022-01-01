import { StyledSpecificFilter } from "@components/Filter/SpecificFilter/SpecificFilter";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";
import Chip from "@components/Elements/Chip";
import EnhanceSpecificItem, { EnhanceFilter } from "./EnhanceSpecificItem";




interface Props {
  enhanceFilters: EnhanceFilter[];
}

const EnhanceSpecificFilter = (props: Props) => {
  const { enhanceFilters } = props
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleFilter = () => {
    setOpen(!open);
  }

  return (
    <StyledSpecificFilter>
      <div className="filter-title">
        Bộ lọc nâng cao
      </div>
      <ul className='list-chip list-chip--enhance'>
        {enhanceFilters.map((filter, index) => (
          <EnhanceSpecificItem key={index} filter={filter} />
        ))}

      </ul>
    </StyledSpecificFilter>
  )
}

export default EnhanceSpecificFilter;