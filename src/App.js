import './App.css';
import GrossCalculator from './component1/gross_salary_Calculator/GrossCalculator';
import TaxCalculator from './component1/tax_calculator/TaxCalculator';

function App() {
  return (
    <div className="App">
      <TaxCalculator />
      <GrossCalculator />
    </div>
  );
}

export default App;
