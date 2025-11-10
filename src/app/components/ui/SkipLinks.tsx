'use client';

export default function SkipLinks() {
  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Pular para o conteúdo principal"
      >
        Pular para o conteúdo principal
      </a>
      <a 
        href="#navigation" 
        className="skip-link"
        style={{ left: '200px' }}
        aria-label="Pular para a navegação"
      >
        Pular para a navegação
      </a>
    </>
  );
}
