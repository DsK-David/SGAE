# SGAE

Bem-vindo ao meu incrível projeto! :rocket:

# Descrição

SGAE (Sitema de Gestão e Administração Escolar) é uma plataforma opensource bem simples que tem como função ajudar na gestão de alunos e escolas,dentro da SGAE o utilizador autorizado pode adicionar alunos numa turma,escolher os professores dessa turma,gerir as notas dos alunos,adicionar notas entre outras funções,

ela ainda é bem inicial tendo poucas funções e com um codigo não limpo,fiz esse pull para organizar as versões da plataforma desde agora que esta em testes para depois poder dizer que enfim consegui,esse repo é privado ou seja somente pessoas autorizadas por mim podem ver e contribuir.

  

# Funcionalidades

- Permite alunos de qualquer nivel escolar ver suas notas entre outras informações

- Ajudam os profissionais da educação a gerir melhor a maneira como adicionam as notas aos alunos fazendo isso da forma mais rapida :zap:

- Permite aos administradores das escolar a melhor organização do ano letivo e a gerir melhor as escolas

- Permite ser eficaz e rapido :zap:

# Instalação :package:

  

Siga estas etapas para instalar o projeto em sua máquina:

  

1. Clone o repositório: `git clone https://github.com/DsK-David/SGAE.git`

2. Navegue até o diretório do projeto: `cd SGAE`

3. Instale as dependências: `npm install`

4. use o comando npm run dev ou npm run start

5. Acesse no seu :computer: a URL `https://localhost:3000/`

# issues :four: :zero: :four:
1. Responsividade (as telas principais estão somente com um css basico e sem responsividade para mobiles)
2. seguraça (usando tokens ou cookies etc,contanto somente com criptografia de dados dos usuarios que passam por rotas simples)
3. Nome de rotas (os nomes das rotas estão completamente sem ligação e bem basico ajudaria muito uma rota que ja vem presente com :id do professor ou do aluno etc)
4. Falta de banco de dados(eu particularmente trabalhei pouco com Bancos de Dados prefiro guardar os dados em `localStorage` ou em rotas com method `POST` e guardar num array depois usar o `res.json()` para renderizar como json e depois consumir essa rota,é uma pratica não segura mais sempre usu cryptografia nos dados e uso tokens de acesso etc para forçar mais segurança)

casso encontrar mais issues não exite em me reportar,esteje avontade em corrigir

## :chart_with_upwards_trend: Contribuição

  

Contribuições são bem-vindas! :tada: Se você gostaria de contribuir para este projeto, siga estas etapas:

  
  

1. Crie uma nova branch: `git checkout -b minha-contribuicao`

2. Faça as alterações desejadas

3. Faça o commit das alterações: `git commit -m 'Minha contribuição'`

4. Faça o push para o repositório remoto: `git push origin minha-contribuicao`

5. Abra uma solicitação de pull no GitHub

  
  

## :paperclip: Licença

  

Este projeto está licenciado sob a [MIT License](LICENSE).
