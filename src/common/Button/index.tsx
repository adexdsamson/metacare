import { ButtonTypes } from './types';


export const Button = (props: ButtonTypes): JSX.Element => {
  return (
    <button className="w-[105px] h-11 rounded-lg bg-[#25BB87] font-gelion-regular text-subbody leading-24 text-white" {...props}>
      {props.children}
    </button>
  );
}