import { colors } from '@theme/colors';
import { StyledButton, StyledOutLineButton } from './Button';

type Variant = 'outline' | 'full' | 'default';

interface ButtonProps {
  size?: 'small' | 'large' | 'medium';
  bgColor?: string;
  textColor?: string;
  children: string;
  margin?: string;
  variant?: Variant;
  width?: string;
  onClick?: () => void;
  disiable?: boolean;
}

const sizes: Record<string, string> = {
  small: '6px',
  medium: '10px',
  large: '14px',
};

function Button(props: ButtonProps) {
  const { size, bgColor, textColor, children, margin, variant, width, onClick, ...rest } = props;

  const btnSize = size ? sizes[size] : '10px';
  const btnBgColor = bgColor ? bgColor : colors.primaryColor;
  const btnTextColor = textColor ? textColor : colors.whiteColor;

  if (variant === 'outline') {
    return (
      <StyledOutLineButton
        onClick={onClick}
        {...rest}
        theme={{
          size: btnSize,
          btnBgColor: btnBgColor,
          btnTextColor: btnTextColor,
          margin: margin,
          width: width,
        }}
      >
        {children}
      </StyledOutLineButton>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      theme={{
        size: btnSize,
        btnBgColor: btnBgColor,
        btnTextColor: btnTextColor,
        margin: margin,
        width: width,
      }}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
