# Create User

> ### Success Case
1. Sistema verifica se a conta git existe pelo firebase
2. Sistema armazena os dados do usuário no firebase
3. Sistema armazena os dados do usuário com excessão de sua senha
4. Sistema não retorna nenhum erro

> ### Exception - Erro ao não inserir um dos valores obrigatórios
1. Sistema retorna Erro de ("Campo x não inserido")

> ### Exception - Erro quando a conta git não existe
1. Sistema retorna Erro de ("Conta git inválida")

> ### Exception - Erro quando usuário já existente
1. Sistema retorna Erro de ("Usuário já cadastrado")
