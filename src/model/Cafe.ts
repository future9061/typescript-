// let data = {
//     name: "pnik dissert",
//     category: "dissert",
//     address: {
//       city: "서울",
//       detail: "강남구 테헤란로 480",
//       zipCode: 523658,
//     },
//     menu: [
//       { name: "크로플", price: 5000, category: "MEALS" },
//       { name: "아메리카노", price: 3000, category: "COFFEE" },
//       { name: "치즈 케이크", price: 8000, category: "MEALS" },
//     ],
//   };

//오브젝트의 타입을 설정할때는 interface or type 둘 중 택 1

// export type Cafe = {
//   name: string;
//   category: string;
//   address: {
//     city: string;
//     detail: string;
//     zipCode: number;
//   };
//   menu: {
//     //->메뉴는 어레이인데?
//     name: string;
//     price: number;
//     category: string;
//   }[]; //->뒤에 array 명시 해줌
// }; 밑에 좀 더 깔끔하게 정리해줌

export type Cafe = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode?: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

//type은 interface와 달리 요소 하나를 빼주는 기능이 있음
export type AddressWithoutZipcode = Omit<Address, "zipCode">;

//외부 API - 들어올 타입을 모름
export type ApiResponse<T> = {
  data: T[];
  totalpage: number;
  page: number;
};
