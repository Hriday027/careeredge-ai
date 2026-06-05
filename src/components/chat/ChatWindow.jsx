import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "../ui/TypingIndicator";
import { useIsMobile } from "../../hooks/useMediaQuery";

export default function ChatWindow({ feature, onBack }) {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState([
    { id: 1, role: "bot", text: `Hello! I'm your **${feature.title}** assistant. ${feature.description}\n\nHow can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch(`https://general-runtime.voiceflow.com/state/user/${Date.now()}/interact`, {
        method: "POST",
        headers: { Authorization: feature.voiceflowUrl, "Content-Type": "application/json", versionID: "production" },
        body: JSON.stringify({ action: { type: "text", payload: text } }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const botText = data.filter((d) => d.type === "text" || d.type === "speak")
        .map((d) => d.payload?.message || d.payload?.slate?.content?.[0]?.children?.[0]?.text || "")
        .filter(Boolean).join("\n\n");
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: botText || "I'm processing your request..." }]);
    } catch {
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: `Thanks for your message! Please connect your Voiceflow bot URL for **${feature.title}** in \`src/data/features.js\` to enable live AI responses.` }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "100vh", background: "#0a0a0f", fontFamily: "'Outfit', sans-serif" }}>
      {/* Header */}
      <div style={{ padding: isMobile ? "0 14px" : "0 24px", height: isMobile ? 60 : 72, background: feature.gradient, display: "flex", alignItems: "center", gap: isMobile ? 10 : 16, borderBottom: `1px solid ${feature.accent}30`, flexShrink: 0 }}>
        <button onClick={onBack}
          style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: isMobile ? 32 : 36, height: isMobile ? 32 : 36, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, transition: "background 0.2s", flexShrink: 0 }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}>←</button>

        <span style={{ fontSize: isMobile ? 22 : 28 }}>{feature.icon}</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: isMobile ? 14 : 17, letterSpacing: "-0.02em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{feature.title}</div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 11 : 12 }}>{feature.subtitle}</div>
        </div>

        {/* Tags — hidden on mobile to save space */}
        {!isMobile && (
          <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {feature.tags.map((t) => (
              <span key={t} style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontSize: 11, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.15)", whiteSpace: "nowrap" }}>{t}</span>
            ))}
          </div>
        )}
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: isMobile ? "16px 0" : "24px 0", background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: isMobile ? "0 14px" : "0 24px" }}>
          {messages.map((msg) => <MessageBubble key={msg.id} message={msg} feature={feature} isMobile={isMobile} />)}
          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: feature.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, marginRight: 8, marginTop: 2 }}>{feature.icon}</div>
              <TypingIndicator accent={feature.accent} />
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      <ChatInput value={input} onChange={(e) => setInput(e.target.value)} onSend={sendMessage} loading={loading} feature={feature} isMobile={isMobile} />
    </div>
  );
}
