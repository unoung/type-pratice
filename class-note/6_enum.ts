enum Shoes {
  nike = 'nike',
  adidas = 'adidas',
}

var myShoes = Shoes.nike;
console.log(myShoes); // nike 가 출력

//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
