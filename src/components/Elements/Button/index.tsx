import { colors } from "@theme/colors";
import { StyledButton } from "./Button";

interface ButtonProps {
    size?: string;
    bgColor?: string;
    textColor?: string;
}

const sizes: Record<string, string> = {
    "small": "10px",
    "large": "14px"
}

function Button(props: ButtonProps) {
    const { size, bgColor, textColor } = props;
    const btnSize = size ? sizes[size] : "10px";
    const btnBgColor = bgColor ? bgColor : colors.primaryColor;
    const btnTextColor = textColor ? textColor : colors.whiteColor;
    return (
        <StyledButton theme={{ size: btnSize, btnBgColor: btnBgColor, btnTextColor: btnTextColor }}>
            Đăng xuất
        </StyledButton>
    )
}

export default Button;