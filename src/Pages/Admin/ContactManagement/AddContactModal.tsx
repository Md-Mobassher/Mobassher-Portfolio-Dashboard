import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useAddContactMutation } from "@/redux/features/admin/contactManagementApi";

const AddContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addContact, { isLoading }] = useAddContactMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      const res = await addContact(data);
      console.log(res);

      toast.success(res?.data?.message || "Contact added successfully.");

      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Contact added Failed.");
    }
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Create New Contact
      </button>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create New Contact"
      >
        <MForm onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-5">
            <MInput name="name" type="text" label="Name" required />
            <MInput name="email" type="email" label="Email" required />
            <MInput name="subject" type="text" label="Subject" required />
            <MInput name="message" type="text" label="Message" required />
          </div>

          {isLoading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10"
            >
              {isLoading ? "Adding New Contact..." : "Add New Contact"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add New Contact
            </button>
          )}
        </MForm>
      </FullScreenModal>
    </div>
  );
};

export default AddContactModal;
