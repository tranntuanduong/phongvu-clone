import PortfolioIndustry from "@components/PortfolioIndustry"
import Container from "layouts/container"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { StyledBottomAdvertise, StyledMainSlider, StyledRightAdvertise } from "./MainSlider"

function MainSlider() {
    return (
        <StyledMainSlider>
            <Container>
                <div className="top">
                    <PortfolioIndustry />
                    <div className="banner">
                        <div className="banner__btn-prev">
                            <BiChevronLeft className="banner__btn-icon" />
                        </div>
                        <img src="/access/banner/banner12.jpg" alt="" className="banner__img" />
                        <div className="banner__btn-next">
                            <BiChevronRight className="banner__btn-icon" />
                        </div>
                    </div>
                    <StyledRightAdvertise>
                        <img src="/access/advertise/ad2.jpg" alt="" className="ad-img" />
                        <img src="/access/advertise/ad3.jpg" alt="" className="ad-img" />
                    </StyledRightAdvertise>
                </div>
                <StyledBottomAdvertise>StyledBottomAdvertise</StyledBottomAdvertise>
            </Container>
        </StyledMainSlider>
    )

}
export default MainSlider