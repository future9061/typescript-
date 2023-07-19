import React from "react";
import { Menu } from "./model/Cafe";

// interface bestPtops {
//   name: string;
//   category: string;
//   price: number;
// }

//Cafe 파일에 있으니 가져올거임

// interface bestProps extends Omit<Menu, "category"> {
//   special: boolean; //추가
// }

type bestProps = Omit<Menu, "category"> & {
  special: boolean; //추가
};

//const BestMenu:React.FC<bestProps> = ({ name, category, price }) => {
const BestMenu = ({ name, price, special }: bestProps) => {
  return (
    <div>
      {special && "❤"}best Menu : {name} (${price})
    </div>
  );
};

export default BestMenu;
