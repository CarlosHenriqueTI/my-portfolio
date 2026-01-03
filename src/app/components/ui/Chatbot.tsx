'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Loader2, PhoneCall } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: '1',
      role: 'model', 
      text: 'Olá! Sou o assistente virtual. Como posso ajudar?',
      timestamp: new Date()
    },
    { 
      id: '2',
      role: 'model', 
      text: 'Posso informar sobre:\n• Habilidades e tecnologias\n• Projetos\n• Experiência\n• Contato',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    { text: "Quais tecnologias você domina?", icon: "" },
    { text: "Conte sobre sua experiência", icon: "" },
    { text: "Como posso entrar em contato?", icon: "" },
    { text: "Mostre-me seus projetos", icon: "" }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getIntelligentResponse = (message: string, context: ChatMessage[]): string | null => {
    const lowerMessage = message.toLowerCase();
    const hasAskedBefore = context.some(msg => msg.role === 'user');
    
    // Saudações
    if (lowerMessage.match(/\b(oi|olá|hey|hello|hi)\b/)) {
      return hasAskedBefore 
        ? 'Olá novamente! Em que mais posso ajudar?'
        : 'Olá! Sou o assistente de Carlos Henrique. Como posso ajudar?';
    }
    
    // Sobre Carlos
    if (lowerMessage.match(/\b(sobre|quem|perfil|você|carlos|desenvolvedor)\b/)) {
      return 'Carlos Henrique é Desenvolvedor Frontend especializado em React.js, Next.js e TypeScript.\n\nEspecialidades:\n• React.js & Next.js\n• TypeScript\n• UI/UX Design\n\n6 anos no Exército Brasileiro, trazendo disciplina e liderança para tech.\n\nCursando Análise e Desenvolvimento de Sistemas na UniSenac.';
    }
    
    // Tecnologias e habilidades
    if (lowerMessage.match(/\b(tecnologia|stack|skill|habilidade|domina|sabe|conhece|linguagem|framework)\b/)) {
      return 'Stack Tecnológico:\n\nFrontend:\n• JavaScript & TypeScript\n• React.js & Next.js\n• HTML5 & CSS3\n• Tailwind CSS\n\nFerramentas:\n• Git & GitHub\n• APIs RESTful\n• Design Responsivo\n• Figma';
    }
    
    // Projetos
    if (lowerMessage.match(/\b(projeto|portfólio|trabalho|desenvolveu|criou|fez)\b/)) {
      return 'Portfólio de Projetos:\n\n• Aplicações web com React/Next.js\n• Interfaces responsivas\n• Integração com APIs\n• Design systems\n\nVisite a seção "Projetos" para ver detalhes.';
    }
    
    // Contato
    if (lowerMessage.match(/\b(contato|falar|conversar|email|telefone|linkedin|whatsapp|github)\b/)) {
      return 'Formas de contato:\n\n• WhatsApp (botão abaixo)\n• Formulário no site\n• LinkedIn\n• GitHub';
    }
    
    // Experiência
    if (lowerMessage.match(/\b(experiência|trabalhou|carreira|exército|militar|trajetória)\b/)) {
      return 'Experiência Profissional:\n\nExército Brasileiro (6 anos)\n• Liderança de equipes\n• Gestão sob pressão\n• Disciplina e organização\n\nTransição para Tech:\n• +2 anos estudando desenvolvimento web\n• Projetos práticos';
    }
    
    // Formação
    if (lowerMessage.match(/\b(estuda|faculdade|curso|formação|educação|universidade)\b/)) {
      return 'Formação Acadêmica:\n\nAnálise e Desenvolvimento de Sistemas\nUniSenac - Em andamento\n\nAprendizado contínuo através de cursos online, projetos práticos e comunidades tech.';
    }
    
    // Agradecimento
    if (lowerMessage.match(/\b(obrigad|valeu|thanks|thank)\b/)) {
      return 'Por nada! Se tiver mais dúvidas, use o botão do WhatsApp.';
    }
    
    // Despedida
    if (lowerMessage.match(/\b(tchau|adeus|até|bye|falou)\b/)) {
      return 'Até logo! Explore o portfólio e entre em contato se precisar.';
    }
    
    return null;
  };

  const simulateTyping = async (): Promise<void> => {
    return new Promise((resolve) => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, 600);
    });
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (textToSend === '' || isLoading) return;

    const userMessage: ChatMessage = { 
      id: Date.now().toString(),
      role: 'user', 
      text: textToSend,
      timestamp: new Date()
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowSuggestions(false);

    await simulateTyping();

    const intelligentResponse = getIntelligentResponse(userMessage.text, messages);
    
    if (intelligentResponse) {
      const modelMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: intelligentResponse,
        timestamp: new Date()
      };
      setMessages((prevMessages) => [...prevMessages, modelMessage]);
      setIsLoading(false);
      return;
    }

    // Resposta fallback com sugestões contextuais
    const fallbackMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: 'Desculpe, não entendi. Posso ajudar com:\n\n• Tecnologias\n• Projetos\n• Experiência\n• Contato',
      timestamp: new Date()
    };
    
    setMessages((prevMessages) => [...prevMessages, fallbackMessage]);
    setIsLoading(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5553981527678';
    const message = encodeURIComponent('Olá, gostaria de conversar sobre o seu portfólio.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-3.5 rounded-full shadow-lg transition-all duration-200 z-50 ${
          theme === 'dark'
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}
        aria-label={isOpen ? "Fechar Chatbot" : "Abrir Chatbot"}
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <Bot size={22} />
        )}
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] max-h-[600px] rounded-lg shadow-xl flex flex-col z-40 ${
          theme === 'dark'
            ? 'bg-gray-900 border border-gray-800'
            : 'bg-white border border-gray-200'
        }`}>
          {/* Header */}
          <div className={`p-4 rounded-t-lg flex justify-between items-center border-b ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gray-700' 
                  : 'bg-gray-200'
              }`}>
                <Bot size={16} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} />
              </div>
              <div>
                <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Assistente
                </h3>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded transition-colors duration-200 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Fechar Chatbot"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg shadow-sm whitespace-pre-wrap text-sm ${
                    msg.role === 'user'
                      ? theme === 'dark'
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-900 text-white'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-100 border border-gray-700'
                        : 'bg-gray-100 text-gray-900 border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {(isLoading || isTyping) && (
              <div className="flex justify-start">
                <div className={`max-w-[85%] p-3 rounded-lg shadow-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-gray-100 border border-gray-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <Loader2 size={14} className={`animate-spin ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Digitando...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {showSuggestions && messages.length <= 2 && (
            <div className={`p-3 border-t ${
              theme === 'dark' 
                ? 'border-gray-800 bg-gray-900' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                Sugestões:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question.text)}
                    className={`text-left text-xs px-2.5 py-1.5 rounded transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    disabled={isLoading}
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className={`p-3 border-t flex items-center gap-2 ${
            theme === 'dark' 
              ? 'border-gray-800 bg-gray-900' 
              : 'border-gray-200 bg-gray-50'
          }`}>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isLoading) {
                  handleSendMessage();
                }
              }}
              placeholder="Digite sua mensagem..."
              className={`flex-1 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-gray-600'
                  : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-gray-400'
              }`}
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage()}
              className={`p-2 rounded-lg transition-all duration-200 disabled:opacity-50 ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-900 hover:bg-gray-800'
              } text-white`}
              aria-label="Enviar Mensagem"
              disabled={isLoading || !inputMessage.trim()}
            >
              <Send size={16} />
            </button>
          </div>

          {/* WhatsApp Button */}
          <div className={`p-3 border-t rounded-b-lg ${
            theme === 'dark' 
              ? 'border-gray-800 bg-gray-900' 
              : 'border-gray-200 bg-gray-50'
          }`}>
            <button
              onClick={handleWhatsAppClick}
              className={`w-full font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-600 hover:bg-green-700'
              } text-white text-sm`}
            >
              <PhoneCall size={16} className="mr-2" />
              WhatsApp
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${theme === 'dark' ? '#4b5563' : '#d1d5db'};
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${theme === 'dark' ? '#6b7280' : '#9ca3af'};
        }
      `}</style>
    </>
  );
}
