"use strict"

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
    return calcInner;
  }
  calcInner.toString = () => result;
  return calcInner;
} 

const result = calcSum(9)('')(9)(1);

function showResult() {
  alert(result);
}

showResult();


