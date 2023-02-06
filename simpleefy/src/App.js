import './App.css';
import React from 'react';
import InputFormBox from './component/inputFormBox/InputFormBox';


function App() {
  // const items = [
  //   { salaryIncome: 
  //     {
  //       name: "Salary Income",
  //       basicSalary: "Basic Salary",
  //       hraReceived: "HRA Receieved",
  //       actualRent: "Actual Rent",
        
  //     }
  //   },
  //   { capitalGains: "Capital Gains" },
  //   { otherIncome: "Other Incomes"}
  // ];
  return (
      <div>
        <InputFormBox 
          title = {{ name: "Income Details" }}
        />
      </div>
      
  );
}

export default App;
