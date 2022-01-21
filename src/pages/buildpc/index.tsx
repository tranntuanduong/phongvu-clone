import BuildPcDialog from '@components/BuildPcDialog';
import Button from '@components/Elements/Button';
import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import SEO from '@components/SEO';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { buildPcList } from 'dummydata';
import useOnClickOutside from 'hooks/useOnclickOutside';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import GlobalScrollStyle from 'styles/GlobalScrollStyle';

const DynamicBreadCrumbWithNoSSR = dynamic(() => import('@components/BreadCrumb'), { ssr: false });

interface Item {
  name: string;
  thumb: string;
}

const BuildPC = () => {
  const [openBuildPcDialog, setOpenBuildPcDialog] = useState(false);
  const ref = useRef(null);

  const handleOpenBuildPcDialog = (item: Item) => () => {
    console.log('item');
    setOpenBuildPcDialog(true);
  };

  const handleCloseBuildPcDialog = () => {
    setOpenBuildPcDialog(false);
  };

  useOnClickOutside(ref, handleCloseBuildPcDialog);

  return (
    <Container>
      {openBuildPcDialog && <GlobalScrollStyle />}
      <SEO title="Phong vũ clone | buildPC" description="Build PC" />
      <Section>
        <DynamicBreadCrumbWithNoSSR breadCrumbs={[]} current="Build PC" />
      </Section>
      <Section>
        <Grid container>
          <Grid item sx={8}>
            <StyledTopBtn>
              <div className="btn-wrap">
                <Button size="small">Cấu hình 1</Button>
                <Button size="small" bgColor={colors.whitesmoke} textColor={colors.text}>
                  Cấu hình 2
                </Button>
                <Button size="small" bgColor={colors.whitesmoke} textColor={colors.text}>
                  Cấu hình 3
                </Button>
              </div>
              <Button size="small" bgColor={colors.whitesmoke} textColor={colors.text}>
                Tải cấu hình (PDF)
              </Button>
            </StyledTopBtn>
            <StyledListElectronic>
              <ul className="list">
                {buildPcList.map((item, index) => (
                  <li key={index} className="item">
                    <div className="name">{item.name}</div>
                    <img src={item.thumb} alt="" className="thumb" />
                    <div className="desc">Vui lòng chọn linh kiện</div>
                    <Button onClick={handleOpenBuildPcDialog(item)}>Chọn</Button>
                  </li>
                ))}
              </ul>
            </StyledListElectronic>
          </Grid>
        </Grid>
      </Section>

      {openBuildPcDialog && <BuildPcDialog ref={ref} />}
    </Container>
  );
};

const StyledTopBtn = styled.div`
  display: flex;
  justify-content: space-between;

  & .btn-wrap {
    display: flex;
    column-gap: 8px;
  }
`;

const StyledListElectronic = styled.div`
  font-size: ${fontSizes.body2};
  color: ${colors.text};

  & .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${colors.whiteColor};
    margin-top: 20px;
    border-radius: 10px;

    &:hover {
      box-shadow: rgb(0 0 0 / 8%) 0.1rem 0.1rem 0.5rem 0.1rem;
    }

    & .name {
      width: 100px;
      text-align: center;
      font-weight: 600;
    }

    & .thumb {
      width: 84px;
      height: 84px;
      border: 1px solid ${colors.textGrey};
      border-radius: 10px;
      margin: 0 16px;
    }

    & .desc {
      flex: 1;
    }
  }
`;

export default BuildPC;
