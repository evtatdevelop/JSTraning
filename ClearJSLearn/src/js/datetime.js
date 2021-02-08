'use strict';

console.log('Date Time ⏳');

// const newDate = new Date(2012, 1, 20, 3, 12);
// console.log(newDate);

// function getWeekDay(date) {
//   const days = ['Sn', 'Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St'];
//   return days[date.getDay()];
// }
// const date = new Date(2014, 0, 3);
// console.log( getWeekDay(date) );

// const date = new Date(2012, 0, 1); // 3 января 2012 года
// function getLocalDay(date) {
//   const day = date.getDay();
//   return day === 0 ? 7 : day;
// }
// console.log( getLocalDay(date) ); // вторник, нужно показать 2

// const date = new Date(2015, 0, 2);
// function getDateAgo(dateIn, ago) {
//   // const y = dateIn.getFullYear();
//   // const m = dateIn.getMonth();
//   // const d = dateIn.getDate() - ago;
//   // const lastDate = new Date().setFullYear(y, m, d);
//   // return new Date(lastDate);
//   const newDate = new Date(dateIn);
//   newDate.setDate(dateIn.getDate() - ago);
//   return newDate.getDate();
// }
// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//   const lsastDay = new Date(year, month + 1, 0);
//   return lsastDay;
// }
// console.log( getLastDayOfMonth(2012, 1) );
// console.log( getLastDayOfMonth(2012, 0) );
// console.log( getLastDayOfMonth(2013, 1) );

// function getSecondsToday() {
//   const seconds = new Date().setHours(0, 0, 0);
//   // const now = new Date();
//   // const seconds = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   return (Date.now() - seconds) / 1000;
// }
// console.log( getSecondsToday() );

// function getSecondsToTomorrow() {
//   const tomorrow = new Date().setHours(24, 0, 0);
//   // const now = new Date();
//   // const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   // console.log(new Date(), new Date(tomorrow));
//   return (tomorrow - Date.now()) / 1000;
// }
// console.log( getSecondsToTomorrow() );

// function formatDate(date) {
//   const diff = new Date() - date;
//   if (diff <= 1000) return 'прямо сейчас';
//   if (diff < 60000) return `${diff / 1000} сек. назад`;
//   if (diff <= 60 * 60000) return `${diff / 60000} мин. назад`;
//   // const d = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
//   // const m = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getDate()}`;
//   // return `${d}.${m}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
//   let d = date;
//   d = [
//     `0${d.getDate()}`,
//     `0${d.getMonth() + 1}`,
//     `${d.getFullYear()}`,
//     `0${d.getHours()}`,
//     `0${d.getMinutes()}`,
//   ].map((item) => item.slice(-2));
//   return `${d.slice(0, 3).join('.')}, ${d.slice(3).join(':')}`;
// }

// console.log( formatDate(new Date(new Date() - 1)) ); // "прямо сейчас"
// console.log( formatDate(new Date(new Date() - 40 * 1000)) ); // "30 сек. назад"
// console.log( formatDate(new Date(new Date() - 7 * 60 * 1000)) ); // "5 мин. назад"
// console.log( formatDate(new Date(new Date() - 854010 * 1000)) );
