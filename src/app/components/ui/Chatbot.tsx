'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Loader2, PhoneCall } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou seu assistente virtual. Como posso ajudá-lo a conhecer melhor o portfólio de Carlos Henrique?' },
    { role: 'model', text: 'Você pode perguntar sobre:\n• Suas habilidades e tecnologias\n• Projetos desenvolvidos\n• Experiência profissional\n• Formas de contato' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Quais tecnologias Carlos domina?",
    "Conte sobre a experiência dele",
    "Como posso entrar em contato?",
    "Quais projetos ele desenvolveu?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getPredefineResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('sobre') || lowerMessage.includes('quem') || lowerMessage.includes('carlos')) {
      return 'Carlos Henrique é um desenvolvedor Frontend especializado em React.js e TypeScript. Com experiência militar e transição para tecnologia, ele combina disciplina e inovação em seus projetos. Atualmente estuda Análise e Desenvolvimento de Sistemas na UniSenac.';
    }
    
    if (lowerMessage.includes('tecnologia') || lowerMessage.includes('skill') || lowerMessage.includes('habilidade')) {
      return 'Carlos domina JavaScript, TypeScript, React.js, HTML5, CSS3, Git e tem experiência com consumo de APIs e design responsivo. Suas principais soft skills incluem resolução de problemas, trabalho em equipe e proatividade.';
    }
    
    if (lowerMessage.includes('projeto') || lowerMessage.includes('portfólio')) {
      return 'O portfólio inclui diversos projetos desenvolvidos com React.js e tecnologias modernas. Cada projeto demonstra diferentes aspectos de suas habilidades técnicas e criatividade. Você pode navegar pela seção "Projetos" para ver os detalhes.';
    }
    
    if (lowerMessage.includes('contato') || lowerMessage.includes('falar') || lowerMessage.includes('conversar')) {
      return 'Você pode entrar em contato com Carlos através do formulário na seção "Contato", pelo LinkedIn, GitHub ou clicando no botão do WhatsApp aqui no chat para uma conversa direta!';
    }
    
    if (lowerMessage.includes('experiência') || lowerMessage.includes('trabalho') || lowerMessage.includes('carreira')) {
      return 'Carlos tem 6 anos de experiência no Exército Brasileiro, onde desenvolveu liderança e disciplina. Atualmente está em transição para a área de tecnologia, com mais de 2 anos de estudo e prática em desenvolvimento web.';
    }
    
    if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('hello')) {
      return 'Olá! Fico feliz em conversar com você! Como posso ajudá-lo a conhecer melhor o trabalho e as competências de Carlos Henrique?';
    }
    
    return null;
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (textToSend === '') return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowSuggestions(false);

    const predefinedResponse = getPredefineResponse(userMessage.text);
    if (predefinedResponse) {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { role: 'model', text: predefinedResponse }]);
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
        setMessages((prevMessages) => [...prevMessages, { role: 'model', text: modelResponseText }]);
      } else {
        throw new Error('API response format error');
      }
      */
      
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { 
          role: 'model', 
          text: 'Desculpe, não tenho uma resposta específica para sua pergunta no momento. Mas posso ajudá-lo com informações sobre as habilidades, projetos, experiência ou formas de contato de Carlos Henrique. Ou clique no botão do WhatsApp para falar diretamente!' 
        }]);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      setMessages((prevMessages) => [...prevMessages, { 
        role: 'model', 
        text: 'Desculpe, ocorreu um erro. Mas posso ajudá-lo com informações sobre Carlos Henrique! Tente perguntar sobre suas habilidades, projetos ou experiência. Ou use o botão do WhatsApp para contato direto.' 
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
                    onClick={() => handleSendMessage(question)}
                    className="text-left text-xs bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white px-2 py-1 rounded transition-all duration-300"
                    disabled={isLoading}
                  >
                    {question}
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