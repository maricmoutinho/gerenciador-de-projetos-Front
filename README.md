💻 Gerenciador de Projetos - Frontend
Este é o frontend da aplicação Gerenciador de Projetos. A interface foi desenvolvida para oferecer uma experiência de usuário fluida e responsiva, funcionando como um PWA (Progressive Web App). Ela permite o gerenciamento completo de projetos (CRUD) através de uma comunicação direta com uma API REST externa.

🚀 Tecnologias Utilizadas
HTML5 & CSS3: Estrutura e estilização moderna com foco em responsividade (Mobile First).

JavaScript (Vanilla): Lógica de consumo de API, manipulação do DOM e estados da aplicação.

Service Workers: Implementação de estratégias de cache para suporte offline.

Web Manifest: Configuração de instalação do app em dispositivos móveis e desktop.

📦 Funcionalidades
✔ Cadastro de Projetos: Formulário intuitivo para registrar nome, tecnologias, links e descrições.

✔ Listagem Dinâmica: Visualização em tempo real dos projetos consumidos da API.

✔ Edição Facilitada: Carregamento automático de dados no formulário para atualizações rápidas.

✔ Exclusão de Registros: Remoção de projetos com atualização instantânea da interface.

✔ Suporte Offline: Graças ao Service Worker, a interface e recursos básicos permanecem acessíveis mesmo sem conexão.

✔ Instalabilidade (PWA): Pode ser instalado no celular ou computador, comportando-se como um aplicativo nativo.

🧠 Estrutura do Projeto
O frontend está organizado de forma simples e eficiente:

Plaintext
frontend/
├── icons/
│   ├── ic_launcher.png    # Ícone padrão do aplicativo (192x192)
│   └── playstore.png      # Ícone de alta resolução (512x512)
├── app.js                 # Lógica de integração com a API e Service Worker
├── index.html             # Estrutura principal da aplicação
├── manifest.json          # Metadados para instalação do PWA
├── service-worker.js      # Gerenciamento de cache e modo offline
└── style.css              # Estilização e media queries para mobile
⚙️ Integração com a API
A aplicação consome os dados do endpoint:
https://gerenciador-de-projetos-59so.onrender.com/api/projects

As requisições utilizam o padrão Fetch API com suporte a:

GET: Para listar projetos.

POST: Para criar novos registros.

PUT: Para editar projetos existentes.

DELETE: Para remover registros via ID.

🔧 Como Rodar o Projeto
Clone este repositório.

Abra o arquivo index.html diretamente no seu navegador ou utilize uma extensão como a Live Server (recomendado para testar o Service Worker).

Certifique-se de que o backend está online para que as funcionalidades de salvar/deletar funcionem corretamente.

👨‍💻 Autor
Maria Clara Moutinho

Projeto desenvolvido para fins de gerenciamento e organização de portfólio acadêmico/profissional.
