import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App=()=> {
  const expenses=[
    {
      title:'Toilet Paper',
      amount:94.12,
      date: new Date(2020,8,14),
    },
    {
      title:'New TV',
      amount:799.49,
      date: new Date(2021,3,12),
    },
    {
      title:'Car Insurance',
      amount:294.67,
      date: new Date(2021,3,28),
    },
    {
      title:'New Desk Wooden',
      amount:450,
      date:new Date(2021,5,12),
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expenses);
  }

  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler} />
       <Expenses expenses={expenses}/>
    </div>
    
  );
}

export default App;
