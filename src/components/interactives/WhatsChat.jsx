import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/favico/android-icon-192x192.png";
import "../../../src/index.css";
import { infos } from "../../content/content";

const whatsNumber = `${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}`;

export default function WhatsChat() {
  return (
    <div>
      <FloatingWhatsApp
        status="w-3"
        chatboxHeight="auto"
        phoneNumber={whatsNumber}
        notification={true}
        notificationDelay={5}
        notificationLoop={2}
        accountName={infos.name}
        avatar={imgProfilePicture}
        initialMessageByServer={infos.whatsChatDefaultMessage}
        initialMessageByClient={infos.whatsappDefaultMessage}
        statusMessage="Disponível"
        startChatText="Falar no whatsapp"
        // tooltipText={
        //   <p className="text-paragraph4">
        //     Disponível <strong>24h</strong>
        //   </p>
        // }
        allowEsc={true}
        className=""
      />
    </div>
  );
}
