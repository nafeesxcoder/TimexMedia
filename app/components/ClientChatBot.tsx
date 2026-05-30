"use client";

import dynamic from "next/dynamic";

// Dynamically import ChatBot with ssr: false in Client Component
const ChatBot = dynamic(() => import("./ChatBot"), {
  ssr: false,
});

export default function ClientChatBot() {
  return <ChatBot />;
}
