const test = ['a', 'b', 'c'];
const tester = [1, 2, 3];
function zipList(a, b) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i]);
    arr.push(b[i]);
  }
  return arr;
}
console.log(zipList(test, tester));

function zipListTheSimpleWay(c, d) {
  //const build = [];
  return (_.flatten(_.zip(c, d)));
}
console.log(zipListTheSimpleWay(test, tester));
