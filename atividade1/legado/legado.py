import json
import os

arquivo = "db.json"

if os.path.exists(arquivo):
    try:
        f = open(arquivo, "r", encoding="utf-8")
        dados = json.load(f)
        f.close()
    except:
        dados = []
else:
    dados = []

while True:
    print("\n=== SISTEMA DE CADASTRO LEGADO ===")
    print("1 - Cadastrar novo")
    print("2 - Sair")
    opcao = input("Opção: ")

    if opcao == "1":
        print("\n--- Novo Cadastro ---")
        nome = input("Nome: ")
        idade = input("Idade: ")
        email = input("Email: ")

        registro = {
            "nome": nome,
            "idade": idade,
            "email": email
        }

        dados.append(registro)

        try:
            f = open(arquivo, "w", encoding="utf-8")
            json.dump(dados, f, indent=4, ensure_ascii=False)
            f.close()
            print("\nCadastro salvo!")
        except:
            print("Erro ao salvar (mas o programa continua)")

    elif opcao == "2":
        print("Saindo...")
        break

    else:
        print("Opção inválida. Tente de novo.")
