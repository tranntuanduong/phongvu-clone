import { useState } from 'react';
import { AiOutlineWifi, AiOutlineSolution } from 'react-icons/ai';
import { BiMicrochip, BiSpeaker } from 'react-icons/bi';
import { BsCamera, BsLaptop, BsPhone, BsPrinter } from 'react-icons/bs';
import { CgCamera, CgSmartHomeWashMachine } from 'react-icons/cg';
import { FaGamepad } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiComputerLine } from 'react-icons/ri';
import { SiPcgamingwiki } from 'react-icons/si';
import { StyledIndustryCategory, StyledProductPortfolio, StyledSubCatagory } from './PortfolioIndustry';

function PortfolioIndustry() {
  const [openSubCategory, setOpenSubCategory] = useState(false);

  return (
    <StyledProductPortfolio>
      <ul className="intrustry-list">
        <li className="industry-item">
          <CgSmartHomeWashMachine className="industry-item__icon" />
          <div className="industry-item__name">Điện máy - điên da dụng</div>

        </li>
        <li className="industry-item">
          <BsLaptop className="industry-item__icon" />
          <div className="industry-item__name">Laptop & Markbook</div>
        </li>
        <li className="industry-item">
          <RiComputerLine className="industry-item__icon" />
          <div className="industry-item__name">Tivi - Màn hình TV</div>
        </li>
        <li className="industry-item">
          <BsPhone className="industry-item__icon" />
          <div className="industry-item__name">Điện thoại & Thiết bị thông minh</div>
        </li>
        <li className="industry-item">
          <SiPcgamingwiki className="industry-item__icon" />
          <div className="industry-item__name">PC - Máy tính đồng bộ</div>
        </li>
        <li className="industry-item">
          <HiOutlineDesktopComputer className="industry-item__icon" />
          <div className="industry-item__name">Màn hình máy tính</div>
        </li>
        <li className="industry-item">
          <BiMicrochip className="industry-item__icon" />
          <div className="industry-item__name">Linh kiện máy tính</div>
        </li>
        <li className="industry-item">
          <FaGamepad className="industry-item__icon" />
          <div className="industry-item__name">Hi-End Gaming</div>
        </li>
        <li className="industry-item">
          <CgCamera className="industry-item__icon" />
          <div className="industry-item__name">Phụ kiện & Thiết bị ngoại vi</div>
        </li>
        <li className="industry-item">
          <BiSpeaker className="industry-item__icon" />
          <div className="industry-item__name">Thiết bị âm thanh</div>
        </li>
        <li className="industry-item">
          <BsCamera className="industry-item__icon" />
          <div className="industry-item__name">Máy ảnh - Máy quay phim</div>
        </li>
        <li className="industry-item">
          <BsPrinter className="industry-item__icon" />
          <div className="industry-item__name">Thiết bị văn phòng</div>
        </li>
        <li className="industry-item">
          <AiOutlineWifi className="industry-item__icon" />
          <div className="industry-item__name">Thiết bị mạng - An ninh</div>
        </li>
        <li className="industry-item">
          <AiOutlineSolution className="industry-item__icon" />
          <div className="industry-item__name">Giải pháp doanh nghiệp</div>
        </li>
        {openSubCategory && (
          <StyledIndustryCategory>
            <StyledSubCatagory>
              <li className="sub-category-item title">
                Điều hòa máy lạnh
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                Tủ lạnh inventor
              </li>
              <li className="sub-category-item">
                Misubishi
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Máy giặt
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                Tủ lạnh side by side
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Tủ lạnh
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Điều hòa máy lạnh
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                Tủ lạnh inventor
              </li>
              <li className="sub-category-item">
                Misubishi
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Máy giặt
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                Tủ lạnh side by side
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Tủ lạnh
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Điều hòa máy lạnh
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                Tủ lạnh inventor
              </li>
              <li className="sub-category-item">
                Misubishi
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Máy giặt
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                Tủ lạnh side by side
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                Tủ lạnh
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item title">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
              <li className="sub-category-item">
                LG
              </li>
              <li className="sub-category-item">
                Daikin
              </li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        )}

      </ul>
    </StyledProductPortfolio>
  );
}

export default PortfolioIndustry;
