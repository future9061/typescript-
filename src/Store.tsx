import React from "react";
import { Address, Cafe } from "./model/Cafe";

interface storeProps {
  info: Cafe;
  changeAddress(address: Address): void;
}

const Store = ({ info }: storeProps) => {
  return (
    <div>
      <h2> Store : {info.name}</h2>
      <p>
        {info.address.city}. {info.address.detail}
      </p>
    </div>
  );
};

export default Store;
