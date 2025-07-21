// my-portfolio/src/types/chatbot.d.ts
interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}