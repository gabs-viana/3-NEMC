def calcular():
    num1 = float(input("Informe o 1° número: "))
    num2 = float(input("Informe o 2° número: "))
    tipo = input("Qual o tipo de cálculo? (+/-/%/x) -> ")

    if tipo == "+": 
        soma = num1 + num2
        return soma
    elif tipo == "-":
        subtracao = num1 - num2
        return subtracao
    elif tipo == "%":
        divisao = num1 / num2
        return divisao
    else:
        mult = num1 * num2
        return mult    



print(calcular())