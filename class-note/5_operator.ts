// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

var seho1: string | number | boolean;
// 유니온 타입( | )
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface per {
  name: string;
  age: number;
}
function askSomeone(someone: Developer | per) {
  someone.name;
}
