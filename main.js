"use strict"
let finalResult;

function calcSum(n) {
  if(typeof n !== 'number') {
    throw new Error('Ошибка');
  } 
  let result = n;
  function calcInner(n) {
    
    if( typeof n !== 'number' || n === '') {
      alert(result);
      throw new Error('Сумма предыдущих чисел \= ' + result);
    }
    result += n;
    finalResult = result;
    return calcInner;
  }
  calcInner.toString = () => result;
  return calcInner;
} 

calcSum(9)(9)(9)(1);

function showFinalResult() {
  alert(finalResult);
}

showFinalResult()

