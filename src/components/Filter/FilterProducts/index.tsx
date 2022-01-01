import Section from "@components/Elements/Section";
import { StyledFilterProducts } from "./FilterProducts";
import SpecificFilter from '@components/Filter/SpecificFilter'
import { enhanceFilters, filters } from "dummydata";
import EnhanceSpecificFilter from "../EnhanceSpecificFilter";



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
        <ul className="filter-list">
          <EnhanceSpecificFilter enhanceFilters={enhanceFilters} />
        </ul>
      </StyledFilterProducts>

    </Section>
  )
}

export default FilterProducts;