import { GLOBAL_KEYFRAMES } from "../styles/globals";
import ChatWindow from "../components/chat/ChatWindow";

export default function ChatPage({ feature, onBack }) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <style>{GLOBAL_KEYFRAMES}</style>
      <ChatWindow feature={feature} onBack={onBack} />
    </div>
  );
}