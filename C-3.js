const students = [
    { name: 'Asad', scores: [85, 90, 78, 92], present: true },
    { name: 'Sara', scores: [70, 65, '80', 75], present: true }, // Contains a string
    { name: 'Ali', scores: [55, 60, 50, null], present: false }, // Contains a null & is absent
    { name: 'Fatima', scores: [95, 98, 100, 92], present: true },
    { name: 'Umar', scores: [], present: true }                  // Empty scores array
];
function getAverage(scores) {
    if (scores.length === 0) return 0;

    let sum = 0;
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === null) continue;
        const numValue = Number(scores[i]);
        if (typeof numValue === 'number' && !isNaN(numValue)) {
            sum += numValue;
            count++;
        }
    }
    if (count === 0) return 0;
    return Number((sum / count).toFixed(1));
}

function getGrade(average) {
    if (average >= 90) return 'A+';
    if (average >= 80) return 'A';
    if (average >= 70) return 'B';
    if (average >= 60) return 'C';
    if (average >= 50) return 'D';
    return 'F';
}

function generateReport(studentList) {
    return studentList.map(student => {
        const avg = getAverage(student.scores);
        const isPassing = avg >= 60 && student.present === true;

        return {
            name: student.name,
            average: avg,
            grade: getGrade(avg),
            status: student.present ? 'present' : 'absent',
            passed: isPassing
        };
    });
}


function getSummary(report) {
    let passedCount = 0;
    let failedCount = 0;
    let totalAverageSum = 0;
    let topStudentName = '';
    let highestScore = -1; 

    for (let i = 0; i < report.length; i++) {
        const student = report[i];

    
        if (student.passed) {
            passedCount++;
        } else {
            failedCount++;
        }

        
        totalAverageSum += student.average;


        if (student.average > highestScore) {
            highestScore = student.average;
            topStudentName = student.name;
        }
    }

    const classAvg = report.length === 0 ? 0 : Number((totalAverageSum / report.length).toFixed(1));

    return {
        total: report.length,
        passed: passedCount,
        failed: failedCount,
        topStudent: topStudentName,
        classAverage: classAvg
    };
}

console.log("Expected Output:\nReport:");
const finalReport = generateReport(students);

finalReport.forEach(student => {
    console.log(`${student.name}: avg=${student.average}, grade='${student.grade}', status='${student.status}', passed=${student.passed}`);
});

console.log("\nSummary:", getSummary(finalReport));
console.log("\n--- Proving Original Data is Unchanged ---");
console.log(students[1].scores);