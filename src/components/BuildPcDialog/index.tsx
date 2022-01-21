/* eslint-disable react/display-name */
import Button from '@components/Elements/Button';
import Dialog from '@components/Elements/Dialog';
import Divider from '@components/Elements/Divider';
import Paper from '@components/Elements/Paper';
import EnhanceSpecificItem from '@components/Filter/EnhanceSpecificFilter/EnhanceSpecificItem';
import { StyledEnhanceFilterItem } from '@components/Filter/EnhanceSpecificFilter/EnhanceSpecoficFilter';
import { StyledSpecificFilter } from '@components/Filter/SpecificFilter/SpecificFilter';
import { enhanceFilters } from 'dummydata';
import dynamic from 'next/dynamic';
import { forwardRef, useState } from 'react';
import { formatCurrency } from 'utils';
import { StyledBuildPcDialog, StyledItemElectronic, StyledListElectronic } from './BuildPcDialog';

interface Props {}
const DynamicSortBuildPcElectronicWithNoSSR = dynamic(
  () => import('@components/Sort/SortBuildPcElectronic'),
  {
    ssr: false,
  }
);

const DynamicPaginationWithNoSSR = dynamic(() => import('@components/Pagination'), { ssr: false });

const BuildPcDialog = forwardRef<HTMLDivElement, Props>((_props, ref) => {
  const [page, setPage] = useState(1);

  const handlechangePage = (page: number) => {
    setPage(page);
  };

  return (
    <Dialog>
      <div ref={ref}>
        <Paper borderRadius="10px">
          <StyledBuildPcDialog>
            <div className="title">Bộ lọc</div>
            <div className="filter">
              <StyledSpecificFilter>
                <StyledEnhanceFilterItem>
                  {enhanceFilters.map((filter, index) => (
                    <EnhanceSpecificItem key={index} filter={filter} />
                  ))}
                </StyledEnhanceFilterItem>
              </StyledSpecificFilter>

              <DynamicSortBuildPcElectronicWithNoSSR />
            </div>
            <Divider size="small" type="dashed" margin="0" />
          </StyledBuildPcDialog>
          <StyledListElectronic>
            {[...Array(10)].map((electronic, index) => (
              <StyledItemElectronic key={index}>
                <img src="/access/buildpc/cpu.svg" alt="" className="thumb" />
                <div className="name-wrap">
                  <div className="name">CPU Intel Core I5-7500 (3.4GHz - 3.8GHz)</div>
                  <div className="sku">SKU: 1700829</div>
                </div>
                <div className="price-wrap">
                  <div className="promote-price">{formatCurrency(4499000)}</div>
                  <div className="wrap">
                    <div className="origanal-price">{formatCurrency(4499000)}</div>
                    <div className="promote-percent"> -24.79%</div>
                  </div>
                </div>
                <Button size="small">Chọn</Button>
              </StyledItemElectronic>
            ))}
          </StyledListElectronic>
          <Divider size="small" type="dashed" margin="0" />
          <DynamicPaginationWithNoSSR
            total={30}
            page={page}
            onChange={handlechangePage}
            rowPerPage={2}
            pageVisible={8}
          />
        </Paper>
      </div>
    </Dialog>
  );
});

export default BuildPcDialog;
