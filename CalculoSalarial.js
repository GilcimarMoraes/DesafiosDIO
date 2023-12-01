// Lê os valores de entrada
const valorSalario = 1300
const valorBeneficios = 200

const valorImposto = calcularImposto(valorSalario)
const saida = valorSalario + valorBeneficios - valorImposto

console.log(saida)


function calcularImposto(salario){
    let aliquota
    if (salario>=0 && salario <= 1100.00)
        aliquota = 0.05;

    else if (salario > 1100.00 && salario < 2500.00)
        aliquota = 0.1

    else {
        aliquota = 0.15
    }

    return salario * aliquota
}
