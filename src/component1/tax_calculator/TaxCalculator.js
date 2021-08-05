import React, { useState } from 'react';
import './TaxCalculator.css';

const TaxCalculator = () => {

    const [input, setInput] = useState(0);
    const [tax, setTax] = useState(0);
    let taxA = 0;
    let taxB = 0;
    let taxC = 0;
    let taxD = 0;
    let taxE = 0;

    const handleTaxAmount = (e) => {
        e.preventDefault();
        // console.log(input);
        if (input <= 400000) {
            setTax(0);
        }
        else{
            if (input > 0) {
                if (input < 150000) {
                    taxA = ((input - 150000) * 0 / 100);
                }
                else {
                    taxA = ((300000 - 150000) * 0 / 100);
                }
            }
            if (input > 150000) {
                if (input < 300000) {
                    taxB = ((input - 150000) * 2.5 / 100);
                }
                else {
                    taxB = ((300000 - 150000) * 2.5 / 100);
                }
            }
            if (input > 300000) {
                if (input < 800000) {
                    taxC = ((input - 300000) * 10 / 100);
                }
                else {
                    taxC = ((800000 - 300000) * 10 / 100);
                }
            }
            if (input > 800000) {
                if (input < 10000000) {
                    taxD = ((input - 800000) * 25);
                }
                else {
                    taxD = ((10000000 - 800000) * 25 / 100);
                }
            }
            if (input > 10000000) {
                taxE = ((input - 10000000) * 30 / 100);
            }
            setTax(taxA + taxB + taxC + taxD + taxE);
        }
    }

    const reset = () => {
        setInput(0);
    }

    return (
        <div className="taxCalculator">
            <h1>Calculate Tax From Gross Income</h1>
            <form>
                <div className="enterData">
                    <input className="amount" placeholder="Enter Gross Income" onChange={(e) => { setInput(e.target.value); }} />
                    <button className="button" onClick={handleTaxAmount} >Get Tax Amount</button>
                    <button className="button" onClick={reset}>Reset</button>
                </div>
                <h1 className="taxAmount" >Tax Amount is: { tax }</h1>
            </form>
        </div>
    )
}

export default TaxCalculator;

