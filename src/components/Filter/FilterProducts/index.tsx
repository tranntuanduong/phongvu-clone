import Section from "@components/Elements/Section";
import { StyledFilterProducts } from "./FilterProducts";
import SpecificFilter from '@components/Filter/SpecificFilter'
import { filters } from "dummydata";

const FilterProducts = () => {
  return (
    <Section>
      <StyledFilterProducts>
        <div className="title">Bộ lọc</div>
        <ul className="filter-list">
          {filters.map((filter, index) => (
            <SpecificFilter key={index} specificFilter={filter} />
          ))}
        </ul>
      </StyledFilterProducts>
    </Section>
  )
}

export default FilterProducts;