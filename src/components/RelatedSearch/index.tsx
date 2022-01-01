import Chip from "@components/Elements/Chip";
import Section from "@components/Elements/Section";
import { StyledRelatedSearch } from "./RelatedSearch";

const RelatedSearch = () => {
  return (
    <Section>
      <StyledRelatedSearch>
        <div className="title">Tìm kiếm liên quan</div>
        <ul className="list">
          <li>
            <Chip name="Máy vi tính" mr="10px" />
          </li>
          <li>
            <Chip name="Cây máy tính" mr="10px" />
          </li>
          <li>
            <Chip name="Vỏ máy tính" mr="10px" />
          </li>
          <li>
            <Chip name="Máy vi tính" mr="10px" />
          </li>
        </ul>
      </StyledRelatedSearch>
    </Section>
  )
}

export default RelatedSearch;