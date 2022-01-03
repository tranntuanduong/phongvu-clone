import { colors } from '@theme/colors';
import { StyledButton, StyledOutLineButton } from './Button';

type Variant = 'outline' | 'full' | 'default';

interface ButtonProps {
  size?: string;
  bgColor?: string;
  textColor?: string;
  children: string;
  mt?: number | null;
  variant?: Variant;
}

const sizes: Record<string, string> = {
  small: '10px',
  large: '14px',
};


function Button(props: ButtonProps) {
  const { size, bgColor, textColor, children, mt, variant } = props;

  const btnSize = size ? sizes[size] : '10px';
  const btnBgColor = bgColor ? bgColor : colors.primaryColor;
  const btnTextColor = textColor ? textColor : colors.whiteColor;

  if (variant === "outline") {
    return (
      <StyledOutLineButton
        theme={{
          size: btnSize,
          btnBgColor: btnBgColor,
          btnTextColor: btnTextColor,
          mt: mt,
        }}
      >
        {children}
      </StyledOutLineButton>
    )
  }

  return (
    <StyledButton
      theme={{
        size: btnSize,
        btnBgColor: btnBgColor,
        btnTextColor: btnTextColor,
        mt: mt,
      }}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
