# 🧷 typescript

##### typescript 기초를 정리하는 repository 😀

<br />

## ✨목차

#### 1장. [프로젝트 생성](#1장.-프로젝트-생성)

<br />

### 1장. 💫프로젝트 생성

---

- #### **1-1. project create**

<br />

**create-react-app 공식 사이트 참고**

> npx create-react-app my-app --template typescript>

<br />

**directiry 구조**

```
📦public
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
📜package-lock.json
📜package.json
📜tsconfig.json  -> script 관련된 옵션 설정. "target":"es6"로 변경 "lib":"es6" 추가
```

<br />

- #### **1-2. 간단한 store 만드는 예제**

```javascript
//directory 구조
📦src
 ┣ 📂model
 ┃ ┗ 📜Cafe.ts //data의 타입을 지정해주는 file
 ┣ 📜App.css
 ┣ 📜App.tsx  //코드 작성
 ┣ 📜index.css
 ┣ 📜index.tsx  //app을 rendering
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜Store.tsx //app에서 쓸 component

```

1. App.tsx에서 사용할 data 만들기

```javascript

let data = {
  name: "pnik dissert",
  category: "dissert",
  address: {vk
    city: "서울",
    detail: "강남구 테헤란로 480",
    zipCode: 523658,
  },
  menu: [
    { name: "크로플", price: 5000, category: "MEALS" },
    { name: "아메리카노", price: 3000, category: "COFFEE" },
    { name: "치즈 케이크", price: 8000, category: "MEALS" },
  ],
};

const App: React.FC = () => {
 return(
    <>
    </>
 );
}


```

2. App component 만들기

```javascript
const App: React.FC = () => {
  return <div></div>;
};

//const App:REACT.FC=()=>{} react에서 컴포넌트가 함수 타입임을 지정하는 것.
```

<details><summary>REACT.FC<>가 최근 권장되지 않는 이유
</summary>
1.children을 가지고 있음(children을 사용하지 않음에도)

2.가독성이 떨어짐

```javascript
const Store: React.FC<storeProps> = ({ info }) => {};
const Store = ({ info }: storeProps) => {};
```

</details>

3. data의 type을 지정해 줄 file 생성

```javascript
//Cafe.ts
//단순히 data만 들어있다면 굳이 .tsx로 만들필요 없음
//object에 타입 설정은 interface or type

export type Cafe = {
  name: string,
  category: string,
  address: {
    city: string,
    detail: string,
    zipCode: number,
  },
  menu: {
    name: string,
    price: number,
    category: string,
  }[],
};

//array는 뒤에 [] 명시
```

위의 방식은 가독성이 떨어지고 data를 가져다 쓸 때에도 불편함이 있다.

```javascript
export type Cafe = {
  name: string,
  category: string,
  address: Address,
  menu: Menu[],
};

export type Address = {
  city: string,
  detail: string,
  zipCode: number,
};

export type Menu = {
  name: string,
  price: number,
  category: string,
};
//마찬가지로 array는 뒤에 [] 명시
```

5. 타입을 지정해 준 data를 기존의 App.js data에 적용

```javascript
let data: Cafe = {
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

const App: React.FC = () => {
  const [myCafe, setMyCafe] = useState < Cafe > data;
  //useState의 type도 지정

  const changeAddress = (address: Address) => {
    setMyCafe({ ...myCafe, address: address });
  };

  return (
    <div className="App">
      <Store info={myCafe} changeAddress={changeAddress} />
    </div>
  );
};

export default App;
```

<details><summary>change   Address?</summary>
address 값 변경 예정이여서 만든 함수      
address를 parameter로 받아와서  
myCafe 객체의 address 속성을 업데이트

</details>

4. App.tsx에서 사용할 컴포넌트 생성 & Cafe 파일에서 data의 type 지정

```javascript
//store.tsx

import React from "react";
import { Address, Cafe } from "./model/cafe";

interface storeProps {
  info: Cafe;
  changeAddress(address: Address): void;
}

//여기서 { name }: Cafe 파라미터는 데이터가 아니라 데이터의 타입을 받아온 것
const Store = ({ info }: storeProps) => {
  return (
    <div>
      <p> Store : {info.name}</p>
      <p>
        {info.address.city}. {info.address.detail}
      </p>
    </div>
  );
};

export default Store;
```

<details><summary>void?</summary>
함수의 반환 타입을 나타내는 키워드

changeAddress는 address의 값을 받아와서 객체의 상태를 업데이트해주지만, 외부로 반환하지는 않음  
만약 void를 생략한다면 changeAddress 함수는 any 타입이 되고, 값을 반환할 수 있다. changeAddress의 역할은 그저 내부 데이터 업데이트이기 때문에 void를 지정!

</details>

6. 컴포넌트에 Cafe.ts 데이터 타입 받아와서 응용하기

```javascript
//model direc > Cafe.ts
export type Cafe = {
  name:string;
  category: string;
  address: Address;
  menu:Menu[]
}

export type Address = {
  city: string;
  detail: string;
  zipCode:number
}

export type Menu = {
  name:string;
  price:number;
  category:string
}


// BestMenu.tsx component

//1.단순히 import해서 사용
import { Menu } from './model/cafe'

type BestProps {
  data : Menu
}

const BestMenu = ({Menu}:BestProps)=>{
  return(
    <div>베스트 메뉴 : {Menu.name} ${Menu.price} category:{Menu.category}</div>
  )
}


//2.기존 데이터에 객체 추가 해서 사용하기(extends)
type BestProps extends{
  data : Menu,
  special : boolean  //데이터를 동적으로 관리
}

//3.기존 데이터에서 객체 하나 제외하기
//Cafe.ts
export type Menu = {
  name:string;
  price:number;
  category?:string   //권장하지 않음
}

//type 에서만 omit 사용 가능. interface는 불가
export type AddressWithoutZipcode = Omit<Menu,'category'>

//BeatMenu.tsx
type bestProps = Omit<Menu, 'category'> & {
  special:boolean
}
interface bestProps extends Omit<Menu, 'category'> {
  special:boolean
}

```
