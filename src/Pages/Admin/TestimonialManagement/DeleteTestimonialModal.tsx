import Modal from "@/components/ui/Modal";
import { FC } from "react";

interface DeleteTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteTestimonialModal: FC<DeleteTestimonialModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Deletion">
      <p>Are you sure, you want to delete this Testimonial?</p>
      <div className="flex gap-5 mt-5">
        <button
          onClick={onConfirm}
          className="text-white bg-red-600 rounded-lg px-5 py-2"
        >
          Confirm
        </button>
        <button
          onClick={onClose}
          className="text-white bg-green-500 rounded-lg px-5 py-2"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteTestimonialModal;
