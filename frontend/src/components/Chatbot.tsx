import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  'Admission Process',
  'Fee Structure',
  'Programs Offered',
  'Contact Info',
];

const botResponses: Record<string, string> = {
  'admission process': 'Our admission process is simple! 1) Fill out the online application form 2) Submit required documents 3) Schedule an interview 4) Receive admission decision. Would you like to start your application?',
  'fee structure': 'Our fee structure varies by program. Play Group: 50,000 BDT/year, Nursery-KG: 60,000 BDT/year, Primary: 75,000 BDT/year. This includes tuition, books, and activities. Would you like more details?',
  'programs offered': 'We offer comprehensive programs: Play Group (2-3 years), Nursery (3-4 years), KG (4-5 years), Primary (Grade 1-5), and Junior School (Grade 6-8). Each program is designed to nurture young minds!',
  'contact info': 'You can reach us at: Phone: +880 1234-567890, Email: info@playpen.edu.bd, Address: 123 Education Road, Dhaka. Our office hours are 8 AM - 4 PM, Saturday to Thursday.',
  'default': 'Thank you for your question! I\'m here to help with admission inquiries, fee information, and general questions about Playpen School. How can I assist you today?',
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! 👋 Welcome to Playpen School. I\'m your virtual assistant. How can I help you today?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = botResponses['default'];
      
      for (const key of Object.keys(botResponses)) {
        if (lowerText.includes(key)) {
          response = botResponses[key];
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full hero-gradient shadow-xl flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border"
          >
            {/* Header */}
            <div className="hero-gradient p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Playpen Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot ? 'bg-primary/10' : 'bg-secondary/20'
                  }`}>
                    {message.isBot ? (
                      <Bot className="w-4 h-4 text-primary" />
                    ) : (
                      <User className="w-4 h-4 text-secondary" />
                    )}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.isBot 
                      ? 'bg-muted text-foreground rounded-tl-none' 
                      : 'bg-primary text-primary-foreground rounded-tr-none'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 border-t border-border">
              <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full whitespace-nowrap hover:bg-primary/20 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" variant="hero">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
