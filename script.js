// FONCTION CALCUL
function calcul(){
// DECLARATION ET RECUPERATION DES VARIABLES
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
// VERIFICATION DES VARIABLES
 if(/^[0-9]+.?[0-9]+$/.test(firstNumber && secondNumber)){
    // VERIFICATION OK -> MODULO
    var result = firstNumber % secondNumber;
    alert(result);
  }else{
    // ECHEC
      alert('Ce n\'est pas un nombre');
    }
}
