import { useRef } from "react";

export default function ChatInput({ value, onChange, onSend, loading, feature, isMobile }) {
  const textareaRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onSend(); }
  };

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, isMobile ? 100 : 140) + "px";
  };

  const canSend = value.trim() && !loading;

  return (
    <div style={{ padding: isMobile ? "10px 14px 16px" : "16px 24px 24px", background: "#0d0d1a", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "flex-end", background: "rgba(255,255,255,0.05)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: isMobile ? "8px 12px" : "10px 14px" }}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            placeholder={feature.placeholder}
            rows={1}
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#e8e8f0", fontSize: isMobile ? 14 : 14.5, resize: "none", fontFamily: "'Outfit', sans-serif", lineHeight: 1.6, maxHeight: isMobile ? 100 : 140, overflowY: "auto", scrollbarWidth: "none", padding: 0 }}
          />
          <button onClick={onSend} disabled={!canSend}
            style={{ width: isMobile ? 34 : 38, height: isMobile ? 34 : 38, borderRadius: 10, background: canSend ? feature.accent : "rgba(255,255,255,0.1)", border: "none", cursor: canSend ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={canSend ? "#fff" : "#666"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        {!isMobile && (
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11.5, textAlign: "center", marginTop: 10, marginBottom: 0 }}>
            Press Enter to send · Shift+Enter for new line
          </p>
        )}
      </div>
    </div>
  );
}
