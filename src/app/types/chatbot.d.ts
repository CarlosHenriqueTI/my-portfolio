// my-portfolio/src/types/chatbot.d.ts
interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  typing?: boolean;
}