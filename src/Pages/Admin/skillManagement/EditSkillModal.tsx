/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import Modal from "@/components/ui/Modal";
import { useUpdateASkillMutation } from "@/redux/features/admin/skillManagementApi";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

interface EditSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: any;
}

const EditSkillModal: React.FC<EditSkillModalProps> = ({
  isOpen,
  onClose,
  skill,
}) => {
  const [updateSkill, { isLoading }] = useUpdateASkillMutation();

  useEffect(() => {
    console.log("Selected skill:", skill);
  }, [skill]);

  const handleSubmit = async (data: FieldValues) => {
    const id = skill._id;
    const updatedData = {
      name: data.name,
      proficiencyLevel: data.proficiencyLevel,
      category: data.category,
    };

    console.log(id);
    console.log(updatedData);
    try {
      await updateSkill({ id, updatedData });
      toast.success("Skill updated successfully.");
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Skill update Failed.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Skill">
      <MForm onSubmit={handleSubmit} defaultValues={skill}>
        <MInput name="name" type="text" label="Skill Name" required />
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
          {isLoading ? "Updating..." : "Edit Skill"}
        </button>
      </MForm>
    </Modal>
  );
};

export default EditSkillModal;
