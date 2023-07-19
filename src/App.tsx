import React, { useState } from "react";
import "./App.css";
import { Address, Cafe } from "./model/Cafe";
import Store from "./Store";
import BestMenu from "./BestMenu";

let data: Cafe = {
  //타입 적용
  name: "핑크 디저트",
  category: "desert",
  address: {
    city: "서울",
    detail: "강남구 테헤란로 480",
    zipCode: 523658,
  },
  menu: [
    { name: "크로플", price: 5000, category: "MEALS" },
    { name: "아메리카노커피", price: 3000, category: "COFFEE" },
    { name: "치즈 케잌", price: 8000, category: "MEALS" },
  ],
};

//React.FC -react 함수 컴포넌트 타입에 지정. 요즘은 안쓰는 것을 권장
const App: React.FC = () => {
  const [myCafe, setMyCafe] = useState<Cafe>(data);
  //제네릭 문법으로 type설정, 무엇을 넣어줄지 모름, 사용시 정해줌

  const changeAddress = (address: Address) => {
    setMyCafe({ ...myCafe, address: address });
  };

  return (
    <div className="App">
      <Store info={myCafe} changeAddress={changeAddress} />
      <BestMenu
        name="바나나 프라푸치노"
        price={10000}
        special={true} //동적으로 데이터 변경하기
      />
    </div>
  );
};

export default App;
