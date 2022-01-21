import { StyledSpecificFilter } from '@components/Filter/SpecificFilter/SpecificFilter';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Chip from '@components/Elements/Chip';
import EnhanceSpecificItem, { EnhanceFilter } from './EnhanceSpecificItem';
import { StyledEnhanceFilterItem } from './EnhanceSpecoficFilter';

interface Props {
  enhanceFilters: EnhanceFilter[];
}

const EnhanceSpecificFilter = (props: Props) => {
  const { enhanceFilters } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleFilter = () => {
    setOpen(!open);
  };

  return (
    <StyledSpecificFilter>
      <div className="filter-title">Bộ lọc nâng cao</div>
      <StyledEnhanceFilterItem className="list-chip--enhance">
        {enhanceFilters.map((filter, index) => (
          <EnhanceSpecificItem key={index} filter={filter} />
        ))}
      </StyledEnhanceFilterItem>
    </StyledSpecificFilter>
  );
};

export default EnhanceSpecificFilter;
