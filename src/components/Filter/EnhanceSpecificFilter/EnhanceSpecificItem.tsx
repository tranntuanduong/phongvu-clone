import Chip from '@components/Elements/Chip';
import { useState } from 'react';

export interface EnhanceFilter {
  title: string;
  categories: string[];
}

interface Props {
  filter: EnhanceFilter;
}

const EnhanceSpecificItem = (props: Props) => {
  const { filter } = props;

  const handleToggleSubFilter = () => {};

  return (
    <li className="list-chip__item" onClick={handleToggleSubFilter}>
      <div className="chip-wrap">
        <div className="parent-chip">
          <Chip name={filter.title} openSubFilter hasIcon />
        </div>
        <ul className="sub-filter">
          {filter.categories.map((subFilter, index) => (
            <li key={index} className="sub-filter__item">
              {subFilter}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default EnhanceSpecificItem;
