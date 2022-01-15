import PortfolioIndustry from '@components/PortfolioIndustry';
import { PageContext } from 'contexts/PageContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMenu } from 'react-icons/bi';
import { StyledLogoMenu } from './Header';

const LogoMenu = () => {
  const { t } = useTranslation();
  const { openPortfolioIndustry, handleTogglePortfolioIndustry } = useContext(PageContext);

  const openPortfolioIndustryHandler = () => {
    if (handleTogglePortfolioIndustry) handleTogglePortfolioIndustry();
  };

  return (
    <StyledLogoMenu>
      <Link href="/">
        <a className="logo">
          <Image alt="" src="/access/logo/short-logo.svg" width={35} height={35} />
        </a>
      </Link>
      <div className="menu" onClick={openPortfolioIndustryHandler}>
        <BiMenu className="menu-icon" />
        <div className="menu-title">{t('product-portfolio')}</div>
      </div>
      <div className="portfolio-industry">{openPortfolioIndustry && <PortfolioIndustry />}</div>
    </StyledLogoMenu>
  );
};

export default LogoMenu;
