/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateAProjectMutation } from "@/redux/features/admin/projectManagemetApi";
import FullScreenModal from "@/components/ui/FullScreenModal";

interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  console.log(project);
  const [updateProject, { isLoading }] = useUpdateAProjectMutation();

  useEffect(() => {
    console.log("Selected Project:", project);
  }, [project]);

  const handleSubmit = async (data: FieldValues) => {
    const id = project._id;
    const updatedData = {
      name: data.name,
      proficiencyLevel: data.proficiencyLevel,
      category: data.category,
    };

    console.log(id);
    console.log(updatedData);
    try {
      const res = await updateProject({ id, updatedData });
      if (res?.data?.success) {
        toast.success("Project updated successfully.");
      }
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Project update Failed.");
    }
  };

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose} title="Edit Project">
      <MForm onSubmit={handleSubmit} defaultValues={project}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5">
          <MInput name="name" type="text" label="Project Name" required />
          <MInput name="type" type="text" label="Project Type" required />
          {/* <MInput
            name="description"
            type="text"
            label="Project Description"
            required
          /> */}
          <MInput
            name="technology"
            type="text"
            label="Used Technologies"
            required
          />
          <MInput name="liveUrl" type="text" label="Live URL" required />
          <MInput name="clientUrl" type="text" label="Client Side Code URL" />
          <MInput name="serverUrl" type="text" label="Server Side Code URL" />
          <MInput name="image.cover" type="file" label="Select Cover Image" />
          <MInput name="image.landing" type="file" label="Select Full Image" />
        </div>

        {isLoading ? (
          <button
            disabled
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex justify-between"
          >
            {isLoading ? "Adding New Project..." : "Add New Project"}
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled"
          >
            Add New Project
          </button>
        )}
      </MForm>
    </FullScreenModal>
  );
};

export default EditProjectModal;
