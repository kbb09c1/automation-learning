const readline = require('readline');
const {getGrade} = require('./grade');

const rl=readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('Nhập điểm: ', answer => {
    const score = Number(answer);
    console.log('Grade: ', getGrade(score));
    rl.close();
})

function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce ((a,b) => a+b,0) / arr.length;
}

const students = [
  { name: 'Dang', scores: [80, 85, 82] },
  { name: 'Lan',  scores: [92, 90, 91] },
  { name: 'Minh', scores: [] } // test case rỗng
];

students.forEach(s => {
  const avg = average(s.scores);
  if (avg === null) {
    console.log(`${s.name}: No scores`);
  } else {
    console.log(`${s.name}: avg ${avg.toFixed(1)} -> ${getGrade(avg)}`);
    }
});
