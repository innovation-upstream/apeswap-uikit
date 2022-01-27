export const variants = {
  CENTERED: "centered",
  FULLWIDTH: "fullWidth",
} as const;

export type variantProps = typeof variants[keyof typeof variants];

export interface TabsProps {
  children?: any;
  variant?: variantProps;
}
