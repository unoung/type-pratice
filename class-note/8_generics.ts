// function logText(text) {
//   console.log(text);
//   return Text;
// }
// logText(10);
// logText('하이');
// logText(true);

// function logText<T>(text:T):T{
//     console.log(text);
//     return text;
// }
// logText<string>('ㅎㅇ');

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// logText('a');
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str3 = logText<string>('a');
str3.split('');
const login = logText<boolean>(true);

//인터페이스에 제네릭을 선언하는 방법
// interface dropdown {
//   value: string;
//   selected: boolean;
// }

interface dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: dropdown<string> = { value: 'abc', selected: false };

//제네릭의 타입제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }

// logTextLength<string>(['hi','hu']);

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface lengthType {
  length: number;
}

function logTextLength<T extends lengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('a');

//제네릭 타입제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name');
