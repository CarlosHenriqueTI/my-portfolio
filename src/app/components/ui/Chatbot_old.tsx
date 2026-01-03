'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Loader2, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  typing?: boolean;
}

export default function Chatbot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: '1',
      role: 'model', 
      text: 'Olá! 👋 Sou o assistente virtual de Carlos Henrique, powered by AI. Como posso ajudá-lo hoje?',
      timestamp: new Date()
    },
    { 
      id: '2',
      role: 'model', 
      text: '💡 Posso ajudar com:\n• Habilidades técnicas e stack\n• Projetos e experiências\n• Formação e trajetória\n• Formas de contato',
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
    { text: "🚀 Quais tecnologias você domina?", icon: "💻" },
    { text: "📚 Conte sobre sua experiência", icon: "👨‍💼" },
    { text: "📱 Como posso entrar em contato?", icon: "📞" },
    { text: "🎨 Mostre-me seus projetos", icon: "🛠️" }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getIntelligentResponse = (message: string, context: ChatMessage[]): string | null => {
    const lowerMessage = message.toLowerCase();
    const hasAskedBefore = context.some(msg => msg.role === 'user');
    
    // Saudações
    if (lowerMessage.match(/\b(oi|olá|hey|hello|hi)\b/)) {
      return hasAskedBefore 
        ? '😊 Olá novamente! Em que mais posso ajudar?'
        : '👋 Olá! Prazer em conversar! Sou a IA assistente de Carlos Henrique. Como posso ajudá-lo a conhecer melhor seu trabalho e competências?';
    }
    
    // Sobre Carlos
    if (lowerMessage.match(/\b(sobre|quem|perfil|você|carlos|desenvolvedor)\b/)) {
      return '👨‍💻 Carlos Henrique é um Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis!\n\n🎯 **Especialidades:**\n• React.js & Next.js\n• TypeScript\n• UI/UX Design\n\n🎖️ Background único: 6 anos no Exército Brasileiro, trazendo disciplina e liderança para o mundo tech!\n\n🎓 Atualmente cursando Análise e Desenvolvimento de Sistemas na UniSenac.';
    }
    
    // Tecnologias e habilidades
    if (lowerMessage.match(/\b(tecnologia|stack|skill|habilidade|domina|sabe|conhece|linguagem|framework)\b/)) {
      return '💻 **Stack Tecnológico:**\n\n🔥 **Frontend:**\n• JavaScript & TypeScript\n• React.js & Next.js\n• HTML5 & CSS3\n• Tailwind CSS\n\n🛠️ **Ferramentas:**\n• Git & GitHub\n• APIs RESTful\n• Design Responsivo\n• Figma\n\n✨ **Soft Skills:**\n• Resolução criativa de problemas\n• Trabalho em equipe\n• Comunicação efetiva\n• Proatividade e autodidatismo';
    }
    
    // Projetos
    if (lowerMessage.match(/\b(projeto|portfólio|trabalho|desenvolveu|criou|fez)\b/)) {
      return '🎨 **Portfólio de Projetos:**\n\nCarlos desenvolveu diversos projetos usando tecnologias modernas:\n\n• ✅ Aplicações web com React/Next.js\n• ✅ Interfaces responsivas e acessíveis\n• ✅ Integração com APIs\n• ✅ Design systems e componentes reutilizáveis\n\n🔍 Navegue pela seção "Projetos" no portfólio para ver detalhes, código e demos ao vivo!';
    }
    
    // Contato
    if (lowerMessage.match(/\b(contato|falar|conversar|email|telefone|linkedin|whatsapp|github)\b/)) {
      return '📞 **Vamos conversar!**\n\nVocê pode entrar em contato com Carlos de várias formas:\n\n• 💚 WhatsApp (clique no botão abaixo)\n• 📧 Formulário de contato no site\n• 💼 LinkedIn\n• 🐙 GitHub\n\nEstou à disposição para responder dúvidas, discutir projetos ou oportunidades de colaboração!';
    }
    
    // Experiência
    if (lowerMessage.match(/\b(experiência|trabalhou|carreira|exército|militar|trajetória)\b/)) {
      return '🎖️ **Experiência Profissional:**\n\n**Exército Brasileiro** (6 anos)\n• Liderança de equipes\n• Gestão sob pressão\n• Disciplina e organização\n• Trabalho em ambientes desafiadores\n\n🚀 **Transição para Tech:**\n• +2 anos estudando desenvolvimento web\n• Projetos práticos e aprendizado contínuo\n• Combinando disciplina militar com criatividade tech\n\n💡 Essa combinação única traz uma perspectiva diferenciada para resolver problemas e criar soluções!';
    }
    
    // Formação
    if (lowerMessage.match(/\b(estuda|faculdade|curso|formação|educação|universidade)\b/)) {
      return '🎓 **Formação Acadêmica:**\n\n**Análise e Desenvolvimento de Sistemas**\nUniSenac - Em andamento\n\n📚 **Aprendizado Contínuo:**\n• Cursos online (Udemy, YouTube, Documentação)\n• Projetos práticos\n• Comunidades tech\n• Estudos autoguiados\n\n"A melhor forma de aprender é fazendo!"';
    }
    
    // Agradecimento
    if (lowerMessage.match(/\b(obrigad|valeu|thanks|thank)\b/)) {
      return '😊 Por nada! Fico feliz em ajudar! \n\nSe tiver mais alguma dúvida sobre Carlos Henrique ou quiser conversar diretamente, use o botão do WhatsApp abaixo! 💚';
    }
    
    // Despedida
    if (lowerMessage.match(/\b(tchau|adeus|até|bye|falou)\b/)) {
      return '👋 Até logo! Foi um prazer conversar com você!\n\nNão esqueça de explorar o portfólio e entrar em contato se precisar! 🚀';
    }
    
    return null;
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (textToSend === '') return;

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

    const predefinedResponse = getIntelligentResponse(userMessage.text, messages);
    if (predefinedResponse) {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { 
          id: Date.now().toString(), 
          role: 'model', 
          text: predefinedResponse,
          timestamp: new Date()
        }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // Simula a chamada à API Gemini (comentada para evitar erros de API)
      /*
      const chatHistory = messages.map(msg => ({ role: msg.role, parts: [{ text: msg.text }] }));
      chatHistory.push({ role: "user", parts: [{ text: userMessage.text }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Deixe como vazio, a plataforma irá injetar a chave
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const modelResponseText = result.candidates[0].content.parts[0].text;
        setMessages((prevMessages) => [...prevMessages, { 
          id: Date.now().toString(), 
          role: 'model', 
          text: modelResponseText,
          timestamp: new Date()
        }]);
      } else {
        throw new Error('API response format error');
      }
      */
      
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { 
          id: Date.now().toString(),
          role: 'model', 
          text: 'Desculpe, não tenho uma resposta específica para sua pergunta no momento. Mas posso ajudá-lo com informações sobre as habilidades, projetos, experiência ou formas de contato de Carlos Henrique. Ou clique no botão do WhatsApp para falar diretamente!',
          timestamp: new Date()
        }]);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      setMessages((prevMessages) => [...prevMessages, { 
        id: Date.now().toString(),
        role: 'model', 
        text: 'Desculpe, ocorreu um erro. Mas posso ajudá-lo com informações sobre Carlos Henrique! Tente perguntar sobre suas habilidades, projetos ou experiência. Ou use o botão do WhatsApp para contato direto.',
        timestamp: new Date()
      }]);
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5553981527678'; // Seu número de telefone com código do país (55) e DDD (53)
    const message = encodeURIComponent('Olá, gostaria de conversar sobre o seu portfólio.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/25 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 z-50 transform hover:scale-110"
        aria-label={isOpen ? "Fechar Chatbot" : "Abrir Chatbot"}
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[500px] bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl flex flex-col z-40 border border-gray-700/50 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur p-4 rounded-t-xl flex justify-between items-center border-b border-gray-700/50">
            <h3 className="text-lg font-semibold text-white">Assistente Virtual</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-gray-700/50"
              aria-label="Fechar Chatbot"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar min-h-[200px]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                      : 'bg-gray-800/80 backdrop-blur text-gray-100 rounded-bl-none border border-gray-700/50'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg shadow-md bg-gray-800/80 backdrop-blur text-gray-100 rounded-bl-none border border-gray-700/50">
                  <Loader2 size={20} className="animate-spin text-blue-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Para scroll automático */}
          </div>
          <div className="p-4 border-t border-gray-700/50 flex items-center bg-gray-800/30 backdrop-blur">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isLoading) {
                  handleSendMessage();
                }
              }}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-gray-800/50 border border-gray-600/50 rounded-full py-2 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage()}
              className="ml-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
              aria-label="Enviar Mensagem"
              disabled={isLoading}
            >
              <Send size={20} />
            </button>
          </div>
          
          {showSuggestions && messages.length <= 2 && (
            <div className="p-3 border-t border-gray-700/50 bg-gray-800/20 backdrop-blur">
              <p className="text-xs text-gray-400 mb-2">Sugestões:</p>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question.text)}
                    className="text-left text-xs bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white px-2 py-1 rounded transition-all duration-300"
                    disabled={isLoading}
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="p-3 border-t border-gray-700/50 bg-gray-800/30 backdrop-blur rounded-b-xl">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25"
            >
              <PhoneCall size={18} className="mr-2" /> Falar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}