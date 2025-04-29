# Social Network 📱
<br>

## Video da aplicação | Application video:
<img width="100%" src="https://github.com/pedropleite/Social_Network/blob/main/READMEGif.gif">
<br>

# PT-BR

## 🔍 Sobre o Projeto
<p>Link para a aplicação: https://social-networkp.netlify.app/</p>


<p>CRUD construido em ReactJS usando o Firebase como banco de dados para facilitar a autenticação e armazenamento de dados, além do auxílio de ferramentas como o Context API para uma melhor administração do estado e propriedades, Styled-Components para uma estilização mais prática usando JavaScript, Axios para requisições HTTP e React-Router para criação de rotas.</p>
<p>A aplicação consiste em um CRUD(criação, consulta, atualização e destruição de dados) simulando uma rede social. Nela é possível a criação de usuários, a criação de posts inteiramente personalizável, possui uma Home que mostra os posts criados em ordem de criação (similar ao que o Instagram faz), há também um dashboard com os seus posts para te permitir editá-los ou exclui-los conforme queira, há dois modos de brilho, o dark e o light, facilitando assim para quem possui alguma sensibilidade à luz e também uma barra de pesquisa para facilitar a experiência do usuário para caso ela queira ver um post em específico.</p>
<p>Essa aplicação foi pensada para realmente se parecer com uma rede social, permitindo os usuários criarem posts sobre o seu dia a dia e interagirem com os seus colegas.</p>

<br/>

## ✨ Funcionalidades Principais

### 🔐 Autenticação:
- **Sistema completo de login e registro**  
   → Integração completa com Firebase Auth incluindo registro e login.
- **Mensagens de erro claras e intuitivas**  
   → Feedback visual para erros comuns como email inválido.
- **Persistência de sessão**  
   → Os usuários permanecem logados mesmo após fechar o navegador.

### 📝 Posts:
- **Criação de posts com texto e imagens**  
   → Interface simples para criar posts ricos com preview em tempo real.
- **Dashboard pessoal para gerenciamento de posts**  
   → Acesso rápido a todos seus posts com opções de edição e exclusão.
- **Feed organizado cronologicamente**  
   → Posts exibidos do mais recente para o mais antigo, com carregamento progressivo.
- **Barra de pesquisa integrada**  
   → Encontre posts específicos por palavras-chave ou autor.

### 🎨 Interface:
- **Tema dark/light com transição animada**  
   → Troca suave entre modos de cor.
- **Layout responsivo**  
   → Experiência otimizada para mobile, tablet e desktop.

<br/>

## 🛠 Organização do desenvolvimento

<details>
<summary><strong>✅ Base do Projeto (Finalizada)</strong></summary>

- [x] **Sistema de autenticação**  
  → Firebase Auth com login/registro  
  → Validação em tempo real de formulários  
  → Persistência de sessão via localStorage

- [x] **Gestão de posts**  
  → CRUD completo com Firestore  
  → Upload de imagens para posts  
  → Feed ordenado cronologicamente

- [x] **Temas Dark/Light**  
  → Toggle com animação via Framer Motion  
  → Persistência das preferências  
  → Estilos dinâmicos com Styled Components
</details>

<details>
<summary><strong>🔧 Refatoração - branch release/v2.0.0 (Em desenvolvimento)</strong></summary>
 
Objetivo: melhorias de estrutura e performance  

- [ ] **Migração para SCSS e configuração do Webpack** (`release/v2.1.0`)
  → Configuração do pré-processador  
  → Remoção completa de CSS-in-JS  
  → Adaptação da estrutura de estilos  

- [ ] **Padronização do SCSS** (`release/v2.2.0`)
  → Criação de componentes base reutilizáveis  
  → Estilos utilitários compartilhados  

- [ ] **Padronização do código** (`release/v2.3.0`)  
  → ESLint + Prettier configurados

- [ ] **Otimização de Performance** (`release/v2.4.0`)  
  → Análise com DevTools
</details>

<br/>

## 📅 Roadmap futuro

<details>
<summary><strong>✨ Interações sociais</strong></summary>

Objetivo: Implementar mecanismos de engajamento entre usuários para tornar a rede social mais interativa e dinâmica.

- [ ] **Sistema de likes**  
   → Botão de like com persistência no Firebase e animação de feedback

- [ ] **Comentários em posts**  
   → Threads de comentários com nested replies e markdown básico
</details>

<details>
<summary><strong>🖼 Perfil do usuário</strong></summary>

Objetivo: Oferecer maior personalização e controle aos usuários sobre sua identidade na plataforma.

- [ ] **Upload de foto de perfil**  
   → Integração com Firebase Storage para upload e crop de imagens

- [ ] **Página de perfil personalizável**  
   → Bio, links sociais e highlights de posts marcados

</details>

<details>
<summary><strong>⚙ Melhorias técnicas</strong></summary>

Objetivo: Aprimorar a base de código para garantir escalabilidade, manutenibilidade e performance.

- [ ] **Migração para Redux Toolkit**  
   → Substituição gradual do Context API para gestão de estado global

- [ ] **Testes unitários**  
   → Cobertura com Jest + Testing Library para componentes críticos
</details>

<br/>

## 💻 Tecnologias Utilizadas

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router">
</div>

<br/>
