// grade.js
function getGrade(score) {
  // validation
  if (typeof score !== 'number' || Number.isNaN(score)) {
    return 'Invalid score';
  }
  if (score < 0 || score > 100) {
    return 'Invalid score';
  }

  // xếp loại
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// ví dụ sử dụng
const examples = [95, 86, 70, 61, 50, -5, 'abc1', NaN];
examples.forEach(s => {
  console.log(s, '→', getGrade(s));
});

// Export nếu muốn dùng trong module khác
module.exports = { getGrade };

