/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import Modal from "@/components/ui/Modal";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateAUserMutation } from "@/redux/features/admin/adminManagementApi";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const [updateUser, { isLoading }] = useUpdateAUserMutation();

  useEffect(() => {
    console.log("Selected User:", user);
  }, [user]);

  const handleSubmit = async (data: FieldValues) => {
    const id = user._id;
    const updatedData = {
      name: data.name,
      proficiencyLevel: data.proficiencyLevel,
      category: data.category,
    };

    // console.log(id);
    // console.log(updatedData);
    try {
      const res = await updateUser({ id, updatedData });
      if (res?.data?.success) {
        toast.success("User updated successfully.");
      }
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("User update Failed.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit User">
      <MForm onSubmit={handleSubmit} defaultValues={user}>
        <MInput name="name" type="text" label="User Name" required />
        <MInput
          name="proficiencyLevel"
          type="text"
          label="Proficiency Level"
          required
        />
        <MInput name="category" type="text" label="Category" required />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Edit User"}
        </button>
      </MForm>
    </Modal>
  );
};

export default EditUserModal;
