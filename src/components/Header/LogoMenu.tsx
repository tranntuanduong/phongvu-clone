import Link from 'next/link'
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi';
import { StyledLogoMenu } from './Header';
import { useEffect, useState } from 'react';
import PortfolioIndustry from '@components/PortfolioIndustry';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';

const LogoMenu = () => {
  // const [openPortfolioIndustry, setOpenPortfolioIndustry] = useState(false);
  const { openPortfolioIndustry, handleTogglePortfolioIndustry, handleClosePortfolioIndustry } = useContext(UserContext);


  const openPortfolioIndustryHandler = () => {
    if (handleTogglePortfolioIndustry) handleTogglePortfolioIndustry();
  }

  return (
    <StyledLogoMenu >
      <Link href="/">
        <a className="logo">
          <Image alt="" src="/access/logo/short-logo.svg" width={35} height={35} />
        </a>
      </Link>
      <div className="menu" onClick={openPortfolioIndustryHandler}>
        <BiMenu className="menu-icon" />
        <div className="menu-title">Danh mục sản phẩm</div>
      </div>
      <div className="portfolio-industry">
        {openPortfolioIndustry && (
          <PortfolioIndustry />
        )}
      </div>
    </StyledLogoMenu>
  )
}

export default LogoMenu;