function calculateExpensesSum(yearlyExpences) {
    return yearlyExpences.reduce((sum, expense) => (expense > 1000 ? sum + expense : sum), 0);
  }
  
 
  let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
  ];
  
  expencesExamples.forEach((example, index) => {
    const totalExpenses = calculateExpensesSum(example.yearlyExpences);
  
   
    const lowExpenseMonths = example.yearlyExpences
      .map((expense, monthIndex) => ({ expense, monthIndex }))
      .filter(({ expense }) => expense <= 1000)
      .map(({ monthIndex }) => monthIndex);
  
    console.log(`Test ${index + 1}: Months with expenses less than or equal to 1000 - ${getMonthNames(lowExpenseMonths)}`);
  });
  
  
  function getMonthNames(monthIndices) {
    const monthNames = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return monthIndices.map(index => new Date(index + 1).toLocaleString('default', { month: 'long' }));
  }