interface Developer {
  name: string;
  skill: string;
}

interface person {
  name: string;
  age: number;
}

function introduce(): Developer | person {
  return { name: 'tony', age: 33, skill: 'iron making' };
}
var tony = introduce();

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
}

//타입가드 정의
function isDeveloper(target: Developer | person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)){
    tony.skill
}else{
    tony.age
}