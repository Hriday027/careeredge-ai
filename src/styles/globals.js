// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL STYLE TOKENS
// ─────────────────────────────────────────────────────────────────────────────

export const COLORS = {
  bgBase: "#08080f",
  bgChat: "#0a0a0f",
  bgChatInput: "#0d0d1a",
  surface: "rgba(255,255,255,0.03)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.15)",
  textPrimary: "#f0f0ff",
  textSecondary: "#e8e8f0",
  textMuted: "rgba(255,255,255,0.45)",
  textFaint: "rgba(255,255,255,0.25)",
  primaryGradient: "linear-gradient(135deg, #7c6ef5, #2dd4a0)",
  primaryAccent: "#7c6ef5",
  secondaryAccent: "#2dd4a0",
};

export const FONT = "'Outfit', sans-serif";

export const GLOBAL_KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; }
  body { background: #08080f; font-family: 'Outfit', sans-serif; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 4px; }
  textarea::placeholder { color: rgba(255,255,255,0.3); }
  button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
  @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
  @keyframes bounce { 0%,80%,100%{transform:scale(0.8);opacity:0.4;} 40%{transform:scale(1);opacity:1;} }
  @keyframes fadeSlideUp { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
  @keyframes slideDown { from{opacity:0;transform:translateY(-10px);} to{opacity:1;transform:translateY(0);} }
`;
