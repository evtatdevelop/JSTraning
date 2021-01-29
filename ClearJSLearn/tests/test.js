// describe('pow', () => {
//   before(() => console.log('Testing Run'));
//   after(() => console.log('Testing Finished'));
//   // beforeEach(() => console.log('Перед тестом – начинаем выполнять тест'));
//   // afterEach(() => console.log('После теста – заканчиваем выполнение теста'));

//   describe('powering of 3', () => {
//     function makeTest(x) {
//       const expected = x * x * x;
//       it(`${x} to the power of 3 equally ${expected}`, () => {
//         assert.equal(pow(x, 3), expected);
//       });
//     }

//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
//   });

//   describe('checking of entry data', () => {
//     it('for negative n return NaN', () => {
//       assert.isNaN(pow(2, -1));
//     });

//     it('for fractionals n returm NaN', () => {
//       assert.isNaN(pow(2, 1.5));
//     });
//   });
// });
