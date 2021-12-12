import { createContext, ReactNode, useMemo, useState } from "react";

interface Props {
  children: ReactNode
}

interface UserContext {
  openPortfolioIndustry: boolean,
  handleTogglePortfolioIndustry: () => void,
  handleClosePortfolioIndustry: () => void
}

export const UserContext = createContext<UserContext>({
  openPortfolioIndustry: false,
  handleTogglePortfolioIndustry: () => { },
  handleClosePortfolioIndustry: () => { }
})

const UserContextProvider = (props: Props) => {

  const [openPortfolioIndustry, setOpenPortfolioIndustry] = useState(false);

  const handleTogglePortfolioIndustry = () => {
    setOpenPortfolioIndustry(!openPortfolioIndustry);
  }

  const handleClosePortfolioIndustry = () => {
    setOpenPortfolioIndustry(false);
  }

  const value = {
    openPortfolioIndustry,
    handleTogglePortfolioIndustry,
    handleClosePortfolioIndustry
  };

  const { children } = props;
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;