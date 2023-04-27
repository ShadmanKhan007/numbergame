import React, {useState}  from 'react'

export default function NameUpdater() {
const luckyNumber = Math.floor(Math.random() * 100) +1;

  const [guess, myGuess] = useState();
  const [result, setResult] = useState();
  const [count, setCount] = useState();


  function numberChange(event) {
    myGuess(event.target.value)
  }

 

  function  checkGuessNumber(){
    let num = parseInt(guess)


   
    setCount(count + 1);

    if(num < luckyNumber) {
      setResult('You guessed a smaller number.')
    }
    else if(num > luckyNumber) {
        setResult('You guessed a larger number.')
    }
    else {
        setResult(`Congratulations! You guessed the right number in ${count} attempts.`);
    }
 myGuess('');
    
  }

 
  return (
    <div>
        <h1>Lucky Number Game</h1>
        <input type="text"
        placeholder="Guess the number"
        onChange={numberChange} 
        value={guess}
        />
        <button onClick={checkGuessNumber}>Match Number</button>
      <p>{result}</p>
    </div>
  )
}

