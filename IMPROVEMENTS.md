# 🚀 Portfolio - Carlos Henrique

Portfolio pessoal moderno desenvolvido com Next.js 15, React 19, TypeScript e Tailwind CSS 4.

## ✨ Melhorias Implementadas

### 🎯 Alta Prioridade (Concluídas)

#### 1. **Framer Motion** - Animações Modernas
- ✅ Animações suaves e performáticas em todos os componentes
- ✅ Scroll animations no HeroSection e Projects
- ✅ Hover states com scale e rotate
- ✅ Stagger animations para listas de projetos
- ✅ Micro-interações em botões e links sociais

**Uso:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo animado
</motion.div>
```

#### 2. **Shadcn/UI** - Sistema de Design
- ✅ Componentes acessíveis e consistentes
- ✅ Button, Card e Skeleton components
- ✅ Design system baseado em Radix UI
- ✅ Totalmente customizável com Tailwind

**Componentes disponíveis:**
- `Button` - Botões com variantes
- `Card` - Cards com elevação
- `Skeleton` - Loading states

#### 3. **Next.js Image** - Otimização
- ✅ Lazy loading automático
- ✅ Otimização de tamanho
- ✅ WebP automático
- ✅ Blur-up effect
- ✅ Já implementado em ProfileImage e ImageCarousel

#### 4. **Vercel Analytics** - Monitoramento
- ✅ @vercel/analytics para métricas
- ✅ @vercel/speed-insights para performance
- ✅ Core Web Vitals tracking
- ✅ Real-time analytics

**Configuração:**
```typescript
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

<Analytics />
<SpeedInsights />
```

#### 5. **Acessibilidade (A11Y)**
- ✅ Skip links para navegação por teclado
- ✅ ARIA labels em todos os elementos interativos
- ✅ Focus visible states
- ✅ Screen reader support
- ✅ Semântica HTML correta

**Features:**
- Skip to main content
- Skip to navigation
- Keyboard navigation completa
- Focus indicators visíveis
- ARIA roles e labels

### 🎨 Média Prioridade (Concluídas)

#### 6. **Glassmorphism** - Efeitos Visuais
- ✅ Background blur effects
- ✅ Transparência com backdrop-filter
- ✅ Classes CSS reutilizáveis
- ✅ Suporte dark/light mode

**Classes disponíveis:**
```css
.glass - Efeito glass padrão
.glass-light - Versão light mode
.glass-card - Cards com glass effect
```

#### 7. **Scroll Progress Bar**
- ✅ Barra de progresso animada
- ✅ Gradiente colorido (blue → purple → pink)
- ✅ Smooth scrolling
- ✅ Fixed no topo da página

#### 8. **Micro-interações**
- ✅ Ripple effect em botões
- ✅ Hover lift effect
- ✅ Hover glow effect
- ✅ Button press effect
- ✅ Scale animations

**Classes disponíveis:**
```css
.ripple - Efeito de onda ao clicar
.hover-lift - Elevação no hover
.hover-glow - Brilho no hover
.hover-scale - Escala no hover
.button-press - Efeito de pressão
```

#### 9. **Loading Skeletons**
- ✅ Skeleton screens para projetos
- ✅ Componente ProjectSkeleton
- ✅ Feedback visual durante carregamento
- ✅ Shimmer effect

### 🌟 Baixa Prioridade (Implementadas)

#### 10. **i18n** - Internacionalização
- ✅ Suporte para Português e Inglês
- ✅ Componente LanguageSelector
- ✅ Arquivos de tradução (PT/EN)
- ✅ Switch de idioma no Navbar

**Idiomas suportados:**
- 🇧🇷 Português (padrão)
- 🇺🇸 English

**Arquivos:**
- `/src/locales/pt/common.json`
- `/src/locales/en/common.json`

#### 11. **Three.js** - Elementos 3D
- ✅ React Three Fiber instalado
- ✅ Componente AnimatedSphere
- ✅ Esfera 3D animada com distorção
- ✅ Auto-rotate e interação

**Uso:**
```typescript
import AnimatedSphere from './components/ui/AnimatedSphere';

<AnimatedSphere />
```

#### 12. **Lottie Animations**
- ✅ lottie-react instalado
- ✅ Componente LottieAnimation
- ✅ Suporte para animações JSON
- ✅ Loop e autoplay configuráveis

**Uso:**
```typescript
<LottieAnimation 
  animationPath="/animations/your-animation.json"
  loop={true}
  autoplay={true}
/>
```

## 📦 Pacotes Instalados

```json
{
  "dependencies": {
    "framer-motion": "^latest",
    "@vercel/analytics": "^latest",
    "@vercel/speed-insights": "^latest",
    "next-intl": "^latest",
    "lottie-react": "^latest",
    "three": "^latest",
    "@react-three/fiber": "^latest",
    "@react-three/drei": "^latest"
  }
}
```

## 🎨 CSS Utilities

### Acessibilidade
- `.skip-link` - Links para pular conteúdo
- `.sr-only` - Screen reader only
- `*:focus-visible` - Indicadores de foco

### Glassmorphism
- `.glass` - Efeito glass básico
- `.glass-light` - Versão light
- `.glass-card` - Cards com glass

### Micro-interações
- `.ripple` - Efeito ripple
- `.hover-lift` - Elevação hover
- `.hover-glow` - Brilho hover
- `.hover-scale` - Escala hover
- `.button-press` - Pressão ao clicar

## 🚀 Como Usar

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Start Production
```bash
npm run start
```

## 📱 Features

- ✅ Totalmente responsivo
- ✅ Dark/Light mode
- ✅ Animações suaves
- ✅ Acessível (WCAG 2.1)
- ✅ SEO otimizado
- ✅ Performance (Core Web Vitals)
- ✅ Multilíngue (PT/EN)
- ✅ Elementos 3D
- ✅ Loading states
- ✅ Glassmorphism
- ✅ Micro-interações

## 🎯 Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🔧 Tecnologias

- **Framework:** Next.js 15
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **3D:** Three.js + React Three Fiber
- **Components:** Shadcn/UI + Radix UI
- **i18n:** next-intl
- **Analytics:** Vercel Analytics
- **Type Safety:** TypeScript

## 📄 Licença

MIT © Carlos Henrique

## 👤 Autor

**Carlos Henrique**
- LinkedIn: [@carlos-henriqueti](https://linkedin.com/in/carlos-henriqueti)
- GitHub: [@CarlosHenriqueTI](https://github.com/CarlosHenriqueTI)
- Email: carloshenriqueti09@gmail.com

---

**Feito com ❤️ e Next.js**
