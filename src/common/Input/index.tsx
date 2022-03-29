import { InputTypes, SelectTypes, DateTypes } from "./types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Input = (props: InputTypes): JSX.Element => {
  return (
    <div className={`relative ${props.containerClassName ?? ""}`}>
      <div
        className={`w-[21px] h-[21px] grid place-items-center absolute left-5 top-3 cursor-pointer ${
          props.startAdornmentClassName ?? ""
        }`}
      >
        {props.startAdornment}
      </div>
      <input title="input" {...props} />
      <div
        className={`w-[21px] h-[21px] grid place-items-center absolute right-5 top-3 cursor-pointer ${
          props.endAdornmentClassName ?? ""
        }`}
      >
        {props.endAdornment}
      </div>
    </div>
  );
};

export const Select = (props: SelectTypes): JSX.Element => {
  return (
    <div className={`relative ${props.containerClassName ?? ""}`}>
      <div
        className={`w-[21px] h-[21px] grid place-items-center absolute left-5 top-3 cursor-pointer ${
          props.startAdornmentClassName ?? ""
        }`}
      >
        {props.startAdornment}
      </div>
      <select title="input" {...props}>
        {props.children}
      </select>
      <div
        className={`w-[21px] h-[21px] grid place-items-center absolute right-5 top-3 cursor-pointer ${
          props.endAdornmentClassName ?? ""
        }`}
      >
        {props.endAdornment}
      </div>
    </div>
  );
};

export const Date = (props: DateTypes): JSX.Element => {
  return (
    <div className={`relative ${props.containerClassName ?? ""}`}>
      <div
        className={`w-[21px] h-[21px] grid place-items-center absolute left-5 top-3 cursor-pointer ${
          props.startAdornmentClassName ?? ""
        }`}
      >
        {props.startAdornment}
      </div>
      <DatePicker {...props} />
      <div
        className={`w-[21px] h-[21px] grid place-items-center absolute right-5 top-3 cursor-pointer ${
          props.endAdornmentClassName ?? ""
        }`}
      >
        {props.endAdornment}
      </div>
    </div>
  );
};
