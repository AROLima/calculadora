document.addEventListener("DOMContentLoaded", function () {
    // seleciona os elementos do formulário por ID
    const calculatorForm = document.querySelector(".form"); 
    const firstNumInput = document.getElementById("first_num"); //
    const operatorSelect = document.getElementById("operator");
    const secondNumInput = document.getElementById("second_num");
    const resultValue = document.getElementById("resultValue");

    // Adiciona event listener para o envio do formulário
    calculatorForm.addEventListener("submit", function (e) {
        // Para que a pagina não regarregue depois do submit
        e.preventDefault();

        // Obtém os valores dos campos de entrada e do seletor
        const firstNum = parseFloat(firstNumInput.value);
        const secondNum = parseFloat(secondNumInput.value);
        const operator = operatorSelect.value;

        // Variável para armazenar o resultado do cálculo
        let result;

        // Realiza a operação com base no operador selecionado
        switch (operator) {
            case "add": // valor do atributo value do option
                result = firstNum + secondNum;
                break;
            case "subtract": // valor do atributo value do option
                result = firstNum - secondNum;
                break;
            case "multiply": // valor do atributo value do option
                result = firstNum * secondNum;
                break;
            case "divide":
                // Verifica se o segundo número não é zero antes de realizar a divisão
                if (secondNum !== 0) {
                    result = firstNum / secondNum;
                } else {
                    result = "Undefined (division by zero)";
                }
                break;
            default:
                result = "Invalid operator"; 
        }
        
        if (isNaN(firstNum) || isNaN(secondNum)) { // se o usuário não digitar nada e der submit
            result = "Please enter numbers in the fields";
        }

        // Exibe o resultado na página
        resultValue.textContent = result;
    });
});
