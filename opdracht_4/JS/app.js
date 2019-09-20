/* schrijf code hier */
function bereken() {
  var selector = document.getElementById('operator');
  var operator = selector[selector.selectedIndex].value;
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var answer;


  switch(operator) {

    case "+":
      answer = num1 + num2;
      document.getElementById('result').innerHTML = answer;
    break;
    case "-":
      answer = num1 - num2;
      document.getElementById('result').innerHTML = answer;
    break;
    case "*":
      answer = num1 * num2;
      document.getElementById('result').innerHTML = answer;
    break;
    case "/":
    answer = num1 / num2;
    document.getElementById('result').innerHTML = answer;
    break;

    default:
    document.getElementById('result').innerHTML = "Operator hasn't been defined.";
    break;
  }


}

document.getElementById('rekenen').addEventListener('click', bereken);;
