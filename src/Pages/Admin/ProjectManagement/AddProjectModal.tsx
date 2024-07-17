import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { useAddProjectMutation } from "@/redux/features/admin/projectManagemetApi";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addProject, { isLoading }] = useAddProjectMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    // console.log(data);
    data.description = data.description.split(",");
    data.technology = data.technology.split(",");
    // console.log(data);

    data.image.cover = await uploadImageToCloudinary(data?.image?.cover);
    data.image.landing = await uploadImageToCloudinary(data?.image?.landing);

    try {
      const res = await addProject(data);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Project added successfully.");
      }
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Project added Failed.");
    }
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add New Project
      </button>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add New Project"
      >
        <MForm onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5">
            <MInput name="name" type="text" label="Project Name" required />
            <MInput name="type" type="text" label="Project Type" required />
            <MInput
              name="description"
              type="text"
              label="Project Description"
              required
            />
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
            <MInput
              name="image.landing"
              type="file"
              label="Select Full Image"
            />
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
    </div>
  );
};

export default AddProjectModal;
