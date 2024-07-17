import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import Modal from "@/components/ui/Modal";
import { useAddSkillMutation } from "@/redux/features/admin/skillManagementApi";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const AddSkillModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addSkill, { isLoading }] = useAddSkillMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await addSkill(data);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Skill added successfully.");
      }
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Skill added Failed.");
    }
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add New Skill
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add New Skill">
        <MForm onSubmit={handleSubmit}>
          <MInput name="name" type="text" label="Skill Name" required />
          <MInput
            name="proficiencyLevel"
            type="text"
            label="Proficiency Level"
            required
          />
          <MInput name="category" type="text" label="Category" required />

          {isLoading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 "
            >
              {isLoading ? "Adding New Skill..." : "Add New Skill"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled"
            >
              Add New Skill
            </button>
          )}
        </MForm>
      </Modal>
    </div>
  );
};

export default AddSkillModal;
