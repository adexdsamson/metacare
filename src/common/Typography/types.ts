
export interface TypographyType {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption";
  family?: "gelion-regular" | "gelion-medium" | "gelion-semibold" | "gelion-bold" | "inter";
  color?: "primary" | "secondary" | "tertiary" | "active" | "default" | 'deep-default' | "white";
  lineHeight?: "38" | "29" | "24" | "22" | "20";
  size?: "header" | "subheader" | "body" | "subbody" | "caption" | "subcaption";
  classNames?: string;
  component?: React.ElementType<any>;
  children: JSX.Element | string;
  onClick?: () => void
  // 'data-testId'?: string
}