const user = { name: '涼', age: 30, job: 'エンジニア' };
const { name, age, job } = user;

console.log(name); // 涼
console.log(age);  // 30
console.log(job);  // エンジニア


const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, ] = colors;

console.log(firstColor);  // red
console.log(secondColor); // green


const fruitsA = ['りんご', 'バナナ'];
const fruitsB = ['みかん', 'いちご'];

const allFruits = [...fruitsA, ...fruitsB];
console.log(allFruits); // ['りんご', 'バナナ', 'みかん', 'いちご']


涼
30
エンジニア
red
green
[ 'りんご', 'バナナ', 'みかん', 'いちご' ]