import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Button from "../interactives/Button";
import { MoveRight } from "lucide-react";

export default function IconFeatureCard(props) {
  const {
    icon,
    title,
    paragraph,
    className,
    children,
    modalTitle,
    modalContent,
  } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`w-full tablet1:min-h-[300px] p-0 tablet1:w-[290px] mt-[36px] tablet1:mt-0 desktop1:w-[260px] desktop1:h-[350px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-secondary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%] pb-4">
        {paragraph}
      </p>

      {/* Botão que abre modal, só aparece se tiver conteúdo de modal */}
      {modalContent && (
        <Button
          className="mt-[8px]"
          label="Saiba mais"
          onClick={() => setVisible(true)}
          removeAnchor
          removeTarget
          animation
          icon={<MoveRight />}
        />
      )}

      {children}

      {/* Modal */}
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "30vw" }}
        breakpoints={{ "2000px": "40vw", "1024px": "50vw", "641px": "85vw" }}
      >
        <div className="text-paragraph3">{modalContent}</div>
      </Dialog>
    </div>
  );
}
