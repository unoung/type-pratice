//타입호환
interface Developer {
  name: string;
  skill: string;
}
interface person {
  name: string;
}
var developer: Developer;
var person1: person;
//developer = person1; //오른쪽에 있는 타입이 더 많은 타입을 가지고 있어야함
// person1 = developer;

var add = function (a: number) {};

var sum = function (a: number, b: number) {
  return a + b;
};

//제네릭
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

interface NotEmpty<T> {
    data:T;
}

var notempty1:NotEmpty<string>;
var notempty2:NotEmpty<number>;
// notempty1 = notempty2;
