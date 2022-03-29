import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  SyntheticEvent,
} from "react";
import { ReactDatePickerProps } from "react-datepicker";

export interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  startAdornmentClassName?: string;
  endAdornmentClassName?: string;
  containerClassName?: string;
}

export interface SelectTypes
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  startAdornmentClassName?: string;
  endAdornmentClassName?: string;
  containerClassName?: string;
}

export interface DateTypes extends ReactDatePickerProps<never, undefined> {
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  startAdornmentClassName?: string;
  endAdornmentClassName?: string;
  containerClassName?: string;
}
