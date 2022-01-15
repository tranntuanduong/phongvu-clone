import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface UserContext {
  openPortfolioIndustry: boolean;
  handleTogglePortfolioIndustry: () => void;
  handleClosePortfolioIndustry: () => void;
  handleChangePage: (bool: boolean) => void;
  isHome: boolean;
}

export const PageContext = createContext<UserContext>({
  openPortfolioIndustry: false,
  handleTogglePortfolioIndustry: () => {},
  handleClosePortfolioIndustry: () => {},
  handleChangePage: () => {},
  isHome: false,
});

const PageContextProvider = (props: Props) => {
  const [openPortfolioIndustry, setOpenPortfolioIndustry] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const handleTogglePortfolioIndustry = () => {
    setOpenPortfolioIndustry(!openPortfolioIndustry);
  };

  const handleClosePortfolioIndustry = () => {
    setOpenPortfolioIndustry(false);
  };

  const handleChangePage = (bool: boolean) => {
    setIsHome(bool);
  };

  const value = {
    openPortfolioIndustry,
    handleTogglePortfolioIndustry,
    handleClosePortfolioIndustry,
    handleChangePage,
    isHome,
  };

  const { children } = props;
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
