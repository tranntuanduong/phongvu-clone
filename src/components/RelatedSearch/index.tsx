import Section from "@components/Elements/Section";
import { StyledRelatedSearch } from "./RelatedSearch";

const RelatedSearch = () => {
  return (
    <Section>
      <StyledRelatedSearch>
        <div className="title">Tìm kiếm liên quan</div>
        <ul className="list">
          <li className="item">
            Máy tính bảng
          </li>
          <li className="item">
            Vỏ máy tính
          </li>
          <li className="item">
            Cây máy tính
          </li>
        </ul>
      </StyledRelatedSearch>
    </Section>
  )
}

export default RelatedSearch;