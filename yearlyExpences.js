function calculateExpensesSum(yearlyExpences) {
    return yearlyExpences.reduce((sum, expense) => (expense > 1000 ? sum + expense : sum), 0);
  }
  
  function testExpenseCalculation() {
    expencesExamples.forEach((example, index) => {
      const sum = calculateExpensesSum(example.yearlyExpences);
      console.log(`Test ${index + 1}: Sum of expenses above 1000 is ${sum}`);
    });
  }
  
  let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
  ];
 
  testExpenseCalculation();