import React, {useState} from 'react';
import './GrossCalculator.css';

const GrossSal = () => {

    const [input, setInput] = useState(0);
    const [grossAmount, setGrossAmount] = useState(0);
    let grossAmountA = 0;
    let grossAmountB = 0;
    let grossAmountC = 0;
    let grossAmountD = 0;
    let grossAmountE = 0;
    let netAmountA = 0;
    let netAmountB = 0;
    let netAmountC = 0;
    let netAmountD = 0;
    let unCalNet = 0;

    const handleNetAmount = (e) => {
        e.preventDefault();
        if (input <= 400000) {
            setGrossAmount(input);
        }
        else {
            if (input > 0) {
                if (input <= 150000) {
                    grossAmountA = (150000);
                    netAmountA = 150000;
                    unCalNet = (input - netAmountA);
                }
                else {
                    grossAmountA = (150000);
                    netAmountA = 150000;
                    unCalNet = (input - netAmountA);
                }
            }
            if (input > 150000) {
                if (input < 300000) {
                    grossAmountB = Math.floor(unCalNet * 100 / 97.5);
                }
                else{
                    grossAmountB = (300000 - 150000);
                    netAmountB = Math.floor((300000 - 150000) - ((300000 - 150000) * 2.5 / 100));
                    unCalNet = (unCalNet - netAmountB);
                }
            }
            if (input > 300000) {
                if (input < 800000) {
                    grossAmountC = Math.floor(unCalNet * 100 / 90);
                }
                else{
                    grossAmountC = (800000 - 300000);
                    netAmountC = Math.floor((800000 - 300000) - ((800000 - 300000) * 10 / 100));
                    unCalNet = (unCalNet - netAmountC);
                }
            }
            if (input > 800000) {
                if (input < 10000000) {
                    grossAmountD = (unCalNet * 100 / 75);
                }
                else if (input >= 10000000) {
                    grossAmountD = (10000000 - 800000);
                    netAmountD = Math.floor((10000000 - 800000) - ((10000000 - 800000) * 75 / 100));
                    unCalNet = (unCalNet - netAmountD);
                }
            }
            if (input > 10000000) {
                grossAmountE = (unCalNet * 100 / 70);
            }
            setGrossAmount(grossAmountA + grossAmountB + grossAmountC + grossAmountD + grossAmountE);
        }
    }

    const reset = () => {
        setInput(0);
    }

    return (
        <div className="grossCalculator">
            <h1>Calculate Gross Income From Net Income</h1>
            <form>
                <div className="enterData">
                    <input className="amount" placeholder="Enter Net Income" onChange={(e) => { setInput(e.target.value); }} />
                    <button className="button" onClick={handleNetAmount} >Get Gross Amount</button>
                    <button className="button" onClick={reset}>Reset</button>
                </div>
            </form>
            <h1 className="grossAmount" >Gross Amount is: { grossAmount }</h1>
        </div>
    )
}

export default GrossSal;
