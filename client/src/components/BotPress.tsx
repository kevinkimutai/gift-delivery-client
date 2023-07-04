import React, { useEffect } from "react";

const BotpressWebChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      //@ts-ignore
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with bot",
        botConversationDescription:
          "This chatbot was built surprisingly fast with Botpress",
        botId: "f41b0c66-f5ce-4ffd-afd3-e4add2d10406",
        hostUrl: "https://cdn.botpress.cloud/webchat/v0",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "f41b0c66-f5ce-4ffd-afd3-e4add2d10406",
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="botpress-webchat" />;
};

export default BotpressWebChat;
