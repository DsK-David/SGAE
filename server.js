const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users =[
  {
    "nome": "Eduarda Lima",
    "cni": 4829,
    "password": 7194
  },
  {
    "nome": "Rafael Costa",
    "cni": 9367,
    "password": 5820
  },
  {
    "nome": "Lúcia Pereira",
    "cni": 1475,
    "password": 3058
  },
  {
    "nome": "Marcelo Ferreira",
    "cni": 6592,
    "password": 1247
  }
]
const students_info = [
  {
    "nome": "João Silva",
    "contacto": "joao.silva@email.com",
    "turma": "9A",
    "notas": [85, 92, 78, 89, 95],
    "professores": ["Maria Santos", "Pedro Almeida", "Ana Ferreira"],
    "avatar": "https://exemplo.com/avatar/joao.jpg",
    "informacao_escola": {
      "nome": "Escola Exemplo",
      "endereco": "Rua da Escola, 123",
      "telefone": "(123) 456-7890",
      "diretor": "Carlos Oliveira",
      "ano_fundacao": 1995
    },
    "informacao_aluno": {
      "data_nascimento": "2005-03-15",
      "endereco": "Rua do Aluno, 456",
      "responsavel": "Maria Silva",
      "telefones_emergencia": ["(987) 654-3210", "(567) 890-1234"],
      "historico_medico": {
        "alergias": ["Amendoins", "Poeira"],
        "medicamentos": ["Aspirina", "Inalador"]
      }
    }
  },
  {
    "nome": "Maria Souza",
    "contacto": "maria.souza@email.com",
    "turma": "8B",
    "notas": [88, 76, 90, 82, 94],
    "professores": ["Fernando Pereira", "Carla Rodrigues", "Rui Costa"],
    "avatar": "https://exemplo.com/avatar/joao.jpg",
    "informacao_escola": {
      "nome": "Escola Exemplo",
      "endereco": "Rua da Escola, 123",
      "telefone": "(123) 456-7890",
      "diretor": "Carlos Oliveira",
      "ano_fundacao": 1995
    },
    "informacao_aluno": {
      "data_nascimento": "2006-07-20",
      "endereco": "Rua da Aluna, 789",
      "responsavel": "José Souza",
      "telefones_emergencia": ["(555) 123-4567", "(333) 987-6543"],
      "historico_medico": {
        "alergias": ["Amendoins", "Poeira"],
        "medicamentos": ["Epinefrina", "Inalador"]
      }
    }
  },
  {
    "nome": "Carlos Rodrigues",
    "contacto": "carlos.rodrigues@email.com",
    "turma": "10C",
    "notas": [76, 84, 70, 91, 88],
    "professores": ["Marta Fernandes", "Ricardo Santos", "Isabel Sousa"],
    "avatar": "https://exemplo.com/avatar/joao.jpg",
    "informacao_escola": {
      "nome": "Escola Exemplo",
      "endereco": "Rua da Escola, 123",
      "telefone": "(123) 456-7890",
      "diretor": "Carlos Oliveira",
      "ano_fundacao": 1995
    },
    "informacao_aluno": {
      "data_nascimento": "2004-02-10",
      "endereco": "Rua do Aluno, 789",
      "responsavel": "Ana Rodrigues",
      "telefones_emergencia": ["(789) 456-1230", "(987) 321-6540"],
      "historico_medico": {
        "alergias": ["Pólen", "Glúten"],
        "medicamentos": ["Antihistamínico", "EpiPen"]
      }
    }
  }
]
const profs_arrays = [
  { "name": "João Silva", "password": "7429" },
  { "name": "Maria Santos", "password": "1685" },
  { "name": "Pedro Almeida", "password": "9532" },
  { "name": "Ana Oliveira", "password": "4807" },
  { "name": "Carlos Rodrigues", "password": "2156" },
  { "name": "Mariana Sousa", "password": "6398" },
  { "name": "Rafael Fernandes", "password": "5071" },
  { "name": "Isabel Pereira", "password": "3264" },
  { "name": "Daniel Gomes", "password": "8943" },
  { "name": "Sofia Costa", "password": "7310" },
  { "name": "david", "password": "1234" }
]



const server = require('http').createServer(app)

const port = '3000'
//rotas GET
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/views/index.html')
})
app.get('/admin/auth/students/api', (req, res) => {
    res.json(users);
  });
  app.get('/admin/auth/profs/api', (req, res) => {
    res.json(profs_arrays);
  });
  app.get('/admin/prof/login', (req, res) => {
    res.sendFile(__dirname+'/public/views/login.html')
  });
  app.get('/app/home', (req, res) => {
    res.sendFile(__dirname+'/public/views/home.html')
  });
  app.get('/admin/auth/add/student/', (req, res) => {
    res.sendFile(__dirname+'/public/views/admin.html')
  });
  app.get('/notas', (req, res) => {
    res.sendFile(__dirname+'/public/views/notas.html')
  });
  const dataStudent = []
  app.get('/admin/auth/add/students/api',(req,res)=>{
    res.send(dataStudent)
  })





//rotas POST
app.post('/auth/student/login', async (req, res) => {
    const cni = req.body.student_cni;
    const password = req.body.password;
  
    try {
      const response = await axios.get('http://localhost:3000/admin/auth/add/student/api');
      const usersData = response.data;
      console.log(usersData)
  
      const user = usersData.find(userData => userData.cni === cni && userData.password === password);
  
      if (user) {
        res.redirect('/app/home');
      } else {
        res.status(401).send('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).send('Erro no servidor');
    }
  });

  app.post('/auth/profs/login', async (req, res) => {
    const name = req.body.prof_name;
    const password = req.body.password;
  
    try {
      const response = await axios.get('http://localhost:3000/admin/auth/profs/api');
      const usersData = response.data;
  
      const user = usersData.find(userData => userData.name === name && userData.password === password);
  
      if (user) {
        res.redirect('/admin/auth/add/student/');
      } else {
        res.status(401).send('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).send('Erro no servidor');
    }
  });

 app.post('/admin/auth/add/student/post', (req, res) => {
  const student_name = req.body.nome;
  const student_contact = req.body.contacto;
  const student_class = req.body.turma;
  const prof = req.body.professores;
  const cni = req.body.cni;
  
  // Verificar se o CNI já existe
  const existingCNI = dataStudent.find(student => student.cni === cni);
  if (existingCNI) {
    res.status(400).send('CNI já existe');
    return;
  }
  
  // Gerar senha aleatória
  const password =  Math.random().toString().slice(2, 6); // Senha de 4 dígitos
  
  // Verificar se a senha já existe
  const existingPassword = dataStudent.find(student => student.password === password);
  if (existingPassword) {
    res.status(400).send('Senha já existe');
    return;
  }

  const output = {
    nome: student_name,
    contacto: student_contact,
    turma: student_class,
    professores: prof,
    cni: cni,
    password: password
  };
  
  dataStudent.push(output);
  res.send('Aluno adicionado');
  console.log(output);
});

























server.listen(port,() =>{
    console.log('servidor rodando na porta 3000')
})