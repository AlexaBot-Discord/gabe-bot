const Collection = require("./index");
const myColl = new Collection();

for(let i = 0; i<100000;i++) {
  myColl.set(`test${i}`, {testValue: "This is a test Value"});
}

const randomKeys = myColl.randomKey(50);
console.log(randomKeys.length);

console.log(myColl.size);
console.log(myColl.get("test55").testValue);
