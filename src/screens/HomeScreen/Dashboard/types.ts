import type { Datum } from 'src/store/actions/Dashboard/menu';

export interface SliderType {
  name: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export type RowMenuProps = {
  obj: Datum;
};
