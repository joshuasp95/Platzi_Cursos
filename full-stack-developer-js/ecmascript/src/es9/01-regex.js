const  regex2 = /(\d{4})-(\d{2})-(\d{2})/;


const matchers = regex2.exec('2023-08-23');
console.table(matchers);



const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = regex.exec("2023-08-22");
console.log(match);
console.table(match);
console.log(match.groups.year);   // "2023"
console.log(match.groups.month);  // "08"
console.log(match.groups.day);    // "22"
