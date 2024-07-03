def calc():
    num1 = int(input("Qual o 1° número? "))
    num2 = int(input("Qual o 2° número? "))
    tipo = input("Qual o tipo de cálculo? (+,-,*,/)")
    if tipo == "+":
        resultado = num1 + num2
        print(f"O resultado deste cálculo é {resultado}")
    elif tipo == "-":
        resultado = num1 - num2
        print(f"O resultado deste cálculo é {resultado}")
    elif tipo == "*":
        resultado = num1 * num2
        print(f"O resultado deste cálculo é {resultado}")
    elif tipo == "/":
        resultado = num1 / num2
        print(f"O resultado deste cálculo é {resultado}")
    else:
        print("Operação inválida.")

calc()