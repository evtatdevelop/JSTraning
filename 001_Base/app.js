// ? 002
alert("I'm here ✨");

let person = {
  firstName: 'John',
  LastName: 'Smith',
  age: 579,
  'user-location': {
    country: 'USA',
    city: 'LA',
  },
  skils: ['html', 'css', 'js'],
};

// ? 005
console.table(person);
console.log(typeof person);

person.height = 175;

// ? 008
let temp = `<ul>
        <li>First name: ${person.firstName}</li>
        <li>Last name: ${person.LastName}</li>
        <li>Age: ${person.age}</li>
        <li>Skils: ${person.skils}</li>
        <li>Location: ${person['user-location'].country}</li>
        <li>Random: ${Math.random().toFixed(2)}</li>
        <li>Random: ${Math.round(Math.random() * 10)}</li>
        <li>Height: ${person.height}</li>
    </ul>
`;

document.body.innerHTML = temp;

//  ? 010

const nickname = '';
const output = nickname || 'default value';
console.log('🏆', output);

// ? 016

// function getInfo(prop = "✨") {
//   console.log(prop, this.info);
// }

const test = {
  info: 'INFORMATION🎗',
  //   getInfo,
  getInfo(prop = '✨') {
    console.log(prop, this.info);
  },
};

// getInfo.call(test, "⚽");

setTimeout(test.getInfo.bind(test, '⚽'), 5000);

// ? 019

function testf() {
  const arr = [];
  //   let val = "";
  for (let i = 0; i < 10; i++) {
    // val += i;
    let val = '';
    for (c = 0; c <= i; c++) val += c;
    arr.push(() => console.log(i, val));
  }
  return arr;
}

const fs = testf();
console.log(fs);

fs[3]();
