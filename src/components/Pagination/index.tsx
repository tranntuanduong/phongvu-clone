import Section from '@components/Elements/Section';
import { StyledPagination, StyledPaginationItem } from './Pagination';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { useEffect, useState } from 'react';

interface Props {
  total: number;
  rowPerPage?: number;
  page: number;
  pageVisible?: 8;
  onChange: (page: number) => void;
}

const Pagination = (props: Props) => {
  const { total, rowPerPage = 5, page, pageVisible = 8, onChange } = props;
  const totalPage = Math.ceil(total / rowPerPage);

  const handleChangePage = (page: number) => () => {
    if (page === 0 || page > totalPage) return;
    onChange(page);
  };

  let start = 1 + 1;
  let end = totalPage;

  if (totalPage > pageVisible) {
    start = page <= 4 ? 1 + 1 : totalPage - page >= 4 ? page - 2 : totalPage - pageVisible + 2;
    end = page <= 4 ? pageVisible : totalPage - page >= 4 ? page + 3 : totalPage;
  }

  return (
    <Section>
      <StyledPagination>
        <StyledPaginationItem className="icon" onClick={handleChangePage(page - 1)}>
          <BiChevronLeft />
        </StyledPaginationItem>
        <StyledPaginationItem className={page === 1 ? 'active' : ''} onClick={handleChangePage(1)}>
          {1}
        </StyledPaginationItem>
        {totalPage > pageVisible && page > 4 && (
          <StyledPaginationItem className="dot icon">
            <BsThreeDots />
          </StyledPaginationItem>
        )}
        {[...Array(totalPage + 1).keys()].slice(start, end).map((x, index) => (
          <div key={index}>
            <StyledPaginationItem
              className={page === x ? 'active' : ''}
              onClick={handleChangePage(x)}
            >
              {x}
            </StyledPaginationItem>
          </div>
        ))}
        {totalPage > pageVisible && totalPage - page > 3 && (
          <StyledPaginationItem className="dot icon">
            <BsThreeDots />
          </StyledPaginationItem>
        )}
        <StyledPaginationItem
          className={page === totalPage ? 'active' : ''}
          onClick={handleChangePage(totalPage)}
        >
          {totalPage}
        </StyledPaginationItem>
        <StyledPaginationItem className="icon" onClick={handleChangePage(page + 1)}>
          <BiChevronRight />
        </StyledPaginationItem>
      </StyledPagination>
    </Section>
  );
};

export default Pagination;
