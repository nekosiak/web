function num(num1,num2, oper){
    {
        return eval(`${num1}` + oper + `${num2}`);
      }
}
let num1 = prompt('put number 1', null);
let num2 = prompt('put number 2', null);
let oper = prompt('select operation u want: + - * /');
alert(num(num1,num2, oper));
// не працює операція +, додає числа як стрінг
  
