// function fetchItems(): string[] {
//   let items2 = ['a', 'b', 'c'];
//   return items2;
// }

// fetchItems();

function fetchItems(): Promise<string[]> {
  let item2 = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(item2);
  });
}
fetchItems();
