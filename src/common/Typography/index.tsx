import { TypographyType } from "./types";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  caption: "p",
};

const colorMapping = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  active: "text-active",
  default: "text-default",
  'deep-default': 'text-deep-default',
  white: 'text-white'
};

const fontFamilyMapping = {
  "gelion-regular": "font-gelion-regular",
  "gelion-medium": "font-gelion-medium",
  "gelion-semibold": "font-gelion-semibold",
  "gelion-bold": "font-gelion-bold",
  inter: "font-inter",
};

const lineHeightMapping = {
  38: "leading-38",
  29: "leading-29",
  24: "leading-24",
  22: "leading-22",
  20: "leading-20",
};

const sizeMapping = {
  header: "text-header",
  subheader: "text-subheader",
  body: "text-body",
  subbody: "text-subbody",
  caption: "text-caption",
  subcaption: "text-subcaption",
};

export const Typography = ({
  variant,
  color,
  family,
  lineHeight,
  size,
  component,
  classNames,
  children,
  ...props
}: TypographyType): JSX.Element => {
  const Component = component || (variant ? variantsMapping[variant] : "p");
  const colors = color ? colorMapping[color] : colorMapping["default"];
  const fontFamily = family
    ? fontFamilyMapping[family]
    : fontFamilyMapping["gelion-regular"];
  const lineHeights = lineHeight
    ? lineHeightMapping[lineHeight]
    : lineHeightMapping["22"];
  const sizes = size ? sizeMapping[size] : sizeMapping["body"];

  return (
    <Component
      className={`${colors} ${fontFamily} ${lineHeights} ${sizes} ${classNames ?? ''}`}
      {...props}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
