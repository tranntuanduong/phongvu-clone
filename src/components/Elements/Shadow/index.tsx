import { StyledShadow } from './Shadow';
import { PageContext } from 'contexts/PageContext';
import { useContext } from 'react';

const Shadow = () => {
  const { openPortfolioIndustry, handleClosePortfolioIndustry } = useContext(PageContext);

  const closePortfolioIndustryHandler = () => {
    if (handleClosePortfolioIndustry) handleClosePortfolioIndustry();
  };

  return <>{openPortfolioIndustry && <StyledShadow onClick={closePortfolioIndustryHandler} />}</>;
};

export default Shadow;
