const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Vui long nhap <can nang (kg)> <chieu cao (m)>");
    process.exit(1);
}

const rawWeight = args[0];
const rawHeight = args[1];

const weight = Number(rawWeight);
const height = Number(rawHeight);

if (isNaN(weight) || isNaN(height) || height <= 0) {
    console.log("Please provide valid numbers for weight and height.");
    process.exit(1);
}

const bmi = weight / (height * height);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);

console.log('weight:', weight);
console.log('height:', height); 
console.log('bmi:', bmi);

function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    } 
} console.log(  bmi, 'is classified as', classifyBMI(bmi) );


