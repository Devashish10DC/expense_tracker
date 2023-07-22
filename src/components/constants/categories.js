const expenseColors = ['#FF3131', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  ];

export const expenseCategories = [
  { type: 'Food', description:'', amount: 0, color: expenseColors[0] },
  { type: 'Petrol', description:'', amount: 0, color: expenseColors[1] },
  { type: 'Salary', description:'', amount: 0, color: expenseColors[2] },
  ];

export const resetCategories = () => {
  expenseCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.description);
};