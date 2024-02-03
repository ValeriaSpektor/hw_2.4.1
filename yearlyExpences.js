function calculateExpensesAbove1000(yearlyExpenses) {
    return yearlyExpenses.reduce((sum, expense) => (expense > 1000 ? sum + expense : sum), 0);
  }
  
  
  function testCalculateExpenses(expensesExamples) {
    expensesExamples.forEach((example, index) => {
      const calculatedSum = calculateExpensesAbove1000(example.yearlyExpenses);
      const expectedSum = example.yearlyExpenses.filter(expense => expense > 1000).reduce((sum, expense) => sum + expense, 0);
  
      console.log(`Test ${index + 1}: Calculated sum: ${calculatedSum}, Expected sum: ${expectedSum}`);
      
            if (calculatedSum === expectedSum) {
        console.log("Test passed successfully!");
      } else {
        console.log("Test failed!");
      }
    });
  }
  
  
  let expensesExamples = [
    { yearlyExpenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
  ];
  
  
  testCalculateExpenses(expensesExamples);