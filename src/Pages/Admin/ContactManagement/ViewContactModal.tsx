import React, { useEffect } from "react";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { TContact } from "@/type/type";

interface ViewContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: TContact;
}

const ViewContactModal: React.FC<ViewContactModalProps> = ({
  isOpen,
  onClose,
  contact,
}) => {
  useEffect(() => {
    console.log("Selected Contact:", contact);
  }, [contact]);

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose} title="Contact Details">
      <div>
        <h3 className="text-lg mb-2">
          <span className="text-green-500 font-semibold"> Name :</span>{" "}
          {contact?.name || ""}
        </h3>
        <h3 className="text-lg mb-5">
          <span className="text-green-500 font-semibold"> Email :</span>{" "}
          <span className="text-lg font-semibold"> {contact?.email || ""}</span>
        </h3>
        <h3 className="text-lg font-semibold mb-5">
          <span className="text-green-500"> Subject :</span>{" "}
          <span className="text-xl"> {contact?.subject || ""}</span>
        </h3>
        <h3 className="text-lg mb-5 text-justify ">
          <span className="text-green-500 font-semibold"> Message :</span>{" "}
          {contact?.message || ""}
        </h3>
      </div>
    </FullScreenModal>
  );
};

export default ViewContactModal;
