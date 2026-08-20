"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, ArrowUp, GraduationCap, User } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  chips?: readonly { label: string; action: string }[];
};

const QUICK_CHIPS = [
  { label: "📅 Admission Procedure", action: "admissions" },
  { label: "🏫 Our Campus", action: "campus" },
  { label: "📝 Latest Notices", action: "notices" },
  { label: "💼 Career Openings", action: "careers" },
  { label: "🎓 Alumni Request", action: "alumni" },
  { label: "🔑 Access Portal", action: "portal" },
] as const;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgIdCounter = useRef(0);

  // Initialize with greeting
  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: "Hello! Welcome to Playpen School. I am your navigation assistant. Click any of the options below or ask a question to find what you need!",
          timestamp: new Date(),
          chips: QUICK_CHIPS,
        },
      ]);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getBotResponse = (input: string, action?: string): string => {
    if (action) {
      switch (action) {
        case "admissions":
          return "Playpen follows a structured application timeline. Check out step-by-step instructions, uniforms, and conduct guidelines on our [Admission Procedure](/admissions/admission-procedure) page. You can also start an application via [Apply Online](/admissions/apply).";
        case "campus":
          return "Our campus features modern classroom spaces, research libraries, and specialized science/ICT labs. Check out photos and facilities details on our [Our Campus](/about/our-campus) page.";
        case "notices":
          return "Stay up to date with official school circulars, announcements, and board updates on our live [Notices](/notices) board.";
        case "careers":
          return "Looking to join our academic team? View available vacancies, qualifications, and instructions on our [Careers at Playpen](/about/career-at-playpen) page.";
        case "alumni":
          return "Are you a former student? Join the community by submitting a registration form on the [Alumni Association](/about/playpen-alumni-association) portal page.";
        case "portal":
          return "Access secure accounts for staff, parents, or students. Head over to our main [Portal Entrance](/portal) to sign in.";
        default:
          break;
      }
    }

    const query = input.toLowerCase().trim();

    if (/\b(admission|admit|apply|fee|cost|register)\b/.test(query)) {
      return "For application timelines, uniform policies, and details, check our [Admission Procedure](/admissions/admission-procedure) page. Ready to register? Go to [Apply Online](/admissions/apply).";
    }
    if (/\b(campus|facility|location|address|map|contact|phone|email|number)\b/.test(query)) {
      return "To see our facilities or get our phone and email contacts, visit the [Our Campus](/about/our-campus) section.";
    }
    if (/\b(notice|news|announcement|circular)\b/.test(query)) {
      return "All official circulars and updates are published instantly to the [Notices](/notices) page.";
    }
    if (/\b(career|job|work|teacher|vacancy|vacancies)\b/.test(query)) {
      return "Check out active job listings and join our faculty via the [Careers](/about/career-at-playpen) board.";
    }
    if (/\b(alumni|graduate|reunion|old student)\b/.test(query)) {
      return "We welcome all former graduates to register and connect. Submit your details at [Alumni Association](/about/playpen-alumni-association).";
    }
    if (/\b(portal|login|signin|dashboard|admin|parent|student)\b/.test(query)) {
      return "Access student grades, attendance, and administrative panels at the secure [Portal Entrance](/portal).";
    }
    if (/\b(hi|hello|hey|greetings|support|help)\b/.test(query)) {
      return "Hello! I can help you navigate. Ask about admissions, notices, campus details, careers, or student/parent portals!";
    }

    return "I couldn't quite map that request. I am a navigation assistant. Try clicking one of the quick options below, or visit key pages like [Academics](/academics), [Admissions](/admissions), [Student Life](/student-life), or [Notices](/notices).";
  };

  const handleSend = (text: string, action?: string) => {
    if (!text.trim() && !action) return;

    // 1. Append user message
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

    // 2. Simulate bot delay
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
          // Show chips again on fallback or helper suggestions
          chips: action ? undefined : QUICK_CHIPS,
        },
      ]);
      setIsTyping(false);
    }, 600);
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
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:text-primary-light hover:decoration-primary"
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
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_30px_rgba(128,0,0,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-primary-dark border border-white/10"
        aria-label="Toggle assistant chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Popover Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[550px] w-[380px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-300 animate-in slide-in-from-bottom-5 fade-in sm:h-[600px] sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-4 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <GraduationCap className="h-5 w-5 text-accent" strokeWidth={2} />
              </div>
              <div>
                <p className="font-serif text-sm font-bold tracking-wide">Playpen Navigator</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider">Assistant Online</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto bg-muted/20 p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 items-start ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                  msg.sender === "bot" ? "bg-primary/10 text-primary border border-primary/10" : "bg-primary text-white"
                }`}>
                  {msg.sender === "bot" ? <GraduationCap className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>

                <div className="space-y-2 max-w-[80%]">
                  <div className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.sender === "bot"
                      ? "bg-white text-foreground rounded-tl-sm border border-border/50"
                      : "playpen-bg text-white rounded-tr-sm"
                  }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{renderMessageText(msg.text)}</p>
                  </div>

                  {/* Rendering Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {msg.chips.map((chip) => (
                        <button
                          key={chip.action}
                          type="button"
                          onClick={() => handleSend(chip.label, chip.action)}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary active:scale-95"
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/10">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm rounded-tl-sm border border-border/50 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }}
            className="border-t border-border bg-white p-3 flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me something..."
              className="flex-1 rounded-xl border border-border/70 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground/60"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition hover:bg-primary-dark disabled:bg-muted disabled:text-muted-foreground/45 border border-white/5 active:scale-95"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
