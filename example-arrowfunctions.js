var names = ['James', 'Dara', 'Angelo'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('James'));
//

// var person = {
//   name: 'James',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
// person.greet();

console.log("Traditional");
function add(a,b) {
  return a + b;
}
console.log(add(1,3));
console.log(add(9,0));

console.log("\nArrow funcs");
var addExpression = (a,b) => a + b;
console.log(addExpression(1,3));
console.log(addExpression(9,0));

console.log("\nCurly-braces");
var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(1,3));
console.log(addStatement(9,0));
