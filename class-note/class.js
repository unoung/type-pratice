function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('cap', 100);
//es6 부터 시작
class Person {
  //클래스 로직
  //인스턴스를 만들어주는 역할
  constructor(name, age) {
    console.log('생성되었습니다');
    this.name = name;
    this.age = age;
  }
}

new Person('세호', 30); //생성되었습니다
