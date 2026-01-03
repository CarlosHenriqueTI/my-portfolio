# 🎯 Guia Rápido de Uso - Novas Features

## 🚀 Como Usar as Novas Funcionalidades

### 1. Animações com Framer Motion

```typescript
import { motion } from 'framer-motion';

// Fade in básico
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>

// Slide in com delay
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Conteúdo
</motion.div>

// Hover e Tap effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clique aqui
</motion.button>

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 2. Componentes Shadcn/UI

```typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Button
<Button variant="default">Clique aqui</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Card
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>

// Skeleton
<Skeleton className="w-full h-20" />
```

### 3. Glassmorphism

```typescript
// Adicione as classes aos seus componentes
<div className="glass">
  Conteúdo com efeito glass
</div>

<div className="glass-light">
  Versão light do glass
</div>

<div className="glass-card">
  Card com glass effect
</div>
```

### 4. Micro-interações

```typescript
// Hover lift
<button className="hover-lift">
  Botão com elevação
</button>

// Ripple effect
<button className="ripple">
  Botão com ripple
</button>

// Hover glow
<div className="hover-glow">
  Elemento com brilho
</div>

// Button press
<button className="button-press">
  Botão com efeito de pressão
</button>
```

### 5. Scroll Progress Bar

Já está implementado globalmente na página principal. Não precisa fazer nada!

### 6. Acessibilidade

```typescript
// Skip Links (já implementado)
<a href="#main-content" className="skip-link">
  Pular para conteúdo
</a>

// ARIA labels
<button aria-label="Fechar menu">
  <X />
</button>

// Screen reader only
<span className="sr-only">
  Texto apenas para leitores de tela
</span>

// Focus visible (automático em todos os elementos)
```

### 7. Loading Skeletons

```typescript
import ProjectSkeleton from './components/ui/ProjectSkeleton';

// Use quando estiver carregando dados
{isLoading ? (
  <ProjectSkeleton />
) : (
  <ProjectCard data={project} />
)}
```

### 8. Seletor de Idioma

Já está implementado no Navbar! Para adicionar em outro lugar:

```typescript
import LanguageSelector from './components/ui/LanguageSelector';

<LanguageSelector />
```

### 9. Three.js - Esfera 3D

```typescript
import AnimatedSphere from './components/ui/AnimatedSphere';

// Adicione onde quiser um elemento 3D
<div className="relative w-full h-[400px]">
  <AnimatedSphere />
</div>
```

### 10. Lottie Animations

```typescript
import LottieAnimation from './components/ui/LottieAnimation';

// Use com arquivo JSON de animação
<LottieAnimation 
  animationPath="/animations/success.json"
  loop={true}
  autoplay={true}
  className="w-64 h-64"
/>
```

## 🎨 Classes CSS Úteis

### Animações Customizadas
```css
.animate-blob - Animação blob flutuante
.animate-float - Flutuação suave
.animate-slideInUp - Slide de baixo para cima
.animate-glow - Efeito de brilho pulsante
.animate-shimmer - Efeito shimmer
```

### Glassmorphism
```css
.glass - Efeito glass padrão
.glass-light - Versão clara
.glass-card - Card com glass
```

### Micro-interações
```css
.ripple - Efeito ripple ao clicar
.hover-lift - Elevação no hover
.hover-glow - Brilho no hover
.hover-scale - Escala no hover
.button-press - Efeito de pressão
```

### Acessibilidade
```css
.skip-link - Link de pular conteúdo
.sr-only - Screen reader only
*:focus-visible - Foco visível automático
```

## 📊 Vercel Analytics

As métricas são coletadas automaticamente! Acesse o dashboard do Vercel para ver:
- Page views
- Unique visitors
- Core Web Vitals
- Performance metrics

## 🌐 i18n - Mudança de Idioma

Para adicionar novos textos traduzidos:

1. Edite `/src/locales/pt/common.json`
2. Edite `/src/locales/en/common.json`
3. Use no componente:

```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations();

<h1>{t('hero.greeting')}</h1>
```

## 🎯 Dicas de Performance

1. **Use Skeleton enquanto carrega dados**
2. **Adicione priority nas imagens above the fold**
3. **Use motion.div com viewport={{ once: true }}** para evitar re-renders
4. **Lazy load componentes pesados** (Three.js, Lottie)
5. **Otimize imagens** com Next/Image

## 🔥 Combinações Poderosas

```typescript
// Card animado com glass effect
<motion.div
  className="glass-card hover-lift"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
>
  <Card>
    Conteúdo
  </Card>
</motion.div>

// Botão com todas as interações
<motion.button
  className="ripple button-press hover-glow"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Ação importante"
>
  Clique aqui
</motion.button>
```

## 🚀 Performance Tips

- ✅ Animações usam GPU acceleration
- ✅ Imagens otimizadas automaticamente
- ✅ Lazy loading em componentes pesados
- ✅ Tree shaking automático
- ✅ CSS purging com Tailwind

## 📱 Responsividade

Todas as features são responsivas! Use breakpoints do Tailwind:

```typescript
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Texto responsivo
</div>
```

---

**Dúvidas?** Consulte a documentação completa em `IMPROVEMENTS.md`
