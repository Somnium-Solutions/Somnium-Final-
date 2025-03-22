function ChatBot() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
        { 
            role: 'assistant', 
            content: "Hello! 👋 I'm your Somnium AI assistant. How can I help you today with our IT solutions, web development, or AI services?" 
        }
    ]);
    const [inputMessage, setInputMessage] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);
    const messagesEndRef = React.useRef(null);
    const chatContainerRef = React.useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const generateSystemPrompt = (messageHistory) => {
        return `You are an expert AI assistant for Somnium IT Solutions, a leading IT company. Your name is Sam.

Key Information to Remember:
1. Services We Offer:
   - AI-Powered Task Management and Automation
   - Web Development (MERN Stack)
   - Cloud Solutions and Infrastructure
   - CRM Systems Implementation
   - Custom Dashboard Development
   - Prompt Engineering & AI Integration

2. Company Values:
   - Innovation and cutting-edge technology
   - Client-focused solutions
   - Quality and reliability
   - Transparent communication

3. Communication Style:
   - Be professional yet friendly and approachable
   - Use natural, conversational language
   - Provide specific, actionable information
   - Show empathy and understanding
   - Use appropriate emojis occasionally to seem more human-like
   - Keep responses concise but informative

4. When Asked About:
   - Pricing: Suggest scheduling a consultation for detailed quotes
   - Technical Details: Provide high-level explanations with option to discuss specifics
   - Timeline: Mention typical project timeframes but emphasize each project is unique
   - Support: Highlight our 24/7 support availability

Current conversation history:
${JSON.stringify(messageHistory)}

Remember to:
- Address specific questions directly
- Offer relevant examples when appropriate
- Provide next steps or call-to-actions
- Stay within our service scope
- Be helpful and solution-oriented`;
    };

    const simulateTypingDelay = async (length) => {
        const baseDelay = 500;
        const charsPerSecond = 20;
        const delay = Math.min(
            baseDelay + (length / charsPerSecond) * 1000,
            3000 // Maximum 3 seconds delay
        );
        return new Promise(resolve => setTimeout(resolve, delay));
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = { role: 'user', content: inputMessage };
        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        try {
            const systemPrompt = generateSystemPrompt(messages);
            const response = await invokeAIAgent(systemPrompt, inputMessage);
            
            // Simulate natural typing delay
            await simulateTypingDelay(response.length);
            
            const assistantMessage = { role: 'assistant', content: response };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: 'I apologize, but I encountered an error. Please try again or contact our support team directly at support@somnium.com' 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div data-name="chatbot" className="fixed bottom-6 right-6 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                    <i className="fas fa-comments text-xl"></i>
                    <span className="hidden md:inline">Chat with us</span>
                </button>
            ) : (
                <div className="bg-white rounded-lg shadow-2xl w-80 max-h-[500px] flex flex-col">
                    <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <i className="fas fa-robot"></i>
                            <div>
                                <span className="font-semibold block text-sm">Somnium Assistant</span>
                                <span className="text-xs text-blue-200">Online | Typically replies instantly</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-3 space-y-3" ref={chatContainerRef}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-2 rounded-lg ${
                                        message.role === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    } ${message.role === 'assistant' ? 'flex items-start gap-2' : ''}`}
                                >
                                    {message.role === 'assistant' && (
                                        <i className="fas fa-robot mt-1"></i>
                                    )}
                                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-800 p-2 rounded-lg flex items-center gap-2">
                                    <i className="fas fa-robot"></i>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    
                    <div className="p-3 border-t">
                        <div className="flex gap-2">
                            <textarea
                                rows="1"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-600 resize-none text-gray-800 text-sm"
                                style={{ minHeight: '36px', maxHeight: '100px' }}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isTyping || !inputMessage.trim()}
                                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            Press Enter to send
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
