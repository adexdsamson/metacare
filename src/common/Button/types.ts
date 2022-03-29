import { DetailedHTMLProps, AriaAttributes } from 'react';

export interface ButtonTypes
  extends DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
  AriaAttributes {}