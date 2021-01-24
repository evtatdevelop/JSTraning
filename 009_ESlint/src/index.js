const a = 1;
let x = 200;

// x++;

function foo(name) {
  const lastname = name;
  return lastname;
}

// console.log(x, a);

// eslint-disable-next-line no-console
console.log(window);

foo(a + x);

const arrow = (y) => y + x;

arrow();

const obj = {
  userName: 'John',
  age: 23,
};
// const name = obj.name;
const [userName, age] = obj;

x = userName + age;
