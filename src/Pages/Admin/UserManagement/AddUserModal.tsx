import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const AddUserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [addUser, { isLoading }] = useAddUserMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      // const res = await addUser(data);
      // if (res?.data?.success) {
      //   toast.success(res?.data?.message || "User added successfully.");
      // }
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("User added Failed.");
    }
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add New User
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add New User">
        <MForm onSubmit={handleSubmit}>
          <MInput name="name" type="text" label="User Name" required />
          <MInput
            name="proficiencyLevel"
            type="text"
            label="Proficiency Level"
            required
          />
          <MInput name="category" type="text" label="Category" required />

          {/* {isLoading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 "
            >
              {isLoading ? "Adding New User..." : "Add New User"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled"
            >
              Add New User
            </button>
          )} */}
        </MForm>
      </Modal>
    </div>
  );
};

export default AddUserModal;
