"use client";

import { useState, useRef, useEffect } from "react";
import { Card, Button } from "@/components/ui";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What stocks should I invest in?",
  "Explain dollar cost averaging",
  "Is now a good time to buy crypto?",
  "What is a Pre-IPO investment?",
];

export default function AIAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm your AI investment advisor. I can help you understand different investment options, explain strategies, and provide general guidance. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in production, this would call an API)
    setTimeout(() => {
      const responses: Record<string, string> = {
        "What stocks should I invest in?":
          "Diversification is key! Consider a mix of growth stocks (like tech companies), value stocks, and dividend stocks. Popular choices on xStocks include NVDA, AAPL, MSFT, and GOOGL. Remember to research each company and consider your risk tolerance.",
        "Explain dollar cost averaging":
          "Dollar Cost Averaging (DCA) is an investment strategy where you invest a fixed amount regularly, regardless of the asset's price. This helps reduce the impact of volatility and removes the stress of trying to 'time the market'. You can set up recurring buys on xStocks!",
        "Is now a good time to buy crypto?":
          "Timing the market is extremely difficult. Instead of trying to find the 'perfect' time, consider: 1) Only invest what you can afford to lose, 2) Use dollar-cost averaging, 3) Diversify across different assets. Crypto is volatile, so a long-term perspective is often beneficial.",
        "What is a Pre-IPO investment?":
          "Pre-IPO investments let you buy shares in private companies before they go public. On xStocks, these are backed by Special Purpose Vehicles (SPVs) that hold actual equity. Examples include SpaceX, Stripe, and OpenAI. These are higher risk but offer potential for significant returns if the company succeeds.",
      };

      const response =
        responses[messageText] ||
        "That's a great question! While I can provide general investment education, I recommend doing your own research and possibly consulting with a financial advisor for personalized advice. Would you like me to explain any specific investment concept?";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto flex flex-col h-[calc(100vh-8rem)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-primary-600 text-white"
                  : "bg-white border border-surface-200"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-surface-200 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-surface-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-surface-400 rounded-full animate-bounce delay-100" />
                <span className="w-2 h-2 bg-surface-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions (only show if few messages) */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-surface-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs bg-surface-100 hover:bg-surface-200 text-surface-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-surface-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about investments..."
            className="flex-1 px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </Button>
        </form>
        <p className="text-xs text-surface-500 text-center mt-2">
          AI responses are for educational purposes only, not financial advice.
        </p>
      </div>
    </div>
  );
}
