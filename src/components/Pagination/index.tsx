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
        {Array(6)
          .fill(0)
          .map((x, index) => (
            <StyledPaginationItem key={index}>11</StyledPaginationItem>
          ))}
        <StyledPaginationItem className="icon">
          <BiChevronRight />
        </StyledPaginationItem>
      </StyledPagination>
    </Section>
  );
};

export default Pagination;
