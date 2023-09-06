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


# explicando as rotas
Aqui está uma descrição do que cada rota faz no  código:

1. **`express.static('public')`**: Este middleware serve arquivos estáticos, como imagens, CSS e JavaScript, localizados na pasta "public" do seu projeto.

2. **`GET /`**: Quando um usuário acessa a raiz do seu site (http://seusite.com/), esta rota envia o arquivo "index.html" localizado na pasta "public/views" como resposta.

3. **`GET /teste/api/students`**: Esta rota fornece dados JSON da variável `users`.

4. **`GET /api/professors`**: Esta rota fornece dados JSON da variável `profs_arrays`.

5. **`GET /auth/professors/login`**: Quando um usuário acessa esta rota, o arquivo "login.html" localizado na pasta "public/views" é enviado como resposta. Isso  é a página de login para professores.

6. **`GET /app/home`**: Esta rota envia o arquivo "home.html" localizado na pasta "public/views" como resposta. é a página inicial do aplicativo.

7. **`GET /auth/new/student`**: Quando um usuário acessa esta rota, o arquivo "admin.html" localizado na pasta "public/views" é enviado como resposta. Isso é página para adicionar novos alunos.

8. **`GET /notas`**: Quando um usuário acessa esta rota, o arquivo "notas.html" localizado na pasta "public/views" é enviado como resposta. Essa rota  exibe as notas dos alunos.

9. **`GET /api/students`**: Esta rota fornece dados JSON da variável `dataStudent`.

10. **`POST /auth/student/login`**: Esta rota processa uma solicitação de login de aluno. Ela verifica se as credenciais fornecidas correspondem aos dados armazenados em `/teste/api/students` e redireciona o usuário para `/notas` se o login for bem-sucedido.

11. **`POST /auth/profs/login`**: Esta rota processa uma solicitação de login de professor. Ela verifica se as credenciais fornecidas correspondem aos dados armazenados em `/api/professors` e redireciona o usuário para `/auth/new/student/` se o login for bem-sucedido.

12. **`POST /auth/add/new/student/api`**: Esta rota é usada para adicionar um novo aluno. Ela recebe dados do formulário e os processa, verificando se o CNI (Cadastro Nacional de Identificação) e a senha são exclusivos. Se bem-sucedido, os detalhes do aluno são adicionados a `dataStudent` e o usuário é redirecionado para `/auth/new/student/`.
