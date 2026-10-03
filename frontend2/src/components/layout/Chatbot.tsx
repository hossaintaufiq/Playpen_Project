"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, ArrowUp, GraduationCap, User, Sparkles } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  chips?: readonly { label: string; action: string }[];
};

const QUICK_CHIPS = [
  { label: "📅 Admission Procedure", action: "admissions" },
  { label: "🏫 Campus Facilities", action: "campus" },
  { label: "📝 Latest Notices", action: "notices" },
  { label: "💼 Career Openings", action: "careers" },
  { label: "🎓 Alumni Association", action: "alumni" },
  { label: "🔑 Access Portal", action: "portal" },
] as const;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgIdCounter = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: "Welcome to Playpen School. I am your academic navigator. Choose an option below or type your inquiry to find verified school information.",
          timestamp: new Date(),
          chips: QUICK_CHIPS,
        },
      ]);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getBotResponse = (input: string, action?: string): string => {
    if (action) {
      switch (action) {
        case "admissions":
          return "Playpen admissions are open for Playgroup through A-Levels. Check out criteria and tuition schedules on our [Admission Procedure](/admissions/admission-procedure) page or complete the [Online Application](/admissions/apply).";
        case "campus":
          return "Our 10-storey purpose-built facility features advanced science & ICT labs, central library, and athletic grounds. Discover photos on our [Our Campus](/about/our-campus) page.";
        case "notices":
          return "Access official school bulletins and examination circulars on the live [Notices](/notices) desk.";
        case "careers":
          return "Interested in joining our academic faculty? Browse open teaching vacancies at [Careers at Playpen](/about/career-at-playpen).";
        case "alumni":
          return "Playpen alumni can submit their verified directory registration at [Alumni Association](/about/playpen-alumni-association).";
        case "portal":
          return "Access the student/parent services at [Playpen Portal](https://portal.playpen.edu.bd/) or log into the [Admin Panel](/portal/admin).";
        default:
          break;
      }
    }

    const query = input.toLowerCase().trim();

    if (/\b(admission|admit|apply|fee|cost|register)\b/.test(query)) {
      return "For application requirements and fee schedules, visit [Admission Procedure](/admissions/admission-procedure). To apply directly, visit [Apply Online](/admissions/apply).";
    }
    if (/\b(campus|facility|location|address|map|contact|phone|email|number)\b/.test(query)) {
      return "To explore facilities and contact details, visit [Our Campus](/about/our-campus).";
    }
    if (/\b(notice|news|announcement|circular)\b/.test(query)) {
      return "All official circulars are published at [Notices](/notices).";
    }
    if (/\b(career|job|work|teacher|vacancy|vacancies)\b/.test(query)) {
      return "View current faculty openings at [Careers](/about/career-at-playpen).";
    }
    if (/\b(alumni|graduate|reunion|old student)\b/.test(query)) {
      return "Graduates can register at [Alumni Association](/about/playpen-alumni-association).";
    }
    if (/\b(portal|login|signin|dashboard|admin|parent|student)\b/.test(query)) {
      return "Log into administrative or student services at the [Portal Page](/portal).";
    }

    return "I am a navigation assistant for Playpen School. Explore key sections like [Academics](/academics), [Admissions](/admissions), [Student Life](/student-life), or [Notices](/notices).";
  };

  const handleSend = (text: string, action?: string) => {
    if (!text.trim() && !action) return;

    msgIdCounter.current += 1;
    const userMsgId = `user-${msgIdCounter.current}`;
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: "user",
        text: action ? QUICK_CHIPS.find((c) => c.action === action)?.label || text : text,
        timestamp: new Date(),
      },
    ]);

    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(text, action);
      msgIdCounter.current += 1;
      const botMsgId = `bot-${msgIdCounter.current}`;
      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          sender: "bot",
          text: responseText,
          timestamp: new Date(),
          chips: action ? undefined : QUICK_CHIPS,
        },
      ]);
      setIsTyping(false);
    }, 500);
  };

  const renderMessageText = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [, linkText, href] = match;
      const matchIndex = match.index;

      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex));
      }

      parts.push(
        <Link
          key={href + matchIndex}
          href={href}
          onClick={() => setIsOpen(false)}
          className="font-bold text-[#6b0c26] underline underline-offset-2 hover:text-[#121212]"
        >
          {linkText}
        </Link>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      {/* Floating Brutalist Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border-2 border-[#121212] bg-[#d97706] text-[#121212] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all cursor-pointer"
        aria-label="Toggle assistant chat"
      >
        {isOpen ? <X className="h-6 w-6 text-[#121212]" /> : <MessageCircle className="h-6 w-6 text-[#121212]" />}
      </button>

      {/* Chat Popover Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[550px] w-[380px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] flex-col overflow-hidden border-3 border-[#121212] bg-[#faf7f2] shadow-[8px_8px_0px_#121212] sm:h-[580px] sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#6b0c26] px-4 py-3.5 text-white border-b-2 border-[#121212]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-white bg-[#ffffff] text-[#6b0c26] shadow-[2px_2px_0px_#000000]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm uppercase tracking-wide">Playpen Navigator</p>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#d97706]">
                  <span className="h-2 w-2 bg-[#d97706] rounded-full animate-pulse" />
                  <span>ONLINE // ACADEMIC DESK</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-white hover:text-[#d97706]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#faf7f2]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 items-start ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center font-mono text-xs font-bold border border-[#121212] ${
                  msg.sender === "bot" ? "bg-[#ffffff] text-[#6b0c26]" : "bg-[#6b0c26] text-white"
                }`}>
                  {msg.sender === "bot" ? "PS" : "U"}
                </div>

                <div className="space-y-2 max-w-[82%]">
                  <div className={`p-3.5 text-xs font-sans border-2 border-[#121212] leading-relaxed ${
                    msg.sender === "bot"
                      ? "bg-[#ffffff] text-[#121212] shadow-[3px_3px_0px_#121212]"
                      : "bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212]"
                  }`}>
                    <p className="whitespace-pre-wrap">{renderMessageText(msg.text)}</p>
                  </div>

                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.chips.map((chip) => (
                        <button
                          key={chip.action}
                          type="button"
                          onClick={() => handleSend(chip.label, chip.action)}
                          className="font-mono text-[11px] font-bold border border-[#121212] bg-[#ffffff] text-[#121212] px-2.5 py-1 hover:bg-[#6b0c26] hover:text-white shadow-[2px_2px_0px_#121212] transition-all cursor-pointer"
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-start">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center font-mono text-xs font-bold border border-[#121212] bg-[#ffffff] text-[#6b0c26]">
                  PS
                </div>
                <div className="p-3 bg-[#ffffff] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-[#6b0c26] animate-bounce" />
                  <span className="h-1.5 w-1.5 bg-[#6b0c26] animate-bounce [animation-delay:0.15s]" />
                  <span className="h-1.5 w-1.5 bg-[#6b0c26] animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }}
            className="border-t-2 border-[#121212] bg-[#ffffff] p-2.5 flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about admissions, campus, notices..."
              className="flex-1 font-mono text-xs border border-[#121212] px-3 py-2 focus:outline-none focus:border-[#6b0c26] bg-[#faf7f2]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#121212] bg-[#6b0c26] text-white disabled:opacity-40 hover:bg-[#54081e] cursor-pointer shadow-[2px_2px_0px_#121212]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
