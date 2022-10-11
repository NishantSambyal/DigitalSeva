export type Props = {
  visibility: boolean;
  setVisibility: (val: boolean) => void;
  success: boolean;
  description: string;
  alertHandler?: (val: void) => void;
};
