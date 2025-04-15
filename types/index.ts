import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
  selected: any;
  setSelected: any;
}

export interface CarProps {
  make: string;
  model: string;
  year: number;
  class: string;
  fuel_type: string;
  highway_mpg: number;
  city_mpg: number;
  combination_mpg: number;
  drive: string;
  transmission: string;
  cylinders: number;
  displacement: number;
  images: string[];
}

export interface FilterProps {
  manufacturer: string;
  year: number | string;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: any;
}

// export interface ShowMoreProps {
//   pageNumber: number;
//   isNext: boolean;
//   setLimit: (limit: number) => void;
// }

export type ShowMoreProps = {
  limit: number;
  setLimit: (limit: number) => void;
  totalCount: number;
  pageNumber: number;
};
