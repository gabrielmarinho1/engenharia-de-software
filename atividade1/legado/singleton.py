import json
import os

class SistemaCadastro:
    _instance = None
    _initialized = False
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(SistemaCadastro, cls).__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not SistemaCadastro._initialized:
            self.arquivo = "db.json"
            self.dados = self._carregar_dados()
            SistemaCadastro._initialized = True
    
    def _carregar_dados(self):
        if os.path.exists(self.arquivo):
            try:
                with open(self.arquivo, "r", encoding="utf-8") as f:
                    return json.load(f)
            except (json.JSONDecodeError, IOError):
                return []
        return []
    
    def _salvar_dados(self):
        try:
            with open(self.arquivo, "w", encoding="utf-8") as f:
                json.dump(self.dados, f, indent=4, ensure_ascii=False)
            return True
        except (IOError, TypeError):
            return False
    
    def cadastrar(self, nome, idade, email):
        registro = {
            "nome": nome,
            "idade": idade,
            "email": email
        }
        self.dados.append(registro)
        
        if self._salvar_dados():
            print("\nCadastro salvo!")
            return True
        else:
            print("Erro ao salvar (mas o programa continua)")
            return False
    
    def obter_dados(self):
        return self.dados.copy()
    
    def reinicializar(self):
        self.dados = []
        return self._salvar_dados()


def main():
    sistema = SistemaCadastro()
    
    while True:
        print("\n=== SISTEMA DE CADASTRO LEGADO ===")
        print("1 - Cadastrar novo")
        print("2 - Listar cadastros")
        print("3 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            print("\n--- Novo Cadastro ---")
            nome = input("Nome: ")
            idade = input("Idade: ")
            email = input("Email: ")
            
            sistema.cadastrar(nome, idade, email)

        elif opcao == "2":
            print("\n--- Cadastros Existentes ---")
            dados = sistema.obter_dados()
            if dados:
                for i, registro in enumerate(dados, 1):
                    print(f"{i}. Nome: {registro['nome']}, "
                          f"Idade: {registro['idade']}, "
                          f"Email: {registro['email']}")
            else:
                print("Nenhum cadastro encontrado.")

        elif opcao == "3":
            print("Saindo...")
            break

        else:
            print("Opção inválida. Tente de novo.")


if __name__ == "__main__":
    main()