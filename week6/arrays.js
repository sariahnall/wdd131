const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
  }
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join('');

let grades = ['A', 'B', 'A', 'C']

let gpaPoints = grades.map(function(grade){
  switch (grade){
    case 'A':
      point = 4;
      break;
    case 'B':
      point = 3;
      break;
    case 'C':
      point = 2;
      break;
    case 'D':
      point = 0;
      break;
    case 'F':
      point = 0;
      break;
    default:
      alert('not a valid grade')
  }
  return point
})

console.log(gpaPoints);

let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total, item){
  return total + item;
}
console.log(totalPoint);

let gpaAverage = totalPoint/gpaPoints.length;

console.log(gpaAverage);

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


// let shortFruit = fruits.filter(function(fruit){
//   return fruitlength < 6
// }) 
// ↑ same thing
let shortFruit = fruits.filter((fruit)=> fruit.length < 6);

console.log(shortFruit)

const myArray = [12, 34, 21, 54];
const luckyNumber = 54;
let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex)