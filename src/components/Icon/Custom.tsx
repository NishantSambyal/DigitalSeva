import * as React from 'react';
import { Icons } from 'src/assets/icons';
import { IconProps } from './types';

export default function CustomIcon(props: IconProps) {
  const { name = '', size, style, width } = props;
  const SVG = Icons[name];
  return <SVG height={size} width={width || size} style={style} />;
}
