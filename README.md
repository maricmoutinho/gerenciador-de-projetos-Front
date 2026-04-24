💻 Gerenciador de Projetos - Frontend
Este é o frontend da aplicação Gerenciador de Projetos, desenvolvido para oferecer uma interface de usuário intuitiva e responsiva. O projeto foi construído como um PWA (Progressive Web App), permitindo a instalação em dispositivos e o funcionamento básico em modo offline. A aplicação se comunica diretamente com uma API REST para realizar o gerenciamento persistente de dados.

🚀 Tecnologias Utilizadas
HTML5 & CSS3: Estrutura e estilização com foco em responsividade para dispositivos móveis.

JavaScript (Vanilla): Lógica para consumo de API, manipulação do DOM e gerenciamento de estados.

Service Workers: Implementação de cache para carregamento de recursos e suporte offline.

Web Manifest: Configurações de identidade visual para transformar o site em um aplicativo instalável.

📦 Funcionalidades
✔ Cadastro de Projetos: Formulário para registrar título, tecnologias, links e descrições.

✔ Listagem Dinâmica: Exibição em tempo real dos projetos cadastrados via API.

✔ Edição de Projetos: Função para carregar dados existentes de volta ao formulário para atualização.

✔ Remoção de Projetos: Exclusão definitiva de registros através da interface.

✔ Experiência Offline: Avisos ao usuário e carregamento de arquivos essenciais via cache quando não houver conexão.

✔ Instalabilidade: Manifesto configurado para permitir que o usuário adicione o app à sua tela inicial.

🧠 Estrutura do Projeto
A organização dos arquivos segue uma estrutura limpa para o desenvolvimento web:

Plaintext
frontend/
├── icons/
│   ├── ic_launcher.png    # Ícone do aplicativo (192x192)
│   └── playstore.png      # Ícone de alta resolução (512x512)
├── app.js                 # Lógica do CRUD, consumo de API e registro do Service Worker
├── index.html             # Estrutura principal da página
├── manifest.json          # Metadados do PWA (nome, cores e ícones)
├── service-worker.js      # Estratégias de cache e ciclo de vida do PWA
└── style.css              # Estilização visual e regras de responsividade
⚙️ Integração com a API
A interface consome dados de um backend hospedado externamente:

URL Base: https://gerenciador-de-projetos-59so.onrender.com/api/projects

As operações são realizadas através da Fetch API, utilizando os métodos GET, POST, PUT e DELETE para sincronizar as ações do usuário com o banco de dados.

👨‍💻 Autor
Maria Clara Moutinho

```Projeto desenvolvido para fins de gerenciamento e organização de portfólio acadêmico e profissional.
