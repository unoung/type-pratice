interface User {
  age: number;
  name: string;
}

//변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: '세호',
};

//함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 33,
  name: 'capt',
};

getUser(capt);

//함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum1: SumFunction;
sum1 = function (a: number, b: number): number {
  return a + b;
};

//인덱싱
interface StringArray {
  [index: number]: string;
}
var arr2: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

//딕셔너리 패턴

interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

interface Person1 {
  name: string;
  age: number;
}

interface Developer1 extends Person1 {
  language: string;
}

var cpt: Developer1 = {
  language: 'hi',
  name: 'cpt',
  age: 100,
};
