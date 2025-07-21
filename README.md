# 💼 Portfólio Pessoal - Carlos Henrique de Oliveira

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)

**Portfólio profissional moderno e responsivo desenvolvido com as mais recentes tecnologias frontend**

[🌐 Ver Demo](https://github.com/CarlosHenriqueTI/my-portfolio) • [📧 Contato](mailto:carloshenriqueti09@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/carlos-henriqueti/)

</div>

---

## 🎯 **Sobre o Projeto**

Este é meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência como **Desenvolvedor Frontend**. O site conta com design moderno, animações suaves e funcionalidades avançadas para proporcionar a melhor experiência ao usuário.

### ✨ **Principais Características**

- 🎨 **Design Profissional** com gradientes azul-roxo consistentes
- 🌙 **Modo Escuro/Claro** com transições suaves
- 📱 **100% Responsivo** para todos os dispositivos
- ⚡ **Performance Otimizada** com Next.js 15 e Turbopack
- 📧 **Sistema de Contato** funcional com envio de emails
- 🤖 **Chatbot Inteligente** para interação com visitantes
- 🎵 **Lofi Radio Player** integrado para experiência única
- 🎭 **Animações Avançadas** e efeitos visuais
- 🔍 **SEO Otimizado** para melhor indexação

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**
- **Next.js 15.4.1** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e customizáveis
- **React Hot Toast** - Notificações elegantes

### **Backend & APIs**
- **Next.js API Routes** - Endpoints serverless
- **Nodemailer** - Envio de emails via Gmail
- **Zod** - Validação de schemas TypeScript

### **Ferramentas & Deploy**
- **ESLint** - Linting e padronização de código
- **PostCSS** - Processamento de CSS
- **Vercel** - Deploy e hospedagem
- **Git** - Controle de versão

---

## 🚀 **Funcionalidades**

### 📄 **Seções Principais**
- **Hero Section** - Apresentação profissional com foto e links sociais
- **Sobre Mim** - História, formação e objetivos profissionais
- **Habilidades** - Stack tecnológico com níveis de proficiência
- **Jornada** - Timeline da trajetória militar e transição para tech
- **Projetos** - Showcase de projetos com carrossel de imagens
- **Contato** - Formulário funcional com validação

### 🎯 **Recursos Avançados**
- **Sistema de Temas** - Alternância entre modo claro e escuro
- **Chatbot Interativo** - Assistente virtual para visitantes
- **Player de Música** - Lofi radio para ambiente relaxante
- **Formulário de Contato** - Envio direto para o email
- **Carrossel de Imagens** - Visualização de projetos
- **Animações CSS** - Transições e efeitos suaves

---

## 🔧 **Instalação e Uso**

### **Pré-requisitos**
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### **Clonando o Repositório**
```bash
git clone https://github.com/CarlosHenriqueTI/my-portfolio.git
cd my-portfolio
```

### **Instalando Dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### **Configurando Variáveis de Ambiente**
Crie um arquivo `.env.local` na raiz do projeto:
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-gmail
```

### **Executando em Desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### **Build para Produção**
```bash
npm run build
npm start
```

---

## 📧 **Configuração do Email**

Para o formulário de contato funcionar, configure:

1. **Gmail App Password**: 
   - Acesse [Configurações de Segurança do Google](https://myaccount.google.com/security)
   - Ative a verificação em duas etapas
   - Gere uma senha de aplicativo
   - Use essa senha na variável `EMAIL_PASS`

2. **Variáveis de Ambiente**:
   ```env
   EMAIL_USER=carloshenriqueti09@gmail.com
   EMAIL_PASS=sua-senha-de-app-16-caracteres
   ```

---

## 🎨 **Estrutura do Projeto**

```
src/
├── app/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Navbar
│   │   ├── sections/       # Hero, About, Skills, etc.
│   │   └── ui/            # Chatbot, LofiRadio
│   ├── context/           # ThemeContext
│   ├── lib/               # Utilitários e dados
│   └── api/               # Rotas de API
├── public/                # Imagens e assets
└── prisma/               # Schema do banco (futuro)
```

---

## 🌐 **Deploy na Vercel**

### **Automático via GitHub**
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente no dashboard
3. Deploy automático a cada push

### **Via CLI**
```bash
npm install -g vercel
vercel
```

### **Configurações Necessárias**
- Adicione `EMAIL_USER` e `EMAIL_PASS` nas variáveis de ambiente da Vercel
- Configure o domínio personalizado (opcional)

---

## 📱 **Responsividade**

O portfólio é totalmente responsivo e otimizado para:

- 📱 **Mobile** (320px+)
- 📟 **Tablet** (768px+) 
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

---

## 🎯 **Performance**

- ⚡ **Core Web Vitals** otimizados
- 🖼️ **Imagens otimizadas** com Next.js Image
- 🚀 **Lazy Loading** automático
- 📦 **Bundle Size** minimizado
- 🎨 **CSS otimizado** com Tailwind

---

## 🤝 **Contribuições**

Embora este seja um projeto pessoal, sugestões e melhorias são bem-vindas:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 **Sobre o Desenvolvedor**

**Carlos Henrique de Oliveira**
- 🎯 Desenvolvedor Frontend Júnior
- 🎓 Cursando Análise e Desenvolvimento de Sistemas - UniSenac
- 🪖 Ex-militar em transição para tecnologia
- 💼 Especializado em React.js, TypeScript e desenvolvimento frontend moderno

### **Conecte-se comigo:**
- 📧 **Email**: [carloshenriqueti09@gmail.com](mailto:carloshenriqueti09@gmail.com)
- 💼 **LinkedIn**: [Carlos Henrique](https://www.linkedin.com/in/carlos-henriqueti/)
- 🐙 **GitHub**: [CarlosHenriqueTI](https://github.com/CarlosHenriqueTI)

---

<div align="center">

**⭐ Se gostou do projeto, deixe uma estrela!**

**Desenvolvido com 💙 por Carlos Henrique**

</div>
