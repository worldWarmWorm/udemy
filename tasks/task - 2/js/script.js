let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let article_1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    cost_1 = prompt('Во сколько обойдется?', ''),
    article_2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    cost_2 = prompt('Во сколько обойдется?', '');

appData.expenses[article_1] = cost_1;
appData.expenses[article_2] = cost_2;

alert(appData.budget / 30);