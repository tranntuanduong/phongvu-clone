import { StyledShadow } from "./Shadow";
import { UserContext } from 'contexts/UserContext';
import { useContext } from "react";

const Shadow = () => {
  const { openPortfolioIndustry, handleClosePortfolioIndustry } = useContext(UserContext);

  const closePortfolioIndustryHandler = () => {
    if (handleClosePortfolioIndustry) handleClosePortfolioIndustry();
  }

  return (
    <>
      {openPortfolioIndustry && (
        <StyledShadow onClick={closePortfolioIndustryHandler} />
      )}
    </>
  )
}

export default Shadow;