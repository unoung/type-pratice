//타입 추론 기본
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b;
}

//타입 추론 기본2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

//타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
  }
  interface DetailedDropdown<K> extends Dropdown<K>{
    tag:K;
    description:string;
  }

var detailedItem: DetailedDropdown<string> = {
    title:'abc',
    description:'aa',
    value:'aaa',
    tag:'bb'
}

//Best Common Type
var arr = [1,2,true];

