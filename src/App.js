import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ charge, setCharge ] = useState(0);
  const [ cash, setCash ] = useState(0);
  const [counter, setCounter ] = useState(10);

  const cashList = [5, 10, 15, 20 ];
  const cashList2 = [5, 6, 7, 10, 11, 12, 15, 16, 17, 20];
  const coinsList = [0.05, 0.10, 0.25, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95 ];

  const randomCash = () => {
    let cashIdx = Math.floor(Math.random() * 4);
    return (cashList[cashIdx]);
  }

  const randomCharge = () => {
    let chargeIdx = Math.floor(Math.random() * 19);
    let randomDollar = Math.floor(Math.random() * 10);
    return (coinsList[chargeIdx] + randomDollar );
  }

  const transaction = () => {
    let generatedCash = randomCash();
    let generatedCharge = randomCharge();

    if ( generatedCharge >= generatedCash ) {
      transaction();
    } else {
      setCash(generatedCash);
      setCharge(generatedCharge);
    }
    console.log(generatedCash, generatedCharge);
  }

  const handleClick = () => {
    transaction();
    setCounter(10);
  }

  useEffect(() => {
    transaction();
  },[]);

  useEffect(() => {
    const timer = setInterval(() =>{ 
      if (counter > 0) {
        setCounter( prev => prev - 1);
      }
    }, 1000);

    return (() => {
      clearInterval(timer);
    })
  }, [counter]);

  return (
    <div className="App">
      <section className="container">
        <header>MY CHANGE</header>
        <div className='charge'>
          $ {charge}
        </div>
        <div className="cash">
          $ {cash}
        </div>
        <button onClick={handleClick}>
          NEXT
        </button>
        <div className='counter'>
          ⏳ {counter}
        </div>
      </section>
    </div>
  );
}

export default App;
