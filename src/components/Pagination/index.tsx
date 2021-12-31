import Section from '@components/Elements/Section';
import { StyledPagination, StyledPaginationItem } from './Pagination';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

const Pagination = () => {
  return (
    <Section>
      <StyledPagination>
        <StyledPaginationItem className="icon">
          <BiChevronLeft />
        </StyledPaginationItem>
        <StyledPaginationItem className="active">1</StyledPaginationItem>
        <StyledPaginationItem className="dot icon">
          <BsThreeDots />
        </StyledPaginationItem>
        {[3, 4, 5, 6, 7, 9].map((x, index) => (
          <StyledPaginationItem key={index}>{x}</StyledPaginationItem>
        ))}
        <StyledPaginationItem className="icon">
          <BiChevronRight />
        </StyledPaginationItem>
      </StyledPagination>
    </Section>
  );
};

export default Pagination;
