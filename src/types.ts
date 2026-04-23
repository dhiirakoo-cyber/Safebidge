/**
 * Bank interface for the application
 */
export interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
}

/**
 * Message interface for the AI chat
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
