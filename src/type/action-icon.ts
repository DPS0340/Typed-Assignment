import { TypedIconProps } from "typed-design-system/dist/TypedIcon";

export type ActionIconParams = {
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void);
} & TypedIconProps;
