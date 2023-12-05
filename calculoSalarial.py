# Funcao para calcular o imposto

def calcularImposto(salario):
    aliquota = 0.00
    if(salario >= 0 and salario <= 1000.00):
        aliquota = 0.05
    
    elif(salario > 1000.00 and salario <= 2500.00):
        aliquota = 0.10

    else:
        aliquota = 0.20

    return aliquota * salario

# Solicitar usuario os dados

valorSalario = float(input("Digite o valor do salário bruto: "))
valorBeneficio = float(input("Digite o valor dos benefícios: "))

# Calcular o valor do imposto atraves da função

valorImposto = calcularImposto(valorSalario)

# Salario Liquido
salarioLiquido = valorSalario + valorBeneficio - valorImposto

print(f"O salario liquido é {salarioLiquido:.2f}")